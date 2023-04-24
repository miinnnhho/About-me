let slideIndex = 0; //const 쓰면 안 됨
showSlides();

function showSlides() {
  //slideIndex를 증가시키며 이미지를 보여주는 함수
  let i;
  let slides = document.getElementsByClassName('mySlides');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; //시작되면 모든 슬라이스를 숨김
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } 
  //slides 길이 초과하면 1로 재설정
  
  slides[slideIndex - 1].style.display = 'block'; //현재 slideIndex와 일치하는 걸 보여줌
  setTimeout(showSlides, 1600); // 1.6초마다 이미지 전환
}
