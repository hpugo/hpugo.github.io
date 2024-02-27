import React from 'react';
import classes from './css/header.module.css'
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
   const {user, logout } = useAuth();
   
    const {cart} = useCart();

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    Fire FIts
                </Link>
                <nav>
                    <ul>
                        {
                            user?(
                            <li className={classes.menu_container}>
                                <Link to="/">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to="/">Profile</Link>
                                <a onClick={logout}><Link to="/login">Logout</Link></a>
                                </div>
                            </li>
                            ) : (
                            <Link to="/login">Login</Link>
                        )}

                        <li>
                            <Link to="/cart">
                                Cart 
                                {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}