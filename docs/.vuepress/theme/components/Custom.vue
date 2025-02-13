<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello Welcome to Paggie Blog! Try to practice Vue-Press Blog here')
</script>

<template>
  <div class="my-custom-content">
    {{ message }}
  </div>
</template>
