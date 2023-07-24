import React, { useState } from 'react'
import Header from '../include/Header'
import MainSearch from '../layout/MainSearch'

const Download = () => {
  const [selectCategory, setSelectCategory] = useState('c')
  return (
    <>
      <Header
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <main id="main">
        <section id="contents">
          {/* <MainSearch /> */}
          <div className="no_page">
            <p>🙅‍♀️</p>
            <p>이런!... 아직 준비중이에요</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Download
