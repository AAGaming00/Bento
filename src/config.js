const config = {
    "12hr": false, // 12 Hour Clock, set this to "true" if you'd like it.
    greetings: {
        night: "Good Night",
        morning: "Good Morning",
        afternoon: "Pleasing afternoon",
        evening: "Delightful evening",
        name: "aa"
    },
    // Main Buttons
    buttons: [
        {
            url: 'https://github.com',
            icon: 'github'
        },
        {
            url: 'https://mail.google.com',
            icon: 'mail'
        }
    ],
    // right side panels
    panels: [
        // example link list panel
        {
            icon: 'github',
            items: [
                {
                    name: 'DanK',
                    url: 'https://github.com/DanKGooGly'
                },
                {
                    name: 'AA',
                    url: 'https://github.com/AAGaming00'
                }
            ]
        },
        // Iframe panel
        {
            url: 'https://example.com/',
            // optional prop to zoom the frame in/out
            zoom: 0.5
        }
    ],
    // For weather data, comment or remove this in order to disable it.
    weather: {
        // Weather icon pack to use
        iconPack: 'OneDark',
        // Whether to preload the icons or not
        preloadIcons: true,
        tempUnit: 'C',
        // Replace this with your own openweathermap.org key if you'd like to customize it.
        key: '1ba472bdeb003a88cf66c572ac6ffb3e',
        latitude: 43.653225,
        longitude: -79.383186
    }
}

if (typeof window !== 'undefined') Object.assign(config, window.config)

export default config
