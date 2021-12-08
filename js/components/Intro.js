import React from "react";
import Heading from './Heading';
import Photo from './Photo';
import Copy from './Copy';
import Link from './Link';

import sanityClient from "../sanityClient.js";
import extractBlockContent from "../utils/extractBlockContent.js"

function Intro(props) {
  const { useState, useEffect } = React;
  const [ intro, setIntro ] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "intro"] {
          'photo': photo.asset->,
          ...
        }`
      )
      .then(data => setIntro(data[0]))
      .catch(console.error);
  }, []);

  return intro && (
    <section className="intro layout--leading-narrow">
      <Heading className="intro__heading heading--1" tag="h2">
        { intro.heading }
      </Heading>

      <Photo photo={ intro.photo } width="280" alt={ `Photo of the author.` } />

      <Copy>
        { extractBlockContent(intro.copy) }
      </Copy>
    </section>
  )
}

export default Intro;
