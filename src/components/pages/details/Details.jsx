import React from 'react'
import Header from '../../include/Header'
import Footer from '../../include/Footer'
import Loader from '../../Loader'
import MainSearch from '../../layout/MainSearch'
import { detailsAPI } from '../../../utils/detailsAPI'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function ArtistSongItem(props) {
  return <div>d</div>
}

const Details = () => {
  const [selectCategory, setSelectCategory] = useState('d')
  const [details, setDetails] = useState([])

  const artistId = useSelector((state) => state.counter.artistid)
  const artistProps = useSelector((state) => state.counter.props)

  console.log('artistId : ', artistId)
  console.log('artistProps : ', artistProps)

  const dummy = {
    data: [
      {
        id: '1697147752',
        type: 'songs',
        attributes: {
          albumName: 'Seven - Single',
          hasTimeSyncedLyrics: true,
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 1,
          durationInMillis: 185295,
          releaseDate: '2023-07-14',
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'USA2P2330092',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a5/a6/56/a5a6561a-f570-2fb1-5a3a-95b150c18f18/196922550928_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: '3f3f3f',
            textColor2: '252525',
            textColor4: '505050',
            textColor1: '0f0f0f',
            bgColor: 'ffffff',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName:
            'Andrew Watt, Jon Bellion, Henry Walter, Theron Makiel Thomas & Latto',
          url: 'https://music.apple.com/kr/album/seven/1697147751?i=1697147752',
          playParams: {
            id: '1697147752',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          hasLyrics: true,
          isAppleDigitalMaster: false,
          audioTraits: ['atmos', 'lossless', 'lossy-stereo', 'spatial'],
          name: 'Seven',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/24/b2/c6/24b2c6fc-2f64-4446-2efc-b0204a200196/mzaf_11386174141133605880.plus.aac.p.m4a',
            },
          ],
          artistName: '정국 & Latto',
          contentRating: 'clean',
        },
      },
      {
        id: '1697147758',
        type: 'songs',
        attributes: {
          hasTimeSyncedLyrics: true,
          albumName: 'Seven - Single',
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 2,
          releaseDate: '2023-07-14',
          durationInMillis: 185427,
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'USA2P2330093',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a5/a6/56/a5a6561a-f570-2fb1-5a3a-95b150c18f18/196922550928_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: '3f3f3f',
            textColor2: '252525',
            textColor4: '505050',
            textColor1: '0f0f0f',
            bgColor: 'ffffff',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName:
            'Andrew Watt, Jon Bellion, Henry Walter, Theron Makiel Thomas & Latto',
          url: 'https://music.apple.com/kr/album/seven/1697147751?i=1697147758',
          playParams: {
            id: '1697147758',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          isAppleDigitalMaster: false,
          hasLyrics: true,
          audioTraits: ['atmos', 'lossless', 'lossy-stereo', 'spatial'],
          name: 'Seven',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7f/1a/e0/7f1ae062-ca1a-ca0c-871d-5457371434c7/mzaf_1497057613573339618.plus.aac.p.m4a',
            },
          ],
          contentRating: 'explicit',
          artistName: '정국 & Latto',
        },
      },
      {
        id: '1693711264',
        type: 'songs',
        attributes: {
          hasTimeSyncedLyrics: true,
          albumName: 'Still With You - Single',
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 1,
          releaseDate: '2020-06-05',
          durationInMillis: 239906,
          isVocalAttenuationAllowed: false,
          isMasteredForItunes: false,
          isrc: 'QM6N22094716',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/61/69/33/616933f6-6d23-321e-f928-1f1c969f130e/195081749037_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: '8c9ac4',
            textColor2: '8596ea',
            textColor4: '6c7cc1',
            textColor1: 'acbcef',
            bgColor: '0c131b',
            hasP3: false,
          },
          audioLocale: 'ko',
          composerName: '정국 & P-DOGG',
          url: 'https://music.apple.com/kr/album/still-with-you/1693711257?i=1693711264',
          playParams: {
            id: '1693711264',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          isAppleDigitalMaster: false,
          hasLyrics: true,
          audioTraits: ['lossless', 'lossy-stereo'],
          name: 'Still With You',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/76/7c/c8/767cc885-1aff-faf1-799d-6672cc07aff9/mzaf_1021814625617398337.plus.aac.p.m4a',
            },
          ],
          artistName: '정국',
        },
      },
      {
        id: '1630451413',
        type: 'songs',
        attributes: {
          albumName: 'Left and Right - Single',
          hasTimeSyncedLyrics: true,
          genreNames: ['팝', '음악'],
          trackNumber: 1,
          durationInMillis: 154487,
          releaseDate: '2022-06-24',
          isVocalAttenuationAllowed: false,
          isMasteredForItunes: true,
          isrc: 'USAT22206972',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8e/89/2e/8e892ef1-7ce6-ca67-a07e-5417194fde4b/075679739155.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: '333333',
            textColor2: '171813',
            textColor4: '454642',
            textColor1: '000000',
            bgColor: 'ffffff',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName: 'Charlie Puth & Jacob Hindlin',
          url: 'https://music.apple.com/kr/album/left-and-right/1630451412?i=1630451413',
          playParams: {
            id: '1630451413',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          hasLyrics: true,
          isAppleDigitalMaster: true,
          audioTraits: ['atmos', 'lossless', 'lossy-stereo', 'spatial'],
          name: 'Left and Right',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/b1/83/66/b18366d1-df27-42c4-6252-13a4b0222e76/mzaf_10804262181322111014.plus.aac.p.m4a',
            },
          ],
          artistName: 'Charlie Puth & 정국',
        },
      },
      {
        id: '1655441868',
        type: 'songs',
        attributes: {
          albumName:
            'Dreamers (Music from the FiFA World Cup Qatar 2022 Official Soundtrack) - Single',
          hasTimeSyncedLyrics: true,
          genreNames: ['전체', '음악'],
          trackNumber: 1,
          durationInMillis: 201391,
          releaseDate: '2022-11-20',
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'QZNMY2232113',
          artwork: {
            width: 3075,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/03/c2/c0/03c2c0d5-bb76-e143-847f-52ff6c4c808f/197089992972.png/{w}x{h}bb.jpg',
            height: 3075,
            textColor3: '414547',
            textColor2: '1a232b',
            textColor4: '474749',
            textColor1: '122028',
            bgColor: 'fdd7c2',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName: '정국, RedOne, Mustapha El Ouardi & Pat Devine',
          url: 'https://music.apple.com/kr/album/dreamers-music-from-the-fifa-world-cup-qatar-2022/1655441867?i=1655441868',
          playParams: {
            id: '1655441868',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          hasLyrics: true,
          isAppleDigitalMaster: false,
          audioTraits: ['lossless', 'lossy-stereo'],
          name: 'Dreamers (Music from the FiFA World Cup Qatar 2022 Official Soundtrack)',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f8/50/c7/f850c704-f96a-ffde-dc3d-8d27d81bf988/mzaf_7734350799442212815.plus.aac.p.m4a',
            },
          ],
          artistName: '정국',
        },
      },
      {
        id: '1697325291',
        type: 'songs',
        attributes: {
          hasTimeSyncedLyrics: true,
          albumName: 'Seven (Weekday Ver.) - EP',
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 2,
          releaseDate: '2023-07-14',
          durationInMillis: 184400,
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'USA2P2330093',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/25/08/7e/25087e39-2c0e-010b-203b-dfafbe6ebc77/196922549410_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: '333d3f',
            textColor2: '0a0d0c',
            textColor4: '3b3d3d',
            textColor1: '010d10',
            bgColor: 'ffffff',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName:
            'Andrew Watt, Jon Bellion, Cirkut, Theron Makiel Thomas & Latto',
          url: 'https://music.apple.com/kr/album/seven/1697325040?i=1697325291',
          playParams: {
            id: '1697325291',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          isAppleDigitalMaster: false,
          hasLyrics: true,
          audioTraits: ['lossless', 'lossy-stereo'],
          name: 'Seven',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/9f/e5/7d/9fe57d0d-7338-1fdb-cd1e-d99f8513f1bf/mzaf_16638233525721640847.plus.aac.p.m4a',
            },
          ],
          contentRating: 'explicit',
          artistName: '정국 & Latto',
        },
      },
      {
        id: '1697147761',
        type: 'songs',
        attributes: {
          hasTimeSyncedLyrics: false,
          albumName: 'Seven - Single',
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 3,
          releaseDate: '2023-07-14',
          durationInMillis: 184240,
          isVocalAttenuationAllowed: false,
          isMasteredForItunes: false,
          isrc: 'USA2P2335050',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/a5/a6/56/a5a6561a-f570-2fb1-5a3a-95b150c18f18/196922550928_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: '3f3f3f',
            textColor2: '252525',
            textColor4: '505050',
            textColor1: '0f0f0f',
            bgColor: 'ffffff',
            hasP3: false,
          },
          audioLocale: 'zxx',
          composerName:
            'Andrew Watt, Jon Bellion, Henry Walter, Theron Makiel Thomas & Latto',
          url: 'https://music.apple.com/kr/album/seven-instrumental/1697147751?i=1697147761',
          playParams: {
            id: '1697147761',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          isAppleDigitalMaster: false,
          hasLyrics: false,
          audioTraits: ['atmos', 'lossless', 'lossy-stereo', 'spatial'],
          name: 'Seven (Instrumental)',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/80/0b/d7/800bd7e7-3eb1-4e5a-50bf-17b0a8c72bde/mzaf_15793815053447524985.plus.aac.p.m4a',
            },
          ],
          artistName: '정국 & Latto',
        },
      },
      {
        id: '1633318759',
        type: 'songs',
        attributes: {
          hasTimeSyncedLyrics: true,
          albumName: 'CHARLIE',
          genreNames: ['팝', '음악'],
          trackNumber: 6,
          releaseDate: '2022-06-24',
          durationInMillis: 154487,
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'USAT22206972',
          artwork: {
            width: 1425,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/7e/5f/22/7e5f2239-6143-7cf4-dfe1-d9b53d47c4c0/075679736307.jpg/{w}x{h}bb.jpg',
            height: 1425,
            textColor3: '2e2e2e',
            textColor2: '2c2c2b',
            textColor4: '4e4e4d',
            textColor1: '040404',
            bgColor: 'dadad8',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName: 'Charlie Puth & Jacob Hindlin',
          url: 'https://music.apple.com/kr/album/left-and-right/1633318292?i=1633318759',
          playParams: {
            id: '1633318759',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          isAppleDigitalMaster: false,
          hasLyrics: true,
          audioTraits: ['atmos', 'lossless', 'lossy-stereo', 'spatial'],
          name: 'Left and Right',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/08/ff/52/08ff524f-1a3a-8434-9cbc-8b4cab55c26e/mzaf_17925949593571206167.plus.aac.p.m4a',
            },
          ],
          artistName: 'Charlie Puth & 정국',
        },
      },
      {
        id: '1607612144',
        type: 'songs',
        attributes: {
          albumName: 'Stay Alive (Prod. by SUGA of BTS) - Single',
          hasTimeSyncedLyrics: true,
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 1,
          durationInMillis: 210928,
          releaseDate: '2022-02-11',
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'USA2P2203296',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/a5/53/10/a5531066-ae03-fe5d-fdef-a2a26467dbbc/192641935671_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: 'c0bdc5',
            textColor2: 'e8caf7',
            textColor4: 'baa1c8',
            textColor1: 'efecf4',
            bgColor: '03010a',
            hasP3: false,
          },
          audioLocale: 'ko',
          composerName:
            'SUGA, EL CAPITXN, Maria Marcus, Louise Frick Sveen, Gabriel Brandes, Matt Thomson, Max Lynedoch Graham & 박신원',
          url: 'https://music.apple.com/kr/album/stay-alive-prod-by-suga-of-bts/1607612139?i=1607612144',
          playParams: {
            id: '1607612144',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          hasLyrics: true,
          isAppleDigitalMaster: false,
          audioTraits: ['lossless', 'lossy-stereo'],
          name: 'Stay Alive (Prod. by SUGA of BTS)',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/de/42/ea/de42eaaa-033e-3a77-322c-668e5748e0e0/mzaf_1875895121004004325.plus.aac.p.m4a',
            },
          ],
          artistName: '정국',
        },
      },
      {
        id: '1693711063',
        type: 'songs',
        attributes: {
          hasTimeSyncedLyrics: true,
          albumName: 'My You - Single',
          genreNames: ['K-Pop', '음악', '팝'],
          trackNumber: 1,
          releaseDate: '2022-06-13',
          durationInMillis: 165071,
          isVocalAttenuationAllowed: true,
          isMasteredForItunes: false,
          isrc: 'USA2P2212454',
          artwork: {
            width: 1400,
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/e6/41/04/e641046b-100d-266d-f128-43e600ff2e1b/192641872389_Cover.jpg/{w}x{h}bb.jpg',
            height: 1400,
            textColor3: 'ddd7ca',
            textColor2: 'fee0e5',
            textColor4: 'dfc6cc',
            textColor1: 'fcf5e2',
            bgColor: '64616a',
            hasP3: false,
          },
          audioLocale: 'en-US',
          composerName: '정국 & Hiss noise',
          url: 'https://music.apple.com/kr/album/my-you/1693711059?i=1693711063',
          playParams: {
            id: '1693711063',
            kind: 'song',
          },
          discNumber: 1,
          hasCredits: false,
          isAppleDigitalMaster: false,
          hasLyrics: true,
          audioTraits: ['lossless', 'lossy-stereo'],
          name: 'My You',
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ef/21/fa/ef21faa7-6d2e-7336-2683-5cffd0702573/mzaf_2884114332344540192.plus.aac.p.m4a',
            },
          ],
          artistName: '정국',
        },
      },
    ],
  }

  const getArtistDetails = () => {
    // detailsAPI(`artists/get-top-songs?id=${artistId}&l=ko-KR`)
    // .then((data) => console.log('가져온 디테일 : ', data))
  }

  useEffect(() => {
    getArtistDetails()
  }, [])

  // if (!details?.length) return <Loader />
  return (
    <>
      <Header
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      />
      <main id="main">
        <section id="contents">
          <div className="page_title_container">
            <Link to={`/artist`}>〈</Link>
            <h2>상세보기</h2>
          </div>
          <div className="detail_container">
            <img
              src={`${
                artistProps?.artist?.images?.background
                  ? artistProps?.artist?.images?.background
                  : ''
              }`}
              alt=""
              className="detail_cover_image"
            />
            <h4>{artistProps?.artist?.subtitle}</h4>
          </div>
          {dummy.data.map((item, index) => (
            <ArtistSongItem key={index} props={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Details
