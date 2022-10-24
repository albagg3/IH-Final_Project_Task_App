<template>
    <div class="modal" :class="props.modal.isShow ? 'is-active' : ' '">
        <div  @click="onNo" class="modal-background"></div>
        <div class="modal-card ">
            <header class="modal-card-head">

                <button @click="onNo" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                hola caracola
                {{props.modal.message}}
            </section>
            <footer class="modal-card-foot">
                <button @click="onYes" class="button is-success">yes</button>
                <button @click="onNo" class="button">No</button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';

const emits = defineEmits(['yes', 'no'])
const onYes = () => {
    emits('yes')
}
const onNo = () => {
    emits('no')
}
const props = defineProps({
    modal: Object

});


</script>
<style scoped>

</style>