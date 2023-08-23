import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 
// const App = (
//   <React.Fragment>
//     <h1>Hey</h1>
//     <p>Hello there</p>
//   </React.Fragment>
// );

const user={
  name:'',
  address:'kirindiwela',
  mobile:'0710000000',
  email:'',
  age:20

}

const users=['kaushalya','Tamara','Kalani','Roshima'];

const student=[{id:1,name:'kaushalya',age:20},{id:2,name:'tamara',age:25},{id:3,name:'kalani',age:20}]


const getEmailValidation=(email)=>{
  if(email){
  return email;
  }else{

    return (<div>Email Not Available</div>);

  }
}

const App = (
  <div className='container'>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Mobile</th>
        <th>Age</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{user.name ? user.name :'unknown' }</td>
        <td>{user.address}</td>
        <td>{getEmailValidation(user.email)}</td>
        <td>{user.mobile}</td>
        <td>{user.age >= 20 && <p>{user.age} </p> }</td>

      </tr>
    </tbody>
  </table>
  <ul>
    {users.map((name,index)=> <li key={index}>{name}</li>)}
  </ul>
  <ul>
    {student.map((student)=> <li key={student.id}>{student.name} ,{student.age},{student.id}</li>)}
  </ul>
</div>
  
);

const root =  document.getElementById('root');
ReactDOM.render(App,root);