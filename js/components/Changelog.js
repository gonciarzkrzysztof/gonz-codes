import Heading from './Heading';
import Commit from './Commit';

function Changelog() {
  const { useState, useEffect } = React;
  const [commits, setCommits] = useState([]);
  const [isListExpanded, setIsListExpanded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/repos/gonciarzkrzysztof/gonz-codes/commits');
      const commits = await response.json();
      setCommits(commits);
    }

    fetchData()
  }, [])

  return (
    <section className="changelog layout--dense" id="changelog">
      <Heading className="changelog__heading heading--2" tag="h2">Changelog</Heading>

      <ul className="changelog__list layout--normal">
        {(isListExpanded ? commits : commits.slice(0, 5)).map(commit => {
          return (
            <Commit commit={commit} tag="li" key={commit.sha} />
          )
        }
        )}
      </ul>

      { !isListExpanded && <button class="changelog__button" onClick={() => setIsListExpanded(true)}>Show all</button> }
    </section>
  )
}

export default Changelog;
