module.exports = {
    purge: [
        './build/*.html',
        './build/static/**/*.css',
        './build/static/**/*.js'
    ],
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