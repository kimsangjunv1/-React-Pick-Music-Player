import React, { useEffect, useState } from 'react'
import MainSearch from '../layout/MainSearch'

import Header from '../include/Header'
import { fetchAPI } from '../../utils/fetchAPI'

import Loader from '../Loader'

function WeatherListItem(props) {
  return <div>{props.artist.track.title}</div>
}

const WeatherPlaylist = () => {
  const [artist, setArtist] = useState(null)
  const [selectCategory, setSelectCategory] = useState('d')

  useEffect(() => {
    fetchAPI(`search?term=christmas&limit=5`).then((data) =>
      setArtist(data.tracks)
    )
  }, [])

  //   console.log(artist.hits)

  if (!artist?.hits.length) return <Loader />
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
              {artist?.hits?.map((artist, index) => (
                <WeatherListItem key={index} artist={artist} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default WeatherPlaylist
