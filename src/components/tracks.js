import React, { Component } from 'react';
import Musix from '../api/musix';
import '../style.css'
import Track from './Track';

 class Tracks extends Component {
     state = {
         tracklists : []
     }
    async componentDidMount() {
        const response = await Musix.get('/chart.tracks.get',{
            params : {
                chart_name : 'top',
                page : '1',
                page_size : '10',
                country : 'us',
                f_has_lyrics : '1',
                apikey : '03e1dfb7b02e443fce1505fc92d96178'  
            }
        })
        this.setState({tracklists:response.data.message.body.track_list})
        console.log(this.state.tracklists);
        
       
    }
    render() {
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <div className='ui segment'>
                <form className='ui form'>
                <div className='field'>
                <label>Song search</label>
                <input type='text'/>
                
                </div>
                 </form>    
            </div>

            <div>
               {
                   this.state.tracklists.map(tracklist=> {
                       return <Track tracklist={tracklist}/>
                   })
               }
            </div>

            </div>
        )
    }
}


export default Tracks;




