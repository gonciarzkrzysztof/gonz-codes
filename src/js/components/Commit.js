import React from "react";
import Link from './Link';

function getTimeRange(date) {
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

function Commit({tag: Tag, ...props}) {
  const { commit } = props;
  const date = commit.commit.author.date;

  return (
    <Tag className="commit">
      <span className="commit__message">
        <Link href={commit.html_url}>{commit.commit.message}</Link>
      </span>
      <time className="commit__date" dateTime={date}>{getTimeRange(date)}</time>
    </Tag>
  )
}

export default Commit;
