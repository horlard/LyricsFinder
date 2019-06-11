import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';   
import Header from "./header";
import Tracks from './tracks';
import Lyrics from './lyrics';



class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className='container'>
                     <Header />
                     <div className='main_container'>
                         <Route exact path='/' component={Tracks} />
                         <Route exact path='/lyrics/tracks/:id'component={Lyrics} />
                     </div>
                 </div>
            
            
            </BrowserRouter>
            
        )
    }
}
export default App; 