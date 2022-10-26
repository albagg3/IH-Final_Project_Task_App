import { defineStore } from 'pinia'


export const useThemeStore = defineStore('theme', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            isTheme: false,
        }
    },
    actions:{
        setTheme(){
            this.loadTheme();
        },
        loadTheme(){
            if(this.isTheme)
                document.documentElement.className = 'dark'
            else
                document.documentElement.className = 'light'
        }
    },
    persist: {
        enabled: true,
        strategies:[
            {
                key: 'theme',
                storage: localStorage,
            },
        ],
    },
})