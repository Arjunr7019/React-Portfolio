import './App.css';
import Main from './components/Main';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ContactFormContextProvider } from './context/ContactFormContext';
import { PortfolioDataContextProvider } from './context/PortfolioDataContext';
import { AdminAuthContextProvider } from './context/AdminAuthContext';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProtectedRoute from './components/Admin/ProtectedRoute';

function App() {

  return (
    <PortfolioDataContextProvider>
      <AdminAuthContextProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={
              <ContactFormContextProvider>
                <Main />
              </ContactFormContextProvider>
            } />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </HashRouter>
      </AdminAuthContextProvider>
    </PortfolioDataContextProvider>
  );
}

export default App;
