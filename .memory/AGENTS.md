# Memoria del Proyecto: FPL Solar Leads

## Información General
- **Nombre del Proyecto**: FPL Solar Leads - Landing Page + Google Ads
- **Directorio**: C:/Users/alej1286/Downloads/Solar/
- **Repositorio Git**: https://github.com/alej1286/fpl-solar-leads.git
- **Landing Page**: https://alej1286.github.io/fpl-solar-leads/
- **Modelo Activo**: opencode-go/glm-5

## Objetivo
Generar leads para instalación de paneles solares en Miami, Florida, targeting clientes de FPL (Florida Power & Light) que quieren reducir su factura de electricidad.

## Estructura del Proyecto

```
/c/Users/alej1286/Downloads/Solar/
├── .git/                          # Repositorio Git
├── .memory/                       # Memoria del proyecto (este archivo)
├── index.html                     # Landing page principal (bilingüe ES/EN)
├── gracias.html                   # Página de confirmación post-formulario
├── textos-nextdoor.html           # 5 variaciones de copy para marketing orgánico
├── PLAN-DE-ACCION.md             # Guía de marketing orgánico (Nextdoor/Facebook)
├── OPTIMIZACION-GOOGLE-ADS.md    # Documentación completa de Google Ads
├── tracking-leads.csv            # Spreadsheet para trackear leads manuales
├── .env                          # Variables de entorno (NO commitear)
├── .gitignore                    # Archivos ignorados por Git
└── WhatsApp Image...            # Imagen de referencia (borrar después)
```

## Tecnología Stack
- **Frontend**: HTML5 + Tailwind CSS (CDN)
- **Formulario**: Tally.so embed (iframe)
- **Tracking**: Google Tag Manager (GTM-PFBPLN3G)
- **Conversions**: Google Ads Conversion ID AW-655123272
- **Hosting**: GitHub Pages (gratuito)

## Configuración de Google Ads

### Cuenta
- **Campaign**: "Ahorro FPL Miami 2026"
- **Campaign ID**: 23624656267
- **Presupuesto**: $10/día
- **Location**: Miami-Dade, Broward (South Florida)

### Ad Groups
1. **ES - Ahorro FPL** (Español)
2. **EN - FPL Savings** (Inglés)

### Keywords Principales
**Español** (ES - Ahorro FPL):
- "factura fpl alta"
- "ahorrar luz miami"
- "recibo electricidad miami"
- "fpl miami"
- Pujas: $8-14

**Inglés** (EN - FPL Savings):
- "high fpl bill"
- "save on electric bill miami"
- "fpl rates too high"
- "electric bill help"
- Pujas: $8-14

### Extensiones Configuradas
- **Sitelinks**: "Ver ahorro", "Cómo funciona", "Preguntas frecuentes" (ES)
- **Sitelinks**: "See your savings", "How it works", "Common questions" (EN)
- **Callouts**: 20+ frases destacadas (Free analysis, No commitment, etc.)
- **Ad Schedule**: L-V 8am-8pm, S-D 10am-6pm

### Palabras Negativas Configuradas
- trabajo, empleo, job, career, free, gratis, government, grant
- login, online payment, panel, paneles solares, pay bill
- pdf, phone number, program, solar, subsidy, template, training
- **NOTA**: "program" y "solar" estaban bloqueando keywords positivas - usuario debe hacer "Apply all" en Google Ads

## Landing Page (index.html)

### Características
- Bilingüe (Español/Inglés) con switcher
- Formulario Tally.so embebido
- Responsive (mobile-first)
- Trust indicators
- Testimonios (Social Proof)
- FAQ section
- Remarketing tag configurado

### Tracking Events
- `page_view` - Remarketing
- `tally_form_submit` - Conversion (enviado a GTM dataLayer)

## Fluj de Conversión

```
Usuario ve anuncio → Clic en anuncio → Landing page → Llena formulario Tally 
→ Gracias page (conversión trackeada) → Lead procesado manualmente
```

## Estado Actual (Última actualización: 2026-03-16)

### Completado ✅
- [x] Landing page creada y deployada
- [x] Google Ads configurado (keywords, ads, extensions, negatives)
- [x] Pujas optimizadas ($8-14 según keyword)
- [x] Sitelinks y callouts agregados
- [x] Programación de anuncios
- [x] GTM configurado para conversion tracking
- [x] Marketing orgánico preparado (textos-nextdoor.html)
- [x] Social proof y FAQ agregados a landing page
- [x] Remarketing tag configurado

### Pendiente - Acción del Usuario ⏳
- [ ] **CRÍTICO**: Hacer clic en "Apply all" en Google Ads para resolver conflicto de keywords negativas
- [ ] Esperar 24-48 horas para que empiecen las impresiones
- [ ] Revisar métricas diariamente (impresiones, CTR, CPC)

### Futuro 📋
- [ ] Remarketing campaign para visitantes que no convirtieron
- [ ] A/B testing de landing page
- [ ] Expandir targeting geográfico (Palm Beach, Monroe)
- [ ] Crear más variantes de anuncios
- [ ] Implementar CRM para leads

## Archivos Clave

### tracking-leads.csv
Formato para trackear leads manualmente:
```
Fecha, Plataforma, Grupo/Comunidad, Texto Usado, Clics Estimados, Leads Generados, Estado
```

### textos-nextdoor.html
5 variaciones de copy para marketing orgánico:
1. Opción 1: La Queja Casual
2. Opción 2: El "Dato" entre vecinos
3. Opción 3: La Pregunta Abierta
4. Opción 4: El Storytelling
5. Opción 5: Urgencia - Antes del Verano

Cada opción tiene UTM parameters únicos para tracking.

## Comandos Git Útiles

```bash
# Ir al directorio del proyecto
cd /c/Users/alej1286/Downloads/Solar

# Ver estado
git status

# Commit y push
git add -A && git commit -m "mensaje" && git push origin main

# Ver historial
git log --oneline -10
```

## Contactos y Referencias

- **Tally.so Form**: https://tally.so/embed/aQBypX
- **GitHub Pages**: https://alej1286.github.io/fpl-solar-leads/
- **Google Ads Account**: AW-655123272
- **GTM Container**: GTM-PFBPLN3G

## Notas Importantes

1. **NO commitear archivos sensibles**: .env, credenciales, passwords
2. **El formulario está en Tally.so**: No se almacena en el servidor
3. **GitHub Pages es gratuito**: No hay costo de hosting
4. **Presupuesto Google Ads**: $10/día = ~300/mes
5. **Meta**: 50+ clics, 10+ leads en Semana 1

## Troubleshooting Común

### No hay impresiones
1. Verificar que no haya conflictos de keywords negativas
2. Revisar que los anuncios estén aprobados
3. Confirmar que forma de pago esté activa
4. Esperar 24-48h para nuevos accounts

### Bajo CTR
1. Revisar relevance de keywords vs ads
2. Añadir más sitelinks
3. Probar nuevos headlines
4. Revisar Quality Score

### Bajo conversion rate
1. Mejorar landing page (faq, testimonials)
2. Asegurar que el formulariotally esté funcionando
3. Verificar que GTM esté enviand events

---

**Última sesión**: 2026-03-16
**Próxima revisión**: Después de 48 horas de hacer "Apply all" en Google Ads