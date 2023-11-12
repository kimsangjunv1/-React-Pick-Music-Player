import React from 'react'

const MainComponents = ({ children }) => {
  return (
    <main id="main">
      <div id="contents" className="main_inner">
        {children}
      </div>
    </main>
  )
}

export default MainComponents
