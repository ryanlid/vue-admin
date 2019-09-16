import { login, logout } from "@/api/user";
import { setToken, getToken, removeToken } from "@/utils/auth";
const state = {
  token: getToken()
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  REMOVE_TOKEN: (state, token) => {
    state.token = "";
  }
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username, password })
        .then(response => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(response => {
          commit("SET_TOKEN", "");
          removeToken();
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
