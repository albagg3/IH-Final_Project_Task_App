<template>
    <div v-if="!editMode" class="card" :class="props.task.isDone ? 'is-done' : ''" > 
        <header class="card-header ">
            <p class="card-header-title ">
                Task # {{props.task.title}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content ">
            <div class="content">
                
                {{props.task.description}}
                <div>
                    <time datetime="2016-1-1">{{relativeTime}}</time>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <a @click="taskDone" href="#" class="card-footer-item">Done</a>
            <a @click="editTaskBoard" href="#" class="card-footer-item">Edit</a>
            <a @click="onDeletebutton" href="#" class="card-footer-item">Delete</a>
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
import { formatRelativeTime } from '../helpers/index'

//--------------VARIABLES---------------
const taskStore = useTaskStore();
const editMode = ref(false);

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
    await updateTaskDone(props.task.id, taskEdited.value.isDone)
    taskStore.updateTask(props.task.id, taskEdited.value)
    console.log('valor', props.task.id,  taskEdited.value  )

}





</script>
<style scoped>
.is-done {
    background-color:var(--button-bar);
    text-decoration: line-through;
}
</style>