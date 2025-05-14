import React from "react";
import FeedbackList from "../components/ComponenteFeedbacks";
import HeroSection from "../components/componentes_home/HeroSelectHome";
import Footer from "../components/componentes_home/FooterHome";


export default function ComentariosView(){

    return(
        <div>
            <HeroSection></HeroSection>
            <FeedbackList></FeedbackList>
            <Footer></Footer>
        </div>
    )
}