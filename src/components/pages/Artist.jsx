import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'
import Footer from '../include/Footer'
import { Link } from 'react-router-dom'

import ArtistCard from '../common/ArtistCard'
import TitleComponents from '../common/TitleComponents'

import Loader from '../Loader'

// import { useDispatch } from 'react-redux'
// import { saveArtistID } from '../../utils/counterSlice'
// import { saveProps } from '../../utils/counterSlice'

// function ArtistItem(props) {
//   const dispatch = useDispatch()
//   return (
//     <Link
//       to={`/artist/details/${props.artist.artists[0].adamid}`}
//       onClick={() => {
//         dispatch(saveArtistID(props.artist.artists[0].adamid))
//         dispatch(saveProps(props))
//       }}
//     >
//       <div className="artist">
//         <img
//           src={`${
//             props?.artist?.images?.background
//               ? props?.artist?.images?.background
//               : ''
//           }`}
//           alt=""
//         />
//         <div className="artistbox">
//           <div className="artistbox_desc">
//             <h4>{props.artist.subtitle}</h4>
//           </div>
//           <div className="like">
//             <img
//               src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
//               alt="/"
//             />
//             <p>Likes 5,677</p>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

const Artist = () => {
  const [artist, setArtist] = useState(null)
  const [selectCategory, setSelectCategory] = useState('d')
  const [resultCount, setResultCount] = useState(5)

  const fetchItem = () => {}

  useEffect(() => {
    // 실데이터
    // fetchAPI(
    //   `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=${resultCount}&startFrom=0`
    //   ).then((data) => setArtist(data.tracks))
    setResultCount(resultCount + 5)

    //더미
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/utils/shazam_track.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setArtist(res.tracks)
      })
  }, [])

  if (!artist?.length) return <Loader />

  return (
    <>
      <Header
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <main id="main">
        <section id="contents">
          {/* <MainSearch /> */}

          <TitleComponents title={'Artist'} type={'page'} />
          <div className="artist_container">
            {/* <h3>
              Artist<em>{resultCount - 5}명</em>
            </h3> */}
            {artist.map((artist, index) => (
              // <ArtistItem key={index} artist={artist} />
              <ArtistCard props={artist} />
            ))}
            {/* <div className="artist_container_inner">
            </div> */}
          </div>
          <button
            className={resultCount > 20 ? 'more_btn disabled' : 'more_btn'}
            onClick={() => {
              if (resultCount <= 20) {
                setResultCount(resultCount + 5)
                fetchItem()
                console.log('성공')
              }
            }}
          >
            {resultCount > 20
              ? '더 보기는 최대 20명 까지만 지원합니다.'
              : '더 보기'}
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Artist
