//function component
import React, { useState, useEffect } from "react";//son hooks de react
//importar imagen 
import image from '../img/home-bg.jpg';
//hay mas hooks pero estos son los mas utilizados
function Head (props){
    //useState regresa un arreglo
    //se puede pasar un arreglo compmeto 
    //esto es array destructuring [title, setTitle]
    //regresa 2 cosas, el valor del estado, el segundo es una funcion modificadora
    //que es la que permite cambiar el estado, de la primer variable (title)
    //puede llamarse como quiera
    const [title,setTitle]= useState(props.title);//Parametro por default que tendra el estado
    const [subhead,setSubhead] = useState(props.subhead);
    //useEfect recibe dos parametros, primer parametro una funcion
    //segundo parametro un arreglo
    useEffect(()=>{//reemplaza componentDiMount y componentDiUpdate
        console.log("se pinto despues de la UI");
    },[]) //si tiene array vacio, se ejecuta una vez, se manda a llamar despues de pintarse
    //se puede mandar en el arreglo las variables que quiero que se escuche, si cambia algo
    //se va a volver a ejecutar
    return (
        <header className="masthead" style={{ backgroundImage: `url('${image}')` }}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h1>{title}</h1>
                    <span className="subheading">{subhead}</span>
                </div>
                </div>
            </div>
            </div>
        </header>
    );
}

export default Head;