export const initialState={
    user:null,
    playlists:[],
    playing:false,
    items:null,
    token:'BQBVGhpxYG5PO-JeNCiQFeVT2dUYhOtN8GyRbQLhEdpTjipvWVQ4wKXEWK0oLp_-C2U1GtFzv_3kFmkBJ3gO68_f6xY8BP8OUTTpmg0bemNEBtDFiTsytHUTiVsMiPzYX29tGUhqcalEe5UEPC8GbUjnPwxJJNMFWxM5Z9kVL-4J1cSZbj_QyDJ19A3qDGEbzsf9Em0Hqe1YhgHSGA1c',
}

const reducer= (state, action)=>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user : action.user

            }
            case 'SET_TOKEN':
            return{
                ...state,
                token : action.token

            }
            case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists : action.playlists

            }
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly:action.discover_weekly,
                }

            default:
                return state;
    }
}

export default reducer;
