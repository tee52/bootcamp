import React from 'react';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';
import Homepage from './Homepage';
import Test from './Test';

import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {front: 'front1', back: 'back1'},
                {front: 'front2', back: 'back2'},
            ],
        };
    }

    addCard = card => {
        card.front = card.front.trim();
        card.back = card.back.trim();

        if (card.front !== '' && card.back !== '')
        {
            const cards = this.state.cards.slice().concat(card);
            this.setState({cards});
        }
    };

    deleteCard = index => {
        const cards = this.state.cards.slice();
        cards.splice(index, 1);
        this.setState({cards});
    }
    
    render() {
        const cardEditor = <CardEditor 
                                cards={this.state.cards} 
                                addCard={this.addCard} 
                                deleteCard={this.deleteCard}
                            />
        const cardViewer = <CardViewer cards={this.state.cards} />
        const homepage = <Homepage />
        const test = <Test />

        return (
            <Routes>
                <Route exact path="/" element={homepage} />
                <Route exact path="/editor" element={cardEditor} />
                <Route exact path="/viewer" element={cardViewer} />
                <Route exact path="/test/:id" element={test} />
            </Routes>
        );   
    }
}

export default App;