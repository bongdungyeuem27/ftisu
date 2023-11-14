<template>
  <section class="w-full px-4 flex flex-col items-center gap-4">
    <h2
      class="relative text-3xl font-semibold w-fill before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[100%] before:content-[''] before:w-[80%] before:bg-purple-400 before:h-1 before:rounded-2xl after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[100%] after:content-[''] after:w-[80%] after:bg-purple-400 after:h-1 after:rounded-2xl dark:text-white"
    >
      Documents
    </h2>
    <div class="mt-0 gap-2 sm:!mt-24 px-6 flex justify-center sm:gap-6 flex-wrap">
      <DocumentServer
        v-for="(document, index) in documents"
        :key="document.id"
        :index="index"
        :document="document"
      ></DocumentServer>
    </div>
  </section>
</template>

<script setup lang="ts">
import DocumentServer from "@/components/card/Document.server.vue";
import { documents } from "@/data/metadata";
</script>

<style scoped></style>
