// import { favorites } from "../actions";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return { ...state, favorites: [...state.favorites, action.paylod]}
            break;
        case "DELETE_FAVORITES":

            return {
                ...state,
                favorites: [...state.favorites].filter(element => element.id !== action.paylod)
            }
            break;    

        case "SET_SCROLL_WITH_INDICATORS":
            return {...state, buttonIndicatorsNumber: action.paylod}
            break;

        case "ARROW_RIGHT_INDICATOR":
            return {...state, buttonIndicatorsNumber: action.paylod += 1}    
            break;
        case "SET_ALL_VIDEOS":
            return {
                ...state,
                allVideos: [...state.allVideos, ...action.paylod]
            }
            break;
        case "SET_DETAILS":
            return {
                ...state, details: action.paylod
            }      
        default:
            return state
    }
}

export default reducer;