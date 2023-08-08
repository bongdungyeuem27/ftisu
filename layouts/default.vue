<template>
  <Header></Header>
  <NuxtPage></NuxtPage>
  <FooterServer></FooterServer>
</template>
<script lang="ts" setup>
import Header from "@/components/header/Header.server.vue";
import FooterServer from "@/components/footer/Footer.server.vue";

useSeoMeta({
  title: "FTISU",
  ogTitle: "FTISU",
  description: "FTISU UIT Lab",
  ogDescription: "FTISU UIT Lab",
});
</script>
