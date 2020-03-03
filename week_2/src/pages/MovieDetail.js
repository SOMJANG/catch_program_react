import React from "react"; 
import superagent from "superagent"; 
export default class extends React.Component { 
  state = { movieDetail: [] }; 
  
  componentDidMount = async () => { 
    let url = "http://54.180.149.147:8080/api/team/2/movie/"+this.props.match.params.id; 
    
    //TODO: 1. 서버에서 데이터 불러오기 
    //데이터를 서버에서 불러와서 movieList라는 변수에 저장한다 
    let movieDetail = await superagent 
    .get(url) 
    .then(response => response.body) 
    .catch(error => error); 

    if (movieDetail.screeningStatus === "open"){
      movieDetail.screeningStatus = "상영중";
    }
    else if (movieDetail.screeningStatus === "finished"){
        movieDetail.screeningStatus = "상영 종료";
    }
    if (movieDetail.screeningStatus === "ready"){
        movieDetail.screeningStatus = "상영 예정";
    }
    
    //TODO: 2. 브라우저에 임시로 저장하기 (state) 
    // this.setState({ // ... // }) 
    //불러온 데이터를 브라우저에 임시로 저장한다 
    this.setState({ movieDetail }); 
    console.log(movieDetail) 

    
  }; 
  
  render() { 
    const { movieDetail } = this.state; 
    
    
    return ( 
    <div> 
      {/* TODO: 3. 영화 1개에 대한 데이터 출력하는 코드 짜기 */ 
      <MovieItem 
      title={movieDetail.title} 
      posterUrl={movieDetail.posterUrl} 
      advanceRate={movieDetail.advanceRate} 
      advanceRateRank={movieDetail.advanceRateRank} 
      plot = {movieDetail.plot}
      released = {movieDetail.released}
      genres = {movieDetail.genres}
      casts = {movieDetail.cast}
      director = {movieDetail.director}
      runtime = {movieDetail.runtime}
      visitorRating = {movieDetail.visitorRating}
      expertRating = {movieDetail.expertRating}
      screenStatus = {movieDetail.screeningStatus}
      

      />} 
      </div> 
      
      ); 
    } 
  } 
  const MovieItem = ({ title, advanceRate, advanceRateRank, posterUrl, plot , released, genres, casts, director, runtime, visitorRating,expertRating, screenStatus}) => { 
    // console.log(screenStatus);
    console.log(casts)
    return (
      <div>
      <div className="detail_page">
        <div className="detail_info">
          <h1>{title}</h1>
          {/* <img width="300" src={posterUrl}/> */}
          {/* <div>줄거리 : {plot}</div>  */}
          <h3>개봉일: {released}</h3>
          <h3>감독 : {director}</h3>
          {/* <h3>배우 : {casts}</h3> */}
          <h3>배우 : {casts? casts.map(cast => <span>{cast}    </span>):null}</h3>
          <h3>장르 : {genres}</h3>
          <h3>상영 여부 : {screenStatus}</h3>
          <h3>상영시간 : {runtime}</h3>
          <h3>관람객 평점 : {visitorRating}</h3>
          <h3>전문가 평점 : {expertRating}</h3>
          
          <h3>예매율: {advanceRate}</h3> 
          <h3>예매율 순위 : {advanceRateRank}</h3>
        </div> 

        <div className="posterImg">
              <img className="postImg" src={posterUrl}/>
        </div>
        </div>

        <div className="detail_page">

          <div className="plot_div">
              <h2>줄거리</h2>
              <h3>{plot}</h3> 
          </div>
        </div>
      </div>
    ); 
  };