import React            from 'react';
import { useDispatch }  from 'react-redux';

import { authCreators } from '../../actions/index.js';

const SignUp = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(authCreators.signUp({
            req : {
                email       : `test@test.com`,
                password    : `Test12!'`,
            },
        }));
    };

    return (
        <div>
            <span>
                Sign up comp
            </span>
            <button 
                onClick = { () => onClick() }
            >
                on click
            </button>
        </div>
    );
};

export default SignUp;
