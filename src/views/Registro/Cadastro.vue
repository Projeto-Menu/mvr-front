<template>
  <form
    @submit.prevent="submitForm"
    class="min-h-screen flex items-center justify-center bg-gray-100"
  >
    <div class="bg-white p-8 rounded shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Cadastro</h2>
      <div class="mb-4">
        <input
          v-model="form.username"
          type="text"
          class="w-full px-3 py-2 border rounded"
          placeholder="User Name"
        />
      </div>
      <div class="mb-4">
        <input
          v-model="form.email"
          type="text"
          class="w-full px-3 py-2 border rounded"
          placeholder="Email"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
      >
        Cadastrar
      </button>
    </div>
  </form>
</template>

<script>
import InputText from "primevue/inputtext";
import InputWrapper from "../../components/InputWrapper.vue";
import { create } from '../../services/Resgistro'

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
    async submitForm() {
      try {
        const criando = await create(this.form);
        console.log(criando);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('Finalizou')
      }
      
    },
  },
};
</script>
