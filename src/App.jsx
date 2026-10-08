import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import LoginModal from "./components/auth/LoginModal";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Credit from "./pages/Credit";
import Loans from "./pages/Loans";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

import { AuthProvider } from "./context/AuthContext";

function App() {

    return (

        <AuthProvider>

            <Header />

            <Routes>

                {/* PUBLIC PAGE */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* PROTECTED PAGES */}

                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/services"
                    element={
                        <ProtectedRoute>
                            <Services />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/credit"
                    element={
                        <ProtectedRoute>
                            <Credit />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/loans"
                    element={
                        <ProtectedRoute>
                            <Loans />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/career"
                    element={
                        <ProtectedRoute>
                            <Career />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/blog"
                    element={
                        <ProtectedRoute>
                            <Blog />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <ProtectedRoute>
                            <Contact />
                        </ProtectedRoute>
                    }
                />

            </Routes>

            <Footer />

            <LoginModal />

        </AuthProvider>
    );
}

export default App;