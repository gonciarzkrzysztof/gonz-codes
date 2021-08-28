function Photo(props) {
  return (
    <figure className="photo">
      <img className="photo__img" srcSet={`../../${props.path}@2x.${props.extension} 2x, ../../${props.path}.${props.extension} 1x`} src={`../../${props.path}.${props.extension}`} width={props.width} height={props.height} alt={props.alt} loading="lazy" />
    </figure>
  )
}

export default Photo;
