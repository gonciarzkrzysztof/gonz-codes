import React, { useEffect, useRef, useState } from "react";
import Heading from './Heading';
import Link from './Link';
import Copy from './Copy';
import extractBlockContent from "../utils/extractBlockContent.js";

function Project(props) {
  const { project } = props;
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const iframe = useRef();

  for (let key in project.time) {
    let date = project.time[key];
    project.time[key] = new Date(Date.parse(date)).getFullYear();
  }

  const { startDate, endDate } = project.time;

  // if (isIntersecting) {
  //   const threshold = .2 * (innerHeight  - iframe.current.getBoundingClientRect().top - .5 * iframe.current.getBoundingClientRect().height) /* + iframe.current.contentWindow.scrollY */;

  //   if (threshold) {
  //     requestAnimationFrame(() => iframe.current.contentWindow.scrollTo(0, threshold));
  //   }
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries, observer) => setIsIntersecting(entries[0].isIntersecting),
  //     { threshold: 0 }
  //   );

  //   if (iframe.current) {
  //     observer.observe(iframe.current);

  //     const styleElement = iframe.current.contentDocument.createElement('style')
  //     styleElement.innerText = 'a { cursor: not-allowed!important; }';
  //     const aElements = [...iframe.current.contentDocument.querySelectorAll('a')];

  //     aElements.map(a => a.addEventListener('click', e => e.preventDefault()));

  //     iframe.current.contentDocument.head?.appendChild(styleElement);
  //   }

  //   return () => {
  //     if (iframe.current) {
  //       observer.unobserve(iframe.current);
  //     }
  //   }
  // }, [iframe.current, isIntersecting]);

  return project && (
    <article id={project.slug.current} className={`project ${props.className || ''}`}>
      <Heading className="project__title heading--2" tag="h3">
        <Link className="heading--2__text" href={project.url}>{project.title}</Link>
      </Heading>

      <div className="project__info">
        <p className="project__company">With <Link href={project.company.url}>{project.company.name}</Link></p>
        <p className="project__time">
          <time dateTime={startDate}>{startDate}</time>
          {(startDate !== endDate && endDate && <time dateTime={endDate}> – {endDate}</time>) || <time dateTime={new Date().toLocaleDateString().replaceAll('.', '-')}> - Now</time>}
        </p>
        <p className="project__technologies">{project.technologies.map(technology => technology.title).join(', ')}</p>
      </div>

      <Copy>
        {extractBlockContent(project.description)}
      </Copy>

      { project.title.trim() !== 'Brandfolks' && project.title.trim() !== 'Brevis' && (
        <div className="project__preview">
          {project.slug.current !== '' && <iframe className="project__iframe" ref={iframe} src={project.slug.current} width="860" height="540" loading="lazy"></iframe>}

          <Link href={project.url}>
            <Heading className="heading--2" tag="span">Click to open the live version</Heading>
          </Link>
        </div>
      )}
    </article>
  )
}

export default Project;
