<template>
    <div class="flex">
        <h1 class="title">REGISTRATE</h1>
        <form @submit.prevent="onSubmit">
            <div class="p-2">
                <label for="">Email</label>
                <input v-model="email" class="input is-success" type="email" placeholder="Email">
            </div>
            <div class="p-2">
                <label for="">Password</label>
                <input v-model="password" class="input is-success" type="password" placeholder="Password">
            </div>
            <div class="p-2">
                <label for="">Confirm password</label>
                <input v-model="passwordConfirm" class="input is-success" type="password" placeholder="Password">
            </div>
            <button class="button is-success" type="submit">Sign in</button>

            <Message v-if="hasMessage.isShow" :message="hasMessage.message" :type="hasMessage.type" />
            <div>
                <p>¿Ya eres miembro? <router-link :to="{name:'login'}">Log in</router-link>
                </p>
            </div>

        </form>

    </div>

</template>
<script setup>
import { ref } from 'vue'
import { registro } from '../api/index'
import Message from '../components/Message.vue';

const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const hasMessage = ref({
    message: '',
    type: '',
    isShow: false
})

const onSubmit = async () => {
    if (password.value === passwordConfirm.value) {
        console.log('formulario enviado', email.value, password.value)
        // registro(email, password);
        const response = await registro(email.value, password.value)
        if (response) {

            hasMessage.value.message = 'Por favor revisa tu email y haz click en la confirmacion'
            hasMessage.value.type = 'is-success'
            hasMessage.value.isShow = true
        }
        else {

            hasMessage.value.message = 'Por favor revisa los datos'
            hasMessage.value.type = 'is-danger'
            hasMessage.value.isShow = true
        }
    }
    else {
        hasMessage.value.message = 'Confirma el password correctamente'
        hasMessage.value.type = 'is-danger'
        hasMessage.value.isShow = true
    }
};
    //si es false el response entonces habria que enviar un mensaje de que ha habido un error email valido
    // authStore.login(email.value,id)





</script>
<style scoped>

.title{
    color:#91928caf;
}
.flex {
    padding: 30px;
    display: flex;
    flex-direction: column;

}
</style>