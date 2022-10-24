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
    actions: {
        setTask(task) {
            
            this.tasks = task 
            //TODO guardar en el state las tasks que nos de supabase
            //como supabase no nos da el id de la task no podemos hacer un push
            //sino que igualamos al array que nos devuelve
        },
        updateTask(id, taskedit) {
            // TODO modificar el estado de la task
            const index= this.tasks.findIndex(task => task.id === id)
            this.tasks[index] = {
                //clonamos el objeto del array task y sobreescribimos los valores que hay en taskedit
                ...this.tasks[index],
                ...taskedit
            }
            console.log('esta aqui en el store',this.tasks[index].isDone)


            
            //Encontrar el indice de la task con ese id y cambiar el contenido con task
        },
        deleteTask(id) {
            console.log(id,this.tasks.length)
            //BUSCAMOS EL INDEX   Y BORRAMOS ESE INDEX
            const index= this.tasks.findIndex(task => task.id === id)
            this.tasks.splice(index, 1)
            //TODO modificar el estado borrando esa task
            //Encontrar el indice de ese id y eliminamos ese indice del array
        },
        addTask(task) {
            //TODO modificar el estado de task haciendo un push de la task
            //comprobar que tenemos el id al insertar el registro, en caso de no tenerlo habria que hacer el getTask
        }
        // getFilterdtasks(){

    
    },
    // persist: {
    //     enabled: true,
    //     strategies:[
    //         {
    //             key: 'login',
    //             storage: localStorage,
    //         },
    //     ],
    // },
})