import { login } from "@/api/user";
// import { setToken, getToken } from "@utils/auth";
const state = {
  // token: getToken(),
  token: ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  }
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username, password })
        .then(response => {
          console.log(response);
          const { data } = response;
          commit("SET_TOKEN", data.token);
          // setToken(data.token);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
