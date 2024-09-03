<template>
    <h1>{{ profile }}Profile Page</h1>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    name: 'ProfilePage',
    data(){
        return{
            profile:''
        }
    },
    mounted(){
        const route=useRoute();
        this.profile=route.params
    }
}
</script>
<style scoped>
h1 {
    color: orange;
}
</style>