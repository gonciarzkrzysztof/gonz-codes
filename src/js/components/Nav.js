import React, { useRef } from "react";
import Link from './Link';

function Nav(props) {
  const navRef = useRef();
  const shifts = Array(props.entries.length).fill(0)
  const offsetTop = navRef.current?.getBoundingClientRect().top + window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;

  window.addEventListener("scroll", () => {
      // const change = innerHeight  - photoRef.current.getBoundingClientRect().top - .25 * photoRef.current.getBoundingClientRect().height;
      // const translateY = -.00011 * change * change;
      
    console.log(shifts.map((shift, index) => {
      return window.scrollY - (index / shifts.length) * (pageHeight - offsetTop)
    }))

      // if (translateY) {
      //   requestAnimationFrame(() => photoRef.current.style.translate = `0 clamp(-50%, ${translateY}px, 0px)`);
      // }
  });

  return (
    <nav 
      className="nav"
      ref={navRef}
    >
      { props.entries.map((entry, index) => {
        const { title, slug } = entry;

        return (
          <Link 
            href={ `#${ slug.current || slug }` } 
            key={ slug.current || slug }
          >
            { title }
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav;
