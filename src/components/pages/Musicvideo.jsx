import React from 'react'
// import { fetchAPI } from '../../utils/fetchAPI'
import Header from '../include/Header'
// import Loader from '../Loader'
// import MainSearch from '../layout/MainSearch'

const Musicvideo = () => {
  // function FirstRankingItem(props) {
  //   return (
  //     <div className="winner_cont">
  //       <h2>Top 10</h2>
  //       <div className="album_art_cont">
  //         <img
  //           src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
  //           alt=""
  //         />
  //         <img
  //           className="album_art_shadow"
  //           src={`${props.ranking.images.coverart}`}
  //           alt="앨범아트 그림자"
  //         />
  //       </div>
  //       <h4>01-</h4>
  //       <p className="artist">{props.ranking.subtitle}</p>
  //       <p className="song_title">{props.ranking.title}</p>
  //       <p className="refresh_time">
  //         <img
  //           src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/refresh.svg"
  //           alt="새로고침"
  //         />
  //         <span>2022. 11. 13. 오후 22:02</span>
  //       </p>
  //       <p className="trophy_desc">
  //         <img
  //           src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/trophy.svg"
  //           alt="트로피"
  //         />
  //         <span>올해 47주간 1위</span>
  //       </p>
  //       <audio
  //         src={`${props.ranking.hub.actions[1].uri}`}
  //         type="audio/m4a"
  //         controls
  //         // autoPlay
  //       >
  //         <source
  //           src={`${props.ranking.hub.actions[1].uri}`}
  //           type="audio/m4a"
  //         />
  //       </audio>
  //     </div>
  //   )
  // }

  // const [firstranking, setFirstRanking] = useState(null)

  // useEffect(() => {
  //   fetchAPI(
  //     `charts/track?locale=ko-KR&listId=ip-country-chart-KR&pageSize=1&startFrom=0`
  //   ).then((data) => setFirstRanking(data.tracks))
  // }, [])

  // if (!firstranking?.length) return <Loader />
  return (
    <>
      <Header />

      <main id="main">
        <div className="main_albumart_bg">
          <img
            className="albumart_bg"
            src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
            alt=""
          />
          <div className="banner">
            <div className="banner_video_cont">
              <div className="banner_img">
                <img
                  className="albumart"
                  src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
                  alt="앨범아트"
                />
              </div>
              <div className="album_desc">
                <p>방탄소년단</p>
                <h2>Butter</h2>
                <div className="album_like">
                  <img
                    className="heart"
                    src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
                    alt="heart"
                  />
                  <p>Likes 5,677</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="contents">
          {/* <MainSearch /> */}
          <div className="musicvideo_cont">
            <div className="section_title">
              <h2>Popular M/V</h2>
              <p>여기에서 날씨에 맞는 음악을 추천해드릴게요!</p>
            </div>
            <div className="section_contents">
              <div className="mv_item">
                <img
                  src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
                  alt="음악 이미지"
                />
                <p>BAEK YE-RIN</p>
                <div className="mv_item_desc">
                  <h2>Our Love is Great</h2>
                  <div className="mv_item_desc_sub">
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
                      alt="하트"
                    />
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="mv_item">
                <img
                  src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
                  alt="음악 이미지"
                />
                <p>BAEK YE-RIN</p>
                <div className="mv_item_desc">
                  <h2>Our Love is Great</h2>
                  <div className="mv_item_desc_sub">
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
                      alt="하트"
                    />
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="mv_item">
                <img
                  src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
                  alt="음악 이미지"
                />
                <p>BAEK YE-RIN</p>
                <div className="mv_item_desc">
                  <h2>Our Love is Great</h2>
                  <div className="mv_item_desc_sub">
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
                      alt="하트"
                    />
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="mv_item">
                <img
                  src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
                  alt="음악 이미지"
                />
                <p>BAEK YE-RIN</p>
                <div className="mv_item_desc">
                  <h2>Our Love is Great</h2>
                  <div className="mv_item_desc_sub">
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
                      alt="하트"
                    />
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
              <div className="mv_item">
                <img
                  src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/test_album.png?raw=true"
                  alt="음악 이미지"
                />
                <p>BAEK YE-RIN</p>
                <div className="mv_item_desc">
                  <h2>Our Love is Great</h2>
                  <div className="mv_item_desc_sub">
                    <img
                      src="https://raw.githubusercontent.com/kimsangjunv1/-React-Pick-Music-Player/main/src/styles/img/like.svg"
                      alt="하트"
                    />
                    <p>Likes 5,677</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="music__control">
            <div className="progress">
              <div className="bar"></div>
              <div className="timer">
                <span className="current">0:00</span>
                <span className="duration">4:00</span>
              </div>
            </div>
            <div className="volumeCont"></div>
            <div className="control_cont">
              <div className="control_music">
                <img src="assets/img/test_album.png" alt="" />
                <div className="control_music_desc">
                  <p>TAEYEON</p>
                  <div>
                    <h2>Weekend</h2>
                    <p>KR</p>
                  </div>
                </div>
              </div>
              <div className="control">
                <div className="timer">
                  <span className="current">0:00</span>
                  <span>/</span>
                  <span className="duration">4:00</span>
                </div>
                <i title="전체 반복" className="repeat" id="control-repeat"></i>
                <i title="이전곡 재생" className="prev" id="control-prev"></i>
                <i title="재생" className="play" id="control-play"></i>
                <i title="다음곡 재생" className="next" id="control-next"></i>
                <i title="재생 목록" className="list" id="control-list"></i>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </>
  )
}

export default Musicvideo
