import React from 'react';


// Swipeable-views
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// Components
import SearchOportunity from '../../Meso/SearchOportunity/searchOportunity';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home = () =>{



    return(<div className='home_holder'>
        <AutoPlaySwipeableViews className='carousel' enableMouseEvents >
            <div className='carousel_view'>
                <div className='image' style={{backgroundImage:`url(${'/assets/images/working.png'})`}}></div>
                <div className='text'>
                At Duo Modi the user can expose their skills to all companies interested in finding new profiles, creating teams to develop projects, updating their biography in TORRE.CO, and obtaining certifications for each project developed on the platform.
                </div>
            </div>
            <div className='carousel_view'>
                <div className='text'>
                If the offer meets the expectations of the company, there is the possibility of working in partner with the company.
                </div>
                <div className='image' style={{backgroundImage:`url(${'assets/images/companysuccess.png'})`}}></div>
            </div>
            <div className='carousel_view'>
                <div className='text alone'>
                Getting a job or consolidating a company while developing new challenges are possibilities at Duo Modi. The process is the following for applicants
                    <br></br>
                    <ul>
                        <li>
                        1. Choose the skills you have or want to empower
                        </li>
                        <li>
                        2. Find a company you would like to work with.
                        </li>
                        <li>
                        3. Take on a 24-hour challenge (based on the company requirements and the ABOVE API).
                        </li>
                        <li>
                        4. If the result of the technical interview meets the expectations of the company, there is the possibility of employment linkage
                        </li>
                        <li>
                        5. If not all the requirements per user to apply to an offer are met, Duo Modi allows the complement of skills among several users, to send an offer to companies that require to develop specific projects.
                        </li>
                    </ul>



                </div>
            </div>
        </AutoPlaySwipeableViews>
        <div className='description'>
        Duo Modi is an initiative that offers its users the possibility to obtain the work of their dreams, and to be part of a collaborative network that contributes to the growth of the application ecosystem.

 At Duo Modi we offer two paths for professional growth, apply to job offers by conducting technical interviews to obtain a job, or the possibility to continue with the development of the project carried out for the technical interview, if not chosen, and be an active part of our network contributing to the creation and strengthening of applications for several companies.
        </div>
        
        <SearchOportunity/>
    </div>);
}

export default Home;