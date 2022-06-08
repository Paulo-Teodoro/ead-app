<template>
    <div>
        <transition name="fade">
            <ul id="mainMenu">
                <li>
                    <router-link :to="{name: 'campus.home'}" @click="$emit('toggleMenu')">Início</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'campus.user.supports'}" @click="$emit('toggleMenu')">Minhas Dúvidas</router-link>
                </li>
                <li>
                    <a href="" @click="$emit('toggleMenu')">Sair</a>
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'SideMenuComponent',
    emits: ['toggleMenu']
}
</script>