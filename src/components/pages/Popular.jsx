import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import Loader from '../Loader'
import MainSearch from '../layout/MainSearch'
import { Link } from 'react-router-dom'
import Footer from '../include/Footer'
import MusicControl from '../include/MusicControl'

// 리덕스
import { useDispatch } from 'react-redux'
import { saveText } from '../../utils/counterSlice'

function RankingItem(props) {
  console.log('popular : ', props)
  const dispatch = useDispatch()
  return (
    <Link
      to={`/musicplayer/${props.ranking.key}`}
      onClick={() => {
        dispatch(saveText(props))
      }}
    >
      <li className="item">
        <div>{props.index + 2}</div>
        <div>
          <img src={`${props.ranking.images.coverart}`} alt="" />
        </div>
        <div>{props.ranking.title}</div>
        {/* <div>아무노래</div> */}
        <div>{props.ranking.subtitle}</div>
        <div>
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
            alt=""
          />
          &nbsp; Likes {props.ranking.key.slice(0, 3)}
        </div>
        {/* <audio
          className="audiobox"
          src={`${props.ranking.hub.actions[1].uri}`}
          type="audio/m4a"
          controls
          // autoPlay
        >
          <source
            src={`${props.ranking.hub.actions[1].uri}`}
            type="audio/m4a"
          />
        </audio> */}
      </li>
    </Link>
  )
}
function FirstRankingItem(props) {
  const dispatch = useDispatch()
  return (
    <Link
      to={`/musicplayer/${props.ranking.key}`}
      onClick={() => {
        dispatch(saveText(props))
      }}
    >
      <div className="winner_cont">
        <p className="winner_cont_header">현재 인기 곡</p>
        <div className="album_art_cont">
          {/* <audio
          src={`${props.ranking.hub.actions[1].uri}`}
          type="audio/m4a"
          controls
          // autoPlay
        >
          <source
            src={`${props.ranking.hub.actions[1].uri}`}
            type="audio/m4a"
          />
        </audio> */}
          <img src={`${props.ranking.images.coverart}`} alt="" />
          <img
            className="album_art_shadow"
            src={`${props.ranking.images.coverart}`}
            alt="앨범아트 그림자"
          />
        </div>
        <h4>1위</h4>
        <p className="artist">{props.ranking.subtitle}</p>
        <p className="song_title">{props.ranking.title}</p>
        <p className="refresh_time">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/refresh.svg"
            alt="새로고침"
          />
          <span>2022. 11. 13. 오후 22:02</span>
        </p>
        <p className="trophy_desc">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/trophy.svg"
            alt="트로피"
          />
          <span>올해 47주간 1위</span>
        </p>
        {/* <audio
        src={`${props.ranking.hub.actions[1].uri}`}
        type="audio/m4a"
        controls
        // autoPlay
      >
        <source src={`${props.ranking.hub.actions[1].uri}`} type="audio/m4a" />
      </audio> */}
      </div>
    </Link>
  )
}

const Popular = () => {
  const [ranking, setRanking] = useState(null)
  const [firstranking, setFirstRanking] = useState(null)
  const [selectCategory, setSelectCategory] = useState('b')

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=9&startFrom=0`
    ).then((data) => {
      setRanking(data.tracks.filter((item, index) => index > 0))
      setFirstRanking(data.tracks.filter((item, index) => index === 0))
    })
  }, [])

  // useEffect(() => {
  //   fetchAPI(
  //     `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=1&startFrom=0`
  //   ).then((data) => setFirstRanking(data.tracks))
  // }, [])

  if (!ranking?.length) return <Loader />
  // if (!firstranking?.length) return <Loader />
  return (
    <>
      <div className="page_title_container">
        <Link to={`/`}>〈</Link>
        <h2>Top 10</h2>
      </div>

      <div className="ranking_cont">
        {firstranking.map((ranking, index) => (
          <FirstRankingItem key={index} ranking={ranking} />
        ))}
        <div className="list_cont">
          <div className="ranking_list_header">
            <div>순위</div>
            <div>썸넬</div>
            <div>곡명</div>
            {/* <div>앨범</div> */}
            <div>아티스트</div>
            <div>LIKE</div>
            <div>Play</div>
          </div>
          <ul>
            {ranking.map((ranking, index) => (
              <RankingItem key={index} ranking={ranking} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Popular
