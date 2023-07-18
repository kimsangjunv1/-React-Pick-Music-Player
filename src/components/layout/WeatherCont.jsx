import React, { useEffect, useState } from 'react'
import SkeletonMain from '../loading/SkeletonMain'
import SkeletonWeather from '../loading/SkeletonWeather'
import { imageAPI } from '../../utils/imageAPI'

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
  return (
    <div
      onClick={(e) => {
        e.target.className = 'testttt'
      }}
    >
      {/* <p className="date">{Dates}</p> */}
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
  console.log('제발 : ', props)
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

const WeatherCont = () => {
  const [weather, setWeather] = useState([])
  const [todayWeather, setTodayWeather] = useState([])
  const [weatherImage, setWeatherImage] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '03baac2a66mshcd4a23b0410de5ep115e6ejsncfbb7dec4eed',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    },
  }

  let imageData = {
    success: true,
    message: 'success',
    results: {
      data: [
        {
          id: '763398',
          type: 'photo',
          attributes: {
            id: 763398,
            slug: 'person-riding-a-bicycle-during-rainy-day',
            description: null,
            width: 6016,
            height: 4000,
            status: 'approved',
            created_at: '2017-12-30T07:28:58.000Z',
            updated_at: '2023-06-17T10:43:35.000Z',
            publish_at: '2018-01-01T16:45:17.763Z',
            feed_at: '2017-12-30T07:28:58.000Z',
            title: 'Person Riding a Bicycle during Rainy Day',
            aspect_ratio: 1.504,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 250108,
              first_name: 'Genaro',
              last_name: 'Servín',
              slug: 'gesel',
              username: 'GeSeL',
              location: 'Morelia, Mexico',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/250108/genaro-servin-353.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/250108/genaro-servin-353.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: false,
              following: false,
            },
            tags: [
              'action',
              'bicycle',
              'bike',
              'buildings',
              'calamity',
              'cars',
              'city',
              'commuter',
              'daylight',
              'flood',
              'heavy rain',
              'motion',
              'outdoors',
              'pavement',
              'pouring',
              'rain',
              'rain background',
              'rain wallpaper',
              'raining',
              'road',
              'season',
              'storm',
              'street',
              'traffic',
              'transportation system',
              'travel',
              'urban',
              'vehicle',
              'vehicles',
              'water',
              'weather',
              'wet',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=xnager%40hotmail.com&cmd=_donations&currency_code=USD&item_name=Genaro+Serv%C3%ADn+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fperson-riding-a-bicycle-during-rainy-day-763398%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F250108%2F%3Ftoken%3DbWVkaXVtX2lkPTc2MzM5OCZub25jZT1fVUlGdzBZMmhuNEdfVnJOeFViZW5RJnNlbmRlcl9pZD0%253D&return=return_to_url',
            main_color: [147, 145, 147],
            image: {
              small:
                'https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/763398/download/',
              download_link:
                'https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?cs=srgb&dl=pexels-genaro-serv%C3%ADn-763398.jpg&fm=jpg',
            },
            alt: 'Person Riding a Bicycle during Rainy Day',
            colors: ['#000000', '#a9a9a9', '#cd5c5c', '#dcdcdc'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '3122192',
          type: 'photo',
          attributes: {
            id: 3122192,
            slug: 'close-up-photo-of-green-leafed-plant',
            description: null,
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2019-10-23T18:19:47.000Z',
            updated_at: '2023-04-22T10:25:27.000Z',
            publish_at: '2019-10-25T21:14:37.122Z',
            feed_at: '2019-10-25T13:51:32.000Z',
            title: 'Close-up Photo of Green Leafed Plant',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 1542174,
              first_name: 'Dark ',
              last_name: 'Journey ',
              slug: 'dark-journey-1542174',
              username: null,
              location: null,
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/1542174/dark-journey-640.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/1542174/dark-journey-640.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: false,
              following: false,
            },
            tags: [
              '4k wallpaper',
              'branch',
              'close-up',
              'color',
              'dark',
              'dark green',
              'dewdrops',
              'garden',
              'green',
              'green leaves',
              'iphone wallpaper',
              'leaves',
              'photo',
              'rain',
              'raining',
              'samsung wallpaper',
              'tree',
              'wallpaper',
            ],
            liked: false,
            collection_ids: [],
            donate_url: '#',
            main_color: [24, 36, 40],
            image: {
              small:
                'https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/3122192/download/',
              download_link:
                'https://images.pexels.com/photos/3122192/pexels-photo-3122192.jpeg?cs=srgb&dl=pexels-dark-journey-3122192.jpg&fm=jpg',
            },
            alt: 'Close-up Photo of Green Leafed Plant',
            colors: ['#000000', '#2f4f4f'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '3394939',
          type: 'photo',
          attributes: {
            id: 3394939,
            slug: 'macro-photography-of-water-drops',
            description: '',
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2019-12-16T16:33:24.000Z',
            updated_at: '2023-06-17T09:50:58.000Z',
            publish_at: '2019-12-17T23:26:44.000Z',
            feed_at: '2020-05-12T15:23:38.000Z',
            title: 'Macro Photography of Water Drops',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 854413,
              first_name: 'Matheus',
              last_name: 'Natan',
              slug: 'matheusnatan',
              username: 'matheusnatan',
              location: 'Brasília - Brasilia, Federal District, Brazil',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/854413/matheus-natan-604.png?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/854413/matheus-natan-604.png?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              '4k wallpaper',
              'abstract',
              'background',
              'background image',
              'backgrounds',
              'blue',
              'clear',
              'color',
              'computer wallpaper',
              'cool background',
              'cool desktop background',
              'cool wallpaper',
              'desktop background',
              'desktop wallpaper',
              'full hd wallpaper',
              'h2o',
              'hd background',
              'HD wallpaper',
              'insubstantial',
              'pretty backgrounds',
              'purity',
              'rain',
              'rain background',
              'rain wallpaper',
              'raindrops',
              'raining',
              'ripples',
              'smooth',
              'still water',
              'surface',
              'teal',
              'teal background',
              'teal wallpaper',
              'texture',
              'texture zoom backgrounds',
              'textured background',
              'thumbnail background',
              'thumbnail wallpaper',
              'turquoise',
              'turquoise background',
              'wallpaper',
              'wallpaper 4k',
              'wallpapers',
              'water',
              'website background',
              'zoom backgrounds',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=matheusmartinsdutra%40gmail.com&cmd=_donations&currency_code=USD&item_name=Matheus+Natan+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fmacro-photography-of-water-drops-3394939%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F854413%2F%3Ftoken%3DbWVkaXVtX2lkPTMzOTQ5Mzkmbm9uY2U9V3k4blU1bElobzI3RUN4N1JDZHluUSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [60, 128, 130],
            image: {
              small:
                'https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/3394939/download/',
              download_link:
                'https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg?cs=srgb&dl=pexels-matheus-natan-3394939.jpg&fm=jpg',
            },
            alt: 'Macro Photography of Water Drops',
            colors: ['#2f4f4f', '#5f9ea0'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '39811',
          type: 'photo',
          attributes: {
            id: 39811,
            slug: 'road-between-pine-trees',
            description: '',
            width: 7718,
            height: 5148,
            status: 'approved',
            created_at: '2016-02-01T02:25:35.000Z',
            updated_at: '2023-05-27T09:17:52.000Z',
            publish_at: '2016-02-01T21:00:38.000Z',
            feed_at: '2016-02-01T02:25:35.000Z',
            title: 'Road Between Pine Trees',
            aspect_ratio: 1.4992229992229993,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 5502,
              first_name: 'veeterzy',
              last_name: '',
              slug: 'veeterzy',
              username: 'veeterzy',
              location: 'Los Angeles, California',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/5502/-665.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/5502/-665.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: false,
              following: false,
            },
            tags: [
              'adventure',
              'asphalt',
              'asphalt road',
              'coniferous',
              'coniferous trees',
              'country road',
              'countryside',
              'distance',
              'empty road',
              'far',
              'foggy',
              'full hd wallpaper',
              'guidance',
              'haze',
              'hd background',
              'HD wallpaper',
              'hd wallpaper desktop',
              'journey',
              'lanes',
              'leading lines',
              'misty',
              'mystical',
              'outdoors',
              'outside',
              'path',
              'pathway',
              'perspective',
              'pine trees',
              'rain',
              'rain background',
              'rain wallpaper',
              'road',
              'roads',
              'roadway',
              'route',
              'rural',
              'tarmac',
              'tarmac road',
              'transportation system',
              'travel',
              'trees',
              'trip',
              'trip journey',
              'wallpaper 4k',
              'way',
              'wet',
              'wet road',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=vanja%40internetly.com&cmd=_donations&currency_code=USD&item_name=veeterzy+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Froad-between-pine-trees-39811%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F5502%2F%3Ftoken%3DbWVkaXVtX2lkPTM5ODExJm5vbmNlPVBmeUpnbF9ScHdaLVNKQ05jVXR3T0Emc2VuZGVyX2lkPQ%253D%253D&return=return_to_url',
            main_color: [97, 101, 101],
            image: {
              small:
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/39811/download/',
              download_link:
                'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg',
            },
            alt: 'Road Between Pine Trees',
            colors: ['#2c3c43', '#7c8786', '#b3b2ac'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '1463530',
          type: 'photo',
          attributes: {
            id: 1463530,
            slug: 'selective-focus-photo-of-obalte-green-leafed-plants-during-rain',
            description: '',
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2018-09-30T18:22:53.000Z',
            updated_at: '2023-07-08T09:32:54.000Z',
            publish_at: '2018-10-08T11:00:52.463Z',
            feed_at: '2018-09-30T18:22:53.000Z',
            title:
              'Selective Focus Photo of Obalte Green-leafed Plants during Rain',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 351684,
              first_name: 'Bibhukalyan',
              last_name: 'Acharya',
              slug: 'bibhukalyan',
              username: 'bibhukalyan',
              location: 'Roorkee, Uttarakhand, India',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/351684/bibhukalyan-acharya-462.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/351684/bibhukalyan-acharya-462.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: false,
              following: false,
            },
            tags: [
              'green',
              'leaves',
              'pouring',
              'rain',
              'rain background',
              'rain wallpaper',
              'raining',
              'rainy',
              'rainy day',
              'tropical',
              'water droplets',
              'wet',
            ],
            liked: false,
            collection_ids: [],
            donate_url: '#',
            main_color: [89, 108, 92],
            image: {
              small:
                'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/1463530/download/',
              download_link:
                'https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?cs=srgb&dl=pexels-bibhukalyan-acharya-1463530.jpg&fm=jpg',
            },
            alt: 'Selective Focus Photo of Obalte Green-leafed Plants during Rain',
            colors: [
              '#000000',
              '#006400',
              '#228b22',
              '#2f4f4f',
              '#708090',
              '#8fbc8f',
              '#e6e6fa',
            ],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '2797487',
          type: 'photo',
          attributes: {
            id: 2797487,
            slug: 'water-streaming-on-glass',
            description: null,
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2019-08-13T20:59:11.000Z',
            updated_at: '2023-07-15T10:11:34.000Z',
            publish_at: '2019-08-14T03:06:40.797Z',
            feed_at: '2019-08-16T19:23:30.000Z',
            title: 'Water Streaming on Glass',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 340699,
              first_name: 'Rahul',
              last_name: 'Pandit',
              slug: 'rahulp9800',
              username: 'rahulp9800',
              location: 'Contai, West Bengal, India',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/340699/rahul-pandit-964.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/340699/rahul-pandit-964.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'dark',
              'glass',
              'glass wall',
              'glass window',
              'night',
              'raindrops',
              'raining',
              'wall',
              'water',
              'waterdrops',
              'wet',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=rahulp9800%40outlook.com&cmd=_donations&currency_code=USD&item_name=Rahul+Pandit+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fwater-streaming-on-glass-2797487%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F340699%2F%3Ftoken%3DbWVkaXVtX2lkPTI3OTc0ODcmbm9uY2U9NTFFcUhDMkJiVnhVQjlLMGZvT3QxUSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [73, 68, 62],
            image: {
              small:
                'https://images.pexels.com/photos/2797487/pexels-photo-2797487.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/2797487/pexels-photo-2797487.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/2797487/pexels-photo-2797487.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/2797487/download/',
              download_link:
                'https://images.pexels.com/photos/2797487/pexels-photo-2797487.jpeg?cs=srgb&dl=pexels-rahul-pandit-2797487.jpg&fm=jpg',
            },
            alt: 'Water Streaming on Glass',
            colors: ['#008b8b', '#2f4f4f', '#696969', '#a0522d', '#c0c0c0'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '1384898',
          type: 'photo',
          attributes: {
            id: 1384898,
            slug: 'raining',
            description: null,
            width: 9694,
            height: 6515,
            status: 'approved',
            created_at: '2018-09-03T02:09:33.000Z',
            updated_at: '2023-05-13T11:51:05.000Z',
            publish_at: '2018-09-04T08:05:10.384Z',
            feed_at: '2018-09-03T02:09:33.000Z',
            title: 'Raining',
            aspect_ratio: 1.4879508825786647,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 11929,
              first_name: 'Josh',
              last_name: 'Sorenson',
              slug: 'joshsorenson',
              username: 'JoshSorenson',
              location: 'Madison, WI',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/11929/josh-sorenson-170.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/11929/josh-sorenson-170.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'beach',
              'body of water',
              'cloudy',
              'dark clouds',
              'dawn',
              'daylight',
              'dusk',
              'evening',
              'gloomy',
              'horizon',
              'islands',
              'landscape',
              'light',
              'nature',
              'ocean',
              'outdoors',
              'overcast',
              'rain',
              'raining',
              'scenic',
              'sea',
              'seascape',
              'sky',
              'sunset',
              'travel',
              'weather',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=me%40joshsorenson.com&cmd=_donations&currency_code=USD&item_name=Josh+Sorenson+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fraining-1384898%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F11929%2F%3Ftoken%3DbWVkaXVtX2lkPTEzODQ4OTgmbm9uY2U9Nm5McDNDOU9SM0NpajM3NHV0YlBjZyZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [113, 126, 131],
            image: {
              small:
                'https://images.pexels.com/photos/1384898/pexels-photo-1384898.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/1384898/pexels-photo-1384898.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/1384898/pexels-photo-1384898.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/1384898/download/',
              download_link:
                'https://images.pexels.com/photos/1384898/pexels-photo-1384898.jpeg?cs=srgb&dl=pexels-josh-sorenson-1384898.jpg&fm=jpg',
            },
            alt: 'Raining',
            colors: ['#2f4f4f', '#778899', '#dcdcdc'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '3761511',
          type: 'photo',
          attributes: {
            id: 3761511,
            slug: 'girl-in-yellow-raincoat-and-yellow-boots-holding-yellow-umbrella-walking-on-gray-concrete-side-walk',
            description: null,
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2020-02-18T12:41:59.000Z',
            updated_at: '2023-03-25T11:26:27.000Z',
            publish_at: '2020-02-24T06:50:10.761Z',
            feed_at: null,
            title:
              'Girl in Yellow Raincoat and Yellow Boots Holding Yellow Umbrella Walking on Gray Concrete Side Walk',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 224453,
              first_name: 'Andrea',
              last_name: 'Piacquadio',
              slug: 'olly',
              username: 'olly',
              location: 'Budapest, Hungary',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/224453/andrea-piacquadio-138.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/224453/andrea-piacquadio-138.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: false,
              following: false,
            },
            tags: [
              'city',
              'downpour',
              'fall',
              'girl',
              'outdoors',
              'pavement',
              'rain',
              'raincoat',
              'raining',
              'rainy',
              'road',
              'street',
              'umbrella',
              'urban area',
              'walking',
              'weather',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=info.piacquadio1%40gmail.com&cmd=_donations&currency_code=USD&item_name=Andrea+Piacquadio+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fgirl-in-yellow-raincoat-and-yellow-boots-holding-yellow-umbrella-walking-on-gray-concrete-side-walk-3761511%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F224453%2F%3Ftoken%3DbWVkaXVtX2lkPTM3NjE1MTEmbm9uY2U9NlFDZlE2UHdrQVFQVHRjcXdnRl8zQSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [151, 147, 138],
            image: {
              small:
                'https://images.pexels.com/photos/3761511/pexels-photo-3761511.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/3761511/pexels-photo-3761511.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/3761511/pexels-photo-3761511.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/3761511/download/',
              download_link:
                'https://images.pexels.com/photos/3761511/pexels-photo-3761511.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3761511.jpg&fm=jpg',
            },
            alt: 'Girl in Yellow Raincoat and Yellow Boots Holding Yellow Umbrella Walking on Gray Concrete Side Walk',
            colors: ['#556b2f', '#696969', '#a9a9a9', '#eedd82'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '2663254',
          type: 'photo',
          attributes: {
            id: 2663254,
            slug: 'photo-of-roof-while-raining',
            description: null,
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2019-07-15T07:10:24.000Z',
            updated_at: '2023-07-01T10:38:59.000Z',
            publish_at: '2019-07-16T13:56:32.663Z',
            feed_at: '2019-07-20T18:14:20.000Z',
            title: 'Photo of Roof While Raining',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 1257089,
              first_name: 'Adrien',
              last_name: 'Olichon',
              slug: 'adrien-olichon-1257089',
              username: null,
              location: 'Lyon, France',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/1257089/adrien-olichon-723.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/1257089/adrien-olichon-723.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'architectural design',
              'architectural detail',
              'architecture',
              'geometric',
              'pattern',
              'perspective',
              'rain',
              'raining',
              'roof',
              'texture',
              'wall',
              'water',
              'wet',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=adrien.olichon%40icloud.com&cmd=_donations&currency_code=USD&item_name=Adrien+Olichon+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fphoto-of-roof-while-raining-2663254%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F1257089%2F%3Ftoken%3DbWVkaXVtX2lkPTI2NjMyNTQmbm9uY2U9TFZwWTlEUlh4MUloaXA0akk1UDVGQSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [133, 122, 120],
            image: {
              small:
                'https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/2663254/download/',
              download_link:
                'https://images.pexels.com/photos/2663254/pexels-photo-2663254.jpeg?cs=srgb&dl=pexels-adrien-olichon-2663254.jpg&fm=jpg',
            },
            alt: 'Photo of Roof While Raining',
            colors: ['#000000', '#a0522d', '#bc8f8f'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '2792387',
          type: 'photo',
          attributes: {
            id: 2792387,
            slug: 'man-passing-by-a-window',
            description: null,
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2019-08-12T17:40:52.000Z',
            updated_at: '2023-07-08T09:33:17.000Z',
            publish_at: '2019-08-13T17:22:02.792Z',
            feed_at: '2019-08-13T19:23:30.000Z',
            title: 'Man Passing By a Window',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 340699,
              first_name: 'Rahul',
              last_name: 'Pandit',
              slug: 'rahulp9800',
              username: 'rahulp9800',
              location: 'Contai, West Bengal, India',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/340699/rahul-pandit-964.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/340699/rahul-pandit-964.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'glass',
              'glass window',
              'man',
              'person',
              'rain',
              'raindrops',
              'raining',
              'umbrella',
              'weather',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=rahulp9800%40outlook.com&cmd=_donations&currency_code=USD&item_name=Rahul+Pandit+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fman-passing-by-a-window-2792387%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F340699%2F%3Ftoken%3DbWVkaXVtX2lkPTI3OTIzODcmbm9uY2U9YnMzTFZEbGpRZ1dXS2o3ZzBUX0lTUSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [75, 77, 70],
            image: {
              small:
                'https://images.pexels.com/photos/2792387/pexels-photo-2792387.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/2792387/pexels-photo-2792387.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/2792387/pexels-photo-2792387.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/2792387/download/',
              download_link:
                'https://images.pexels.com/photos/2792387/pexels-photo-2792387.jpeg?cs=srgb&dl=pexels-rahul-pandit-2792387.jpg&fm=jpg',
            },
            alt: 'Man Passing By a Window',
            colors: ['#2f4f4f', '#696969', '#a9a9a9', '#bc8f8f', '#cd853f'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '3089843',
          type: 'photo',
          attributes: {
            id: 3089843,
            slug: 'cap-on-car-dashboard',
            description: '',
            width: 6000,
            height: 4000,
            status: 'approved',
            created_at: '2019-10-16T15:08:55.000Z',
            updated_at: '2023-05-13T09:41:39.000Z',
            publish_at: '2019-10-20T19:26:03.089Z',
            feed_at: '2019-10-16T19:09:29.000Z',
            title: 'Cap on Car Dashboard',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 977589,
              first_name: 'Andrew',
              last_name: 'Neel',
              slug: 'andrew',
              username: 'andrew',
              location: 'North Carolina',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/977589/andrew-neel-109.png?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/977589/andrew-neel-109.png?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'automobile',
              'cap',
              'car',
              'car interior',
              'close-up',
              'dashboard',
              'environment',
              'fog',
              'girl',
              'gloomy',
              'hat',
              'interior',
              'landscape',
              'rain',
              'raindrops',
              'raining',
              'road',
              'scenic',
              'transportation system',
              'trees',
              'vehicle',
              'website photos',
              'window wipers',
              'windshield',
              'wipers',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=neeltandrew%40gmail.com&cmd=_donations&currency_code=USD&item_name=Andrew+Neel+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fcap-on-car-dashboard-3089843%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F977589%2F%3Ftoken%3DbWVkaXVtX2lkPTMwODk4NDMmbm9uY2U9MVp1Z2RYZTNyUDU1WlBvcEg0OHpuQSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [109, 111, 105],
            image: {
              small:
                'https://images.pexels.com/photos/3089843/pexels-photo-3089843.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/3089843/pexels-photo-3089843.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/3089843/pexels-photo-3089843.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/3089843/download/',
              download_link:
                'https://images.pexels.com/photos/3089843/pexels-photo-3089843.jpeg?cs=srgb&dl=pexels-andrew-neel-3089843.jpg&fm=jpg',
            },
            alt: 'Cap on Car Dashboard',
            colors: ['#000000', '#696969', '#a9a9a9', '#dcdcdc'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '395196',
          type: 'photo',
          attributes: {
            id: 395196,
            slug: 'person-standing-on-brown-wooden-dock',
            description: '',
            width: 6004,
            height: 4008,
            status: 'approved',
            created_at: '2017-04-27T09:47:53.000Z',
            updated_at: '2023-03-25T09:38:27.000Z',
            publish_at: '2017-04-29T01:30:12.395Z',
            feed_at: '2017-04-27T09:47:53.000Z',
            title: 'Person Standing on Brown Wooden Dock',
            aspect_ratio: 1.498003992015968,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 129458,
              first_name: 'Gabriela',
              last_name: 'Palai',
              slug: 'gabriela-palai-129458',
              username: null,
              location: 'slovakia',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/129458/gabriela-palai-269.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/129458/gabriela-palai-269.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: false,
              following: false,
            },
            tags: [
              'alone',
              'animal',
              'bird',
              'clouds',
              'cloudy',
              'cold',
              'dawn',
              'dock',
              'dusk',
              'fog',
              'foggy',
              'gull',
              'HD wallpaper',
              'lake',
              'landscape',
              'man',
              'mist',
              'mood',
              'mountains',
              'nature',
              'nature photography',
              'outdoors',
              'person',
              'rain',
              'rain background',
              'rain wallpaper',
              'rainy day',
              'sunset',
              'travel',
              'water',
              'weather',
              'wet',
              'wood',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=viktorpalai%40gmail.com&cmd=_donations&currency_code=USD&item_name=Gabriela+Palai+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fperson-standing-on-brown-wooden-dock-395196%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F129458%2F%3Ftoken%3DbWVkaXVtX2lkPTM5NTE5NiZub25jZT1nblVwekdkcWc1QXVzYkpmSmJGclR3JnNlbmRlcl9pZD0%253D&return=return_to_url',
            main_color: [135, 136, 137],
            image: {
              small:
                'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/395196/download/',
              download_link:
                'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?cs=srgb&dl=pexels-gabriela-palai-395196.jpg&fm=jpg',
            },
            alt: 'Person Standing on Brown Wooden Dock',
            colors: ['#222a2b', '#505a5f', '#959b9c', '#c5cacf'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '2067057',
          type: 'photo',
          attributes: {
            id: 2067057,
            slug: 'high-rise-buildings-beside-road',
            description: null,
            width: 6720,
            height: 4480,
            status: 'approved',
            created_at: '2019-03-27T11:05:22.000Z',
            updated_at: '2023-07-01T11:56:36.000Z',
            publish_at: '2019-04-01T04:45:22.067Z',
            feed_at: '2019-03-27T14:38:15.000Z',
            title: 'High-rise Buildings Beside Road',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 105079,
              first_name: 'Aleksandar',
              last_name: 'Pasaric',
              slug: 'apasaric',
              username: 'apasaric',
              location: 'Dubai, UAE',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/105079/aleksandar-pasaric-858.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/105079/aleksandar-pasaric-858.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'architecture',
              'buildings',
              'business',
              'cars',
              'city',
              'crowd',
              'display',
              'downtown',
              'dusk',
              'evening',
              'hotel',
              'illuminated',
              'japan',
              'light',
              'light reflections',
              'monitors',
              'motion blur',
              'neon',
              'neon lights',
              'neon sign',
              'night',
              'nightlife',
              'nighttime',
              'outdoors',
              'people',
              'puddles',
              'rain',
              'raining',
              'reflection',
              'road',
              'shibuya',
              'shopping',
              'silhouette',
              'street',
              'street photography',
              'tokyo',
              'tourist',
              'travel',
              'urban',
              'water',
              'weather',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=aleksandar.pasaric%40gmail.com&cmd=_donations&currency_code=USD&item_name=Aleksandar+Pasaric+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fhigh-rise-buildings-beside-road-2067057%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F105079%2F%3Ftoken%3DbWVkaXVtX2lkPTIwNjcwNTcmbm9uY2U9VUhLa0NrMUNIYUthY2JTTVpqaWFPUSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [90, 65, 61],
            image: {
              small:
                'https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/2067057/download/',
              download_link:
                'https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2067057.jpg&fm=jpg',
            },
            alt: 'High-rise Buildings Beside Road',
            colors: [
              '#000000',
              '#483d8b',
              '#48d1cc',
              '#a0522d',
              '#daa520',
              '#db7093',
              '#faebd7',
            ],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '2303337',
          type: 'photo',
          attributes: {
            id: 2303337,
            slug: 'people-walking-on-street-near-buildings',
            description: '',
            width: 6720,
            height: 4480,
            status: 'approved',
            created_at: '2019-05-11T10:13:18.000Z',
            updated_at: '2023-07-01T13:31:16.000Z',
            publish_at: '2019-05-18T18:25:28.303Z',
            feed_at: '2019-08-04T00:53:36.000Z',
            title: 'People Walking on Street Near Buildings',
            aspect_ratio: 1.5,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 105079,
              first_name: 'Aleksandar',
              last_name: 'Pasaric',
              slug: 'apasaric',
              username: 'apasaric',
              location: 'Dubai, UAE',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/105079/aleksandar-pasaric-858.jpeg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/105079/aleksandar-pasaric-858.jpeg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'architecture',
              'bar',
              'buildings',
              'city',
              'commerce',
              'dark',
              'downtown',
              'evening',
              'illuminated',
              'japan',
              'lights',
              'market',
              'neon',
              'neon sign',
              'night',
              'nighttime',
              'outdoors',
              'pavement',
              'people',
              'photography',
              'rain',
              'raining',
              'restaurant',
              'road',
              'road at night',
              'shibuya',
              'shopping',
              'signage',
              'stores',
              'street',
              'tokyo',
              'tourist',
              'town',
              'travel',
              'umbrella',
              'urban',
              'weather',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=aleksandar.pasaric%40gmail.com&cmd=_donations&currency_code=USD&item_name=Aleksandar+Pasaric+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fpeople-walking-on-street-near-buildings-2303337%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F105079%2F%3Ftoken%3DbWVkaXVtX2lkPTIzMDMzMzcmbm9uY2U9UDV0YnFlMkJ6NUxTelIydTVhZWJIQSZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [68, 53, 58],
            image: {
              small:
                'https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/2303337/download/',
              download_link:
                'https://images.pexels.com/photos/2303337/pexels-photo-2303337.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2303337.jpg&fm=jpg',
            },
            alt: 'People Walking on Street Near Buildings',
            colors: [
              '#000000',
              '#696969',
              '#bc8f8f',
              '#cd5c5c',
              '#deb887',
              '#fa8072',
              '#faebd7',
            ],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
        {
          id: '1211847',
          type: 'photo',
          attributes: {
            id: 1211847,
            slug: 'woman-using-purple-umbrella-walking-in-the-street',
            description: '',
            width: 7599,
            height: 5504,
            status: 'approved',
            created_at: '2018-07-06T10:08:03.000Z',
            updated_at: '2023-07-01T11:25:23.000Z',
            publish_at: '2018-07-08T00:15:18.211Z',
            feed_at: '2018-07-19T21:14:30.000Z',
            title: 'Woman Using Purple Umbrella Walking in the Street',
            aspect_ratio: 1.3806322674418605,
            license: 'Pexels',
            published: true,
            starred: true,
            user: {
              id: 259965,
              first_name: 'Satoshi',
              last_name: 'Hirayama',
              slug: 'satoshi',
              username: 'SATOSHI',
              location: 'Kyoto, Kyoto Prefecture, Japan',
              avatar: {
                small:
                  'https://images.pexels.com/users/avatars/259965/satoshi-hirayama-620.jpg?auto=compress&fit=crop&h=60&w=60',
                medium:
                  'https://images.pexels.com/users/avatars/259965/satoshi-hirayama-620.jpg?auto=compress&fit=crop&h=256&w=256',
              },
              hero: true,
              following: false,
            },
            tags: [
              'architecture',
              'back view',
              'daylight',
              'geisha',
              'japan',
              'kimono',
              'outdoors',
              'pavement',
              'person',
              'rain',
              'raining',
              'road',
              'season',
              'shops',
              'street',
              'travel',
              'umbrella',
              'woman',
            ],
            liked: false,
            collection_ids: [],
            donate_url:
              'https://www.paypal.com/cgi-bin/webscr?business=twelvefirecracker%40yahoo.co.jp&cmd=_donations&currency_code=USD&item_name=Satoshi+Hirayama+-+Pexels&item_number=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fwoman-using-purple-umbrella-walking-in-the-street-1211847%2F&lc=US&notify_url=https%3A%2F%2Fwww.pexels.com%2Fcallback%2Fdonation%2Fpaypal%2F259965%2F%3Ftoken%3DbWVkaXVtX2lkPTEyMTE4NDcmbm9uY2U9M2o1a3FheEVzdVA1SEtSVk03VGNVZyZzZW5kZXJfaWQ9&return=return_to_url',
            main_color: [73, 69, 65],
            image: {
              small:
                'https://images.pexels.com/photos/1211847/pexels-photo-1211847.jpeg?auto=compress&cs=tinysrgb&h=130',
              medium:
                'https://images.pexels.com/photos/1211847/pexels-photo-1211847.jpeg?auto=compress&cs=tinysrgb&w=750',
              large:
                'https://images.pexels.com/photos/1211847/pexels-photo-1211847.jpeg?auto=compress&cs=tinysrgb&w=1440',
              download: 'https://www.pexels.com/photo/1211847/download/',
              download_link:
                'https://images.pexels.com/photos/1211847/pexels-photo-1211847.jpeg?cs=srgb&dl=pexels-satoshi-hirayama-1211847.jpg&fm=jpg',
            },
            alt: 'Woman Using Purple Umbrella Walking in the Street',
            colors: ['#000000', '#2f4f4f', '#708090', '#8b4513', '#c0c0c0'],
          },
          meta: {
            searchable: true,
            policy: {
              delete: false,
            },
          },
        },
      ],
      meta: {
        raw_query: 'raining',
        total_results: {
          photos: 11621,
          videos: 2411,
          users: 7,
        },
        related_searches: [
          'rain',
          'raindrops',
          'rain in forest',
          'nature',
          'rainforest',
          'raining video',
          'heavy rain',
          'storm',
          'forest',
          'snow',
          'rainbow',
          'umbrella',
          'thunderstorm',
          'landscape',
          'waterfall',
          'lightning',
        ],
        did_you_mean: [],
        spam: false,
        translations: [
          {
            query: 'raining',
            locale: 'en-US',
          },
          {
            query: 'regnen',
            locale: 'de-DE',
          },
          {
            query: 'chovendo',
            locale: 'pt-BR',
          },
          {
            query: 'дождь',
            locale: 'ru-RU',
          },
          {
            query: '下雨',
            locale: 'zh-CN',
          },
          {
            query: 'pleuvoir',
            locale: 'fr-FR',
          },
          {
            query: 'lloviendo',
            locale: 'es-ES',
          },
          {
            query: 'piovendo',
            locale: 'it-IT',
          },
          {
            query: 'deszcz',
            locale: 'pl-PL',
          },
          {
            query: 'hujan',
            locale: 'id-ID',
          },
          {
            query: 'regenen',
            locale: 'nl-NL',
          },
          {
            query: 'βροχή',
            locale: 'el-GR',
          },
          {
            query: 'yağmur',
            locale: 'tr-TR',
          },
          {
            query: 'ฝนตก',
            locale: 'th-TH',
          },
          {
            query: 'esik az eső',
            locale: 'hu-HU',
          },
          {
            query: 'regnar',
            locale: 'sv-SE',
          },
          {
            query: 'mưa',
            locale: 'vi-VN',
          },
          {
            query: '降雨',
            locale: 'ja-JP',
          },
          {
            query: '비 내리는',
            locale: 'ko-KR',
          },
          {
            query: 'regne',
            locale: 'da-DK',
          },
          {
            query: 'déšť',
            locale: 'cs-CZ',
          },
          {
            query: 'plovent',
            locale: 'ca-ES',
          },
          {
            query: 'sade',
            locale: 'fi-FI',
          },
          {
            query: 'дощ',
            locale: 'uk-UA',
          },
          {
            query: '下雨',
            locale: 'zh-TW',
          },
          {
            query: 'plouă',
            locale: 'ro-RO',
          },
          {
            query: 'prší',
            locale: 'sk-SK',
          },
          {
            query: 'esik',
            locale: 'hu-HU',
          },
          {
            query: 'yağmak',
            locale: 'tr-TR',
          },
          {
            query: 'regne',
            locale: 'nb-NO',
          },
          {
            query: 'βρέχω',
            locale: 'el-GR',
          },
          {
            query: 'lloviendo',
            locale: 'es',
          },
        ],
        title: null,
        description: null,
        meta_title: null,
        meta_description: null,
        canonical_query: null,
        canonical_locale: null,
        redirect_query: null,
        prevent_access: false,
        robots_follow: true,
        robots_index: true,
      },
      pagination: {
        current_page: 1,
        total_pages: 117,
        total_results: 1749,
      },
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
        getWeatherImage()
      })
      .catch((err) => console.error(err))
  }, [])

  const getWeatherImage = () => {
    console.log('imageData : ', imageData)
    setWeatherImage(
      imageData.results.data[Math.floor(Math.random() * 10) + 1].attributes
        .image.large
    )
    imageAPI(
      `api/search`
      // `api/search?type=video&query=technology&size=large&orientation=landscape`
    ).then((data) => {
      console.log('data : ', data)
      setWeatherImage(data.results.data[10].attributes.image.large)
    })
  }

  if (!weather?.length) return <SkeletonWeather />
  return (
    <section>
      <div className="todayWeather_cont">
        <h2>오늘의 날씨는?</h2>
        {todayWeather?.map((todayWeather, index) => (
          <TodayWeatherImageItem
            key={index}
            weather={todayWeather}
            image={weatherImage}
          />
        ))}
      </div>
      <div className="weatherList_cont">
        {weather?.map((weather, index) => (
          <WeatherListItem key={index} weather={weather} />
        ))}
      </div>
      {/* <div className="section_title">
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
      </div> */}
    </section>
  )
}

export default WeatherCont
