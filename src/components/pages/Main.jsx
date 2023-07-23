import React, { useState, useEffect } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import MainSearch from '../layout/MainSearch'
import Loader from '../Loader'
import { fetchAPI } from '../../utils/fetchAPI'
import SkeletonMain from '../loading/SkeletonMain'

import { Link } from 'react-router-dom'

import { AlbumCont, RankCont, ArtistCont, WeatherCont } from '../'

// 리덕스
import StoreTest from '../include/StoreTest'

const Main = () => {
  const [selectCategory, setSelectCategory] = useState('a')
  const [songData, setSongData] = useState(null)

  useEffect(() => {
    fetchAPI(
      `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=10&startFrom=0`
    ).then((data) => setSongData(data.tracks))
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
        <section id="contents">
          <MainSearch />
          <div className="main_cont">
            {/* 날씨 */}
            <WeatherCont />
            <Link to="/weatherplaylist">
              {/* 다가온다 크리스마스 */}
              {/* <section>
                <div className="section_title">
                  <h2>다가온다, 크리스마-스!</h2>
                  <p>
                    곧 다가오는 크리스마스에 가장 잘 어울리는 플레이리스트 한번
                    들어볼래요?
                  </p>
                </div>

                <div className="season_cont">
                  <div className="season_youtube_link">
                    <img
                      src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/playlist.jpg?raw=true"
                      alt=""
                    />
                  </div>
                </div>
              </section> */}
            </Link>
            <AlbumCont test={songData} />
            <section id="ranking__temporary">
              <RankCont test={songData} />
              <ArtistCont test={songData} />
            </section>
            <div className="music__control">
              <div className="progress"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Main
