const config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            width: {
                "1024": "1024px"
            },
            height: {
                "188": "188px",
            },
            spacing: {
                "40px": "40px",
            }
        },
    },
    plugins: [],
};
export default config;
