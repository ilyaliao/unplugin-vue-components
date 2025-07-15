<script setup lang='ts' vapor>
defineProps({
  msg: String,
})
</script>

<template>
  <h3>Component A: {{ msg }}</h3>
</template>
