import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./assets/search.svg";
import Avatar from "./assets/avatar.jpg";

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
    console.log("primeiro useEffect rolando");
    getProjects();

    let timeout;
    setTimeout(() => {
      setAnimationEnd(true);
    }, 1200);

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
    }, 6400);

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
        <div className="Frontend">
          <div className="Frontend-wrapper">
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

            <div>
              <img src={Avatar} alt="Avatar" />
            </div>
          </div>

          <div className="Frontend-div">
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
              &nbsp;and&nbsp;
              <a
                href="https://www.gitshowcase.com"
                target="_blank"
                rel="noreferrer"
              >
                gitshowcase
              </a>
            </p>
          </div>

          <div className="Frontend-div">
            <h4>Technologies</h4>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>ReactJS</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="Frontend-div">
            <h4>Projects</h4>
            {projects &&
              projects.map((project) => (
                <p key={project.id}>{project.greeting1}</p>
              ))}
          </div>

          <div className="Frontend-div">
            <h4>Get in touch</h4>
          </div>
        </div>
      )}

      {photographer && (
        <div className="Photographer">
          <p>
            Come back sometime soon, my friend. Meanwhile, feel free to check my
            Instagram account&nbsp;@
            <a
              href="https://www.instagram.com/hunter.graphy/"
              target="_blank"
              rel="noreferrer"
            >
              hunter.graphy
            </a>
          </p>

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
        </div>
      )}
    </div>
  );
}

export default App;
