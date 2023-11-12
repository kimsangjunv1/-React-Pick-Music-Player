import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Main,
  Genre,
  Favorite,
  Playlist,
  Popular,
  Download,
  Artist,
  Musicvideo,
  Musicplayer,
  WeatherPlaylist,
  Details,
} from './components'

import Header from './components/include/Header'
import Footer from './components/include/Footer'
import MainComponents from './components/common/MainComponents'
import MusicControl from './components/include/MusicControl'

import { useState } from 'react'

function App() {
  const [selectCategory, setSelectCategory] = useState('d')
  return (
    <>
      <BrowserRouter>
        <Header
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        <MainComponents>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/weatherplaylist" element={<WeatherPlaylist />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/download" element={<Download />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/musicvideo" element={<Musicvideo />} />
            <Route path="/musicplayer/:key" element={<Musicplayer />} />
            <Route path="/artist/details/:key" element={<Details />} />
          </Routes>
        </MainComponents>
        <MusicControl />

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
