<template>
  <div>Olha a pedra</div>
  <button class="bg-cyan-500 hover:bg-cyan-600">Subscribe</button>
  <Calendar v-model="date" />
</template>
<script>
import Calendar from 'primevue/calendar';
export default {
    components:{
        Calendar,
    }

};
</script>
