<template>
  <div>
    <Header />
    <Cardapio/>
  </div>
</template>

<script>
import Cardapio from '../components/Cardapio.vue';

export default {
  components: {
    Cardapio,
  },
  data() {
    return {
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
