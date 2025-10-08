# ToggleMenu Component

Un componente reutilizable para menús móviles con funcionalidad completa de navegación.

## Características

- ✅ **Overlay con blur**: Fondo semitransparente con efecto blur
- ✅ **Animaciones suaves**: Transiciones con cubic-bezier
- ✅ **Accesibilidad completa**: ARIA labels, navegación por teclado
- ✅ **Cierre automático**: Escape, click fuera, scroll lock
- ✅ **Responsive**: Adaptado para todos los tamaños de pantalla
- ✅ **WhatsApp integrado**: Botón CTA con colores oficiales
- ✅ **Indicadores visuales**: Estados activos y hover effects

## Uso

```tsx
import ToggleMenu from './ToggleMenu';

<ToggleMenu
  isOpen={isMenuOpen}
  onClose={handleClose}
  links={navigationLinks}
  whatsapp={whatsappConfig}
  activeLink={currentSection}
  onLinkClick={handleLinkClick}
  onWhatsAppClick={handleWhatsAppClick}
/>
```

## Props

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `isOpen` | `boolean` | ✅ | Estado de apertura del menú |
| `onClose` | `() => void` | ✅ | Función para cerrar el menú |
| `links` | `NavLink[]` | ✅ | Array de enlaces de navegación |
| `whatsapp` | `WhatsAppConfig` | ✅ | Configuración del botón WhatsApp |
| `activeLink` | `string \| undefined` | ❌ | Enlace activo actual |
| `onLinkClick` | `(link: NavLink) => void` | ❌ | Callback al hacer click en enlace |
| `onWhatsAppClick` | `() => void` | ❌ | Callback al hacer click en WhatsApp |
| `className` | `string` | ❌ | Clases CSS adicionales |

## Estilos

El componente incluye estilos completos en `ToggleMenu.module.css`:

- **Overlay**: Fondo semitransparente con blur
- **Menu**: Panel deslizable desde la derecha
- **Enlaces**: Con indicadores laterales y animaciones
- **WhatsApp**: Botón con colores oficiales y efectos
- **Responsive**: Adaptado para mobile, tablet y desktop

## Accesibilidad

- **ARIA**: Roles y labels apropiados
- **Teclado**: Navegación con Tab y Escape
- **Focus**: Manejo correcto del foco
- **Screen readers**: Textos descriptivos

## Animaciones

- **Entrada**: Slide desde la derecha
- **Enlaces**: Staggered animation con delays
- **Hover**: Scale y translate effects
- **WhatsApp**: Shimmer effect en hover

## Responsive Breakpoints

- **Desktop (1024px+)**: Menú completo
- **Tablet (768px-1024px)**: Ajustes de padding
- **Mobile (<768px)**: Optimizaciones de tamaño
- **Small Mobile (<480px)**: Elementos más compactos
