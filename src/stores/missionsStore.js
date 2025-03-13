import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useMissionsStore = defineStore("missionsStore", {
  state: () => ({
    missions: useLocalStorage("missions", []),
  }),

  getteres: {
    getMissions() {
      return this.missions;
    },
  },

  actions: {
    async fetchMissions() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/mission/actual`
        );
        const data = await res.json();
        this.missions = data.missions;
      } catch (error) {
        router.push("/404");
      }
    },
    async createMission(title, description) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/mission/create`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description }),
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
