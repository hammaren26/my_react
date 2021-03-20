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
        console.warn('Obsolete method. Please use profileAPI object.');
        return profileApi.getProfile(userId);
    },

    getAuthMe () {
        let url = `auth/me`;
        return instance.get(url).then(response => {
            return response.data;
        })
    },
    unfollow (userId) {
        let url = `follow/${userId}`;
        return instance.delete(url).then(response => {
            return response.data;
        })
    },

    follow(userId) {
        let url = `follow/${userId}`;
        return instance.post(url).then(response => {
            return response.data;
        })
    }
}



export const profileApi = {
    getProfile (userId) {
        let url = `profile/${userId}`;
        return instance.get(url).then(response => {
            return response.data;
        })
    },

    getStatus (userId) {
        let url = `profile/status/${userId}`;
        return instance.get(url).then(response => {
            return response.data;
        })
    },

    updateStatus (status) {
        let url = `profile/status`;
        return instance.put(url, {status: status}).then(response => {
            return response.data;
        })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response;
        })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => {
            return response.data;
        })
    },

    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        })
    }
}