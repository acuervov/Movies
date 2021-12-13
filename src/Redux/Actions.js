import {FIND_MOVIE} from './Const'

export function findMovie(name){
    return function(dispatch){
        fetch(`https://ott-details.p.rapidapi.com/search?title=${name}&page=1`, {
	        "method": "GET",
	        "headers": {
		        "x-rapidapi-host": "ott-details.p.rapidapi.com",
		        "x-rapidapi-key": "d43d57e38amsh5e2acc6fc18657bp13c2fejsn4dd4184fc2a4"
	         }
            })
        .then(response => response.json())
        .then(response => {dispatch({type: FIND_MOVIE, payload: response})})
        .catch(err => {alert(err)});
    }
}