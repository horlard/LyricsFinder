import React from 'react';

const Track = (props)=> {
    return (
        <div className='top_container'>
            <div className='four wide column'>
                <div className='artist_name' style={{marginBottom: '10px',fontSize:'20px'}}>
                    {props.tracklist.track.artist_name}
                </div>
                <div className='track_name' style={{marginBottom: '5px'}}>
                <i class="play icon"></i>Track:{props.tracklist.track.track_name}
                </div>
                
                <div className='album_name'>
                <i class="bullseye icon"></i> Album:{props.tracklist.track.album_name}
                </div>
                <button class="ui primary button" style={{padding:'7px 50px',marginTop:'10px'}}>
                <i class="angle right icon"></i>View lyrics
                </button>
            </div>
        </div>
            

            
        
    )
}
export default Track;