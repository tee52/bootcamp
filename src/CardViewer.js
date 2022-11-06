import React from 'react';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {front: '', back: ''};
    }
    
    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <hr/>
                <button onClick={this.props.switchMode}>go to card editor</button>
            </div>
        );
    }
}

export default CardViewer;