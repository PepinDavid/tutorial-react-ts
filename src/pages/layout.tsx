import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return(
        <>
            <div className='container'>
                <h6><Outlet></Outlet></h6>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/app">App</Link>
                    </li>

                    <li>
                        <Link to="/game">Game</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Layout;