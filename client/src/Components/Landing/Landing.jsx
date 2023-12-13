import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Routing from "./Routing";

export default function Landing(){
    return(
        <>
            <div>
            <About />
            <Carousel />
            <Routing />
            </div>
        </>
    )
}