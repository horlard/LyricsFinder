import React from 'react';
import {Link} from 'react-router-dom';


const Track = (props)=> {
  
    return (

        <div className='top_container'>
            <div className='top_contain'>
                <div className='artist_name' style={{marginBottom: '10px',fontSize:'20px'}}>
                    {props.tracklist.track.artist_name}
                </div>
                <div className='track_name' style={{marginBottom: '5px'}}>
                <i class="play icon"></i>Track:{props.tracklist.track.track_name}
                </div>
                
                <div className='album_name'>
                <i class="bullseye icon"></i> Album:{props.tracklist.track.album_name}
                </div>
                <Link to={`lyrics/tracks/${props.tracklist.track.track_id}`}>
                <button class="ui primary button" style={{padding:'7px 85px',marginTop:'10px'}}>
                <i class="angle right icon"></i>View lyrics
                </button>
                </Link>
                
            </div>
        </div>
            

            
        
    )
}
export default Track;