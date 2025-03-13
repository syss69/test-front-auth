import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", {
  state: () => ({ user: null }),
  actions: {
    async getUserFromStroage() {
      return this.user;
    },

    async login(login, password) {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/login`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ login, password }),
        }
      );
      console.log(response.body);
      if (!response.ok) throw new Error("Login failed");
    },

    async signup(name, role, login, password) {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/create`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, role, login, password }),
        }
      );

      if (!response.ok) {
        console.error("Signup failed", response);
        throw new Error(response.message);
      }
    },

    async getUserData() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/users/me`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      this.user = data;
      return data;
    },

    async checkAuth() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/check`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!response.ok) throw new Error("Not authenticated");
        return true;
      } catch (error) {
        this.user = null;
        return false;
      }
    },
  },
});
