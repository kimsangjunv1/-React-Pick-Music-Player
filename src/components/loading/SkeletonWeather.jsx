import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'

const SkeletonWeather = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <SkeletonElement type="text" />
      </div>
    </div>
  )
}

export default SkeletonWeather
