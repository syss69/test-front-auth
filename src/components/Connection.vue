<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const handleLogin = async () => {
  try {
    await authStore.login(username.value, password.value);
    router.push("/");
    await authStore.getUserData();
  } catch (error) {
    errorMessage.value = "Échec de connexion. Vérifiez vos informations.";
  }
};
</script>
<template>
  <div class="connectionForm">
    <form @submit.prevent="handleLogin">
      <label for="username">Nom d'Utilisateur</label>
      <input
        v-model="username"
        type="text"
        id="username"
        placeholder="Votre nom d'utilisateur"
      />
      <label for="password">Mot de pass</label>
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="Mot de pass"
      />
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>
