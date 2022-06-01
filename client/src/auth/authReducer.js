
const AuthReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN_START": 
            return ({
                user: null,
                isFetching: true,
                error: false
            });
        
            case "LOGIN_SUCCESS": 
            return ({
                user: payload.user,
                isFetching: false,
                error: false
            });
            case "LOGIN_FAILURE": 
            return ({
                user: null,
                isFetching: false,
                error: true
            });
        
        default:
            return {...state}; // nothing changes
    }
}

export default AuthReducer;