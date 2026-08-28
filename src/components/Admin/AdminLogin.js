import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';
import { toast, Toaster } from 'sonner';
import './Admin.css';

export default function AdminLogin() {
    const { login } = useContext(AdminAuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.username || !form.password) {
            toast.warning('Enter username and password.');
            return;
        }
        setSubmitting(true);
        try {
            await login(form.username, form.password);
            toast.success('Logged in.');
            navigate('/admin');
        } catch (err) {
            toast.error(err.message || 'Login failed.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="admin-login-wrapper d-flex justify-content-center align-items-center">
            <form onSubmit={handleSubmit} className="admin-login-card p-4 rounded-3">
                <h3 className="fw-bold mb-4 text-center">Admin Login</h3>
                <div className="mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={form.username}
                        onChange={(e) => setForm(v => ({ ...v, username: e.target.value }))}
                        autoFocus
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={form.password}
                        onChange={(e) => setForm(v => ({ ...v, password: e.target.value }))}
                    />
                </div>
                <button type="submit" disabled={submitting} className="btn-for-projects w-100">
                    {submitting ? 'Signing in...' : 'Sign in'}
                </button>
            </form>
            <Toaster position="bottom-right" />
        </div>
    );
}
