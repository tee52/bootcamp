import React from 'react';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {front: true, index: 0};
    }

    prevCard = () => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1});
        }
        console.log(this.state.index);
    }

    nextCard = () => {
        if (this.state.index < this.props.cards.length) {
            this.setState({index: this.state.index + 1});
        }
        console.log(this.state.index);
    }

    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                
                <div>

                </div>

                <button onClick={this.prevCard}>previous card</button>
                <button onClick={this.nextCard}>next card</button>
                <hr/>
                <button onClick={this.props.switchMode}>go to card editor</button>
            </div>
        );
    }
}

export default CardViewer;