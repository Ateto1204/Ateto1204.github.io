import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

import profilePhoto from "@/assets/profile-web.jpg";
import { language } from "@/model/LanCxtProvider";

const copy = {
  en: {
    nav: ["About", "Research", "Experience", "Publications"],
    aboutTitle: "About",
    researchTitle: "Research",
    experienceTitle: "Experience",
    publicationsTitle: "Publications",
    location: "Keelung, Taiwan",
  },
  zh: {
    nav: ["About", "Research", "Experience", "Publications"],
    aboutTitle: "About",
    researchTitle: "Research",
    experienceTitle: "Experience",
    publicationsTitle: "Publications",
    location: "Keelung, Taiwan",
  },
};

const sectionIds = ["about", "research", "experience", "publications"];

const lastUpdated = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Taipei",
}).format(new Date(import.meta.env.VITE_LAST_UPDATED));

const experiences = [
  {
    date: "2026.02 — Present",
    title: "Research Intern",
    skills: ["Swift"],
    organization: {
      en: <a href="https://www.aidmics.com/">Aidmics</a>,
      zh: <a href="https://www.aidmics.com/">Aidmics</a>,
    },
  },
  {
    date: "2025.09 — 2026.01",
    title: "Software Engineer Intern",
    skills: ["Swift"],
    organization: {
      en: <a href="https://www.binance.com/en">Binance</a>,
      zh: <a href="https://www.binance.com/en">Binance</a>,
    },
  },
  {
    date: "2024.07 — 2025.08",
    title: "Software Engineer Intern",
    skills: ["Swift", "Go", "Next.js", "Django", "Docker", "Nginx"],
    organization: {
      en: <a href="https://www.aidmics.com/">Aidmics</a>,
      zh: <a href="https://www.aidmics.com/">Aidmics</a>,
    },
  },
  {
    date: "2024.02 — 2024.06",
    title: "Research Assistant",
    skills: ["C++"],
    organization: {
      en: (
        <>
          NTOU —{" "}
          <a href="https://lab.es.ncku.edu.tw/cinfon/ya.cv/index.html">
            Advisor: Shih-Yeh Chen
          </a>{" "}
        </>
      ),
      zh: (
        <>
          NTOU —{" "}
          <a href="https://lab.es.ncku.edu.tw/cinfon/ya.cv/index.html">
            指導教授：陳世曄
          </a>{" "}
        </>
      ),
    },
  },
];

const publications = [
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>
      </>
    ),
    title: "Temporality and the Limits of AI in Software Evolution.",
    venue: (
      <>
        Under Review at{" "}
        <em>
          the 33rd Asia-Pacific Software Engineering Conference (
          <a href="https://conf.researchr.org/home/apsec-2026">APSEC 2026</a>)
        </em>
        , Bali, Indonesia, 2026.
      </>
    ),
    links: [
      {
        label: "paper",
        href: "https://drive.google.com/file/d/1Pm5RuA2fb8yOz37SG6372WfxUETILhpC/view?usp=sharing",
      },
      { label: "code", href: "https://github.com/Ateto1204/temporality-AI-SE" },
    ],
    hidden: true,
  },
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>, Yuan-Kai Liu, Wei-Hua Chien, Yan-Cheng Lin,
        Shang-Pin Ma
      </>
    ),
    title:
      "Casdoc: An Agentic Workbench for Specification-Driven Software Documentation.",
    venue: (
      <>
        Under Review at{" "}
        <em>
          the 33rd Asia-Pacific Software Engineering Conference (
          <a href="https://conf.researchr.org/home/apsec-2026">APSEC 2026</a>)
        </em>
        , Bali, Indonesia, 2026.
      </>
    ),
    links: [
      {
        label: "paper",
        href: "https://drive.google.com/file/d/1wOyHQDkBZ5IQdJ8_AiinklzjmzxU4Qdo/view?usp=sharing",
      },
      { label: "code", href: "https://github.com/casdoc" },
    ],
    hidden: true,
  },
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>, Han-Sheng Lu
      </>
    ),
    title:
      "AST-driven LLM Migration of Imperative UI Views to Declarative UI Frameworks: UIKit to SwiftUI.",
    venue: (
      <>
        Under Review at{" "}
        <em>
          the 33rd Asia-Pacific Software Engineering Conference (
          <a href="https://conf.researchr.org/home/apsec-2026">APSEC 2026</a>)
        </em>
        , Bali, Indonesia, 2026.
      </>
    ),
    links: [
      {
        label: "code",
        href: "https://github.com/alanlu01/AST-Driven-UIKit2SwiftUI",
      },
    ],
    hidden: true,
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
        ，台中（勤益科大）， 2026 年 7 月。
      </>
    ),
    links: [],
    language: "zh",
    award: true,
  },
  {
    authors: (
      <>
        <strong>Dong-Yi Su</strong>, Chang-Yen Liu, Jun-Yu Wang, Shang-Pin Ma
      </>
    ),
    title:
      "Hierarchical Semantic Anchoring: Progressive Hierarchical Retrieval for Intent-Grounded Task Placement in LLM-Assisted Mind Maps.",
    venue: (
      <>
        In{" "}
        <em>
          Proceedings of the 6th International Conference on Software
          Engineering and Artificial Intelligence (
          <a href="https://www.seai.org/">SEAI 2026</a>)
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
        Shang-Pin Ma
      </>
    ),
    title: "Patterns for AI-Assisted Document Maintenance and Traceability.",
    venue: (
      <>
        In{" "}
        <em>
          Proceedings of the 12th Asian Conference on Pattern Languages of
          Programs, People &amp; Practices (
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
        ，桃園 （長庚大學），2025 年 12 月。
      </>
    ),
    links: [],
    language: "zh",
  },
];

function Main() {
  const context = useContext(language);
  if (!context) {
    throw new Error("Main must be used within a LanProvider");
  }

  const { lan, setLan } = context;
  const locale = lan === "zh" ? "zh" : "en";
  const text = copy[locale];

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
  }, [locale]);

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
            <a key={sectionIds[index]} href={`#${sectionIds[index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="text-button"
            type="button"
            onClick={() => setLan(locale === "zh" ? "en" : "zh")}
            aria-label="Switch language"
          >
            {locale === "zh" ? "EN" : "中"}
          </button>
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
                alt={locale === "zh" ? "蘇東毅" : "Dong-Yi Su"}
              />
              <span
                className="availability-dot"
                title="Open to conversations"
              />
            </div>
            <div className="profile-copy">
              <h1>
                {locale === "zh" ? "蘇東毅" : "Dong-Yi Su"}
                <span>Ateto</span>
              </h1>
              <ul className="profile-role-list">
                <li>B.S. @NTOU</li>
                <li>Intern @Aidmics</li>
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
              {locale === "zh" ? (
                <>
                  <p>
                    蘇東毅（Dong-Yi
                    Su）目前就讀國立臺灣海洋大學資訊工程學系四年級。
                  </p>
                  <p>
                    蘇東毅具備豐富的學術研究和實務經驗，他在新創{" "}
                    <a href="https://www.aidmics.com/">Aidmics</a> 與外商{" "}
                    <a href="https://www.binance.com/en">Binance</a> 擔任
                    Software Engineer Intern 和 Research
                    Intern；蘇東毅在國科會計劃中獲得多項專題競賽獎項，同時他也以第一作者將軟體工程與人工智慧等研究成果發表於{" "}
                    <a className="conference-link" href="https://www.seai.org/">
                      <em>SEAI</em>
                    </a>{" "}
                    和{" "}
                    <a
                      className="conference-link"
                      href="https://tcse2026.seat.org.tw/"
                    >
                      <em>TCSE</em>
                    </a>{" "}
                    等國內外會議上。
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Dong-Yi Su is a senior undergraduate in Computer Science and
                    Engineering at National Taiwan Ocean University.
                  </p>
                  <p>
                    He has extensive academic and industry experience. He has
                    worked as a Software Engineer Intern and Research Intern at{" "}
                    <a href="https://www.aidmics.com/">Aidmics</a> and{" "}
                    <a href="https://www.binance.com/en">Binance</a>. Through an
                    NSTC research project, he received multiple awards spanning
                    software engineering, artificial intelligence,
                    entrepreneurship, and project competitions. As first author,
                    he has published work in software engineering and artificial
                    intelligence at domestic and international conferences
                    including{" "}
                    <a className="conference-link" href="https://www.seai.org/">
                      <em>SEAI</em>
                    </a>{" "}
                    and{" "}
                    <a
                      className="conference-link"
                      href="https://tcse2026.seat.org.tw/"
                    >
                      <em>TCSE</em>
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
          </section>

          <section className="content-section" id="research">
            <SectionHeading title={text.researchTitle} />
            <div className="about-copy">
              <p>
                {locale === "zh"
                  ? "他的研究領域包含但不限於軟體工程、人工智慧，尤其軟體演化、AI4SE 與 Agentic AI。"
                  : "His research spans software engineering and artificial intelligence, with particular interests in software evolution, AI4SE, and Agentic AI."}
              </p>
            </div>
          </section>

          <section className="content-section" id="experience">
            <SectionHeading title={text.experienceTitle} />
            <ul className="experience-list">
              {experiences.map((item) => (
                <li
                  className="experience-item"
                  key={`${item.date}-${item.title}`}
                >
                  <div className="experience-body">
                    <p className="experience-date">{item.date}</p>
                    <h3>
                      {item.title}
                      <span className="experience-company">
                        {" "}
                        @ {item.organization[locale]}
                      </span>
                    </h3>
                    <div className="experience-skills" aria-label="Skills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="content-section publications-section"
            id="publications"
          >
            <SectionHeading title={text.publicationsTitle} />
            <ol className="publication-list">
              {publications
                .filter((publication) => !publication.hidden)
                .map((publication) => (
                  <li className="publication-item" key={publication.title}>
                    <article>
                      <div className="publication-title-row">
                        <h3>
                          {publication.title}
                          {publication.language === "zh" && (
                            <span className="publication-language">
                              {locale === "zh" ? "中文" : "Chinese"}
                            </span>
                          )}
                        </h3>
                        {publication.links.length > 0 && (
                          <div className="publication-links">
                            {publication.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={link.label}
                                title={link.label}
                              >
                                {link.label === "paper" ? (
                                  <FontAwesomeIcon icon={faFileLines} />
                                ) : (
                                  <FaGithub />
                                )}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="publication-meta-row">
                        <p className="publication-authors">
                          {publication.authors}
                        </p>
                      </div>
                      <p className="publication-venue">
                        {publication.venue}
                        {publication.award && (
                          <strong>
                            {locale === "zh"
                              ? "（佳作展示論文）"
                              : " (Honorable Mention Demo Paper)"}
                          </strong>
                        )}
                      </p>
                    </article>
                  </li>
                ))}
            </ol>
          </section>
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

function SectionHeading({ title, intro }: SectionHeadingProps) {
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
