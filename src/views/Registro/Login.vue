<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <form
      @submit.prevent="login"
      class="flex-1 flex items-center justify-center bg-gray-100"
    >
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4 text-center text-gray-800">
          Login
        </h2>
        <InputWrapper label="Email">
          <InputText v-model="form.username" placeholder="Email" class="p-2" />
        </InputWrapper>
        <InputWrapper label="Senha">
          <InputText
            v-model="form.password"
            type="password"
            placeholder="Senha"
            class="p-2"
          />
        </InputWrapper>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Entrar
        </button>
        <button
          @click="cadastro"
          class="w-full bg-green-500 text-white font-semibold py-2 mt-2 rounded hover:bg-green-600 transition duration-300"
        >
          Cadastro
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import InputWrapper from "../../components/InputWrapper.vue";

export default {
  components: {
    InputText,
    InputWrapper,
  },
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      // Adicione lógica de autenticação aqui
      console.log("Login realizado:", this.form.username);
    },
    cadastro() {
      this.$router.push({ name: "Cadastro" });
    },
  },
};
</script>
