import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./index.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";

import { AuthProvider } from "./context/AuthContext";
import LoginModal from "./components/auth/LoginModal";


function App() {

    return (
        <>
            <Header />

            <Home />

            <Footer />

            <LoginModal />
        </>
    );
}


createRoot(
    document.getElementById("root")
).render(

    <StrictMode>

        <AuthProvider>

            <App />

        </AuthProvider>

    </StrictMode>
);