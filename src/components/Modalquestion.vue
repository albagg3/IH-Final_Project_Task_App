<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                {{props.message}}
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">yes</button>
                <button class="button">No</button>
            </footer>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    message: String
    
    
});
</script>
<style scoped>

</style>