<template>
  <div :class="{ 'ml-72': isSidebarVisible }">
    <div class="max-w-2xl my-4 mx-auto p-4 rounded-md shadow-md bg-[#baf77c]">
      <h2 class="text-2xl font-semibold mb-4">Sobre o Projeto</h2>

      <div class="sobre-projeto mb-8 p-6 bg-white rounded-md shadow-md">
        <p class="mb-4">
          Este projeto foi desenvolvido como parte da disciplina de
          Desenvolvimento Web Mobile por três alunos da Universidade Federal do
          Tocantins.
        </p>
        <p class="mb-4">
          O intuito do projeto é auxiliar os estudantes da UFT, fornecendo
          informações sobre o cardápio diário do Restaurante Universitário (RU)
          para as refeições de almoço e jantar.
        </p>
        <p>
          O projeto é uma iniciativa que surgiu da necessidade dos alunos em
          obterem informações sobre o cardápio do RU, visando facilitar o
          planejamento de suas refeições.
        </p>
        <p class="mt-4">
          Este é um projeto anônimo, desenvolvido com o propósito de contribuir
          positivamente para a comunidade acadêmica.
        </p>
      </div>
    </div>
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
