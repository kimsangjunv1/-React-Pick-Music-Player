import React, { useEffect, useState } from 'react'
import SkeletonMain from '../loading/SkeletonMain'
import SkeletonWeather from '../loading/SkeletonWeather'
import { Link } from 'react-router-dom'
import TitleComponents from './../common/TitleComponents'
import WeatherCard from '../common/WeatherCard'

import { imageAPI } from '../../utils/imageAPI'
import { searchAPI } from '../../utils/searchAPI'

import { useDispatch } from 'react-redux'
import { saveText } from '../../utils/counterSlice'

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
    // 실데이터
    // fetch(
    //   'https://yahoo-weather5.p.rapidapi.com/weather?location=seoul%2Ckr&format=json&u=c&maxResutls',
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setWeather(response.forecasts.filter((item, index) => index > 0))
    //     setTodayWeather(response.forecasts.filter((item, index) => index === 0))
    //     getWeatherImage(response.forecasts.filter((item, index) => index === 0))
    //     searchWeatherMusic(
    //       response.forecasts.filter((item, index) => index === 0)
    //     )
    //   })
    //   .catch((err) => console.error(err))

    // 더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/yahoo_weather.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeather(res.forecasts.filter((item, index) => index > 0))
        setTodayWeather(res.forecasts.filter((item, index) => index === 0))
        getWeatherImage(res.forecasts.filter((item, index) => index === 0))
        searchWeatherMusic(res.forecasts.filter((item, index) => index === 0))
      })
  }, [])

  const getWeatherImage = ([props]) => {
    // 실데이터
    // const searchKeyword = props.text
    // imageAPI(`api/search`, searchKeyword).then((data) => {
    //   setWeatherImage(
    //     data.results.data[Math.floor(Math.random() * 10) + 1].attributes.image
    //       .large
    //   )
    // })

    // 더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/stock_photo.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherImage(
          res.results.data[Math.floor(Math.random() * 10) + 1].attributes.image
            .large
        )
      })
  }

  const searchWeatherMusic = ([props]) => {
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

    // 실데이터
    // const searchKeyword = getWeatherName(props.text)
    // searchAPI(
    //   `search?term=${searchKeyword}&locale=ko-KR&offset=0&limit=5`
    // ).then((data) => {
    //   setSearchMusicItem(data.tracks.hits)
    // })

    // 더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/shazam_search.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchMusicItem(res.tracks.hits)
      })
  }

  if (!weather?.length) return <SkeletonWeather />
  if (!searchMusicItem?.length) return <SkeletonWeather />
  return (
    <section className="weather_container">
      <TitleComponents
        title={'00 날인데 어떤 플레이리스트가 있을까?'}
        desc={'여기에서 날씨에 맞는 음악을 추천해드릴게요!'}
        type={'main'}
      />
      <div className="weather_container_inner">
        <WeatherCard props={todayWeather} image={weatherImage} type={'today'} />
        <WeatherCard props={searchMusicItem} />
      </div>
    </section>
  )
}

export default WeatherCont
