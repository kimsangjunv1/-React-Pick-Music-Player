import React from 'react'
import Header from '../../include/Header'
import Footer from '../../include/Footer'
import Loader from '../../Loader'
import MainSearch from '../../layout/MainSearch'
import { detailsAPI } from '../../../utils/detailsAPI'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ArtistSongItem(props) {
  console.log('props : ', props)
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
          <p>{props?.item?.attributes?.previews[0].url}</p>
          <p>{props?.item?.attributes?.url}</p>
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

  const getArtistDetails = () => {
    detailsAPI(`artists/get-top-songs?id=${artistId}&l=ko-KR`).then((item) =>
      setDetails(item.data)
    )
  }

  useEffect(() => {
    getArtistDetails()
  }, [])

  if (!details?.length) return <Loader />
  return (
    <>
      <Header
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <main id="main">
        <section id="contents">
          <div className="page_title_container">
            <Link to={`/artist`}>〈</Link>
            <h2>상세보기</h2>
          </div>
          <div className="detail_container">
            <div className="detail_title_container">
              <p>{artistProps?.artist?.artists[0].alias}</p>
              <h2>{artistProps?.artist?.subtitle}</h2>
            </div>
            <img
              src={`${
                artistProps?.artist?.images?.background
                  ? artistProps?.artist?.images?.background
                  : ''
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
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Details
