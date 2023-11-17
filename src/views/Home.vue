<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Menu from "primevue/menu";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      menu: null,
      items: null,
    };
  },
  mounted() {
    this.requisicao();
  },
  methods: {
    async requisicao() {
      console.log("teste");
    },
  },
};
</script>
