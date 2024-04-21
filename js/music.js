const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
let isPageActive = true; // 페이지가 활성화되어 있는지 여부를 나타내는 변수
const MAX_VOLUME = 1; // 최대 볼륨
const FADE_INTERVAL = 100; // 페이드인 간격 (단위: 밀리초)
const FADE_STEP = 0.002; // 페이드인 단계

// 페이지가 로드될 때 페이드인 효과 적용
audio.volume = 0;
fadeAudioIn(audio);

// 페이지가 활성화되었을 때 음악을 재생
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    isPageActive = true;
    if (!audio.paused) {
      audio.volume = 0;
      audio.play();

      fadeAudioIn(audio);
      togglePlayPauseBtn(); // 재생 시 버튼 변경
    }
  } else {
    isPageActive = false;
    if (!audio.paused) {
      audio.pause();
      togglePlayPauseBtn(); // 정지 시 버튼 변경
    }
  }
});

// 재생/일시정지 버튼 클릭 이벤트 처리
playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    playAudio();
    togglePlayPauseBtn(); // 재생 시 버튼 변경
  } else {
    pauseAudio();
    togglePlayPauseBtn(); // 정지 시 버튼 변경
  }
});

// 페이드인 효과 함수
function fadeAudioIn(audioElement) {
  let volume = 0;
  const fadeInInterval = setInterval(function () {
    volume += FADE_STEP; // 조금씩 증가하도록 수정
    if (volume >= 1 || volume * MAX_VOLUME >= 20) { // 볼륨이 50을 넘지 않도록 수정
      clearInterval(fadeInInterval);
    }
    audioElement.volume = Math.min(volume * MAX_VOLUME, 20); // 최대 볼륨 50까지 적용
  }, FADE_INTERVAL); // 페이드인 간격 적용
}


// 음악을 재생하는 함수
function playAudio() {
  if (isPageActive) {
    audio.volume = 0; // 페이드인을 위해 음악의 볼륨을 0으로 설정
    audio.play();
    fadeAudioIn(audio); // 페이드인 효과 적용
  }
}

// 음악을 일시정지하는 함수
function pauseAudio() {
  audio.pause();
}

// 재생/일시정지 버튼 상태 변경 함수
function togglePlayPauseBtn() {
  if (audio.paused) {
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
  } else {
    playPauseBtn.classList.remove("play");
    playPauseBtn.classList.add("pause");
  }
}
