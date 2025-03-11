import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({ user: null }),

  actions: {
    async login(login, password) {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) throw new Error("Login failed");
    },

    async signup(name, role, login, password) {
      const response = await fetch("http://localhost:3000/users/create", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, login, password }),
      });

      if (!response.ok) {
        console.error("Signup failed", response);
        throw new Error(response.message);
      }
    },

    async getUserData() {
      const user = await fetch("http://localhost:3000/users/me");
      this.user = user;
      console.log(user);
    },

    async checkAuth() {
      try {
        const response = await fetch("http://localhost:3000/check", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) throw new Error("Not authenticated");
        return true;
      } catch (error) {
        this.user = null;
        return false;
      }
    },
  },
});
