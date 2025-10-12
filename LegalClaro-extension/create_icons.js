const fs = require('fs');
const path = require('path');

// Simple base64 encoded PNG icons (minimal legal scale icons)
const icons = {
  16: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE5SURBVDiNpZM9SwNBEIafRVsrwcJCG1sLG1sLbWwsrLSx0MZCGwttbCy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sRDEQhALQSxEsRDFQhQLUSxEsRDFQhQLUSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sRDEQhALQSxEsRDFQhQLUSxEsRDFQhQLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sRDEQhALQSxEsRDFQhQLUSxEsRDFQhQLUSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSy0sdDGQhsLbSxEsRDFQhQLUSxEsRDFQhALQSxEsRDFQhQLUSxEsRDFQhALQSxEsRDFQhQLUSxEsRDFQhQLQSw==',
  48: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANkSURBVGiB7ZnBaxNBFMafJCm0tYU2FtpYaGOhjYU2FtpYaGOhjYU2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZiYyE2FmJjITYWYmMhNhZi',
  128: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAHYgAAB2IBOHqZ2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAlNSURBVHic7Z3Bb9tGFMc/kmzJlmTLcuLETpM4aZq2adu0TdN2Xdu1XTc0GwYMw4YNG4YNGzZs2LBhw4YNG4YN+wsYNmzYsGHDhg0bNmzYsGHDhg0bNmzYsGHDhg0b'
};

// Create icons directory
if (!fs.existsSync('icons')) {
  fs.mkdirSync('icons');
}

// Create simple colored square icons as placeholder
const sizes = [16, 48, 128];
sizes.forEach(size => {
  // Create a simple SVG icon
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#grad)" />
      <text x="${size/2}" y="${size/2}" text-anchor="middle" dominant-baseline="middle" 
            fill="white" font-family="Arial" font-size="${size*0.7}">⚖</text>
    </svg>
  `;
  
  // Save as SVG first (can be converted to PNG later)
  fs.writeFileSync(path.join('icons', `icon${size}.svg`), svg);
  console.log(`Created icon${size}.svg`);
});

console.log('Icons created! Convert SVG to PNG using online tools or browser.');
console.log('For now, you can test the extension with SVG files.');