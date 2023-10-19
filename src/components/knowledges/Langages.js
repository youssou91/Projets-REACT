import React, { Component } from 'react';
import BarProgess from './BarProgess';
class Langages extends Component {
    state = {
        languages: [
            {id:1, value: "Javascript", xp: 0.9},
            {id:2, value: "Css", xp: 2},
            {id:3, value: "Html", xp: 2},
            {id:4, value: "Php", xp: 0.7},
            {id:5, value: "Typscript", xp: 1}
        ],
        frameWorks: [
            {id: 1, value: "React", xp: 0.6},
            {id: 1, value: "Bootstrap", xp: 2},
            {id: 3, value: "Angular", xp: 1.5},
            {id: 4, value: "WordPress", xp: 1.9},
            {id: 5, value: "Code Igniter", xp: 0.6},
        ]
    }

    render () {
        let {languages, frameWorks} = this.state;
        return (
            <div className='languagesFrameworks'>
                <BarProgess
                languages = {languages}
                className= 'landuagesDisplay'
                tittle= 'langages'/>
                <BarProgess
                languages = {frameWorks}
                className= 'frameworkDisplay'
                tittle= 'frameWorks & bibliothèques'
                />
            </div>
        )
    }
}

export default Langages;