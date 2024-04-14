import React, { useRef } from "react";
import Link from './Link';

function Nav(props) {
  const navRef = useRef();
  const offsetTop = navRef.current?.getBoundingClientRect().top + window.scrollY;
  

  window.addEventListener("scroll", () => {
    const pageHeight = document.documentElement.scrollHeight;
    const distance = pageHeight - offsetTop;

    const factor = props.entries.length * ((window.scrollY - offsetTop) / distance);

    requestAnimationFrame(() => navRef.current.style.setProperty('--nav-factor', `${factor}`));
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
