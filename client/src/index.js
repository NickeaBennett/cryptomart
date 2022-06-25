import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
// "Provider is a component given to us to use from the react-redux node package. 
// We use Provider in order to pass the store as an attribute. 
// By passing the store as an attribute in the Provider component, 
// we are avoiding having to store the store as props.""
import { Provider } from 'react-redux';

import App from './App';
// For redux storing state. 
import store from "./app/store";
// style for base layout
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <Router>
        {/* "A store is an immutable object tree in Redux. 
        A store is a state container which holds the 
        application's state. Redux can have only a single 
        store in an application. Whenever a store is 
        created in Redux, you need to specify the reducer." */}
        <Provider store={store}>
            {/*setting the store variable to equal to store */}
            <App />
        </Provider>

    </Router>
);