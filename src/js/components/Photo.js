import React from "react";

function Photo(props) {
  const { photo, alt, width } = props;
  const ratio = photo && photo.metadata.dimensions.aspectRatio;
  const renderWidth = Math.round(width * 1.4);

  return (
    <figure className="photo">
      <img className="photo__img" src={`${photo && photo.url}?w=${renderWidth}&auto=format`} width={Math.round(renderWidth)} height={Math.round(renderWidth / ratio)} alt={alt} loading="lazy" />
    </figure>
  )
}

export default Photo;
