<script setup lang="ts">
defineProps<{ index: number; no: number }>();
</script>

<template>
  <div class="rounded-xl overflow-hidden border-2 border-white relative">
    <img :src="`https://ik.imagekit.io/bayudc/genshin/${no}/${index}.png`" alt="" />
    <div v-if="false" class="font-bold w-full bg-neutral-900/80 text-sm p-1 md:p-2 absolute bottom-0 text-center">
      Daftar Karakter
    </div>
  </div>
</template>

<style scoped></style>
