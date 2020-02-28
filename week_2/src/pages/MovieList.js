import React from "react";
import superagent from "superagent";

export default class extends React.Component {
  state = {
    movieList: []
  };

  // MovieList.js 파일
  componentDidMount = async () => {

    // 데이터를 불러올 API 주소
    let url = "http://54.180.149.147:8080/api/team/2/movie";

        //데이터를 서버에서 불러와서 movieList라는 변수에 저장한다 
    let movieList = await superagent
    .get(url)
    .then(response => response.body)
    .catch(error => error);

        //불러온 데이터를 브라우저에 임시로 저장한다
    this.setState({
    movieList
    });

    console.log("...")

    //TODO : console을 찍어서 확인해봅시다 
    };


  render() {
    const { movieList } = this.state;
    return (
      <div>
        <h3>영화 리스트 리스트</h3>
        <div>영화 리스트가 보여질 화면입니다</div>

        {/* <MovieItem
          title="기생충"
          posterUrl=""
          advanceRate={30.2}
          advanceRateRank={4}
        /> */}

        {movieList
            ? movieList.map(movie => (
                <MovieItem
                title={movie.title}
                posterUrl={movie.posterUrl}
                advanceRate={movie.advanceRate}
                advanceRateRank={movie.advanceRateRank}
                id={movie._id}
                />
        ))
        : null}
      </div>
    );
  }
}

const MovieItem = ({ title, posterUrl, advanceRate, advanceRateRank, id }) => {
  let url = "/movie/detail/" + id;

  return (

    <div>
      {/* <div>포스터 url: {posterUrl}</div> */}
      <a href={url}><h3>{title}</h3></a>
      <a href={url}><img width="150" src={posterUrl}/></a>
      <div>예매율: {advanceRate}</div>
      <div>예매율 순위 : {advanceRateRank}</div>
    </div>
  );
};