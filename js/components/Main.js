import React from "react";
import LoadingAnimation from './LoadingAnimation';
import Wrapper from './Wrapper';
import Intro from './Intro';
import Nav from './Nav';
import Projects from './Projects';
import Photo from './Photo';
import Changelog from './Changelog';

import sanityClient from "../sanityClient.js";


function Main(props) {
  const { useState, useEffect } = React;
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          technologies[]->,
          'photo': photo.asset->,
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



  const navEntries = [
    ...projects,
    "<br/>",
    {
      title: 'Changelog',
      slug: 'changelog'
    }
  ];

  return (
    <main className="main">
      <LoadingAnimation className="layout--normal">
        <Wrapper className="layout--loose layout--leading-wide">
          <Intro />
          <Nav entries={ navEntries } />
          <Projects projects={ projects } />
          <Changelog />
        </Wrapper>
      </LoadingAnimation>
    </main>
  )
}

export default Main;
