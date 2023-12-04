<template>
  <div>
    <h1>Lista de Usuários</h1>
    <!-- <ul>
      <li v-for="user in users" :key="user.id">Nome:{{ user.name }} Email:{{ user.email }}</li>
    </ul> -->
  </div>
</template>

<script>
import api from "../services/api";
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchCardapio();
  },
  methods: {
    async fetchCardapio() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cardapio/');
        this.cardapio = response.data;
      } catch (error) {
        console.error('Erro ao obter dados do cardápio:', error);
      }
    },
  },
};
</script>
