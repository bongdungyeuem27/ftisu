<template>
  <div
    :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
    class="rounded-xl shadow-lg p-6 shadow-purple-400 w-full flex gap-8 flex-col sm:flex-row sm:shadow-transparent sm:p-0"
    :class="{ 'sm:!flex-row-reverse': index % 2 }"
  >
    <CardServer
      :to="data.to"
      :image="data.image"
      :features="data.features"
      class="hidden sm:flex"
    ></CardServer>

    <div class="flex flex-col flex-1 gap-2 sm:py-4 h-full justify-between">
      <h3 class="text-2xl text-black font-semibold dark:text-white">{{ data.title }}</h3>
      <div class="flex w-full gap-4 shrink-0 sm:hidden sm:gap-12">
        <Image
          :src="data.image"
          alt="project"
          :width="250"
          :height="250"
          class="flex-1 w-[20%] object-contain drop-shadow-lg"
        ></Image>
        <FeaturesServer :features="data.features"></FeaturesServer>
      </div>
      <div class="flex-1 flex items-center">
        <p
          class="text-md text-justify text-gray-600 font-light text-ellipsis h-36 block break-words overflow-hidden leading-6 dark:text-gray-300"
        >
          {{ data.description }}
        </p>
      </div>
      <NuxtLink
        :to="data.to"
        target="_blank"
        :rel="data.title"
        class="py-2 shrink-0 px-4 text-white rounded-3xl flex gap-2 items-center bg-gradient-purple shadow-purple-300 hover:scale-[1.05] transition-all duration-150 ease-in-out shadow-xl max-w-max"
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
