// 1. 상영작 데이터 리스트 (여기에 계속 추가)
const movies = [
  {
    title: "첫 번째 상영작",
    desc: "첫 번째 영화에 대한 소개 글입니다.",
    image: "poster1.jpg" 
  },
  {
    title: "두 번째 상영작",
    desc: "두 번째 영화에 대한 소개 글입니다.",
    image: "poster2.jpg"
  }
];

// 2. 메인 페이지의 빈 상자 찾기
const container = document.getElementById('movie-list-container');

// 3. 데이터 개수만큼 퍼박 만들어서 넣기
movies.forEach(movie => {
  const puzzleHTML = `
    <div class="puzzle-box">
      <div class="box-left" style="background-image: url('${movie.image}');"></div>
      
      <div class="box-right">
        <h2>${movie.title}</h2>
        <p>${movie.desc}</p>
      </div>
    </div>
  `;

  // 컨테이너에 퍼박 추가
  container.innerHTML += puzzleHTML;
});