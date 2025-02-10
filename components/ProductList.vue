<script setup lang="ts">
const props = defineProps<{
  page: string;
}>();

const { data } = await useFetch('https://kotochi.vercel.app/api/d4g4ng4n?page=' + props.page);
</script>

<template>
  <div v-for="a in data?.accounts || []">
    <NuxtLink :to="`/genshin/${a.no}`">{{ a.no }} : {{ a.name }}</NuxtLink>
  </div>
</template>

<style scoped></style>
