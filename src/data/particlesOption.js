export default {
    background: {
        color: {
        value: "#111",
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
        value: "#8e7b3b",
        },
        collisions: {
        enable: true,
        },
        move: {
        direction: "bottom",
        enable: true,
        random: false,
        speed: 1,
        straight: false,
        },
        number: {
        density: {
            enable: true,
            area: 800,
        },
        value: 60,
        },
        opacity: {
        random: {
            enable: true,
            minimumValue: 0.1
        },
        animation: {
            enable: true,
            startValue: "random",
            minimumValue: 0.1,
            speed: 7
        }
        },
        shape: {
        type: "circle",
        },
        size: {
        value: { min: 1, max: 10 },
        },
    },
    detectRetina: true,
}