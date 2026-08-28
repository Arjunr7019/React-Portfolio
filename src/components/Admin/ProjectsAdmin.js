import React, { useContext, useState, useRef } from 'react';
import { toast } from 'sonner';
import { PortfolioDataContext } from '../../context/PortfolioDataContext';
import { createProject, updateProject, deleteProject, getProjectImageUrl } from '../../services/api';

const EMPTY_FORM = { name: '', link: '', apkFile: false, apkLink: '' };

export default function ProjectsAdmin() {
    const { projects, refetchProjects } = useContext(PortfolioDataContext);
    const [form, setForm] = useState(EMPTY_FORM);
    const [imageFile, setImageFile] = useState(null);       // File selected in this session
    const [imagePreview, setImagePreview] = useState(null);  // local object URL for the picked file
    const [editingId, setEditingId] = useState(null);        // null = "add new" mode
    const [saving, setSaving] = useState(false);
    const fileInputRef = useRef(null);

    const startEdit = (project) => {
        setEditingId(project._id || project.id);
        setForm({
            name: project.name || '',
            link: project.link || '',
            apkFile: !!project.apkFile,
            apkLink: project.apkLink || '',
        });
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const resetForm = () => {
        setEditingId(null);
        setForm(EMPTY_FORM);
        setImageFile(null);
        setImagePreview(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null;
        setImageFile(file);
        setImagePreview(file ? URL.createObjectURL(file) : null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.link) {
            toast.warning('Name and link are required.');
            return;
        }
        if (!editingId && !imageFile) {
            toast.warning('Please choose an image file.');
            return;
        }

        const data = new FormData();
        data.append('name', form.name);
        data.append('link', form.link);
        data.append('apkFile', form.apkFile);
        data.append('apkLink', form.apkLink);
        if (imageFile) data.append('image', imageFile);

        setSaving(true);
        try {
            if (editingId) {
                await updateProject(editingId, data);
                toast.success('Project updated.');
            } else {
                await createProject(data);
                toast.success('Project added.');
            }
            await refetchProjects();
            resetForm();
        } catch (err) {
            toast.error(err.message || 'Save failed.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (project) => {
        const id = project._id || project.id;
        if (!window.confirm(`Delete "${project.name}"?`)) return;
        try {
            await deleteProject(id);
            toast.success('Project deleted.');
            await refetchProjects();
            if (editingId === id) resetForm();
        } catch (err) {
            toast.error(err.message || 'Delete failed.');
        }
    };

    const thumbSrc = (p) => p._id ? getProjectImageUrl(p._id) : p.image;

    return (
        <div>
            <h4 className="fw-bold mb-3">{editingId ? 'Edit Project' : 'Add Project'}</h4>
            <form onSubmit={handleSubmit} className="admin-form mb-4">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Name</label>
                        <input className="form-control" value={form.name}
                            onChange={(e) => setForm(v => ({ ...v, name: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Image {editingId ? '(leave empty to keep current)' : ''}</label>
                        <input type="file" accept="image/*" className="form-control" ref={fileInputRef} onChange={handleFileChange} />
                        {(imagePreview || (editingId && !imageFile)) && (
                            <img
                                src={imagePreview || getProjectImageUrl(editingId)}
                                alt="preview"
                                className="admin-thumb mt-2"
                            />
                        )}
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Project Link</label>
                        <input className="form-control" value={form.link}
                            onChange={(e) => setForm(v => ({ ...v, link: e.target.value }))}
                            placeholder="https://..." />
                    </div>
                    <div className="col-md-6 d-flex align-items-end">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="apkFileCheck"
                                checked={form.apkFile}
                                onChange={(e) => setForm(v => ({ ...v, apkFile: e.target.checked }))} />
                            <label className="form-check-label fw-bold" htmlFor="apkFileCheck">Has APK file</label>
                        </div>
                    </div>
                    {form.apkFile && (
                        <div className="col-md-12">
                            <label className="form-label fw-bold">APK Link</label>
                            <input className="form-control" value={form.apkLink}
                                onChange={(e) => setForm(v => ({ ...v, apkLink: e.target.value }))}
                                placeholder="https://..." />
                        </div>
                    )}
                </div>
                <div className="mt-3 d-flex gap-2">
                    <button type="submit" disabled={saving} className="btn-for-projects">
                        {saving ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
                    </button>
                    {editingId && (
                        <button type="button" className="btn-for-projects-secondary" onClick={resetForm}>Cancel</button>
                    )}
                </div>
            </form>

            <h4 className="fw-bold mb-3">Existing Projects ({projects.length})</h4>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Link</th>
                            <th>APK</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p) => (
                            <tr key={p._id || p.id}>
                                <td><img src={thumbSrc(p)} alt={p.name} className="admin-thumb" /></td>
                                <td>{p.name}</td>
                                <td className="text-truncate" style={{ maxWidth: 200 }}>{p.link}</td>
                                <td>{p.apkFile ? 'Yes' : 'No'}</td>
                                <td className="d-flex gap-2">
                                    <button className="btn-for-projects-secondary" onClick={() => startEdit(p)}>Edit</button>
                                    <button className="btn-for-projects-danger" onClick={() => handleDelete(p)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
