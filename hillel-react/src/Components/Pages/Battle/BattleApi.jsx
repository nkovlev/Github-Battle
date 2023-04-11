import axios from "axios";

export const fetchUserProfile = (username) => {
    const encodedURI = window.encodeURI(`https://api.github.com/users/${username}`);
    return axios.get(encodedURI)
        .then(response => response.data);
};