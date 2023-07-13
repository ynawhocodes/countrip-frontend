import axios, { AxiosInstance } from 'axios'

export const travelerClient: AxiosInstance = axios.create({
  baseURL: 'http://15.165.110.6:8080',
  withCredentials: true,
});
const guideClient: AxiosInstance = axios.create({
  baseURL: 'http://15.165.110.6:9090',
  withCredentials: true,
});

guideClient.interceptors.request.use(async (request: any) => {
  const accessToken = localStorage.getItem('accessToken')
  console.log('at > accessToken: ', accessToken)
  request.headers.Authorization = accessToken ? `Bearer ${accessToken}` : ''
  return request
});

guideClient.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      try {
        const originalRequest = error.config
        const data = await guideClient.get('/auth/reissue-token')
        if (data) {
          localStorage.removeItem('accessToken')
          const accessToken = 'accessToken'
          await localStorage.setItem('accessToken', accessToken)
          const refreshToken = 'refreshToken'
          await localStorage.setItem('refreshToken', refreshToken)
          originalRequest.headers.Authorization = 'Bearer ' + accessToken
          originalRequest.headers['refreshToken'] = refreshToken
          return await guideClient.request(originalRequest)
        }
      } catch (error) {
        localStorage.removeItem('accessToken')
        console.log(error)
      }
      return Promise.reject(error)
    }
    return Promise.reject(error)
  },
);
export default guideClient;