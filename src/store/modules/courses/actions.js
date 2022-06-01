import CourseService from '@/services/course.service'

const actions = {
    getCourses({commit}) {
        CourseService.getCourses()
                        .then(response => commit('ADD_ALL_COURSES', response.data))
    }
}

export default actions