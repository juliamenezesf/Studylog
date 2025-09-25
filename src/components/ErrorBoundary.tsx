import React from "react";
type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err: unknown) { console.error(err); }
  render() {
    if (this.state.hasError) return <p className="container py-4">Erro inesperado</p>;
    return this.props.children;
  }
}