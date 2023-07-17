import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'

const SkeletonMain = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <p>나옴나옴나옴나옴나옴</p>
          <SkeletonElement type="avatar" />
          {/* <Shimmer /> */}
        </div>
        <div>
          <SkeletonElement type="title" />
          {/* <Shimmer /> */}
          <SkeletonElement type="text" />
          {/* <Shimmer /> */}
          <SkeletonElement type="text" />
          {/* <Shimmer /> */}
        </div>
      </div>
    </div>
  )
}

export default SkeletonMain
