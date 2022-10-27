<template>
    
    <nav class="navbar rel section pb-0 pt-0" role="navigation" aria-label="main navigation ">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button @click="onDarkMode" class="button">
                            <i v-if="!moon" class="fa-solid fa-moon"></i>
                            <i v-if="moon" class="fa-solid fa-sun"></i>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        </nav>
    <div class ="formulario">
        <h1 class="title p-4">ASK YOUR TASK</h1>
        <router-view class="form-size"></router-view>
    </div>
</template>
<script setup>
import{ref} from 'vue'
import {  useThemeStore } from '../store/index'
const themeStore = useThemeStore();
const moon = ref(false)
//------DARKMODE------
const onDarkMode = () =>{
    moon.value = !moon.value
    themeStore.isTheme = !themeStore.isTheme;
    themeStore.loadTheme();
}
</script>
<style scoped>

h1{
    display: flex;
    align-items: center;
    text-align: center;
    color:var(--text-color);
    background-color: var(--main-card);
    aspect-ratio:1;
    border-radius:50%;

}
.form-size{
    width: 400px;
}
.formulario{
    /* background-color: rgb(233, 192, 192); */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height:100vh;
}
</style>