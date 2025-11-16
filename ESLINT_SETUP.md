# Integración de ESLint y Prettier en Astro

## 🎯 Configuración Completada

Este proyecto ahora tiene integrado:
- ✅ **ESLint** - Linting de código para Astro, TypeScript y JavaScript
- ✅ **Prettier** - Formateo automático de código
- ✅ **eslint-plugin-astro** - Reglas específicas para componentes Astro
- ✅ **eslint-plugin-jsx-a11y** - Validación de accesibilidad
- ✅ **prettier-plugin-tailwindcss** - Ordenamiento de clases Tailwind

## 📦 Scripts Disponibles

### Linting
```bash
# Verificar errores de linting
pnpm lint

# Corregir automáticamente errores de linting
pnpm lint:fix
```

### Formateo
```bash
# Formatear código automáticamente
pnpm format

# Verificar formato sin modificar archivos
pnpm format:check
```

### Desarrollo
```bash
# Servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa de producción
pnpm preview
```

## 🛠️ Configuración de VS Code

El proyecto incluye configuración para VS Code en `.vscode/settings.json`:

- **Formateo automático al guardar**
- **Fix de ESLint al guardar**
- **Soporte completo para archivos .astro**

### Extensiones Recomendadas

Se recomienda instalar las siguientes extensiones (VS Code te las sugerirá):

1. **Astro** (`astro-build.astro-vscode`)
2. **ESLint** (`dbaeumer.vscode-eslint`)
3. **Prettier** (`esbenp.prettier-vscode`)
4. **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)

## 📝 Archivos de Configuración

- `eslint.config.mjs` - Configuración moderna de ESLint (flat config)
- `.prettierrc.mjs` - Configuración de Prettier
- `.prettierignore` - Archivos ignorados por Prettier
- `.vscode/settings.json` - Configuración del editor

## 🚀 Reglas Configuradas

### ESLint

- **Reglas recomendadas** para JavaScript y TypeScript
- **Reglas de Astro** para prevenir errores comunes
- **Reglas de accesibilidad** (jsx-a11y) para HTML semántico
- **Advertencias** para `set:html` y selectores CSS no usados

### Prettier

- **Ancho máximo:** 100 caracteres
- **Uso de tabs** para indentación
- **Punto y coma:** siempre
- **Comillas simples** en JavaScript/TypeScript
- **Ordenamiento automático** de clases Tailwind

## 💡 Consejos

1. **Al guardar**, el código se formateará automáticamente
2. **Errores de ESLint** aparecerán subrayados en el editor
3. **Puedes ejecutar `pnpm lint:fix`** para corregir errores automáticamente
4. **Las clases de Tailwind** se ordenarán automáticamente al formatear

## 🔧 Personalización

Puedes ajustar las reglas editando:

- `eslint.config.mjs` - Para reglas de ESLint
- `.prettierrc.mjs` - Para opciones de formateo

## 📚 Recursos

- [Documentación de eslint-plugin-astro](https://ota-meshi.github.io/eslint-plugin-astro/)
- [Documentación de Prettier](https://prettier.io/docs/en/)
- [Documentación de ESLint](https://eslint.org/docs/latest/)
