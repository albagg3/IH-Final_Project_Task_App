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
    <!-- is-mobile es para si en movil no vas a poner una sola columna y vas a poner 2 por ejemplo sino no haria 
    falta ni el is-mobile ni el is-12-mobile -->
    <div class="columns is-multiline is-mobile">
        <div  v-for="task in taskStore.tasks" class="column is-3-desktop is-6-tablet is-12-mobile" :key="task.id" >
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


console.log(taskStore.tasks)
// ABRIR Y CERRAR EL INPUT PARA ESCRIBIR TAREASA
const openTask = () => {
    addTask.value = true
}
const closeTask = () => {
    addTask.value = false
}

// LA LLAMAMOS EN EL ONMOUNTED PARA QUE NOS MUESTRE EL TABLON DE TAREAS
//se tiene que  ejecutar cuando el componente se monte porque es el tablero con las tareas
const taskBoard = async () => {
    const response = await getTasks();
    taskStore.setTask(response)   //añade la task al array del store
    console.log(response)
    return response
}

//AÑADE UNA TAREA Y NOS ACTUALIZA EL TABLON DE TASKS
//cuando clickamos en el done, nos añade la tarea al array del store y al del supabase
const addTaskBoard = async () => {
    console.log('entra',task.value)
    await newTask(task.value);            //añade la task a supabase
    await taskBoard();//vuelve a pedir las tareas a supabase
    task.value.description = '';
    task.value.title= '';
}



//  NOS TIENE QUE MOSTRAR LAS TAREAS QUE SE QUEDAN GUARDADAS DE OTROS DIAS
onMounted(async () => {
    console.log(taskStore.tasks)
    await taskBoard();
});


</script>
<style scoped>

</style>