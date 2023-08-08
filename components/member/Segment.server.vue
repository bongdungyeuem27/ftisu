<template>
  <section class="container mx-auto px-2 md:px-6">
    <!-- Section: Design Block -->
    <div class="text-center">
      <h2 class=" text-3xl font-bold">
        {{ team.title }}
      </h2>

      <div class="flex gap-x-6 justify-center mt-6">
        <MemberServer
          v-for="(member, index) in team.members"
          :key="member.id"
          :order="((index % 3) as 0|1|2)"
          :member="member"
        ></MemberServer>
      </div>
    </div>
    <!-- Section: Design Block -->
  </section>
</template>

<script setup lang="ts">
import { ITeam } from "data/metadata";
import MemberServer from "./Member.server.vue";
type IProps = {
  team: ITeam;
};
const props = defineProps<IProps>();
const { team } = props;
</script>

<style scoped></style>
