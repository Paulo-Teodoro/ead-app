import SupportService from '@/services/support.service'

const actions = {
    getSupportsByLesson({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports))
    },

    getUserSupports({commit}, params) {
        return SupportService.getUserSupports(params)
                                .then(response => commit('SET_SUPPORTS', response))
    },

    createSupportByLesson({commit}, params) {
        return SupportService.storeSupportByLesson(params)
                                .then(response => commit('ADD_NEW_SUPPORT', response.data))
    },

    createReplySupport({commit}, params) {
        return SupportService.storeReplySupport(params)
                                .then(response => {
                                    const data = {
                                        reply: response.data,
                                        supportId: params.support_id
                                    }
                                    commit('ADD_NEW_REPLY_SUPPORT', data)
                                })
    }
}

export default actions