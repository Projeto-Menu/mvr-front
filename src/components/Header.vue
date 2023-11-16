<template>
  <header class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <!-- <Image
          src="../assets/imgs/logoMymenu.png"
          alt="LogoMyMenu"
          class="w-10 h-10 mr-2"
        /> -->
        <router-link to="/" class="text-xl font-bold"
          >My Menu</router-link
        >
      </div>

      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/cardapio">Cardápio</router-link></li>
          <li><router-link to="/sobre">Sobre Nós</router-link></li>
          <li><router-link to="/contato">Contato</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Image from 'primevue/image';
export default {
  components: {
    Image,
  },
};
</script>
