import { FIND_MOVIE, MOVIE_LIST } from "./Const";

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
        case MOVIE_LIST:
            return{
                ...state,
                allMovies: action.payload
            }
        default: return state; 
    }
}