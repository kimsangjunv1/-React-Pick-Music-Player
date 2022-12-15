import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

import { AlbumCont, RankCont, ArtistCont } from '../'

import Loader from '../Loader'

const Main = () => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="contents">
          <MainSearch />
          <div className="main_cont">
            <section>
              <div className="section_title">
                <h2>오늘의 날씨에 맞는 음악은?</h2>
                <p>여기에서 날씨에 맞는 음악을 추천해드릴게요!</p>
              </div>
              <div className="weather_cont">
                {/* {weather.map((weather, index) => (
                  <WeatherItem key={index} weather={weather} />
                ))} */}
                <div className="playlist weather_info">
                  <div className="weather_text_cont">
                    <div className="weather_desc">
                      <h2>오늘 같이 눈 오는 날!</h2>
                      <p>눈오는 날 듣기 좋은 플레이리스트를 정리 해~보았다</p>
                    </div>
                    <div className="weather_condition">
                      <img
                        className=""
                        src="https://github.com/kimsangjunv1/react_project_pick/blob/main/src/styles/img/weather/weather_snow.png?raw=true"
                        alt=""
                      />
                      <div className="degree_cont">
                        <p>08°</p>
                        <p>서울</p>
                      </div>
                      <p>눈 오는 날 듣기 좋은 음악을 추천 해드릴게요</p>
                    </div>
                  </div>
                </div>
                <div className="playlist select_001">
                  <div className="item_001"></div>
                  <div className="item_cont">
                    <div className="item_002"></div>
                    <div className="item_003"></div>
                  </div>
                </div>
                <div className="playlist select_002">
                  <div className="item_004"></div>
                  <div className="item_cont2">
                    <div className="item_005"></div>
                    <div className="item_006"></div>
                  </div>
                </div>
                <div className="playlist select_003"></div>
                <div className="playlist select_001">
                  <div className="item_001"></div>
                  <div className="item_cont">
                    <div className="item_002"></div>
                    <div className="item_003"></div>
                  </div>
                </div>
              </div>
            </section>
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
                  {/* {youtube.map((youtube, index) => (
                    <YoutubeItem key={index} youtube={youtube} />
                  ))} */}
                  <img
                    src="https://github.com/kimsangjunv1/react_project_pick/blob/main/src/styles/img/playlist.jpg?raw=true"
                    alt=""
                  />
                </div>
              </div>
            </section>
            <AlbumCont />
            <section id="ranking__temporary">
              <RankCont />
              <ArtistCont />
            </section>
            <div className="music__control">
              <div className="progress">
                {/* <div className="bar"> */}
                {/* <audio
                    id="main-audio"
                    src="../assets/music/music_audio01.mp3"
                  ></audio>
                  <audio
                    id="main-audio"
                    src="../assets/music/music_audio02.mp3"
                  ></audio> */}
                {/* </div> */}
                {/* <div className="timer">
                  <span className="current">0:00</span>
                  <span className="duration">4:00</span>
                </div> */}
              </div>
              {/* <div className="volumeCont">
                <input
                  type="range"
                  id="volume-control"
                  min="0"
                  max="10"
                  defaultValue="5"
                  step="0.1"
                />
              </div>
              <div className="control_cont">
                <div className="control_music">
                  <img src="assets/img/test_album.png" alt="" />
                  <div className="control_music_desc">
                    <p>TAEYEON</p>
                    <div>
                      <h2>Weekend</h2>
                      <p>KR</p>
                    </div>
                  </div>
                </div>
                <div className="control">
                  <div className="timer">
                    <span className="current">0:00</span>
                    <span>/</span>
                    <span className="duration">4:00</span>
                  </div>
                  <i
                    title="전체 반복"
                    className="repeat"
                    id="control-repeat"
                  ></i>
                  <i title="이전곡 재생" className="prev" id="control-prev"></i>
                  <i title="재생" className="play" id="control-play"></i>
                  <i title="다음곡 재생" className="next" id="control-next"></i>
                  <i title="재생 목록" className="list" id="control-list"></i>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
