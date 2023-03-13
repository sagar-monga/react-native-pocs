import {Component, ReactNode} from 'react';

/**
 * Catch rendering errors with Error Boundary so that blank screen is never given in any child component
 */
export class ErrorBoundary extends Component<
  // P - props
  // S - state
  // SS - snapshot returned by getSnapshotBeforeUpdate
  {children: ReactNode; fallback: string},
  {hasError: boolean}
> {
  constructor(props: {children: ReactNode; fallback: string}) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error: any, info: any) {
    //* Log error to logging service
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
