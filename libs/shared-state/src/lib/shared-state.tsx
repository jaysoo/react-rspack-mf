import { useSyncExternalStore } from 'react';

// Created once per module instance. If Module Federation shares this library as a
// singleton, the host and every remote show the same id and count.
export const instanceId = Math.random().toString(36).slice(2, 8);

let count = 0;
const listeners = new Set<() => void>();

export function increment() {
  count++;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function SharedBadge({ app }: { app: string }) {
  const value = useSyncExternalStore(subscribe, () => count);
  return (
    <p data-testid="shared-badge">
      {app}: shared-state instance <strong>{instanceId}</strong>, count{' '}
      <strong>{value}</strong>{' '}
      <button onClick={increment}>increment</button>
    </p>
  );
}
