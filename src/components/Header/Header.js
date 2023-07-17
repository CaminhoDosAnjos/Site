import React from 'react';

import './Header.css';

const Header = () => (

    <nav className='menu'>
        <ul className='nav justify-content-center header'>
            <li className='nav-item'>
                <a class="nav-link" href="https://www.rixxer.com.br">Home</a>
            </li>
            <li className='nav-item'>
                <a class="nav-link" href="https://www.rixxer.com.br">Fale Conosco</a>
            </li>
            <li className='nav-item'>
                <a class="nav-link" href="https://www.rixxer.com.br">Resgatar Voucher</a>
            </li>
            <li className='nav-item'>
                <a class="nav-link" href="https://www.rixxer.com.br">Entrar</a>
            </li>
            <li className='nav-item'>
                <a class="nav-link" href="https://www.rixxer.com.br">Criar Conta</a>
            </li>
        </ul>
    </nav>

);

export default Header;
