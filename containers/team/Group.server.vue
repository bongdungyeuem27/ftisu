<template>
  <div class="container flex flex-col items-center px-2 md:px-1">
    <!-- Section: Design Block -->
    <div class="text-center">
      <img />

      <div class="flex gap-x-4 gap-y-4 justify-center mt-6 flex-wrap">
        <MemberServer
          v-for="(member, index) in localMembers"
          :key="member"
          :order="((index % 3) as 0|1|2)"
          :member="member"
        ></MemberServer>
      </div>
    </div>
    <!-- Section: Design Block -->
  </div>
</template>

<script setup lang="ts">
import { members, type IGroup } from "../../data/metadata";
import MemberServer from "@/components/member/Member.server.vue";
type IProps = {
  group: IGroup;
};
const props = defineProps<IProps>();
const { group } = props;

const localMembers = group.memberIDs.map((memberID) => members[memberID]);
console.log(localMembers)
</script>

<style scoped></style>
