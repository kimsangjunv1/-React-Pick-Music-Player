import React from 'react'

const AlbumsCard = ({ item, key }) => {
  // console.log('albums : ', item)
  const getUrl = (url) => {
    const replaceUrl = url.replace('{w}x{h}', '300x300')
    return replaceUrl
    // <img src={`${getUrl(props?.item?.attributes?.artwork.url)}`} alt="" />
  }
  return (
    <div className="item" key={key}>
      {/* <p>{item.attributes.artwork.url}</p> */}

      <img src={`${getUrl(item.attributes.artwork.url)}`} alt="앨범아트" />

      <div
        className="album_desc"
        style={{ background: `#${item.attributes.artwork.bgColor}cc` }}
      >
        <h2 className="title">{item.attributes.name}</h2>

        <div className="genre_container">
          {item.attributes.genreNames.map((item) => (
            <>
              <span className="genre">{item}</span>
            </>
          ))}
        </div>
        <p className="copyright">{item.attributes.copyright}</p>
      </div>
    </div>
  )
}

export default AlbumsCard
