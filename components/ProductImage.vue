<script setup lang="ts">
defineProps<{ index: number; no: number; label: string }>();

const loaded = ref(false);
const loader = ref(true);

function onLoaded() {
  loaded.value = true;
}
</script>

<template>
  <div class="rounded-xl overflow-hidden border-2 border-white relative aspect-video bg-[#ffefe5]/30">
    <UnLazyImage
      :src="`https://ik.imagekit.io/bayudc/tr:w-0.5/genshin/${no}/${index}.png`"
      @loaded="onLoaded"
      :class="{ 'fade-in': loaded }"
    />
    <div
      v-if="loader"
      class="absolute bottom-0 left-[50%] translate-x-[-50%]"
      :class="{ 'fade-out': loaded }"
      @animationend="loader = false"
    >
      <img src="/kuru-kuru.gif" class="w-48 md:w-64" alt="" />
    </div>
    <div class="font-bold w-full bg-neutral-900/80 text-sm p-1 md:p-2 absolute bottom-0 text-center">
      {{ label }}
    </div>
  </div>
</template>

<style scoped>
.fade-in {
  animation: appear 0.6s ease-in-out;
}
.fade-out {
  animation: disappear 0.3s ease-in-out forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes disappear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
