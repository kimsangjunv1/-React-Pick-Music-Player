import React, { useEffect, useState } from 'react'
import SkeletonMain from '../loading/SkeletonMain'
import SkeletonWeather from '../loading/SkeletonWeather'
import { imageAPI } from '../../utils/imageAPI'
import { searchAPI } from '../../utils/searchAPI'

function WeatherListItem(props) {
  //   console.log(props)
  //   var timestamp = `${props.weather.date}`
  //   var Dates = new Date(`${props.weather.date}` * 1000)

  //   console.log(date)
  const getDayName = (date) => {
    switch (date) {
      case 'Mon':
        return '월요일'
      case 'Tue':
        return '화요일'
      case 'Wed':
        return '수요일'
      case 'Thu':
        return '목요일'
      case 'Fri':
        return '금요일'
      case 'Sat':
        return '토요일'
      case 'Sun':
        return '일요일'
      default:
        return '불명확'
    }
  }
  const getTime = (date) => {
    return `${new Date(date)}`
  }
  return (
    <div>
      {/* <p className="date">{Dates}</p> */}
      <p>{getTime(props.weather.date)}</p>
      <p>{getDayName(props.weather.day)}</p>
      <img
        src={`https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/weather/${props.weather.text}.png`}
        alt={`${props.weather.text} 그림`}
      />
      <div>
        {/* <span>날씨 : {props.weather.text}</span> */}
        <span>최저 : {props.weather.low}</span>
        <span>최고 : {props.weather.high}</span>
        {/* <div>
        </div> */}
      </div>
    </div>
  )
}

function TodayWeatherImageItem(props, image) {
  const getDayName = (date) => {
    switch (date) {
      case 'Mon':
        return '월요일'
      case 'Tue':
        return '화요일'
      case 'Wed':
        return '수요일'
      case 'Thu':
        return '목요일'
      case 'Fri':
        return '금요일'
      case 'Sat':
        return '토요일'
      case 'Sun':
        return '일요일'
      default:
        return '불명확'
    }
  }

  const getWeatherName = (date) => {
    switch (date) {
      case 'Sunny':
        return '화창함'
      case 'Clear':
        return '맑음'
      case 'Thunderstorms':
        return '천둥번개'
      case 'Mostly Sunny':
        return '거의 화창함'
      case 'Showers':
        return '소나기'
      case 'Cloudy':
        return '흐림'
      case 'Sun':
        return '일요일'
      default:
        return date
    }
  }
  return (
    <>
      <div
        className="todayWeather_cont_inner"
        style={{
          backgroundImage: `url(${props.image})`,
          background: '#171719',
          border: '1px solid #25252c',
          backgroundSize: 'cover',
        }}
      >
        <div>
          <p>오늘은 {getDayName(props.weather.day)}!</p>
          <p>{getWeatherName(props.weather.text)}</p>
          <img
            src={`https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/weather/${props.weather.text}.png`}
            alt={`${props.weather.text} 그림`}
          />
          <div>
            <span>최저 : {props.weather.low}</span>
            <span>최고 : {props.weather.high}</span>
          </div>
        </div>
      </div>
    </>
  )
}

function SetTodayWeatherMusic(props) {
  console.log('과연?? : ', props)
  const getWeatherName = (date) => {
    switch (date) {
      case 'Sunny':
        return '화창한'
      case 'Clear':
        return '맑은'
      case 'Thunderstorms':
        return '천둥번개 치는'
      case 'Mostly Sunny':
        return '거의 화창한'
      case 'Showers':
        return '소나기오는'
      case 'Cloudy':
        return '흐린'
      default:
        return '잘 모르겠는'
    }
  }
  return (
    <div className="weather_cont">
      <div className="playlist weather_info">
        <div
          className="weather_text_cont"
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="weather_desc">
            <h2>오늘 같이 {getWeatherName(props.weather.text)} 날!</h2>
            <p>
              {getWeatherName(props.weather.text)} 날 듣기 좋은 플레이리스트를
              정리 해~보았다
            </p>
          </div>
          <div className="weather_condition">
            <img
              className=""
              src={`https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/weather/${props.weather.text}.png`}
              alt={`${props.weather.text} 그림`}
            />
            <div className="degree_cont">
              <p>{props.weather.low}°</p>
              <p>서울</p>
            </div>
            <p>눈 오는 날 듣기 좋은 음악을 추천 해드릴게요</p>
          </div>
        </div>
      </div>
      <div className="playlist select_001">
        <div
          className="item_001"
          style={{
            backgroundImage: `url(${props.searchMusic[0].track.images.coverart})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <p>{props.searchMusic[0].track.subtitle}</p>
            <p>{props.searchMusic[0].track.title}</p>
          </div>
        </div>
        <div className="item_cont">
          <div
            className="item_002"
            style={{
              backgroundImage: `url(${props.searchMusic[1].track.images.coverart})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <p>{props.searchMusic[1].track.subtitle}</p>
              <p>{props.searchMusic[1].track.title}</p>
            </div>
          </div>
          <div
            className="item_003"
            style={{
              backgroundImage: `url(${props.searchMusic[2].track.images.coverart})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <p>{props.searchMusic[2].track.subtitle}</p>
              <p>{props.searchMusic[2].track.title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="playlist select_002">
        <div
          className="item_004"
          style={{
            backgroundImage: `url(${props.searchMusic[3].track.images.coverart})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div>
            <p>{props.searchMusic[3].track.subtitle}</p>
            <p>{props.searchMusic[3].track.title}</p>
          </div>
        </div>
        <div className="item_cont2">
          <div
            className="item_005"
            style={{
              backgroundImage: `url(${props.searchMusic[4].track.images.coverart})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <p>{props.searchMusic[4].track.subtitle}</p>
              <p>{props.searchMusic[4].track.title}</p>
            </div>
          </div>
          <div className="item_006"></div>
        </div>
      </div>
      {/* <div className="playlist select_003"></div>
      <div className="playlist select_001">
        <div className="item_001"></div>
        <div className="item_cont">
          <div className="item_002"></div>
          <div className="item_003"></div>
        </div>
      </div> */}
    </div>
  )
}

const WeatherCont = () => {
  const [weather, setWeather] = useState([])
  const [todayWeather, setTodayWeather] = useState([])
  const [weatherImage, setWeatherImage] = useState([])
  const [searchMusicItem, setSearchMusicItem] = useState([])

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
      .then((response) => {
        setWeather(response.forecasts.filter((item, index) => index > 0))
        setTodayWeather(response.forecasts.filter((item, index) => index === 0))
        getWeatherImage(response.forecasts.filter((item, index) => index === 0))
        searchWeatherMusic(
          response.forecasts.filter((item, index) => index === 0)
        )
      })
      .catch((err) => console.error(err))
  }, [])

  const getWeatherImage = ([props]) => {
    const searchKeyword = props.text

    imageAPI(`api/search`, searchKeyword).then((data) => {
      setWeatherImage(
        data.results.data[Math.floor(Math.random() * 10) + 1].attributes.image
          .large
      )
    })
  }

  const searchWeatherMusic = ([props]) => {
    const searchKeyword = props.text

    searchAPI(
      `search?term=${searchKeyword}&locale=ko-KR&offset=0&limit=5'`
    ).then((data) => {
      setSearchMusicItem(data.tracks.hits)
    })
  }

  if (!weather?.length) return <SkeletonWeather />
  if (!searchMusicItem?.length) return <SkeletonWeather />
  return (
    <section>
      <div className="todayWeather_cont">
        <div className="section_title">
          <h2>오늘의 날씨에 맞는 음악은?</h2>
          <p>여기에서 날씨에 맞는 음악을 추천해드릴게요!</p>
        </div>
        {todayWeather?.map((todayWeather, index) => (
          <SetTodayWeatherMusic
            key={index}
            weather={todayWeather}
            image={weatherImage}
            searchMusic={searchMusicItem}
          />
        ))}
        <div className="weatherList_cont">
          {weather?.map((weather, index) => (
            <WeatherListItem key={index} weather={weather} />
          ))}
        </div>
      </div>

      {/* {todayWeather?.map((todayWeather, index) => (
        <SetTodayWeatherMusic
          key={index}
          weather={todayWeather}
          image={weatherImage}
          searchMusic={searchMusicItem}
        />
      ))} */}
    </section>
  )
}

export default WeatherCont
