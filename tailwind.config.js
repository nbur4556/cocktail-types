module.exports = {
    purge: ['./src/**/*.{js, jsx, ts, tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        maxHeight: {
            '0': '0',
            '1/4': '25vh',
            '1/2': '50vh',
            '3/4': '75vh',
            'full': '100vh'
        }
    },
    variants: {
        extend: {}
    },
    plugin: []
}