<template>
    <div >
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
            <div class="navbar-start">
                <router-link :to="{name:'home'}" class="navbar-item">
                    Home
                </router-link>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button @click="onDarkMode" class="button">Dark</button>
                        <button @click="onDeletebutton" class="button is-danger">Log Out</button>
                    </div>
                </div>
            </div>
        </div>
        <Modalquestion @yes="onClick" @no="onDeletebutton"  :modal="modal" />
        <Message class="abs" v-if="hasMessage.isShow" :message="hasMessage.message" :type="hasMessage.type"/>
    </nav>
</div>
</template>
<script setup>
import { logOut } from '../api/index'
import {ref} from 'vue'
import { useAuthStore, useThemeStore } from '../store/index'
import { useRouter } from 'vue-router'
import Message from './Message.vue';
import Modalquestion from './Modalquestion.vue';
const authStore = useAuthStore();
const themeStore = useThemeStore();
const router = useRouter();
const hasMessage = ref({
    message: '',
    type: '',
    isShow: false
})

const props = defineProps({
    task: Object
});

// ------------LOG OUT MODAL---------------
const modal=ref( {
    message: '¿Quieres salir de la aplicación?',
    isShow:false
})

const onDeletebutton = ()=>{
    modal.value.isShow = !modal.value.isShow;
    console.log(modal.value.isShow)

}

// ------------LOG OUT MESSAGE---------------
const onClick = async () => {
    modal.value.isShow = !modal.value.isShow;
    const response = await logOut();
    if (response === false) {
        hasMessage.value.message = 'Ha habido un error intentelo de nuevo más tarde'
        hasMessage.value.type = 'is-danger'
        hasMessage.value.isShow = true
    }
    else {
        //guardamos datos en authStore y redirigimos a home
        hasMessage.value.message = '¡Hasta pronto!'
        hasMessage.value.type = 'is-success'
        hasMessage.value.isShow = true
        authStore.logout();
        setTimeout(()=>{
            router.push({ name: 'login' })
        },1000)
    }
};

//------DARKMODE------
const onDarkMode = () =>{
    themeStore.isTheme = !themeStore.isTheme;
    themeStore.loadTheme();
}

</script>
<style scoped>
nav{
    position: sticky;
    top:0px;
    color: var(--text-color);
    
}

.abs{
position:absolute;
left: 50%;
top:100px;
}
.rel{
    position:relative;
}
</style>