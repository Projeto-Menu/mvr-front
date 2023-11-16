<template>
    <h6 class="border-b-2 border-primary mx-0" :class="headerClass" v-if="header && !$slots.header">{{ header }}</h6>
  
    <div class="border-b-2 border-primary mx-0" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div :class="class" class="p-3" :ref="ref" :id="id">
      <slot></slot>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        header: {
          type: String,
          required: false,
        },
        headerClass: {
          type: String,
          required: false,
        },
        class: {
          type: String,
          default: null,
        },
        ref: {
          type: String,
          required: false,
        },
        id: {
          type: String,
          required: false,
        },
      },
    };
  </script>
  