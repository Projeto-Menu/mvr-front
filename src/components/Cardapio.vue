<template>
  <div :class="{ 'ml-60': isSidebarVisible }" class="bg-red-500 flex">
    <div class="flex justify-center">
      <h2 class="text-3xl font-semibold mt-8 mb-4">Segunda</h2>
    </div>
    <div>
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
export default {
  props: {
    isSidebarVisible: Boolean,
  },

  data() {
    return {
      diasSemana: [
        {
          nome: "Segunda",
          pratos: ["Prato 1", "Prato 2", "Prato 3"],
        },
        {
          nome: "Terça",
          pratos: ["Prato A", "Prato B", "Prato C"],
        },
        {
          nome: "Quarta",
          pratos: ["Prato A", "Prato B", "Prato C"],
        },
        {
          nome: "Quinta",
          pratos: ["Prato A", "Prato B", "Prato C"],
        },
        {
          nome: "Sexta",
          pratos: ["Prato A", "Prato B", "Prato C"],
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
