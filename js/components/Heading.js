function Heading({ tag: Tag, ...props}) {
  return (
    <Tag className={`${ props.className || '' }`}>
      { props.children }
    </Tag>
  )
}

export default Heading;
