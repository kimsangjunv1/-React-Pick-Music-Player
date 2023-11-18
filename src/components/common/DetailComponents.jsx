import React from 'react'
import AlbumsCard from '../common/AlbumsCard'
import SongsCard from '../common/SongsCard'
import InfoCard from './InfoCard'
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
      {/* <p className="title">{type}</p> */}
      <div className={`${type == 'Songs' ? 'songs' : 'albums'}_container`}>
        {type == 'Songs' && (
          <>
            <div className="item grid_header">
              <span>썸네일</span>
              <span>이름</span>
              <span>앨범</span>
              <span>가수</span>
              <span>출시일</span>
              <span>다운로드</span>
              <span> 애플뮤직</span>
            </div>
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
                  <InfoCard
                    title={'name'}
                    items={items.artists[0]?.attributes?.name}
                    type={'text'}
                  />
                  <InfoCard
                    title={'GenRe'}
                    items={items.artists[0].attributes.genreNames.map(
                      (item) => item
                    )}
                    type={'text'}
                  />
                  <InfoCard
                    title={'sns'}
                    items={items.artists[0]?.attributes?.url}
                    type={'sns'}
                  />
                </div>
                <div className="recent_album_container">
                  <h2 className="title">RECENT ALBUM</h2>
                  {/* <InfoCard
                    title={'RECENT ALBUM'}
                    items={`${getUrl(
                      items.albums[items.albums.length - 1].attributes.artwork
                        .url
                    )}`}
                    type={'image'}
                    
                  /> */}
                  <div className="recent_album_container_inner">
                    <img
                      src={`${getUrl(
                        items.albums[items.albums.length - 1].attributes.artwork
                          .url
                      )}`}
                      alt="앨범 아트"
                      className="album_artwork"
                    />
                    <div className="album_information_container">
                      <InfoCard
                        title={'앨범이름'}
                        items={
                          items.albums[items.albums.length - 1].attributes.name
                        }
                        type={'text'}
                      />
                      <InfoCard
                        title={'저작권'}
                        items={
                          items.albums[items.albums.length - 1].attributes
                            .copyright
                        }
                        type={'text'}
                      />
                      <InfoCard
                        title={'출시일'}
                        items={
                          items.albums[items.albums.length - 1].attributes
                            .releaseDate
                        }
                        type={'text'}
                      />
                      <InfoCard
                        title={'경과시간'}
                        items={`${elapsedTime(
                          items.albums[items.albums.length - 1].attributes
                            .releaseDate
                        )}`}
                        type={'text'}
                      />
                    </div>
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
