import React from 'react';
import { render } from 'react-dom';
import CardEditor from './CardEditor';
import CardViewer from './CardViewer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {front: 'front1', back: 'back1'},
                {front: 'front2', back: 'back2'},
            ],
            editor: true,
        }
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
    
    switchMode = () => this.setState({editor: !this.state.editor});

    render() {
        if (this.state.editor) {
            return (
                <CardEditor 
                    cards={this.state.cards} 
                    addCard={this.addCard} 
                    deleteCard={this.deleteCard}
                    switchMode={this.switchMode}
                />
            );
        } else {
            return (
                <CardViewer 
                    cards={this.state.cards}
                    switchMode={this.switchMode}
                />
            );
        }    
    }
    
}

export default App;