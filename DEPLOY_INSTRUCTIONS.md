# 🚀 Instrucciones Post-Deploy en Vercel

## ⚡ Después de hacer deploy en Vercel:

1. **Vercel te asignará un dominio automático**, algo como:
   ```
   tu-portfolio-romulo.vercel.app
   ```

2. **Buscar y reemplazar** en estos archivos:
   
   ### Archivos a actualizar:
   - `index.html` (5 ocurrencias)
   - `public/robots.txt` (1 ocurrencia)
   - `public/sitemap.xml` (2 ocurrencias)
   - `README.md` (3 ocurrencias)

3. **Comando rápido** para buscar todos los placeholders:
   ```bash
   grep -r "REPLACE_WITH_YOUR_DOMAIN" .
   ```

4. **Ejemplo de reemplazo** (VS Code):
   - Presiona `Ctrl + Shift + H` (Find and Replace en todos los archivos)
   - Buscar: `REPLACE_WITH_YOUR_DOMAIN`
   - Reemplazar: `tu-portfolio-romulo.vercel.app`
   - Click en "Replace All"

5. **Commit y push:**
   ```bash
   git add .
   git commit -m "chore: update domain URLs after Vercel deployment"
   git push
   ```

6. **Vercel detectará el cambio** automáticamente y re-deployará con las URLs correctas.

---

## 📝 URLs que quedarán después del reemplazo:

- **Website**: https://tu-portfolio-romulo.vercel.app/
- **OG Image**: https://tu-portfolio-romulo.vercel.app/og-image.svg
- **Sitemap**: https://tu-portfolio-romulo.vercel.app/sitemap.xml

---

## ✅ Checklist Final:

- [ ] Deploy inicial en Vercel
- [ ] Copiar el dominio asignado
- [ ] Reemplazar todos los placeholders
- [ ] Commit y push
- [ ] Verificar en redes sociales (compartir link en Facebook/Twitter para ver OG image)

## 🎯 Opcional: Dominio Personalizado

Si más adelante compras un dominio (ej: romulopalacios.dev):

1. Ve a tu proyecto en Vercel → Settings → Domains
2. Agrega tu dominio personalizado
3. Actualiza los DNS según instrucciones de Vercel
4. Repite el proceso de buscar/reemplazar con tu nuevo dominio
