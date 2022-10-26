<template>
    <div class="section">
        <button  @click="openTask" class="button is-success">Add new task</button>
        <div>
            <progress class="progress mt-2 mb-2" :value="progress" max="100">15%</progress>
        </div>
    <div v-if="!addTask" class="mb-2">
        <button @click="onClickToDo" class="button mr-2">To do</button>
        <button @click="onClickDone" class="button mr-2">Done</button>
        <button @click="onClickAll" class="button">All</button>
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
    <div v-if="filterbyTodo" class="columns is-multiline is-mobile">
        <div v-for="task in tasksToDo" class="column is-3-desktop is-6-tablet is-12-mobile" :key="task.id">
            <Task :task="task" />
        </div>
    </div>
    <div v-else-if="filterbyDone" class="columns is-multiline is-mobile">
        <div v-for="task in tasksDone" class="column is-3-desktop is-6-tablet is-12-mobile" :key="task.id">
            <Task :task="task" />
        </div>
    </div>
    <div v-else class="columns is-multiline is-mobile ">
        <div v-for="task in taskStore.tasks" class="column is-3-desktop is-6-tablet is-12-mobile" :key="task.id">
            <Task :task="task" />
        </div>
    </div>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { newTask, getTasks } from '../api/index'
import { useAuthStore, useTaskStore } from '../store/index'
import {percentageDone} from '../helpers/index'
import Task from '../components/Task.vue'


const authStore = useAuthStore();
const taskStore = useTaskStore();
const addTask = ref(false)
const task = ref({
    user_id: authStore.id,
    title: '',
    description: ''
})

const filterbyTodo = ref(false)
const filterbyDone = ref(false)

const tasksToDo = ref([])
const tasksDone = ref([])

let progress = ref(0)



// ABRIR Y CERRAR EL INPUT PARA ESCRIBIR TAREA
const openTask = () => {
    addTask.value = true
}
const closeTask = () => {
    addTask.value = false
}
//---FILTRANDO TAREAS-----------

const filterTodo = () => {
    tasksToDo.value = taskStore.tasks.filter(task => task.isDone === false)
}
const filterDone = () => {
    tasksDone.value = taskStore.tasks.filter(task => task.isDone === true)
    console.log('done tasks', tasksDone.value)
}
const onClickAll = () => {
    filterbyTodo.value = false
    filterbyDone.value = false
}
const onClickToDo = () => {
    filterbyTodo.value = true
    filterbyDone.value = false
    filterTodo();
}

const onClickDone = () => {
    filterbyDone.value = true
    filterbyTodo.value = false
    filterDone();
}

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
    progressBar()
    addTask.value = false
    await newTask(task.value);            //añade la task a supabase
    await taskBoard();//vuelve a pedir las tareas a supabase
    task.value.description = '';
    task.value.title = '';
}

//funcion que nos da la barra de progreso
const progressBar = () => {
    filterDone();
    progress.value = percentageDone(taskStore.tasks.length, tasksDone.value.length)
}
//---NOS TIENE QUE MOSTRAR LAS TAREAS QUE SE QUEDAN GUARDADAS DE OTROS DIAS----
onMounted(async () => {

    await taskBoard();
    progressBar()
    console.log(progress, taskStore.tasks.length, tasksDone.value.length )
});


</script>
<style scoped>

</style>