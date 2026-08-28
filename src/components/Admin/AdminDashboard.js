import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';
import ProjectsAdmin from './ProjectsAdmin';
import QualificationAdmin from './QualificationAdmin';
import ContactAdmin from './ContactAdmin';
import { Toaster } from 'sonner';
import './Admin.css';

const TABS = [
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
];

export default function AdminDashboard() {
    const { logout } = useContext(AdminAuthContext);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('projects');

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard px-3 px-md-5 py-4">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h2 className="fw-bold m-0">Admin Dashboard</h2>
                <div className="d-flex gap-2">
                    <button className="btn-for-projects-secondary" onClick={() => navigate('/')}>View Site</button>
                    <button className="btn-for-projects-danger" onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <ul className="nav nav-tabs mb-4">
                {TABS.map(tab => (
                    <li className="nav-item" key={tab.id}>
                        <button
                            className={`nav-link ${activeTab === tab.id ? 'active fw-bold' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="admin-panel">
                {activeTab === 'projects' && <ProjectsAdmin />}
                {activeTab === 'education' && <QualificationAdmin />}
                {activeTab === 'contact' && <ContactAdmin />}
            </div>
            <Toaster position="bottom-right" />
        </div>
    );
}
