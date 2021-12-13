import { FIND_MOVIE } from "./Const";

const initialState={
    allMovies:[],
    searchResult:[],
    favorites:[],
    detail: {}
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case FIND_MOVIE:
            return {
                ...state,
                searchResult: action.payload
            }
        default: return state; 
    }
}