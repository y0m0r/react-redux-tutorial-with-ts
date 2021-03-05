import {SET_FILTER} from "../actionTypes";
import {VISIBILITY_FILTERS} from "../../constants";

type Action = {
    type: string
    payload: {
        filter: string
    }

}


const initialState = VISIBILITY_FILTERS.ALL;


const visibilityFilter = (state: string = initialState, action: Action): string => {


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
