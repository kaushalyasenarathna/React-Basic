import React, { useState } from 'react';
import Button from './../form-components/Buttons';
import FormInputElement from './../form-components/FormInputElement';

const TableHeader = () => {
  return (
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile</th>
      <th scope="col">Token</th>
      <th scope="col">Action</th>
    </tr>
  );
};

const TableData = ({ id, fName, lName, address, mobile, handleRemoveUser,no }) => {
  return (
    <tr>
      <td>{no}</td>
      <td>{fName}</td>
      <td>{lName}</td>
      <td>{address}</td>
      <td>{mobile}</td>
      <td>{id}</td>
      <td>
        <Button
          className="btn btn-outline-danger"
          name="Remove User"
          onClick={() => handleRemoveUser(id)}
          type="button"
        />
      </td>
    </tr>
  );
};

const Search = ({ searchQuery, handleSearch }) => {
  return (
    <div className="mb-3">
      <FormInputElement
        type="text"
        className="form-control"
        placeholder="Search by Name, Address, or Mobile"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

const UserTable = ({ users, handleRemoveUser }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(
    (user) =>
      user.fName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.mobile.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <h1 className="text-center text-success">User Details</h1>
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
      {filteredUsers.length > 0 ? (
        <table className="table">
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <TableData key={user.id} {...user} handleRemoveUser={handleRemoveUser} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>No Data Available</div>
      )}
    </div>
  );
};

export default UserTable;
