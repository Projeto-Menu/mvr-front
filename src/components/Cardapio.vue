<template>
  <div :class="{ 'ml-60': isSidebarVisible }">
    <Carousel
      :value="cardapio"
      :numVisible="1"
      :numScroll="1"
      class="w-full px-3"
      
    >
      <template #item="dia">
        <div class="flex justify-center items-center rounded-3xl bg-[#baf77c] my-3">
          <h2 class="text-3xl font-semibold my-4 text-green-600">
            {{ dia.data.diaDaSemana }}
          </h2>
        </div>
        <div class="flex m-2">
          <Fieldset
            legend="Almoço"
            class="border-4 flex-auto p-4 text-2xl mx-1"
          >
            <div
              v-for="categoria in dia.data.pratosAlmoco"
              :key="categoria.nome"
              class="flex flex-col"
            >
              <span class="text-xl">{{ categoria.categoria }}:</span>
              <span class="text-lg mx-5">{{ categoria.nome }}</span>
            </div>
          </Fieldset>
          <Fieldset
            legend="Jantar"
            class="border-4 flex-auto p-4 text-2xl mx-1"
          >
            <div
              v-for="categoria in dia.data.pratosJanta"
              :key="categoria.nome"
              class="flex flex-col"
            >
              <span class="text-xl">{{ categoria.categoria }}</span>
              <span class="text-lg mx-5">{{ categoria.nome }}</span>
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
      cardapio: [
        {
          diaDaSemana: "Domingo",
          pratosAlmoco: [
            {
              nome: "Feijoada",
              categoria: "Prato Principal",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Estrogonofe de cenoura",
              categoria: "Vegetariano",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "farofa",
              categoria: "Guarnição",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Arroz",
              categoria: "Complemento",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Alface",
              categoria: "Saladas Crua",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Cenoura",
              categoria: "Salada Cozida",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Gelatina",
              categoria: "Sobremesa",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Suco de Abacaxi",
              categoria: "Bebida",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
          ],
          pratosJanta: [
            {
              nome: "Carne de Sol",
              categoria: "Prato Principal",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Estrogonofe de cenoura",
              categoria: "Vegetariano",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "farofa",
              categoria: "Guarnição",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Arroz",
              categoria: "Complemento",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Alface",
              categoria: "Saladas Crua",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Cenoura",
              categoria: "Salada Cozida",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Gelatina",
              categoria: "Sobremesa",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
            {
              nome: "Suco de Abacaxi",
              categoria: "Bebida",
              descricao:
                "Esta documentação descreve a API que fornece acesso a informações relacionadas a usuários, cardápios, refeições,",
            },
          ],
        },
        {
          diaDaSemana: "Segunda-feira",
          pratosAlmoco: [
            { nome: "Arroz à grega", categoria: "Prato Principal" },
            { nome: "Escondidinho de abóbora", categoria: "Vegetariano" },
            { nome: "Feijão tropeiro", categoria: "Guarnição" },
            { nome: "Macarrão", categoria: "Complemento" },
            { nome: "Tomate com pepino", categoria: "Saladas Crua" },
            { nome: "Brócolis cozido", categoria: "Salada Cozida" },
            { nome: "Mousse de maracujá", categoria: "Sobremesa" },
            { nome: "Suco de laranja", categoria: "Bebida" },
          ],
          pratosJanta: [
            { nome: "Frango grelhado", categoria: "Prato Principal" },
            { nome: "Risoto de cogumelos", categoria: "Vegetariano" },
            { nome: "Batata assada", categoria: "Guarnição" },
            { nome: "Quinoa", categoria: "Complemento" },
            { nome: "Rúcula com tomate seco", categoria: "Saladas Crua" },
            { nome: "Abobrinha refogada", categoria: "Salada Cozida" },
            { nome: "Pudim de leite", categoria: "Sobremesa" },
            { nome: "Água de coco", categoria: "Bebida" },
          ],
        },
        {
          diaDaSemana: "Terça-feira",
          pratosAlmoco: [
            { nome: "Frango grelhado", categoria: "Prato Principal" },
            { nome: "Risoto de cogumelos", categoria: "Vegetariano" },
            { nome: "Batata assada", categoria: "Guarnição" },
            { nome: "Quinoa", categoria: "Complemento" },
            { nome: "Rúcula com tomate seco", categoria: "Saladas Crua" },
            { nome: "Abobrinha refogada", categoria: "Salada Cozida" },
            { nome: "Pudim de leite", categoria: "Sobremesa" },
            { nome: "Água de coco", categoria: "Bebida" },
          ],
          pratosJanta: [
            { nome: "Arroz à grega", categoria: "Prato Principal" },
            { nome: "Escondidinho de abóbora", categoria: "Vegetariano" },
            { nome: "Feijão tropeiro", categoria: "Guarnição" },
            { nome: "Macarrão", categoria: "Complemento" },
            { nome: "Tomate com pepino", categoria: "Saladas Crua" },
            { nome: "Brócolis cozido", categoria: "Salada Cozida" },
            { nome: "Mousse de maracujá", categoria: "Sobremesa" },
            { nome: "Suco de laranja", categoria: "Bebida" },
          ],
        },
        {
          diaDaSemana: "Quarta-feira",
          pratosAlmoco: [
            { nome: "Peixe assado", categoria: "Prato Principal" },
            { nome: "Lasanha de berinjela", categoria: "Vegetariano" },
            { nome: "Purê de batata", categoria: "Guarnição" },
            { nome: "Arroz integral", categoria: "Complemento" },
            { nome: "Salada de folhas verdes", categoria: "Saladas Crua" },
            { nome: "Couve-flor gratinada", categoria: "Salada Cozida" },
            { nome: "Torta de limão", categoria: "Sobremesa" },
            { nome: "Chá verde", categoria: "Bebida" },
          ],
          pratosJanta: [
            { nome: "Carne assada", categoria: "Prato Principal" },
            { nome: "Espaguete de abobrinha", categoria: "Vegetariano" },
            { nome: "Polenta frita", categoria: "Guarnição" },
            { nome: "Arroz selvagem", categoria: "Complemento" },
            { nome: "Salada de beterraba", categoria: "Saladas Crua" },
            { nome: "Ervilha torta refogada", categoria: "Salada Cozida" },
            { nome: "Mousse de chocolate", categoria: "Sobremesa" },
            { nome: "Suco de uva", categoria: "Bebida" },
          ],
        },
        {
          diaDaSemana: "Quinta-feira",
          pratosAlmoco: [
            { nome: "Carne assada", categoria: "Prato Principal" },
            { nome: "Espaguete de abobrinha", categoria: "Vegetariano" },
            { nome: "Polenta frita", categoria: "Guarnição" },
            { nome: "Arroz selvagem", categoria: "Complemento" },
            { nome: "Salada de beterraba", categoria: "Saladas Crua" },
            { nome: "Ervilha torta refogada", categoria: "Salada Cozida" },
            { nome: "Mousse de chocolate", categoria: "Sobremesa" },
            { nome: "Suco de uva", categoria: "Bebida" },
          ],
          pratosJanta: [
            { nome: "Peixe assado", categoria: "Prato Principal" },
            { nome: "Lasanha de berinjela", categoria: "Vegetariano" },
            { nome: "Purê de batata", categoria: "Guarnição" },
            { nome: "Arroz integral", categoria: "Complemento" },
            { nome: "Salada de folhas verdes", categoria: "Saladas Crua" },
            { nome: "Couve-flor gratinada", categoria: "Salada Cozida" },
            { nome: "Torta de limão", categoria: "Sobremesa" },
            { nome: "Chá verde", categoria: "Bebida" },
          ],
        },
        {
          diaDaSemana: "Sexta-feira",
          pratosAlmoco: [
            { nome: "Hambúrguer", categoria: "Prato Principal" },
            { nome: "Pizza de legumes", categoria: "Vegetariano" },
            { nome: "Batata doce assada", categoria: "Guarnição" },
            { nome: "Cuscuz marroquino", categoria: "Complemento" },
            { nome: "Salada de repolho", categoria: "Saladas Crua" },
            { nome: "Berinjela ao forno", categoria: "Salada Cozida" },
            { nome: "Salada de frutas", categoria: "Sobremesa" },
            { nome: "Limão suíço", categoria: "Bebida" },
          ],
          pratosJanta: [
            { nome: "Churrasco", categoria: "Prato Principal" },
            { nome: "Abobrinha recheada", categoria: "Vegetariano" },
            { nome: "Mandioca cozida", categoria: "Guarnição" },
            { nome: "Arroz cateto", categoria: "Complemento" },
            { nome: "Salada de almeirão", categoria: "Saladas Crua" },
            { nome: "Couve refogada", categoria: "Salada Cozida" },
            { nome: "Pavê de morango", categoria: "Sobremesa" },
            { nome: "Caipirinha", categoria: "Bebida" },
          ],
        },
        {
          diaDaSemana: "Sábado",
          pratosAlmoco: [
            { nome: "Churrasco", categoria: "Prato Principal" },
            { nome: "Abobrinha recheada", categoria: "Vegetariano" },
            { nome: "Mandioca cozida", categoria: "Guarnição" },
            { nome: "Arroz cateto", categoria: "Complemento" },
            { nome: "Salada de almeirão", categoria: "Saladas Crua" },
            { nome: "Couve refogada", categoria: "Salada Cozida" },
            { nome: "Pavê de morango", categoria: "Sobremesa" },
            { nome: "Caipirinha", categoria: "Bebida" },
          ],
          pratosJanta: [
            { nome: "Hambúrguer", categoria: "Prato Principal" },
            { nome: "Pizza de legumes", categoria: "Vegetariano" },
            { nome: "Batata doce assada", categoria: "Guarnição" },
            { nome: "Cuscuz marroquino", categoria: "Complemento" },
            { nome: "Salada de repolho", categoria: "Saladas Crua" },
            { nome: "Berinjela ao forno", categoria: "Salada Cozida" },
            { nome: "Salada de frutas", categoria: "Sobremesa" },
            { nome: "Limão suíço", categoria: "Bebida" },
          ],
        },
      ],
    };
  },
};
</script>
