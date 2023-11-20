<template>
  <div class="container flex flex-col items-center px-2 md:px-1">
    <!-- Section: Design Block -->
    <div class="text-center flex flex-col items-center gap-6">
      <div
        :style="{ backgroundColor: group.color }"
        class="flex relative w-full h-24 text-center justify-center items-center rounded-lg"
      >
        <img
          :src="group.imageRight"
          class="absolute right-4 top-1/2 -translate-y-1/2 h-full object-contain"
        />
        <img
          :src="group.imageLeft"
          class="absolute left-4 top-1/2 -translate-y-1/2 h-full object-contain"
        />
        <h4 class="text-2xl text-white font-quicksand">{{ group.name }}</h4>
      </div>
      <div class="flex gap-x-4 gap-y-4 justify-center flex-wrap">
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

</script>

<style scoped></style>
