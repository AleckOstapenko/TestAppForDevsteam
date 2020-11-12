const initialState = {
    items: [],
    page: 1,
    loading: true,
    error: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'LOADING': 
            return {
                ...state,
                loading: true,
                error: false
            };
        case 'LOADED_GALLERY_SUCCESS':         
            return {
                ...state,
                items: action.payload.items,  
                loading: false,
                error: false
            };  
        case 'LOADED_ERROR': 
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };  
        case 'NEXT_PAGE':
            return {
                ...state,
                page: state.page + 1
            };
        case 'PREV_PAGE':
            if (state.page === 1) {
                return state;
            }
            return {
                ...state,
                page: state.page - 1
            };      
        default: 
            return state; 
    }
}

export default reducer;