import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    // =========================
    // USER
    // =========================

    const [user, setUser] = useState(() => {

        const savedUser = localStorage.getItem("joizone_user");

        return savedUser
            ? JSON.parse(savedUser)
            : null;
    });


    // =========================
    // LOGIN MODAL
    // =========================

    const [showLoginModal, setShowLoginModal] = useState(() => {

        const savedUser = localStorage.getItem("joizone_user");

        return !savedUser;
    });


    // =========================
    // REDIRECT PATH
    // =========================

    const [redirectPath, setRedirectPath] = useState("/");


    // =========================
    // LOGIN
    // =========================

    const login = (userData) => {

        setUser(userData);

        localStorage.setItem(
            "joizone_user",
            JSON.stringify(userData)
        );

        // Login ke baad modal close
        setShowLoginModal(false);
    };


    // =========================
    // LOGOUT
    // =========================

    const logout = () => {

        setUser(null);

        localStorage.removeItem("joizone_user");

        setRedirectPath("/");

        // Logout ke baad login modal open
        setShowLoginModal(true);
    };


    // =========================
    // OPEN LOGIN MODAL
    // =========================

    const openLoginModal = (path = "/") => {

        // User kis page/action par click kiya
        setRedirectPath(path);

        setShowLoginModal(true);
    };


    // =========================
    // CLOSE LOGIN MODAL
    // =========================

    const closeLoginModal = () => {

        setShowLoginModal(false);
    };


    return (
        <AuthContext.Provider
            value={{

                user,

                // Login
                login,

                // Logout
                logout,

                // Modal
                showLoginModal,
                openLoginModal,
                closeLoginModal,

                // Redirect
                redirectPath,
                setRedirectPath,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}