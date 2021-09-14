import Heading from './Heading';
import Photo from './Photo';
import Copy from './Copy';
import Link from './Link';
import japa from '/assets/japa.jpg';
import japa2x from '/assets/japa@2x.jpg';

function Intro(props) {
  return (
    <section className="intro layout--leading-narrow">
      <Heading className="intro__heading heading--1" tag="h2">Hey there,<br/>Gonz here!</Heading>

      <Photo src={ japa } src2x={ japa2x } width="390" height="495" alt="Me, Gonz" />

      <Copy>
        <p>Design-focused web developer with 5+ years of work experience and 50+ commercial RWD projects. Currently building design system.</p>
        <p>Checkout my portfolio and see how it evolves in <Link href="#changelog">Changelog</Link>.</p>
      </Copy>
    </section>
  )
}

export default Intro;
