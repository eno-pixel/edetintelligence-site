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
        <p className="eyebrow">Louisiana Labor Market Intelligence</p>
        <p className="issue">Volume 1 • Issue 1 • June 2026</p>

        <h2 className="headline">Identifying Tomorrow's Workforce Demand Today.</h2>

        <p className="tagline">Labor demand begins long before a job posting.</p>

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
        <div><h3>8,100+</h3><p>Structured Economic Signals</p></div>
        <div><h3>3</h3><p>Louisiana Regions Monitored</p></div>
        <div><h3>Weekly</h3><p>Labor Intelligence Briefings</p></div>
        <div><h3>Forward-Looking</h3><p>Workforce Demand Analysis</p></div>
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
        <h2>Request the First Sample Issue</h2>
        <p>
          See how Edet Intelligence tracks the projects, investments, and developments
          shaping Louisiana's future workforce.
        </p>
        <p>eno@edetintelligence.com</p>
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
