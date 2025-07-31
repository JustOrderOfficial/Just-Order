import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("jwt") || "");

    // Load user from localStorage on first load
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Keep localStorage in sync
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }

        if (token) {
            localStorage.setItem("jwt", token);
        } else {
            localStorage.removeItem("jwt");
        }
    }, [user, token]);

    const login = (userData, jwt) => {
        setUser(userData);
        setToken(jwt);
    };

    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        localStorage.removeItem("jwt");
    };

    return (
        <AuthContext.Provider value={{ user, setUser, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
