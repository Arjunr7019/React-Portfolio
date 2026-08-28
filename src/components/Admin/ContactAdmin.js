import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { PortfolioDataContext } from '../../context/PortfolioDataContext';
import { updateContactInfo } from '../../services/api';

export default function ContactAdmin() {
    const { contactInfo, refetchContactInfo } = useContext(PortfolioDataContext);
    const [form, setForm] = useState(contactInfo);
    const [saving, setSaving] = useState(false);

    // Keep the form in sync if contactInfo loads/changes after this mounts.
    useEffect(() => { setForm(contactInfo); }, [contactInfo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            toast.warning('Name and email are required.');
            return;
        }
        setSaving(true);
        try {
            await updateContactInfo(form);
            toast.success('Contact info updated.');
            await refetchContactInfo();
        } catch (err) {
            toast.error(err.message || 'Save failed.');
        } finally {
            setSaving(false);
        }
    };

    const field = (label, key, placeholder = '') => (
        <div className="col-md-6">
            <label className="form-label fw-bold">{label}</label>
            <input className="form-control" value={form[key] || ''} placeholder={placeholder}
                onChange={(e) => setForm(v => ({ ...v, [key]: e.target.value }))} />
        </div>
    );

    return (
        <div>
            <h4 className="fw-bold mb-3">Contact Info</h4>
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="row g-3">
                    {field('Name', 'name')}
                    {field('Email', 'email')}
                    {field('Phone', 'phone')}
                    {field('LinkedIn URL', 'linkedin', 'https://linkedin.com/in/...')}
                    {field('Instagram URL', 'instagram', 'https://instagram.com/...')}
                    {field('Twitter/X URL', 'twitter', 'https://twitter.com/...')}
                    {field('GitHub URL', 'github', 'https://github.com/...')}
                </div>
                <div className="mt-3">
                    <button type="submit" disabled={saving} className="btn-for-projects">
                        {saving ? 'Saving...' : 'Save Contact Info'}
                    </button>
                </div>
            </form>
        </div>
    );
}
