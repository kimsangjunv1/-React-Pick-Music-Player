import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveMusic } from '../../utils/counterSlice'
import TitleComponents from '../common/TitleComponents'
import RecentCard from '../common/RecentCard'

const RecentCont = () => {
  const musicList = useSelector((state) => state.counter.playList)

  return (
    <section className="recent_container">
      <TitleComponents
        title={'최근에 재생한 곡'}
        desc={'최대 10개까지 표시됩니다.'}
        type={'main'}
      />
      <div className="recent_container_inner">
        {musicList.length ? (
          musicList.map((item, key) => (
            <RecentCard item={item} key={key} type={'main'} />
          ))
        ) : (
          <div className="no_item">최근에 들은 곡이 없습니다.</div>
        )}
      </div>
    </section>
  )
}

export default RecentCont
