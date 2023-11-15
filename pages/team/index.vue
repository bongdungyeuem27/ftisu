<template>
  <div>
    <div class="pt-8 flex flex-col items-center w-full gap-10">
      <TopicServer
        v-for="topic in topics"
        :key="topic.id"
        :topic="topic"
      ></TopicServer>
    </div>
  </div>
</template>

<script setup lang="ts">
import TopicServer from "@/containers/team/Topic.server.vue";
import { topics } from "../../data/metadata";
</script>

<style scoped></style>
