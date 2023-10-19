import React from 'react'
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';
function Contact() {
    return (
        <div className= "contact">
            <Navigation/>
            <div className= "contactContent">
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        {/* <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <CopyToClipboard text='https://www.google.com/maps/place/Zone+de+captage,+Dakar/@14.724431,-17.4512569,16z/data=!4m5!3m4!1s0xec172d29715da5f:0xdc3c0102c233a100!8m2!3d14.7281513!4d-17.4431643!5m1!1e1'>
                                <span className='clickInput'
                                    onClick={() => {alert('Localisation copiée !!!');}}
                                    >
                                        220 Isaac-Christin, Répentigny, Qc
                                </span>
                            </CopyToClipboard>
                        </li> */}
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <CopyToClipboard text='https://www.google.com/maps/place/220+Rue+Isaac-Christin,+Repentigny,+QC+J5Z+5B1/@45.7736288,-73.4674964,17z/data=!4m6!3m5!1s0x4cc8e8a73a073ecd:0x2421f7034cd4daf0!8m2!3d45.7736288!4d-73.4649215!16s%2Fg%2F11c259ffyp!5m1!1e1?entry=ttu'>
                                <span className='clickInput'
                                    onClick={() => {alert('Localisation copiée !!!');}}
                                    >
                                        220 Isaac-Christin, Repentigny, QC J5Z 5C1
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='+1 (514) 601 9995'>
                                <span className='clickInput'
                                    onClick={() => {alert('Téléphone copié !!!');}}>
                                       +1 (514) 601 9995
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='far fa-envelope'></i>
                            <CopyToClipboard text='youssougning@gmail.com'>
                                <span className='clickInput'
                                    onClick={() => {alert('Email copié !!!');}}
                                    >
                                        youssougning@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href ='https://www.linkedin.com/in/gning-youssou-194311124/' target='_blank' rel='noopener noreferrer'>
                            <h4>Linkedin</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href ='https://twitter.com/YoussouGning' target='_blank' rel='noopener noreferrer'>
                            <h4>Twitter</h4>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href ='https://www.facebook.com/youssou.hpa' target='_blank' rel='noopener noreferrer'>
                            <h4>Facebook</h4>
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href ='https://github.com/youssou91' target='_blank' rel='noopener noreferrer'>
                            <h4>Github</h4>
                            <i className='fab fa-github'></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;