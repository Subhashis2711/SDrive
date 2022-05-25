import axios from 'axios'
import config from '../src/app/config'

const baseURL = config.apiBaseURL

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
})

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (typeof error.response === 'undefined') {
            alert(
                'A server/network error occurred. ' +
                    'Looks like CORS might be the problem. ' +
                    'Sorry about this - we will get it fixed shortly.'
            )
            return Promise.reject(error)
        }

        if (
            error.response.status === 401 &&
            originalRequest.url === baseURL + 'token/refresh/'
        ) {
            window.location.href = '/login/'
            return Promise.reject(error)
        }

        if (error.response.status === 403) {
            const refreshToken = localStorage.getItem('refresh');

            if (refreshToken) {
				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

				const now = Math.ceil(Date.now() / 1000);
				console.log(tokenParts.exp);

				if (tokenParts.exp > now) {
					return axiosInstance
						.post('/gateway/refresh', { refresh: refreshToken })
						.then((response) => {
                            console.log(response);
							localStorage.setItem('access', response.data.access);
							localStorage.setItem('refresh', response.data.refresh);

							axiosInstance.defaults.headers['Authorization'] =
								'Bearer ' + response.data.access;
							originalRequest.headers['Authorization'] =
								'Bearer ' + response.data.access;

							return axiosInstance(originalRequest);
						})
						.catch((err) => {
							console.log(err);
						});
				} else {
					console.log('Refresh token is expired', tokenParts.exp, now);
					window.location.href = '/auth/signin';
				}
			} else {
				console.log('Refresh token not available.');
				window.location.href = '/auth/signin';
			}

        }
        
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
    }
    
)

export default axiosInstance
