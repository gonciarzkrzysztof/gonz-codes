import Heading from './Heading';
import Link from './Link';
import Copy from './Copy';
import Photo from './Photo';

function Project(props) {
  const { project } = props;

  return (
    <article className={`project ${ props.className || '' }`}>
      <Heading className="project__title heading--2" tag="h3">
        <Link className="heading--2__text" href={project.headingLink}>{project.name}</Link>
      </Heading>

      <div className="project__info">
        <p className="project__company">With <Link href={ project.company.link }>{ project.company.name }</Link></p>
        <p className="project__time">{ project.time }</p>
        <p className="project__technologies">{ project.technologies }</p>
      </div>

      <Copy>
        { project.description }
      </Copy>

      { project.photo }
    </article>
  )
}

export default Project;
