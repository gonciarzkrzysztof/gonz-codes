function Photo(props) {
  const { photo, alt } = props;

  return photo && (
    <figure className="photo">
    <img className="photo__img" src={ photo.url } width={ photo.metadata.dimensions.width } height={ photo.metadata.dimensions.height } alt={ alt } loading="lazy" />
    </figure>
  ) || null
}

export default Photo;
