import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'

import Loader from '../Loader'

function ArtistItem(props) {
  return (
    <div className="artist unWidth">
      <img
        className="unWidth_artist"
        src={`${props.artist.images.background}`}
        alt=""
      />
      <div className="artistbox">
        <p>{props.artist.title.slice(0, 26)}</p>
        <h4>{props.artist.subtitle}</h4>
        <div className="like">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/like.svg"
            alt=""
          />
          <p>Likes 5,677</p>
        </div>
        <audio
          src={`${props.artist.hub.actions[1].uri}`}
          type="audio/m4a"
          controls
          // autoPlay
        >
          <source src={`${props.artist.hub.actions[1].uri}`} type="audio/m4a" />
        </audio>
      </div>
    </div>
  )
}

const ArtistCont = () => {
  const [artist, setArtist] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=10&startFrom=0`
    ).then((data) => setArtist(data.tracks))
  }, [])

  if (!artist?.length) return <Loader />

  return (
    <div className="artist_cont unflex">
      <div className="section_title">
        <h2>Artist</h2>
      </div>
      <div className="artistWrap">
        <div className="artistinner unflex_artist">
          {artist.map((artist, index) => (
            <ArtistItem key={index} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArtistCont
