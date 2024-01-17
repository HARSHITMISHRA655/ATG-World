import React from 'react';
import './navbar.css';

function Navbar(props) {
    return (
        <div className="contain">
            <img src="/logo.svg" alt="Logo" />
            <div className="search-box">
                <img src="/search.svg" className="search-icon" alt="Search" />
                <input type="text" className="search-input" placeholder="Search for your favorite groups in ATG" />
            </div>
            <div className="account">
                <div className="account-text">
                    <span className="account-text1">Create account.</span>
                    <span className="account-text2">It’s free!</span>
                </div>
                <div className="account-icon-wrapper">
                    <img src="/Vector.svg" className="account-icon" alt="Account" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;