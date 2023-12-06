<template>
  <div :class="{ 'ml-72': isSidebarVisible }">
    <div class="max-w-4xl my-4 mx-auto p-4 rounded-md bg-[#baf77c]">
      <h2 class="text-2xl font-semibold mb-4">
        Sobre os Restaurantes Universitários (RUs)
      </h2>
      <div class="ru-info mb-8 p-6 bg-white rounded-md shadow-md">
        <p class="mb-4">
          <strong class="text-blue-600">Carteirinha:</strong><br />
          <strong>Quem pode ter:</strong> Alunos de cursos de graduação
          presenciais<br />
          <strong>Onde solicitar:</strong><br />
          - Em Palmas, na Proest - Reitoria, Bloco IV, Sala 02, de 9h30 às 11h e
          14h30 às 17h.<br />
          - Em Gurupi, no próprio RU, com o fiscal do contrato.
        </p>
        <p class="mb-4">
          <strong>Documentos necessários:</strong><br />
          - Documento de identificação original com foto<br />
          - Comprovante de matrícula (atualizado)<br />
          <strong>Custo:</strong> A primeira via da carteirinha é emitida
          gratuitamente.
        </p>
      </div>
      <div class="ru-info mb-8 p-6 bg-white rounded-md shadow-md">
        <p class="mb-4">
          <strong class="text-blue-600">Apresentação:<br /> </strong> Os
          Restaurantes Universitários (RUs) da Universidade Federal do
          Tocantins, que funcionam no Câmpus de Palmas desde junho de 2014, e no
          Câmpus de Gurupi desde maio de 2016, fazem parte da política de
          assistência estudantil da Instituição e têm como finalidade fornecer
          refeições balanceadas, higiênicas e de baixo custo à comunidade
          universitária.
        </p>
        <p class="mb-4">
          Os RUs têm uma capacidade para atender a demanda de até 2,5 mil
          refeições por dia.
        </p>
        <p class="mb-4">
          Gerenciados pela Pró-Reitoria de Assuntos Estudantis e Comunitários
          (Proest), os RUs da UFT também funcionam como laboratório e campo de
          estágio para alunos de graduação do Curso de Nutrição.
        </p>
      </div>

      <div class="ru-info mb-8 p-6 bg-white rounded-md shadow-md">
        <p class="mb-4">
          <strong class="text-blue-600">Responsabilidade Técnica:<br /></strong>
          Gerente da Empresa/Nutricionista: Camilla Luana Oliveira Alves
        </p>
        <p class="mb-4">
          <strong class="text-blue-600">RU do Câmpus de Palmas:<br /></strong>
          Nutricionistas: Juliana Moraes e Erica Triulli (Empresa Vogue) Fiscal
          do Contrato/Nutricionista: Elisama Lopes
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
