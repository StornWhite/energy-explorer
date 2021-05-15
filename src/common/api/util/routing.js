/**
 * Define API routes here.
 */
const apiUri = process.env.REACT_APP_API_URI;
export const apiRoute = {
    restAuth: (rest) => `${apiUri}/auth/${rest}`,
    v1: (rest) => `${apiUri}/v1/${rest}`,
};
