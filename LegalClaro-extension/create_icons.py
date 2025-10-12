import base64
from PIL import Image, ImageDraw, ImageFont
import os

# Create icons directory
os.makedirs('icons', exist_ok=True)

# Icon sizes
sizes = [16, 48, 128]

for size in sizes:
    # Create image with gradient background
    img = Image.new('RGBA', (size, size), (102, 126, 234, 255))
    draw = ImageDraw.Draw(img)
    
    # Create gradient effect
    for y in range(size):
        r = int(102 + (118-102) * y / size)
        g = int(126 + (75-126) * y / size) 
        b = int(234 + (162-234) * y / size)
        draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
    
    # Draw scale emoji (using text approximation)
    try:
        font_size = int(size * 0.7)
        # Try to use system font with emoji support
        font = ImageFont.truetype("seguiemj.ttf", font_size)
    except:
        # Fallback to default font
        try:
            font = ImageFont.load_default()
        except:
            font = None
    
    if font:
        # Draw emoji
        text = "⚖"
        bbox = draw.textbbox((0, 0), text, font=font)
        w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
        x = (size - w) // 2
        y = (size - h) // 2
        draw.text((x, y), text, fill='white', font=font)
    else:
        # Fallback: draw simple geometric representation
        center = size // 2
        # Draw balance beam
        beam_width = int(size * 0.6)
        beam_height = max(2, size // 16)
        draw.rectangle([center - beam_width//2, center - beam_height//2, 
                       center + beam_width//2, center + beam_height//2], 
                      fill='white')
        # Draw center post
        post_width = max(2, size // 16)
        post_height = int(size * 0.4)
        draw.rectangle([center - post_width//2, center, 
                       center + post_width//2, center + post_height], 
                      fill='white')
    
    # Save PNG
    img.save(f'icons/icon{size}.png', 'PNG')
    print(f"Created icon{size}.png")