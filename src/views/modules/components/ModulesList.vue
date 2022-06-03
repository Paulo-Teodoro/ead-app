<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div 
        v-for="module in modules" 
        :key="module.id"
        @click="toggleModule(module.id)"
        :class="[
          'modules'
        ]" 
      >
        <div class="name" :class="module.id == showModule ? 'active' : ''">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes" v-show="module.id == showModule">
          <li 
            v-for="lesson in module.lessons" 
            :key="lesson.id"
            @click.prevent="setLessonPlayer(lesson)"
          >
            <span
              v-if="lesson.views.length > 0"
              class="check active fas fa-check"
            ></span>
            <span class="nameLesson">{{ lesson.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from '@vue/runtime-core'
export default {
  name: 'ModulesList',
  setup() {
      const store = useStore()

      const modules = computed(() => store.state.courses.courseSelected.modules)

      const showModule = ref('0')

      const toggleModule = (moduleId) => {
        if(moduleId == showModule.value) {
          return showModule.value = '0'
        } 
        return showModule.value = moduleId
      }

      const setLessonPlayer = (lesson) => {
        store.commit('SET_LESSON_PLAYER', lesson)
      }

      return {
          modules,
          showModule,
          toggleModule,
          setLessonPlayer
      }
  },
}
</script>
