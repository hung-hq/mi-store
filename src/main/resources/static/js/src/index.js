import ReactDOM from 'react-dom';
import React from 'react';
import Table from './components/Table';
import './styles/general.css';
import App from "./components/App";

ReactDOM.render(
    <div>
        <h4>React app hhhh</h4>
        <Table number={1} openSeats={[1,2]}/>
        <Table number={2} openSeats={[1,2,3]}/>
        <Table number={3} openSeats={[1]}/>
        <Table number={4} openSeats={[1,2,3,4]}/>
        <App url="/users"/>
    </div>,
    document.getElementById('root')
);