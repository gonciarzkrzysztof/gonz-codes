import Component from '../Component';

class Changelog extends Component {
  constructor(comp) {
    super(comp);
    this.refItem = this.getChildren('item');
    this.commits = this.fetchCommits();

    this.commits.then(commits => this.populateCommits(commits));
  }

  async fetchCommits() {
    const response = await fetch('https://api.github.com/repos/gonciarzkrzysztof/gonz-codes/commits');
    const commits = await response.json();
    return await commits;
  }

  populateCommits(commits) {
    [...commits].map(commit => {
      const clone = this.refItem.cloneNode(true);
      this.refItem.before(clone);
      const message = clone.querySelector('[data-changelog-message]');
      const date = clone.querySelector('[data-changelog-date]');

      message.innerText = commit.commit.message;
      message.href = commit.html_url;
      date.innerText = this.getTimeRange(commit.commit.author.date);
      date.dateTime = commit.commit.author.date;
    })

    this.refItem.remove();
  }

  getTimeRange(date) {
    const parsedDate = Date.parse(date);
    const now = Date.now();
    const timestampRange = now - parsedDate;
    let timeRange = timestampRange / 1000 / 60 / 60 / 24 / 7;

    const timeUnits = [
      {
        name: 'week',
        multiplier: 1,
      },
      {
        name: 'day',
        multiplier: 7,
      },
      {
        name: 'hour',
        multiplier: 7 * 24,
      },
    ]

    const properTimeUnit = timeUnits.find(timeunit => Math.floor(timeRange * timeunit.multiplier));

    if (properTimeUnit != undefined) {
      const { name, multiplier } = properTimeUnit;

      timeRange = Math.floor(timeRange * multiplier);
      return `${timeRange} ${name}${timeRange > 1 ? 's' : ''} ago`;
    } else {
      return '<1 hour ago';
    }
  }
}

export default Changelog;
