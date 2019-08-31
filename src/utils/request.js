import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.base_API,
  timeout: 5000
});

instance.interceptors.request.use(
  config => {
    // if (store.getter.token) {
    //   config.headers['X-Token'] = getToken()
    // }

    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // if (response.data.code === '444444') {
    //   router.replace('/login')
    // }
    return response;
  },
  error => {
    console.warn("error: " + error);
    return Promise.reject(error);
  }
);

export default instance;
