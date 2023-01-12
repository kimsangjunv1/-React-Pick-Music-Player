import React, { useState } from 'react'
import Header from '../include/Header'

const Download = () => {
  const [selectCategory, setSelectCategory] = useState('c')
  return (
    <Header
      selectCategory={selectCategory}
      setSelectCategory={setSelectCategory}
    />
  )
}

export default Download
