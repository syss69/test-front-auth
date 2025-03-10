import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useMissionsStore = defineStore("missionsStore", {
    state: () => ({
        missions: useLocalStorage("missions", [])
    }),

    getteres: {
        getMissions(){
            return this.missions
        }
    },

    actions: {
        async fetchMissions(){
            try{
                const res = await fetch("http://localhost:3000/mission/actual")
                this.missions = await res.json()
            }catch (error) {
                router.push('/404')
              }
        },
        async createMission(title, description){
            try{
                const res = await fetch("http://localhost:3000/mission/create", {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title, description }),
                })
        }catch(err){
            console.log(err.message)
        }
    }
}
})