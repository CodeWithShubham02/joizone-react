import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* COMPANY */}
                    <div className="col-md-4 mb-4">
                        <img
                            src="image/joiyzone-logo.png"
                            height={100}
                            width={200}
                            alt="Joizone Logo"
                            className="mb-3"
                        />
                        <p>
                            Joizone is a trusted credit card sales and financial services platform
                            that partners with banks and financial institutions to help customers
                            find, compare, and apply for credit cards.
                        </p>
                        <div className="social-icons mt-3">
                            <a href="#">F</a>
                            <a href="#">T</a>
                            <a href="#">I</a>
                            <a href="#">L</a>
                        </div>
                    </div>
                    {/* QUICK LINKS */}
                    <div className="col-md-2 mb-4">
                        <h5>Quick Links</h5>
                        <a href="about.html">About Us</a>
                        <a href="carrer.html">Careers</a>
                        <a href="blog.html">News &amp; Articles</a>
                        <a href="#">Legal Notice</a>
                    </div>
                    {/* USEFUL LINKS */}
                    <div className="col-md-2 mb-4">
                        <h5>Useful Links</h5>
                        <a href="#">Help Center</a>
                        <a href="contact.html">Contact Us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Parent Community</a>
                    </div>
                    {/* CONTACT */}
                    <div className="col-md-4 mb-4">
                        <h5>Work Hours</h5>
                        <p>⏰ 10 AM - 6:30 PM, Monday - Saturday</p>
                        <a href="tel:+919664091789" className="call-btn">
                            📞 CALL US TODAY
                        </a>
                    </div>
                </div>
                {/* FOOTER BOTTOM */}
                <div className="row footer-bottom align-items-center">
                    <div className="col-md-6">
                        © 2026 Joizone. All rights reserved. - Shubham Gupta
                    </div>
                    <div className="col-md-6 text-md-end">
                        <a href="#">PRIVACY POLICY</a>
                        <a href="#">SUPPORT</a>
                        <a href="#">TERMS &amp; CONDITION</a>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;