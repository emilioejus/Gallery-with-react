const reducer = (state, action) => {
    switch (action.type) {
        case "SET_SCROLL_WITH_INDICATORS":
            
            return {...state, buttonIndicatorsNumber: action.paylod}
            break;
        case "ARROW_RIGHT_INDICATOR":
            return {...state, buttonIndicatorsNumber: action.paylod += 1}    
    
        default:
            return state
    }
}

export default reducer;