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
                fira_code: ['var(--font-firacode)'],
                exo2: ['var(--font-exo2)'],
                anton: ['var(--font-anton)'],
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
