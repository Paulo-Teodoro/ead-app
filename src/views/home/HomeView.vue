<template>
  <div class="home">
    <div class="pageTitle">
            <span class="title">Meus Cursos</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <ul class="listCourses">
                <card-course
                  v-for="course in courses"
                  :key="course.id"
                  :title="course.name"
                  :image="course.image"
                  :bgName="'laravel'"
                >
                </card-course>
            </ul>
        </div>
  </div>
</template>

<script>
import CardCourse from './components/CardCourse.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const store = useStore()
    
    onMounted(() => {
      store.dispatch('getCourses')
    })

    const courses = computed(() => store.state.courses.courseItems)

    return {
      courses
    }
  },
  components: {
    CardCourse
  }
}
</script>
