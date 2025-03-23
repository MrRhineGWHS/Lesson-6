// Initialize map view
var map = L.map('map').setView([10, 150], 3);

// Add a map layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Battles mentioned in your textbook
var battles = [
    {
        name: "Pearl Harbor",
        coords: [21.365, -157.95],
        clue: "Surprise attack that propelled the U.S. into WWII."
    },
    {
        name: "Philippines (Bataan Death March)",
        coords: [14.6, 120.983],
        clue: "Early defeat causing U.S. troops to endure the Bataan Death March."
    },
    {
        name: "Coral Sea",
        coords: [-15.0, 155.0],
        clue: "First major naval battle fought solely with aircraft carriers."
    },
    {
        name: "Midway",
        coords: [28.207, -177.373],
        clue: "Turning point battle where the U.S. decisively defeated the Japanese navy."
    },
    {
        name: "Guadalcanal",
        coords: [-9.577, 160.145],
        clue: "First significant Allied land victory in the Pacific."
    },
    {
        name: "Leyte Gulf",
        coords: [10.372, 125.138],
        clue: "Largest naval battle of WWII."
    },
    {
        name: "Iwo Jima",
        coords: [24.782, 141.319],
        clue: "Iconic battle famous for flag-raising image."
    },
    {
        name: "Okinawa",
        coords: [26.335, 127.805],
        clue: "Bloodiest Pacific battle, leading to invasion planning for mainland Japan."
    }
];

// Add markers and popups to map
battles.forEach(battle => {
    L.marker(battle.coords).addTo(map)
        .bindPopup(`<strong>${battle.name}</strong><br>${battle.clue}`);
});
