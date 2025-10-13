# Crear iconos PNG simples pero válidos para Chrome Web Store
# Usa rectángulos de colores con gradiente para representar LegalClaro

Add-Type -AssemblyName System.Drawing

function Create-SimpleIcon {
    param([int]$Size, [string]$OutputPath)
    
    # Crear bitmap
    $bitmap = New-Object System.Drawing.Bitmap($Size, $Size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Colores del tema (azul a dorado)
    $color1 = [System.Drawing.Color]::FromArgb(31, 42, 85)    # azul oscuro
    $color2 = [System.Drawing.Color]::FromArgb(188, 127, 39)  # dorado
    
    # Crear gradiente
    $rect = New-Object System.Drawing.Rectangle(0, 0, $Size, $Size)
    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush($rect, $color1, $color2, 45)
    
    # Fondo con gradiente
    $graphics.FillRectangle($brush, $rect)
    
    # Agregar símbolo de balanza (simple)
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, [math]::Max(1, $Size / 16))
    $centerX = $Size / 2
    $centerY = $Size / 2
    
    # Línea vertical (poste de la balanza)
    $graphics.DrawLine($pen, $centerX, $Size * 0.2, $centerX, $Size * 0.8)
    
    # Línea horizontal (brazo de la balanza)
    $graphics.DrawLine($pen, $Size * 0.3, $Size * 0.35, $Size * 0.7, $Size * 0.35)
    
    # Platillos (rectángulos pequeños)
    $platilloSize = $Size * 0.15
    $graphics.FillRectangle([System.Drawing.Brushes]::White, $Size * 0.25, $Size * 0.4, $platilloSize, $platilloSize / 3)
    $graphics.FillRectangle([System.Drawing.Brushes]::White, $Size * 0.6, $Size * 0.4, $platilloSize, $platilloSize / 3)
    
    # Guardar como PNG
    $bitmap.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    # Limpiar recursos
    $graphics.Dispose()
    $bitmap.Dispose()
    $brush.Dispose()
    $pen.Dispose()
}

# Crear los tres tamaños requeridos
Create-SimpleIcon -Size 16 -OutputPath "icon16.png"
Create-SimpleIcon -Size 48 -OutputPath "icon48.png" 
Create-SimpleIcon -Size 128 -OutputPath "icon128.png"

Write-Host "Iconos PNG creados exitosamente:" -ForegroundColor Green
Get-ChildItem "icon*.png" | ForEach-Object {
    $sizeKB = [math]::Round($_.Length / 1024, 2)
    Write-Host "  $($_.Name): $sizeKB KB" -ForegroundColor White
}