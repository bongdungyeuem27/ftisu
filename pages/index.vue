<template>
  <main class="flex flex-col w-full">
    <div class="mt-1">
      <img
        :src="BannerImage"
        class="rounded-xl h-[calc(100vh-80px)] w-full object-cover"
      />
    </div>
    <RelationshipServer></RelationshipServer>
  </main>
</template>

<script setup lang="ts">
import BannerImage from "@/assets/images/banner.jpg";
import RelationshipServer from "@/sections/home/Relationships.server.vue";
</script>

<style scoped></style>
