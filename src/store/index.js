import { createStore } from "vuex";

export default createStore({
  state: {
    token: localStorage.getItem("token") || null,
    userId: localStorage.getItem("userId") || null,
    isCompany: JSON.parse(localStorage.getItem("isCompany")) || false, 
    
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
      state.isCompany = payload.isCompany || false;

      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isCompany", state.isCompany); 
    },
    logout(state) {
      state.userId = null;
      state.token = null;
      state.isCompany = false;

      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("isCompany");
    },
    setIsCompany(state, value) {
      state.isCompany = value;
      localStorage.setItem("isCompany", value);
    },
  },
  actions: {
    login({ commit }, payload) {
      commit("setUser", payload);
    },
    logout({ commit }) {
      commit("logout");
    },
    updateIsCompany({ commit }, value) {
      commit("setIsCompany", value);
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    getToken: (state) => state.token,
    getUserId: (state) => state.userId,
    isCompany: (state) => state.isCompany, 
  },
});
