import { call, put, _takeEvery, takeLatest }    from 'redux-saga/effects';

import { AUTH_SIGN_UP }                         from '../../reducer/auth';
import { apiFetch }                             from '../utils/index.js';

function* signUp(action) {
    try {
        const signUpRes = yield call(
            apiFetch,
            {
                url       : '/api/auth/sign-up',
                method    : 'POST',
                data      : action.payload.req,
            }
        );
        console.log(`signUpRes -> `, signUpRes)
        /* if (signUpRes) {
            yield put({
                type       : '',
                payload    : signUpRes,
            });
        } */
    } catch (err) {
        console.log(`err -> `, err)
    }
};

export default function* authSaga() {
    yield takeLatest(AUTH_SIGN_UP, signUp);
};
