import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <BrowserRouter basename="React-Portfolio">
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
        </BrowserRouter>
      </AdminAuthContextProvider>
    </PortfolioDataContextProvider>
  );
}

export default App;
