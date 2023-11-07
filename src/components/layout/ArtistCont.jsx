import React, { useState, useEffect } from 'react'
import TitleComponents from '../common/TitleComponents'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { saveArtistID } from '../../utils/counterSlice'
import { saveProps } from '../../utils/counterSlice'

function ArtistItem(props) {
  const dispatch = useDispatch()
  return (
    <Link
      to={`/artist/details/${props.artist.artists[0].adamid}`}
      onClick={() => {
        dispatch(saveArtistID(props.artist.artists[0].adamid))
        dispatch(saveProps(props))
      }}
      className="main_artist_item"
    >
      <div className="artist_info_container">
        <h2 className="artist_name">{props.artist.subtitle}</h2>
        <div className="artist_like_container">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
            alt=""
          />
          <p>Likes {props.artist.key.slice(0, 3)}</p>
        </div>
      </div>
      <img
        src={`${props.artist.images.background}`}
        alt={`${props.artist.subtitle}의 이미지`}
      />
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
    <div className="main_artist_cont">
      <TitleComponents
        title={'오늘의 날씨에 어울리는 가수는?'}
        desc={'여기에서 날씨에 맞는 음악을 추천해드릴게요!'}
      />

      <div className="main_artist_inner">
        <div className="main_artist_item_container">
          {artistItem.map((artist, index) => (
            <ArtistItem key={index} artist={artist} />
          ))}
        </div>
        <Link to="/artist" className="artist_more">
          더보기
        </Link>
      </div>
    </div>
  )
}

export default ArtistCont
