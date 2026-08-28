import React, { useContext, useState } from 'react';
import { toast } from 'sonner';
import { PortfolioDataContext } from '../../context/PortfolioDataContext';
import { createQualification, updateQualification, deleteQualification } from '../../services/api';

const EMPTY_FORM = { degree: '', institution: '', address: '', startYear: '', endYear: '' };

export default function QualificationAdmin() {
    const { qualifications, refetchQualifications } = useContext(PortfolioDataContext);
    const [form, setForm] = useState(EMPTY_FORM);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);

    const startEdit = (q) => {
        setEditingId(q._id || q.id);
        setForm({
            degree: q.degree || '',
            institution: q.institution || '',
            address: q.address || '',
            startYear: q.startYear || '',
            endYear: q.endYear || '',
        });
    };

    const resetForm = () => {
        setEditingId(null);
        setForm(EMPTY_FORM);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.degree || !form.institution || !form.startYear || !form.endYear) {
            toast.warning('Degree, institution and years are required.');
            return;
        }
        setSaving(true);
        try {
            if (editingId) {
                await updateQualification(editingId, form);
                toast.success('Education entry updated.');
            } else {
                await createQualification(form);
                toast.success('Education entry added.');
            }
            await refetchQualifications();
            resetForm();
        } catch (err) {
            toast.error(err.message || 'Save failed.');
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (q) => {
        const id = q._id || q.id;
        if (!window.confirm(`Delete "${q.degree}"?`)) return;
        try {
            await deleteQualification(id);
            toast.success('Deleted.');
            await refetchQualifications();
            if (editingId === id) resetForm();
        } catch (err) {
            toast.error(err.message || 'Delete failed.');
        }
    };

    return (
        <div>
            <h4 className="fw-bold mb-3">{editingId ? 'Edit Education' : 'Add Education'}</h4>
            <form onSubmit={handleSubmit} className="admin-form mb-4">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Degree</label>
                        <input className="form-control" value={form.degree}
                            onChange={(e) => setForm(v => ({ ...v, degree: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Institution</label>
                        <input className="form-control" value={form.institution}
                            onChange={(e) => setForm(v => ({ ...v, institution: e.target.value }))} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label fw-bold">Address</label>
                        <input className="form-control" value={form.address}
                            onChange={(e) => setForm(v => ({ ...v, address: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Start Year</label>
                        <input className="form-control" value={form.startYear}
                            onChange={(e) => setForm(v => ({ ...v, startYear: e.target.value }))} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">End Year</label>
                        <input className="form-control" value={form.endYear}
                            onChange={(e) => setForm(v => ({ ...v, endYear: e.target.value }))} />
                    </div>
                </div>
                <div className="mt-3 d-flex gap-2">
                    <button type="submit" disabled={saving} className="btn-for-projects">
                        {saving ? 'Saving...' : editingId ? 'Update' : 'Add'}
                    </button>
                    {editingId && (
                        <button type="button" className="btn-for-projects-secondary" onClick={resetForm}>Cancel</button>
                    )}
                </div>
            </form>

            <h4 className="fw-bold mb-3">Existing Education ({qualifications.length})</h4>
            <div className="table-responsive">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th>Institution</th>
                            <th>Years</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {qualifications.map((q) => (
                            <tr key={q._id || q.id}>
                                <td>{q.degree}</td>
                                <td>{q.institution}</td>
                                <td>{q.startYear} - {q.endYear}</td>
                                <td className="d-flex gap-2">
                                    <button className="btn-for-projects-secondary" onClick={() => startEdit(q)}>Edit</button>
                                    <button className="btn-for-projects-danger" onClick={() => handleDelete(q)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
