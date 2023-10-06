import { types } from '../types/types';

const initialState = {
    loading: false,
    loadingDocsBar: false,
    msgError: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                msgError: action.payload
            }
        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            }

        case types.uiStartLoading:
            return{
                ...state,
                loading: true,
            }
        
        case types.uiFinishLoading:
            return{
                ...state,
                loading: false
            }
        
        case types.uiStartLoadingDocumentsBar:
            return{
                ...state,
                loadingDocsBar: true,
            }
        
        case types.uiFinishLoadingDocumentsBar:
            return{
                ...state,
                loadingDocsBar: false
            }
    
        default:
            return state;
    }
}

