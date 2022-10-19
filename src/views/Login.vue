<template>
    <div class="flex">
    <h1>INICIA SESION</h1>
        <form @submit.prevent="onSubmit">
            <div class="p-2">
                <label for="">Email</label>
                <input v-model="email" class="input is-primary" type="email" placeholder="Email">
            </div>
            <div class="p-2">
                <label for="">Password</label>
                <input v-model="password" class="input is-primary" type="password" placeholder="Password">
            </div>
            <button class="button is-primary" type="submit">Log in</button>
        </form>
    </div>

</template>
<script setup>
import {ref} from 'vue'

const email= ref('')
const password= ref('')

const onSubmit= ()=>{
    console.log('formulario enviado', email.value, password.value)
}


</script>
<style scoped>
/* .flex{
    
    display: flex;
    flex-direction: column;
    
} */

</style>