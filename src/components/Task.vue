<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Task # {{props.task.title}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <div class="content">
                {{props.task.description}}
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item">Done</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a @click="deleteTaskBoard" href="#" class="card-footer-item">Delete</a>
        </footer>
    </div>
</template>
<script setup>
import {useTaskStore} from '../store/index'

const taskStore = useTaskStore();

const props = defineProps({
    task: Object
});

// console.log(props.task.id)
const deleteTaskBoard = () => {
    
    taskStore.deleteTask(props.task.id)
    //TODO me falta borrarlas de supabase
    // console.log('props:',props.task)
}


</script>
<style scoped>

</style>