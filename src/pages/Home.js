import React from 'react'
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className = "home">
            <Navigation></Navigation>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Youssou GNING</h1>
                    <h2>Développeur Front-end</h2>
                    <div className='pdf'>
                        <a href="./media/CV_Youssou_GNING.pdf" target='_blank'>
                            Télécharger CV
                        </a>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Home;
