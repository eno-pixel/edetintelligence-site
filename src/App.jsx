import "./App.css";

export default function App() {
  return (
    <main className="site">
      <section className="atlas-page">
        <p className="presented">Presented by Edet Intelligence Inc.</p>
        <h1>ATLAS EDET<span>™</span></h1>
        <h2>Louisiana Economic Development and Workforce Intelligence</h2>
        <p className="signal-line">10,000+ Structured Signals • 3 Louisiana Regions • Continuous Monitoring</p>

        <p className="intro">
          Atlas Edet is a Louisiana intelligence platform that tracks infrastructure investment,
          industrial expansion, workforce initiatives, economic development projects, utility upgrades,
          site development activity, and public-sector investments shaping Louisiana's future economy.
        </p>

        <div className="metrics">
          <div><strong>10,000+</strong><span>Structured Signals</span></div>
          <div><strong>3</strong><span>Louisiana Regions</span></div>
          <div><strong>Daily</strong><span>Monitoring</span></div>
          <div><strong>Forward-Looking</strong><span>Analysis</span></div>
        </div>

        <div className="grid">
          <div className="card">
            <h3>What Atlas Edet Tracks</h3>
            <p>Economic Development Activity</p>
            <p>Industrial Expansion &amp; Manufacturing Investment</p>
            <p>Workforce Development Initiatives</p>
            <p>Infrastructure Investment</p>
            <p>Utility Expansion &amp; Capacity Growth</p>
            <p>Site Development &amp; Site Readiness</p>
            <p>Public-Sector Capital Projects</p>
            <p>Emerging Labor Demand</p>
            <p>Business Recruitment Activity</p>
            <p>Regional Growth Trends</p>
          </div>

          <div className="card">
            <h3>Atlas Intelligence Outputs</h3>
            <p>Louisiana Labor Review</p>
            <p>Workforce Demand Forecasts</p>
            <p>Hiring Hotspot Rankings</p>
            <p>Occupational Watchlists</p>
            <p>Economic Development Intelligence</p>
            <p>Capital Movement Intelligence</p>
            <p>Industrial Investment Monitoring</p>
            <p>Infrastructure &amp; Site Development Intelligence</p>
            <p>Custom Research &amp; Analytics</p>
          </div>
        </div>

        <section className="text-section">
          <h3>What Makes Atlas Different</h3>
          <p>
            Most economic reports explain what happened. Atlas Edet tracks the decisions,
            investments, projects, workforce initiatives, and development activity that determine what happens next.
          </p>
          <p>
            By continuously monitoring economic development activity across Louisiana, Atlas helps employers,
            workforce boards, economic developers, educational institutions, recruiters, contractors, utilities,
            and investors identify emerging opportunities before they become widely recognized.
          </p>
          <p>
            Built from more than 10,000 structured intelligence signals, Atlas helps organizations identify where
            economic activity is accelerating, where workforce demand is emerging, and where capital is being
            deployed across Louisiana before those trends appear in traditional economic or labor market data.
          </p>
        </section>

        <section className="text-section">
          <h3>Why Atlas Edet Exists</h3>
          <p>
            Louisiana's future workforce demand is shaped long before a job posting appears. Major industrial
            investments, infrastructure projects, utility expansions, site development efforts, workforce initiatives,
            and economic development activities create labor demand months and often years before traditional labor
            market data reflects it.
          </p>
          <p>Atlas Edet helps organizations understand:</p>
          <div className="plain-list">
            <p>Where jobs are likely to emerge</p>
            <p>Which industries are expanding</p>
            <p>Where infrastructure investment is accelerating</p>
            <p>Which regions are attracting capital</p>
            <p>What workforce needs are developing</p>
            <p>How Louisiana's economy is changing over time</p>
          </div>
        </section>

        <footer>
          <p>Tracking the Signals That Shape Louisiana's Future Workforce</p>
          <a className="contact-button" href="mailto:eno@edetintelligence.com?subject=Atlas%20Edet%20Inquiry">
            Contact Edet Intelligence
          </a>
        
          <img
            src="/logo.png"
            alt="Edet Intelligence Logo"
            className="footer-logo"
          />
        </footer>

      </section>
    </main>
  );
}
