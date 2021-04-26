const changelog = document.querySelector('[data-changelog]');
const changelogList = changelog.querySelector('[data-changelog-list]');

async function fetchCommits() {
  const response = await fetch('https://api.github.com/repos/gonciarzkrzysztof/gonz-codes/commits');
  const commits = response.json();
  return commits;
}

async function populateCommits() {
  const referenceNode = changelogList.querySelector('[data-changelog-item]');

  fetchCommits().then(commits => {
    commits.map(commit => {
      const clone = referenceNode.cloneNode(true);
      referenceNode.before(clone);
      const message = clone.querySelector('[data-changelog-message]');
      const date = clone.querySelector('[data-changelog-date]');

      message.innerText = commit.commit.message;
      message.href = commit.html_url;
      date.innerText = commit.commit.author.date.split(/[A-Za-z]/g).filter(Boolean).join(', ');
      date.dateTime = commit.commit.author.date;
    })

    referenceNode.remove();
  })
}

populateCommits()
