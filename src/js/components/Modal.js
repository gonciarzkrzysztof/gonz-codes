import React, { useEffect, useRef, useState } from "react";
import Photo from './Photo';

function Modal(props) {
  const { project } = props;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const iframe = useRef();
  const modal = useRef();

  const observer = new IntersectionObserver(
    (entries, observer) => {
      setIsIntersecting(entries[0].isIntersecting)
    },
    {
      threshold: 0
    }
  );

  const previewSrc = `${(project.slug.current == 'netguru-design-system'
    || project.slug.current == 'audioriver'
    || project.slug.current == 'netguru-blog'
    || project.slug.current == 'dawid-podsiadlo'
    || project.slug.current == 'netguru-career-pages'
  ) ? './' + project.slug.current + '.html' : ''}`;


  if (isIntersecting) {
    const threshold = innerHeight - iframe.current.getBoundingClientRect().height - iframe.current.getBoundingClientRect().top;

    if (threshold) {
      requestAnimationFrame(() => iframe.current.contentWindow.scrollTo(0, .33 * threshold));
    }
  }

  useEffect(() => {
    if (iframe.current) {
      observer.observe(iframe.current);
    }
  }, [isIntersecting]);

  const handleTogglerClick = e => {
    e.preventDefault();

    setTimeout(() => {
      setIsOpen(!isOpen);
    }, isOpen ? 0 : 0)
  }

  const handlerTransitionEnd = e => {

  }


  return (
    <details className="modal" ref={modal} open={isOpen}>
      <summary className="modal__toggler" onClick={handleTogglerClick}>
        {previewSrc !== '' && <iframe className="modal__preview" ref={iframe} src={previewSrc} width="1440" height="900" loading="lazy"></iframe>}
        <p className="modal__expand heading--2">
          <span className="modal__expand-label">Click to expand</span>
        </p>
      </summary>
    </details >
  )
}

export default Modal;
