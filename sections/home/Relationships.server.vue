<template>
  <section class="w-full flex flex-col gap-4 mt-4 sm:gap-16 px-4">
    <SegmentServer
      v-for="(relationship, index) in relationships"
      :key="relationship.id"
      :index="index"
      :data="relationship"
    ></SegmentServer>
  </section>
</template>

<script setup lang="ts">
import SegmentServer from "@/components/card/Segment.server.vue";
import { relationships } from "@/data/metadata";
</script>

<style scoped></style>
