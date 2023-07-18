import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import Loader from '../Loader'

function RankingItem(props) {
  return (
    <li className="item">
      <div>{props.index + 1}</div>
      <div>
        <img src={`${props.ranking.images.coverart}`} alt="" />
      </div>
      <div>{props.ranking.title}</div>
      <div>{props.ranking.subtitle}</div>
      <audio
        className="audiobox"
        src={`${props.ranking.hub.actions[1].uri}`}
        type="audio/m4a"
        controls
      >
        <source src={`${props.ranking.hub.actions[1].uri}`} type="audio/m4a" />
      </audio>
    </li>
  )
}

const RankCont = ({ test }) => {
  return (
    <div className="ranking_cont unflex">
      <div className="section_title">
        <h2>Top Pick</h2>
      </div>
      <div className="list_cont maxWidth">
        <ul>
          <Link to="/popular">
            {test.map((ranking, index) => (
              <RankingItem key={index} ranking={ranking} index={index} />
            ))}
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default RankCont
