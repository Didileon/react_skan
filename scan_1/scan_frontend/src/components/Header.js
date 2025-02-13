import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <div>
            <header className='header'>
                <nav className='nav'>

                    <ul>
                    <li className="logo1" align='left' >
                        <img src="https://sterh-school.ru/docroot/filesup/skan/PG_pHQz8deE.jpg" alt="logo"  width="141px"  />
                    </li>
                        <li className='item'><Link to='Main'>Главная</Link></li>
                        <li className='item'><Link to='/components/Rate'>Тарифы</Link></li>
                        <li className='item'><Link to='/components/FAQ'>FAQ</Link></li>
                        <li className='item3'>Зарегистрироваться &nbsp;|</li>
                        <li className='item1'><Link to='/components/Login'>Войти</Link></li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}


export default Header;