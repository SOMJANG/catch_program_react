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
      <h3>영화 상세 페이지</h3> 
      <div>상세한 영화에 대한 정보가 노출될 페이지입니다</div> 
      
      {/* TODO: 3. 영화 1개에 대한 데이터 출력하는 코드 짜기 */ 
      <MovieItem 
      title={movieDetail.title} 
      posterUrl={movieDetail.posterUrl} 
      advanceRate={movieDetail.advanceRate} 
      advanceRateRank={movieDetail.advanceRateRank} 
      plot = {movieDetail.plot}
      />} 
      </div> 
      ); 
    } 
  } 
  const MovieItem = ({ title, posterUrl, advanceRate, advanceRateRank, plot }) => { 
    return (
      <div>
      <h3>{title}</h3>
      <img width="300" src={posterUrl}/>
      <div>줄거리 : {plot}</div> 
      <div>예매율: {advanceRate}</div> 
      </div> 
    ); 
  };