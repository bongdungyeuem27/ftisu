<template>
  <NuxtLink class="px-2">
    <GithubSVG v-if="category === 'github'"></GithubSVG>
    <LinkedinSVG v-if="category === 'linkedin'"></LinkedinSVG>
  </NuxtLink>
</template>

<script setup lang="ts">
import { GithubSVG } from "@/assets/svg/team";
import { LinkedinSVG } from "@/assets/svg/team";

type IProps = {
  category: "github" | "linkedin" | "facebook" | "zalo";
};
const props = defineProps<IProps>();
const { category } = props;
</script>

<style scoped></style>
