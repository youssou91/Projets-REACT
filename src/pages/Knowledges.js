import React from 'react'
import Experience from '../components/knowledges/Experience'
import Hobbies from '../components/knowledges/Hobbies'
import Langages from '../components/knowledges/Langages'
import OtherSkills from '../components/knowledges/OtherSkills'
import Navigation from '../components/Navigation'

function Knowledges() {
    return (
        <div className="knowledges">
            <Navigation/>
           <div className='knowledgesContent'>
               <Experience/>
               <Langages/>
               <Hobbies/>
               <OtherSkills/>
           </div>
       </div>
    )
}

export default Knowledges
