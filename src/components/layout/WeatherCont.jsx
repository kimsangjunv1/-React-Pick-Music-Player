import React, { useEffect, useState } from 'react'
import SkeletonMain from '../loading/SkeletonMain'
import SkeletonWeather from '../loading/SkeletonWeather'

function WeatherListItem(props) {
  //   console.log(props)
  //   var timestamp = `${props.weather.date}`
  //   var Dates = new Date(`${props.weather.date}` * 1000)

  //   console.log(date)
  return (
    <div>
      {/* <p className="date">{Dates}</p> */}
      <p>{props.weather.day}</p>
      <img
        src={`https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/weather/${props.weather.text}.png`}
        alt={`${props.weather.text} 그림`}
      />
      <div>
        <span>날씨 : {props.weather.text}</span>
        <div>
          <span>최저 : {props.weather.low}</span>
          <span>최고 : {props.weather.high}</span>
        </div>
      </div>
    </div>
  )
}

const WeatherCont = () => {
  const [weather, setWeather] = useState([])
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '03baac2a66mshcd4a23b0410de5ep115e6ejsncfbb7dec4eed',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    },
  }
  useEffect(() => {
    fetch(
      'https://yahoo-weather5.p.rapidapi.com/weather?location=seoul%2Ckr&format=json&u=c&maxResutls',
      options
    )
      .then((response) => response.json())
      .then((response) => setWeather(response.forecasts))
      .catch((err) => console.error(err))
  }, [])

  if (!weather?.length) return <SkeletonWeather />
  return (
    <section>
      <div className="section_title">
        <h2>오늘의 날씨는?</h2>
        <p>오늘의 날씨는</p>
      </div>
      <div className="weatherList_cont">
        {weather?.map((weather, index) => (
          <WeatherListItem key={index} weather={weather} />
        ))}
      </div>
      <div className="section_title">
        <h2>오늘의 날씨에 맞는 음악은?</h2>
        <p>여기에서 날씨에 맞는 음악을 추천해드릴게요!</p>
      </div>
      <div className="weather_cont">
        <div className="playlist weather_info">
          <div className="weather_text_cont">
            <div className="weather_desc">
              <h2>오늘 같이 눈 오는 날!</h2>
              <p>눈오는 날 듣기 좋은 플레이리스트를 정리 해~보았다</p>
            </div>
            <div className="weather_condition">
              <img
                className=""
                src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/weather/weather_snow.png?raw=true"
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
  )
}

export default WeatherCont
