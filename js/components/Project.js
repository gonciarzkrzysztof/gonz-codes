import Heading from './Heading';
import Link from './Link';
import Copy from './Copy';
import Photo from './Photo';
import sanityClient from "../sanityClient.js";
import extractBlockContent from "../utils/extractBlockContent.js"

function Project(props) {
  const { project } = props;

  for (let key in project.time) {
    let date = project.time[key];
    project.time[key] = new Date(Date.parse(date)).getFullYear();
  }

  const { startDate, endDate } = project.time;

  return (
    <article id={ project.slug.current } className={`project ${props.className || ''}`}>
      <Heading className="project__title heading--2" tag="h3">
        <Link className="heading--2__text" href={project.url}>{project.title}</Link>
      </Heading>

      <div className="project__info">
        <p className="project__company">With <Link href={project.company.url}>{project.company.name}</Link></p>
        <p className="project__time">
          <time dateTime={startDate}>{startDate}</time>
          {(startDate !== endDate && endDate && <time dateTime={endDate}> – {endDate}</time>) || <time dateTime={ new Date().toLocaleDateString().replaceAll('.', '-') }> - Now</time>}
        </p>
        <p className="project__technologies">{project.technologies.map(technology => technology.title).join(', ')}</p>
      </div>

      <Copy>
        { extractBlockContent(project.description) }
      </Copy>

      <Photo photo={ project.photo } alt={ `Screenshot of ${ project.title }.` } />
    </article>
  )
}

export default Project;
