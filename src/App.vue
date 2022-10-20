<template>
 
  <router-view></router-view>
</template>
<script setup>
import {onMounted} from 'vue'
import{useAuthStore} from './store/index'
import{useRouter} from 'vue-router'

const authStore = useAuthStore();
const router = useRouter();
//si el auth store esta false lo redirigimos a login
//pinia persist
onMounted(async () => {

  if(authStore.isAuth === false)
    router.push({name: 'login'})
});

</script>
<style scoped>

</style>