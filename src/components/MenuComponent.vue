<template>
    <div
        :class="['fixed w-full top-0 grid z-40 duration-700', { 'bg-black bg-opacity-40 backdrop-blur-sm': isScrolled, 'bg-transparent': !isScrolled }]">
        <nav>
            <ul>
                <li @click="toggleMenu"
                    class="absolute top-0 right-0 p-6 text-2xl text-white font-medium cursor-pointer lg:hidden">
                    <HamburgerIcon v-if="!isMenuVisible" class="w-8 h-8" />
                    <CloseIcon v-else class="w-8 h-8" />
                </li>
            </ul>
            <ul :class="[
                'flex flex-col lg:flex-row lg:items-center w-full lg:container mx-auto justify-end lg:justify-around duration-500',
                {
                    'hidden lg:flex': !isMenuVisible,
                    'flex': isMenuVisible,
                    'bg-black lg:bg-transparent': isMenuVisible,
                }]">
                <li class="text-white pt-14 block lg:hidden lg:border-none"></li>
                <MenuItemVue href="/">¿Quién soy?</MenuItemVue>
                <MenuItemVue href="/experiencia">Experiencia</MenuItemVue>
                <MenuItemVue href="/proyectos">Proyectos</MenuItemVue>
                <li class="w-[25vw]"></li>
                <MenuItemVue href="/galeria">Galería</MenuItemVue>
                <MenuItemVue href="/contacto">Contacto</MenuItemVue>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import MenuItemVue from './MenuItem.vue';
import HamburgerIcon from '../icons/menu-icons/HamburgerIcon.vue'
import CloseIcon from '../icons/menu-icons/CloseIcon.vue'

export default {
    components: {
        MenuItemVue,
        HamburgerIcon,
        CloseIcon
    },

    setup() {
        const isMenuVisible = ref<boolean>(false);
        const isScrolled = ref<boolean>(false);

        const toggleMenu = (): void => {
            isMenuVisible.value = !isMenuVisible.value;
        };

        const handleScroll = (): void => {
            isScrolled.value = window.scrollY > 0; // Este número sería el que variaría dependiendo el contexto 
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            toggleMenu,
            isMenuVisible,
            isScrolled
        };
    }
};
</script>