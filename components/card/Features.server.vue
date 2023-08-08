<template>
  <ul class="flex flex-col gap-2 cursor-default sm:py-1 px-6">
    <li v-for="feature in features">{{ feature }}</li>
  </ul>
</template>

<script setup lang="ts">
type IProps = {
  features: string[];
};
const props = defineProps<IProps>();
const { features } = props;
</script>
<style scoped></style>
