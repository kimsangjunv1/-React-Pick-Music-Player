import React from 'react'
import { Link } from 'react-router-dom'
import TitleComponents from '../common/TitleComponents'

const PlayListCont = () => {
  return (
    <section className="playlist_container">
      <Link to="/weatherplaylist">
        <TitleComponents
          title={'비가 내리는 오늘 플레이리스트를 추천해드릴게용'}
          desc={'여기에서 플레이리스트를 들을 수 있어요!'}
          type={'main'}
        />

        <div className="season_cont">
          <div className="season_youtube_link">
            <img
              src="https://github.com/kimsangjunv1/-React-Pick-Music-Player/blob/main/src/styles/img/playlist.jpg?raw=true"
              alt=""
            />
          </div>
        </div>
      </Link>
    </section>
  )
}

export default PlayListCont
