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
  const [playState, setPlayState] = useState(false)
  const dispatch = useDispatch()

  const musicDetail = useSelector((state) => state.counter.text)
  let controlVisible = useSelector((state) => state.counter.controlVisibleState)
  let visualVisible = useSelector((state) => state.counter.visualVisibleState)

  // let musicAudio = musicDetail && musicDetail[0].ranking.hub.actions[1].uri //뮤직 로드

  const musicPlay = (fileName) => {
    let audio = new Audio(fileName)
    if (playState) {
      audio.pause()
      setPlayState(false)
    } else {
      audio.load()
      audio.volume = 1
      audio.play()
      setPlayState(true)
    }
  }
  // --------------------------------------------------------------------------------------------------------------------------------------------

  //재생버튼
  // function playMusic() {
  //   musicWrap.classList.add('pause')
  //   // musicPlayer2.setAttribute("title", "정지");
  //   // musicPlayer2.setAttribute("class", "stop");
  //   musicAudio.play()
  // }

  // //정지버튼
  // function pauseMusic() {
  //   musicWrap.classList.remove('pause')
  //   // musicPlayer2.setAttribute("title", "재생");
  //   // musicPlayer2.setAttribute("class", "play");
  //   musicAudio.pause()
  // }

  // //이전 곡 듣기 버튼
  // function prevMusic() {
  //   musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--
  //   loadMusic(musicIndex)
  //   playMusic()
  //   playListMusic()
  // }
  // //다음 곡 듣기 버튼
  // function nextMusic() {
  //   musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++
  //   loadMusic(musicIndex)
  //   playMusic()
  //   playListMusic()
  // }

  // musicAudio.addEventListener("timeupdate", e => {

  //   const currentTime = e.target.currentTime;
  //   // console.log(currentTime); 시간이 지날 수록 증가(현재 진행되는 시간)

  //   const duration = e.target.duration;
  //   // console.log(duration); 전체 갯수(오디오의 총 길이)
  //   let progressWidth = (currentTime / duration) * 100 //전체 길이에서 현재 진행되는 시간을 백분위로 나눔
  //   musicProgressBar.style.width = `${progressWidth}%`
  //   //전체 시간

  //   musicAudio.addEventListener("loadeddata", () => {
  //       let audioDuration = musicAudio.duration;
  //       let totalMin = Math.floor(audioDuration / 60); //전체 시간을 분단위로 쪼개줌
  //       let totalSec = Math.floor(audioDuration % 60); //남은 초를 저장
  //       if (totalSec < 10) totalSec = `0${totalSec}`; //초가 한 자릿수일때 앞에 0을 붙임
  //       musicProgressDuration.textContent = `${totalMin}:${totalSec}`; //완성된 시간 문자열을 출력
  //   })
  //   //진행시간
  //   let currentMin = Math.floor(currentTime / 60);
  //   let currentSec = Math.floor(currentTime % 60);
  //   if (currentSec < 10) currentSec = `0${currentSec}`;
  //   musicProgressCurrent.innerText = `${currentMin}:${currentSec}`;

  //   })
  // musicProgress.addEventListener("click", (e) => {
  //   let progressWidth = musicProgress.clientWidth; //진행바 전체 길이
  //   let clickedOffsetx = e.offsetX;                //진행바 기준으로 측정되는 X좌표
  //   let songDuration = musicAudio.duration;        //오디오 전체 길이

  //   musicAudio.currentTime = (clickedOffsetx / progressWidth) * songDuration; //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
  //   })
  //   musicAudio.addEventListener("ended",()=>{})

  // --------------------------------------------------------------------------------------------------------------------------------------------

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
            <i title="이전곡 재생" className="prev" id="control-prev">
              <img src={icon_prev} alt="이전 아이콘" />
            </i>
            <i
              title="재생"
              className="play"
              id="control-play"
              onClick={() => {
                musicPlay(musicDetail[0].ranking.hub.actions[1].uri)
              }}
            >
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
