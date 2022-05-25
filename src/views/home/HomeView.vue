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
                  :title="'Curso LaraFood + VueFood + FlutterFood'"
                  :image="''"
                  :bgName="'laravel'"
                >
                </card-course>
            </ul>
        </div>
  </div>
</template>

<script>
import CardCourse from './components/CardCourse.vue'

export default {
  name: 'HomeView',
  components: {
    CardCourse
  }
}
</script>
