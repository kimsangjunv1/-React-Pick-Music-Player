import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'
import Footer from '../include/Footer'
import { Link } from 'react-router-dom'
import MusicControl from '../include/MusicControl'

import ArtistCard from '../common/ArtistCard'
import TitleComponents from '../common/TitleComponents'

import Loader from '../Loader'

const Artist = () => {
  const [artist, setArtist] = useState(null)
  // const [selectCategory, setSelectCategory] = useState('d')
  const [resultCount, setResultCount] = useState(5)

  const fetchItem = () => {}

  useEffect(() => {
    // 실데이터
    // fetchAPI(
    //   `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=${resultCount}&startFrom=0`
    // ).then((data) => setArtist(data.tracks))
    // setResultCount(resultCount + 5)

    //더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/shazam_track.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setArtist(res.tracks)
      })
  }, [])

  // return <Loader />
  if (!artist?.length) return <Loader />

  return (
    <>
      <TitleComponents title={'Artist'} type={'page'} page={'artist'} />
      <div className="artist_container">
        {artist.map((artist, index) => (
          <ArtistCard props={artist} />
        ))}
      </div>
      <button
        className={resultCount > 20 ? 'more_btn disabled' : 'more_btn'}
        onClick={() => {
          if (resultCount <= 20) {
            setResultCount(resultCount + 5)
            fetchItem()
            console.log('성공')
          }
        }}
      >
        {resultCount > 20
          ? '더 보기는 최대 20명 까지만 지원합니다.'
          : '더 보기'}
      </button>
    </>
  )
}

export default Artist
