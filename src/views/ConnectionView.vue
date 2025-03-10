<script >
import Connection from "../components/Connection.vue"
import CreateAccount from "@/components/CreateAccount.vue";
export default {
  components: { Connection, CreateAccount },
  data() {
    return {
      isLogin: true,
    };
  },
  computed: {
    currentComponent() {
      return this.isLogin ? "Connection" : "CreateAccount";
    },
  },
  methods: {
    toggleComponent() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>
<template>
    <div id="connection">
        <div id="header">
            <h1>Pour utiliser le plateforme vous devez être connecté</h1>
        </div>
        <component :is="currentComponent" />
        <div id="changeComponent">
            <button @click="toggleComponent" id="changeComponentButton">
        {{ isLogin ? "Créer un compte" : "Se connecter" }}
        </button>
        </div>
    </div>
</template>
<style>
#connection{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#header{
    display: flex;
    justify-content: center;
}

#changeComponent{
    display: flex;
    justify-content: center;
}

.connectionForm{
    display: flex;
    align-items: center;
    flex-direction: column;
}

form{
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}

input, select{
    border-radius: 7px;
    width: 40%;
    height: 2rem;
}

button{
    border-radius: 8px;
    width: 20%;
    height: 2rem;
    background-color: aqua;
    color:darkslategray;
}

#changeComponentButton{
    background-color: greenyellow;
    color:black
}
</style>