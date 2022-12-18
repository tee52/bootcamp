import React from 'react';

import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Homepage = props => {
    if(!isLoaded(props.homepage)) {
        return (<div>loading...</div>);
    }

        const decks = Object.keys(props.homepage).map(deck => {
            console.log(props.homepage);
            return (
                <div key={deck}>
                    <Link to={location => `/viewer/${deck}`}>{props.homepage[deck].name}</Link>
                </div>
            );
        })
        console.log(decks);

        return (
            <div>
                <h2>Homepage</h2>
                <Link to="/editor">create a new card deck</Link>
                <br />
                <br />
                <h3>Your Decks</h3>
                {decks}
            </div>
        );
}

const mapStateToProps = (state) => {
    console.log(state.firebase.data);
    return { homepage: state.firebase.data.homepage };
}

export default compose(
    firebaseConnect([{ path: `/homepage` }]),
    connect(mapStateToProps),)(Homepage);;