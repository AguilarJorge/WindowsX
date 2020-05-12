import React, { useEffect } from 'react';
import { useState } from 'react';
import './Login.css';

function Login() {
    function random(min, max){
        return Math.floor(Math.random() * max) + min;
    }
    const [randomImg, setRandomImg] = useState();
    useEffect(() => {
        setRandomImg(require(`../../img/wallpapers/wpp${random(1, 5)}.png`));
    }, []);

    return (
        <section className="loginScreen" style={{backgroundImage: `url(${randomImg})`}}>
            <div className="container">
                <p>Login Screen</p>
            </div>
        </section>
    );
}

export default Login;
