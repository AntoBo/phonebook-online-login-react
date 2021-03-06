export const getIsLogged = state => Boolean(state && state.auth.token);
export const getToken = state => state.auth.token;

export const getUserName = state => state.auth.user.name;
