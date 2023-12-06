<template>
  <div
    v-if="visible"
    class="fixed h-full left-0 bg-[#baf77c] p-4 w-72"
  >
    <div class="mt-4 text-green-700">
      <p class="text-3xl font-semibold">Semana</p>
      <p class="text-2xl text-white">De {{ semanaInfo }}</p>
    </div>
    <div class="mt-4 text-green-700">
      <p class="text-2xl font-semibold">Imformações</p>
      <div class="mt-2 space-y-2">
        <button @click="buttonClick('Cardapio')" class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg">Cardapio</button>
        <button @click="buttonClick('SobreRu')" class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg">Sobre o RU</button>
        <button @click="buttonClick('Dicas')" class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg">Dicas</button>
        <button @click="buttonClick('Contatos')" class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg">Contatos</button>
        <button @click="buttonClick('Sobre')" class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg">Sobre</button>
      </div>
    </div>
  </div>
</template>

<script>
import { startOfWeek, addDays, format } from "date-fns";

export default {
  props: {
    visible: Boolean,
    is: null,
  },
  data() {
    return {
      semanaInfo: this.obterSemanaAtual(),
    };
  },
  methods: {
    obterSemanaAtual() {
      const hoje = new Date();
      const inicioDaSemana = startOfWeek(hoje, { weekStartsOn: 1 }); // Onde 1 é segunda-feira
      const segundaFeira = inicioDaSemana;
      const sextaFeira = addDays(inicioDaSemana, 4);

      return `${format(segundaFeira, "dd/MM")} a ${format(
        sextaFeira,
        "dd/MM"
      )}`;
    },
    buttonClick(component) {
      this.$emit('buttonClick', component);
    },
  },
};
</script>
