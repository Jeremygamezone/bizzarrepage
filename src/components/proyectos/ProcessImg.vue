<template>
    <div class="my-auto py-6">
        <img :src="`/brands/${img}`" alt=""
            class="bg-neutral-700 rounded-3xl my-auto mx-auto w-56 h-auto object-cover shadow-lg">
        <div class="p-4 text-white uppercase">
            <h3 class="text-2xl p-4 font-bold">{{ title }}</h3>
            <p class="text-justify">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    img: {
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
