import { useReducer } from 'react';

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

type AuthAction = { type: 'logout' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <>
            <h3>Login</h3>
            <div className="alert alert-info">
                Validating...
            </div>
            <div className="alert alert-danger">
                Not authorized
            </div>
            <div className="alert alert-success">
                Authentication complete
            </div>

            <button
                className="btn btn-primary"
            >
                Login
            </button>
            <button
                className="btn btn-danger"
            >
                Logout
            </button>

        </>
    )
};
