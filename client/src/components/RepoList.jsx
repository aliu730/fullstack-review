import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map((entry)=>(
      <div className="repo">
      <span>{entry.owner}<br /></span>
      <div>Repo: {entry.repoName}</div>
      <div>Forks: {(entry.forks)}</div>
      </div>
      )
    )}
  </div>
)

export default RepoList;