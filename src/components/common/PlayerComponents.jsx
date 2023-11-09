import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RecentCard from '../common/RecentCard'
import { useSelector, useDispatch } from 'react-redux'
import TitleComponents from './TitleComponents'

const PlayerComponents = ({ musicDetail, visibleState }) => {
  const musicList = useSelector((state) => state.counter.playList)
  return (
    <div className={`music_player_container ${visibleState ? 'show' : 'hide'}`}>
      {musicDetail.length && (
        <>
          {musicDetail.map((item) => (
            <>
              <div className="outer_album_art">
                <img src={`${item.ranking.images.coverart}`} alt="" />
              </div>
              <div className="music_player_inner">
                <div className="player_container">
                  <div className="music_player_title_container">
                    {/* <Link to={`/`}>〈</Link> */}

                    <h2>
                      Now <strong>Playing.</strong>
                    </h2>
                  </div>
                  <div className="music_player_utility_container">
                    <a
                      href={`${item.ranking.hub.actions[1].uri}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/icon/align-text-bottom.png"
                        alt="음원 다운로드"
                      />
                      다운로드
                    </a>
                    <a
                      href={`${item.ranking.url}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/share.svg"
                        alt="샤잠 바로가기"
                      />
                      Shazam
                    </a>
                    <a
                      href={`${item.ranking.hub.options[0].actions[0].uri}`}
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
                  <div className="music_player_album_art_container">
                    <img
                      src={`${item.ranking.images.coverart}`}
                      alt="앨범아트"
                    />
                    <div className="greencircle"></div>
                    <div className="musicpoint"></div>
                  </div>
                  {/* <p>{item.ranking.subtitle}</p>
                    <p className="music__tit">
                      {item.ranking.title.slice(0, 20)}
                    </p> */}
                  {/* <audio
                      className="audiobox"
                      src={`${item.ranking.hub.actions[1].uri}`}
                      type="audio/m4a"
                      controls
                      autoPlay
                    >
                      <source
                        src={`${item.ranking.hub.actions[1].uri}`}
                        type="audio/m4a"
                      />
                    </audio> */}
                </div>
                <div className="recent_container">
                  <TitleComponents
                    title={'최근에 재생한 곡'}
                    // desc={'여기에서 날씨에 맞는 음악을 추천해드릴게요!'}
                  />
                  {musicList.length ? (
                    musicList.map((item, key) => (
                      <RecentCard item={item} key={key} type={'player'} />
                    ))
                  ) : (
                    <div className="no_item">최근에 들은 곡이 없습니다.</div>
                  )}
                </div>
              </div>
            </>
          ))}
        </>
      )}
    </div>
  )
}

export default PlayerComponents
