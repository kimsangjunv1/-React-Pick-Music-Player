import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'

import Loader from '../Loader'

function AlbumItem(props) {
  return (
    <div className="album_item">
      <img src={`${props.album.images.coverart}`} alt="앨범 아트" />
      <img
        className="shadow"
        src={`${props.album.images.coverart}`}
        alt="앨범 아트 그림자"
      />
      <p>{props.album.subtitle}</p>
      <h2>{props.album.title}</h2>
    </div>
  )
}

const AlbumCont = () => {
  const [album, setAlbum] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=10&startFrom=0`
    ).then((data) => setAlbum(data.tracks))
  }, [])

  if (!album?.length) return <Loader />

  return (
    <section>
      <div className="section_title">
        <h2>Albums</h2>
        <p>이번에 추천하는 인기 앨범</p>
      </div>
      <div className="album_cont">
        {album.map((album, index) => (
          <AlbumItem key={index} album={album} />
        ))}
        <div className="album_item">
          <img src="assets/img/album/ive_album.jpg" alt="앨범 아트" />
          <img
            className="shadow"
            src="assets/img/album/ive_album.jpg"
            alt="앨범 아트 그림자"
          />
          <p>IVE (아이브)</p>
          <h2>After LIKE</h2>
        </div>
      </div>
    </section>
  )
}

export default AlbumCont
