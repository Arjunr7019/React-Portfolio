import { createContext, useState, useEffect, useCallback } from "react";
import { fetchProjects, fetchQualifications, fetchContactInfo } from "../services/api";
import { DEFAULT_PROJECTS, DEFAULT_QUALIFICATIONS, DEFAULT_CONTACT_INFO } from "../data/defaults";

export const PortfolioDataContext = createContext(null);

export const PortfolioDataContextProvider = ({ children }) => {
    const [projects, setProjects] = useState(DEFAULT_PROJECTS);
    const [qualifications, setQualifications] = useState(DEFAULT_QUALIFICATIONS);
    const [contactInfo, setContactInfo] = useState(DEFAULT_CONTACT_INFO);
    const [loading, setLoading] = useState(true);

    // If the API is down, or a collection is empty (backend not seeded yet),
    // we keep showing the bundled defaults so the live site never looks broken.
    const loadProjects = useCallback(async () => {
        try {
            const data = await fetchProjects();
            if (Array.isArray(data) && data.length > 0) setProjects(data);
        } catch (e) { console.log("Falling back to default projects:", e.message); }
    }, []);

    const loadQualifications = useCallback(async () => {
        try {
            const data = await fetchQualifications();
            if (Array.isArray(data) && data.length > 0) setQualifications(data);
        } catch (e) { console.log("Falling back to default qualifications:", e.message); }
    }, []);

    const loadContactInfo = useCallback(async () => {
        try {
            const data = await fetchContactInfo();
            if (data && data.email) setContactInfo(data);
        } catch (e) { console.log("Falling back to default contact info:", e.message); }
    }, []);

    useEffect(() => {
        Promise.all([loadProjects(), loadQualifications(), loadContactInfo()]).finally(() => setLoading(false));
    }, [loadProjects, loadQualifications, loadContactInfo]);

    return (
        <PortfolioDataContext.Provider value={{
            projects, qualifications, contactInfo, loading,
            refetchProjects: loadProjects,
            refetchQualifications: loadQualifications,
            refetchContactInfo: loadContactInfo,
        }}>
            {children}
        </PortfolioDataContext.Provider>
    );
};
