<template>
  <div v-if="visible" class="fixed inset-y-0 left-0 mt-20 bg-[#baf77c] p-4 w-72">
    <div class="mt-4 text-green-700">
      <p class="text-3xl font-semibold">Semana</p>
      <p class="text-2xl text-white">De {{ semanaInfo }}</p>
    </div>
    <div class="mt-4 text-green-700">
      <p class="text-2xl font-semibold">Imformações</p>
      <div class="mt-2 space-y-2">
        <Button
          class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg"
          label="Cardapio"
        />
        <Button
          class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg"
          label="Sobre o RU"
        />
        <Button
          class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg"
          label="Dicas"
        />
        <Button
          class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg"
          label="Contatos"
        />
        <Button
          class="w-full bg-[#61d4b0] text-xl text-green-900 font-semibold px-3 py-2 rounded-lg"
          label="Sobre"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { startOfWeek, addDays, format } from "date-fns";

export default {
  props: {
    visible: Boolean,
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
  },
};
</script>
