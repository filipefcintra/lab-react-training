import { thisBooleanValue } from 'es-abstract';
import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: '/img/persons/maxence.png',
    newImg: '/img/persons/maxence-glasses.png',
  };

  changePicture1 = (props) => {
    this.setState({ img: this.state.newImg });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.img}
          className="img-responsive"
          onClick={this.changePicture1}
        />
      </div>
    );
  }
}

export default ClickablePicture;