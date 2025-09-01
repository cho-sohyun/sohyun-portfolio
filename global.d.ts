export {};

declare global {
  interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: DOMHighResTimeStamp;
  }

  interface IntersectionObserver {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
  }

  var IntersectionObserver: {
    prototype: IntersectionObserver;
    new (
      callback: (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => void,
      options?: IntersectionObserverInit
    ): IntersectionObserver;
  };
}
