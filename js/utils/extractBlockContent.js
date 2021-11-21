import Link from '../components/Link';

export default function exportBlockContent(content) {
  return content && content.map(item => {
    return (
      <p key={item._key}>{item.children.map(child => {
        if (child.marks.length) {
          const id = child.marks[0];
          const href = item.markDefs.find(def => def._key === id).href;

          return <Link href={ href } key={ id }>{ child.text }</Link>
        } else {
          return child.text
        }
      })}</p>
    )
  })
}
