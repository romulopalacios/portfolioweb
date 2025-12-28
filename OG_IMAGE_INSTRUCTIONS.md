# 🖼️ CÓMO GENERAR LA IMAGEN OG (og-image.png)

## Problema Detectado:
LinkedIn no acepta imágenes SVG para Open Graph. Necesitamos un PNG de 1200x630px.

## ✅ Solución Rápida - Opción 1: Usar herramienta online

1. **Ve a**: https://www.canva.com/design/create (gratis, no necesitas cuenta)

2. **Configuración**:
   - Tamaño personalizado: **1200 x 630 px**
   
3. **Diseño** (copia este estilo):
   ```
   Fondo: Negro #0a0a0a
   
   Texto Principal (grande, arriba a la izquierda):
   RÓMULO
   PALACIOS
   Color: Blanco #FFFFFF
   Font: Inter o Montserrat Bold, 120px
   
   Línea verde debajo:
   Color: #00ff88
   Ancho: 200px, Alto: 4px
   
   Subtítulo:
   "Ingeniero en Tecnologías de la Información"
   Color: Gris #888888
   Font: Inter Medium, 32px
   
   "Desarrollo Móvil • Web • Soluciones IoT"
   Color: Gris oscuro #666666
   Font: Inter Regular, 28px
   
   Logo RP (esquina superior derecha):
   Cuadrado negro con borde, texto "RP" blanco
   Punto verde (#00ff88) en la esquina
   ```

4. **Descargar**:
   - Formato: PNG
   - Calidad: Alta
   - Guardar como: `og-image.png`

5. **Copiar a tu proyecto**:
   ```powershell
   # Copia el archivo descargado a:
   C:\Users\romul\OneDrive\Desktop\portfolio\portfolioweb\public\og-image.png
   ```

---

## 🎨 Solución Rápida - Opción 2: Screenshot del generador HTML

1. Abre el archivo: `og-image-generator.html` en Chrome/Edge
2. Click en "Generar y Descargar PNG"
3. Guarda como `og-image.png` en la carpeta `/public`

---

## ⚡ Solución Rápida - Opción 3: Usar imagen temporal

Si necesitas deploy YA, puedes usar temporalmente tu foto de perfil escalada:

```powershell
# Esto usa tu foto actual como placeholder
Copy-Item "public/images/profile.jpg" "public/og-image.png"
```

Luego reemplázala con la imagen diseñada profesionalmente.

---

## 🚀 Después de tener og-image.png:

```bash
# 1. Verifica que existe
ls public/og-image.png

# 2. Commit y push
git add public/og-image.png
git commit -m "feat: add PNG OG image for LinkedIn compatibility"
git push

# 3. Espera 2 minutos el re-deploy de Vercel

# 4. Prueba en LinkedIn:
# https://www.linkedin.com/post-inspector/
# Pega: https://romuloportfolio.vercel.app/
```

---

## ✅ Checklist Final:

- [ ] Imagen og-image.png creada (1200x630px)
- [ ] Archivo en `/public/og-image.png`
- [ ] Commit y push a GitHub
- [ ] Esperar re-deploy de Vercel
- [ ] Probar en LinkedIn Post Inspector
- [ ] ¡Debería mostrar tu imagen personalizada!
