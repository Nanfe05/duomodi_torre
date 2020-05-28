import React from 'react';

const Team = () =>{
    return(<div className='team_page'>
        <div className='team_holder'>
            <h2>Team</h2>
            <div className='row'>
                <div className='image_profile'></div>
                <div className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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