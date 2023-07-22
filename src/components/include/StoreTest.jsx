import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, saveText } from './../../utils/counterSlice'

const StoreTest = () => {
  const count = useSelector((state) => state.counter.value)
  const currentText = useSelector((state) => state.counter.text)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(saveText('save Success'))
          }}
        >
          글씨 저장
        </button>
        <span>{currentText}</span>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default StoreTest
