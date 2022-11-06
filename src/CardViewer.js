import React from 'react';
import './CardViewer.css';

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
        if (this.state.index < this.props.cards.length - 1) {
            this.setState({index: this.state.index + 1, front: true});
        }
        console.log(this.state.index);
    }
    
    flipCard = () => {
        this.setState({front: !this.state.front});
    }
    
    render() {
        return (
            <div>
                <h2>Card Viewer</h2>
                <div className="flashcard" onClick={this.flipCard}>
                    {this.state.front ? this.props.cards[this.state.index].front : this.props.cards[this.state.index].back}
                </div>
                <div id="container">
                    <button onClick={this.prevCard}>previous card</button>
                    <button onClick={this.nextCard}>next card</button>    
                </div>
                <p>Card {this.state.index + 1}/{this.props.cards.length}</p>
                <hr/>
                <button onClick={this.props.switchMode}>go to card editor</button>
            </div>
        );
    }
}

export default CardViewer;