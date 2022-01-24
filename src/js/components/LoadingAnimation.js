import React from "react";

function LoadingAnimation(props) {
  const { useState, useEffect } = React;
  const [ isRunningClassName, setIsRunningClassName ] = useState('');

  useEffect(() => {
    setIsRunningClassName('is-loading-animation-running')
  })

  return (
    <div className={`loading-animation ${ isRunningClassName } ${ props.className || '' }`}>
      { props.children }
    </div>
  )
}

export default LoadingAnimation;
