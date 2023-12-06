<template>
    <div :class="{ 'ml-72': isSidebarVisible }">
      teste Sobreapp
    </div>
  </template>
  
  <script>
  import Carousel from "primevue/carousel";
  import TabMenu from "primevue/tabmenu";
  import Fieldset from "primevue/fieldset";
  import Panel from "primevue/panel";
  
  export default {
    components: {
      Carousel,
      TabMenu,
      Fieldset,
      Panel,
    },
    props: {
      isSidebarVisible: Boolean,
    },
    data() {
      return {
        refecao: [
          { label: "Almoço", icon: "pi pi-home" },
          { label: "Janta", icon: "pi pi-chart-line" },
        ],
      };
    },
  };
  </script>
  