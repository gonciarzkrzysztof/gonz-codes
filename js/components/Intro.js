import Heading from './Heading';
import Photo from './Photo';
import Copy from './Copy';
import Link from './Link';

function Intro(props) {
  return (
    <section className="intro layout--leading-narrow">
      <Heading className="intro__heading heading--1" tag="h2">Hey there,<br/>Gonz here!</Heading>

      <Photo path="/assets/japa" extension="jpg" width="390" height="495" alt="Me, Gonz" />

      <Copy>
        <p>Welcome to my portfolio! It's still far from perfect (React, CMS & Jest<br/> in the queue) but I don't want to miss the chance to apply.</p>
        <p>You can see how it evolves in <Link href="#changelog">Changelog</Link>.</p>
      </Copy>
    </section>
  )
}

export default Intro;
