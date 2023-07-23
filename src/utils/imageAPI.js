import axios from 'axios'

const BASE_URL = 'https://stock-photos-and-videos.p.rapidapi.com'

// const encodedParams = new URLSearchParams()
// encodedParams.set('type', 'video')
// encodedParams.set('query', 'technology')
// encodedParams.set('size', 'large')
// encodedParams.set('orientation', 'landscape')

const options = {
  url: BASE_URL,
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
    'X-RapidAPI-Host': 'stock-photos-and-videos.p.rapidapi.com',
  },
}

export const imageAPI = async (url, keyword) => {
  const { data } = await axios.post(
    `${BASE_URL}/${url}`,
    {
      type: 'photo',
      query: keyword,
      size: 'large',
      orientation: 'landscape',
    },
    options
  )

  return data
}
