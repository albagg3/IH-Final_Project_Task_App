<template>
    <div class="section wholepage">
        <button  @click="openTask" class="button is-success">Add new task</button>
        <div>
            <progress class="progress mt-2 mb-2" :value="completedTask/totalTask*100" max="100"></progress>
        </div>
        <div>
            {{completedTask}}/{{totalTask}}
        </div>
    <div v-if="!addTask" class="mb-2">
        <button @click="filter = 0" class="button mr-2">To do</button>
        <button @click="filter = 1" class="button mr-2">Done</button>
        <button @click="filter = 2" class="button">All</button>
    </div>
    <div v-if="addTask" class="mb-2">
        <form @submit.prevent="onSubmit">
            <div class="p-2">
                <label for="">Task name</label>
                <input v-model="task.title" class="input is-success" type="text" placeholder="Task name">
            </div>
            <div class="p-2">
                <label for="">Task</label>
                <textarea v-model="task.description" class="input is-success" type="text"
                    placeholder="Task"> </textarea>
            </div>
            <button @click="addTaskBoard" class="button is-success" type="submit">Done</button>
            <button @click="closeTask" class="button is-danger ml-2" type="submit">Cancel</button>
        </form>

    </div>
    <!-- is-mobile es para si en movil no vas a poner una sola columna y vas a poner 2 por ejemplo sino no haria 
    falta ni el is-mobile ni el is-12-mobile -->
    <div  class="columns is-multiline is-mobile">
        <div v-for="task in tasksComp" class="column is-3-desktop is-6-tablet is-12-mobile" :key="task.id">
            <Task :task="task" />
        </div>
    </div>
    
</div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
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



// ABRIR Y CERRAR EL INPUT PARA ESCRIBIR TAREA
const openTask = () => {
    addTask.value = true
}
const closeTask = () => {
    addTask.value = false
}
//---FILTRANDO TAREAS-----------
const filter = ref(2)

const tasksComp = computed(()=>{
    if(filter.value === 0)
        return taskStore.tasks.filter(task => task.isDone === false)
    if(filter.value === 1)
        return taskStore.tasks.filter(task => task.isDone === true)
    if(filter.value === 2)
        return taskStore.tasks
})

//--TAREAS COMPLETED / TAREAS TOTALES para PROGRESS BAR-----
const totalTask = computed(()=>{
    return taskStore.tasks.length
})

const completedTask = computed(()=>{
    const completed = taskStore.tasks.filter(task => task.isDone === true)
    return completed.length
    
})

//----LA LLAMAMOS EN EL ONMOUNTED PARA QUE NOS MUESTRE EL TABLON DE TAREAS---
//se tiene que  ejecutar cuando el componente se monte porque es el tablero con las tareas
const taskBoard = async () => {
    const response = await getTasks();
    taskStore.setTask(response)   //añade la task al array del store
    console.log(response)
    return response
}

//------------AÑADE UNA TAREA Y NOS ACTUALIZA EL TABLON DE TASKS-------------
//cuando clickamos en el done, nos añade la tarea al array del store y al del supabase
const addTaskBoard = async () => {
    addTask.value = false
    await newTask(task.value);            //añade la task a supabase
    await taskBoard();//vuelve a pedir las tareas a supabase
    task.value.description = '';
    task.value.title = '';
}


//---NOS TIENE QUE MOSTRAR LAS TAREAS QUE SE QUEDAN GUARDADAS DE OTROS DIAS----
onMounted(async () => {
    await taskBoard();
});


</script>
<style scoped>
.wholepage{
    min-height: calc(100vh - 224px);
}
</style>