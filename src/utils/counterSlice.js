import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  text: 'no Save AnyThing :(',
  props: {},
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // 값을 전달할때는 action의 payload로 가져오면 됨.
    saveText: (state, action) => {
      state.text = action.payload
    },
    // 값을 전달할때는 action의 payload로 가져오면 됨.
    saveProps: (state, action) => {
      state.props = action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, saveText, saveProps } =
  counterSlice.actions

export default counterSlice.reducer
