<script setup lang="ts"></script>

<template>
  <Html class="dark">
    <Head> </Head>
    <Body>
      <div class="container max-w-screen-xl mx-auto">
        <Header />
        <div class="mb-10">
          <div class="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 items-start">
            <div>
              <ProductTitle />
              <div class="mt-4 flex gap-2 flex-wrap">
                <ProductBadge>AR 60</ProductBadge>
                <ProductBadge>MC Lumine</ProductBadge>
                <ProductBadge>8 Karakter Limited</ProductBadge>
                <ProductBadge>2 Senjata Limited</ProductBadge>
              </div>
            </div>
            <ButtonItemku class="mt-4 md:mt-0" />
          </div>

          <div class="grid md:grid-cols-2 gap-4 mt-12">
            <ProductImage />
            <ProductImage />
            <ProductImage />
            <ProductImage />
          </div>

          <div class="mt-6 flex justify-center w-full">
            <ButtonItemku class="w-full md:w-auto" />
          </div>
        </div>
      </div>
    </Body>
  </Html>
</template>
