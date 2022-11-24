import { createStore } from 'vuex'
import config from '../config.js'
// import state from './state.js'
// import getters from './getters.js'
// import mutations "./mutations.js"
// import actions from './actions.js'
export const store = createStore({
    state() {
        return {
            users: [],
            loading: false,
            page: 1
        }
    },
    getters: {

    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setPage(state, page) {
            state.page = page
        }
    },
    actions: {
        async getUsers({ state, commit }) {
            commit('setLoading', true)
            let response = await fetch(config.USER_API_URL + '?page=' + state.page)
            let users = await response.json();
            commit('setUsers', users)
            commit('setLoading', false)

        },
        changePage({ commit }, page) {
            commit('setPage', page)
        }
    }
})