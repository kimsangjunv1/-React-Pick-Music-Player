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

  console.log('이게 들어와야함 :', artistProps)

  const transferArray = (array) => {
    let data = Object.keys(array).map((item) => array[item])
    return data
  }
  const getUrl = (url) => {
    const replaceUrl = url.replace('{w}x{h}', '2000x2000')
    return replaceUrl
  }
  const elapsedTime = (date) => {
    const start = new Date(date)
    const end = new Date()

    const diff = (end - start) / 1000

    const times = [
      { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
      { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
      { name: '일', milliSeconds: 60 * 60 * 24 },
      { name: '시간', milliSeconds: 60 * 60 },
      { name: '분', milliSeconds: 60 },
    ]

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds)

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`
      }
    }
    return '방금 전'
  }

  useEffect(() => {
    // 실데이터
    // detailsAPI(`artists/get-top-songs?id=${artistId}&l=ko-KR`).then((item) =>
    //   setDetails(item.data)
    // )
    // detailsAPI(`artists/get-summary?id=${artistId}&l=ko-KR`).then((item) =>
    // setAlbums(transferArray(res.resources.albums))
    // setArtists(transferArray(res.resources.artists))
    // setSongs(transferArray(res.resources.songs))
    // )

    //더미
    // fetch(
    //   `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/artist_gettopsongs.json`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setDetails(res.data)
    //   })
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/artist_getsummary.json`
    )
      .then((res) => res.json())
      .then((res) => {
        // setDetails(res.data)
        setAlbums(transferArray(res.resources.albums))
        setArtists(transferArray(res.resources.artists))
        setSongs(transferArray(res.resources.songs))
      })
  }, [])
  // console.log('결과1 : ', artists)
  // console.log('결과2 : ', albums)
  // console.log('결과2 : ', albums[albums.length - 1])
  console.log('결과3 : ', songs)

  if (!albums?.length && !artists?.length && !songs?.length) return <Loader />
  return (
    <>
      <TitleComponents title={'Artist'} type={'page'} page={'artist'} />
      <section className="detail_section">
        <div
          className="selected_container"
          style={
            {
              // background: `#${artists[0]?.attributes?.artwork?.bgColor}cc`,
            }
          }
        >
          <div className="sub_background_container">
            <img
              src={`${getUrl(artists[0]?.attributes?.artwork?.url)}`}
              alt="서브 아티스트 사진"
              className="sub_artist"
            />
          </div>
          <div
            className="desc"
            style={
              {
                // background: `#${artists[0]?.attributes?.artwork?.textColor2}cc`,
              }
            }
          >
            <div className="profile_image_container">
              <img
                src={`${getUrl(artists[0]?.attributes?.artwork?.url)}`}
                alt="메인 아티스트 사진"
                className="main_artist"
              />
              <img
                src={`${getUrl(artists[0]?.attributes?.artwork?.url)}`}
                alt="메인 아티스트 사진"
                className="shadow_artist"
              />
            </div>

            <div className="desc_container">
              <div className="info_container">
                <p>NAME</p>
                <p>{artists[0]?.attributes?.name}</p>
              </div>
              <div className="info_container">
                <p>GenRe</p>
                <p>
                  {artists[0].attributes.genreNames.map((item) => (
                    <>
                      <p>{item}</p>
                    </>
                  ))}
                </p>
              </div>
              <div className="info_container">
                <p className="title">SNS</p>
                <p>{artists[0]?.attributes?.url}</p>
              </div>
              <div className="info_container">
                <p className="title">RECENT ALBUM</p>
                <img
                  src={`${getUrl(
                    albums[albums.length - 1].attributes.artwork.url
                  )}`}
                  alt="앨범 아트"
                  className="album_artwork"
                />
              </div>
              <div className="info_container">
                {albums[albums.length - 1].attributes.name}
                {albums[albums.length - 1].attributes.copyright}
                {albums[albums.length - 1].attributes.releaseDate}•
                {`${elapsedTime(
                  albums[albums.length - 1].attributes.releaseDate
                )}`}
              </div>
            </div>
          </div>
        </div>

        <div className="detail_container">
          <DetailComponents type={'Songs'} items={songs} />
          <DetailComponents type={'Albums'} items={albums} />
        </div>
      </section>
      {/* {details.map((item, index) => (
        
      ))} */}
    </>
  )
}

export default Details
