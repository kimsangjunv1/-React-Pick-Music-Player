import React from 'react'
import { useSelector } from 'react-redux'

import { useEffect } from 'react'

const Details = () => {
  const artistId = useSelector((state) => state.counter.artistid)
  console.log('artistId : ', artistId)

  useEffect(() => {
    console.log('useEffect 실행')
  }, [])
  return <div>Details</div>
}

export default Details
