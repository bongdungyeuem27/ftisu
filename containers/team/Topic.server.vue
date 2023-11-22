<template>
  <section class="container flex flex-col items-center px-2 md:px-1">
    <!-- Section: Design Block -->
    <div class="text-center">
      <h2 class="text-4xl font-bold text-black dark:text-white font-quicksand break-words">
        {{ topic.title }}
      </h2>

      <div class="flex gap-x-4 gap-y-12 justify-center mt-6 flex-wrap">
        <GroupServer
          v-for="(group, index) in topic.groups"
          :group="group"
        ></GroupServer>
      </div>
    </div>
    <!-- Section: Design Block -->
  </section>
</template>

<script setup lang="ts">
import type { ITopic } from "~/data/metadata";
import GroupServer from "./Group.server.vue";

type Props = {
  topic: ITopic;
};
const props = defineProps<Props>();

const { topic } = props;
</script>

<style scoped></style>
