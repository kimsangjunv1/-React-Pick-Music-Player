import React from 'react'

const SectionSpace = ({ space }) => {
  console.log('?? ', space)
  return (
    <div
      className="space"
      style={{
        margin: `${space}px 0`,
        height: '1px',
        width: '100%',
      }}
    >
      {/* SectionSpace */}
    </div>
  )
}

export default SectionSpace
