<template>
  <div class="h-screen bg-[#fffcf7]">
    <Header @toggle-sidebar="toggleSidebar" />
    <SidebarMenu
      :visible="isSidebarVisible"
      @close="closeSidebar"
      @buttonClick="show"
    />
    <component
      :is="isCardapioActive ? 'Cardapio' : activeComponent"
      :isSidebarVisible="isSidebarVisible"
    />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import SidebarMenu from "@/components/SidebarMenu.vue";
import Cardapio from "@/components/Cardapio.vue";
import SobreRu from '../components/SobreRu.vue';
import Dicas from '../components/Dicas.vue';
import Sobre from '../components/Sobre.vue';
import Contatos from '../components/Contatos.vue';

export default {
  components: {
    Header,
    SidebarMenu,
    Cardapio,
    SobreRu,
    Dicas,
    Sobre,
    Contatos,
  },
  data() {
    return {
      isSidebarVisible: false,
      activeComponent: 'Cardapio',
      lastClickedComponent: null,
    };
  },
  
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    show(component) {
      if (component !== this.lastClickedComponent) {
        this.activeComponent = component;
        this.lastClickedComponent = component;
      }
    },
    closeSidebar() {
      this.isSidebarVisible = false;
      this.activeComponent = null; // Fechar o componente ao fechar a barra lateral
      this.lastClickedComponent = null;
    },
  },
};
</script>
