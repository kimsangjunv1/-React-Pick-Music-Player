import React from 'react'
import Header from '../../include/Header'
import Footer from '../../include/Footer'
import Loader from '../../Loader'
import MainSearch from '../../layout/MainSearch'
import { detailsAPI } from '../../../utils/detailsAPI'
import { Link } from 'react-router-dom'
import TitleComponents from '../../common/TitleComponents'
import MusicControl from '../../include/MusicControl'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ArtistSongItem(props) {
  const getUrl = (url) => {
    const replaceUrl = url.replace('{w}x{h}', '300x300')
    return replaceUrl
  }
  return (
    <>
      <div className="artist_song_item">
        <div className="item_info_container">
          <img src={`${getUrl(props?.item?.attributes?.artwork.url)}`} alt="" />
          <div className="item_info_container_text">
            <p>{props?.item?.attributes?.albumName}</p>
            <p>{props?.item?.attributes?.releaseDate}</p>
          </div>
        </div>
        <div className="item_share_container">
          {/* <p>{props?.item?.attributes?.previews[0].url}</p>
          <p>{props?.item?.attributes?.url}</p> */}
          <a
            href={`${props?.item?.attributes?.previews[0].url}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/align-text-bottom.png"
              alt="음원 다운로드"
            />
            다운로드
          </a>
          {/* <a
              href={`${musicDetail.ranking.url}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/share.svg"
                alt="샤잠 바로가기"
              />
              Shazam
            </a> */}
          <a
            href={`${props?.item?.attributes?.url}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/apple.svg"
              alt="샤잠 바로가기"
            />
            Apple
          </a>
        </div>
      </div>
    </>
  )
}

const Details = () => {
  const [selectCategory, setSelectCategory] = useState('d')
  const [details, setDetails] = useState([])

  const artistId = useSelector((state) => state.counter.artistid)
  const artistProps = useSelector((state) => state.counter.props)

  console.log('이게 들어와야함 :', artistProps)

  useEffect(() => {
    // 실데이터
    // detailsAPI(`artists/get-top-songs?id=${artistId}&l=ko-KR`).then((item) =>
    //   setDetails(item.data)
    // )

    //더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/artist_gettopsongs.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setDetails(res.data)
      })
  }, [])

  if (!details?.length) return <Loader />
  return (
    <>
      {/* <main id="main">
        <section id="contents"> */}
      <TitleComponents title={'Artist'} type={'page'} page={'artist'} />

      <div className="detail_container">
        <div className="detail_title_container">
          <p>{artistProps?.artist?.artists[0].alias}</p>
          <h2>{artistProps?.artist?.subtitle}</h2>
        </div>
        <img
          src={`${
            artistProps?.images?.background
              ? artistProps?.images?.background
              : artistProps?.artist?.images?.background
          }`}
          alt=""
          className="detail_cover_image"
        />
      </div>
      <div className="detail_title_container">
        <h2>LIST</h2>
      </div>
      {details.map((item, index) => (
        <ArtistSongItem key={index} item={item} />
      ))}
      {/* </section>
      </main> */}
    </>
  )
}

export default Details
