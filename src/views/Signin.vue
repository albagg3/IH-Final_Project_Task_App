<template>
    <div class="flex">
        <h1>REGISTRATE</h1>
        <form @submit.prevent="onSubmit">
            <div class="p-2">
                <label for="">Email</label>
                <input v-model="email" class="input is-primary" type="email" placeholder="Email">
            </div>
            <div class="p-2">
                <label for="">Password</label>
                <input v-model="password" class="input is-primary" type="password" placeholder="Password">
            </div>
            <button class="button is-primary" type="submit">Sign in</button>
            
            <Message v-if="hasMessage.isShow" :message="hasMessage.message" :type="hasMessage.type"/>
            
            
        </form>

    </div>

</template>
<script setup>
import { ref } from 'vue'
import { registro } from '../api/index'
import Message from '../components/Message.vue';

const email = ref('')
const password = ref('')
const hasMessage = ref({
    message: '',
    type: '',
    isShow: false
})

const onSubmit = async () => {
    console.log('formulario enviado', email.value, password.value)
    // registro(email, password);
    const response = await registro(email.value, password.value)
    if (response)
    {
        hasMessage.value.title = 'Good job'
        hasMessage.value.message = 'Mira tu email y confirma'
        hasMessage.value.type = 'is-success'
        hasMessage.value.isShow = true
    }
    else
    {
        hasMessage.value.title = 'bad'
        hasMessage.value.message = 'Revisa los datos'
        hasMessage.value.type = 'is-danger'
        hasMessage.value.isShow = true
    }
    //si es false el response entonces habria que enviar un mensaje de que ha habido un error email valido
    // authStore.login(email.value,id)
    
};



</script>
<style scoped>
.flex {

    display: flex;
    flex-direction: column;

}
</style>