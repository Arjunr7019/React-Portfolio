import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AdminAuthContext } from '../../context/AdminAuthContext';

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useContext(AdminAuthContext);
    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
}
