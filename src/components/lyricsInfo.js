import React from 'react';
import {Link} from 'react-router-dom';


const LyricsInfo = (props) => {
    return(
        <div className='ui container' style={{marginTop: '8%'}}>
                <Link to='/'>
                    <div className='ui primary button' style={{marginBottom: '20px'}}><i class="arrow left icon"></i>Go Back</div>
                </Link>
                
               <div>
               <table class="ui red table" style={{width: '700px',height: '200px'}}>
                    <thead>
                        <tr><th>{`${props.track.track_name} by ${props.track.artist_name}`}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{paddingTop: '20px'}}>
                            {props.lyrics}
                        </tr>
                        </tbody>
                </table>


                <table class="ui fixed single line celled table" style={{width: '500px'}}>
  <thead>
    <tr><th>Album ID</th>
    <th>{props.track.album_id}</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>Explicit Words</td>
      <td>
          {
              props.track.explicit === 0? 'No' : 'Yes'
          }
      </td>
      
    </tr>
    <tr>
      <td>Song Genre</td>
      <td>Alternative</td>
      
    </tr>
    
  </tbody>
</table>
               </div> 
            </div>
    )
}

export default LyricsInfo;