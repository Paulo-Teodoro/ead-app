<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars" @click="toggleMenu()"></span>
            <span class="logo">
                <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTI">
            </span>
        </nav>
    </header>

    <side-menu-component v-show="showMenu">
    </side-menu-component>
</template>

<script>
import { ref } from 'vue'

import SideMenuComponent from './SideMenuComponent.vue'

export default {
    name: 'header-component',

    setup() {
        const showMenu = ref(false)

        const toggleMenu = () => showMenu.value = !showMenu.value

        return {
            showMenu,
            toggleMenu
        }
    },

    components: {
        SideMenuComponent
    }
}
</script>