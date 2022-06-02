<template>
    <div>
        <div class="pageTitle">
            <span class="title">{{ course.name }}</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">
                <modules-list/>
                <div class="right">
                    <div class="content">
                        
                        <player-lesson/>

                        <supports-lesson/>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import ModulesList from './components/ModulesList.vue'
import PlayerLesson from './components/PlayerLesson.vue'
import SupportsLesson from './components/SupportsLesson.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
    name: 'ModulesAndLessons',
    setup() {
        const store = useStore()

        const course = computed(() => store.state.courses.courseSelected)

        return {
            course
        }
    },
    components: {
        ModulesList,
        PlayerLesson,
        SupportsLesson
    }
}
</script>
ModulesComponent