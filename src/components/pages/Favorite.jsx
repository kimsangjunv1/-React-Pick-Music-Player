import React, { useState } from 'react'
import Header from '../include/Header'

const Favorite = () => {
  const [selectCategory, setSelectCategory] = useState(null)
  return (
    <Header
      selectCategory={selectCategory}
      setSelectCategory={setSelectCategory}
    />
  )
}

export default Favorite
