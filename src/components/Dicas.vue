<template>
  <div :class="{ 'ml-72': isSidebarVisible }">
      <div class="max-w-4xl my-4 mx-auto rounded-md p-4 bg-[#baf77c]">
        <h2 class="text-2xl font-semibold mb-4">Dicas para o RU</h2>

        <div class="dica mb-8 p-6 bg-white rounded-md shadow-md">
          <p class="mb-2">
            <strong class="text-blue-600"
              >Para reduzir o tempo de espera na fila do RU:</strong
            >
          </p>
          <ul class="list-disc pl-6">
            <li>Tenha em mãos a sua carteirinha;</li>
            <li>Fique atento para a liberação do caixa;</li>
            <li>Sempre que possível, leve dinheiro trocado;</li>
            <li>Não "fure" a fila, respeite os demais usuários;</li>
            <li>
              Ao se servir, procure ser ágil ao passar pelo balcão (o ideal é
              não demorar mais de dois minutos).
            </li>
          </ul>
        </div>

        <div class="dica mb-8 p-6 bg-white rounded-md shadow-md">
          <p class="mb-2">
            <strong class="text-blue-600"
              >Para ter uma hora da refeição mais saudável, responsável e
              agradável:</strong
            >
          </p>
          <ul class="list-disc pl-6">
            <li>Lave as mãos antes das refeições;</li>
            <li>Evite falar alto no ambiente do RU;</li>
            <li>
              Permaneça à mesa apenas o tempo necessário (lembre-se que outras
              pessoas podem estar aguardando um lugar para comer);
            </li>
            <li>
              Não converse enquanto se serve, assim você ajuda a evitar a
              contaminação dos alimentos;
            </li>
            <li>
              Evite o desperdício, coloque no prato apenas o que for consumir;
            </li>
            <li>
              Contribua para a organização do RU dispensando bandejas,
              utensílios e sobras de alimentos nos locais indicados.
            </li>
          </ul>
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
