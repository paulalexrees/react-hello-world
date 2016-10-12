import React from 'react';

class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likesCount:0,
      dislikesCount:0
    };
    this.onLike = this.onLike.bind(this);
    this.onDislike = this.onDislike.bind(this);
  }

  onLike() {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  onDislike() {
    let newDislikesCount = this.state.dislikesCount + 1;
    this.setState({dislikesCount: newDislikesCount});
  }

  render() {
    return(
      <div>
        Likes: <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
        Dislikes: <span>{this.state.dislikesCount}</span>
        <div><button onClick={this.onDislike}>Dislike Me</button></div>
      </div>
    );
  }
}

export default AwesomeComponent;
