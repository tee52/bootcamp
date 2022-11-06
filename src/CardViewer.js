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
                <div>

                </div>
                <button>previous card</button>
                <button>next card</button>
                <hr/>
                <button onClick={this.props.switchMode}>go to card editor</button>
            </div>
        );
    }
}

export default CardViewer;