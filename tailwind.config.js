/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                fira_regular: ['var(--font-firacode-regular)'],
                fira_bold: ['var(--font-firacode-bold)'],
                exo2_regular: ['var(--font-exo2-regular)'],
                exo2_bold: ['var(--font-exo2-bold)'],
                anton_regular: ['var(--font-anton-regular)'],
            },
            backgroundColor: {
                primary: '#178573',
            },
            backgroundImage: {
                men: "url('/images/me.JPEG')",
            },
        },
    },
    plugins: [],
}
