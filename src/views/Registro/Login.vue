<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold mb-4 text-center text-gray-800">Login</h2>
      <div class="mb-4">
        <InputWrapper label="Email">
          <InputText v-model="username" placeholder="Email" class="p-2"/>
        </InputWrapper>
      </div>
      <div class="mb-4">
        <InputWrapper label="Senha">
          <InputText v-model="password" type="password" placeholder="Senha" class="p-2" />
        </InputWrapper>
      </div>
      <button
        @click="login"
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
        email: null,
      },
    };
  },
  methods: {
    login() {
      // Adicione lógica de autenticação aqui
      console.log("Login realizado:", this.username);
    },
    cadastro() {
      this.$router.push({ name: "Cadastro" });
    },
  },
};
</script>
