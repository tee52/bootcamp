import React from 'react';
import './CardViewer.css';

import { Link, withRouter } from 'react-router-dom';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {front: true, index: 0};
    }

    prevCard = () => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1, front: true});
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
        if(!isLoaded(this.props.cards)) {
            return <div>loading...</div>;
        }

        if(isEmpty(this.props.cards)) {
            return <div>page not found</div>
        }

        return (
            <div>
                <h2>{this.props.name}</h2>
                <div className="flashcard" onClick={this.flipCard}>
                    {this.state.front ? this.props.cards[this.state.index].front : this.props.cards[this.state.index].back}
                </div>
                <div id="container">
                    <button onClick={this.prevCard}>previous card</button>
                    <button onClick={this.nextCard}>next card</button>    
                </div>
                <p>Card {this.state.index + 1}/{this.props.cards.length}</p>
                <hr/>
                <Link to="/">home</Link>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state);
    const deck = state.firebase.data[props.match.params.deckID];
    const name = deck && deck.name;
    const cards = deck && deck.cards;
    return { cards: cards, name: name };
}

export default compose(
    withRouter,
    firebaseConnect(props => {
        console.log('props', props);
        const deckID = props.match.params.deckID;
        return [{ path: `/flashcards/${deckID}`, storeAs: deckID }]
    }),
    connect(mapStateToProps),
)(CardViewer);