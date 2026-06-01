import { BarChart3, BriefcaseBusiness, FileText, MapPinned } from "lucide-react";
import "./App.css";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div>
          <div className="published">Published by Edet Intelligence</div>
          <h1 className="masthead">THE EDET LABOR REVIEW</h1>
        </div>
      </header>

      <section className="hero">
        <p className="eyebrow">
          Labor Market Intelligence for Employers, Recruiters, and Economic Developers
        </p>
        <p className="issue">Volume 1 • Issue 1 • June 2026</p>
        <h2 className="headline">Labor Demand Begins Long Before a Job Posting.</h2>
        <p className="tagline">Tracking the signals that create tomorrow's workforce demand.</p>
        <p className="description">
          The Edet Labor Review identifies the infrastructure, industrial, public investment,
          and regional development signals shaping future labor demand for employers,
          recruiters, and economic developers.
        </p>
        <p className="coverage">
          Coverage currently spans the River Parishes, the Lake Charles Corridor,
          and Central Louisiana.
        </p>
      </section>

      <section className="stats">
        <div><h3>8,100+</h3><p>Workforce-Relevant Signals Tracked</p></div>
        <div><h3>3</h3><p>Louisiana Regions Monitored</p></div>
        <div><h3>Weekly</h3><p>Labor Intelligence Briefings</p></div>
        <div><h3>Forward-Looking</h3><p>Workforce Demand Analysis</p></div>
      </section>

      <section className="credibility">
        <p>
          Coverage includes infrastructure projects, industrial investments, public works,
          workforce initiatives, site development activity, utility expansion, and economic
          development activity across Louisiana.
        </p>
      </section>

      <section className="features">
        <Feature icon={<BarChart3 />} title="Workforce Demand Forecasts" />
        <Feature icon={<MapPinned />} title="Hiring Hotspot Rankings" />
        <Feature icon={<BriefcaseBusiness />} title="Occupational Watchlists" />
        <Feature icon={<FileText />} title="Emerging Labor Signals" />
      </section>

      <section className="dark">
        <h2>A Serious Labor Intelligence Publication for Louisiana</h2>
        <p>
          Each issue translates regional economic signals into practical labor market
          intelligence for staffing firms, employers, workforce boards, economic developers,
          contractors, educational institutions, and investors.
        </p>
      </section>

      <footer className="footer">
        <h2>Request the Latest Issue</h2>
        <p>
          See how Edet Intelligence tracks the projects, investments, and developments
          shaping Louisiana's future workforce.
        </p>
        <p>Published by Edet Intelligence</p>
        <p>Independent Louisiana Economic and Workforce Intelligence</p>
        <p className="email-line">
          <a href="mailto:eno@edetintelligence.com">eno@edetintelligence.com</a>
        </p>
      </footer>
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="feature">
      {icon}
      <h3>{title}</h3>
    </div>
  );
}
