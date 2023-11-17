<template>
    <div :class="{ 'ml-60': sidebarVisible }" class="min-h-screen bg-red-500 flex">
      <div class="flex-1">
        <h2 class="text-3xl font-semibold mt-8 mb-4">Cardápio</h2>
        <div v-for="(dia, index) in diasSemana" :key="index">
          <h3 class="text-xl font-semibold mt-4">{{ dia.nome }}</h3>
          <ul>
            <li v-for="(prato, pratoIndex) in dia.pratos" :key="pratoIndex">
              {{ prato }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import SidebarMenu from "@/components/SidebarMenu.vue";
  
  export default {
    components: {
      Header,
      SidebarMenu,
    },
    data() {
      return {
        sidebarVisible: false,
        diasSemana: [
          {
            nome: "Segunda",
            pratos: ["Prato 1", "Prato 2", "Prato 3"],
          },
          {
            nome: "Terça",
            pratos: ["Prato A", "Prato B", "Prato C"],
          },
          // Adicione os demais dias da semana com seus respectivos pratos
        ],
      };
    },
    methods: {
      closeSidebar() {
        this.sidebarVisible = false;
      },
    },
  };
  </script>
  