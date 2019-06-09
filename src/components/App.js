import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from "./header";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className='container'>
                     <Header />
                     <div className='main_container'>
                         <Route exact path='/' component={index} />
                     </div>
                 </div>
            
            
            </BrowserRouter>
            
        )
    }
}

export default App;