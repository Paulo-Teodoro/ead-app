<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img :src="require('@/assets/images/icons/laravel.svg')" alt="" />
      </span>
      <span class="title">{{ lesson.name }}</span>
      <button
        @click="$router.go(-1)"
        class="btn laravel"
      >
        <i class="fas fa-chevron-left"></i>
        Voltar
      </button>
    </div>
    <iframe
      width="100%"
      height="auto"
      v-if="lesson.video"
      :src="lesson.video"
      :title="lesson.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div class="description-lesson" v-if="lesson.video">
    {{ lesson.description }}
  </div>
</template>

<script>
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    name: 'PlayerLesson',
    setup() {
      const store = useStore()

      const lesson = computed(() => store.state.courses.lessonPlayer)

      watch(() => store.state.courses.lessonPlayer, () => {
        if(lesson.value.id != '')
          store.dispatch('markLessonViewed')
      })

      return {
        lesson
      }
    }
}
</script>