import React from "react";
import Photo from './Photo';

function Modal(props) {
  const { project } = props;

  const previewSrc = `${ (project.slug.current == 'netguru-design-system'
                          || project.slug.current == 'audioriver'
                          || project.slug.current == 'netguru-blog'
                          || project.slug.current == 'dawid-podsiadlo'
                          || project.slug.current == 'netguru-career-pages'
                        ) ? './' + project.slug.current + '.html' : '' }`;

  return(
    <details className="modal">
      <summary className="modal__toggle">

        { previewSrc !== '' && <iframe className="modal__preview" src={previewSrc} width="1440" height="900" loading="lazy"></iframe> }
        <p className="modal__expand heading--2">
          <span className="modal__expand-label">Click to expand</span>
        </p>
      </summary>
    </details>
  )
}

export default Modal;
