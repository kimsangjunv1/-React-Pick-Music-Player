import React, { useState, useEffect } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import MainSearch from '../layout/MainSearch'
import Loader from '../Loader'
import { fetchAPI } from '../../utils/fetchAPI'
import SkeletonMain from '../loading/SkeletonMain'
import MusicControl from '../include/MusicControl'
import SectionSpace from '../common/SectionSpace'

import { Link } from 'react-router-dom'

import {
  AlbumCont,
  RankCont,
  ArtistCont,
  WeatherCont,
  PlayListCont,
  RecentCont,
} from '../'

const Main = () => {
  const [selectCategory, setSelectCategory] = useState('a')
  const [songData, setSongData] = useState(null)

  useEffect(() => {
    // 실데이터
    // fetchAPI(
    //   `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=10&startFrom=0`
    // ).then((data) => setSongData(data.tracks))

    //더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/shazam_track.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setSongData(res.tracks)
      })
  }, [])

  if (!songData?.length) return <Loader />
  // if (!songData?.length) return <SkeletonMain />

  return (
    <>
      {/* <SkeletonMain /> */}
      <Header
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <main id="main">
        <div className="main_inner">
          {/* <MainSearch /> */}
          <WeatherCont />
          <SectionSpace space={70} />
          <ArtistCont test={songData} />
          <SectionSpace space={70} />
          <RecentCont />
          <SectionSpace space={70} />
          <PlayListCont />
          <SectionSpace space={70} />
          <AlbumCont test={songData} />

          {/* <RankCont test={songData} /> */}
          <MusicControl />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Main
