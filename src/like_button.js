'use strict';
/*
This class comes from the react starter documentation at here:
https://reactjs.org/docs/add-react-to-a-website.html
*/

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (<p>You Liked This!</p>);
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

ReactDOM.render(
    React.createElement(LikeButton), 
    document.querySelector('#like_button_container')
);