const UserReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_TRUE': 
        return {
            ...state,
            loading: true
        }
        case 'LOAD_FALSE': 
        return {
            ...state,
            loading: false
        }
        case 'LOGIN':
        return {
            ...state,
            loginState: true,
            email: action.payload.emailAddress
        }
        case 'LOGOUT':
        return {
            ...state,
            loginState: false
        }
        default: 
        return state;
    }
}

export default UserReducer;
