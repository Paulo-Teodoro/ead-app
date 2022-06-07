<template>
    <div class="content">
      <div class="card" v-for="support in supports.data" :key="support.id">
        <div class="commentContent main">
          <span class="avatar">
            <img 
              :src="[
                support.user.image ?
                support.user.image :
                require('@/assets/images/avatars/user01.svg') 
              ]" 
              :alt="support.user.name" 
            />
          </span>
          <div class="comment">
            <div class="balloon">
              <span class="fas fa-sort-down"></span>
              <span class="owner">{{ support.user.name }} - {{ support.dt_updated }}</span>
              <span class="text">{{ support.description }}</span>
            </div>
          </div>
          <button class="btn primary" @click.prevent="toggleSupport(support.id)">
            <span v-if="showSupport === support.id">Ocultar respostas</span>
            <span v-else>Exibir respostas (total: {{ support.replies.length }})</span>
          </button>
        </div>
        <div class="answersContent" v-show="support.id == showSupport">
          <div 
            :class="[
              'commentContent',
              { 'rightContent' : support.user.id != reply.user.id }
            ]" 
            v-for="reply in support.replies" 
            :key="reply.id"
          >
            <span class="avatar" v-if="support.user.id == reply.user.id">
              <img 
                :src="[
                  reply.user.image ?
                  reply.user.image :
                  require('@/assets/images/avatars/user03.svg') 
                ]" 
                :alt="reply.user.name" 
              />
            </span>
            <div class="comment">
              <div class="balloon">
                <span class="fas fa-sort-down"></span>
                <span class="owner">{{ reply.user.name }} - {{ reply.dt_updated }}</span>
                <span class="text">{{ reply.description }}</span>
              </div>
            </div>
            <span class="avatar" v-if="support.user.id != reply.user.id">
              <img 
                :src="[
                  reply.user.image ?
                  reply.user.image :
                  require('@/assets/images/avatars/user03.svg') 
                ]" 
                :alt="reply.user.name" 
              />
            </span>
          </div>
          <span class="answer">
            <button class="btn primary" @click.prevent="openModal(support.id)">Responder</button>
          </span>
        </div>
        <support-modal-component
          :showModal="modal.showModal"
          :supportReply="modal.supportReply"
          @closeModal="modal.showModal = false"
        >    
        </support-modal-component>
      </div>
    </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import SupportModalComponent from './SupportModalComponent.vue'

export default {
    name: 'SupportsComponent',
    setup() {
      const store = useStore()

      const supports = computed(() => store.state.supports.supports)

      const showSupport = ref('0')

      const modal = ref({
        showModal: false,
        supportReply: ''
      })
      const openModal = (supportId) => modal.value = {
        showModal: true,
        supportReply: supportId
      }

      const toggleSupport = (supportId) => {
        if(supportId == showSupport.value) {
          return showSupport.value = '0'
        }
        return showSupport.value = supportId
      }

      return {
        supports,
        showSupport,
        toggleSupport,
        modal,
        openModal
      }
    },

    components: {
      SupportModalComponent
    }
}
</script>