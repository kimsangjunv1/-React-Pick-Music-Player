import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'

// import Loader from '../Loader'

function RankingItem(props) {
  return (
    <li className="item">
      <div>{props.index + 1}</div>
      <div>
        <img src={`${props.ranking.images.coverart}`} alt="" />
      </div>
      <div>{props.ranking.title}</div>
      {/* <div>아무노래</div> */}
      <div>{props.ranking.subtitle}</div>
      <audio
        className="audiobox"
        src={`${props.ranking.hub.actions[1].uri}`}
        type="audio/m4a"
        controls
        // autoPlay
      >
        <source src={`${props.ranking.hub.actions[1].uri}`} type="audio/m4a" />
      </audio>
    </li>
  )
}

const RankCont = ({ test }) => {
  // if (!test?.length) return <Loader />

  return (
    <div className="ranking_cont unflex">
      <div className="section_title">
        <h2>Top Pick</h2>
      </div>
      <div className="list_cont maxWidth">
        <ul>
          {test.map((ranking, index) => (
            <RankingItem key={index} ranking={ranking} index={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RankCont
