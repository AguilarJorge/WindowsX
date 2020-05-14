import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import Clock from '../Clock/Clock';

function Login() {
    const [randomImg, setRandomImg] = useState();
    useEffect(() => {
        setRandomImg(require(`../../img/wallpapers/wpp${random(1, 5)}.png`));
    }, []);
    
    function random(min, max){
        return Math.floor(Math.random() * max) + min;
    }

    const variants = {
        visible: {
            opacity: 1,
            scale: 1
        },
        oculto: {
            opacity: 0,
            scale: 1.2
        },
        transition: {
            ease: 'linear',
        },
      }

    return (
        <motion.section className="loginScreen" style={{backgroundImage: `url(${randomImg})`}}
            variants={variants}    
            initial="oculto"
            animate="visible"
            transition="transition">
            <div className="container">
                <Clock 
                    formatoHora={24}
                    includeTextH={false}
                    includesHora="h:m"
                    separadorFecha=" de "
                    formatoFecha="DD/dd/MM"
                    mesCompleto={true} />
            </div>
        </motion.section>
    );
}

export default Login;
