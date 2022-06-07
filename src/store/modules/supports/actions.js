import SupportService from '@/services/support.service'

const actions = {
    getSupportsByLesson({commit}, lessonId) {
        return SupportService.getSupportsByLesson(lessonId)
                                .then(supports => commit('SET_SUPPORTS', supports))
    },

    createSupportByLesson({commit}, params) {
        return SupportService.storeSupportByLesson(params)
                                .then(response => commit('ADD_NEW_SUPPORT', response.data))
    }
}

export default actions