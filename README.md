# 🌍 Interactive 3D Globe Visualization

A stunning, fully customizable 3D globe visualization that displays global connections with animated arcs, city markers, and country dots. Perfect for showcasing international business connections, travel routes, or global network visualizations.

## ✨ Features

- **Interactive 3D Globe** - Smooth auto-rotation with drag controls
- **Animated Connection Arcs** - Flowing dashed lines showing connections between cities
- **City Markers** - Customizable markers for USA cities and international destinations
- **Country Dots** - Dotted representation of all countries
- **Atmospheric Glow** - Beautiful atmosphere effect around the globe
- **Fully Customizable** - Easy-to-modify color scheme, sizes, and locations
- **Responsive Design** - Adapts to any screen size
- **Performance Optimized** - Smooth animations even on lower-end devices

## 🎨 Customization

All major visual elements can be customized through variables at the top of the file:

### Colors
```javascript
const GLOBE_SURFACE_COLOR = 0x90EE90;        // Globe surface
const COUNTRY_DOT_COLOR = '#0D5C2E';         // Country dots
const ATMOSPHERE_COLOR = '#3BF493';          // Atmosphere glow
const USA_MARKER_COLOR = '#0D8F5F';          // USA markers
const DESTINATION_MARKER_COLOR = '#5A1BAF';  // Destination markers
const ARC_COLORS = ['#1B7F4D', '#0575C5', '#5A1BAF']; // Arc colors
```

### Dot Density & Appearance
```javascript
const HEX_POLYGON_RESOLUTION = 4;    // Dot density (1-15)
const HEX_POLYGON_MARGIN = 0.7;      // Space between dots (0-1)
const HEX_DOT_RESOLUTION = 2;        // Individual dot detail (1-10)
```

### Marker Sizes
```javascript
const USA_MARKER_SIZE = 0.25;              // USA city markers
const DESTINATION_MARKER_SIZE = 0.2;       // International markers
```

### Arc Customization
```javascript
const ARC_ALTITUDE = 0.35;           // Arc height (0-1)
const ARC_STROKE = 0.03;             // Line thickness
const ARC_DASH_LENGTH = 0.25;        // Dash length
const ARC_DASH_GAP = 1.5;            // Gap between dashes
const ARC_ANIMATION_SPEED = 5000;    // Animation speed (ms)
```

### Camera View
```javascript
globe.pointOfView({ lat: 45, lng: 0, altitude: 1.8 }, 0);
```
- **lat**: Vertical angle (0-90 for top view, negative for bottom)
- **lng**: Horizontal rotation (-180 to 180)
- **altitude**: Zoom distance (1.0 = close, 2.5+ = far)

## 📍 Adding Locations

### USA Points
```javascript
const usaPoints = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
    // Add more cities...
];
```

### Destinations
```javascript
const destinations = [
    { name: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
    { name: 'Sweden', lat: 59.3293, lng: 18.0686 },
    // Add more destinations...
];
```

## 🚀 Getting Started

### Prerequisites
- A web server (live-server, http-server, or similar)
- Modern web browser with WebGL support

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/globe-visualization.git
cd globe-visualization
```

2. Create an HTML file:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Globe Visualization</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        #globeViz {
            width: 100vw;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div id="globeViz"></div>
    <script src="https://unpkg.com/three@0.128.0/build/three.min.js"></script>
    <script src="https://unpkg.com/globe.gl"></script>
    <script src="globe.js"></script>
</body>
</html>
```

3. Add your JavaScript code to `globe.js`

4. Start a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

5. Open `http://localhost:8000` in your browser

## 🛠️ Technologies Used

- **[Globe.GL](https://globe.gl/)** - 3D globe visualization library
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **Vanilla JavaScript** - No framework dependencies

## 📖 Usage Examples

### View Presets
```javascript
// Top view
globe.pointOfView({ lat: 90, lng: 0, altitude: 2.0 }, 0);

// USA front view
globe.pointOfView({ lat: 30, lng: -95, altitude: 1.6 }, 0);

// Europe view
globe.pointOfView({ lat: 50, lng: 10, altitude: 1.8 }, 0);

// Side view
globe.pointOfView({ lat: 0, lng: -90, altitude: 2.0 }, 0);
```

### Rotation Speed
```javascript
// Faster rotation
globe.controls().autoRotateSpeed = 1.0;

// Slower rotation
globe.controls().autoRotateSpeed = 0.2;

// Disable rotation
globe.controls().autoRotate = false;
```

## 🎯 Use Cases

- **Business Presentations** - Showcase global operations and partnerships
- **Travel Portfolios** - Display visited countries and routes
- **Network Visualizations** - Illustrate data flow or connections
- **Educational Tools** - Geography and global awareness
- **Website Headers** - Eye-catching landing page elements

---
