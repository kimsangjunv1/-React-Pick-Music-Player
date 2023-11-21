import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { saveArtistID, saveProps } from '../../utils/counterSlice'
// import { saveProps } from '../../utils/counterSlice'

const ArtistCard = ({ props }) => {
  const dispatch = useDispatch()
  // console.log('들어옴 : ', props)
  return (
    <Link
      to={`/artist/details/${props.artists[0]?.adamid}`}
      onClick={() => {
        dispatch(saveArtistID(props.artists[0].adamid))
        dispatch(saveProps(props))
      }}
      className="item"
    >
      <img
        src={`${props?.images?.background ? props?.images?.background : ''}`}
        alt=""
      />
      <div className="information_container">
        <div className="title_container">
          <p>{props?.artists[0].alias}</p>
          <h2>{props?.subtitle}</h2>
        </div>
        <div className="desc_container">
          <img
            src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
            alt="/"
          />
          <p>Likes 5,677</p>
        </div>
      </div>
    </Link>
  )
}

export default ArtistCard
