import Heading from './Heading';
import Photo from './Photo';
import Copy from './Copy';
import Link from './Link';

import sanityClient from "../sanityClient.js";
import extractBlockContent from "../utils/extractBlockContent.js"

function Intro(props) {
  const { useState, useEffect } = React;
  const [ intro, setIntro ] = useState([]);

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

  return (
    <section className="intro layout--leading-narrow">
      <Heading className="intro__heading heading--1" tag="h2">
        { intro.heading }
      </Heading>

      <Photo photo={ intro.photo } alt={ `Photo of the author.` } />

      <Copy>
        { extractBlockContent(intro.copy) }
      </Copy>
    </section>
  )
}

export default Intro;
