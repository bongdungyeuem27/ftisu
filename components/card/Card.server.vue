<template>
  <div
    class="rounded-xl shadow-purple-400 shadow-xl flex flex-col justify-end h-64 items-stretch group transition-all duration-100 ease-in-out py-4 gap-2 w-48"
    :class="props.class"
  >
    <div class="relative">
      <div class="absolute bottom-0 left-0 right-0 flex flex-col items-center">
        <Image
          :src="image"
          alt="project"
          :width="250"
          :height="250"
          class="group-hover:scale-[1.3] transition-all duration-250 ease-in-out w-[80%] group-hover:drop-shadow-lg"
        ></Image>
      </div>
    </div>
    <FeaturesServer :features="features"></FeaturesServer>
    <div
      class="px-4 flex h-0 overflow-hidden opacity-0 transition-all duration-150 ease-in-out group-hover:!h-8 group-hover:!opacity-100"
    >
      <NuxtLink
        :to="to"
        class="text-blue-500 font-normal ml-auto text-md"
        target="_blank"
        >Learn more</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "@/components/image/Image.server.vue";
import FeaturesServer from "./Features.server.vue";
type IProps = {
  image: string;
  features: string[];
  to: string;
  class?: string;
};

const props = defineProps<IProps>();
const { image, features } = props;
</script>

<style scoped></style>
