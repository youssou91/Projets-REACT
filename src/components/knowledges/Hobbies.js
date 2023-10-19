import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Loisirs</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Cours à pieds</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-futbol'></i>
                    <span>Football</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-seedling'></i>
                    <span>Agriculture</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-film'></i>
                    <span>Films</span>
                </li>
                <li className='hobby'>
                    <i className='fab fa-bitcoin'></i>
                    <span>Crypto-monnaie</span>
                </li>
                
            </ul>
        </div>
    );
};

export default Hobbies;