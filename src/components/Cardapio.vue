<template>
  <div :class="{ 'ml-60': isSidebarVisible }" class="flex flex-col">
    <div class="flex justify-center bg-blue-400">
      <h2 class="text-3xl font-semibold mt-8 mb-4">Segunda</h2>
    </div>
    <div class="flex justify-center gap-36">
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
import Carousel from 'primevue/carousel';

export default {

  components:{
    Carousel,
  },
  props: {
    isSidebarVisible: Boolean,
  },

  data() {
    return {
      diasSemana: [
        {
          nome: "Alomoço",
          pratos: [
            "Prato principal",
            "Vegetariano",
            "Guarnição",
            "Complemento",
            "Saladas Crua	",
            "Salada Cozida	",
            "Sobremesa",
            "Bebida",
          ],
        },
        {
          nome: "Janta",
          pratos: [
            "Prato principal",
            "Vegetariano",
            "Guarnição",
            "Complemento",
            "Saladas Crua	",
            "Salada Cozida	",
            "Sobremesa",
            "Bebida",
          ],
        },
        // Adicione os demais dias da semana com seus respectivos pratos
      ],
    };
  },
  methods: {
    teste() {
      console.log("teste cardapio");
    },
  },
};
</script>
