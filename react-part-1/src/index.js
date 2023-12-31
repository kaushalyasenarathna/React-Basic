import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

 

const Header=(props)=>  {
  const {title ,subTitle} = props
  return(
    <div>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>

    </div>
  )
}
const Title=({title,subTitle})=>  {
  return(
    <div>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>

    </div>
  )
}

const App=()=>{
  return(
    <div>
      <Header title="Hello World" subTitle="Hey React App"/>
      <Title title="Hello World" subTitle="Hey React App"/>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
