<template>
  <header
    class="flex justify-between h-[60px] border-b-[1px] border-gray-200 sticky"
  >
    <div class="flex shrink-0 basis-0 grow-[0.5]">
      <Image
        :src="LogoImage"
        :width="150"
        :height="40"
        class="py-2 object-contain"
        alt="logo"
      ></Image>
    </div>
    <DirectionServer></DirectionServer>
    <div class="flex shrink-0 basis-0 grow-[0.5]"></div>
  </header>
</template>

<script setup lang="ts">
import Image from "@/components/image/Image.server.vue";
import LogoImage from "@/assets/images/logo.png";
import DirectionServer from "./Direction.server.vue";
</script>

<style scoped></style>
