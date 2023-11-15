<template>
  <div
    class="rounded-xl h-64 shadow-purple-300 shadow-2xl flex flex-row-reverse justify-end items-stretch group ease-in-out py-4 gap-2 w-48 transition-all duration-250 hover:shadow-purple-400 sm:flex-col dark:shadow-purple-500 dark:shadow-lg"
    :class="{[props.class!]: props.class, '!gap-0': title}"
  >
    <div class="relative flex-1">
      <div class="absolute bottom-0 left-0 right-0 flex flex-col items-center">
        <Image
          :src="image"
          alt="project"
          :width="250"
          :height="250"
          class="sm:group-hover:scale-[1.3] transition-all !duration-350 ease-in-out w-[80%] sm:group-hover:drop-shadow-lg dark:!shadow-white dard:sm:group-hover:drop-shadow-lg"
        ></Image>
        <div class="visible sm:invisible w-full flex justify-center px-8">
          <LearnmoreServer
            :title="linkHint"
            class="!px-0"
            :to="to"
          ></LearnmoreServer>
        </div>
      </div>
    </div>
    <div class="flex flex-col py-8 sm:py-0">
      <h3
        v-if="title"
        class="px-4 text-black text-xl font-semibold cursor-default text-center sm:group-hover:text-purple-700 dark:text-white dark:group-hover:text-purple-200"
      >
        {{ title }}
      </h3>
      <FeaturesServer
        :features="features"
        class="mt-8 sm:mt-0"
        :class="{ '!px-8': title }"
      ></FeaturesServer>
      <LearnmoreServer
        :title="linkHint"
        class="invisible sm:visible group"
        :to="to"
      ></LearnmoreServer>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "@/components/image/Image.server.vue";
import FeaturesServer from "./Features.server.vue";
import LearnmoreServer, { type ICardHint } from "./Learnmore.server.vue";
type IProps = {
  image: string;
  features: string[];
  to: string;
  title?: string;
  class?: string;
  linkHint?: ICardHint;
};

const props = defineProps<IProps>();
const { image, features, title } = props;
</script>

<style scoped></style>
