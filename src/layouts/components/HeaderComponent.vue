<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars" @click="toggleMenu()"></span>
            <span class="logo">
                <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTI">
            </span>
        </nav>
    </header>

    <side-menu-component v-show="showMenu" ref="hide" @toggle-menu="toggleMenu">
    </side-menu-component>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import SideMenuComponent from './SideMenuComponent.vue'

export default {
    name: 'header-component',
    setup() {
        const showMenu = ref(false)

        const toggleMenu = () => showMenu.value = !showMenu.value

        const hide = ref(null)

        onClickOutside(hide, () => showMenu.value = false)

        return {
            showMenu,
            toggleMenu,
            hide
        }
    },

    components: {
        SideMenuComponent
    }
}
</script>