import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("joizone_user");

        return savedUser
            ? JSON.parse(savedUser)
            : null;
    });

    // Login modal open/close
    const [showLoginModal, setShowLoginModal] = useState(() => {
        const savedUser = localStorage.getItem("joizone_user");

        // Agar already login hai to modal nahi
        return !savedUser;
    });

    const login = (userData) => {

        setUser(userData);

        localStorage.setItem(
            "joizone_user",
            JSON.stringify(userData)
        );

        // Login ke baad modal close
        setShowLoginModal(false);
    };

    const logout = () => {

        setUser(null);

        localStorage.removeItem("joizone_user");

        // Logout ke baad login modal
        setShowLoginModal(true);
    };

    const openLoginModal = () => {
        setShowLoginModal(true);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                showLoginModal,
                openLoginModal,
                closeLoginModal,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}