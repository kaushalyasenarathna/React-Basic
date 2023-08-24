import React from 'react';
import FormInputElement from './../form-components/FormInputElement';
import FormTextareaElement from './../form-components/FormTextareaElement';
import Button from './../form-components/Buttons';

class UserRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      mobile: ''
    };
    this.handleOnchangeValue = this.handleOnchangeValue.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleOnchangeValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const { firstName, lastName, address, mobile } = this.state;
    const newId = this.props.generateUuid();

    if (firstName && lastName && address && mobile) {
      const newUser = {
        id: newId,
        no: this.props.userCount + 1,
        fName: firstName,
        lName: lastName,
        address: address,
        mobile: mobile
      };

      this.props.addUser(newUser);

      this.setState({
        firstName: '',
        lastName: '',
        address: '',
        mobile: ''
      });
    } else {
      alert('Please fill in all the required fields.');
    }
  }

  render() {
    const { firstName, lastName, address, mobile } = this.state;

    return (
      <div>
        <div className="container">
          <h1 className="text-center text-success">User Registration Form</h1>

          <form className="needs-validation" noValidate onSubmit={this.handleFormSubmit}>
            <FormInputElement
              label="First Name"
              className="form-control"
              name="firstName"
              type="text"
              placeholder="Enter Your First Name"
              onChange={this.handleOnchangeValue}
              value={firstName}
              required
            />
            <FormInputElement
              label="Last Name"
              className="form-control"
              name="lastName"
              placeholder="Enter Your Last Name"
              type="text"
              onChange={this.handleOnchangeValue}
              value={lastName}
              required
            />

            <FormTextareaElement
              className="form-control"
              label="Address"
              name="address"
              type="textarea"
              placeholder="Enter Your Address"
              onChange={this.handleOnchangeValue}
              value={address}
              required
            />

            <FormInputElement
              className="form-control"
              label="Mobile"
              name="mobile"
              type="tel"
              onChange={this.handleOnchangeValue}
              value={mobile}
              required
              placeholder="Enter your Mobile Number"
            />

            <div className="d-flex justify-content-end">
            <div className='float-right'>
            <Button
              className="btn btn-primary btn-md text-white"
              type="submit"
              name="Add new User"
              value="Add New User"
              onClick={this.handleFormSubmit} 
            />

                    </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserRegistrationForm;
