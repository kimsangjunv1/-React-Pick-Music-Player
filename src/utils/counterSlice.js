import { createSlice } from '@reduxjs/toolkit'

// 기초 값
const initialState = {
  props: {},
  text: {},
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
      state.text = action.payload
    },
  },
})

// 저장하고자 하는 액션별 props
export const { saveProps, saveText } = counterSlice.actions

export default counterSlice.reducer
