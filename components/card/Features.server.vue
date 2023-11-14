<template>
  <ul
    class="flex flex-col gap-1 cursor-default sm:py-1 px-6"
    :class="props.class"
  >
    <li
      v-for="feature in features"
      :key="feature"
      class="font-normal text-gray-600 truncate dark:text-gray-300"
    >
      {{ feature }}
    </li>
  </ul>
</template>

<script setup lang="ts">
type IProps = {
  features: string[];
  class?: string | object;
};
const props = defineProps<IProps>();
const { features } = props;
</script>
<style scoped></style>
