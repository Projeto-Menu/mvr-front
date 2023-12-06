<template>
  <header class="bg-[#0a3740] text-white h-20 flex items-center pl-5">
      <button @click="toggleSidebar" class="text-3xl">
        &#9776;
      </button>
      <router-link to="/" class="font-bold ml-4 text-3xl">My Menu</router-link>
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
      this.$emit("toggle-sidebar");
    },
  },
};
</script>

