<template>
        <video :src="`/gallery/animations/${video}`" alt=""
            class="bg-blue-500 bg-opacity-0 w-full rounded-lg my-5 mx-2 md:h-[30vh]  "
            autoplay=""
            loop=""
            muted=""
            playsinline="">
        </video>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    video: {
        type: String,
        required: true
    }
})
</script>