<template>
    <div v-if="!editMode" class="card">
        <header class="card-header">
            <p class="card-header-title ">
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
            <a @click="editTaskBoard" href="#" class="card-footer-item">Edit</a>
            <a @click="onDeletebutton" href="#" class="card-footer-item">Delete</a>
        </footer>
        <Modalquestion @Yes="deleteTaskBoard" v-if="modal.isShow" :mesagge="modal.message"/>
        <!-- <Message  v-if="modal.isShow" :mesagge="message.message"/> -->
    </div>
    <div v-else>
        <header class="card-header">
            <input v-model="taskEdited.title" class="input is-primary">
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content">
            <input v-model="taskEdited.description" class="input is-primary">
        </div>
        <footer class="card-footer">
            <a @click="doneEdit" href="#" class="card-footer-item">Done</a>
            <a @click="cancelEdit" href="#" class="card-footer-item">Cancel</a>
        </footer>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useTaskStore} from '../store/index'
import {deleteTask, updateTask} from '../api/index'
import Modalquestion from './Modalquestion.vue';
import Message from './Message.vue';

const taskStore = useTaskStore();
const editMode = ref(false);

const props = defineProps({
    task: Object
});


const modal=ref( {
    message: '¿Estás seguro?',
    isShow:false
})

// const message=ref( {
//     message: '¿Estás seguro?',
//     isShow:false
// })

const taskEdited = ref({
    title: props.task.title,
    description: props.task.description
})
//--------------BORRAR TASKS---------------
// console.log(props.task.id)
const onDeletebutton = ()=>{
    modal.value.isShow= true;
    console.log(modal.value.isShow)

}

const deleteTaskBoard =async () => { 
    taskStore.deleteTask(props.task.id)
    await deleteTask(props.task.id)
}

//---------------EDITAR TASKS--------------

const editTaskBoard = () => {
    editMode.value= true;
}

const cancelEdit = async () =>{
    editMode.value= false;
    taskEdited.value.title= props.task.title
    taskEdited.value.description = props.task.description
    //se puede escribir también como está debajo
    // taskEdited.value = {
    //     title: props.task.title,
    //     description: props.task.description
    // }
    // await updateTask(props.task.id, props.task)
    // taskStore.updateTask(props.task.id, props.task.description)
}
const doneEdit = async () =>{
    editMode.value= false;
    
    // await updateTask()
    await updateTask(props.task.id, taskEdited.value)
    taskStore.updateTask(props.task.id, taskEdited.value)
    
}

</script>
<style scoped>

</style>