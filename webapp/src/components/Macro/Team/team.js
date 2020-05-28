import React from 'react';

const Team = () =>{
    return(<div className='team_page'>
        <div className='team_holder'>
            <h2>Team</h2>
            <div className='row'>
                <div className='image_profile' style={{backgroundImage:`url(${'/assets/images/hf.png'})`}}></div>
                <div className='description'>
                Entrepreneur and innovative by nature. He has experience in programming, parametric design, and the skills to conceptualize and develop a project cross-cuttingly, from the BackEnd to the FrontEnd. He bets on constant learning, creation and optimization processes, and the exploration of various alternatives from programming to solve needs of different scales, such as daily activities or the creation of platforms that allow to connect various professions and skills to generate results of greater impact.
                </div>
                <a href='https://bio.torre.co/es/hernanfelipelondononorojas' target="_blank" rel="noopener noreferrer">
                    <img src={`/assets/images/torre.png`} alt='torre_logo'/>
                </a>
            </div>
        </div>
        <div className='libraries_holder'>
            <h2>Libraries and Frameworks</h2>
            <h3>FrontEnd</h3>
            <div className='image_container'>
                <img src={`/assets/images/materialui.png`} alt='Material UI'/>
                <img src={`/assets/images/reactjs.png`} alt='ReactJS'/>
                <img src={`/assets/images/redux.png`} alt='Redux'/>
                <img src={`/assets/images/sass.png`} alt='Sass'/>
            </div>
            <h3>BackEnd</h3>
            <div className='image_container'>
                <img src={`/assets/images/nodejs.png`} alt='Sass'/>
                <img src={`/assets/images/mongo.png`} alt='Sass'/>
                <img src={`/assets/images/mongoose.png`} alt='Sass'/>
            </div>
            <h3>Deploy</h3>
            <div className='image_container'>
               <img src={`/assets/images/gcp.png`} alt='Google Cloud Platform'/>
            </div>
        </div>
    </div>);
}

export default Team;