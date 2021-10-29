import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const config = {
      method: 'GET'
    };
    fetch('https://jsonplaceholder.typicode.com/users', config)
      .then(res => {
        return res.json();
      })
      .then(usersArr => {
        const usersA = usersArr;
        return this.setState({ users: usersA, isLoading: false });
      })
      .catch(err => new Error('error', err));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
