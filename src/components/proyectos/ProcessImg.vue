<template>
    <div class="py-6">
        <img :src="`/brands/${img}`" alt=""
            class="bg-blue-600 rounded-3xl my-5 mx-2 md:h-[30vh] lg:w-11/12">
        <div class="py-4 text-white">
            <h3 class="text-2xl">{{ title }}</h3>
            <p>{{ description }}</p>
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
