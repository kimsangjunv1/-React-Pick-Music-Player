import React from 'react'

const RecentCard = ({ item, key }) => {
  return (
    <div className="item" key={key}>
      <img src={item.ranking.images.background} alt="" />
      <div className="information_container">
        <div className="title_container">
          <p>{item.ranking.title}</p>
          <p>{item.ranking.subtitle}</p>
        </div>
        <div className="function_container">
          <button>3,000 VIEW</button>
          <button>SHARE</button>
          <button>DOWNLOAD</button>
        </div>
      </div>
    </div>
  )
}

export default RecentCard
