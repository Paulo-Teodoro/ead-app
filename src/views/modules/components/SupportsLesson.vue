<template>
  <div class="comments" v-if="lesson.id">
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>
    <supports-component/>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';
import SupportsComponent from '@/components/SupportsComponent.vue'
export default {
  components: { SupportsComponent },
  name: 'SupportsLesson',
  setup() {
    const store = useStore()
    const lesson = computed(() => store.state.courses.lessonPlayer)

    return {
      lesson
    }
  },
}
</script>