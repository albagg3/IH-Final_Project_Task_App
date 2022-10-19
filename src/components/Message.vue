<template>
    <article class="message " :class="[props.type]">
        <div class="message-body">
            {{props.message}}
        </div>
    </article>
</template>
<script setup>
import{defineProps} from 'vue'

const props = defineProps({
    message: String,
    type: String

});
</script>
<style scoped>

</style>