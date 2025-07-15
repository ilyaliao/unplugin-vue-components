<script setup lang="ts">
import ComponentA from './components/ComponentA.vue';
</script>

<template>
  <div class="block">
    <ComponentA msg="a" />
  </div>
</template>

<style scoped>
.block {
  padding: 0px 20px 10px 20px;
  margin: 20px 20px;
  border: 1px solid #888;
  border-radius: 5px;
}
</style>
