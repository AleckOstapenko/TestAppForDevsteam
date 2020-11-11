const initialState = {
    items: [],
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
        // case 'ITEM_ADD_TO_CART':
        //     const id = action.payload;
        //     const item = state.menu.find(item => item.id === id);
        //     const itemInCart = state.items.find(item => item.id === id);            
        //     const newItem = {
        //         title: item.title,
        //         price: item.price,
        //         url: item.url,
        //         id: item.id,
        //         qty: (itemInCart===undefined) ? 1 : itemInCart.qty + 1
        //     };
        //     if (itemInCart !== undefined){
        //         const itemIndex = state.items.findIndex(item => item.id === id);
        //         return {
        //             ...state,
        //             items: [
        //                 ...state.items.slice(0,itemIndex),
        //                 newItem,
        //                 ...state.items.slice(itemIndex+1)
        //             ],
        //             total: state.total + newItem.price
        //         }
        //     }
        //     return {
        //         ...state,
        //         items: [
        //             ...state.items,
        //             newItem
        //         ],
        //         total: state.total + newItem.price
        //     };
        default: 
            return state; 
    }
}

export default reducer;