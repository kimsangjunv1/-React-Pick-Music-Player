import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

// import { Link } from 'react-router-dom'

import Loader from '../Loader'

function ArtistItem(props) {
  // console.log(props.artist.artists[0].adamid)
  console.log(
    '프롭스 : ',
    !props?.artist?.images?.background ? props?.artist?.images?.background : ''
  )
  return (
    // <Link to={`artists/get-details/${props.artist.artists[0].adamid}`}>
    <div className="artist">
      <img
        src={`${
          props?.artist?.images?.background
            ? props?.artist?.images?.background
            : ''
        }`}
        alt=""
      />
      <div className="artistbox">
        <div className="artistbox_desc">
          <h4>{props.artist.subtitle}</h4>
        </div>
        <div className="like">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
            alt="/"
          />
          <p>Likes 5,677</p>
        </div>
      </div>
    </div>
    // </Link>
  )
}

const Artist = () => {
  const [artist, setArtist] = useState(null)
  const [selectCategory, setSelectCategory] = useState('d')

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=30&startFrom=10`
    ).then((data) => setArtist(data.tracks))
  }, [])

  if (!artist?.length) return <Loader />

  return (
    <>
      <Header
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <main id="main">
        <section id="contents">
          <MainSearch />

          <div className="artistWrap">
            <h3>
              Artist<em>30</em>
            </h3>
            <div className="artistinner">
              {artist.map((artist, index) => (
                <ArtistItem key={index} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Artist
