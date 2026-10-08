import { Link } from "react-router-dom";

import "./Header.css";

function Header() {

    return (

        <header className="main-header">

            <div className="container">

                <nav className="navbar navbar-expand-lg">

                    {/* LOGO */}

                    <Link
                        className="navbar-brand logo"
                        to="/"
                    >

                        <img
                            src="/image/joiyzone-logo.png"
                            alt="Joizone Logo"
                        />

                    </Link>


                    {/* MOBILE MENU BUTTON */}

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                        <span className="navbar-toggler-icon" />

                    </button>


                    {/* NAVIGATION */}

                    <div
                        className="collapse navbar-collapse"
                        id="mainNavbar"
                    >

                        <ul className="navbar-nav mx-auto align-items-lg-center">


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/"
                                >
                                    Home
                                </Link>

                            </li>


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/about"
                                >
                                    About Us
                                </Link>

                            </li>


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/services"
                                >
                                    Services
                                </Link>

                            </li>


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/credit"
                                >
                                    Credit
                                </Link>

                            </li>


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/loans"
                                >
                                    Loans
                                </Link>

                            </li>


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/career"
                                >
                                    Career
                                </Link>

                            </li>


                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/blog"
                                >
                                    Blog
                                </Link>

                            </li>


                            <li className="nav-item contact-item">

                                <Link
                                    className="contact-btn"
                                    to="/contact"
                                >

                                    Contact Us

                                    <i className="bi bi-arrow-up-right" />

                                </Link>

                            </li>

                        </ul>


                        {/* MOBILE CALL */}

                        <div className="mobile-call-box d-lg-none">

                            <span className="call-label">
                                Talk to an Expert
                            </span>

                            <a href="tel:+919664091789">
                                +91 96640 91789
                            </a>

                        </div>

                    </div>


                    {/* DESKTOP CALL */}

                    <div className="desktop-call-box d-none d-lg-flex">

                        <div className="call-icon">

                            <i className="bi bi-telephone-fill" />

                        </div>


                        <div className="call-content">

                            <span>
                                Talk to an Expert
                            </span>

                            <a href="tel:+919664091789">
                                +91 96640 91789
                            </a>

                        </div>

                    </div>

                </nav>

            </div>

        </header>

    );

}

export default Header;