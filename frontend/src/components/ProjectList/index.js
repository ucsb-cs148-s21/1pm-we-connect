import React from 'react';

const Idea = ({ idea, leaderName, contactInfo  }) => {
  return(
    <div>
    <h1>{idea}</h1>
    <p>{leaderName}</p>
    <p>{contactInfo}</p>
    </div>
    )
}

const Ideas = ({ list }) => {

  return(
    list.map((x) => <Idea idea={x["idea"]} leaderName={x["leaderName"]} contactInfo={x["contactInfo"]} />)
    )
}


export default Ideas
