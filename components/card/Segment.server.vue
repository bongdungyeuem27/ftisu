<template>
  <div
    :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
    class="rounded-xl shadow-lg py-6 shadow-purple-400 w-full flex gap-8 px-6 flex-col sm:flex-row sm:shadow-transparent"
    :class="{ 'sm:!flex-row-reverse': index % 2 }"
  >
    <CardServer
      :to="data.to"
      :image="data.image"
      :features="data.features"
      class="hidden sm:flex"
    ></CardServer>

    <div class="flex flex-col flex-1 gap-2 sm:py-4">
      <h4 class="text-2xl text-black font-semibold">{{ data.title }}</h4>
      <div class="flex w-full gap-12 sm:hidden">
        <Image
          :src="data.image"
          alt="project"
          :width="250"
          :height="250"
          class="w-[20%] object-contain drop-shadow-lg"
        ></Image>
        <FeaturesServer :features="data.features"></FeaturesServer>
      </div>
      <p class="text-md text-gray-600 font-normal">{{ data.description }}</p>
      <NuxtLink
        :to="data.to"
        target="_blank"
        class="py-2 px-4 text-white rounded-3xl flex gap-2 items-center bg-gradient-purple shadow-purple-300 hover:scale-[1.05] transition-all duration-150 ease-in-out shadow-xl max-w-max"
      >
        <span>Go to page</span>
        <Icon name="fa6-solid:arrow-right" color="white"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IRelationship } from "@/data/metadata";
import CardServer from "./Card.server.vue";
import FeaturesServer from "./Features.server.vue";
type IProps = {
  index: number;
  data: IRelationship;
};

const props = defineProps<IProps>();

const { index, data } = props;
</script>

<style scoped></style>
