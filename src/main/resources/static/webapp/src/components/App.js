import React from 'react';
import {hot} from 'react-hot-loader';
import Table from './Table';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json().then(data => {
                this.setState({users: data})
            }))
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        let list = [];
        for (let user of this.state.users) {
            list.push(<li key={user.id}>{user.firstName}</li>)
        }
        return (
            <div>
                <h4>Mi Stories</h4>
                <Table number={1} openSeats={[1, 2]}/>
                <Table number={2} openSeats={[1, 2, 3]}/>
                <Table number={3} openSeats={[1]}/>
                <Table number={4} openSeats={[1, 2, 3, 4]}/>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default hot(module)(App);