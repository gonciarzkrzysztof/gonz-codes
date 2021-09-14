import LoadingAnimation from './LoadingAnimation';
import Wrapper from './Wrapper';
import Intro from './Intro';
import Nav from './Nav';
import Projects from './Projects';
import Photo from './Photo';
import Changelog from './Changelog';
import netguruDesignSystem from '/assets/netguru-design-system-00.jpg';
import netguruDesignSystem2x from '/assets/netguru-design-system-00@2x.jpg';
import audioriver from '/assets/audioriver-00.jpg';
import audioriver2x from '/assets/audioriver-00@2x.jpg';
import netguruBlog from '/assets/netguru-blog-00.jpg';
import netguruBlog2x from '/assets/netguru-blog-00@2x.jpg';
import dawidPodsiadlo from '/assets/dawid-podsiadlo-00.jpg';
import dawidPodsiadlo2x from '/assets/dawid-podsiadlo-00@2x.jpg';
import netguruCareer from '/assets/netguru-career-00.jpg';
import netguruCareer2x from '/assets/netguru-career-00@2x.jpg';
import brandfolks from '/assets/brandfolks-00.jpg';
import brandfolks2x from '/assets/brandfolks-00@2x.jpg';
import brevis from '/assets/brevis-00.jpg';
import brevis2x from '/assets/brevis-00@2x.jpg';

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
    photo: <Photo src={netguruDesignSystem} src2x={netguruDesignSystem2x} width="1198" height="676" alt="Screenshot of Netguru Design System."/>
  },
  {
    name: "Audioriver",
    headingLink: "http://www.audioriver.pl",
    company: {
      name: "Owls Department",
      link: "http://www.owlsdepartment.com/"
    },
    time: "2018",
    technologies: "JS/ES6+, SCSS, animation, AJAX, Wordpress",
    description: <><p>Website of one of the most popular music festivals in Poland including interactive elements, animations and dedicated CMS panel.</p> <p>The website has been featured on <a className="link" href="https://www.siteinspire.com/websites/8291-audioriver">siteInspire</a>.</p></>,
    photo: <Photo src={audioriver} src2x={audioriver2x} width="1198" height="676" alt="Screenshot of Audioriver Festival website."/>
  },
  {
    name: "Netguru Blog",
    headingLink: "https://www.netguru.com/blog/codestories-newsletter-84",
    company: {
      name: "Netguru",
      link: "http://www.netguru.com"
    },
    time: "2020 – 2021",
    technologies: "JS/ES6+, CSS, a11y, PageSpeed, HubSpot",
    description: <><p>Rebuilding existing ~3000 blog posts of Netguru with <a className="link" href="#netguru-design-system">Design System components</a> and aligning to Google's Core Web Vitals. Blog listing pages are still in progress.</p> <p>The project resulted in significant improvement of PageSpeed score, by 30-60 points.</p></>,
    photo: <Photo src={netguruBlog} src2x={netguruBlog2x} width="1198" height="676" alt="Screenshot of Netguru Design System."/>
  },
  {
    name: "Dawid Podsiadło",
    headingLink: "http://www.dawidpodsiadlo.pl",
    company: {
      name: "Owls Department",
      link: "http://www.owlsdepartment.com/"
    },
    time: "2019",
    technologies: "JS/ES6+, SCSS, animation, AJAX, Wordpress",
    description: <><p>Website of a famous Polish singer, promoting his last album and tour. The page contained dedicated CMS panel, plenty of animations and micro-interactions that go with <a className="link" href="https://www.youtube.com/watch?v=d7qNZ_QAz0Y">his brand identity</a>.</p></>,
    photo: <Photo src={dawidPodsiadlo} src2x={dawidPodsiadlo2x} width="1198" height="676" alt="Screenshot of the website of Dawid Podsiadło."/>
  },
  {
    name: "Netguru Career Pages",
    headingLink: "https://www.netguru.com/join-netguru",
    company: {
      name: "Netguru",
      link: "http://www.netguru.com"
    },
    time: "2020",
    technologies: "JS/ES6+, CSS, a11y, HubSpot",
    description: <><p>Rebuilding of career related pages (<a className="link" href="https://www.netguru.com/join-netguru">landing page</a>, <a className="link" href="https://www.netguru.com/career">listing pages</a> and <a className="link" href="https://www.netguru.com/career/senior-python-developer">job offer</a> templates) with <a className="link" href="#netguru-design-system">refactored components</a>, adding URL-based filters and other functionalities.</p></>,
    photo: <Photo src={netguruCareer} src2x={netguruCareer2x} width="1198" height="676" alt="Screenshot of the main Netguru's career page."/>
  },
  {
    name: "Brandfolks",
    headingLink: "http://www.brandfolks.com",
    company: {
      name: "Owls Department",
      link: "http://www.owlsdepartment.com/"
    },
    time: "2017 – 2018",
    technologies: "JS/ES6+, SCSS, animation, AJAX, Wordpress",
    description: <><p>Highly-interactive digital portfolio with AJAX transitions and CMS panel. The website has been featured on <a className="link" href="https://www.siteinspire.com/websites/8078-brandfolks">siteInspire</a>.</p></>,
    photo: <Photo src={brandfolks} src2x={brandfolks2x} width="1198" height="676" alt="Screenshot of the main Netguru's career page."/>
  },
  {
    name: "Brevis",
    headingLink: "http://www.brevis.com.pl",
    company: {
      name: "Owls Department",
      link: "http://www.owlsdepartment.com/"
    },
    time: "2018",
    technologies: "JS/ES6+, SCSS, AJAX, Wordpress",
    description: <><p>Wordpress-based website of a Polish vents manufacturer. Featured on <a className="link" href="https://www.siteinspire.com/websites/8162-brevis">siteInspire</a>.</p></>,
    photo: <Photo src={brevis} src2x={brevis2x} width="1198" height="676" alt="Screenshot of the main Netguru's career page."/>
  },
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
