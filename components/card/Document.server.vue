<template>
  <CardServer
    :to="document.to"
    :image="document.image"
    :features="document.features"
    :title="document.title"
    :link-hint="'Github'"
    class="w-full h-60 sm:!h-80 sm:!w-60"
  ></CardServer>
</template>

<script setup lang="ts">
import { type IRelationship } from "../../data/metadata";
import CardServer from "./Card.server.vue";

type IProps = {
  document: IRelationship;
};

const props = defineProps<IProps>();

const { document } = props;
</script>

<style scoped></style>
