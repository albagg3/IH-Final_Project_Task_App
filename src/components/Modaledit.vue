<template>
    <!-- <div class="modal" :class="props.modal.isEdit ? 'is-active' : ' '"> -->
    <div class="modal is-active">
        <div @click="onNo" class="modal-background"></div>
        <div class="modal-card ">
            <header class="modal-card-head">
                <button @click="onCancel" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <header class="card-header">
                    <input v-model="props.taskEdited.title" class="input is-primary">
                    <button class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </header>
                <div class="card-content">
                    <input v-model="props.taskEdited.description" class="input is-primary">
                </div>
            </section>
            <footer class="modal-card-foot">
                <button @click="onDone" class="button is-success">Done</button>
                <button @click="onCancel" class="button">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';

const emits = defineEmits(['Done', 'Cancel'])
const onDone = () => {
    emits('Done')
}
const onCancel = () => {
    emits('Cancel')
}
const props = defineProps({
    modal: Object,
    taskEdited: Object

});


</script>
<style scoped>

</style>