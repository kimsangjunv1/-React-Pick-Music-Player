import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PlayerComponents = ({ musicDetail, visibleState }) => {
  return (
    <div className={`music_player_container ${visibleState ? 'show' : 'hide'}`}>
      {musicDetail.length && (
        <>
          {musicDetail.map((item) => (
            <>
              <div className="outer_album_art">
                <img src={`${item.ranking.images.coverart}`} alt="" />
              </div>
              <div className="music__player__subcont">
                <div className="music__player">
                  <div className="music_player_ctrl">
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
                    <div className="inner_album_art">
                      <img src={item.ranking.images.coverart} alt="" />
                      <div className="greencircle"></div>
                      <div className="musicpoint"></div>
                    </div>
                    <p>{item.ranking.subtitle}</p>
                    <p className="music__tit">
                      {item.ranking.title.slice(0, 20)}
                    </p>
                    <audio
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
                    </audio>
                  </div>
                  {/* <div className="music_player_lyric">
          <h3>Lyric</h3>
          <div className="lyric_inner">
            "Have Yourself A Merry Little Christmas"(originally by Judy Garland)
            <br />
            <br />
            Have yourself a merry little Christmas
            <br />
            <br />
            Let your heart be light
            <br />
            <br />
            From now on our troubles will be out of sight
            <br />
            <br />
            Have yourself a merry little Christmas
            <br />
            <br />
            Make the Yuletide gay
            <br />
            <br />
            From now on our troubles will be miles away
            <br />
            <br />
            Here we are as in olden days
            <br />
            <br />
            Happy golden days of yore
            <br />
            <br />
            Faithful friends who are dear to us
            <br />
            <br />
            Gather near to us once more
            <br />
            <br />
            Through the years we all will be together
          </div>
        </div> */}
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
