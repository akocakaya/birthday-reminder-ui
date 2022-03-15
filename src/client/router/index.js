import React        from 'react';
import { Route }    from 'react-router-dom';

import { SignUp }   from '../pages/auth/index.js';

const AppRouter = _props => {
    return (
        <div>
            <Route exact path='/' component={SignUp} />
        </div>
    );
};

export default AppRouter;
