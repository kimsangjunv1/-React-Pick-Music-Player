import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ArtistItem(props) {
  return (
    <Link to="/artist" className="main_artist_item">
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
      <div className="section_title">
        <p className="section_title_desc">지금 인기있는 아티스트는 누구?</p>
        <h2>Artist</h2>
      </div>
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
