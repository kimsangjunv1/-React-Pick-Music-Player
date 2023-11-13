import React from 'react'

const InfoCard = ({ title, items, type }) => {
  return (
    <div className="info_container">
      <p>{title}</p>
      {type !== 'image' && <p>{items}</p>}
      {type == 'image' && (
        <img src={items} alt="앨범 아트" className="album_artwork" />
      )}
    </div>
  )
}

export default InfoCard
