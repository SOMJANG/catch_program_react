import React from "react";

export default class extends React.Component {
  state = {
    movieDetail: []
  };

  componentDidMount = async () => {};

  render() {
    const { movieDetail } = this.state;
    return (
      <div>
        <h3>영화 상세 페이지</h3>
        <div>상세한 영화에 대한 정보가 노출될 페이지입니다</div>
      </div>
    );
  }
}