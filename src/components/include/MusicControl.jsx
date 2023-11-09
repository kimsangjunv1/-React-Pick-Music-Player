import React, { useState } from 'react'
import PlayerComponents from './../common/PlayerComponents'
import { useSelector } from 'react-redux'

const MusicControl = () => {
  const musicDetail = useSelector((state) => state.counter.text)
  const [visible, setVisible] = useState(musicDetail.length ? true : false)
  console.log('컨트롤 : ', musicDetail)
  return (
    <>
      <PlayerComponents musicDetail={musicDetail} visibleState={visible} />
      <div
        className="control_panel"
        onClick={() => {
          console.log('클릭')
          setVisible(visible ? false : true)
        }}
      >
        <div className="progress">
          <div className="bar"></div>
          <div className="timer">
            <span className="current">0:00</span>
            <span className="duration">4:00</span>
          </div>
        </div>
        <div className="volumeCont">
          <input
            type="range"
            id="volume-control"
            min="0"
            max="10"
            devalue="5"
            step="0.1"
          />
        </div>
        <div className="control_cont">
          <div className="control_music">
            <img src="assets/img/test_album.png" alt="" />
            <div className="control_music_desc">
              <p>{musicDetail[0]?.ranking?.subtitle}</p>
              <div>
                <p className="music__tit">
                  {musicDetail[0]?.ranking?.title?.slice(0, 20)}
                </p>
                <h2>Weekend</h2>
                {/* <p>TAEYEON</p> */}
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
            <i title="전체 반복" className="repeat" id="control-repeat"></i>
            <i title="이전곡 재생" className="prev" id="control-prev"></i>
            <i title="재생" className="play" id="control-play"></i>
            <i title="다음곡 재생" className="next" id="control-next"></i>
            <i title="재생 목록" className="list" id="control-list"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicControl
