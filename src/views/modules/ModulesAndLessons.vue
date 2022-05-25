<template>
    <div>
        <div class="pageTitle">
            <span class="title">LaraFood</span>
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
export default {
    name: 'ModulesAndLessons',
    components: {
        ModulesList,
        PlayerLesson,
        SupportsLesson
    }
}
</script>
ModulesComponent