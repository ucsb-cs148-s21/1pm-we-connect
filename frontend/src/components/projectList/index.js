import React from 'react';

const Idea = (props) => {
  return(
    <div>
    {props.idea}<br />
    {props.leaderName}<br />
    {props.contactInfo}<br />
    </div>
    )
}

const Ideas = (props) => {

  return(
    props.list.map((x) => <Idea idea={x[0]} leaderName={x[1]} contactInfo={x[2]} />)
    )
}

//example usage
//let form = <Ideas list={[["movie","jim","5555555"], ["cs project", "steve", "1111111"]]} />

export default Ideas
