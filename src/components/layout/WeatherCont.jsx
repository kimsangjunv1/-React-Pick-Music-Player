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
        searchWeatherMusic(res.forecasts.filter((item, index) => index > 0))
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
  const getWeatherName = (date) => {
    let hours = new Date().getHours() // 시
    switch (date) {
      case 'Sunny':
        return `${hours <= 18 ? '기분 좋은' : '행복했던'}`
      case 'Clear':
        return `${hours <= 18 ? '깨끗한' : '맑았던'}`
      case 'Thunderstorms':
        return `${hours <= 18 ? '감성 넘치는' : '눈물'}`
      case 'Mostly Sunny':
        return `${hours <= 18 ? '눈부신' : '눈부셨던'}`
      case 'Showers':
        return `${hours <= 18 ? '술 한잔 생각나는' : '비 내린'}`
      case 'Cloudy':
        return `${hours <= 18 ? '흐린' : '흐렸던'}`
      case 'Partly Cloudy':
        return `${hours <= 18 ? '애매하게 맑은' : '구름 '}`
      case 'Mostly Clear':
        return `${hours <= 18 ? '기분이 좋은' : '행복했던'}`
      default:
        return '힘내요'
    }
  }
  const searchWeatherMusic = ([props]) => {
    // 실데이터
    const searchKeyword = getWeatherName(props.text)
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

  const getSearchKeyword = () => {
    // 각 높음/낮은 온도 평균치를 낸 후 오후6시 전후를 기점으로 각 날씨에 맞는 키워드를 내보내기
    // 날씨에 점수를 매긴 뒤 그 합산된 점수에 따라 어떤 키워드로 검색될지 선택하게 만들기
    const getAverageTemp = (data) => {
      let temp = 0
      for (let i = 0; i < data.length; i++) {
        temp += data[i]
      }
      return temp / data.length
    }
    console.log('모든 날씨 : ', weather.map((good) => good.text)[0])
    console.log(
      '높음 결과 : ',
      getAverageTemp(weather.map((good) => good.high))
    )
    console.log('낮음 결과 : ', getAverageTemp(weather.map((good) => good.low)))

    // let today = new Date()

    let hours = new Date().getHours() // 시
    console.log('hours : ', hours)
    console.log(
      '날씨??? : ',
      getWeatherName(weather.map((good) => good.text)[0])
    )
  }
  getSearchKeyword()

  // if (!weather?.length) return <SkeletonWeather />
  if (!searchMusicItem?.length) return <SkeletonWeather />
  return (
    <section className="weather_container">
      <TitleComponents
        title={`${getWeatherName(
          todayWeather[0].text
        )} 날인데 어떤 플레이리스트가 있을까?`}
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
