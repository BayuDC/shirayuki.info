<script setup lang="ts">
const props = defineProps<{
  to?: string;
}>();
</script>

<template>
  <Button>
    <NuxtLink :to="to" :external="true" class="flex items-center gap-1">
      <div class="pt-0.5">Beli di</div>
      <img class="h-6 w-full" src="assets/itemku.png" />
    </NuxtLink>
  </Button>
</template>

<style scoped></style>
