<template>
  <Header></Header>
  <NuxtPage></NuxtPage>
  <div>footer</div>
</template>
<script lang="ts" setup>
import Header from "@/components/header/Header.server.vue";

useSeoMeta({
  title: "FTISU",
  ogTitle: "FTISU",
  description: "FTISU UIT Lab",
  ogDescription: "FTISU UIT Lab",
});
</script>
