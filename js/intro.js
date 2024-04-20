function showWeddingCard() {
  document.querySelector('.intro-container').style.display = 'none';
  document.querySelector('.wedding-card').style.display = 'block';
}

// 페이지 로드 후 7초 후에 인트로 종료
setTimeout(showWeddingCard, 7000);