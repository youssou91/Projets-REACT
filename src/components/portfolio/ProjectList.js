import React, { Component } from 'react'
import {portfolioData} from '../../data/portfolioData'
import Project from './Project';
export default class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios:[
            {id:1, value: 'javascript'},
            {id:2, value: 'Angular'},
            {id:3, value: 'react'},
            {id:4, value: 'php'},
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }

    render() {
        let {projects, radios, selectedRadio} = this.state;
        return (
            <div className='portfolioContent'>
                <ul className='radioDisplay'>
                    {
                        radios.map((item) => {
                            return (
                                <li key={item.id}> 
                                    <input 
                                        type='radio'
                                        name='radio'
                                        checked={item.value === selectedRadio}
                                        id={item.value}
                                        value={item.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={item.value}>
                                        {item.value}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='projects'>
                    {
                        projects
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(item=>{
                            return( <Project key={item.id} item={item}/> )
                        })
                    }
                </div>
            </div>
        )
    }
}
