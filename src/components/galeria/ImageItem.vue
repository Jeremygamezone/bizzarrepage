<template>
        <img :src="`/gallery/${img}`" alt=""
            class="rounded-3xl bg-black bg-opacity-20 my-5 mx-auto md:h-[30vh] object-cover">
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    img: {
        type: String,
        required: true
    }
})
</script>