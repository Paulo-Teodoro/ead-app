const mutations = {
    ADD_ALL_COURSES(state, courses) {
        state.courseItems = courses
    },

    SET_COURSE_SELECTED(state, course) {
        state.courseSelected = course
    }
}

export default mutations