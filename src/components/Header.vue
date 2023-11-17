<template>
  <header class="bg-blue-800 text-white h-16 flex items-center pl-5">
      <button @click="toggleSidebar" class="text-xl text-green-400">
        &#9776;
      </button>
      <router-link to="/" class="text-xl font-bold ml-2">My Menu</router-link>
      <SidebarMenu :visible="sidebarVisible" @close="closeSidebar" />
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

