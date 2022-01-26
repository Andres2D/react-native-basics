import { useEffect, useReducer } from 'react';

interface AuthState {
    validating: boolean;
    token: string | null;
    userName: string;
    name: string;
}

const initialState: AuthState = {
    validating: true,
    token: null,
    userName: '',
    name: ''
}

type LoginPayload = {
    userName: string;
    name: string 
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                name: '',
                userName: ''
            }
        case 'login':
            const {name, userName} = action.payload;
            return {
                validating: false,
                token: '111s1d1d1s1d',
                name,
                userName
            }
        default:
            return state;
    }

}

export const Login = () => {

    const [{validating, token, name}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
      setTimeout(() => {
        dispatch({type: 'logout'})
      }, 1500)
    }, []);

    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: { 
                name: 'Andres',
                userName: 'Andres2D'
            }})
    }

    const logout = () => {
        dispatch({type: 'logout'});
    }

    if(validating) {
        return (
            <>
                <div className="alert alert-info">
                    Validating...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className="alert alert-success"> Authentication complete {name} </div>
                    : 
                    <div className="alert alert-danger"> Not authorized </div>
            }

            {
                (token)
                ? (
                    <button
                        className="btn btn-danger"
                        onClick={ logout }
                    >
                        Logout
                    </button>
                )
                : (
                    <button
                        className="btn btn-primary"
                        onClick={ login }
                    >
                        Login
                    </button>
                )
            }
        </>
    )
};
