<template>
    <div class="my-auto py-6">
        <video :src="`/brands/${video}`" alt=""
            class="bg-neutral-700 rounded-3xl my-auto mx-auto w-48 h-auto object-cover"
            autoplay=""
            loop=""
            muted=""
            playsinline="">
        </video>
        <div class="py-4 text-white">
            <h3 class="text-2xl p-4">{{ title }}</h3>
            <p class="text-justify">{{ description }}</p>
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
