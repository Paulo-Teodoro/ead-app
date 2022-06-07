<template>
  <div>
    <div class="pageTitle">
      <span class="title">Minhas Duvidas</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>

    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li :class="{active: status === ''}" @click="getUserSupportsWithStatus('')">Todos</li>
                <li :class="{active: status === 'A'}" @click="getUserSupportsWithStatus('A')">Aguardando Minha Resposta</li>
                <li :class="{active: status === 'P'}" @click="getUserSupportsWithStatus('P')">Aguardando Professor</li>
                <li :class="{active: status === 'C'}" @click="getUserSupportsWithStatus('C')">Finalizados</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="comments">
              <supports-component />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import SupportsComponent from "@/components/SupportsComponent.vue"

export default {
  name: "UserSupportsView",
  setup() {
    const store = useStore()

    const status = ref('')

    onMounted(() => {
      store.dispatch('getUserSupports', {
        params: {
          status: status.value
        }
      })
    })

    const getUserSupportsWithStatus = (newStatus) => {
      status.value = newStatus
      store.dispatch('getUserSupports', {
        params: {
          status: status.value
        }
      })
    }

    return {
      status,
      getUserSupportsWithStatus
    }
  },
  components: { SupportsComponent },
};
</script>
