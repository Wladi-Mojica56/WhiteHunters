import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Actualiza el state para mostrar la UI de error
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Puedes registrar el error en un servicio de monitoreo
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Llamar al callback personalizado si existe
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Renderizar UI de error personalizada o fallback
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // UI de error por defecto
      return (
        <div className="error-boundary">
          <div className="error-content">
            <h2>¡Oops! Algo salió mal</h2>
            <p>Ha ocurrido un error inesperado. Por favor, recarga la página.</p>
            <button 
              onClick={() => window.location.reload()}
              className="error-button"
            >
              Recargar página
            </button>
            {import.meta.env.DEV && (
              <details className="error-details">
                <summary>Detalles del error (solo en desarrollo)</summary>
                <pre>{this.state.error?.stack}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
