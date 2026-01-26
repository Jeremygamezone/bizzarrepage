/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                teak: {
                    50: '#f7f5ef',
                    100: '#ebe7d6',
                    200: '#dacdae',
                    300: '#c4ae80',
                    400: '#b2935d',
                    500: '#a3814f',
                    600: '#8c6842',
                    700: '#714f37',
                    800: '#604433',
                    900: '#533b30',
                    950: '#2f1f19',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
