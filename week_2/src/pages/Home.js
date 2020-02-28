import React from "react";

const Home = () => {
  return (
    <div>
     <h3> 처음 접속했을 때 뜨는 페이지</h3>
      <div>
        <a href="/movie/list"> 영화 리스트</a>
      </div>
      <div>
        <a href="/movie/detail/1">영화 상세 페이지 </a>
      </div>
    </div>
  );
};

export default Home;