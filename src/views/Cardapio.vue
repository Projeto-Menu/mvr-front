<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components:{
    Header,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.requisicao();
  },
  methods: {
    async requisicao() {
      console.log('teste')
    },
  },
};
</script>
