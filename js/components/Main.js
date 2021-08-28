import LoadingAnimation from './LoadingAnimation';
import Wrapper from './Wrapper';
import Intro from './Intro';
import Nav from './Nav';
import Projects from './Projects';
import Photo from './Photo';
import Changelog from './Changelog';

const projects = [
  {
    name: "Netguru Design System",
    headingLink: "https://www.netguru.com/join-netguru",
    company: {
      name: "Netguru",
      link: "http://www.netguru.com"
    },
    time: "2019 – Now",
    technologies: "JS/ES6+, CSS, a11y, HubSpot, animation",
    description: <><p>Developing a design system for one of the top Europe's software houses. The project required creating a scalable system of components, refactoring the existing modules, improvements of accessibility, SEO and PageSpeed score.</p><p>Netguru Design System is planned to be used on every company's website until the end of 2021.</p></>,
    photo: <Photo />
  }
];

const navEntries = [
  ...projects.map(project => project.name),
  "",
  "Changelog"
];

function Main(props) {
  return (
    <main className="main">
      <LoadingAnimation className="layout--normal">
        <Wrapper className="layout--leading-wide">
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
