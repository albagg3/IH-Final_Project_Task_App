<template>
  <router-view></router-view>
</template>
<script setup>
import {onMounted} from 'vue'
import{useAuthStore, useThemeStore} from './store/index'
import{useRouter} from 'vue-router'

const authStore = useAuthStore();
const themeStore = useThemeStore();
const router = useRouter();
//si el auth store esta false lo redirigimos a login
//pinia persist
onMounted(async () => {

  themeStore.loadTheme()
  
  if(authStore.isAuth === false)
    router.push({name: 'login'})
  
});

</script>
<style scoped>

</style>