import React, { useState } from 'react'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

import { Link } from 'react-router-dom'

import { AlbumCont, RankCont, ArtistCont, WeatherCont } from '../'

const Main = () => {
  const [selectCategory, setSelectCategory] = useState('a')

  return (
    <>
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
              <section>
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
                      src="https://github.com/kimsangjunv1/react_project_pick/blob/main/src/styles/img/playlist.jpg?raw=true"
                      alt=""
                    />
                  </div>
                </div>
              </section>
            </Link>
            <AlbumCont />
            <section id="ranking__temporary">
              <RankCont />
              <ArtistCont />
            </section>
            <div className="music__control">
              <div className="progress"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
