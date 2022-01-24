import React from "react";
import Link from './Link';

function Nav(props) {
  return (
    <nav className="nav">
      { props.entries.map(entry => {
        const { title, slug } = entry;

        return (
          entry !== "<br/>" ? <Link href={ `#${ slug.current || slug }` } key={ slug.current || slug }>{ title }</Link> : <br key="br"/>
        )
      })}
    </nav>
  )
}

export default Nav;
