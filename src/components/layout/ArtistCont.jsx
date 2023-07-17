import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

// import Loader from '../Loader'

import 'swiper/css'
import 'swiper/css/pagination'

function ArtistItem(props) {
  // console.log(props)
  return (
    <div className="artist unWidth">
      <img
        className="unWidth_artist"
        src={`${props.artist.images.background}`}
        alt=""
      />
      <div className="artistbox">
        <h4>{props.artist.subtitle}</h4>
        <div className="like">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/react_project_pick/main/src/styles/img/like.svg"
            alt=""
          />
          &nbsp; Likes {props.artist.key.slice(0, 3)}
        </div>
        {/* <audio
          src={`${props.artist.hub.actions[1].uri}`}
          type="audio/m4a"
          controls
          // autoPlay
        >
          <source src={`${props.artist.hub.actions[1].uri}`} type="audio/m4a" />
        </audio> */}
      </div>
    </div>
  )
}

const ArtistCont = ({ test }) => {
  // if (!test?.length) return <Loader />

  return (
    <div className="artist_cont unflex">
      <div className="section_title">
        <h2>Artist</h2>
      </div>
      <div className="artistWrap">
        <div className="artistinner unflex_artist">
          <Swiper
            slidesPerView={3}
            spaceBetween={200}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {test.map((artist, index) => (
              <SwiperSlide>
                <ArtistItem key={index} artist={artist} />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div style={{ opacity: 0 }}>2</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ArtistCont
