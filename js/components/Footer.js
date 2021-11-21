import LoadingAnimation from './LoadingAnimation';
import Wrapper from './Wrapper';
import Link from './Link';

import sanityClient from "../sanityClient.js";
import extractBlockContent from "../utils/extractBlockContent.js"

function Footer() {
  const { useState, useEffect } = React;
  const [ content, setContent ] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "footer"]`
      )
      .then(data => setContent(data[0]))
      .catch(console.error);
  }, []);

  return (
    <footer className="footer">
      <LoadingAnimation className="layout--normal">
        <Wrapper className="layout--leading-wide">
          <div className="footer__content">
            { extractBlockContent(content.links) }
            <br/>
            <small className="footer__copyrights">&copy;{ content.year }</small>
          </div>
        </Wrapper>
      </LoadingAnimation>
    </footer>
  )
}

export default Footer;
