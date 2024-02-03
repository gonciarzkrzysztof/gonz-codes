import React, { useState, useEffect } from "react";
import LoadingAnimation from './LoadingAnimation';
import Wrapper from './Wrapper';
import Intro from './Intro';
import Nav from './Nav';
import Projects from './Projects';
import Photo from './Photo';
import Changelog from './Changelog';

import sanityClient from "../sanityClient.js";


function Main(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          technologies[]->,
          'photo': photo.asset->,
          'html_file': html_file.asset->,
          'css_file': css_file.asset->,
          'js_file': js_file.asset->,
          ...
        }`
      )
      .then(data => setProjects(data.sort((prev, curr) => {
        let oldDate = prev._createdAt;
        let newDate = curr._createdAt;

        return Date.parse(oldDate) - Date.parse(newDate);
      })))
      .catch(console.error);
  }, []);

  return (
    <main className="main">
      <LoadingAnimation className="layout--normal">
        <Wrapper className="layout--loose layout--leading-wide">
          <Intro />
          <Nav entries={projects} />
          {projects.length > 0 && <Projects projects={projects} />}
          {/* <Changelog /> */}
        </Wrapper>
      </LoadingAnimation>
    </main>
  )
}

export default Main;
