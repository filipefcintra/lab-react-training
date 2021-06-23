import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0,
    }

    buttonIncrement = () => {
        this.setState({count: this.state.count + 1});
    };

    render () {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.buttonIncrement}>{this.state.count} Likes </button>
            </div>
        )
    }
}
export default LikeButton;