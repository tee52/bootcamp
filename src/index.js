import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { createStore, combineReducers } from 'redux';
import {
    ReactReduxFirebaseProvider,
    firebaseReducer
} from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension';

const firebaseConfig = {
    apiKey: "AIzaSyCr4uFKAOYL2hRcNn2ykAgnLHHgEG4eILY",
    authDomain: "bootcamp-3062a.firebaseapp.com",
    databaseURL: "https://bootcamp-3062a-default-rtdb.firebaseio.com",
    projectId: "bootcamp-3062a",
    storageBucket: "bootcamp-3062a.appspot.com",
    messagingSenderId: "562908351044",
    appId: "1:562908351044:web:68143e84c8b69aaf3c0a11"
};

firebase.initializeApp(firebaseConfig);

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
});
  
// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools()); 

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users'
};  

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
};

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <BrowserRouter>
                <App />
            </BrowserRouter>, 
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'),
);