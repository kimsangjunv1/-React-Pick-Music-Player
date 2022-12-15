import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'

import Loader from '../Loader'

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

const RankCont = () => {
  const [ranking, setRanking] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=5&startFrom=0`
    ).then((data) => setRanking(data.tracks))
  }, [])

  if (!ranking?.length) return <Loader />

  return (
    <div className="ranking_cont unflex">
      <div className="section_title">
        <h2>Top Pick</h2>
      </div>
      <div className="list_cont maxWidth">
        <ul>
          {ranking.map((ranking, index) => (
            <RankingItem key={index} ranking={ranking} index={index} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RankCont
