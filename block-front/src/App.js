import React from 'react';
//improtar un componente
import Navbar from './common/navbar';
import Head from './common/head';
function App() {
  return (
   <>
    {/*poner comentario en jx es asi*/ }
    {/*esto es fragmetn de ReactJS*/} 
    {/*Se pone los properties aqui para que los tome navbar.js*/}
    <Navbar title="Holaquehace"/>
    <Head title="Bienvenido a mi blog" subhead="Esto es una prueba de post"/>
   </>
  );
}

export default App;
