import React, { useState, useEffect } from 'react'
import TitleComponents from '../common/TitleComponents'
import { Link } from 'react-router-dom'

import icon_graph from './../../styles/img/icon/icon_graph.svg'

import { useDispatch } from 'react-redux'
import { saveArtistID } from '../../utils/counterSlice'
import { saveProps } from '../../utils/counterSlice'

function ArtistItem(props) {
  const dispatch = useDispatch()
  return (
    <Link
      to={`/artist/details/${props?.artist?.artists[0].adamid}`}
      onClick={() => {
        dispatch(saveArtistID(props?.artist?.artists[0].adamid))
        dispatch(saveProps(props))
      }}
      className="main_artist_item"
    >
      <div className="artist_info_container">
        <p className="artist_eng_name">{props?.artist?.artists[0].alias}</p>
        <h2 className="artist_name">{props?.artist?.subtitle}</h2>
      </div>
      <img
        src={`${props?.artist?.images.background}`}
        alt={`${props?.artist?.subtitle}의 이미지`}
      />
      <div className="artist_like_container">
        <img className="icon" src={icon_graph} alt="그래프 아이콘" />
        <p className="count">{props?.artist?.key.slice(0, 4)}</p>
        <p className="type">view</p>
      </div>
    </Link>
  )
}

const ArtistCont = ({ test }) => {
  // if (!test?.length) return <Loader />
  const [artistItem, setArtistItem] = useState([])
  const filterArtist = () => {
    setArtistItem(test.filter((item, index) => index >= 0 && index <= 7))
  }

  useEffect(() => {
    filterArtist()
  }, [])

  return (
    <section className="main_artist_container">
      <TitleComponents
        title={'오늘의 날씨에 어울리는 가수는?'}
        desc={'여기에서 날씨에 맞는 음악을 추천해드릴게요!'}
        type={'main'}
      />

      <div className="main_artist_inner">
        <div className="main_artist_item_container">
          {artistItem.map((artist, index) => (
            <ArtistItem key={index} artist={artist} />
          ))}
        </div>
        {/* <Link to="/artist" className="artist_more">
          더보기
        </Link> */}
      </div>
    </section>
  )
}

export default ArtistCont
