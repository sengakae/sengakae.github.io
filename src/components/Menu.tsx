import * as React from 'react';
import './styles/menu.scss';

const Menu = () => (
    <div className="menu-bar">
        <button className="menu-bar--option">
            {'Home'}
        </button>
        <button className="menu-bar--option">
            {'Projects'}
        </button>
        <button className="menu-bar--option">
            {'Work'}
        </button>
        <button className="menu-bar--option">
            {'Contact Me'}
        </button>
    </div>
);

export default Menu;