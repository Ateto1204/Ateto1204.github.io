import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import profilePhoto from "@/assets/profile-web.jpg";

const lastUpdated = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Taipei",
}).format(new Date(import.meta.env.VITE_LAST_UPDATED));

const navItems = [
  { label: "Home", to: "/#about" },
  { label: "Experience", to: "/experience" },
  { label: "Publications", to: "/publications" },
];

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.dataset.theme =
      savedTheme === "dark" ? "dark" : "light";
  }, []);

  useEffect(() => {
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="http"]')
      .forEach((link) => {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      });
  }, [location.pathname]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Back to home">
          <span>ATETO</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
          >
            <HiOutlineMoon className="moon-icon" />
            <HiOutlineSun className="sun-icon" />
          </button>
        </div>
      </header>

      <div className="portfolio-layout" id="top">
        <aside className="profile-rail">
          <div className="profile-card">
            <div className="portrait-wrap">
              <img
                className="portrait"
                src={profilePhoto}
                alt="Dong-Yi Su"
              />
              <span className="availability-dot" title="Open to conversations" />
            </div>
            <div className="profile-copy">
              <h1>
                Dong-Yi Su
                <span>Ateto</span>
              </h1>
              <ul className="profile-role-list">
                <li>B.S. @NTOU</li>
                <li>Intern @Aidmics &amp; @WasedaU</li>
              </ul>
            </div>
            <div className="profile-meta">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                Keelung, Taiwan
              </span>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href="mailto:tonysu1204@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="https://github.com/Ateto1204" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ateto" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </aside>

        {children}
      </div>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Dong-Yi Su</p>
        <p>Last updated · {lastUpdated}</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
