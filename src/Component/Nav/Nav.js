import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-4xl font-bold text-secondary" href='/'>Daisy</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><a href='/'>Home</a></li>
                    <li className='font-semibold'><a href='/'>Shop</a></li>
                    <li className='font-semibold'><a href='/'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;