function Photo(props) {
  return (
    <figure className="photo">
      <img className="photo__img" src={props.src} srcset={props.src2x + ' 2x, ' + props.src + ' 1x'} width={props.width} height={props.height} alt={props.alt} loading="lazy" />
    </figure>
  )
}

export default Photo;
