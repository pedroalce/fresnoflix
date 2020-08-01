import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Alceflix" />
            </a>

           <ButtonLink className="ButtonLink" href="/">
               Novo Vídeo
           </ButtonLink>
        </nav>
    )
};

export default Menu;