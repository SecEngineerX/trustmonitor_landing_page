/**
 * TRUSTMONITOR CONTENT INTEGRITY ENGINE v2.2
 * Hardened for Next.js Hybrid Environments
 */

class ContentGuard {
  private static instance: ContentGuard;
  private readonly APP_ID = 'TM-PROPRIETARY-2026';
  private initialized = false;

  private constructor() {} // Constructor is a placeholder. Logic stays out.

  public static getInstance(): ContentGuard {
    if (!ContentGuard.instance) ContentGuard.instance = new ContentGuard();
    return ContentGuard.instance;
  }

  /**
   * Primary Execution Loop
   * Call this only in Client-Side useEffect
   */
  public run() {
    if (typeof window === 'undefined' || this.initialized) return;

    // Wait for the DOM to be ready for manipulation
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.engage());
    } else {
      this.engage();
    }
  }

  private engage() {
    console.log("🛡️ [Security] Engaging Integrity Controls...");
    this.setupClipboardInterceptor();
    this.setupCanaryElements();
    this.pollForWatermarks(); // Dynamic handling
    this.initialized = true;
  }

  private setupClipboardInterceptor() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      const selection = window.getSelection();
      // Don't waste time on tiny selections
      if (!selection || selection.toString().length < 10) return;

      const traceId = this.generateTraceHash();
      const metadata = `\n\n[ID: ${traceId}]\nVerify: ${document.location.href}`;
      const payload = selection.toString() + metadata;

      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', payload);
        e.preventDefault();
      }
      this.logSecurityEvent('CONTENT_EXFIL', { traceId });
    });
  }

  private pollForWatermarks() {
    // Check for new targets every time the DOM updates
    const observer = new MutationObserver(() => {
      const targets = document.querySelectorAll('[data-integrity="high"]');
      const marker = '\u200B\u200C\u200D'; 

      targets.forEach((el) => {
        if (el.textContent && !el.textContent.includes(marker)) {
          // Use innerHTML to ensure the marker is at the very start of the node
          el.innerHTML = `<span style="display:none">${marker}</span>${el.innerHTML}`;
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  private setupCanaryElements() {
    if (document.getElementById('tm-canary')) return;
    const canary = document.createElement('a');
    canary.id = 'tm-canary';
    canary.href = `/api/v1/trap?ref=${btoa(window.location.pathname)}`;
    canary.style.cssText = 'position:absolute;top:-999px;opacity:0;';
    canary.setAttribute('aria-hidden', 'true');
    document.body.appendChild(canary);
  }

  private generateTraceHash() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  private logSecurityEvent(type: string, meta: object) {
    // Push to your Analytics/Performance engine
    console.debug(`[Security] ${type}`, meta);
  }
}

export const contentGuard = ContentGuard.getInstance();

