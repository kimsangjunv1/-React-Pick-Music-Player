import React from 'react'
import AlbumsCard from '../common/AlbumsCard'
import SongsCard from '../common/SongsCard'
import { useSelector, useDispatch } from 'react-redux'

const DetailComponents = ({ type, items }) => {
  const musicList = useSelector((state) => state.counter.playList)
  console.log('들어옴 : ', items)
  const getUrl = (url) => {
    const replaceUrl = url.replace('{w}x{h}', '2000x2000')
    return replaceUrl
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
  return (
    <>
      <p className="title">{type}</p>
      <div className={`${type == 'Songs' ? 'songs' : 'albums'}_container`}>
        {type == 'Songs' && (
          <>
            {items.map((item, key) => (
              <>
                <SongsCard item={item} key={key} musicList={musicList} />
              </>
            ))}
          </>
        )}
        {type == 'Albums' && (
          <>
            {items.map((item, key) => (
              <>
                <AlbumsCard item={item} key={key} musicList={musicList} />
              </>
            ))}
          </>
        )}
        {type == 'Artists' && (
          <>
            <div
              className="selected_container"
              style={
                {
                  // background: `#${artists[0]?.attributes?.artwork?.bgColor}cc`,
                }
              }
            >
              <div className="sub_background_container">
                <img
                  src={`${getUrl(items.artists[0]?.attributes?.artwork?.url)}`}
                  alt="서브 아티스트 사진"
                  className="sub_artist"
                />
              </div>
              <div
                className="desc"
                style={
                  {
                    // background: `#${artists[0]?.attributes?.artwork?.textColor2}cc`,
                  }
                }
              >
                <div className="profile_image_container">
                  <img
                    src={`${getUrl(
                      items.artists[0]?.attributes?.artwork?.url
                    )}`}
                    alt="메인 아티스트 사진"
                    className="main_artist"
                  />
                  <img
                    src={`${getUrl(
                      items.artists[0]?.attributes?.artwork?.url
                    )}`}
                    alt="메인 아티스트 사진"
                    className="shadow_artist"
                  />
                </div>

                <div className="desc_container">
                  <div className="info_container">
                    <p>NAME</p>
                    <p>{items.artists[0]?.attributes?.name}</p>
                  </div>
                  <div className="info_container">
                    <p>GenRe</p>
                    <p>
                      {items.artists[0].attributes.genreNames.map((item) => (
                        <>
                          <p>{item}</p>
                        </>
                      ))}
                    </p>
                  </div>
                  <div className="info_container">
                    <p className="title">SNS</p>
                    <p>{items.artists[0]?.attributes?.url}</p>
                  </div>
                  <div className="info_container">
                    <p className="title">RECENT ALBUM</p>
                    <img
                      src={`${getUrl(
                        items.albums[items.albums.length - 1].attributes.artwork
                          .url
                      )}`}
                      alt="앨범 아트"
                      className="album_artwork"
                    />
                  </div>
                  <div className="info_container">
                    {items.albums[items.albums.length - 1].attributes.name}
                    {items.albums[items.albums.length - 1].attributes.copyright}
                    {
                      items.albums[items.albums.length - 1].attributes
                        .releaseDate
                    }
                    •
                    {`${elapsedTime(
                      items.albums[items.albums.length - 1].attributes
                        .releaseDate
                    )}`}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default DetailComponents
