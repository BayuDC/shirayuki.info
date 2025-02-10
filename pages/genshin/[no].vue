<script setup lang="ts">
const route = useRoute();

const no = route.params.no;

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
      <ButtonItemku :to="data.account.url" class="mt-4 md:mt-0" />
    </div>

    <div class="grid md:grid-cols-2 gap-4 mt-8">
      <ProductImage />
      <ProductImage />
      <ProductImage />
      <ProductImage />
    </div>

    <div class="mt-6 flex justify-center w-full">
      <ButtonItemku :to="data.account.url" class="w-full md:w-auto" />
    </div>
  </div>
</template>

<style scoped></style>
