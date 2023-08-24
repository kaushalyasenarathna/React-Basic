import React, { Component } from 'react';
import UserRegistrationForm from './forms/UserRegistrationForm';
import UserTable from './tables/UserTable';
import Layouts from './layouts/Layout';
import { v4 as uuidv4 } from 'uuid';
 
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [
        { no:1,id: uuidv4(), fName: 'kaushalya', lName: 'Senarathna', address: 'kirindiwela', mobile: '0712443257' },
        { no:2,id: uuidv4(), fName: 'Tamara', lName: 'Senarathna', address: 'Colombo', mobile: '03326568956' },
        { no:3,id: uuidv4(), fName: 'dewmi', lName: 'hettiarachchi', address: 'Ampara', mobile: '0154568975' },
        { no:4,id: uuidv4(), fName: 'duleema', lName: 'Senarathna', address: 'Kurunegala', mobile: '03326568956' },
        { no:5,id: uuidv4(), fName: 'kausn', lName: 'perera', address: 'Gampaha', mobile: '0775896569' },
      ],
      
      
    };
   
  }
  

  handleRemoveUser = (userId) => {
    const updatedUserData = this.state.User.filter((user) => user.id !== userId);
    this.setState({ User: updatedUserData });
  };
  handleSearch = (searchQuery) => {
    this.setState({ searchQuery });
  };

  addUser = (newUser) => {
    this.setState((prevState) => ({
      User: [...prevState.User, newUser]
    }));
  };

  render() {
    const { User, searchQuery } = this.state;
    const userCount = User.length;
    return (
      <Layouts>
        
        <UserRegistrationForm   addUser={this.addUser} userCount={userCount} generateUuid={uuidv4}/>

        <UserTable
        users={User} 
        handleRemoveUser={this.handleRemoveUser} 
        searchQuery={searchQuery} 
        handleSearch={this.handleSearch} 
        />

      </Layouts>
    );
  }
}

export default App;