const mutations = {
    ADD_ALL_COURSES(state, courses) {
        state.courseItems = courses
    },

    SET_COURSE_SELECTED(state, course) {
        state.courseSelected = course
    },

    SET_LESSON_PLAYER(state, lesson) {
        state.lessonPlayer = lesson
    },

    REMOVE_LESSON_PLAYER(state) {
        state.lessonPlayer = {
            id: '',
            name: '',
            description: '',
            video: '',
            views: []
        }
    }
}

export default mutations