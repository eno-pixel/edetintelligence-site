import "./App.css";

const services = [
  {
    title: "API Access",
    text: "Integrate structured regional economic intelligence directly into your software, AI application, or enterprise technology platform.",
  },
  {
    title: "Data Collection & Monitoring",
    text: "Continuously track public sources for new projects, investments, regulatory changes, risks, and opportunities.",
  },
  {
    title: "Data Cleaning & Standardization",
    text: "Transform fragmented public records into consistent, categorized, machine-readable data.",
  },
  {
    title: "Custom Data Infrastructure",
    text: "Develop specialized geographic coverage, categories, schemas, and delivery systems aligned with your product.",
  },
  {
    title: "Enterprise Integrations",
    text: "Connect Atlas with internal analytics tools, proprietary software, AI systems, and decision-support platforms.",
  },
  {
    title: "Strategic Technology Partnerships",
    text: "Collaborate on software products, integrations, licensing arrangements, and long-term commercial opportunities.",
  },
];

const benefits = [
  {
    title: "Faster Time to Market",
    text: "Launch intelligence capabilities without first spending months or years building regional data pipelines.",
  },
  {
    title: "Lower Infrastructure Costs",
    text: "Reduce the engineering, research, and operational resources required to maintain fragmented public data.",
  },
  {
    title: "Better Data for AI",
    text: "Give AI systems structured, categorized, and contextual regional intelligence instead of disconnected documents.",
  },
  {
    title: "Continuous Maintenance",
    text: "Keep your product current as new investments, projects, regulations, and regional developments emerge.",
  },
  {
    title: "Expandable Coverage",
    text: "Use Atlas as a foundation for entering additional industries, markets, and geographic regions.",
  },
  {
    title: "Product Differentiation",
    text: "Add intelligence capabilities that increase customer value and are difficult for competitors to reproduce.",
  },
];

const atlasCategories = [
  "Economic development",
  "Infrastructure investment",
  "Industrial activity",
  "Utilities and energy",
  "Permitting and zoning",
  "Regulatory activity",
  "Workforce development",
  "Transportation and logistics",
  "Public spending",
  "Commercial and residential development",
  "Environmental activity",
  "Regional demographic trends",
];

const audiences = [
  "Software companies",
  "Artificial intelligence companies",
  "Enterprise SaaS platforms",
  "Construction technology companies",
  "Infrastructure technology companies",
  "GovTech companies",
  "GIS and mapping platforms",
  "Commercial real estate technology companies",
  "Financial technology platforms",
  "Data and analytics companies",
  "Enterprise engineering teams",
  "Internal corporate technology teams",
];

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Edet Intelligence home">
          <span className="brand-mark">E.</span>
          <span className="brand-copy">
            <span className="brand-name">EDET INTELLIGENCE</span>
            <span className="brand-direction">ECONOMIC DATA INFRASTRUCTURE FOR SOFTWARE & AI</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#overview">Overview</a>
          <a href="#services">Services</a>
          <a href="#atlas">Atlas</a>
          <a href="#about">About</a>
          <a href="#partnerships">Partnerships</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">
          Request Access
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Edet Intelligence | Economic Data Infrastructure for Software & AI</p>

            <h1>The Intelligence Layer for Software &amp; AI</h1>

            <p className="hero-copy">
              Power your software with structured regional economic intelligence—without
              building and maintaining the underlying data infrastructure yourself.
            </p>

            <p className="hero-description">
              Edet Intelligence develops <strong>Atlas</strong>, a continuously
              updated intelligence infrastructure that transforms fragmented public
              records into structured, machine-readable data for software platforms,
              artificial intelligence applications, and enterprise technology
              systems.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Request Access
              </a>

              <a className="secondary-button" href="#atlas">
                Explore Atlas
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span>ATLAS</span>
              <span className="status">
                <span className="status-dot" />
                Intelligence Infrastructure
              </span>
            </div>

            <div className="workflow">
              <div className="workflow-step">
                <strong>Collect</strong>
                <p>Monitor fragmented public sources.</p>
              </div>

              <div className="workflow-line" />

              <div className="workflow-step">
                <strong>Structure</strong>
                <p>Clean, normalize, and categorize records.</p>
              </div>

              <div className="workflow-line" />

              <div className="workflow-step">
                <strong>Integrate</strong>
                <p>Power software, AI, and enterprise systems.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="overview">
          <div className="section-heading">
            <p className="section-kicker">Overview</p>
            <h2>Build Better Products Without Building the Data Infrastructure First</h2>
          </div>

          <div className="overview-grid">
            <div className="overview-copy">
              <p>
                Building intelligent software requires reliable data. Collecting,
                cleaning, organizing, and maintaining public information at scale is
                expensive, time-consuming, and difficult to sustain.
              </p>

              <p>
                Edet Intelligence helps software and AI companies eliminate that
                burden. Through Atlas, we provide continuously maintained,
                production-ready regional intelligence that technology companies can
                integrate into their products, applications, models, and internal
                systems.
              </p>

              <p>
                Instead of investing significant engineering time into complex data
                pipelines, your team can focus on creating innovative software,
                improving customer experiences, and growing your platform.
              </p>
            </div>

            <div className="value-card">
              <p className="card-label">What Your Team Gains</p>
              <ul>
                <li>Reduced data collection and engineering costs</li>
                <li>Faster product and feature development</li>
                <li>Structured regional data for AI systems</li>
                <li>More efficient expansion into new markets</li>
                <li>Differentiated intelligence capabilities</li>
                <li>A long-term data infrastructure partner</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="atlas">
          <div className="section-heading">
            <p className="section-kicker">Meet Atlas</p>
            <h2>Regional Economic Intelligence Infrastructure Built for Technology Companies</h2>
            <p>
              Atlas is the proprietary data infrastructure developed and maintained
              by Edet Intelligence.
            </p>
          </div>

          <div className="atlas-layout">
            <div className="atlas-copy">
              <p>
                Atlas transforms fragmented public information into structured
                intelligence that can be integrated into software products,
                artificial intelligence systems, enterprise tools, mapping
                platforms, and industry-specific applications.
              </p>

              <p>
                Through Atlas, technology companies gain access to a maintained
                regional intelligence layer without taking on the cost and
                complexity of building it internally.
              </p>
            </div>

            <div className="category-grid">
              {atlasCategories.map((category) => (
                <div className="category-item" key={category}>
                  <span className="category-dot" />
                  {category}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="section-kicker">Our Services</p>
            <h2>Infrastructure That Helps Your Technology Move Faster</h2>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="section-kicker">About Us</p>
            <h2>We Maintain the Intelligence Layer Behind Better Software</h2>
          </div>

          <div className="about-layout">
            <div className="about-copy">
              <p>
                Edet Intelligence is a data infrastructure company focused on
                helping software and AI companies build better intelligence
                products.
              </p>

              <p>
                We believe technology companies should not have to spend years
                collecting, cleaning, and maintaining fragmented regional public
                information before they can create valuable software.
              </p>

              <p>
                Through Atlas, we transform complex public information into
                structured data that technology companies can integrate into their
                products, platforms, models, and workflows.
              </p>
            </div>

            <blockquote>
              <p>Our partners build the software.</p>
              <strong>We power the intelligence behind it.</strong>
            </blockquote>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-kicker">Who We Serve</p>
            <h2>Built for Companies Creating Technology-Enabled Intelligence</h2>
          </div>

          <div className="audience-list">
            {audiences.map((audience) => (
              <span key={audience}>{audience}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-kicker">Why Edet Intelligence</p>
            <h2>A Stronger Foundation for Your Product</h2>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="partnerships">
          <div className="section-heading">
            <p className="section-kicker">Partnership Models</p>
            <h2>Flexible Ways to Build With Atlas</h2>
          </div>

          <div className="partnership-grid">
            <div>
              <h3>API Licensing</h3>
              <p>
                Recurring access to Atlas data through approved software and
                enterprise integrations.
              </p>
            </div>

            <div>
              <h3>Enterprise Licensing</h3>
              <p>
                Custom access for enterprise platforms, internal engineering teams,
                and large-scale technology deployments.
              </p>
            </div>

            <div>
              <h3>Strategic Data Partnerships</h3>
              <p>
                Long-term partnerships in which Atlas serves as a central
                intelligence source within a technology product.
              </p>
            </div>

            <div>
              <h3>Joint Product Development</h3>
              <p>
                Collaborative development of new software products powered by Atlas
                infrastructure.
              </p>
            </div>

            <div>
              <h3>Revenue Sharing</h3>
              <p>
                Commercial arrangements tied to revenue generated by products built
                using Atlas.
              </p>
            </div>

            <div>
              <h3>Product Ownership Partnerships</h3>
              <p>
                Selected arrangements may include shared ownership in jointly
                developed software products.
              </p>
            </div>
          </div>
        </section>

        <section className="behind-product">
          <div>
            <p className="section-kicker">Built to Work Behind Your Product</p>
            <h2>Your Customers Do Not Need to See Atlas.</h2>
          </div>

          <div className="behind-copy">
            <p>
              Atlas can operate quietly behind your platform as the data and
              intelligence infrastructure supporting your product experience.
            </p>

            <p>
              Your company maintains the customer relationship, interface, workflow,
              and brand. Edet Intelligence maintains the underlying regional
              intelligence layer.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-intro">
            <p className="section-kicker">Contact Us</p>
            <h2>Let’s Build the Future of Intelligence Together</h2>

            <p>
              Tell us about your software platform, AI application, integration
              requirements, or strategic partnership opportunity.
            </p>

            <div className="contact-details">
              <a href="mailto:eno@edetintelligence.com">
                <span>Email</span>
                eno@edetintelligence.com
              </a>

              <a href="tel:+15049098703">
                <span>Phone</span>
                (504) 909-8703
              </a>

              <div>
                <span>Business Hours</span>
                Monday–Friday, 8:00 AM–5:00 PM Central Time
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            action="mailto:eno@edetintelligence.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-row">
              <label>
                Full Name
                <input type="text" name="name" required />
              </label>

              <label>
                Company
                <input type="text" name="company" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Work Email
                <input type="email" name="email" required />
              </label>

              <label>
                Phone Number
                <input type="tel" name="phone" />
              </label>
            </div>

            <label>
              Subject
              <input type="text" name="subject" required />
            </label>

            <label>
              How can we help?
              <textarea name="message" rows="6" required />
            </label>

            <button type="submit">Send Message</button>
          </form>
        </section>

        <section
          className="certification-bar"
          aria-label="Louisiana business certifications"
        >
          <img
            className="certification-composite"
            src="/certifications/louisiana-certifications.png"
            alt="Hudson Initiative Certified and SEBD Certified Louisiana badges"
          />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">E.</span>
          <div>
            <strong>EDET INTELLIGENCE</strong>
            <p>Economic Data Infrastructure for Software & AI</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#overview">Overview</a>
          <a href="#services">Services</a>
          <a href="#atlas">Atlas</a>
          <a href="#partnerships">Partnerships</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <a href="mailto:eno@edetintelligence.com">
            eno@edetintelligence.com
          </a>
          <a href="tel:+15049098703">(504) 909-8703</a>
        </div>

        <div className="footer-bottom">
          <p>Atlas — Regional Economic Intelligence Infrastructure</p>
          <p>© 2026 Edet Intelligence Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
