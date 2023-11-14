<template>
  <Header></Header>
  <main class="pb-6 bg-white dark:bg-black"><NuxtPage></NuxtPage></main>
  <FooterServer></FooterServer>
</template>
<script lang="ts" setup>
import Header from "@/components/header/Header.server.vue";
import FooterServer from "@/components/footer/Footer.server.vue";

// useServerSeoMeta({
//   title: "FTISU",
//   ogTitle: "FTISU",
//   description: "FTISU UIT Lab",
//   ogDescription: "FTISU UIT Lab",
// });
</script>
