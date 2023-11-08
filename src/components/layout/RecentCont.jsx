import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveMusic } from '../../utils/counterSlice'
import TitleComponents from '../common/TitleComponents'

const RecentCont = () => {
  const musicList = useSelector((state) => state.counter.playList)
  console.log('여기가 나와야해 : ', musicList)
  return (
    <div className="recent_container">
      <TitleComponents
        title={'최근에 재생한 곡'}
        desc={'최대 10개까지 표시됩니다.'}
      />
      <div className="recent_container_inner">
        {musicList.length ? (
          musicList.map((item, key) => (
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
          ))
        ) : (
          <div>최근에 들은 곡이 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default RecentCont
