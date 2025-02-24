<script setup lang="ts">
const { data } = await useFetch<any>('/api/visit-records', {
  default: () => [],
});

function prettyDate(date: string) {
  if (!date) return 'N/A';

  return new Date(date).toLocaleString();
}
</script>

<template>
  <Table>
    <TableBody>
      <ProductList v-for="i in 4" :page="i">
        <template v-slot="{ no }">
          {{ prettyDate(data.visits['page:' + no]) }}
        </template>
      </ProductList>
    </TableBody>
  </Table>
</template>

<style scoped></style>
