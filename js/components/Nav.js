import Link from './Link';

function slugify(string) {
  return string
    .normalize("NFD")
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'')
}

function Nav(props) {
  return (
    <nav className="nav">
      { props.entries.map(entry => {
        const slug = slugify(entry);

        return (
          entry !== "" ? <Link href={ `#${slug}` } key={ slug }>{ entry }</Link> : <br/>
        )
      })}
    </nav>
  )
}

export default Nav;
