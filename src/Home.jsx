import React from "react";
import { NavLink } from "react-router-dom";
import Common from './Common'
import web from '../src/images/img.png';

const Home = () => {
    return (
        <>
            <Common name='Grow Your Bussiness with' 
            imgsrc={web}
             visit='/service' 
             btname = 'Get Started'/>
        </>
    )
}

export default Home;