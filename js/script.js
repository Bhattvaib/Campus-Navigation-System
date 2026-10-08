// // ============================================================
// // FIRST GLANCE - STAGE 2 STATIC UI
// // No Django, Python, database or API is required.
// // ============================================================


// ---------------- MAP SETUP ----------------
const southWest = L.latLng(30.2660, 77.9930);
const northEast = L.latLng(30.2700, 77.9990);
const bounds = L.latLngBounds(southWest, northEast);

const map = L.map("map", {
    center: [30.267652, 77.995176],
    zoom: 17.5,
    minZoom: 17,
    maxZoom: 19,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);



// ---------------- RESET ----------------
function resetMap(updateFields = true) {
    if (pathLayer) {
        map.removeLayer(pathLayer);
        pathLayer = null;
    }

    start = null;
    end = null;

    if (updateFields) {
        document.getElementById("from").innerText = "--";
        document.getElementById("to").innerText = "--";
        document.getElementById("distance").innerText = "--";
        document.getElementById("time").innerText = "--";
    }

    addMarkers();
}

document.getElementById("resetBtn").addEventListener("click", function (event) {
    event.stopPropagation();
    resetMap(true);
});

map.on("click", function () {
    if (start || end || pathLayer) {
        resetMap(true);
    }
});


// ---------------- CUSTOM ICONS ----------------
function startIcon() {
    return L.divIcon({
        className: "",
        html: '<div style="background:green;width:16px;height:16px;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });
}

function endIcon() {
    return L.divIcon({
        className: "",
        html: '<div style="background:red;width:16px;height:16px;border:3px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,.4)"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
    });
}
