import React, { Component } from 'react';
import Musix from '../api/musix';
import '../style.css'
import Track from './Track';

 class Tracks extends Component {
     constructor(props) {
         super(props);
         this.inputRef=React.createRef();
     }
     state = {
         tracklists : [],
         header : 'Top US tracks'
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
    onFormSubmit =  (event) => {
        event.preventDefault();

    }

    async onSearch (){
        const response = await Musix.get('/track.search',{
            params : {
                q_track_artist : this.inputRef.value,
                page_size : '10',
                page : '1',
                s_track_rating : 'desc',
                apikey : '03e1dfb7b02e443fce1505fc92d96178'  
            }
        })
        console.log(response);
        this.setState({tracklists: response.data.message.body.track_list,header:'Search results'})
    }
    render() {
        return (
            <div className='ui container' style={{marginTop:'30px'}}>
                <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className='field'>
                <label>Song search</label>
                <input type='text' ref={inputRef => this.inputRef = inputRef}/>
                
                </div>
                <button className='ui primary button' style={{padding: '10px 47.5%',fontSize: '18px'}} onClick={this.onSearch.bind(this)}>Search</button>
                 </form>    
            </div>
            <div className='heading'>
                {this.state.header}
            </div>
            <div className='grid_container'>
                
               {
                   this.state.tracklists.map(tracklist=> {
                       return <Track tracklist={tracklist} header={this.state.header}/>
                   })
               }
            </div>

            </div>
        )
    }
}


export default Tracks;




