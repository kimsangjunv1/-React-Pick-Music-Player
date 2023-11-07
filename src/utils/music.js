// const allMusic = [{
//     name: "1. Merry Go Round",
//     artist: "hisaishi Joe",
//     img: "music_view01",
//     audio: "music_audio01"
// },
// {
//     name: "2. One Summer's Day",
//     artist: "hisaishi Joe",
//     img: "music_view02",
//     audio: "music_audio02"
// },
// {
//     name: "3. Hello Mr's Lawrence",
//     artist: "sakamoto ryuichi",
//     img: "music_view03",
//     audio: "music_audio03"
// },
// {
//     name: "4. il porco rosso - By Gone days",
//     artist: "hisaishi Joe",
//     img: "music_view04",
//     audio: "music_audio04"
// },
// {
//     name: "5. Ocean Waves",
//     artist: "hisaishi Joe",
//     img: "music_view05",
//     audio: "music_audio05"
// },
// {
//     name: "6. American Cliche",
//     artist: "Tony Bennetts",
//     img: "music_view06",
//     audio: "music_audio06"
// },
// {
//     name: "7. The Sixth Station",
//     artist: "hisaishi Joe",
//     img: "music_view07",
//     audio: "music_audio07"
// },
// {
//     name: "8. In the Balancewith Lyrics",
//     artist: "FF14",
//     img: "music_view08",
//     audio: "music_audio08"
// },
// {
//     name: "9. SPOILERS To the Edgewith Lyrics",
//     artist: "FF14",
//     img: "music_view09",
//     audio: "music_audio09"
// },
// {
//     name: "10. Suzakus",
//     artist: "FF14",
//     img: "music_view10",
//     audio: "music_audio10"
// }
// ]

// const musicWrap = document.querySelector(".music__wrap");
// const musicView = musicWrap.querySelector(".music__view .img img");
// const musicView2 = musicWrap.querySelector(".music__view .img .two");
// const musicName = musicWrap.querySelector(".music__view .title h3");
// const musicArtist = musicWrap.querySelector(".music__view .title p");
// const musicAudio = musicWrap.querySelector("#main-audio");
// const musicPlayer2 = musicWrap.querySelector("#control-play");
// const musicPrevBtn = musicWrap.querySelector("#control-prev");
// const musicNextBtn = musicWrap.querySelector("#control-next");
// const musicProgress = musicWrap.querySelector(".progress");
// const musicProgressBar = musicWrap.querySelector(".progress .bar");
// const musicProgressCurrent = musicWrap.querySelector(".progress .timer .current");
// const musicProgressDuration = musicWrap.querySelector(".progress .timer .duration");
// const musicRepeat = musicWrap.querySelector("#control-repeat");
// const musicListBtn = musicWrap.querySelector("#control-list");
// const musicList = musicWrap.querySelector(".music__list");
// const musicListUl = musicWrap.querySelector(".music__list ul");

let musicIndex = 1
//음악 재생
function loadMusic(num) {
  musicName.innerText = allMusic[num - 1].name //뮤직 이름 로드
  musicArtist.innerText = allMusic[num - 1].artist //뮤직 아티스트 로드
  musicView.src = `../assets/music_img/${allMusic[num - 1].img}.png` //뮤직 이미지 로드
  musicView2.src = `../assets/music_img/${allMusic[num - 1].img}.png` //뮤직 이미지 alt 로드
  musicView.alt = allMusic[num - 1].name
  musicAudio.src = `../assets/music/${allMusic[num - 1].audio}.mp3` //뮤직 로드
}
//재생버튼
function playMusic() {
  musicWrap.classList.add('pause')
  musicPlayer2.setAttribute('title', '정지')
  musicPlayer2.setAttribute('class', 'stop')
  musicAudio.play()
}

//정지버튼
function pauseMusic() {
  musicWrap.classList.remove('pause')
  musicPlayer2.setAttribute('title', '재생')
  musicPlayer2.setAttribute('class', 'play')
  musicAudio.pause()
}

//이전 곡 듣기 버튼
function prevMusic() {
  musicIndex == 1 ? (musicIndex = allMusic.length) : musicIndex--
  loadMusic(musicIndex)
  playMusic()
  playListMusic()
}
//다음 곡 듣기 버튼
function nextMusic() {
  musicIndex == allMusic.length ? (musicIndex = 1) : musicIndex++
  loadMusic(musicIndex)
  playMusic()
  playListMusic()
}

//뮤직 진행바
musicAudio.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime
  // console.log(currentTime); 시간이 지날 수록 증가(현재 진행되는 시간)

  const duration = e.target.duration
  // console.log(duration); 전체 갯수(오디오의 총 길이)
  let progressWidth = (currentTime / duration) * 100 //전체 길이에서 현재 진행되는 시간을 백분위로 나눔
  musicProgressBar.style.width = `${progressWidth}%`
  //전체 시간

  musicAudio.addEventListener('loadeddata', () => {
    let audioDuration = musicAudio.duration
    let totalMin = Math.floor(audioDuration / 60) //전체 시간을 분단위로 쪼개줌
    let totalSec = Math.floor(audioDuration % 60) //남은 초를 저장
    if (totalSec < 10) totalSec = `0${totalSec}` //초가 한 자릿수일때 앞에 0을 붙임
    musicProgressDuration.textContent = `${totalMin}:${totalSec}` //완성된 시간 문자열을 출력
  })
  //진행시간
  let currentMin = Math.floor(currentTime / 60)
  let currentSec = Math.floor(currentTime % 60)
  if (currentSec < 10) currentSec = `0${currentSec}`
  musicProgressCurrent.innerText = `${currentMin}:${currentSec}`
})

//진행버튼 클릭
musicProgress.addEventListener('click', (e) => {
  let progressWidth = musicProgress.clientWidth //진행바 전체 길이
  let clickedOffsetx = e.offsetX //진행바 기준으로 측정되는 X좌표
  let songDuration = musicAudio.duration //오디오 전체 길이

  musicAudio.currentTime = (clickedOffsetx / progressWidth) * songDuration //백분위로 나눈 숫자에 다시 전체 길이를 곱해서 현재 재생값으로 바꿈
})

//반복 버튼 클릭
musicRepeat.addEventListener('click', () => {
  let getAttr = musicRepeat.getAttribute('class')

  switch (getAttr) {
    case 'repeat':
      musicRepeat.setAttribute('class', 'repeat_one')
      musicRepeat.setAttribute('title', '한곡 반복')
      break

    case 'repeat_one':
      musicRepeat.setAttribute('class', 'shuffle')
      musicRepeat.setAttribute('title', '랜덤 반복')
      break

    case 'shuffle':
      musicRepeat.setAttribute('class', 'repeat')
      musicRepeat.setAttribute('title', '전체 반복')
      break
  }
})

// 오디오가 끝나면
musicAudio.addEventListener('ended', () => {
  let getAttr = musicRepeat.getAttribute('class')
  switch (getAttr) {
    case 'repeat':
      nextMusic()
      break
    case 'repeat_one':
      playMusic()
      break
    case 'shuffle':
      let randIndex = Math.floor(Math.random() * allMusic.length + 1) //랜덤 인덱스 생성

      do {
        randomIndex = Math.floor(Math.random() * allMusic.length + 1)
      } while (musicIndex == randomIndex)
      musicIndex = randomIndex //현재 인덱스를 랜덤 인덱스 변경
      loadMusic(musicIndex) //랜덤 인덱스가 반영된 현재 인덱스 값으로 음악을 다시 로드
      playMusic() // 로드한 음악을 재생
      break
  }
})

//플레이 버튼 클릭
musicPlayer2.addEventListener('click', () => {
  const isMusicPauesd = musicWrap.classList.contains('pause') //음악 재생중
  isMusicPauesd ? pauseMusic() : playMusic()
})

//이전 버튼 클릭
musicPrevBtn.addEventListener('click', () => {
  prevMusic()
})

musicNextBtn.addEventListener('click', () => {
  nextMusic()
})

//뮤직 리스트 버튼
musicListBtn.addEventListener('click', () => {
  musicList.classList.add('show')
})

// 뮤직 리스트 구현하기
for (let i = 0; i < allMusic.length; i++) {
  let li = `
    <li data-index="${i + 1}">
        <strong>${allMusic[i].name}</strong>
        <em>${allMusic[i].artist}</em>
        <audio class="${allMusic[i].audio}" src="../assets/music/${
    allMusic[i].audio
  }.mp3"></audio>
        <span class="audio-duration" id="${allMusic[i].audio}">재생시간</span>
    </li>
`

  // musicListUl.innerHTML += li;
  musicListUl.insertAdjacentHTML('beforeend', li)

  // 리스트에 음악 시간 불러오기
  let liAudioDuration = musicListUl.querySelector(`#${allMusic[i].audio}`) //리스트에서 시간을 표시할 선택자를 가져옴
  let liAudio = musicListUl.querySelector(`.${allMusic[i].audio}`) //리스트에서 오디오를 가져옴
  liAudio.addEventListener('loadeddata', () => {
    let audioDuration = liAudio.duration //오디오 전체 길이
    let totalMin = Math.floor(audioDuration / 60) //전체 길이르리 분 단위 쪼갬
    let totalSec = Math.floor(audioDuration % 60) //초 계산
    if (totalSec < 10) totalSec = `0${totalSec}` //앞 자리에 0 추가
    liAudioDuration.innerText = `${totalMin}:${totalSec}` //문자열 출력
    liAudioDuration.setAttribute('data-duration', `${totalMin}:${totalSec}`) //속성의 오디오 길이 기록
  })
}

// 뮤직 리스트를 클릭하면 재생
function playListMusic() {
  const musicListAll = musicListUl.querySelectorAll('li')
  for (let i = 0; i < musicListAll.length; i++) {
    let audioTag = musicListAll[i].querySelector('.audio-duration')

    if (musicListAll[i].classList.contains('playing')) {
      //클래스에 playing 클래스가 포함되어 있다면
      musicListAll[i].classList.remove('playing') //Playing 클래스 삭제
      let adDuration = audioTag.getAttribute('data-duration') //오디오 길이 값 가져오기
      audioTag.innerText = adDuration //오디오 길이 값 추가
    }

    if (musicListAll[i].getAttribute('data-index') == musicIndex) {
      //현재 뮤직인덱스랑 리스트 인덱스 값이 같으면
      musicListAll[i].classList.add('playing') //클래스 playing 추가
      audioTag.innerText = '재생중' //재생중일 경우 재생중 멘트 추가
    }

    musicListAll[i].setAttribute('onclick', 'clicked(this)')
  }
}
// playListMusic();

//뮤직 리스트를 클릭하면..
function clicked(el) {
  let getLiIndex = el.getAttribute('data-index') // 클릭한 데이터 값
  musicIndex = getLiIndex // 클릭한 인덱스 값을 뮤직 인덱스에 저장
  loadMusic(musicIndex) // 해당 인덱스 뮤직 로드
  playMusic() // 음악 재생
  playListMusic() // 음악 리스트 업데이트
}

window.addEventListener('load', () => {
  loadMusic(musicIndex) //음악 재생
  playListMusic() //리스트 초기화
})

const audioIcon = document.querySelector('.music__header img')
const audio = document.getElementById('main-audio')
const audioVolume = document.getElementById('volume-control')

//뮤직 볼륨 버튼 클릭시
let i = 0
audioIcon.addEventListener('click', () => {
  if (i == 0) {
    // document.querySelector(".volumeCont").style.display="block";
    document.querySelector('.volumeCont').style.transform = 'translate(-50%, 0)'
    audioIcon.style.transform = 'translatex(88px)'
    i++
  } else {
    // document.querySelector(".volumeCont").style.display="none";
    document.querySelector('.volumeCont').style.transform =
      'translate(-50%, -100px)'
    audioIcon.style.transform = 'translatex(0)'
    i--
  }
})

audioVolume.addEventListener('change', function (e) {
  audio.volume = this.value / 10
})
