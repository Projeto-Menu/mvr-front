<template>
  <div class="min-h-screen flex flex-col">
    <form
      @submit.prevent="submitForm"
      class="flex-1 flex items-center justify-center bg-[#baf77c]"
    >
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4">Cadastro</h2>
        <InputWrapper>
          <InputText
            v-model="form.username"
            type="text"
            class="w-full px-3 py-2 border rounded"
            placeholder="User Name"
          />
        </InputWrapper>
        <InputWrapper>
          <InputText
            v-model="form.email"
            type="text"
            class="w-full px-3 py-2 border rounded"
            placeholder="Email"
          />
        </InputWrapper>
        <InputWrapper>
          <InputText
            v-model="form.senha"
            type="password"
            placeholder="Senha"
            class="w-full px-3 py-2 border rounded"
          />
        </InputWrapper>

        <Button
          type="submit"
          label="Confirmar"
          class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
        />
      </div>
    </form>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import InputWrapper from "../../components/InputWrapper.vue";
import { create, findAll, find } from "../../services/Resgistro";

export default {
  components: {
    InputText,
    InputWrapper,
    Button,
  },

  data() {
    return {
      form: {
        username: null,
        email: null,
        senha: null,
      },
    };
  },

  methods: {
    async submitForm() {
      try {
        const criando = await create(this.form);
        console.log(criando);
        this.showSuccess = true; 
        this.$router.push({ name: "Login" });
      } catch (error) {
        this.showError = true;
        console.error(error);
      } finally {
        console.log("Finalizou");
        findAll();
      }
    },
  },
};
</script>
