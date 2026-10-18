import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import profilePhoto from "@/assets/profile-web.jpg";

const copy = {
  nav: ["Home", "Experience", "Publications"],
  aboutTitle: "About",
  location: "Keelung, Taiwan",
};

const navTargets = ["#about", "/experience", "/publications"];

const lastUpdated = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Taipei",
}).format(new Date(import.meta.env.VITE_LAST_UPDATED));

const newsItems = [
  {
    id: "apsec-acceptance",
    date: "2026.09",
    content: (
      <>
        Research on temporality in software evolution was accepted at{" "}
        <a href="https://conf.researchr.org/home/apsec-2026">APSEC 2026</a>.
      </>
    ),
  },
  {
    id: "ntou-talk",
    date: "2026.09",
    content: <>Presented “Learn Programming in the AI Era” at NTOU.</>,
  },
  {
    id: "waseda-appointment",
    date: "2026.08",
    content: <>Started as a Research Intern at Waseda University.</>,
  },
];

export const experiences = [
  {
    date: "2026.08 — Present",
    title: "Research Intern",
    skills: ["Software Engineering", "Reverse Engineering"],
    organization: (
      <>
        <a href="https://www.waseda.jp/top/en/">WasedaU</a> —{" "}
        <a href="https://545659928.github.io/jialongli/">
          Advisor: Prof. Jialong Li
        </a>
      </>
    ),
  },
  {
    date: "2026.02 — Present",
    title: "R&D Intern",
    skills: [
      "Computer Vision",
      "Sperm Analysis",
      "Ultrasound Imaging",
      "Mobile Systems",
    ],
    organization: <a href="https://www.aidmics.com/">Aidmics</a>,
  },
  {
    date: "2025.12 - Present",
    title: "Undergraduate Researcher",
    skills: ["Software Evolution", "Traceability", "Agentic AI"],
    organization: (
      <>
        <a href="https://ntou-soselab.github.io/SOSELab/">SOSELab</a> —{" "}
        <a href="https://ntou-soselab.github.io/SOSELab/director.html">
          Advisor: Prof. Shang-Pin Ma
        </a>
      </>
    ),
  },
  {
    date: "2025.09 — 2026.01",
    title: "Software Engineer Intern",
    skills: ["Swift"],
    organization: <a href="https://www.binance.com/en">Binance</a>,
  },

  {
    date: "2024.07 — 2025.08",
    title: "Software Engineer Intern",
    skills: ["Swift", "Go", "Next.js", "Django", "Docker", "Nginx"],
    organization: <a href="https://www.aidmics.com/">Aidmics</a>,
  },
  {
    date: "2024.02 — 2024.06",
    title: "Research Assistant",
    skills: ["C++"],
    organization: (
      <>
        <a href="https://lab.es.ncku.edu.tw/cinfon/ya.cv/lab.html">ALHCLab</a> —{" "}
        <a href="https://lab.es.ncku.edu.tw/cinfon/ya.cv/index.html">
          Advisor: Shih-Yeh Chen
        </a>
      </>
    ),
  },
];

export const publications = [
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>
      </>
    ),
    title:
      "A Preliminary of Study on Temporality and the Limits of AI in Software Evolution.",
    venue: (
      <>
        <em>
          the 33rd Asia-Pacific Software Engineering Conference (
          <a href="https://conf.researchr.org/home/apsec-2026">APSEC 2026</a>)
        </em>
        , Bali, Indonesia, December, 2026. (to appear)
      </>
    ),
    links: [
      {
        label: "paper",
        href: "https://drive.google.com/file/d/1Pm5RuA2fb8yOz37SG6372WfxUETILhpC/view?usp=sharing",
      },
      { label: "code", href: "https://github.com/Ateto1204/temporality-AI-SE" },
    ],
  },
  {
    authors: (
      <>
        <strong>蘇東毅</strong>、劉元楷、簡蔚驊、林彥丞、馬尚彬
      </>
    ),
    title: "CasDoc：以規格驅動軟體文件生成與維護之智慧代理工作平台",
    venue: (
      <>
        <em>
          第 22 屆臺灣軟體工程研討會 (
          <a href="https://tcse2026.seat.org.tw/">TCSE 2026</a>)
        </em>
        ，台中（勤益科大），2026年7月。
      </>
    ),
    links: [],
    language: "zh",
    award: true,
  },
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>, Chang-Yen Liu, Jun-Yu Wang, and Shang-Pin
        Ma
      </>
    ),
    title:
      "Hierarchical Semantic Anchoring: Progressive Hierarchical Retrieval for Intent-Grounded Task Placement in LLM-Assisted Mind Maps.",
    venue: (
      <>
        <em>
          the 6th International Conference on Software Engineering and
          Artificial Intelligence (<a href="https://www.seai.org/">SEAI 2026</a>
          )
        </em>
        , Fuzhou, China, June, 2026.
      </>
    ),
    links: [
      {
        label: "paper",
        href: "https://drive.google.com/file/d/1RUV1BklMOahHy94lU3AkYbRNmSTHO3dQ/view?usp=sharing",
      },
      {
        label: "code",
        href: "https://github.com/Ateto1204/absent-minded-backend",
      },
    ],
  },
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>, Yuan-Kai Liu, Wei-Hua Chien, Yan-Cheng Lin,
        and Shang-Pin Ma
      </>
    ),
    title: "Patterns for AI-Assisted Document Maintenance and Traceability.",
    venue: (
      <>
        <em>
          the 12th Asian Conference on Pattern Languages of Programs, People
          &amp; Practices (
          <a href="https://plopcon.org/asianplop2026/">AsianPLoP 2026</a>)
        </em>
        , Yokohama, Japan, March, 2026.
      </>
    ),
    links: [
      {
        label: "paper",
        href: "https://drive.google.com/file/d/1sj-SVD52gObRf3np9yZgGIXzyn5h4xln/view?usp=sharing",
      },
      { label: "code", href: "https://github.com/casdoc" },
    ],
  },
  {
    authors: (
      <>
        <strong>蘇東毅</strong>、劉元楷、林彥丞、簡蔚驊、馬尚彬
      </>
    ),
    title: "基於生成式 AI 並落實敏捷開發的軟體文件追溯平台設計與實作",
    venue: (
      <>
        <em>
          第 30 屆資訊管理學術暨實務研討會 (
          <a href="https://sites.google.com/view/imp2025">IMP 2025</a>)
        </em>
        ，桃園（長庚大學），2025年12月。
      </>
    ),
    links: [],
    language: "zh",
  },
];

function Main() {
  const text = copy;

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
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span>ATETO</span>
          <span className="wordmark-dot" aria-hidden="true" />
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {text.nav.map((item, index) => (
            <a key={navTargets[index]} href={navTargets[index]}>
              {item}
            </a>
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
              <img className="portrait" src={profilePhoto} alt="Dong-Yi Su" />
              <span
                className="availability-dot"
                title="Open to conversations"
              />
            </div>
            <div className="profile-copy">
              <h1>
                Dong-Yi Su
                <span>Ateto</span>
              </h1>
              <ul className="profile-role-list">
                <li>B.S. @NTOU</li>
                <li>Intern @Aidmics & @WasedaU</li>
              </ul>
            </div>
            <div className="profile-meta">
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
                {text.location}
              </span>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href="mailto:tonysu1204@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://github.com/Ateto1204"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ateto"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </aside>

        <main className="content-column">
          <section className="content-section about-section" id="about">
            <SectionHeading title={text.aboutTitle} />
            <div className="about-copy">
              <p>
                Dong-Yi Su is an undergraduate in Computer Science and
                Engineering at National Taiwan Ocean University. He currently
                serves as an R&amp;D Intern at{" "}
                <a href="https://www.aidmics.com/">Aidmics</a> and a Research
                Intern at <a href="https://www.waseda.jp/top/en/">Waseda</a>{" "}
                University. He has worked as a SWE Intern at{" "}
                <a href="https://www.aidmics.com/">Aidmics</a> and{" "}
                <a href="https://www.binance.com/en">Binance</a>. His research
                spans Software Engineering and Artificial Intelligence.
              </p>
            </div>
          </section>

          <section className="content-section about-section" id="research">
            <SectionHeading
              title="Research Interests"
              intro="His research focuses on software engineering and artificial intelligence, with recent work also exploring natural language processing and computer vision."
            />
            <ul className="research-interest-list">
              <li>
                <strong>Software Engineering</strong>
                <span>Software Evolution, AI4SE, and Agentic AI</span>
              </li>
              <li>
                <strong>Natural Language Processing</strong>
                <span>Representation Learning</span>
              </li>
              <li>
                <strong>Computer Vision</strong>
                <span>Biomedical Image Analysis</span>
              </li>
            </ul>
          </section>

          {/* <section className="content-section about-section" id="news">
            <SectionHeading title="News" />
            <ul className="news-list">
              {newsItems.map((item) => (
                <li className="news-item" key={item.id}>
                  <time className="news-date">{item.date}</time>
                  <span className="news-content">{item.content}</span>
                </li>
              ))}
            </ul>
          </section> */}
        </main>
      </div>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Dong-Yi Su</p>
        <p>Last updated · {lastUpdated}</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

interface SectionHeadingProps {
  title: string;
  intro?: string;
}

export function SectionHeading({ title, intro }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </header>
  );
}

export default Main;
