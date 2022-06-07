<template>
  <div class="comments" v-if="lesson.id">
    <div class="header">
      <span class="title">Dúvidas (Total: {{ supports.length }}) <span v-if="loading">(Carregando...)</span></span>
      <button class="btn primary"
        @click.prevent="openModal"
      >
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>
    <supports-component/>

    <support-modal-component
      :showModal="modal.showModal"
      :supportReply="modal.supportReply"
      @closeModal="modal.showModal = false"
    >    
    </support-modal-component>
  </div>
</template>
<script>
import { useStore } from 'vuex'
import { computed, watch, ref } from '@vue/runtime-core';

import SupportsComponent from '@/components/SupportsComponent.vue'
import SupportModalComponent from '@/components/SupportModalComponent.vue'

export default {
  components: { 
    SupportsComponent, 
    SupportModalComponent 
  },
  name: 'SupportsLesson',
  setup() {
    const store = useStore()
    const lesson = computed(() => store.state.courses.lessonPlayer)
    const supports = computed(() => store.state.supports.supports.data)
    const loading = ref(false)

    const modal = ref({
      showModal: false,
      supportReply: ''
    })
    const openModal = () => modal.value = {
      showModal: true,
      supportReply: ''
    }

    watch(
      () => store.state.courses.lessonPlayer,
      () => {
        loading.value = true
        store.dispatch('getSupportsByLesson', lesson.value.id)
              .finally(() => loading.value = false)
      }
    )

    return {
      lesson,
      loading,
      supports,
      modal,
      openModal
    }
  },
}
</script>