import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// import Loader from '../Loader'

import 'swiper/css'
import 'swiper/css/pagination'

function ArtistItem(props) {
  // console.log(props)
  return (
    <div className="artist unWidth">
      <img
        className="unWidth_artist"
        src={`${props.artist.images.background}`}
        alt=""
      />
      <div className="artistbox">
        <h4>{props.artist.subtitle}</h4>
        <div className="like">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
            alt=""
          />
          &nbsp; Likes {props.artist.key.slice(0, 3)}
        </div>
        {/* <audio
          src={`${props.artist.hub.actions[1].uri}`}
          type="audio/m4a"
          controls
          // autoPlay
        >
          <source src={`${props.artist.hub.actions[1].uri}`} type="audio/m4a" />
        </audio> */}
      </div>
    </div>
  )
}

const ArtistCont = ({ test }) => {
  // if (!test?.length) return <Loader />
  const [artistItem, setArtistItem] = useState([])
  const filterArtist = () => {
    console.log(
      '메인 아티스트 : ',
      test.filter((item, index) => index >= 0 && index <= 4)
    )
    setArtistItem(test.filter((item, index) => index >= 0 && index <= 4))
  }

  useEffect(() => {
    filterArtist()
  }, [])

  return (
    <div className="artist_cont unflex">
      <div className="section_title">
        <p className="section_title_desc">지금 인기있는 아티스트는 누구?</p>
        <h2>Artist</h2>
      </div>
      <div className="artistWrap">
        <div className="artistinner unflex_artist">
          <Link to="/artist" className="a_flex">
            {artistItem.map((artist, index) => (
              <ArtistItem key={index} artist={artist} />
            ))}
          </Link>
        </div>
        <Link to="/artist" className="artist_more">
          더보기
        </Link>
      </div>
    </div>
  )
}

export default ArtistCont
