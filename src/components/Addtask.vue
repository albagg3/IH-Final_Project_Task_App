<template>
    <button @click="openTask" class="button is-success">Add new task</button>
    <div v-if="addTask">
        <form @submit.prevent="onSubmit">
            <div class="p-2">
                <label for="">Task name</label>
                <input v-model="task.title" class="input is-primary" type="text" placeholder="Task name">
            </div>
            <div class="p-2">
                <label for="">Task</label>
                <input v-model="task.description" class="input is-primary" type="text" placeholder="Task">
            </div>
            <button @click="addTaskBoard" class="button is-primary" type="submit">Done</button>
            <button @click="closeTask" class="button is-danger" type="submit">Cancel</button>
        </form>

    </div>
    <div class="columns is-multiline is-mobile">
        <div  v-for="task in oldTasks" class="column is-3-desktop is-6-tablet is-12-mobile" >
            <Task :task="task" />
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { newTask, getTasks } from '../api/index'
import { useAuthStore, useTaskStore } from '../store/index'
import Task from '../components/Task.vue'

const authStore = useAuthStore();
const taskStore = useTaskStore();
const addTask = ref(false)
const task = ref({
    user_id: authStore.id,
    title: '',
    description: ''
})
let oldTasks = ref([])



const openTask = () => {
    addTask.value = true

}
const closeTask = () => {
    addTask.value = false
}

//se tiene que  ejecutar cuando el componente se monte porque es el tablero con las tareas
const taskBoard = async () => {
    const response = await getTasks();
    console.log(response)
    return response
}
//cuando clickamos en el done, nos añade la tarea al array del store y al del supabase
const addTaskBoard = async () => {
    taskStore.setTask(task.value)   //añade la task al array del store
    await newTask(task.value);            //añade la task a supabase
    console.log(taskStore.tasks)
}

onMounted(async () => {

    oldTasks.value = await taskBoard();

});


</script>
<style scoped>

</style>