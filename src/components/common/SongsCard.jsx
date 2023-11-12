import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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
      <img src={`${getUrl(item.attributes.artwork.url)}`} alt="앨범아트" />
      <div className="desc_container">
        <span className="name">{item.attributes.name}</span>
        <span className="album">{item.attributes.albumName}</span>
        <span className="artist">{item.attributes.artistName}</span>
        <span className="download">{item.attributes.previews[0].url}</span>
        <span className="sns_apple">{item.attributes.url}</span>
        <span className="release_date">{item.attributes.releaseDate}</span>
        <span className="release_date_estimated">
          {`${elapsedTime(item.attributes.releaseDate)}`}
        </span>
      </div>
    </div>
  )
}

export default SongsCard
