let batchDepth = 0;
const queue = new Set<() => void>();

export function batch(fn: () => void) {
  batchDepth++;
  try {
    fn();
  } finally {
    batchDepth--;
    if (batchDepth === 0) {
      for (const task of queue) task();
      queue.clear();
    }
  }
}

export function enqueue(fn: () => void) {
  if (batchDepth > 0) queue.add(fn);
  else fn();
}
