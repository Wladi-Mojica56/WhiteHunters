# Hero Component

A highly customizable, enterprise-ready hero section component built with React and TypeScript.

## Features

- ✅ **Fully Configurable**: Props-based customization
- ✅ **Accessibility First**: WCAG 2.1 AA compliant
- ✅ **Performance Optimized**: Memoized and intersection observer
- ✅ **Error Handling**: Built-in error boundaries
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **TypeScript**: Full type safety
- ✅ **Customizable**: Multiple variants and sizes
- ✅ **Animation Control**: Smart animation management

## Usage

### Basic Usage

```tsx
import Hero from './components/Hero';

function App() {
  return <Hero />;
}
```

### Advanced Configuration

```tsx
import Hero from './components/Hero';
import { HeroConfig } from './types/hero.types';

const customConfig: Partial<HeroConfig> = {
  badge: {
    text: 'Custom Badge',
    icon: '🚀',
    color: '#00ff00',
  },
  title: {
    line1: 'Welcome to',
    line2: 'Our Platform',
    accent: 'Platform',
    accentColor: '#ff6b6b',
  },
  description: 'Your custom description here...',
  buttons: [
    { id: 'cta1', text: 'Get Started', variant: 'primary' },
    { id: 'cta2', text: 'Learn More', variant: 'secondary' },
  ],
  stats: [
    { id: 'users', number: '10K+', label: 'Active Users' },
    { id: 'projects', number: '500+', label: 'Projects Completed' },
  ],
};

function App() {
  return (
    <Hero
      config={customConfig}
      variant="cyber"
      size="lg"
      enableAnimations={true}
      onButtonClick={(button) => console.log('Button clicked:', button)}
      onStatClick={(stat) => console.log('Stat clicked:', stat)}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `config` | `Partial<HeroConfig>` | `undefined` | Custom configuration object |
| `className` | `string` | `''` | Additional CSS classes |
| `variant` | `'default' \| 'minimal' \| 'cyber' \| 'corporate'` | `'default'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size variant |
| `onButtonClick` | `(button: HeroButton) => void` | `undefined` | Button click handler |
| `onStatClick` | `(stat: HeroStat) => void` | `undefined` | Stat click handler |
| `onScrollClick` | `() => void` | `undefined` | Scroll indicator click handler |
| `enableAnimations` | `boolean` | `true` | Enable/disable animations |
| `enableIntersection` | `boolean` | `true` | Enable intersection observer |

## Variants

### Default
Standard hero with glassmorphism effects and animations.

### Minimal
Clean, simple design with reduced visual elements.

### Cyber
Dark, futuristic theme with cyber-themed animations.

### Corporate
Professional, business-focused design.

## Sizes

- **sm**: Compact height (70vh)
- **md**: Standard height (100vh)
- **lg**: Large height (110vh)
- **xl**: Extra large height (120vh)

## Configuration

### HeroConfig Interface

```typescript
interface HeroConfig {
  badge: {
    text: string;
    color?: string;
    backgroundColor?: string;
    icon?: string;
  };
  title: {
    line1: string;
    line2: string;
    accent: string;
    accentColor?: string;
  };
  description: string;
  buttons: HeroButton[];
  stats: HeroStat[];
  visualElements: HeroVisualElement[];
  scrollIndicator: {
    text: string;
    enabled: boolean;
  };
  background: {
    gradient?: string;
    pattern?: 'grid' | 'dots' | 'lines' | 'none';
    opacity?: number;
  };
}
```

## Accessibility

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Focus management
- ✅ High contrast support

## Performance

- ✅ React.memo for re-render optimization
- ✅ useMemo for expensive calculations
- ✅ Intersection Observer for lazy animations
- ✅ CSS-only animations
- ✅ Reduced motion support
- ✅ Device capability detection

## Error Handling

The component includes a built-in error boundary that gracefully handles errors and provides a fallback UI.

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

MIT
