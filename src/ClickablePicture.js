import { thisBooleanValue } from 'es-abstract';
import React from 'react';

class ClickablePicture extends React.Component {
    state={
        isClicked : false,
        imgSrc: this.props.img

    }

    handleImgClick = ()=>{
        this.setState({isClicked: !this.state.isClicked})
        this.state.isClicked ? this.setState({imgSrc:this.props.imgClicked}) : this.setState({imgSrc:this.props.img})
    }

    render() {
        return(
            <div className='box__img'>
                <img onClick={this.handleImgClick} src={this.state.imgSrc} alt='change image'></img>
            </div>
        )
    }
}


//   state = {
//     img: '/img/persons/maxence.png',
//     newImg: '/img/persons/maxence-glasses.png',
//   };

//   changePicture1 = (props) => {
//     this.setState({ img: this.state.newImg });
//   };

//   render() {
//     return (
//       <div>
//         <img
//           src={this.state.img}
//           className="img-responsive"
//           onClick={this.changePicture1}
//         />
//       </div>
//     );
//   }
// }

export default ClickablePicture;