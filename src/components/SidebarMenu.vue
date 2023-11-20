<template>
  <div v-if="visible" class="fixed inset-y-0 left-0 mt-16 bg-blue-500 p-4 w-60">
    <!-- Nova seção para a semana -->
    <div class="mt-4 text-white">
      <p class="text-2xl font-semibold">Semana</p>
      <p class="text-lg">De {{ semanaInfo }}</p>
    </div>
    <!-- Nova seção para o Dia da Semana -->
    <div class="mt-4 text-white">
      <p class="text-2xl font-semibold">Dia da Semana</p>
      <div class="mt-2 space-y-2">
        <Button
          class="w-full bg-blue-900 px-3 py-2 rounded"
          label="Segunda"
        />
        <Button
          class="w-full bg-blue-900  text-white px-3 py-2 rounded"
          label="Terça"
        />
        <Button
          class="w-full bg-blue-900  text-white px-3 py-2 rounded"
          label="Quarta"
        />
        <Button
          class="w-full bg-blue-900  text-white px-3 py-2 rounded"
          label="Quinta"
        />
        <Button
          class="w-full bg-blue-900  text-white px-3 py-2 rounded"
          label="Sexta"
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
