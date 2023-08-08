<template>
  <div class="mt-8 flex flex-col items-center w-full gap-10">
    <SegmentServer
      v-for="team in teams"
      :key="team.id"
      :team="team"
    ></SegmentServer>
  </div>
</template>

<script setup lang="ts">
import SegmentServer from "@/components/member/Segment.server.vue";
import { teams } from "@/data/metadata";
</script>

<style scoped></style>
