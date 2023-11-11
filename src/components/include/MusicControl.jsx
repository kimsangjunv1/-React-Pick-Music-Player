import React, { useState, useEffect } from 'react'
import PlayerComponents from './../common/PlayerComponents'

// 상태관리
import { useSelector, useDispatch } from 'react-redux'
import {
  saveText,
  setVisualVisible,
  setControlVisible,
} from '../../utils/counterSlice'

// 아이콘
import icon_play from './../../styles/img/icon/icon_play.svg'
import icon_pause from './../../styles/img/icon/icon_pause.svg'
import icon_next from './../../styles/img/icon/icon_next.svg'
import icon_prev from './../../styles/img/icon/icon_prev.svg'
import icon_list from './../../styles/img/icon/icon_list.svg'

const MusicControl = () => {
  const dispatch = useDispatch()

  const musicList = useSelector((state) => state.counter.playList)
  const musicDetail = useSelector((state) => state.counter.text)
  let controlVisible = useSelector((state) => state.counter.controlVisibleState)
  let visualVisible = useSelector((state) => state.counter.visualVisibleState)

  let data = musicList.map((good) => good.ranking.title)
  const [playState, setPlayState] = useState(false)
  const [nextState, setNextState] = useState(
    data.indexOf(musicDetail[0]?.ranking.title) == musicList.length - 1
      ? false
      : true
  )
  const [prevState, setPrevState] = useState(
    data.indexOf(musicDetail[0]?.ranking.title) == 0 ? false : true
  )

  const audio = document.querySelector('.audio_test')

  const audioControl = () => {
    setPlayState(playState ? false : true)
    playState ? audio.pause() : audio.play()
  }

  const prevControl = () => {
    setPrevState(prevState ? false : true)
  }
  const nextControl = () => {
    setNextState(nextState ? false : true)
  }

  console.log('musicList : ', musicList)

  // arr.indexOf
  // 지금 플레이 하고 있는게 몇번째 배열인지 알아낸 후 총 길이에서 -1/+1 을 줘서 리덕스에 저장

  return (
    <>
      <PlayerComponents
        musicList={musicList}
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
            {/* <audio
              className="audiobox"
              src={`${musicDetail.ranking.hub.actions[1].uri}`}
              type="audio/m4a"
              controls
              autoPlay
            >
              <source
                src={`${musicDetail.ranking.hub.actions[1].uri}`}
                type="audio/m4a"
              />
            </audio> */}
            <audio
              className="audio_test"
              preload="auto"
              src={`${musicDetail[0]?.ranking?.hub?.actions[1].uri}`}
            ></audio>
            <i
              title="이전곡 재생"
              className="prev"
              id="control-prev"
              onClick={() => {
                // let data = musicList.map((good) => good.ranking.title)
                if (data.indexOf(musicDetail[0]?.ranking.title) == 0) {
                  console.log('첫번째 곡입니다.')
                } else {
                  dispatch(
                    saveText({
                      ranking:
                        musicList[
                          data.indexOf(musicDetail[0]?.ranking.title) - 1
                        ].ranking,
                    })
                  )
                }
              }}
            >
              <img src={icon_prev} alt="이전 아이콘" />
            </i>
            <i
              title="재생"
              className={`play ${playState ? 'hide' : 'show'}`}
              id="control-play"
              onClick={() => {
                audioControl()
              }}
            >
              <img src={icon_play} alt="재생 아이콘" />
            </i>
            <i
              title="멈춤"
              className={`pause ${playState ? 'show' : 'hide'}`}
              id="control-pause"
              onClick={() => {
                audioControl()
              }}
            >
              <img src={icon_pause} alt="멈춤 아이콘" />
            </i>
            <i
              title="다음곡 재생"
              className="next"
              id="control-next"
              onClick={() => {
                // let data = musicList.map((good) => good.ranking.title)
                console.log('현재목록 : ', musicList)
                if (
                  data.indexOf(musicDetail[0]?.ranking.title) ==
                  musicList.length - 1
                ) {
                  console.log('마지막 곡입니다.')
                } else {
                  console.log('다음곡 : ', nextState)

                  dispatch(
                    saveText({
                      ranking:
                        musicList[
                          data.indexOf(musicDetail[0]?.ranking.title) + 1
                        ].ranking,
                    })
                  )
                }
              }}
            >
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
