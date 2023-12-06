<template>
  <div class="min-h-screen flex flex-col">
    <form
      @submit.prevent="login"
      class="flex-1 flex items-center justify-center bg-[#baf77c]"
    >
      <div class="bg-white p-8 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-4 text-center text-gray-800">
          Login
        </h2>
        <InputWrapper label="Nome">
          <InputText
            v-model="form.username"
            type="text"
            class="w-full px-3 py-2 border rounded"
            placeholder="User Name"
          />
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
          class="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Entrar
        </button>
        <button
          @click="cadastro"
          class="w-full bg-blue-600 text-white font-semibold py-2 mt-2 rounded hover:bg-green-600 transition duration-300"
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
import { altenticacao } from "../../services/Resgistro";

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
    async login() {
      try {
        const altenticado = await altenticacao(this.form);
        if (altenticado) {
          console.log("Login realizado:", this.form.username);
          // Redireciona para a página após o login (substitua pela sua rota desejada)
          this.$router.push({ name: "Home" });
        } else {
          console.log("Credenciais inválidas");
          // Exibe uma mensagem de erro ou lógica apropriada
        }
      } catch (error) {
        console.error("Erro ao autenticar:", error);
        // Exibe uma mensagem de erro ou lógica apropriada
      }
    },
    cadastro() {
      this.$router.push({ name: "Cadastro" });
    },
  },
};
</script>
