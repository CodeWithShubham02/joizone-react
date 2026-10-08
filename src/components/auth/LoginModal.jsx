import { useState } from "react";
import { sendOtp } from "../../services/otpService";
import { useAuth } from "../../context/AuthContext";

import "./LoginModal.css";

function LoginModal() {

    const {
        showLoginModal,
        closeLoginModal,
        login,
    } = useAuth();

    const [step, setStep] = useState(1);

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if (!showLoginModal) {
        return null;
    }


    // ==========================================
    // SEND OTP
    // ==========================================

    const handleSendOtp = async () => {

        if (!userId.trim()) {
            setError("Please enter User ID.");
            return;
        }

        if (!password.trim()) {
            setError("Please enter password.");
            return;
        }

        setError("");
        setLoading(true);

        try {

            const response = await sendOtp(
                userId,
                password
            );

            console.log("OTP RESPONSE:", response);

            if (
                response?.success === 1 ||
                response?.success === true ||
                response?.status === 1 ||
                response?.status === "success"
            ) {

                setStep(2);

            } else {

                setError(
                    response?.message ||
                    "Unable to send OTP."
                );
            }

        } catch (error) {

            console.error("OTP ERROR:", error);

            setError(
                "Unable to connect with server."
            );

        } finally {

            setLoading(false);
        }
    };


    // ==========================================
    // VERIFY OTP
    // ==========================================

    const handleVerifyOtp = async () => {

        if (otp.length !== 4) {

            setError("Please enter a valid 4 digit OTP.");

            return;
        }

        setError("");
        setLoading(true);

        try {

            // TEMPORARY TESTING
            // Actual OTP API yaha connect karna hai

            if (otp === "1234") {

                const userData = {
                    userId: userId,
                    loggedIn: true,
                };

                login(userData);

                setStep(1);
                setOtp("");
                setPassword("");
                setError("");

            } else {

                setError("Invalid OTP.");

            }

        } catch (error) {

            console.error(error);

            setError(
                "OTP verification failed."
            );

        } finally {

            setLoading(false);
        }
    };


    // ==========================================
    // CLOSE
    // ==========================================

    const handleClose = () => {

        setStep(1);
        setOtp("");
        setError("");

        closeLoginModal();
    };


    return (
        <div
            className="joizone-login-overlay"
            onMouseDown={(e) => {

                if (
                    e.target === e.currentTarget
                ) {
                    handleClose();
                }

            }}
        >

            <div className="joizone-login-modal">

                {/* =========================
                    CLOSE BUTTON
                ========================== */}

                <button
                    type="button"
                    className="joizone-close-btn"
                    onClick={handleClose}
                    aria-label="Close login"
                >
                    <span>×</span>
                </button>


                {/* =========================
                    TOP BRAND SECTION
                ========================== */}

                <div className="joizone-login-top">

                    <div className="joizone-login-logo">
                        <i
                            className={
                                step === 1
                                    ? "bi bi-person-lock"
                                    : "bi bi-shield-lock"
                            }
                        ></i>
                    </div>

                    <div className="joizone-login-title">

                        <h2>
                            {step === 1
                                ? "Welcome to Joizone"
                                : "Verify Your Account"
                            }
                        </h2>

                        <p>
                            {step === 1
                                ? "Sign in to continue to your account"
                                : "Enter the OTP sent to your WhatsApp"
                            }
                        </p>

                    </div>

                </div>


                {/* =========================
                    STEP INDICATOR
                ========================== */}

                <div className="joizone-steps">

                    <div
                        className={
                            step === 1
                                ? "joizone-step active"
                                : "joizone-step completed"
                        }
                    >

                        <span>
                            {step === 1
                                ? "1"
                                : "✓"
                            }
                        </span>

                        <label>
                            Login
                        </label>

                    </div>


                    <div className="joizone-step-line"></div>


                    <div
                        className={
                            step === 2
                                ? "joizone-step active"
                                : "joizone-step"
                        }
                    >

                        <span>
                            2
                        </span>

                        <label>
                            Verify
                        </label>

                    </div>

                </div>


                {/* =========================
                    BODY
                ========================== */}

                <div className="joizone-login-body">


                    {/* =================================
                        STEP 1
                    ================================== */}

                    {step === 1 && (

                        <>

                            <div className="joizone-info-text">

                                Please enter your registered
                                User ID and password to continue.

                            </div>


                            {/* USER ID */}

                            <div className="joizone-form-group">

                                <label>
                                    User ID
                                </label>

                                <div className="joizone-input-box">

                                    <i className="bi bi-person"></i>

                                    <input
                                        type="text"
                                        placeholder="Enter your User ID"
                                        value={userId}
                                        onChange={(e) => {

                                            setUserId(
                                                e.target.value
                                            );

                                            setError("");

                                        }}
                                    />

                                </div>

                            </div>


                            {/* PASSWORD */}

                            <div className="joizone-form-group">

                                <label>
                                    Password
                                </label>

                                <div className="joizone-input-box">

                                    <i className="bi bi-lock"></i>

                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => {

                                            setPassword(
                                                e.target.value
                                            );

                                            setError("");

                                        }}
                                    />

                                </div>

                            </div>


                            {/* ERROR */}

                            {error && (

                                <div className="joizone-error">

                                    <i className="bi bi-exclamation-circle"></i>

                                    <span>
                                        {error}
                                    </span>

                                </div>

                            )}


                            {/* SEND OTP */}

                            <button
                                type="button"
                                className="joizone-primary-btn"
                                onClick={handleSendOtp}
                                disabled={loading}
                            >

                                {loading ? (

                                    <>
                                        <span className="spinner-border spinner-border-sm"></span>

                                        Sending OTP...
                                    </>

                                ) : (

                                    <>
                                        <i className="bi bi-whatsapp"></i>

                                        Send OTP on WhatsApp

                                        <i className="bi bi-arrow-right"></i>
                                    </>

                                )}

                            </button>

                        </>

                    )}


                    {/* =================================
                        STEP 2
                    ================================== */}

                    {step === 2 && (

                        <>

                            <div className="joizone-otp-box">

                                <div className="joizone-whatsapp-icon">

                                    <i className="bi bi-whatsapp"></i>

                                </div>

                                <div>

                                    <strong>
                                        OTP Sent Successfully
                                    </strong>

                                    <p>
                                        A 4 digit OTP has been
                                        sent to your registered
                                        WhatsApp number.
                                    </p>

                                </div>

                            </div>


                            {/* OTP */}

                            <div className="joizone-form-group">

                                <label>
                                    Enter OTP
                                </label>

                                <input
                                    type="text"
                                    className="joizone-otp-input"
                                    placeholder="0000"
                                    maxLength={4}
                                    inputMode="numeric"
                                    value={otp}
                                    onChange={(e) => {

                                        setOtp(
                                            e.target.value.replace(
                                                /\D/g,
                                                ""
                                            )
                                        );

                                        setError("");

                                    }}
                                />

                            </div>


                            {/* ERROR */}

                            {error && (

                                <div className="joizone-error">

                                    <i className="bi bi-exclamation-circle"></i>

                                    <span>
                                        {error}
                                    </span>

                                </div>

                            )}


                            {/* VERIFY */}

                            <button
                                type="button"
                                className="joizone-primary-btn joizone-verify-btn"
                                onClick={handleVerifyOtp}
                                disabled={loading}
                            >

                                {loading ? (

                                    <>
                                        <span className="spinner-border spinner-border-sm"></span>

                                        Verifying...
                                    </>

                                ) : (

                                    <>
                                        Verify & Continue

                                        <i className="bi bi-check-lg"></i>
                                    </>

                                )}

                            </button>


                            {/* BACK */}

                            <button
                                type="button"
                                className="joizone-back-btn"
                                onClick={() => {

                                    setStep(1);
                                    setOtp("");
                                    setError("");

                                }}
                            >

                                <i className="bi bi-arrow-left"></i>

                                Back to Login

                            </button>

                        </>

                    )}

                </div>


                {/* =========================
                    FOOTER
                ========================== */}

                <div className="joizone-login-footer">

                    <i className="bi bi-shield-check"></i>

                    <span>
                        Your information is securely protected
                    </span>

                </div>

            </div>

        </div>
    );
}

export default LoginModal;