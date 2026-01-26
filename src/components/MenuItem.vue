<template>
    <li
        class="text-white font-medium p-4 lg:block lg:border-none text-center hover:scale-110 hover:text-blue-400 duration-300">
        <a :href="href">
            <slot></slot>
        </a>
    </li>
</template>

<script>

export default {
    name: 'MenuItemLink',
    props: {
        href: {
            type: String,
            required: true
        }
    }
};
</script>