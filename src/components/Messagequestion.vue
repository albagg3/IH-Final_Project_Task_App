<template>

    <article class="message " :class="[props.type]">
        <div class="message-body">
            {{props.message}}
           
        </div>
    </article>

    <button @click="onYes" class="button is-success">yes</button>
    <button @click="onNo" class="button">No</button>

</template>

<script setup>
import { defineEmits } from 'vue';

const emits = defineEmits(['Yes', 'No'])
const onYes = () => {
    emits('Yes')
}
const onNo = () => {
    emits('No')
}
const props = defineProps({
    message: String

});
</script>
<style scoped>

</style>