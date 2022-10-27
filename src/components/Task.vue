<template>
    <div v-if="!editMode" class="card" :class="props.task.isDone ? 'is-done ' : ''" > 
        <header class="card-header" :class="props.task.isDone ? ' text-done' : ''">
            <p class="card-header-title ">
                Task: {{props.task.title}}
            </p>
        </header>
        <div class="card-content " >
            <div class="content br" :class="props.task.isDone ? ' text-done' : ''"> 
                {{props.task.description}}
            </div>
                <div >
                    <time class="time" datetime="2016-1-1">{{relativeTime}}</time>
                </div>
        </div>
        <footer v-if="!props.task.isDone"  class="card-footer">
            <!-- <a @click="taskDone" href="#" class="card-footer-item">Done</a> -->
            <i @click="taskDone" class="fa-solid fa-square-check card-footer-item"></i>
            <!-- <a @click="editTaskBoard" href="#" class="card-footer-item">Edit</a> -->
            <i @click="editTaskBoard" class="fa-regular fa-pen-to-square card-footer-item"></i>
            <!-- <a @click="onDeletebutton" href="#" class="card-footer-item">Delete</a> -->
            <i @click="onDeletebutton" class="fa-solid fa-trash card-footer-item"></i>
        </footer>
        <footer v-if="props.task.isDone"  class="card-footer">
            <!-- <a @click="taskDone" href="#" class="card-footer-item">Done</a> -->
            <i @click="taskDone" class="fa-solid fa-rotate-right card-footer-item"></i>
            <!-- <a @click="onDeletebutton" href="#" class="card-footer-item">Delete</a> -->
            <i @click="onDeletebutton" class="fa-solid fa-trash card-footer-item"></i>
        </footer>
        <Modalquestion @yes="deleteTaskBoard" @no="onDeletebutton" :modal="modal" />
        <!-- <Messagequestion  @Yes="deleteTaskBoard" @No="cancelDelete" v-if="modal.isShow" :message="message.message"/> -->
    </div>
    <div v-else>
        <Modaledit @done="doneEdit" @cancel="cancelEdit" :modal="modal" :taskEdited="taskEdited" />
    </div>
</template>
<script setup>
//--------------IMPORTACION---------------
import { ref } from 'vue'
import { useTaskStore } from '../store/index'
import { deleteTask, updateTask, updateTaskDone } from '../api/index'
import Modalquestion from './Modalquestion.vue';
import Modaledit from './Modaledit.vue';
import { formatRelativeTime} from '../helpers/index'


//--------------VARIABLES---------------
const taskStore = useTaskStore();
const editMode = ref(false);
// const tasksDone = ref([])
const done = ref(false)
const props = defineProps({
    task: Object
});

const modal = ref({
    message: '¿Estás seguro?',
    isShow: false
})

// const isDone = ref(false)

const taskEdited = ref({
    title: props.task.title,
    description: props.task.description,
    isDone: false
    
})

console.log('valor taskstore',  taskStore.tasks)
const relativeTime = formatRelativeTime(props.task.created_at);

//--------------BORRAR TASKS---------------

const onDeletebutton = () => {
    modal.value.isShow = !modal.value.isShow;
    console.log(modal.value.isShow)
}

const deleteTaskBoard = async () => {
    modal.value.isShow = !modal.value.isShow;
    taskStore.deleteTask(props.task.id)
    await deleteTask(props.task.id)
 
}

//---------------EDITAR TASKS--------------

const editTaskBoard = () => {
    editMode.value = true;
}

const cancelEdit = async () => {
    editMode.value = false;
    taskEdited.value.title = props.task.title
    taskEdited.value.description = props.task.description
    //se puede escribir también como está debajo
    // taskEdited.value = {
    //     title: props.task.title,
    //     description: props.task.description
    // }
}
const doneEdit = async () => {
    editMode.value = false;
    
    // await updateTask()
    await updateTask(props.task.id, taskEdited.value)
    taskStore.updateTask(props.task.id, taskEdited.value)

}

//---------------MARCAR TASK DONE--------------
const taskDone = async () => {
    
    taskEdited.value.isDone = !taskEdited.value.isDone
    done.value = !done.value
    await updateTaskDone(props.task.id, taskEdited.value.isDone)
    taskStore.updateTask(props.task.id, taskEdited.value)
    console.log('valor', props.task.id,  taskEdited.value)
   

};

</script>
<style scoped>
.text-done{
    text-decoration: line-through;

}
.is-done {
    background-color:var(--button-bar);
}

.time{
    
    color:var(--text-color-secondary);
}

.card{
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.br{
    white-space:break-spaces;
}
</style>