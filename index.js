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
      date.innerText = getTimeRange(commit.commit.author.date);
      date.dateTime = commit.commit.author.date;
    })

    referenceNode.remove();
  })
}

populateCommits()

function getTimeRange(date) {
  let parsedDate = Date.parse(date);
  let now = Date.now();
  let timestampRange = now - parsedDate;
  let timeRange = timestampRange / 1000 / 60 / 60 / 24 / 7;

  if (Math.floor(timeRange)) {
    timeRange = Math.floor(timeRange);
    return `${timeRange} week${timeRange > 1 ? 's' : ''} ago`;
  } else if (Math.floor(timeRange * 7)) {
    timeRange *= 7;
    timeRange = Math.floor(timeRange);
    return `${timeRange} day${timeRange > 1 ? 's' : ''} ago`;
  } else if(Math.floor(timeRange * 7 * 24)) {
    timeRange *= 7 * 24;
    timeRange = Math.floor(timeRange);
    return `${timeRange} hour${timeRange > 1 ? 's' : ''} ago`;
  } else {
    return `<1 hour ago`;
  }
}
