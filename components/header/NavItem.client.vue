<template>
  <NuxtLink
    :to="to"
    :rel="title"
    class="border-2 border-transparent font-medium w-16 text-gray-700 h-full text-center align-middle flex items-center justify-center transition-all duration-100 hover:border-b-purple-400"
    :class="{ [props.class!]: props.class, 'border-b-purple-500 hover:!border-b-purple-500 text-black': route.path ===to }"
    ><span class="dark:text-white">{{ title }}</span></NuxtLink
  >
</template>

<script setup lang="ts">
type IProps = {
  to: string;
  class?: string;
  title: string;
};

const props = defineProps<IProps>();
const { to, title } = props;
const route = useRoute();
</script>

<style scoped></style>
