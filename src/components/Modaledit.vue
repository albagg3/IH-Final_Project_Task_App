<template>
    <!-- <div class="modal" :class="props.modal.isEdit ? 'is-active' : ' '"> -->
    <div class="modal is-active">
        <div @click="onNo" class="modal-background"></div>
        <div class="modal-card ">
            <header class="modal-card-head">
                <button @click="onCancel" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <header class="card-content">
                    <label for=""><strong>Task name</strong></label>
                    <input v-model="props.taskEdited.title" class="input is-success">
                </header>
                <div class="card-content">
                    <label for=""><strong>Task description</strong></label>
                    <textarea v-model="props.taskEdited.description" class="input is-success" type="text"
                    placeholder="Task"> </textarea>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button @click="onDone" class="button is-success">Done</button>
                <button @click="onCancel" class="button is-danger">Cancel</button>
            </footer>
        </div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';

const emits = defineEmits(['done', 'cancel'])
const onDone = () => {
    emits('done')
}
const onCancel = () => {
    emits('cancel')
}
const props = defineProps({
    modal: Object,
    taskEdited: Object

});


</script>
<style scoped>

</style>