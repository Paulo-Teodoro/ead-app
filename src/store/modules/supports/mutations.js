const mutations = {
    SET_SUPPORTS(state, supports) {
        state.supports = Object.assign({}, state.supports, supports)
    },

    SET_RESET_SUPPORTS(state) {
        state.supports = {
            data: [],
            meta: {
                total: 0,
                page: 0,
                last_page: 0
            }
        }
    },

    ADD_NEW_SUPPORT(state, support) {
        state.supports.data.unshift(support)
    },

    ADD_NEW_REPLY_SUPPORT(state, data) {
        const reply = data.reply
        const supportId = data.supportId
        const searchIndexSupport = state.supports.data.findIndex((support) => support.id === supportId)

        state.supports.data[searchIndexSupport].replies.push(reply)
    }
}

export default mutations