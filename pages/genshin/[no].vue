<script setup lang="ts">
const route = useRoute();

const no = route.params.no;

const labels = [
  '',
  'Karakter',
  'Senjata',
  'Artifact',
  'Material',
  'Item Quest',
  'Item Beharga',
  'Avatar',
  'Archon Quest',
];

const { data } = await useFetch<any>('https://kotochi.vercel.app/api/d4g4ng4n?no=' + no);
</script>

<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 items-start">
      <div>
        <ProductTitle>{{ data.account.name }}</ProductTitle>
        <div class="mt-4 flex gap-2 flex-wrap">
          <ProductBadge>{{ data.account.limitedCharsCount }} Karakter Limited</ProductBadge>
          <ProductBadge v-if="data.account.limitedWeapsCount"
            >{{ data.account.limitedWeapsCount }} Senjata Limited</ProductBadge
          >
          <ProductBadge>MC {{ data.account.mc.split(' ')[1] }}</ProductBadge>
          <ProductBadge>AR {{ data.account.ar }}</ProductBadge>
        </div>
      </div>
      <ButtonItemku :to="data.account.url" class="mt-4 md:mt-0" v-if="false" />
    </div>

    <div class="grid md:grid-cols-2 gap-4 mt-8">
      <ProductImage v-for="i in 8" :index="i" :no="data.account.no" :label="labels[i]" />
    </div>

    <div class="mt-6 flex justify-center w-full">
      <ButtonItemku :to="data.account.url" class="w-full md:w-auto" v-if="false" />
    </div>
  </div>
</template>

<style scoped></style>
