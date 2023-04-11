import axios from "axios";

export const fetchPopularRep = (language) => {
    const encodeURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)
    return axios.get(encodeURI)
        .then(response => response.data.items)
}