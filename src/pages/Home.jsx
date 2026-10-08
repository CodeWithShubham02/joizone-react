import { useEffect } from "react";
import './Home.css';

import { initHomeAnimations } from "../js/temp.js";
function Home(){
      useEffect(() => {
        initHomeAnimations();
    }, []);
    return(
      <section>
        <main>
  {/* YAHAN AAPKA CAROUSEL */}
  {/* =====================================================
     BANK PARTNERSHIP HERO
===================================================== */}
  <section className="bank-partner-hero">
    <div className="container">
      <div className="bank-hero-wrapper">
        {/* =================================================
           LEFT CONTENT
      ================================================== */}
        <div className="bank-hero-content">
          <span className="bank-hero-tag">JOIZONE PROGRAM</span>
          <h1>
            Let's Grow Together.
            <span>Partner With Joizone.</span>
          </h1>
          <p className="bank-hero-description">
            Joizone is a trusted financial distribution and technology platform
            helping banks expand their reach, increase card acquisitions, grow
            their business efficiently.
          </p>
          {/* =================================================
               BENEFITS
          ================================================== */}
          <div className="bank-mini-benefits">
            <div className="bank-mini-item">
              <div className="bank-mini-icon">
                <i className="bi bi-diagram-3-fill" />
              </div>
              <h3>Wider Reach</h3>
              <p>Access to our extensive customer network</p>
            </div>
            <div className="bank-mini-item">
              <div className="bank-mini-icon">
                <i className="bi bi-bullseye" />
              </div>
              <h3>Higher Conversions</h3>
              <p>Data-driven process for better approvals</p>
            </div>
            <div className="bank-mini-item">
              <div className="bank-mini-icon">
                <i className="bi bi-shield-check" />
              </div>
              <h3>Secure &amp; Compliant</h3>
              <p>100% compliance with RBI guidelines</p>
            </div>
            <div className="bank-mini-item">
              <div className="bank-mini-icon">
                <i className="bi bi-headset" />
              </div>
              <h3>End-to-End Support</h3>
              <p>From lead to issuance and beyond</p>
            </div>
          </div>
          {/* =================================================
               BUTTONS
          ================================================== */}
          <div className="bank-hero-buttons">
            <a href="contact.html" className="bank-primary-btn">
              Partner With Us
              <i className="bi bi-arrow-right" />
            </a>
            <a href="#" className="bank-secondary-btn">
              Download Partnership Deck
              <i className="bi bi-download" />
            </a>
          </div>
        </div>
        {/* =================================================
           RIGHT VISUAL
      ================================================== */}
        <div className="bank-hero-visual">
          {/* OUTER ROTATING RING */}
          <div className="orbit-ring orbit-ring-1" />
          <div className="orbit-ring orbit-ring-2" />
          {/* ROTATING DOT */}
          <span className="orbit-dot orbit-dot-1" />
          <span className="orbit-dot orbit-dot-2" />
          {/* MAIN IMAGE CIRCLE */}
          <div className="bank-image-circle">
            <img
              src="https://plus.unsplash.com/premium_vector-1682301269255-93ddda750ff8?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Bank Partnership"
            />
          </div>
          {/* =================================================
               FLOATING SERVICE CARD
          ================================================== */}
          <div className="trusted-bank-card">
            <div className="trusted-icon">
              <i className="bi bi-shield-check" />
            </div>
            <h3>
              Trusted by
              <span>Leading Banks</span>
            </h3>
            <ul>
              <li>
                <i className="bi bi-check-circle-fill" />
                Credit Card Sales
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />
                Lead Generation
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />
                Customer Onboarding
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />
                Cross-sell Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* YAHAN INTRO SECTION */}
  {/* =====================================================
     WHY PARTNER WITH JOIZONE
===================================================== */}
  <section className="bank-growth-section">
    <div className="container">
      {/* SECTION HEADING */}
      <div className="bank-section-heading">
        <span className="bank-section-tag">WHY PARTNER WITH JOIZONE?</span>
        <h2>
          A Powerful Platform Built
          <span>for Bank Growth</span>
        </h2>
        <p>
          We combine technology, expertise, and a strong distribution network to
          deliver measurable results for our banking partners.
        </p>
      </div>
      {/* =================================================
       BENEFITS
  ================================================== */}
      <div className="bank-benefits-grid">
        {/* CARD 1 */}
        <div className="bank-benefit-card scroll-left">
          <div className="benefit-icon">
            <i className="bi bi-diagram-3-fill" />
          </div>
          <h3>Extensive Distribution Network</h3>
          <p>
            Access our pan-India network of verified agents, DSAs, and partners.
          </p>
        </div>
        {/* CARD 2 */}
        <div className="bank-benefit-card scroll-right">
          <div className="benefit-icon">
            <i className="bi bi-people-fill" />
          </div>
          <h3>High-Quality Leads</h3>
          <p>Get pre-qualified, consented, and high-intent leads.</p>
        </div>
        {/* CARD 3 */}
        <div className="bank-benefit-card scroll-left">
          <div className="benefit-icon">
            <i className="bi bi-rocket-takeoff-fill" />
          </div>
          <h3>Faster Turnaround</h3>
          <p>Verification process.</p>
        </div>
        {/* CARD 4 */}
        <div className="bank-benefit-card scroll-right">
          <div className="benefit-icon">
            <i className="bi bi-cpu-fill" />
          </div>
          <h3>Advanced Technology</h3>
          <p>Real-time tracking, dashboards, and performance insights.</p>
        </div>
        {/* CARD 5 */}
        <div className="bank-benefit-card scroll-left">
          <div className="benefit-icon">
            <i className="bi bi-shield-check" />
          </div>
          <h3>Regulatory Compliance</h3>
          <p>Fully compliant with RBI guidelines and data security norms.</p>
        </div>
        {/* CARD 6 */}
        <div className="bank-benefit-card scroll-right">
          <div className="benefit-icon">
            <i className="bi bi-boxes" />
          </div>
          <h3>End-to-End Services</h3>
          <p>From lead generation to issuance and customer support.</p>
        </div>
      </div>
      {/* =================================================
       SERVICES FOR BANK PARTNERS
  ================================================== */}
      <div className="bank-services-row">
        {/* LEFT VISUAL */}
        <div className="bank-services-visual">
          <div className="bank-visual-glow" />
          <div className="bank-building">
            <i className="bi bi-bank2" />
            <span>BANK</span>
          </div>
          {/* CONNECTING LINES */}
          <div className="service-connector connector-1" />
          <div className="service-connector connector-2" />
          <div className="service-connector connector-3" />
          <div className="service-connector connector-4" />
          {/* SERVICE BOXES */}
          <div className="visual-service-box service-box-1">
            <div className="service-box-icon">
              <i className="bi bi-credit-card-2-front" />
            </div>
            <div>
              <strong>Credit Card</strong>
              <span>Sales &amp; Acquisition</span>
            </div>
          </div>
          <div className="visual-service-box service-box-2">
            <div className="service-box-icon">
              <i className="bi bi-person-check" />
            </div>
            <div>
              <strong>Document</strong>
              <span>Verification</span>
            </div>
          </div>
          <div className="visual-service-box service-box-3">
            <div className="service-box-icon">
              <i className="bi bi-people" />
            </div>
            <div>
              <strong>Account</strong>
              <span>Onboarding Support</span>
            </div>
          </div>
          <div className="visual-service-box service-box-4">
            <div className="service-box-icon">
              <i className="bi bi-graph-up-arrow" />
            </div>
            <div>
              <strong>Cross-sell Financial</strong>
              <span>Products</span>
            </div>
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div className="bank-services-content">
          <span className="bank-section-tag">
            OUR SERVICES FOR BANK PARTNERS
          </span>
          <h2>
            More Than Just Card Sales –<span>We Do It All</span>
          </h2>
          <p>
            Joizone acts as your extended partner, managing critical operations
            so you can focus on your growth.
          </p>
          {/* SERVICE LIST */}
          <div className="bank-service-list">
            <div>
              <i className="bi bi-check-circle-fill" />
              <span>Credit Card Sales &amp; Activation</span>
            </div>
            <div>
              <i className="bi bi-check-circle-fill" />
              <span>Lead Management &amp; Nurturing</span>
            </div>
            <div>
              <i className="bi bi-check-circle-fill" />
              <span>Account Onboarding &amp; Customer Support</span>
            </div>
            <div>
              <i className="bi bi-check-circle-fill" />
              <span>Co-branded Campaigns &amp; Promotions</span>
            </div>
          </div>
          <a href="#" className="partnership-btn">
            Explore Partnership Opportunities
            <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* =====================================================
     PARTNERSHIP PROCESS
===================================================== */}
  <section className="partnership-process">
    <div className="container">
      {/* HEADING */}
      <div className="process-heading">
        <span className="process-tag">OUR PARTNERSHIP PROCESS</span>
        <h2>Simple, Transparent &amp; Effective</h2>
      </div>
      {/* PROCESS STEPS */}
      <div className="process-timeline">
        {/* STEP 01 */}
        <div className="process-step">
          <div className="process-icon">
            <i className="bi bi-chat-square-text-fill" />
          </div>
          <div className="process-content">
            <span className="step-number">001</span>
            <h3>Connect</h3>
            <p>Share your requirements and partnership goals with us.</p>
          </div>
        </div>
        {/* STEP 02 */}
        <div className="process-step">
          <div className="process-icon">
            <i className="bi bi-puzzle-fill" />
          </div>
          <div className="process-content">
            <span className="step-number">002</span>
            <h3>Integrate</h3>
            <p>We integrate our systems and tools with your process.</p>
          </div>
        </div>
        {/* STEP 03 */}
        <div className="process-step">
          <div className="process-icon">
            <i className="bi bi-bullseye" />
          </div>
          <div className="process-content">
            <span className="step-number">003</span>
            <h3>Generate</h3>
            <p>We generate verified leads and handle operations.</p>
          </div>
        </div>
        {/* STEP 04 */}
        <div className="process-step">
          <div className="process-icon">
            <i className="bi bi-box-seam-fill" />
          </div>
          <div className="process-content">
            <span className="step-number">004</span>
            <h3>Deliver</h3>
            <p>You get high-quality customers and business growth.</p>
          </div>
        </div>
        {/* STEP 05 */}
        <div className="process-step">
          <div className="process-icon">
            <i className="bi bi-graph-up-arrow" />
          </div>
          <div className="process-content">
            <span className="step-number">005</span>
            <h3>Grow Together</h3>
            <p>We continuously optimize for better results.</p>
          </div>
        </div>
      </div>
    </div>
    {/* =================================================
   STATISTICS
    ================================================== */}
    <div className="partner-stats">
      <div className="container">
        <div className="stats-grid">
          {/* STAT 1 */}
          <div className="stat-item">
            <strong>50+</strong>
            <span>Banking Partners</span>
          </div>
          {/* STAT 2 */}
          <div className="stat-item">
            <strong>10M+</strong>
            <span>Happy Customers</span>
          </div>
          {/* STAT 3 */}
          <div className="stat-item">
            <strong>15M+</strong>
            <span>Cards Delivered</span>
          </div>
          {/* STAT 4 */}
          <div className="stat-item">
            <strong>99.5%</strong>
            <span>KYC Accuracy Rate</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =====================================================
     PROCESS SECTION
===================================================== */}
  {/* YAHAN CTA */}
  {/* YAHAN PROCESS */}
  {/* YAHAN BLOG */}
</main>

      </section>
    );
}

export default Home;