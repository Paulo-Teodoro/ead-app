import AuthService from "@/services/auth.service"
import ResetPasswordService from "@/services/reset.password.service"

export default {
    state: {
        user: {
            name: '',
            email: '',
        },
        loggedIn: false,
    },

    mutations: {
        SET_USER(state, user) {
            state.user = user
            state.loggedIn = true
        },
        LOGOUT(state) {
            state.user = {
                name: '',
                email: '',
            }
            state.loggedIn = false
        }
    },

    actions: {
        auth({ state, dispatch }, params) {
            state.loggedIn = false
            return AuthService.auth(params)
                                .then(() => dispatch('getUser'))
        },

        getUser({ commit }) {
            commit('SET_LOADING', true)

            AuthService.getUser()
                        .then(response => commit('SET_USER', response.data))
                        .finally(() => commit('SET_LOADING', false))
        },

        forgotPassword({ state }, params) {
            state.loggedIn = false
            return ResetPasswordService.forgotPassword(params)
        }
    },
}
