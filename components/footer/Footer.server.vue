<template>
  <footer
    class="relative pt-2 lg:pt-2 lg:pb-0 text- min-h-[15rem] flex items-end"
  >
    <div
      class="flex flex-col items-center justify-between w-full px-4 gap-2 md:flex-row"
    >
      <div class="flex flex-row items-center gap-2 basis-0 grow-[1]">
        <NuxtLink to="/" class="mb-2 inline-block max-w-[160px]">
          <ImageServer
            :width="150"
            :height="100"
            :src="logo"
            alt="logo"
          ></ImageServer>
        </NuxtLink>
      </div>

      <div class="flex justify-center items-end gap-2 mb-2 md:mb-6">
        <div class="flex-1">
          <h4 class="text-dark mb-2 text-lg font-semibold">License</h4>
          <div
            class="flex flex-row md:flex-col gap-1 items-center md:items-start"
          >
            <p class="text-body-color text-base font-quicksand">
              &copy; Copyright 2023 FTISU
              <br />
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <div class="basis-0 grow-[1]"></div>
    </div>

    <div>
      <span class="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="217"
          height="229"
          viewBox="0 0 217 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
            fill="url(#paint0_linear_1179_5)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_5"
              x1="76.5"
              y1="250"
              x2="76.5"
              y2="1.22829e-05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A926D1" stopOpacity="0.8" />
              <stop offset="1" stop-color="#C86CBA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span class="absolute top-10 right-10 z-[-1]">
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
            fill="url(#paint0_linear_1179_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1179_4"
              x1="-1.63917e-06"
              y1="37.5"
              x2="75"
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#923AFF" stopOpacity="0.31" />
              <stop offset="1" stop-color="#ED4BDA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ImageServer from "@/components/image/Image.server.vue";
import logo from "@/assets/images/logo.png";
</script>

<style scoped></style>
