import React from 'react';
import './Topbar.css';
import { NavLink } from 'react-router-dom';
const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ margin: '0px' }}>PARCEL EASE</h2>
            </div>
            <div className='topContainer'>
                <NavLink
                    to='/'
                    style={({ isActive }) => ({
                        color: isActive ? '#f48c0d' : '#fff',
                        padding: '10px',
                        textDecoration: 'none'
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/about'
                    style={({ isActive }) => ({
                        color: isActive ? '#f48c0d' : '#fff',
                        padding: '10px',
                        textDecoration: 'none'
                    })}
                >
                    About
                </NavLink>
            </div>
        </div>
    )
}

export default Topbar;