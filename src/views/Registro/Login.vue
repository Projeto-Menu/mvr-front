<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Login</h2>
      <div class="mb-4">
        <input
          v-model="username"
          type="text"
          class="w-full px-3 py-2 border rounded"
          placeholder="Email"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="password"
          type="password"
          class="w-full px-3 py-2 border rounded"
          placeholder="Senha"
        />
      </div>
      <button
        @click="login"
        class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
      <button
        @click="cadastro"
        class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
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
  methods:{
    cadastro(){
      this.$router.push({name:'api'});
    }
  }
};
</script>
