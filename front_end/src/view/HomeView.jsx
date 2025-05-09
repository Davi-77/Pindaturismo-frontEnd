import React from "react";
import HeroSection from "../components/componentes_home/HeroSelectHome";
import Footer from "../components/componentes_home/FooterHome";
import PontosTuristicos from '../components/componentes_home/PontosTuristicos'
import SelecaoEstados from "../components/componentes_home/selecaoEstados";

export default function HomeView(){
    return(
        <>
      
        <HeroSection/>
        <PontosTuristicos></PontosTuristicos>
        <SelecaoEstados></SelecaoEstados>
        <Footer></Footer>

        
        </>
    )

}