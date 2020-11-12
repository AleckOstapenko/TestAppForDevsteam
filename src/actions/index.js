const _apiBase = 'https://api.unsplash.com/photos', 
     _token='/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';

const unsplashService = (page) => {
    return dispatch => {
        dispatch(loading());
        fetch(`${_apiBase}${_token}&page=${page}`)
            .then(res => res.json())
            .then(items => {dispatch(loadedGallerySuccess(items));                                                       
                        })            
            .catch(err => {dispatch(loadedError(err.message));
                        })       
        
    }
};

const loading = () => ({
    type: 'LOADING'
});

const loadedGallerySuccess = items => ({
    type: 'LOADED_GALLERY_SUCCESS',
    payload: {
      items: [...items]
    }
}); 

const loadedError = error => ({
    type: 'LOADED_ERROR',
    payload: {
      error
    }
});

export const nextPage = () => ({
    type: 'NEXT_PAGE',
})

export const prevPage = () => ({
    type: 'PREV_PAGE',
})

export default unsplashService;