import React from "react";

function Content(props) {
  return (
    <section className="content">
      <img src={require(`../images/${props.image}.jpg`)} alt={props.album} />
      <div className="content-info">
        <h2 className="album">{props.album}</h2>
        <p className="artist">by {props.artist}</p>
        <p className="description">{props.description}</p>
      </div>
    </section>
  )
}

export default Content