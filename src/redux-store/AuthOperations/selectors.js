export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getUserPassword = state => state.auth.user.password;
export const getVerifyToken = state => state.auth.user.verificationToken;
export const getUserRefresh = state => state.auth.isRefresh;
export const getUser = state => state.auth;
