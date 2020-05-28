import React from 'react';
// Redux
import {Provider} from 'react-redux';
import store from '../Redux/store';
// Router 
import {BrowserRouter, Switch,Route} from 'react-router-dom';
// Custom Styles
import './styles.scss';

// Layout 
import Header from '../Layout/header/header';
import Footer from '../Layout/footer/footer';
// Components 
// Macro 
import Home from '../Macro/Home/home';
import Team from '../Macro/Team/team';
import Contact from '../Macro/Contact/contact';

const MainComponent = () =>{
    return(<div>
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <div className='dm_contents'>
                <Switch>
                          <Route  path='/team' component={Team}/>
                          <Route  path='/contact' component={Contact}/>
                          <Route  path='/' component={Home}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    </Provider>
    </div>);
}

export default MainComponent;