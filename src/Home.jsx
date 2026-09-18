import React, { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ListFilter,
  Bell,
  Users,
  IndianRupee,
  TrendingUp,
  Sparkles,
  BarChart3,
  Target,
  UserCheck,
  Clock,
  Plus,
  Search,
  Star,
  Send,
  ChevronDown,
} from "lucide-react";
import leadImage from "./assets/lead.png";
import "./Home.css";
import yashvitech from "./assets/yashvitech.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  /* =========================
     NAVBAR
  ========================= */
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  /* =========================
     REQUEST DEMO FORM
  ========================= */
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    teamSize: "1 to 5 Sales Reps",
    primaryChallenge: "Lead Leakage & Missed Follow-ups",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  toast.success(
    `Thank you ${formData.fullName}! Our team will contact you within 15 minutes.`
  );

  setFormData({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    teamSize: "1 to 5 Sales Reps",
    primaryChallenge: "Lead Leakage & Missed Follow-ups",
  });
};

  /* =========================
     FAQ
  ========================= */
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What is Yashvitech LeadCRM software and how does it work?",
      answer:
        "Yashvitech LeadCRM is an AI-powered cloud platform that automatically captures leads from Meta Ads, Google, Website, and IndiaMART, assigns them to telecallers, and automates WhatsApp/Email follow-ups to prevent lead leakage.",
    },
    {
      question:
        "Can I access Yashvitech LeadCRM on mobile phones or tablets?",
      answer:
        "Yes, Yashvitech LeadCRM is 100% responsive and accessible on Android, iOS, tablets, and desktop web browsers so your sales team can update lead statuses on the go.",
    },
    {
      question:
        "How does the WhatsApp and Email automated alert system work?",
      answer:
        "When a new lead enters the system or a follow-up reminder is due, LeadCRM automatically triggers instant WhatsApp messages and Email notifications to both your sales rep and the prospective client.",
    },
    {
      question:
        "Can Yashvitech LeadCRM integrate with Facebook Ads and Google Ads?",
      answer:
        "Yes! LeadCRM offers instant 1-click integrations with Facebook Ads, Instagram Ads, Google Lead Forms, IndiaMART, TradeIndia, and custom landing pages via Webhooks and API.",
    },
    {
      question:
        "Can LeadCRM generate sales rep performance and ROI reports?",
      answer:
        "Absolutely. LeadCRM provides interactive dashboards showing conversion rates, telecaller response time, pipeline deal value, and source-wise ROI analytics.",
    },
  ];

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
      />
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            <div className="logo-text">
              <img
                src={yashvitech}
                alt="Yashvitech Logo"
                height={150}
                className="yash"
              />
            </div>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#features" onClick={closeMenu}>Key Features</a>
            <a href="#demo" onClick={closeMenu}>Interactive Demo</a>
            <a href="#success" onClick={closeMenu}>Success Stories</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </nav>

          <div className="navbar-right">
            <a href="tel:+919876543210" className="phone-number">
              <Phone size={18} />
              <span>+91 86400 91593</span>
            </a>

            <a href="#request-demo" className="demo-button">
              Book Free Demo
            </a>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section id="home" className="hero-wrapper">
        <div className="glow-top-left" />
        <div className="glow-bottom-right" />

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="icon-badge" />
              <span>#1 AI-Powered Lead CRM in India</span>
            </div>

            <h1 className="hero-title">
              Supercharge Sales & <br />
              <span className="text-gradient">Stop Lead Leakage</span>
            </h1>

            <p className="hero-description">
              Capture leads instantly, automate instant WhatsApp
              follow-ups, and track your team's conversions in one
              powerful, unified dashboard.
            </p>

            <div className="features-grid">
              <div className="feature-item">
                <CheckCircle2 className="icon-check" />
                <span>Instant Capture & Auto-Assign</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="icon-check" />
                <span>Auto WhatsApp & Email Alerts</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="icon-check" />
                <span>Smart Follow-up Reminders</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="icon-check" />
                <span>Source-Wise ROI Analytics</span>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="#request-demo" className="btn-primary">
                <span>Book My Free Demo</span>
                <ArrowRight className="btn-icon" />
              </a>
              <a href="#features" className="btn-secondary">
                <ListFilter className="btn-icon-sm" />
                <span>Explore Features</span>
              </a>
            </div>

            <div className="divider" />

            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Leads Tracked</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">3x</span>
                <span className="stat-label">Sales Conversion</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">System Uptime</span>
              </div>
            </div>
          </div>

          <div className="hero-mockup">
            <div className="mockup-card">
              <div className="image-box">
                <img
                  src={leadImage}
                  alt="Yashvitech Lead Management Dashboard"
                  className="mockup-img"
                />
                <div className="live-tag">
                  <span className="live-dot" /> LIVE CRM ACTIVE
                </div>
              </div>

              <div className="cards-grid">
                <div className="info-card">
                  <div className="info-header">
                    <span>ACTIVE LEADS</span>
                    <Users className="info-icon" />
                  </div>
                  <div className="info-value text-amber">1,420</div>
                  <div className="info-sub text-emerald">
                    <TrendingUp className="sub-icon" />
                    <span>+28.4% Growth</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-header">
                    <span>PIPELINE VALUE</span>
                    <IndianRupee className="info-icon" />
                  </div>
                  <div className="info-value text-emerald">₹48.5 Lakh</div>
                  <div className="info-sub text-muted">✓ Auto Synced</div>
                </div>
              </div>

              <div className="alert-bar">
                <div className="alert-text">
                  <Bell className="alert-icon" />
                  <p className="truncate">
                    <strong className="text-amber">Alert:</strong> Lead
                    "Rohan Sharma" follow-up in 15m!
                  </p>
                </div>
                <span className="sms-tag">SMS Sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ===================================================== */}
      <section id="features" className="features-section">
        <div className="features-heading">
          <span>POWERFUL LEAD MANAGEMENT</span>
          <h2>
            Everything You Need to Manage
            <br />
            Your Leads Effectively
          </h2>
          <p>
            Capture, organize, track and convert leads from one simple
            platform.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={27} />
            </div>
            <h3>Lead Management</h3>
            <p>
              Add, organize and manage all your leads from one centralized
              dashboard.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 size={27} />
            </div>
            <h3>Lead Tracking</h3>
            <p>
              Track every lead from new inquiry to follow-up and final
              conversion.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Bell size={27} />
            </div>
            <h3>Follow-up Reminders</h3>
            <p>
              Never miss important follow-ups with reminders for calls and
              meetings.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Target size={27} />
            </div>
            <h3>Lead Status</h3>
            <p>
              Manage lead stages like New, Contacted, Qualified, Converted
              and Lost.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp size={27} />
            </div>
            <h3>Sales Reports</h3>
            <p>
              Get useful insights about leads, conversions and team
              performance.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <UserCheck size={27} />
            </div>
            <h3>Team Management</h3>
            <p>
              Assign leads to team members and monitor their activities and
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE DEMO
      ===================================================== */}
      <section id="demo" className="demo-section">
        <div className="demo-heading">
          <span>INTERACTIVE DEMO</span>
          <h2>Manage Your Leads From One Place</h2>
          <p>
            See how easily your team can manage, track and convert leads.
          </p>
        </div>

        <div className="demo-dashboard">
          <div className="demo-top">
            <div>
              <h3>Lead Dashboard</h3>
              <span>Welcome back, Admin</span>
            </div>
            <button className="add-lead-btn">
              <Plus size={17} />
              Add Lead
            </button>
          </div>

          <div className="demo-stats">
            <div className="demo-stat">
              <div className="demo-stat-icon">
                <Users size={20} />
              </div>
              <div>
                <span>Total Leads</span>
                <h3>248</h3>
                <small>+12.5% this month</small>
              </div>
            </div>

            <div className="demo-stat">
              <div className="demo-stat-icon">
                <UserCheck size={20} />
              </div>
              <div>
                <span>Qualified Leads</span>
                <h3>56</h3>
                <small>+8.4% this month</small>
              </div>
            </div>

            <div className="demo-stat">
              <div className="demo-stat-icon">
                <Clock size={20} />
              </div>
              <div>
                <span>Follow-ups</span>
                <h3>24</h3>
                <small>8 due today</small>
              </div>
            </div>

            <div className="demo-stat">
              <div className="demo-stat-icon">
                <TrendingUp size={20} />
              </div>
              <div>
                <span>Converted</span>
                <h3>32</h3>
                <small>+15.2% this month</small>
              </div>
            </div>
          </div>

          <div className="leads-box">
            <div className="leads-header">
              <h3>Recent Leads</h3>
              <div className="search-box">
                <Search size={16} />
                <input type="text" placeholder="Search leads..." />
              </div>
            </div>

            <div className="lead-table">
              <div className="table-head">
                <span>Lead Name</span>
                <span>Company</span>
                <span>Status</span>
                <span>Source</span>
                <span>Assigned To</span>
              </div>

              <div className="table-row">
                <div className="lead-name">
                  <div className="lead-avatar">A</div>
                  <span>Aditya Sharma</span>
                </div>
                <span>Tech Solutions</span>
                <span className="status new">New</span>
                <span>Website</span>
                <span>Rahul</span>
              </div>

              <div className="table-row">
                <div className="lead-name">
                  <div className="lead-avatar">P</div>
                  <span>Priya Mehta</span>
                </div>
                <span>Digital World</span>
                <span className="status contacted">Contacted</span>
                <span>Facebook</span>
                <span>Amit</span>
              </div>

              <div className="table-row">
                <div className="lead-name">
                  <div className="lead-avatar">R</div>
                  <span>Rahul Verma</span>
                </div>
                <span>Growth Labs</span>
                <span className="status qualified">Qualified</span>
                <span>Google Ads</span>
                <span>Neha</span>
              </div>

              <div className="table-row">
                <div className="lead-name">
                  <div className="lead-avatar">S</div>
                  <span>Sneha Kapoor</span>
                </div>
                <span>Smart Systems</span>
                <span className="status converted">Converted</span>
                <span>Referral</span>
                <span>Rahul</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUCCESS STORIES
      ===================================================== */}
      <section id="success" className="success-section">
        <div className="success-heading">
          <span>SUCCESS STORIES</span>
          <h2>What Our Customers Say</h2>
          <p>Trusted by teams who want to manage leads better and grow faster.</p>
        </div>

        <div className="review-cards">
          <div className="review-card">
            <div className="stars">
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
            </div>
            <p>
              "Yashvitech has made lead management much easier for our team.
              We can track every lead and follow-up without missing anything."
            </p>
            <div className="review-user">
              <div className="review-avatar">A</div>
              <div>
                <h3>Aditya Sharma</h3>
                <span>Sales Manager</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
            </div>
            <p>
              "The dashboard gives us a clear view of our sales pipeline. Our
              team responds faster and we are converting more leads."
            </p>
            <div className="review-user">
              <div className="review-avatar">P</div>
              <div>
                <h3>Priya Mehta</h3>
                <span>Business Owner</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="stars">
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
              <Star size={17} fill="currentColor" />
            </div>
            <p>
              "Simple, clean and easy to use. Assigning leads to team members
              and checking their progress is now very simple."
            </p>
            <div className="review-user">
              <div className="review-avatar">R</div>
              <div>
                <h3>Rahul Verma</h3>
                <span>Sales Executive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REQUEST DEMO
      ===================================================== */}
      <section className="request-demo-section" id="request-demo">
        <div className="demo-glow-left" />
        <div className="demo-glow-right" />

        <div className="demo-container">
          <div className="demo-content">
            <div className="demo-badge">
              <Sparkles size={14} className="badge-icon" />
              <span>FREE PERSONALIZED DEMO</span>
            </div>

            <h2 className="demo-title">
              Ready to Automate Your Sales & Multiply Pipeline Growth?
            </h2>

            <p className="demo-description">
              Schedule a 15-minute live demo with our Lead Management System
              specialists. We will show you how Yashvitech LeadCRM can fit
              your exact team size and sales workflow.
            </p>

            <div className="demo-checklist">
              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>Zero Setup Fee & Dedicated Onboarding Manager</span>
              </div>

              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>Instant Data Import from Excel / Tally / Old CRM</span>
              </div>

              <div className="check-item">
                <CheckCircle2 className="check-icon" />
                <span>1-on-1 Personalized Walkthrough & Custom Setup</span>
              </div>
            </div>
          </div>

          <div className="demo-card">
            <div className="form-header">
              <h3 className="form-title">Request Your Free LeadCRM Demo</h3>
              <p className="form-subtitle">
                Fill in your details below. Our team will contact you within
                15 minutes.
              </p>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="input-group">
                  <label>FULL NAME *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Ramesh Shah"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>COMPANY / FIRM NAME *</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="e.g. Shah Solutions"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>PHONE NUMBER (WHATSAPP) *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>BUSINESS EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ramesh@shahsolutions.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>SALES TEAM SIZE</label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                  >
                    <option value="1 to 5 Sales Reps">1 to 5 Sales Reps</option>
                    <option value="6 to 20 Sales Reps">6 to 20 Sales Reps</option>
                    <option value="20+ Sales Reps">20+ Sales Reps</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>PRIMARY CHALLENGE</label>
                  <select
                    name="primaryChallenge"
                    value={formData.primaryChallenge}
                    onChange={handleChange}
                  >
                    <option value="Lead Leakage & Missed Follow-ups">
                      Lead Leakage & Missed Follow-ups
                    </option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="Manual Excel Tracking">Manual Excel Tracking</option>
                    <option value="Team Performance Tracking">Team Performance Tracking</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                <span>Submit & Book My Demo</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-badge">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="faq-title">Got Questions? We've Got Answers.</h2>
            <p className="faq-subtitle">
              Everything you need to know about Yashvitech LeadCRM software
              and integrations.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`faq-icon ${
                      activeIndex === index ? "rotate" : ""
                    }`}
                  />
                </button>

                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
    FOOTER (Yashvitech Style)
===================================================== */}

<footer className="footer">

  {/* Main Footer Grid */}
  <div className="footer-container">

    {/* Brand Column */}
    <div className="footer-brand">
           <img src={yashvitech} height={110} alt="" />

      <p>
        Yashvitech is a pioneer in AI-powered Lead Management
        Solutions, empowering sales teams, marketing agencies,
        and growing businesses across India with cutting-edge
        cloud automation.
      </p>

      <div className="social-icons">

        <a href="#" aria-label="Website" className="social-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </a>

        <a href="#" aria-label="LinkedIn" className="social-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <a href="#" aria-label="Facebook" className="social-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

      </div>

    </div>


    {/* Column 1 - CRM Modules */}
    <div className="footer-column">
      <h3>CRM Modules</h3>
      <a href="#features">Lead Capture Engine</a>
      <a href="#features">WhatsApp Automation</a>
      <a href="#features">Follow-up Reminders</a>
      <a href="#features">Pipeline Tracker</a>
      <a href="#features">Team Assignment</a>
    </div>


    {/* Column 2 - Reports & Insights */}
    <div className="footer-column">
      <h3>Reports & Insights</h3>
      <a href="#features">Sales Conversion Report</a>
      <a href="#features">Telecaller Performance</a>
      <a href="#features">Source-Wise ROI</a>
      <a href="#features">Deal Value Analytics</a>
      <a href="#features">Missed Leads Log</a>
    </div>


    {/* Column 3 - Contact */}
    <div className="footer-contact-col">

      <h3>Contact Yashvitech</h3>

      <a href="#" className="contact-line">
        <MapPin size={15} />
        <span>Yashvitech Tech Park, Sales Wing, India</span>
      </a>

      <a href="mailto:info@yashvitech.com" className="contact-line">
        <Mail size={15} />
        <span>info@yashvitech.com</span>
      </a>

      <a href="https://www.yashvitech.com" className="contact-line">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>www.yashvitech.com</span>
      </a>

    </div>

  </div>


  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="footer-bottom-inner">
      <p>© 2026 Yashvitech Technologies. All rights reserved. Lead Management System (LeadCRM).</p>
      <div className="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Security</a>
      </div>
    </div>
  </div>

</footer>
    </>
  );
}

export default Home;