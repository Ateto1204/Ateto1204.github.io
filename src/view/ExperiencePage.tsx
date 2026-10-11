import { experiences, SectionHeading } from "@/view/Main";
import SiteLayout from "@/view/SiteLayout";

const talks = [
  {
    title: "Learn Programming in the AI Era: Approaches and Mindsets.",
    date: "2026.09.11",
    organizer: "NTOU CSIE",
  },
  {
    title: "Introduction to Frontend Frameworks with Next.js.",
    date: "2024.12.17",
    organizer: "NTOU CSIE",
  },
  {
    title: "Git & GitHub: Version Control Practices.",
    date: "2024.10.23",
    organizer: "NTOU CSIE",
  },
  {
    title: "人工智慧與生涯規劃分享講座。",
    date: "2024.05.24",
    organizer: "YHSH",
  },
];

const teaching = [
  {
    title: "程式設計實作入門",
    date: "2024 Fall",
  },
  {
    title: "程式設計實作入門",
    date: "2023 Fall",
  },
];

export default function ExperiencePage() {
  return (
    <SiteLayout>
      <main className="content-column standalone-page">
        <div className="standalone-page-title" id="experience">
          <SectionHeading title="Experience" />
        </div>

        <section className="content-section" id="internship">
          <SectionHeading title="Internship" />
          <ul className="experience-list">
            {experiences.map((item) => (
              <li
                className="experience-item"
                key={`${item.date}-${item.title}`}
              >
                <div className="experience-body">
                  {item.date && (
                    <p className="experience-date">{item.date}</p>
                  )}
                  <h3>
                    {item.title}
                    <span className="experience-company">
                      {" "}
                      @ {item.organization.en}
                    </span>
                  </h3>
                  {item.skills.length > 0 && (
                    <div className="experience-skills" aria-label="Skills">
                      {item.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="teaching">
          <SectionHeading title="Teaching" />
          <ul className="experience-list teaching-list">
            {teaching.map((item) => (
              <li className="experience-item" key={item.date}>
                <div className="experience-body">
                  <p className="experience-date">{item.date}</p>
                  <h3>
                    {item.title}
                    <span className="teaching-funding"> — Lecturer @NTOU</span>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="talks">
          <SectionHeading title="Talks" />
          <ul className="experience-list talk-list">
            {talks.map((talk) => (
              <li
                className="experience-item"
                key={`${talk.date}-${talk.title}`}
              >
                <div className="experience-body">
                  <p className="experience-date">{talk.date}</p>
                  <h3>
                    {talk.title}
                    <span className="experience-company">
                      {" "}
                      @ {talk.organizer}
                    </span>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </SiteLayout>
  );
}
