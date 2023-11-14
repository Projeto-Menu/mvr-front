<template>
  <div>
    <h1>Lista de Usuários</h1>
    <ul>
      <li v-for="user in users" :key="user.id">Nome:{{ user.name }} Email:{{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.requisicao();
  },
  methods: {
    async requisicao() {
      const response = await api.get('users');
      console.log(response.data);
      this.users = response.data;
    },
  },
};
</script>
