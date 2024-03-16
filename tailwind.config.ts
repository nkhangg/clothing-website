import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/layouts/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            gridTemplateColumns: {
                // Simple 16 column grid
                'col-product-detail-des': '700px 1fr',
                'col-product-detail-tab': '600px 1fr',
            },
            colors: {
                ancesst0: '#000',
                ancesst1: '#212025',
                ancesst4: '#6f6f6f',
                ancesst5: '#858585',
                ancesst6: '#f3f3f3',
                ancesst7: '#F2F4F3',
                ancesst8: '#F7FCFA',
                secondary: '#F7C04A',
                tertiary: '#BBE6EC',
                error: '#D61355',
                'green-primary': 'rgb(129,236,236)',
                'violet-primary': 'rgb(162,155,254)',
                heart: 'rgb(214,19,85)',
            },
            backgroundColor: {
                ancesst0: '#000',
                ancesst1: '#212025',
                ancesst4: '#6f6f6f',
                ancesst5: '#858585',
                ancesst6: '#f3f3f3',
                ancesst7: '#F2F4F3',
                ancesst8: '#F7FCFA',
                secondary: '#F7C04A',
                tertiary: '#BBE6EC',
                error: '#D61355',
                'green-primary': 'rgb(129,236,236)',
                'violet-primary': 'rgb(162,155,254)',
                heart: 'rgb(214,19,85)',
            },
            borderColor: {
                ancesst0: '#000',
                ancesst1: '#212025',
                ancesst4: '#6f6f6f',
                ancesst5: '#858585',
                ancesst6: '#f3f3f3',
                ancesst7: '#F2F4F3',
                ancesst8: '#F7FCFA',
                secondary: '#F7C04A',
                tertiary: '#BBE6EC',
                error: '#D61355',
                'green-primary': 'rgb(129,236,236)',
                'violet-primary': 'rgb(162,155,254)',
                heart: 'rgb(214,19,85)',
            },
        },
    },
    plugins: [],
};
export default config;
