import {SET_FILTER} from "../actionTypes";
import {VISIBILITY_FILTERS} from "../../constants";

type Action = {
    type: string
    payload: any

}


// TODO State type

const initialState = VISIBILITY_FILTERS.ALL;


const visibilityFilter = (state: string = initialState, action: Action) => {

    console.log('reducer visibilityFilter', state, action)

    switch (action.type) {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }
};

export default visibilityFilter;
