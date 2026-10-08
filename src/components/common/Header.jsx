import './Header.css';
function Header(){
    return(
        <header className="main-header">
  <div className="container">
    <nav className="navbar navbar-expand-lg">
      {/* LOGO */}
      <a className="navbar-brand logo" href="index.html">
        <img src="image/joiyzone-logo.png" alt="Joizone Logo" />
      </a>
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
      <div className="collapse navbar-collapse" id="mainNavbar">
        <ul className="navbar-nav mx-auto align-items-lg-center">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="services.html">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="ourprojects.html">
              Our Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="carrer.html">
              Career
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="blog.html">
              Blog
            </a>
          </li>
          <li className="nav-item contact-item">
            <a className="contact-btn" href="contact.html">
              Contact Us
              <i className="bi bi-arrow-up-right" />
            </a>
          </li>
        </ul>
        {/* MOBILE CALL */}
        <div className="mobile-call-box d-lg-none">
          <span className="call-label">Talk to an Expert</span>
          <a href="tel:+919664091789">+91 96640 91789</a>
        </div>
      </div>
      {/* DESKTOP CALL */}
      <div className="desktop-call-box d-none d-lg-flex">
        <div className="call-icon">
          <i className="bi bi-telephone-fill" />
        </div>
        <div className="call-content">
          <span>Talk to an Expert</span>
          <a href="tel:+919664091789">+91 96640 91789</a>
        </div>
      </div>
    </nav>
  </div>
</header>

    );
}

export default Header;