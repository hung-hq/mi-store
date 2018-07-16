import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch(this.props.url)
            .then(response => response.json().then(data => {
                this.setState({users: data})
            }))
            .catch(error => {
                console.log(error);
        });
    }

    render(){
        let list = [];
        for(let user of this.state.users){
            list.push(<li key={user.id}>{user.email}</li>)
        }
        return(
            <ul>
                {list}
            </ul>
        );
    }
}