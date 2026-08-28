import { createContext, useState, useCallback } from "react";
import { loginAdmin } from "../services/api";

export const AdminAuthContext = createContext(null);

export const AdminAuthContextProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("adminToken"));

    const login = useCallback(async (username, password) => {
        const data = await loginAdmin(username, password); // throws on 401/error
        localStorage.setItem("adminToken", data.token);
        setToken(data.token);
        return data;
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("adminToken");
        setToken(null);
    }, []);

    return (
        <AdminAuthContext.Provider value={{ isAuthenticated: !!token, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};
