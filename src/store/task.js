import { defineStore } from 'pinia'
import { deleteTask, logOut, updateTask } from '../api';

export const useTaskStore = defineStore('task', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            //guardaremos los task que nos de supabase
            tasks: []
        }
    },
    actions:{
        setTask(){
            //TODO guardar en el state las tasks que nos de supabase
        },
        updateTask(id, task){
            // TODO modificar el estado de la task
            //Encontrar el indice de la task con ese id y cambiar el contenido con task
        },
        deleteTask(id){
            //TODO modificar el estado borrando esa task
            //Encontrar el indice de ese id y eliminamos ese indice del array
        },
        addTask(task){
            //TODO modificar el estado de task haciendo un push de la task
            //comprobar que tenemos el id al insertar el registro, en caso de no tenerlo habria que hacer el getTask
        }
        // getFilterdtasks(){

        // }
    }
})