<template>
    <div class="my-auto py-6">
        <img :src="imgName" alt=""
            class="rounded-3xl my-auto mx-auto w-56 h-56 object-cover shadow-lg">

        <div class="p-8 text-white uppercase">
            <h3 class="text-2xl p-4 font-bold">{{ title }}</h3>
            <p class="text-justify">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgName: {
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