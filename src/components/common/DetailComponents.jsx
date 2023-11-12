import React from 'react'
import AlbumsCard from '../common/AlbumsCard'
import SongsCard from '../common/SongsCard'
import { useSelector, useDispatch } from 'react-redux'

const DetailComponents = ({ type, items }) => {
  const musicList = useSelector((state) => state.counter.playList)
  // console.log('들어옴 : ', items)
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
      </div>
    </>
  )
}

export default DetailComponents
