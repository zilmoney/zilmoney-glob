// ============================================
// 🎨 COLOR CUSTOMIZATION SECTION
// ============================================
// Change these color values to customize your globe appearance
const GLOBE_SURFACE_COLOR = 0x0D5C2E;        // Globe surface color (hex: DARK GREEN) - CHANGED
const COUNTRY_DOT_COLOR = '#90EE90';         // Country dots color (hex string: LIGHT GREEN) - CHANGED
const ATMOSPHERE_COLOR = '#3BF493';          // Atmosphere glow color (hex string: bright green)
const USA_MARKER_COLOR = '#0D8F5F';          // USA city markers color (hex string: darker emerald)
const DESTINATION_MARKER_COLOR = '#5A1BAF';  // International destination markers (hex string: darker purple)

// Arc colors - you can add more colors to this array
const ARC_COLORS = ['#1B7F4D', '#0575C5', '#5A1BAF']; // Darker Green, Darker Blue, Darker Purple

// Lighting colors
const GREEN_LIGHT_COLOR = 0x1B7F4D;          // Green accent light
const PURPLE_LIGHT_COLOR = 0x5A1BAF;         // Purple accent light
const BLUE_LIGHT_COLOR = 0x0575C5;           // Blue accent light

// ============================================
// 📏 DOT DENSITY & SIZE CUSTOMIZATION
// ============================================
const HEX_POLYGON_RESOLUTION = 4;            // Dot density (1-15, higher = more dots, more performance impact)
const HEX_POLYGON_MARGIN = 0.7;              // Space between dots (0-1, lower = denser)
const HEX_DOT_RESOLUTION = 2;                // Individual dot detail (1-10)

// ============================================
// 🎯 MARKER SIZE CUSTOMIZATION
// ============================================
const USA_MARKER_SIZE = 0.25;                // Size of USA city markers
const DESTINATION_MARKER_SIZE = 0.2;         // Size of international destination markers

// ============================================
// ⚡ ARC/LINE CUSTOMIZATION
// ============================================
const ARC_ALTITUDE = 0.35;                   // How high arcs float above globe (0-1) - INCREASED MORE
const ARC_STROKE = 0.25;                     // Arc line thickness - INCREASED MORE
const ARC_DASH_LENGTH = 0.25;                // Length of each dash in the line - INCREASED MORE
const ARC_DASH_GAP = 1.5;                    // Gap between dashes - DECREASED MORE
const ARC_ANIMATION_SPEED = 5000;            // Animation speed in milliseconds (lower = faster)

// ============================================
// 🌍 GLOBE DATA
// ============================================

// Multiple USA starting points
const usaPoints = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
    { name: 'Miami', lat: 25.7617, lng: -80.1918 }
];

// Destination countries
const destinations = [
    { name: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
    { name: 'Sweden', lat: 59.3293, lng: 18.0686 },
    { name: 'France', lat: 48.8566, lng: 2.3522 },
    { name: 'Germany', lat: 52.5200, lng: 13.4050 },
    { name: 'Philippines', lat: 14.5995, lng: 120.9842 },
    { name: 'Estonia', lat: 59.4370, lng: 24.7536 },
    { name: 'India', lat: 28.6139, lng: 77.2090 }
];

// All locations with sizes from customization section
const locations = [
    ...usaPoints.map(p => ({ ...p, size: USA_MARKER_SIZE, isUSA: true })),
    ...destinations.map(d => ({ ...d, size: DESTINATION_MARKER_SIZE, isUSA: false }))
];

// Generate arcs from multiple USA cities to destinations
const arcs = [];

destinations.forEach((dest, destIndex) => {
    const usaCity = usaPoints[destIndex % usaPoints.length];
    
    arcs.push({
        startLat: usaCity.lat,
        startLng: usaCity.lng,
        endLat: dest.lat,
        endLng: dest.lng,
        color: ARC_COLORS[destIndex % ARC_COLORS.length]
    });
});

// Add some additional arcs for visual richness
usaPoints.forEach((usa, index) => {
    if (index < 3) {
        const dest = destinations[index + 4 % destinations.length];
        arcs.push({
            startLat: usa.lat,
            startLng: usa.lng,
            endLat: dest.lat,
            endLng: dest.lng,
            color: ARC_COLORS[(index + 1) % ARC_COLORS.length]
        });
    }
});

// Fetch countries data for hex polygons
fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
    .then(res => res.json())
    .then(countries => {
        initGlobe(countries);
    })
    .catch(() => {
        initGlobe({ features: [] });
    });

function initGlobe(countries) {
    const globe = Globe()
        (document.getElementById('globeViz'))
        
        // Globe surface color - DARK GREEN
        .globeMaterial(new THREE.MeshPhongMaterial({
            color: GLOBE_SURFACE_COLOR,
            opacity: 0.95,
            transparent: true
        }))
        
        // Country dots - LIGHT GREEN (so they show on dark surface)
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(HEX_POLYGON_RESOLUTION)
        .hexPolygonMargin(HEX_POLYGON_MARGIN)
        .hexPolygonUseDots(true)
        .hexPolygonColor(() => COUNTRY_DOT_COLOR)
        .hexPolygonDotResolution(HEX_DOT_RESOLUTION)
        .hexPolygonLabel(d => `<div style="background: rgba(255, 255, 255, 0.95); padding: 8px 12px; border-radius: 4px; color: ${COUNTRY_DOT_COLOR}; font-size: 13px; font-weight: 600; border: 1px solid ${COUNTRY_DOT_COLOR}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">${d.properties.ADMIN || d.properties.NAME}</div>`)
        .showAtmosphere(true)
        .atmosphereColor(ATMOSPHERE_COLOR)
        .atmosphereAltitude(0.12)
        
        // City markers (uses colors from customization section)
        .pointsData(locations)
        .pointAltitude(0.002)
        .pointColor(d => d.isUSA ? USA_MARKER_COLOR : DESTINATION_MARKER_COLOR)
        .pointRadius(d => d.size)
        .pointsMerge(false)
        .pointLabel(d => `<div style="background: rgba(255, 255, 255, 0.95); padding: 6px 10px; border-radius: 4px; color: ${d.isUSA ? USA_MARKER_COLOR : DESTINATION_MARKER_COLOR}; font-size: 12px; font-weight: 600; border: 1px solid ${d.isUSA ? USA_MARKER_COLOR : DESTINATION_MARKER_COLOR}; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">${d.name}</div>`)
        
        // Connection arcs/lines - LONGER
        .arcsData(arcs)
        .arcColor('color')
        .arcAltitude(ARC_ALTITUDE)
        .arcStroke(ARC_STROKE)
        .arcDashLength(ARC_DASH_LENGTH)
        .arcDashGap(ARC_DASH_GAP)
        .arcDashAnimateTime(ARC_ANIMATION_SPEED)
        .arcDashInitialGap(() => Math.random() * 5)
        
        // Transparent background
        .backgroundColor('rgba(255, 255, 255, 0)');

    // Configure camera and controls
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.35;
    globe.controls().enableZoom = true;
    globe.controls().minDistance = 120;
    globe.controls().maxDistance = 600;

    // Set initial camera position
    globe.pointOfView({ lat: 25, lng: -60, altitude: 1.3 }, 0);

    // Handle window resize
    window.addEventListener('resize', () => {
        globe.width(window.innerWidth);
        globe.height(window.innerHeight);
    });

    // Custom lighting (uses lighting colors from customization section)
    globe.onGlobeReady(() => {
        const scene = globe.scene();
        
        // Clear default lights
        scene.children.forEach(child => {
            if (child.type === 'AmbientLight' || child.type === 'DirectionalLight') {
                scene.remove(child);
            }
        });
        
        // Bright ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        scene.add(ambientLight);
        
        // Directional light for depth
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(-1, 1, 1);
        scene.add(directionalLight);
        
        // Green accent
        const greenLight = new THREE.PointLight(GREEN_LIGHT_COLOR, 0.4, 400);
        greenLight.position.set(-200, 100, 50);
        scene.add(greenLight);
        
        // Purple glow
        const purpleLight = new THREE.PointLight(PURPLE_LIGHT_COLOR, 0.4, 400);
        purpleLight.position.set(150, 100, 150);
        scene.add(purpleLight);
        
        // Blue accent
        const blueLight = new THREE.PointLight(BLUE_LIGHT_COLOR, 0.4, 400);
        blueLight.position.set(0, 150, -100);
        scene.add(blueLight);
    });

    // Performance optimization
    globe.renderer().setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Pause rotation on interaction
    let interactionTimeout;
    globe.controls().addEventListener('start', () => {
        clearTimeout(interactionTimeout);
        globe.controls().autoRotate = false;
    });

    globe.controls().addEventListener('end', () => {
        clearTimeout(interactionTimeout);
        interactionTimeout = setTimeout(() => {
            globe.controls().autoRotate = true;
        }, 3000);
    });
}
