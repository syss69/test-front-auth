<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const user = ref(null);

onMounted(async () => {
  user.value = await authStore.getUserData();
});
</script>
<template>
  <div class="pageContent">
    <div class="pictureContainer"></div>
    <div class="descriptionContainer">
      <h1 v-if="user">{{ user.name }}</h1>
      <h3 v-if="user">{{ user.role }}</h3>
    </div>
    <div class="missionsContainer">
      <h2>Vos missions:</h2>
      <ul v-if="user" v-for="mission in user.missions" class="mission">
        <li>
          <h3>{{ mission.title }}</h3>
          <p>{{ mission.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.pageContent {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.pictureContainer {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: aqua;
}
</style>
