import React, { useState, useEffect } from 'react'
import Loader from '../Loader'
import SectionSpace from '../common/SectionSpace'
import { fetchAPI } from '../../utils/fetchAPI'

import {
  AlbumCont,
  ArtistCont,
  WeatherCont,
  PlayListCont,
  RecentCont,
} from '../'

const Main = () => {
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
      <WeatherCont />
      <SectionSpace space={70} />
      <ArtistCont songData={songData} />
      <SectionSpace space={70} />
      <RecentCont />
      {/* <SectionSpace space={70} />
      <PlayListCont />
      <SectionSpace space={70} />
      <AlbumCont test={songData} /> */}
    </>
  )
}

export default Main
