<script setup lang="ts">
const props = defineProps<{
  page: number;
}>();

const { data } = await useFetch<any>('https://kotochi.vercel.app/api/d4g4ng4n?page=' + props.page, {
  default: () => [],
});
</script>

<template>
  <TableRow v-for="a in data.accounts" :key="a.no">
    <TableCell class="font-medium">{{ a.no }}</TableCell>
    <TableCell>
      <NuxtLink :to="`/genshin/${a.no}`">{{ a.name }}</NuxtLink>
    </TableCell>
    <TableCell>
      <slot v-bind="{ no: a.no }"> </slot>
    </TableCell>
  </TableRow>
</template>

<style scoped></style>
