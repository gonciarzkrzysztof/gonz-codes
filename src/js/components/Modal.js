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
      setIsIntersecting(entries[0].isIntersecting);
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
    const threshold = innerHeight - iframe.current.getBoundingClientRect().top - .5 * iframe.current.getBoundingClientRect().height;

    if (threshold) {
      // requestAnimationFrame(() => iframe.current.contentWindow.scrollTo(0, .33 * threshold));
    }
  }

  useEffect(() => {
    if (iframe.current) {
      observer.observe(iframe.current);
    }
  }, [isIntersecting]);

  const handleTogglerClick = e => {
    // e.preventDefault();

    // setTimeout(() => {
    setIsOpen(!isOpen);
    // }, isOpen ? 0 : 0)
  }

  const handlerTransitionEnd = e => {

  }


  return (
    <div className={`modal ${isOpen ? 'is-open' : ''}`} ref={modal}>
      <a className="modal__toggler" href={`#${project.slug.current}`} onClick={handleTogglerClick}>
        <span class="visually-hidden">{isOpen ? 'Close' : 'Open'} the modal</span>
        <span aria-hidden="true" class="modal__cross">&#9587;</span>
      </a>

      {previewSrc !== '' && <iframe className="modal__preview" ref={iframe} src={previewSrc} width="1440" height="900" loading="lazy"></iframe>}
    </div >
  )
}

export default Modal;
