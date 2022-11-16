import React from 'react';

import {Link} from 'react-router-dom';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <h2>Homepage</h2>
                <Link to="/editor">go to card editor</Link>
                <br></br>
                <Link to="/viewer">go to card viewer</Link>
            </div>
        );
    }
}

export default Homepage;