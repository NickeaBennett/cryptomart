import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";

import App from './App';
// style for base layout
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <Router>
        <App />
    </Router>
);