import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./assets/search.svg";
import Avatar from "./assets/avatar.jpg";
import AvatarNature from "./assets/avatar-nature.jpg";

function App() {
  const [title, setTitle] = useState("product designer");
  const [animationEnd, setAnimationEnd] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [photographer, setPhotographer] = useState(false);
  const [projects, setProjects] = useState();

  // Get the projects list
  const getProjects = async () => {
    const url = "./data/projects.json";
    const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    try {
      const response = await fetch(url, options);

      if (response.ok) {
        const responseJson = await response.json();
        setProjects(await responseJson);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  // Wait first animation to end,
  // then render the input content
  useEffect(() => {
    getProjects();

    let timeout;
    setTimeout(() => {
      setAnimationEnd(true);
    }, 500);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  // Wait second animation to end,
  // then render the search results
  useEffect(() => {
    let timeout;
    setTimeout(() => {
      setSearchResults(true);
    }, 4200);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="App">
      <div className="Header-wrapper">
        {title !== "product designer" && (
          <div className="Back-button">
            <button
              type="button"
              onClick={() => {
                setSearchResults(true);
                setTitle("product designer");
                setFrontend(false);
                setPhotographer(false);
              }}
            >
              Back
            </button>
          </div>
        )}
        <div className="App-search">
          <img src={Search} alt="search icon" />

          {animationEnd && <h1>victor santos {title}</h1>}
        </div>
      </div>

      {searchResults && (
        <div className="Search-results">
          <p>No results containing all your search terms were found.</p>
          <div className="Search-results--inner">
            <div>
              <p>Did you mean:</p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setSearchResults(false);
                  setTitle("front-end developer");
                  setFrontend(true);
                }}
              >
                victor santos front-end developer
              </button>

              <button
                type="button"
                onClick={() => {
                  setSearchResults(false);
                  setTitle("landscape photographer");
                  setPhotographer(true);
                }}
              >
                victor santos landscape photographer
              </button>
            </div>
          </div>
        </div>
      )}

      {frontend && (
        <section className="Frontend">
          <section className="Frontend-wrapper">
            <div className="Hidden-lg">
              <img src={Avatar} alt="Avatar" />
            </div>
            <div>
              <h3>Olá, tudo bom?</h3>

              <p className="subtitle">
                As you can probably tell, my name is Victor.
              </p>

              <p>
                I&apos;m a creative front-end developer passionate about user
                experience. I love crafting creative, fluid and functional web
                applications.
              </p>
            </div>

            <div className="Hidden-xs">
              <img src={Avatar} alt="Avatar" />
            </div>
          </section>

          <section className="Frontend-div">
            <h4>About me</h4>
            <p>
              I&apos;m an optimistic nihilist and lifelong learner who also
              happens to design and code. Product Designer turned Front-end
              Engineer after 7 years of experience in UX &amp; Product Design
              building SaaS products. Apart from tech, my passion lies in
              landscape photography.
            </p>
            <p>
              In my free time, you will find me: Listening to weird metal bands,
              enjoying life with my best half, landscape photographing,
              traveling, cooking, and working on side projects like&nbsp;
              <a
                href="https://weather.victorsantos.work"
                target="_blank"
                rel="noreferrer"
              >
                mighty weather
              </a>
              &nbsp; and &nbsp;
              <a
                href="https://www.gitshowcase.com"
                target="_blank"
                rel="noreferrer"
              >
                gitshowcase
              </a>
              .
            </p>
          </section>

          <section className="Frontend-div">
            <h4>Technologies</h4>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML</li>
              <li>React</li>
              <li>CSS</li>
            </ul>
          </section>

          <section className="Frontend-div">
            <h4>Projects</h4>
            <div className="Projects">
              {projects &&
                projects.map((project) => (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <div className="Projects-div" key={project.id}>
                      <header>
                        <p className="stack">{project.stack}</p>
                        <p className="title">{project.title}</p>
                        <p>{project.description}</p>
                      </header>
                      <footer>
                        <div className="icons">
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_42_15)">
                                <path
                                  d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_42_15">
                                  <rect width="22" height="22" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M15 3H21V9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10 14L21 3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        </div>
                      </footer>
                    </div>
                  </a>
                ))}
            </div>
          </section>

          <section className="Frontend-div">
            <h4>Get in touch</h4>
            <p>Don&apos;t be a stranger. Let&apos;s connect:</p>
            <div className="Contact">
              <a
                href="https://github.com/victorgaard"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_42_15)">
                    <path
                      d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_15">
                      <rect width="22" height="22" />
                    </clipPath>
                  </defs>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/victor-ferreira-santos/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9H2V21H6V9Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:hey@victorsantos.work"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Email
              </a>
            </div>
          </section>
          <footer className="Footer">
            <p>Designed &amp; Built by Victor Santos🐧</p>
          </footer>
        </section>
      )}

      {photographer && (
        <section className="Photographer">
          <section className="Photographer-wrapper">
            <div>
              <img src={AvatarNature} alt="Avatar" />
            </div>
            <div>
              <h3>Join me in the quest for beauty</h3>

              <p className="subtitle">
                A landscape photographer &amp; filmmaker in the making.
              </p>
            </div>
          </section>
          <section className="Iframe">
            <script src="https://snapwidget.com/js/snapwidget.js" />
            <iframe
              src="https://snapwidget.com/embed/992098"
              className="snapwidget-widget"
              allowtransparency="true"
              frameBorder="0"
              scrolling="no"
              style={{
                marginTop: "48px",
                border: "none",
                overflow: "hidden",
                width: "100%",
                height: "2260px",
              }}
              title="Instagram feed"
            />
          </section>
          <footer className="Footer">
            <p>Designed &amp; Built by Victor Santos🐧</p>
          </footer>
        </section>
      )}
    </div>
  );
}

export default App;
