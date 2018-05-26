import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    {props.repos.map((entry)=>(
      <div>{entry.repoName}</div>
      )
    )}
  </div>
)

export default RepoList;