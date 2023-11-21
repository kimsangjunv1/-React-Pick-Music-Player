import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  saveText,
  saveMusic,
  setVisualVisible,
  setControlVisible,
} from '../../utils/counterSlice'

const WeatherCard = ({ props, image, type }) => {
  const musicList = useSelector((state) => state.counter.playList)

  const getWeatherName = (date) => {
    let hours = new Date().getHours() // 시
    switch (date) {
      case 'Sunny':
        return `${hours <= 18 ? '기분 좋은' : '행복했던'}`
      case 'Clear':
        return `${hours <= 18 ? '깨끗한' : '맑았던'}`
      case 'Thunderstorms':
        return `${hours <= 18 ? '감성 넘친' : '눈물'}`
      case 'Mostly Sunny':
        return `${hours <= 18 ? '눈부신' : '눈부셨던'}`
      case 'Showers':
        return `${hours <= 18 ? '술 땡기는' : '비 내린'}`
      case 'Cloudy':
        return `${hours <= 18 ? '흐린' : '흐렸던'}`
      case 'Partly Cloudy':
        return `${hours <= 18 ? '구름낀' : '구름꼈던'}`
      case 'Mostly Clear':
        return `${hours <= 18 ? '기분좋은' : '행복했던'}`
      default:
        return '힘내요'
    }
  }

  const isAvailiable = (item) => {
    let a = item ? item : ''
    return a
  }

  const dispatch = useDispatch()

  console.log('props : ', props)
  const test = (item) => {
    // console.log('프롭스 : ', item.ranking.title)
    // console.log('musicList?????? : ', musicList)

    // let data = musicList.filter((good) => good.ranking.title)
    // console.log('비교할 대상 : ', data)
    let data = musicList.map((good) => good.ranking.title)
    console.log(
      '결과(찾는 대상이 배열에 포함되어 있는지) : ',
      data.includes(item.ranking.title)
    )
    console.log(
      '결과(몇번째 배열에 있는지) : ',
      data.indexOf(item.ranking.title)
    )
  }

  return (
    <Fragment>
      {type !== 'today'
        ? props.map((props, key) => (
            <div
              className="item"
              key={key}
              style={{
                backgroundImage: `url(${isAvailiable(
                  props.track.images.coverart
                )})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* <Link
                to={`/musicplayer/${props.track.key}`}
                onClick={() => {
                  dispatch(saveText({ ranking: props.track }))
                  dispatch(saveMusic({ ranking: props.track }))
                }}
              > */}
              <div
                className="info"
                onClick={() => {
                  let data = musicList.map((good) => good.ranking.title)

                  dispatch(saveText({ ranking: props.track }))
                  if (!data.includes(props.track.title)) {
                    dispatch(saveMusic({ ranking: props.track }))
                  }
                  dispatch(setControlVisible(true))
                }}
              >
                <p className="singer">{props.track.subtitle}</p>
                <p className="title">{props.track.title}</p>
              </div>
              {/* <div></div> */}
              {/* </Link> */}
              <img
                className="coverart_blur"
                src={props.track.images.coverart}
                alt="blur image"
              />
            </div>
          ))
        : props.map((props, key) => (
            <div
              className="item today"
              key={key}
              style={
                {
                  // backgroundImage: `url(${image})`,
                  // backgroundSize: 'cover',
                  // backgroundPosition: 'center',
                }
              }
            >
              <div className="weather_desc">
                <h2>오늘은 {getWeatherName(props.text)} 날</h2>
                <p>
                  {getWeatherName(props.text)} 날 듣기 좋은 플레이리스트를 정리
                  해~보았다
                </p>
              </div>
              <div className="weather_condition">
                <img
                  className=""
                  src={`https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/weather/${props.text}.png`}
                  alt={`${props.text} 그림`}
                />
                <div className="degree_cont">
                  <p className="degree">{props.low}</p>
                  <p className="location">서울</p>
                </div>
                {/* <p>
                  {getWeatherName(props.text)} 날 듣기 좋은 음악을 추천
                  해드릴게요
                </p> */}
              </div>
            </div>
          ))}
    </Fragment>
  )
}

export default WeatherCard
