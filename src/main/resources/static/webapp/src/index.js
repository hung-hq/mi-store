import ReactDOM from 'react-dom';
import React from 'react';
import './styles/general.css';
import App from "./components/App";

ReactDOM.render(
    <App url="/users"/>,
    document.getElementById('root')
);