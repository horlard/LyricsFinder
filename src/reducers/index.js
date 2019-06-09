import {combineReducers} from 'redux';
import TrackReducer from './trackReducer';

export default combineReducers({
    trackInfo : TrackReducer
})