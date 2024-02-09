/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    const dateCourante: Date = new Date();
    const moisCourant: Number = dateCourante.getMonth()+1;
    const anneeCourante = dateCourante.getFullYear()+"-"+moisCourant;
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idContnet'>
                    <img className='monPorofil' src = "./media/Youssouph.jpeg"></img><br />
                    <label className='nomProfil'>Youssou GNING</label>
                </div>
            </div>
            <div className='navigation'>
                <ul>
                    <li>
                        <NavLink exact="true" to="/" activeclassname='active'>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact="true" to="/competence" activeclassname='active'>
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink exact="true" to="/portfolio" activeclassname='active'>
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink exact="true" to="/contact" activeclassname='active'>
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='socialNetwork'>
                <ul>
                    <li>
                        <a href ='https://www.linkedin.com/in/gning-youssou-194311124/' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                    <li>
                        <a href ='https://twitter.com/YoussouGning' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a href ='https://www.facebook.com/youssou.hpa' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-facebook'></i>
                        </a>
                    </li>
                    <li>
                        <a href ='https://github.com/youssou91' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                    
                </ul>
                <div className='signature'>
                    <p>©fromYussuf - {anneeCourante}</p>
                </div>
            </div>

        </div>
       
    )
}

export default Navigation;