import { login, logout } from "@/api/user";
import { setToken, getToken, removeToken } from "@/utils/auth";
const state = {
  token: getToken(),
  avatar: "",
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  SET_ROLES: (state, avatar) => {
    state.avatar = avatar;
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
          commit("SET_AVATAR", data.avatar);
          commit("SET_ROLES", data.roles);
          setToken(data.token);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // 用户登出
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(response => {
          commit("SET_TOKEN", "");
          commit("SET_AVATAR", "");
          commit("SET_ROLES", []);
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
