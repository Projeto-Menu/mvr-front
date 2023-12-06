<template>
  <div :class="{ 'ml-72': isSidebarVisible }">
    <Carousel
      :value="diasfuncionamento"
      :numVisible="1"
      :numScroll="1"
      class="w-full px-3"
      @update:page="atualizar"
    >
      <template #item="dia">
        <div
          class="flex justify-center items-center rounded-3xl bg-[#baf77c] my-3"
        >
          <h2 class="text-4xl font-semibold my-4 text-green-700">
            {{ dia.data.dia_semana }} - {{ dia.data.data_dia }}
          </h2>
        </div>
        <div class="flex">
          <Fieldset
            legend="Almoço"
            class="border-4 flex-auto p-4 text-3xl text-[#2d2d29] font-semibold mx-1 border-[#75a480]"
          >
            <div
              class="flex flex-col"
              v-for="key in Object.keys(pratosAlmoco)"
              :key="key"
            >
              <!-- {{ key + ": " + pratosAlmoco[key] }} -->
              <span class="text-2xl font-medium">{{
                pratosAlmoco[key].nome_prato
              }}</span>
              <span class="text-xl mx-5 font-light">{{
                pratosAlmoco[key].descricao
              }}</span>
            </div>
          </Fieldset>
          <Fieldset
            legend="Jantar"
            class="border-4 flex-auto p-4 text-3xl text-[#2d2d29] font-semibold mx-1 border-[#75a480]"
          >
            <div
              class="flex flex-col"
              v-for="key in Object.keys(pratosJanta)"
              :key="key"
            >
              <!-- {{ key + ": " + pratosJanta[key] }} -->
              <span class="text-2xl font-medium">{{
                pratosJanta[key].nome_prato
              }}</span>
              <span class="text-xl mx-5 font-light">{{
                pratosJanta[key].descricao
              }}</span>
            </div>
          </Fieldset>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import TabMenu from "primevue/tabmenu";
import Fieldset from "primevue/fieldset";
import {
  diasfuncionamento,
  diaFuncionamento,
  cardapios,
  cardapio,
  refeicoes,
  refeicao,
} from "../services/Cardapio";
import moment from "moment";

export default {
  components: {
    Carousel,
    TabMenu,
    Fieldset,
  },
  props: {
    isSidebarVisible: Boolean,
  },
  data() {
    return {
      cardapios: [],
      cardapio: [],
      diasfuncionamento: [],
      refeicoes: [],
      pratosAlmoco: {},
      pratosJanta: {},
      refecao: {},
    };
  },
  methods: {
    async atualizar(diaAtual) {
      console.log(this.diasfuncionamento.data_dia)
      this.pratosAlmoco = await this.listCardapio(
        this.diasfuncionamento[diaAtual + 1].id_almoco
      );
      this.pratosJanta = await this.listCardapio(
        this.diasfuncionamento[diaAtual + 1].id_janta
      );
      this.diasfuncionamento[diaAtual + 1].data_dia = await this.ajusteTime(this.diasfuncionamento[diaAtual + 1].data_dia);
      this.atualizaRefeicao(this.pratosAlmoco);
      this.atualizaRefeicao(this.pratosJanta);
    },
    async ajusteTime(value) {
      let dataFormatada = await moment(value).format("L");
      console.log(dataFormatada);
      return dataFormatada;
    },
    async listDiasFuncionamento() {
      this.diasfuncionamento = await diasfuncionamento();
      this.pratosAlmoco = await this.listCardapio(
        this.diasfuncionamento[0].id_almoco
      );
      this.pratosJanta = await this.listCardapio(
        this.diasfuncionamento[0].id_janta
      );
      this.diasfuncionamento[0].data_dia = await this.ajusteTime(this.diasfuncionamento[0].data_dia);
      this.atualizaRefeicao(this.pratosAlmoco);
      this.atualizaRefeicao(this.pratosJanta);
    },
    async atualizaRefeicao(pratos) {
      pratos.id_guarnicao = await this.listRefeicao(pratos.id_guarnicao);
      pratos.id_prato_principal = await this.listRefeicao(
        pratos.id_prato_principal
      );
      pratos.id_sobremesa = await this.listRefeicao(pratos.id_sobremesa);
      pratos.id_salada_crua = await this.listRefeicao(pratos.id_salada_crua);
      pratos.id_salada_cozida = await this.listRefeicao(
        pratos.id_salada_cozida
      );
      pratos.id_bebida = await this.listRefeicao(pratos.id_bebida);
      pratos.id_complemento = await this.listRefeicao(pratos.id_complemento);
      pratos.id_vegetariano = await this.listRefeicao(pratos.id_vegetariano);
    },
    async listCardapios() {
      this.cardapios = await cardapios();
    },
    async listCardapio(id) {
      let item = await cardapio(id);
      return item;
    },
    async listRefeicoes() {
      this.refeicoes = await refeicoes();
    },
    async listRefeicao(id) {
      let item = await refeicao(id);
      return item;
    },
  },
  mounted() {
    this.listDiasFuncionamento();
  },
};
</script>
