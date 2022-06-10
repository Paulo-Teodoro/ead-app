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
        auth({ dispatch }, params) {
            return AuthService.auth(params)
                                .then(() => dispatch('getUser'))
        },

        getUser({ commit }) {
            commit('SET_LOADING', true)

            AuthService.getUser()
                        .then(user => commit('SET_USER', user))
                        .finally(() => commit('SET_LOADING', false))
        },

        forgotPassword(_, params) {
            return ResetPasswordService.forgotPassword(params)
        },

        logout({ commit }) {
            commit('SET_LOADING', true)

            return AuthService.logout()
                            .then(() => commit('LOGOUT'))
                            .finally(() => commit('SET_LOADING', false))
        }
    },
}
