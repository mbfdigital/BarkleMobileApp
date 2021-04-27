import { GET_CLASS_TYPE } from '../actions/types';

export default (state = {}, action = {}) => {
    switch (action.type) {
	    case GET_CLASS_TYPE:
	        return action.classType
	    default:
	        return state;
    }
};