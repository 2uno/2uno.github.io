const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
let isPageActive = true; // 페이지가 활성화되어 있는지 여부를 나타내는 변수

// 음악이 로드될 때 페이드인 효과 적용
audio.volume = 0;
audio.addEventListener('loadedmetadata', function() {
  fadeAudioIn(audio);
});

// 페이지가 활성화되었을 때 음악을 재생
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    isPageActive = true;
    if (!audio.paused) {
      audio.play();
    }
  } else {
    isPageActive = false;
    if (!audio.paused) {
      audio.pause();
    }
  }
});

// 재생/일시정지 버튼 클릭 이벤트 처리
playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    playAudio();
  } else {
    pauseAudio();
  }
});

// 페이드인 효과 함수
function fadeAudioIn(audioElement) {
  let volume = 0;
  const fadeInInterval = setInterval(function() {
    volume += 0.05;
    if (volume >= 1) {
      clearInterval(fadeInInterval);
    }
    audioElement.volume = volume;
  }, 100);
}

// 음악을 재생하는 함수
function playAudio() {
  if (isPageActive) {
    audio.play();
    playPauseBtn.classList.remove('play');
    playPauseBtn.classList.add('pause');
  }
}

// 음악을 일시정지하는 함수
function pauseAudio() {
  audio.pause();
  playPauseBtn.classList.remove('pause');
  playPauseBtn.classList.add('play');
}
