import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:1989';

axios.interceptors.request.use(request => {
    const token = window.localStorage.getItem('token');
    if(token){
        request.headers.common['Authorization'] = `Bearer ${token}`
    }

    return request;
});

axios.interceptors.response.use(response => response, error => {
    const { status } = error.response;
    
    if(status >= 500){
        alert('error 500');
    }
    

    if(status === 401){
        alert('error 401');
    }

    return Promise.reject(error);
})