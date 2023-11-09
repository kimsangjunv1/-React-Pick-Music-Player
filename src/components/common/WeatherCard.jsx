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
  const getWeatherName = (date) => {
    switch (date) {
      case 'Sunny':
        return '화창한'
      case 'Clear':
        return '맑은'
      case 'Thunderstorms':
        return '번개'
      case 'Mostly Sunny':
        return '햇살'
      case 'Showers':
        return '소나기'
      case 'Cloudy':
        return '흐린'
      case 'Partly Cloudy':
        return '흐린'
      default:
        return '힘내요'
    }
  }
  const isAvailiable = (item) => {
    let a = item ? item : ''
    return a
  }

  const dispatch = useDispatch()

  // const musicDetail = useSelector((state) => state.counter.playList)

  return (
    <Fragment>
      {type !== 'today'
        ? props.map((props) => (
            <div
              className="item"
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
                  dispatch(saveText({ ranking: props.track }))
                  dispatch(saveMusic({ ranking: props.track }))
                  dispatch(setControlVisible(true))
                  // dispatch(setVisualVisible(true))
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
        : props.map((props) => (
            <div
              className="item today"
              style={
                {
                  // backgroundImage: `url(${image})`,
                  // backgroundSize: 'cover',
                  // backgroundPosition: 'center',
                }
              }
            >
              <div className="weather_desc">
                <h2>오늘 같이 {getWeatherName(props.text)} 날!</h2>
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
