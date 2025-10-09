# 🌍 Interactive 3D Globe Visualization

A stunning, Stripe-like 3D globe visualization with animated transaction flows, built with Globe.gl and Three.js.

## ✨ Features

- **Dark Space Theme**: Beautiful gradient background with animated stars
- **Glowing Country Dots**: 18 major cities represented as pulsing points
- **Animated Transaction Arcs**: Flowing lines showing connections between locations
- **Auto-Rotation**: Smooth, continuous globe rotation
- **Interactive Controls**: Zoom, pan, and rotate with mouse/touch
- **Fully Responsive**: Adapts to all screen sizes (100vw × 100vh)
- **Performance Optimized**: Hardware-accelerated WebGL rendering
- **Tooltip Hover**: Country names appear on hover
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript

## 📁 Project Structure

```
my-globe/
├── index.html    # Main HTML file
├── style.css     # Fullscreen dark styling
├── script.js     # Globe initialization & animations
└── README.md     # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download** this folder
2. Open `index.html` in a modern browser
3. That's it! No build process needed.

### GitHub Pages Deployment

1. **Create a new repository** on GitHub (e.g., `my-globe`)
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click Save
4. **Access your live globe** at:
   ```
   https://yourusername.github.io/my-globe/
   ```

## 🔧 Customization

### Adding New Locations

Edit the `locations` array in `script.js`:

```javascript
const locations = [
    { name: 'Your City', lat: 40.7128, lng: -74.0060, size: 0.8 },
    // Add more locations...
];
```

### Changing Arc Colors

Modify the `color` property in the `arcs` array:

```javascript
const arcs = [
    { startLat: 40.7128, startLng: -74.0060, endLat: 51.5074, endLng: -0.1278, color: '#00d4ff' },
    // Supported colors: '#00d4ff', '#0080ff', '#ffffff', or any hex color
];
```

### Adjusting Rotation Speed

Change the `autoRotateSpeed` value:

```javascript
globe.controls().autoRotateSpeed = 0.5; // Decrease for slower, increase for faster
```

### Modifying Arc Animation Speed

Update the `arcDashAnimateTime`:

```javascript
.arcDashAnimateTime(4000) // Time in milliseconds (4000 = 4 seconds)
```

## 🌐 WordPress Embedding

### Standard Embed

Add this code to any WordPress page or post (HTML block):

```html
<iframe 
  src="https://yourusername.github.io/my-globe/" 
  width="100%" 
  height="600" 
  style="border:none; display:block;">
</iframe>
```

### Fullscreen Embed

For a full-page experience:

```html
<iframe 
  src="https://yourusername.github.io/my-globe/" 
  width="100%" 
  height="100vh" 
  style="border:none; display:block; margin:0; padding:0;">
</iframe>
```

### Responsive Container

Wrap in a responsive container:

```html
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe 
    src="https://yourusername.github.io/my-globe/" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">
  </iframe>
</div>
```

## 🎨 Color Schemes

Change the visual theme by modifying these values:

**Cyan Theme (Default)**
- Primary: `#00d4ff`
- Secondary: `#0080ff`
- Accent: `#ffffff`

**Purple Theme**
```javascript
.pointColor(() => '#b794f4')
.atmosphereColor('#b794f4')
// Update arc colors to: '#b794f4', '#805ad5', '#ffffff'
```

**Green Theme**
```javascript
.pointColor(() => '#10b981')
.atmosphereColor('#10b981')
// Update arc colors to: '#10b981', '#059669', '#ffffff'
```

## ⚡ Performance Tips

1. **Limit data points**: Keep locations under 30 for best performance
2. **Reduce pixel ratio**: Change `Math.min(window.devicePixelRatio, 2)` to `1` for lower-end devices
3. **Disable bump map**: Remove `.bumpImageUrl()` line for faster loading
4. **Adjust arc count**: Fewer arcs = better performance

## 🛠️ Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies (via CDN)

- **Globe.gl**: Latest version from unpkg
- **Three.js**: Included with Globe.gl
- **Earth textures**: From three-globe example assets

## 🐛 Troubleshooting

**Globe not appearing?**
- Check browser console for errors
- Ensure you have internet connection (CDN resources)
- Verify all three files are in the same directory

**Performance issues?**
- Reduce number of arcs and points
- Lower pixel ratio in `script.js`
- Disable auto-rotation

**Arcs not animating?**
- Check that `.arcDashAnimateTime()` is set
- Verify arc data has valid coordinates

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🎯 Use Cases

- Company websites (transaction/network visualization)
- Data dashboards
- Portfolio projects
- Educational demonstrations
- Marketing landing pages
- SaaS product showcases

## 🌟 Credits

Built with:
- [Globe.gl](https://globe.gl/) by Vasco Asturiano
- [Three.js](https://threejs.org/) for 3D rendering
- Earth textures from NASA

---

**Made with ❤️ for beautiful data visualization**

For issues or questions, open an issue on GitHub.
