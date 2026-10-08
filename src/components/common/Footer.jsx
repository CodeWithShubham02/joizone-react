import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Footer() {

    const navigate = useNavigate();

    const {
        user,
        openLoginModal
    } = useAuth();


    // =========================
    // PROTECTED LINK HANDLER
    // =========================

    const handleProtectedClick = (path) => {

        // User login nahi hai
        if (!user) {

            openLoginModal(path);

            return;
        }

        // User already login hai
        navigate(path);
    };


    return (
        <footer className="footer">

            <div className="container">

                <div className="row">

                    {/* =========================
                        COMPANY
                    ========================== */}

                    <div className="col-md-4 mb-4">

                        <Link to="/">
                            <img
                                src="/image/joiyzone-logo.png"
                                height={100}
                                width={200}
                                alt="Joizone Logo"
                                className="mb-3"
                            />
                        </Link>

                        <p>
                            Joizone is a trusted credit card sales and
                            financial services platform that partners with
                            banks and financial institutions to help customers
                            find, compare, and apply for credit cards.
                        </p>


                        {/* SOCIAL ICONS */}

                        <div className="social-icons mt-3">

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                F
                            </a>

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                T
                            </a>

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                I
                            </a>

                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                            >
                                L
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        QUICK LINKS
                    ========================== */}

                    <div className="col-md-2 mb-4">

                        <h5>Quick Links</h5>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/about")
                            }
                        >
                            About Us
                        </button>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/career")
                            }
                        >
                            Careers
                        </button>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/blog")
                            }
                        >
                            News & Articles
                        </button>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/legal")
                            }
                        >
                            Legal Notice
                        </button>

                    </div>


                    {/* =========================
                        USEFUL LINKS
                    ========================== */}

                    <div className="col-md-2 mb-4">

                        <h5>Useful Links</h5>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/help")
                            }
                        >
                            Help Center
                        </button>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/contact")
                            }
                        >
                            Contact Us
                        </button>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/faq")
                            }
                        >
                            FAQ
                        </button>


                        <button
                            type="button"
                            className="footer-link"
                            onClick={() =>
                                handleProtectedClick("/community")
                            }
                        >
                            Parent Community
                        </button>

                    </div>


                    {/* =========================
                        CONTACT
                    ========================== */}

                    <div className="col-md-4 mb-4">

                        <h5>Work Hours</h5>

                        <p>
                            ⏰ 10 AM - 6:30 PM, Monday - Saturday
                        </p>


                        <a
                            href="tel:+919664091789"
                            className="call-btn"
                        >
                            📞 CALL US TODAY
                        </a>

                    </div>

                </div>


                {/* =========================
                    FOOTER BOTTOM
                ========================== */}

                <div className="row footer-bottom align-items-center">

                    <div className="col-md-6">

                        © 2026 Joizone. All rights reserved.
                        {" "} - Shubham Gupta

                    </div>


                    <div className="col-md-6 text-md-end">

                        <button
                            type="button"
                            className="footer-bottom-link"
                            onClick={() =>
                                handleProtectedClick("/privacy")
                            }
                        >
                            PRIVACY POLICY
                        </button>


                        <button
                            type="button"
                            className="footer-bottom-link"
                            onClick={() =>
                                handleProtectedClick("/support")
                            }
                        >
                            SUPPORT
                        </button>


                        <button
                            type="button"
                            className="footer-bottom-link"
                            onClick={() =>
                                handleProtectedClick("/terms")
                            }
                        >
                            TERMS & CONDITION
                        </button>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;