import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)



//registrar un usuario, ir a la parte de identificacion y dar un nuevo usuario
// Es lo que pondriamos cuando nos registramos en la aplicacion
//lo usaremos en la vista de registro
export const registro = async (email, password) => {
    const result = await supabase.auth.signUp({
        email: email,
        password: password
    })
    console.log('result',result)
    //si supabase nos devuelve un error entonces devolvemos false 
    //porque no se ha podido llevar a cabo del registro
    if(result.error)
        return false
    return true
    //TODO identificar el result y retornar lo que nos interesa

}


//nos identificamos con nuestro usuario
//lo usaremos en la vista de login
export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    if (response.error)
        return false
    // return response.data.user.id
    return response.data.user.id
}


//crearemos las tasks

// task :{
//     user_id: id,
//     title: 'Titulo',
//     description: 'Descripcion del task'
//   }

export const newTask = async (task) => {
    const response = await supabase.from('task')
        .insert(task)
    console.log(response)
    //TODO identificar la respuesta y retornar lo que necesitamos
    //por ejemplo true si se ha insertado el registro y false si no se ha insertado
    // el response no retorna el id de la task que se ha creado tendriamos que volver a hacer un getTask para obtener los id
}

//Obtendremos todas las tasks del usuario
//funcion para leer los datos 
export const getTasks = async () => {
    const response = await supabase
        .from('task')
        .select('*')
        .order('id', { ascending: false })
    console.log(response)
    return response.data

    //TODO Retornar la información de los task por ejemplo return response.data
}

//Modificamos el contendido de la tabla en el registro id que hemos indicado

//task:{
//     title: 'Titulo modificado',
//     description: 'Descripción del task modificado'
//   }
export const updateTask = async (taskId, task) => {
    const response = await supabase
        .from('task')
        .update(task)
        .eq('id', taskId)
    console.log(response);
    //TODO Identificar el resultado y retornar lo que nos interesa por ejemplo true si ha ido bien y false si ha fallaado
}

export const updateTaskDone = async (taskId, isDone) => {
    const response = await supabase
        .from('task')
        .update({ isDone: isDone })
        .eq('id', taskId)
    console.log(response);
    //TODO Identificar el resultado y retornar lo que nos interesa por ejemplo true si ha ido bien y false si ha fallaado
}

export const deleteTask = async (taskId) => {
    const response = await supabase
        .from('task')
        .delete()
        .eq('id', taskId)
    console.log(response)
    //TODO Identificar el resultado y retornar lo que nos interesa por ejemplo true si ha ido bien y false si ha fallaado
}

export const logOut = async () => {
    //en supabase en api en user management vienen estas funciones
    const response = await supabase.auth.signOut();
    //TODO Identificar el resultado y retornar lo que nos interesa por ejemplo true si ha ido bien y false si ha fallaado
    //avisar al usuario de que has deslogueado
    console.log(response)
    if(response.error)
        return false
    return true
}
