<template>
    <div :class="{ 'ml-72': isSidebarVisible }">
      
    </div>
  </template>
  
  <script>
  export default {
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
  