<template>
    <div class="py-6">
        <video :src="`/brands/${video}`" alt=""
            class="bg-blue-500 bg-opacity-0 w-full rounded-3xl my-5 mx-2 md:h-[30vh]  "
            autoplay=""
            loop=""
            muted=""
            playsinline="">
        </video>
        <div class="py-4 text-white">
            <h3 class="text-2xl">{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    video: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>
