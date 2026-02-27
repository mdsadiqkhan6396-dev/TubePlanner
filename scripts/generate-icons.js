const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create favicon (32x32)
function createFavicon() {
    const size = 32;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Red gradient circle
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#FF0000');
    gradient.addColorStop(1, '#CC0000');
    
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 1, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // White play triangle
    ctx.beginPath();
    ctx.moveTo(12, 8);
    ctx.lineTo(12, 24);
    ctx.lineTo(25, 16);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
    
    return canvas.toBuffer('image/png');
}

// Create logo (512x512)
function createLogo() {
    const size = 512;
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Red gradient circle
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#FF0000');
    gradient.addColorStop(1, '#CC0000');
    
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 10, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // White play triangle
    ctx.beginPath();
    ctx.moveTo(180, 140);
    ctx.lineTo(180, 372);
    ctx.lineTo(380, 256);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
    
    // Calendar overlay (bottom right)
    const calX = 280, calY = 280, calW = 140, calH = 120;
    
    // Calendar body
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.roundRect(calX, calY, calW, calH, 10);
    ctx.fill();
    
    // Calendar header
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.roundRect(calX, calY, calW, 28, [10, 10, 0, 0]);
    ctx.fill();
    
    // Calendar rings
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(calX + 25, calY + 14, 5, 0, Math.PI * 2);
    ctx.arc(calX + calW - 25, calY + 14, 5, 0, Math.PI * 2);
    ctx.fill();
    
    // Calendar day (highlighted)
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.roundRect(calX + 15, calY + 40, 30, 25, 4);
    ctx.fill();
    
    // Calendar other days
    ctx.fillStyle = '#ddd';
    ctx.beginPath();
    ctx.roundRect(calX + 55, calY + 40, 30, 25, 4);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(calX + 95, calY + 40, 30, 25, 4);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(calX + 15, calY + 75, 30, 25, 4);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(calX + 55, calY + 75, 30, 25, 4);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(calX + 95, calY + 75, 30, 25, 4);
    ctx.fill();
    
    return canvas.toBuffer('image/png');
}

// Save files
const publicDir = path.join(__dirname, 'public');

fs.writeFileSync(path.join(publicDir, 'favicon.png'), createFavicon());
console.log('Created favicon.png');

fs.writeFileSync(path.join(publicDir, 'logo.png'), createLogo());
console.log('Created logo.png');

console.log('Done! PNG files created in public/ folder');
