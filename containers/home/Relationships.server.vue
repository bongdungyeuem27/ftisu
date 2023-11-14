<template>
  <section class="w-full mt-4 px-4 flex flex-col items-center gap-4">
    <h2
      class="relative text-3xl font-semibold w-fill before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[100%] before:content-[''] before:w-[80%] before:bg-purple-400 before:h-1 before:rounded-2xl after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[100%] after:content-[''] after:w-[80%] after:bg-purple-400 after:h-1 after:rounded-2xl dark:text-white"
    >
      Projects
    </h2>
    <div class="grid grid-cols-1 gap-4 w-full px-6 sm:gap-16 2xl:grid-cols-2">
      <SegmentServer
        v-for="(relationship, index) in relationships"
        :key="relationship.id"
        :index="index"
        :data="relationship"
      ></SegmentServer>
    </div>
  </section>
</template>

<script setup lang="ts">
import SegmentServer from "@/components/card/Segment.server.vue";
import { relationships } from "@/data/metadata";
</script>

<style scoped></style>
