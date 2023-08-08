<template>
  <img
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
    :class="props.class"
  />
</template>

<script setup lang="ts">

type IProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
};

const props = defineProps<IProps>();
const {
  src,
  width,
  height,
  alt,
} = props;
</script>

<style scoped lang="scss"></style>
