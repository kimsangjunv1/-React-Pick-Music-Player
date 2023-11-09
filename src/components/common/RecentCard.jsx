import React from 'react'
import icon_close from './../../styles/img/icon/icon_close.svg'

const RecentCard = ({ item, key, type }) => {
  return (
    <div className="item" key={key}>
      <div className="album_art_container">
        <img className="main" src={item.ranking.images.background} alt="" />
        <img className="sub" src={item.ranking.images.background} alt="" />
      </div>
      <div className="information_container">
        <div className="title_container">
          <p>{item.ranking.title}</p>
          <p>{item.ranking.subtitle}</p>
        </div>
        {type === 'main' ? (
          <div className="function_container">
            <button>3,000 VIEW</button>
            <button>SHARE</button>
            <button>DOWNLOAD</button>
          </div>
        ) : (
          <div className="function_container">
            <button>
              <img src={icon_close} alt="닫기" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecentCard
