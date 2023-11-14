<template>
  <div
    class="h-8 opacity-100 px-4 flex sm:h-0 overflow-hidden sm:opacity-0 transition-all duration-200 ease-in-out sm:group-hover:!h-8 sm:group-hover:!opacity-100"
  >
    <NuxtLink
      :to="to"
      class="text-blue-500 font-medium ml-4 sm:ml-auto text-md dark:text-blue-200"
      target="_blank"
      :rel="title"
      >{{ title }} <Icon name="fa6-solid:arrow-right"></Icon
    ></NuxtLink>
  </div>
</template>

<script setup lang="ts">
export type ICardHint = "Goto" | "Github";
type IProps = {
  to: string;
  title?: ICardHint;
};

const props = defineProps<IProps>();
const { to, title = "Goto" } = props;
</script>

<style scoped></style>
