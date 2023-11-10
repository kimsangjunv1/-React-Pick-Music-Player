import React, { useState, useEffect } from 'react'
import PlayerComponents from './../common/PlayerComponents'

// 상태관리
import { useSelector, useDispatch } from 'react-redux'
import { setVisualVisible, setControlVisible } from '../../utils/counterSlice'

// 아이콘
import icon_play from './../../styles/img/icon/icon_play.svg'
import icon_next from './../../styles/img/icon/icon_next.svg'
import icon_prev from './../../styles/img/icon/icon_prev.svg'
import icon_list from './../../styles/img/icon/icon_list.svg'

const MusicControl = () => {
  const dispatch = useDispatch()

  const musicDetail = useSelector((state) => state.counter.text)
  let controlVisible = useSelector((state) => state.counter.controlVisibleState)
  let visualVisible = useSelector((state) => state.counter.visualVisibleState)

  // console.log('컨트롤 보여짐 상태 : ', controlVisible, visualVisible)

  return (
    <>
      <PlayerComponents
        musicDetail={musicDetail}
        visibleState={visualVisible}
      />
      <div
        className={`control_panel ${controlVisible ? 'show' : 'hide'} ${
          visualVisible ? 'wide' : 'tight'
        }`}
      >
        <div className="control_cont">
          <div className="progress">
            <div className="bar"></div>
            {/* <div className="timer">
                  <span className="current">0:00</span>
                  <span className="duration">4:00</span>
                </div> */}
          </div>
          <div className="info_container">
            <p className="title">
              {musicDetail[0]?.ranking?.title?.slice(0, 20)}
            </p>
            <p className="singer">{musicDetail[0]?.ranking?.subtitle}</p>
          </div>
          <div className="control">
            {/* <div className="volumeCont">
              <input
                type="range"
                id="volume-control"
                min="0"
                max="10"
                devalue="5"
                step="0.1"
              />
            </div> */}
            {/* <div className="timer">
              <span className="current">0:00</span>
              <span>/</span>
              <span className="duration">4:00</span>
            </div> */}
            {/* <i title="전체 반복" className="repeat" id="control-repeat"></i> */}
            <i title="이전곡 재생" className="prev" id="control-prev">
              <img src={icon_prev} alt="이전 아이콘" />
            </i>
            <i title="재생" className="play" id="control-play">
              <img src={icon_play} alt="재생 아이콘" />
            </i>
            <i title="다음곡 재생" className="next" id="control-next">
              <img src={icon_next} alt="다음 아이콘" />
            </i>
            <i
              title="재생 목록"
              className="list"
              id="control-list"
              onClick={() => {
                dispatch(setVisualVisible(visualVisible ? false : true))
              }}
            >
              <img src={icon_list} alt="목록 아이콘" />
            </i>
          </div>
        </div>
      </div>
    </>
  )
}

export default MusicControl
