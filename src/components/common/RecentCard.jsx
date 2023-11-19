import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removePlayList, saveText } from '../../utils/counterSlice'
import icon_close from './../../styles/img/icon/icon_close.svg'
import icon_headset from './../../styles/img/icon/icon_headset.svg'

const RecentCard = ({ item, key, type, list }) => {
  const dispatch = useDispatch()
  return (
    <div className="item" key={key}>
      <div
        className="album_art_container"
        onClick={() => {
          dispatch(saveText({ ranking: item.ranking }))
        }}
      >
        <img
          className="main"
          src={item.ranking?.images?.background}
          alt="앨범 이미지"
        />
        <img
          className="sub"
          src={item.ranking?.images?.background}
          alt="서브 앨범 이미지"
        />
        <img className="play" src={icon_headset} alt="헤드셋" />
      </div>
      <div className="information_container">
        <div className="title_container">
          <p>{item.ranking?.title}</p>
          <p>{item.ranking?.subtitle}</p>
        </div>
        {type === 'main' ? (
          <div className="function_container">
            {/* <button>3,000 VIEW</button>
            <button>SHARE</button>
            <button>DOWNLOAD</button> */}
          </div>
        ) : (
          <div className="function_container">
            <button>
              <img
                src={icon_close}
                alt="닫기"
                onClick={() => {
                  dispatch(
                    removePlayList(
                      list &&
                        list.filter(
                          (good) =>
                            good.ranking.artists[0].adamid !==
                            item.ranking.artists[0].adamid
                        )
                    )
                  )
                }}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecentCard
