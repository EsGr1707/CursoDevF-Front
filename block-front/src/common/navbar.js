//create a class component
//es mas ESC6 que node js, que se utilizaba require
import React,{ Component } from 'react';
//const react = require('react');


class Navbar extends Component{
    //constructor
    constructor(props){//props = properties
        super(props);
        this.state= {//unica forma donde se va a estar modificando el componente
            title:props.title
        } 
    }
    componentDidMount(){
        //se llaman las apis,  en un metodo de react componentMount(){}
        //se usa para algo que lleve tiempo como cron, con cosas secundarias,
        //cosas que lleven tiempo, subi archivo storage
    }

    componentDidUpdate(prevProps, prevState){
        //se ejecuta cada vez que se reciben nuevos props o se actualiza el estado
        //Actualizar el estado segun en el cambio de componente 
        //se ejecuta cada vez que se modifiquen los props o los estados
    }

    render(){
        //pintar el html
        return(
            //poner jsx o html
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand" href="index.html"> 

                {this.state.title}
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="post.html">Sample Post</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
}

//es como module.exports = Navbar; esto es ES5 CommonJS
export default Navbar;//esto es ES6 con babel(interprete que transforma de ES6 a CommonJS)

