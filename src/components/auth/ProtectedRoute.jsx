import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {

    const {
        user,
        openLoginModal
    } = useAuth();

    const location = useLocation();


    useEffect(() => {

        if (!user) {

            openLoginModal(location.pathname);

        }

    }, [
        user,
        location.pathname,
        openLoginModal
    ]);


    // Login nahi hai
    if (!user) {

        return <Navigate to="/" replace />;

    }


    // Login hai
    return children;
}

export default ProtectedRoute;