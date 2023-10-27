<template>
  <div class="h-screen bg-green-500">
    <Login />
  </div>
</template>

<script>
import Login from "./components/Login/Login.vue";
import Cabeca from "./components/Cabeca.vue";

export default {
  name: "App",
  components: {
    Login,
    Cabeca,
  },
};
</script>
