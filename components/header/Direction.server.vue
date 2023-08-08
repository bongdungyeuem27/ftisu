<template>
  <nav class="flex gap-2 items-stretch flex-1 justify-center">
    <NavItem to="/" :title="'Home'"></NavItem>
    <NavItem to="/team" :title="'Team'"></NavItem>
  </nav>
</template>

<script setup lang="ts">
import NavItem from "./NavItem.client.vue";

</script>

<style scoped></style>
