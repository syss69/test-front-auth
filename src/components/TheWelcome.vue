<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();

const user = ref(null);
const missions = ref([]);

const getMissions = async () => {
  let response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/mission/actual`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  response = await response.json();
  return response.missions;
};

onMounted(async () => {
  user.value = await authStore.getUserData();
  missions.value = await getMissions();
});
</script>

<template>
  <h1>Bienvenue sur le plateforme!</h1>
  <p>Nous sommes besoin de toi!</p>
  <div class="page-content">
    <div v-if="user">
      <div v-if="user.role == 'Association'" class="new-mission">
        <h2>Voulez-vous creer une nouvelle mission?</h2>
        <button>Creer</button>
      </div>
    </div>
    <h1>Le liste des missions actueles:</h1>
    <div v-if="missions" class="missions-list">
      <div v-if="missions.length == 0">
        <h3>Pour cette moment il n'y a pas des missions</h3>
      </div>
      <div v-else>
        <ul>
          <div v-for="mission in missions" class="mission-ul">
            <li>
              <div class="mission">
                <div class="mission-info">
                  <h2>{{ mission.title }}</h2>
                  <p>{{ mission.description }}</p>
                </div>
                <button>Postuler</button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page-content {
  display: flex;
  flex-direction: column;
}
.new-mission {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mission {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
}
button {
  width: 6rem;
}
</style>
