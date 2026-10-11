import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FaGithub } from "react-icons/fa";

import { publications, SectionHeading } from "@/view/Main";
import SiteLayout from "@/view/SiteLayout";

type Publication = (typeof publications)[number];

export default function PublicationsPage() {
  const visiblePublications = publications.filter(
    (publication) => !publication.hidden,
  );

  return (
    <SiteLayout>
      <main className="content-column standalone-page">
        <section
          className="content-section publications-section"
          id="publications"
        >
          <SectionHeading title="Publications" />
          <PublicationList publications={visiblePublications} />
        </section>
      </main>
    </SiteLayout>
  );
}

interface PublicationListProps {
  publications: Publication[];
}

function PublicationList({ publications }: PublicationListProps) {
  return (
    <ol className="publication-list">
      {publications.map((publication) => (
        <li className="publication-item" key={publication.title}>
          <article>
            <div className="publication-title-row">
              <h3>
                {publication.title}
                {publication.language === "zh" && (
                  <span className="publication-language">Chinese</span>
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
              <p className="publication-authors">{publication.authors}</p>
            </div>
            <p className="publication-venue">
              {publication.venue}
              {publication.award && (
                <strong> (Honorable Mention Demo Paper)</strong>
              )}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}
