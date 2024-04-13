import React, { useState, useRef, useEffect } from "react";

function Photo(props) {
  const { photo, alt, width, height, isMovingOnScroll } = props;
  const ratio = photo && photo.metadata.dimensions.aspectRatio;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const photoRef = useRef();


  useEffect(() => {
    if(isMovingOnScroll) {
      const observer = new IntersectionObserver(
        (entries, observer) => setIsIntersecting(entries[0].isIntersecting),
        { threshold: 0 }
      );
      
      observer.observe(photoRef.current);
    }
  }, [photoRef, isIntersecting]);

  window.addEventListener("scroll", () => {
    if (isIntersecting) {
      const change = innerHeight  - photoRef.current.getBoundingClientRect().top - .25 * photoRef.current.getBoundingClientRect().height;
      const translateY = -.00011 * change * change;
      
      console.log(isIntersecting);

      if (translateY) {
        requestAnimationFrame(() => photoRef.current.style.translate = `0 clamp(-50%, ${translateY}px, 0px)`);
      }
    }
  });
  

  return (
    <figure className="photo">
      <img className="photo__img" src={`${photo?.url}?w=${width * 2}&auto=format`} width={width} height={height} alt={alt} ref={photoRef} loading="lazy" />
    </figure>
  )
}

export default Photo;
