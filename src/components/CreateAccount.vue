<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const authStore = useAuthStore();

const name = ref("");
const role = ref("");
const login = ref("");
const password = ref("");
const errorMessage = ref("");

const handleRegistration = async () => {
  try {
    await authStore.signup(name.value, role.value, login.value, password.value);
    errorMessage.value = "Votre compte est enregistre";
  } catch (err) {
    errorMessage.value =
      "Échec de creation du compte. Vérifiez vos informations.";
  }
};
</script>
<template>
  <div class="connectionForm">
    <form @submit.prevent="handleRegistration">
      <label for="name">Votre nom</label>
      <input
        v-model="name"
        type="text"
        id="name"
        placeholder="John Doe"
        required="true"
      />
      <label for="role">Choisissez votre rôle</label>
      <select v-model="role" id="role" required="true">
        <option value="Benevole">Bénevole</option>
        <option value="association">Association</option>
      </select>
      <label for="username">Nom d'Utilisateur</label>
      <input
        v-model="login"
        type="text"
        id="username"
        placeholder="Votre nom d'utilisateur"
        required="true"
      />
      <label for="password">Mot de pass</label>
      <input
        v-model="password"
        type="password"
        id="password"
        placeholder="Mot de pass"
        required="true"
      />
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <button type="submit">Créer un compte</button>
    </form>
  </div>
</template>
