<template>
  <div class="flex flex-col w-full gap-6">
    <div class="mt-1">
      <ImageServer
        alt="banner"
        :src="BannerImage"
        class="rounded-xl h-[calc(100vh-80px)] w-full object-cover"
      />
    </div>
    <DocumentsServer></DocumentsServer>
    <RelationshipServer></RelationshipServer>
  </div>
</template>

<script setup lang="ts">
import BannerImage from "@/assets/images/banner.jpg";
import RelationshipServer from "@/containers/home/Relationships.server.vue";
import DocumentsServer from "@/containers/home/Documents.server.vue";
import ImageServer from "@/components/image/Image.server.vue";
</script>

<style scoped></style>
