import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import Loader from '../Loader'

function RankingItem(props) {
  return (
    <Link to="/popular" className="ranking_item">
      <p>{props.index + 1}</p>
      <img src={`${props.ranking.images.coverart}`} alt="" />
      <p>{props.ranking.title}</p>
      <p>{props.ranking.subtitle}</p>
    </Link>
  )
}

const RankCont = ({ test }) => {
  return (
    <div className="main_ranking_cont">
      <div className="main_ranking_title_container">
        <p className="section_title_desc">1위부터 10위까지 모아봤어요 XD</p>
        <h2>Top 10</h2>
      </div>
      <div className="main_ranking_list_container">
        {test.map((ranking, index) => (
          <RankingItem key={index} ranking={ranking} index={index} />
        ))}
      </div>
    </div>
  )
}

export default RankCont
