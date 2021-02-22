import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ace3cadb-a0de-40a5-831b-91417c9feabb"
    }
});


export const myAPI = {
    getUsers (currentPage, pageSize) {
        let url = `users/?page=${currentPage}&count=${pageSize}`;
        return instance.get(url).then(response => {
            return response.data;
        })
    },

    getProfile (userId) {
        let url = `profile/${userId}`;
        return instance.get(url).then(response => {
            return response.data;
        })
    },

    getAuthMe () {
        let url = `auth/me`;
        return instance.get(url).then(response => {
            return response.data;
        })
    }
}