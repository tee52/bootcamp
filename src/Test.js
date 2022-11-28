import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const withRouter = (Component) => {
    const Wrapper = () => {
        const params = useParams();
        const location = useLocation();
    
        return (
            <Component props={params} location={location}/>
        );
    };

    return (
        Wrapper,
        <div>Test</div>
    );
};

export default withRouter;