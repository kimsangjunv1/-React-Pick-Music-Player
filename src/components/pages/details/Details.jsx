import React from 'react'
import Header from '../../include/Header'
import Footer from '../../include/Footer'
import Loader from '../../Loader'
import MainSearch from '../../layout/MainSearch'
import { detailsAPI } from '../../../utils/detailsAPI'
import { Link } from 'react-router-dom'
import TitleComponents from '../../common/TitleComponents'
import MusicControl from '../../include/MusicControl'
import DetailComponents from '../../common/DetailComponents'
import SectionSpace from './../../common/SectionSpace'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
  const [selectCategory, setSelectCategory] = useState('d')
  const [details, setDetails] = useState([])

  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [songs, setSongs] = useState([])

  const artistId = useSelector((state) => state.counter.artistid)
  const artistProps = useSelector((state) => state.counter.props)

  const transferArray = (array) => {
    let data = Object.keys(array).map((item) => array[item])
    return data
  }

  useEffect(() => {
    // 실데이터
    // detailsAPI(`artists/get-top-songs?id=${artistId}&l=ko-KR`).then((item) =>
    //   setDetails(item.data)
    // )
    detailsAPI(`artists/get-summary?id=${artistId}&l=ko-KR`).then((res) => {
      setAlbums(transferArray(res.resources.albums))
      setArtists(transferArray(res.resources.artists))
      setSongs(transferArray(res.resources.songs))
    })

    //더미
    // fetch(
    //   `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/artist_gettopsongs.json`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setDetails(res.data)
    //   })

    // fetch(
    //   `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/artist_getsummary.json`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     // setDetails(res.data)
    //     setAlbums(transferArray(res.resources.albums))
    //     setArtists(transferArray(res.resources.artists))
    //     setSongs(transferArray(res.resources.songs))
    //   })
  }, [])

  // if (!songs?.length) return <Loader />
  if (!albums?.length || !artists?.length || !songs?.length) return <Loader />
  // if (!albums?.length || !artists?.length || !songs?.length) return <Loader />
  return (
    <>
      <TitleComponents title={'Artist'} type={'page'} page={'artist'} />
      <section className="detail_section">
        <DetailComponents type={'Artists'} items={{ artists, albums }} />
        <SectionSpace space={20} />

        <div className="detail_container">
          <DetailComponents type={'Songs'} items={songs} />
          <SectionSpace space={20} />
          <DetailComponents type={'Albums'} items={albums} />
        </div>
      </section>
      {/* {details.map((item, index) => (
        
      ))} */}
    </>
  )
}

export default Details
