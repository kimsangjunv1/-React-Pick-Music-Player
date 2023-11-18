import React from 'react'

const InfoCard = ({ title, items, type }) => {
  return (
    <div className="info_container">
      <h2 className="title">{title}</h2>
      {type == 'sns' && (
        <a className="sns" href={`${items}`}>
          
        </a>
      )}
      {type == 'text' && <p>{items}</p>}
      {type == 'image' && (
        <img src={items} alt="앨범 아트" className="album_artwork" />
      )}
    </div>
  )
}

export default InfoCard
