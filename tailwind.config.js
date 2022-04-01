module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {


            '2xl': { 'max': '1535px' },

            'xl': { 'max': '1279px' },


            'lg': { 'max': '1023px' },


            'md': { 'max': '767px' },


            'sm': { 'max': '639px' },

            'xsm': { 'max': '430px' },

            'xxsm': { 'max': '320px' },


        },
        extend: {
            colors: {
                'royal': 'rgb(13, 7, 48)',
                'great': '#13c4a5'


            },

        },
    },
    plugins: [],
}