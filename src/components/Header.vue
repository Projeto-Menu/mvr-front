<template>
  <header class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex items-center">
      <button @click="toggleSidebar" class="text-xl text-blue-400">
        &#9776;
      </button>

      <router-link to="/" class="text-xl font-bold ml-2">My Menu</router-link>
      <SidebarMenu :visible="sidebarVisible" @close="closeSidebar" />
    </div>
  </header>
</template>

<script>
import SidebarMenu from "@/components/SidebarMenu.vue";

export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      sidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    closeSidebar() {
      this.sidebarVisible = false;
    },
  },
};
</script>

<style scoped>
/* Adicione estilos específicos do componente aqui, se necessário */
</style>
