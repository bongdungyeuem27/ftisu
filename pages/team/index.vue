<template>
  <div>
    <div class="pt-8 flex flex-col items-center w-full gap-10">
      <TeamServer
        v-for="team in teams"
        :key="team.id"
        :team="team"
      ></TeamServer>
    </div>
  </div>
</template>

<script setup lang="ts">
import TeamServer from "@/sections/team/Team.server.vue";
import { teams } from "@/data/metadata";
</script>

<style scoped></style>
