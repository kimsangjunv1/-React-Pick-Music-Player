import React from 'react'
import { useDispatch } from 'react-redux'

const SongsCard = ({ item, key, musicList }) => {
  console.log('songs : ', item)
  const getUrl = (url) => {
    const replaceUrl = url.replace('{w}x{h}', '300x300')
    return replaceUrl
    // <img src={`${getUrl(props?.item?.attributes?.artwork.url)}`} alt="" />
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
      <p>{item.attributes.name}</p>
      <p>{item.attributes.albumName}</p>
      <img src={`${getUrl(item.attributes.artwork.url)}`} alt="앨범아트" />
    </div>
  )
}

export default SongsCard
