<template>
  <div>
    <Header @toggle-sidebar="toggleSidebar" />
    <SidebarMenu :visible="isSidebarVisible" @close="closeSidebar" />
    <Cardapio :isSidebarVisible="isSidebarVisible" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SidebarMenu from "@/components/SidebarMenu.vue";
import Cardapio from "@/components/Cardapio.vue";

export default {
  components: {
    Header,
    SidebarMenu,
    Cardapio,
  },
  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};
</script>
