import { createSlice } from '@reduxjs/toolkit'

// 기초 값
const initialState = {
  props: {},
  artistid: {},
  text: [],
  playList: [],
  visualVisibleState: false,
  controlVisibleState: false,
}

// 스토어 이름
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // 값을 전달할때는 action의 payload로 가져오면 됨.
    saveProps: (state, action) => {
      state.props = action.payload
    },
    saveText: (state, action) => {
      state.text = [action.payload]
    },
    saveArtistID: (state, action) => {
      state.artistid = action.payload
    },
    saveMusic: (state, action) => {
      state.playList = [...state.playList, action.payload]
    },
    setControlVisible: (state, action) => {
      state.controlVisibleState = action.payload
    },
    setVisualVisible: (state, action) => {
      state.visualVisibleState = action.payload
    },
    removePlayList: (state, action) => {
      state.playList = action.payload
    },
  },
})

// 저장하고자 하는 액션별 props
export const {
  saveProps,
  saveText,
  saveArtistID,
  saveMusic,
  setControlVisible,
  setVisualVisible,
  removePlayList,
} = counterSlice.actions

export default counterSlice.reducer
