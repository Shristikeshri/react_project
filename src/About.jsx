import React from "react";
import { NavLink } from "react-router-dom";
import Common from './Common'
import web from '../src/images/hero.png';

const About = () => {
    return (
        <>
            <Common name='Welcome to About Page'
                imgsrc={web}
                visit='/contact'
                btname='About Us ' />
        </>
    )
}

export default About;