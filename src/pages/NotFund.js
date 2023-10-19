import React from 'react'
import { NavLink } from 'react-router-dom';

function NotFund() {
    return (
        <div className='notFound'>
            <div className='notFoundContent'>
                <h3>Désolé cette page n'existe pas</h3>
                <NavLink exact to ='/' >
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    )
}

export default NotFund;
