# Script para empaquetar LegalClaro para Chrome Web Store
# Excluye archivos de desarrollo y empaqueta solo lo necesario

$extensionDir = "C:\Users\diego\LegalClaro\LegalClaro-extension"
$outputZip = "C:\Users\diego\LegalClaro\LegalClaro-ChromeStore-v1.0.0.zip"

# Crear estructura de directorios y copiar archivos
$tempDir = "temp_extension"
$filesToInclude = @(
    @{src="manifest.json"; dst="manifest.json"},
    @{src="background.js"; dst="background.js"},
    @{src="popup\popup.html"; dst="popup\popup.html"},
    @{src="popup\popup.css"; dst="popup\popup.css"},
    @{src="popup\popup.js"; dst="popup\popup.js"},
    @{src="icons\icon16.png"; dst="icons\icon16.png"},
    @{src="icons\icon48.png"; dst="icons\icon48.png"},
    @{src="icons\icon128.png"; dst="icons\icon128.png"}
)

Write-Host "Empaquetando LegalClaro para Chrome Web Store..." -ForegroundColor Cyan

# Eliminar zip anterior si existe
if (Test-Path $outputZip) {
    Remove-Item $outputZip -Force
    Write-Host "Eliminando paquete anterior..." -ForegroundColor Yellow
}

# Eliminar directorio temporal si existe
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
}

# Cambiar al directorio de la extensión
Set-Location $extensionDir

# Crear directorio temporal
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
New-Item -ItemType Directory -Path "$tempDir\popup" -Force | Out-Null
New-Item -ItemType Directory -Path "$tempDir\icons" -Force | Out-Null

# Copiar archivos manteniendo estructura
foreach ($file in $filesToInclude) {
    $sourcePath = $file.src
    $destPath = Join-Path $tempDir $file.dst
    $destDir = Split-Path $destPath -Parent
    
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    Copy-Item $sourcePath $destPath -Force
}

# Crear el archivo zip con estructura correcta
Compress-Archive -Path "$tempDir\*" -DestinationPath $outputZip -CompressionLevel Optimal

# Limpiar directorio temporal
Remove-Item $tempDir -Recurse -Force

Write-Host "Paquete creado exitosamente:" -ForegroundColor Green
Write-Host "   Ubicacion: $outputZip" -ForegroundColor White
Write-Host "   Archivos incluidos:" -ForegroundColor White

# Mostrar contenido del zip
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($outputZip)
foreach ($entry in $zip.Entries) {
    Write-Host "      - $($entry.FullName)" -ForegroundColor Gray
}
$zip.Dispose()

$size = (Get-Item $outputZip).Length
$sizeKB = [math]::Round($size / 1024, 2)
Write-Host "   Tamaño: $sizeKB KB" -ForegroundColor White

Write-Host ""
Write-Host "Listo para subir a Chrome Web Store Developer Dashboard!" -ForegroundColor Green