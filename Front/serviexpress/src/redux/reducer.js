const initialState = {
    rdcr_tempVariables: [1,2,3,4,5,6],
    services: [],
    switchloading: false,
    detail: {},
}

const rootReducer = (state = initialState, action) => {

    switch (action.type){
        case 'TEMP_VARIABLES':
            return {
                ...state,
                rdcr_tempVariables: action.payload,
            }
        case 'GET_SERVICES':
            return{
                ...state,
                services: action.payload,
            }
        case 'SWICH_LOADING':
            return{
            switchloading: true,  
            }
        case 'GET_BY_ID':
            let aux = action.payload;
            aux.date = aux.date.slice(0,10)


            return{
                ...state,
                detail: aux
            }

        
        default:
            return state;
    }
}

export default rootReducer;
