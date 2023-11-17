<template>
    <div v-if="visible" class="fixed inset-y-0 left-0 top-16 bg-gray-800 p-4">
      <ul class="mt-4 space-y-2">
        <router-link to="/cardapio" @click="closeSidebar">
          <li class="text-white">Cardápio</li>
        </router-link>
        <router-link to="/sobre" @click="closeSidebar">
          <li class="text-white">Sobre Nós</li>
        </router-link>
        <router-link to="/contato" @click="closeSidebar">
          <li class="text-white">Contato</li>
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
    },
    methods: {
      closeSidebar() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos específicos do componente aqui, se necessário */
  </style>
  