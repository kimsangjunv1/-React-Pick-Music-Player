import axios from 'axios'

const BASE_URL = 'https://shazam.p.rapidapi.com'

const options = {
  url: BASE_URL,
  // params: {
  //   maxResults: '15',
  // },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
}

export const searchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
