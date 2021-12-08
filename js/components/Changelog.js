import React from "react";
import Heading from './Heading';
import Commit from './Commit';

function Changelog() {
  const { useState, useEffect } = React;
  const [commits, setCommits] = useState(null);
  const [isListExpanded, setIsListExpanded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/repos/gonciarzkrzysztof/gonz-codes/commits');
      const commits = await response.json();

      setCommits(Array.isArray(commits) && commits);
    }

    fetchData()
  }, [])

  return commits && (
    <section className="changelog layout--dense" id="changelog">
      <Heading className="changelog__heading heading--2" tag="h2">Changelog</Heading>

      <ul className="changelog__list layout--normal">
        {commits && (isListExpanded ? commits : commits.slice(0, 5)).map(commit => <Commit commit={commit} tag="li" key={commit.sha} />
        )}
      </ul>

      { !isListExpanded && <button className="changelog__button" onClick={() => setIsListExpanded(true)}>Show all</button> }
    </section>
  )
}

export default Changelog;
