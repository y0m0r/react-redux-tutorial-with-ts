import {ADD_TODO, TOGGLE_TODO} from "../actionTypes";

type Action = {
    type: string,
    payload: {
        id: number,
        content: string
    }
}

type State = {
    allIds: number[],
    byIds: { [key: number]: { [key: string]: any } }
}

const initialState: State = {
    allIds: [],
    byIds: {}
};

const todos = (state = initialState, action: Action):State => {

    switch (action.type) {
        case ADD_TODO: {
            const {id, content} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const {id} = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        default:
            return state;
    }
}
export default todos;