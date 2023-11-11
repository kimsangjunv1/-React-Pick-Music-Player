import React from 'react'
import TitleComponents from '../common/TitleComponents'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function AlbumItem(props) {
  return (
    <div className="album_item">
      <img src={`${props.album.images.coverart}`} alt="앨범 아트" />
      <img
        className="shadow"
        src={`${props.album.images.coverart}`}
        alt="앨범 아트 그림자"
      />
      {/* <p>{props.album.subtitle}</p>
      <h2>{props.album.title}</h2> */}
    </div>
  )
}

const AlbumCont = ({ test }) => {
  // if (!test?.length) return <SkeletonMain />

  return (
    <section>
      <TitleComponents
        title={'어떤어떤 앨범이 있을까용~~?'}
        desc={'앨범을 한번 봅시다잉'}
        type={'main'}
      />
      <div className="album_cont">
        {test.map((album, index) => (
          <AlbumItem key={index} album={album} />
        ))}
      </div>
    </section>
  )
}

export default AlbumCont
