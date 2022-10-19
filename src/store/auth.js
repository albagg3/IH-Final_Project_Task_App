import { defineStore } from 'pinia'
import { logOut } from '../api';

export const useAuthStore = defineStore('auth', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            //nos indicara si el usuari esta autenticado
            isAuth: false,
            //guardaremos el id de supabase que nos dara al hacer el login
            id: undefined,
            email: undefined
        }
    },
    actions:{
        login(email,id){
            //TODO cambiar el estado de autenticacion e id del usuario se puede hacer la llamada a supabase desde aqui o hacerlo desde fuera
            //Es mejor hacerlo desde fuera
            this.isAuth = true;
            this.email= email;
            this.id = id
        },
        logOut(){
            //TODO cambiar el estado de autenticacion e id del usuario es decir el isAuth a false y el id a undefined
        }
    }
})