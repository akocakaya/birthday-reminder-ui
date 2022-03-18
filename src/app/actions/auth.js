import { AUTH_SIGN_UP } from "../../reducer/auth";

export const signUp = payload => ({
    type: AUTH_SIGN_UP,
    payload
});
