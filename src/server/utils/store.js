import { createStore }      from 'redux';

import reducer              from '../../reducer/index.js';

export default () => {
    // store creation for server
    const store = createStore(
        reducer
    );

    return store;
};
