import React from "react";

function Link(props) {
  const isExternal = new URL(props.href, location.origin).origin !== location.origin;

  { isExternal }
  
  return (
    <a className={ [ 'link', props.className ].join(' ') } href={ props.href } target={isExternal && '_blank'}>
      <span className="link__label">{ props.children }</span>

      { isExternal && (
        <svg className="link__external" width="17" height="18" strokeWidth="2" strokeLinecap="square" viewBox="0 0 17 18" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 16.5L16.2277 1.27231"/>
          <line x1="16.5" y1="11" x2="16.5" y2="1"/>
          <path d="M5.5 1L16.5 1"/>
        </svg>
      )}

    </a>
  )
}

export default Link;
