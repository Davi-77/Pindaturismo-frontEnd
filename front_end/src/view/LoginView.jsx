import React from "react";
import '../styles/LoginStyles.css'
import FormularioLoginView from "../components/FormularioLogin";


export default function LoginView(){
    return(
        <div className="conteiner-cadastro">
            <FormularioLoginView/>
           
        </div>
    )
}