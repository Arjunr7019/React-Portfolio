// Central place for every call to the backend.
// Base URL comes from .env (REACT_APP_API_BASE_URL) so it's easy to point at
// local dev vs the deployed Render server without touching code.

const BASE_URL = "https://portfolio-server-ngoy.onrender.com/api";

function getToken() {
    return localStorage.getItem("adminToken");
}

async function request(path, { method = "GET", body, auth = false, isFormData = false } = {}) {
    const headers = {};
    // For FormData, the browser sets Content-Type itself (including the
    // multipart boundary) — setting it manually here would break the upload.
    if (!isFormData) headers["Content-Type"] = "application/json";
    if (auth) {
        const token = getToken();
        if (token) headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${BASE_URL}${path}`, {
        method,
        headers,
        body: isFormData ? body : (body ? JSON.stringify(body) : undefined),
    });

    // Try to parse JSON either way so we can surface server error messages.
    let data = null;
    try { data = await response.json(); } catch (e) { /* empty body is fine */ }

    if (!response.ok) {
        const message = (data && (data.message || data.error)) || `Request failed (${response.status})`;
        throw new Error(message);
    }
    return data;
}

// ---- Auth ----
export const loginAdmin = (username, password) =>
    request("/admin/login", { method: "POST", body: { username, password } });

// ---- Projects ----
// Images are stored as binary in MongoDB, not URLs, so create/update send
// multipart/form-data (a File under the "image" field) instead of JSON.
export const fetchProjects = () => request("/projects");
export const createProject = (formData) => request("/projects", { method: "POST", body: formData, auth: true, isFormData: true });
export const updateProject = (id, formData) => request(`/projects/${id}`, { method: "PUT", body: formData, auth: true, isFormData: true });
export const deleteProject = (id) => request(`/projects/${id}`, { method: "DELETE", auth: true });
export const getProjectImageUrl = (id) => `${BASE_URL}/projects/${id}/image`;

// ---- Qualifications (Education) ----
export const fetchQualifications = () => request("/qualifications");
export const createQualification = (q) => request("/qualifications", { method: "POST", body: q, auth: true });
export const updateQualification = (id, q) => request(`/qualifications/${id}`, { method: "PUT", body: q, auth: true });
export const deleteQualification = (id) => request(`/qualifications/${id}`, { method: "DELETE", auth: true });

// ---- Contact Info (single record) ----
export const fetchContactInfo = () => request("/contact-info");
export const updateContactInfo = (info) => request("/contact-info", { method: "PUT", body: info, auth: true });
