import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Container from './components/container';
import LoginForm from './components/loginForm';

// si no hay una sesion guardad en localstorage mostramos el loginform
// si ya hay una sesion entonces comprobamos que sea real y mostramos el container

let user, renderWindow = <LoginForm />;

  // enviar cookie con axios ver si se deserializa
axios.get('http://localhost:3000/login').then(res => {
  if(res.data == "LOGIN-SUCCESS"){
    console.log("Login success");
    renderWindow = <Container user={user} />;
  }else{
    console.log("ERROR!");
    console.log(JSON.stringify(res));
    renderWindow = <LoginForm />;
  }
}).catch(err => {
  console.log("hubo un error " + err);
});

ReactDom.render(renderWindow, document.getElementById('main'));