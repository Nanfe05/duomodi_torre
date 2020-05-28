import React from 'react';

const Contact = () =>{
    return(<div className='contact_holder'>
        <h2>Contact: </h2>
        <p>Hernan05felipe@gmail.com</p>
        <p>320 412 6515</p>

        <h2>Contributors: </h2>
        <h3>Data: </h3>
            <div className='row'>
                <a href='https://bio.torre.co/' target="_blank" rel="noopener noreferrer">
                    <img src={`/assets/images/torre.png`} alt='torre_logo'/>
                </a>
                <span>Torre CO</span>
            </div>
        <h3>Graphs: </h3>
        <div className='row'>
                <a href='https://www.freepik.com/' target="_blank" rel="noopener noreferrer">
                    <img src={`/assets/images/freepik.png`} alt='torre_logo'/>
                </a>
                <span>Freepik</span>
        </div>
        <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Designed by pikisuperstar / Freepik</a>
        <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Designed by macrovector / Freepik</a>
        <a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Designed by Freepik</a>

    </div>);
}

export default Contact;