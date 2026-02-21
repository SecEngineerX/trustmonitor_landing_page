/**
 * TRUSTMONITOR PERFORMANCE ENGINE v2.0
 * Focus: LCP, INP, and Memory Safety
 */

type MetricCallback = (metric: any) => void;

class PerformanceEngine {
  private static instance: PerformanceEngine;
  private observer: IntersectionObserver | null = null;
  private readonly config = {
    rootMargin: '50px',
    threshold: 0.01,
  };

  private constructor() {
    this.init();
  }

  public static getInstance(): PerformanceEngine {
    if (!PerformanceEngine.instance) {
      PerformanceEngine.instance = new PerformanceEngine();
    }
    return PerformanceEngine.instance;
  }

  private init() {
    if (typeof window === 'undefined') return;
    
    this.setupResourcePrioritization();
    this.initSmartLazyLoading();
    this.monitorLongTasks();
  }

  /**
   * RESOURCE PRIORITIZATION
   * Uses Fetch Priority API for critical assets
   */
  private setupResourcePrioritization() {
    // Priority hints for the LCP element (handled via DOM)
    const lcpElement = document.querySelector('.priority-high');
    if (lcpElement) lcpElement.setAttribute('fetchpriority', 'high');
  }

  /**
   * SMART LAZY LOADING
   * Uses a MutationObserver to handle dynamic content (React/Next.js)
   */
  private initSmartLazyLoading() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement | HTMLVideoElement;
          this.preloadAsset(target);
          this.observer?.unobserve(target);
        }
      });
    }, this.config);

    // Initial scan + Dynamic Monitoring
    const scan = () => {
      document.querySelectorAll('[data-perf-lazy]').forEach(el => this.observer?.observe(el));
    };

    scan();
    const mutObserver = new MutationObserver(debounce(scan, 250));
    mutObserver.observe(document.body, { childList: true, subtree: true });
  }

  private preloadAsset(el: any) {
    if (el.dataset.src) {
      el.src = el.dataset.src;
      el.classList.add('loaded');
    }
  }

  /**
   * LONG TASK MONITORING
   * Detects Main Thread blocking > 50ms
   */
  private monitorLongTasks() {
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          this.reportMetric({ name: 'LONG_TASK', duration: entry.duration, start: entry.startTime });
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }
  }

  public reportMetric(metric: any) {
    // In production, this pipes to an internal ELK stack or Grafana
    if (process.env.NODE_ENV === 'production') {
      const body = JSON.stringify(metric);
      (navigator.sendBeacon && navigator.sendBeacon('/api/v1/perf', body)) || 
      fetch('/api/v1/perf', { method: 'POST', body, keepalive: true });
    }
  }
}

/**
 * MEMOIZATION v2: WeakMap for Garbage Collection safety
 */
export const memoize = <T extends object, R>(fn: (arg: T) => R): ((arg: T) => R) => {
  const cache = new WeakMap<T, R>();
  return (arg: T): R => {
    if (cache.has(arg)) return cache.get(arg)!;
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
};

/**
 * DEBOUNCE: Standard implementation
 */
export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const perfEngine = PerformanceEngine.getInstance();
