import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const SongsCard = ({ item, key, musicList }) => {
  const [count, setCount] = useState(1)
  // console.log('songs : ', item)
  const getUrl = (url) => {
    const replaceUrl = url.replace('{w}x{h}', '300x300')
    return replaceUrl
    // <img src={`${getUrl(props?.item?.attributes?.artwork.url)}`} alt="" />
  }
  const elapsedTime = (date) => {
    const start = new Date(date)
    const end = new Date()

    const diff = (end - start) / 1000

    const times = [
      { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
      { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
      { name: '일', milliSeconds: 60 * 60 * 24 },
      { name: '시간', milliSeconds: 60 * 60 },
      { name: '분', milliSeconds: 60 },
    ]

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds)

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`
      }
    }
    return '방금 전'
  }
  const dispatch = useDispatch()
  return (
    <div
      className="item"
      key={key}
      onClick={() => {
        // let data = musicList.map((good) => good.ranking.title)
        // dispatch(saveText({ ranking: props.track }))
        // if (!data.includes(props.track.title)) {
        //   dispatch(saveMusic({ ranking: props.track }))
        // }
        // dispatch(setControlVisible(true))
      }}
    >
      <img
        className="album_art"
        src={`${getUrl(item.attributes.artwork.url)}`}
        alt="앨범아트"
      />
      <span className="artist">{item.attributes.artistName}</span>
      <span className="album">{item.attributes.albumName}</span>
      <span className="name">{item.attributes.name}</span>
      <span className="release_date">
        {item.attributes.releaseDate}•
        {`${elapsedTime(item.attributes.releaseDate)}`}
      </span>

      <a className="download" href={item.attributes.previews[0].url}>
        다운로드
      </a>
      <a className="sns_apple" href={item.attributes.url}>
        바로가기
      </a>
    </div>
  )
}

export default SongsCard
