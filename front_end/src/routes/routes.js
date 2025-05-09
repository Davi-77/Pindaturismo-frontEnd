import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from '../view/HomeView'
import LoginView from "../view/LoginView";
import FormularioLocal from "../view/FormularioLocal";
import DetalhesLocal from "../view/DetalhesLocal";
import CadastroView from "../view/CadastroView";
import Sobre from "../view/Sobre";


export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginView/>}/>
            <Route path='/cadastro' element={<CadastroView/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/home' element={<HomeView/>}/>
            <Route path="/local/:id" element={<DetalhesLocal/>}/>
            <Route path="/home/admin" element={<FormularioLocal/>}/>
            

        </Routes>
        </BrowserRouter>
    )

}