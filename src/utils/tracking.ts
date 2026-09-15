/**
 * Preserves marketing query parameters (UTMs, Facebook pixel, Google Ads, affiliates)
 * and appends them to checkout URLs seamlessly.
 */

const TRACKING_KEYS = [
  'src',
  'sck',
  'xcod',
  'fbclid',
  'gclid',
  'gbraid',
  'wbraid',
  'ttclid',
  'twclid',
  'msclkid',
  'epik',
  'ref',
  'affiliate',
  'aff',
  'campaign_id',
  'adset_id',
  'ad_id',
];

export function isTrackingParam(key: string): boolean {
  const lower = key.toLowerCase();
  return lower.startsWith('utm_') || TRACKING_KEYS.includes(lower);
}

export function getTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params: Record<string, string> = {};
  try {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.forEach((val, key) => {
      if (val && isTrackingParam(key)) {
        params[key] = val;
      }
    });

    // Also check sessionStorage / localStorage if stored earlier
    const stored = window.sessionStorage.getItem('cms_tracking_params');
    if (stored) {
      const parsed = JSON.parse(stored);
      Object.assign(params, parsed);
    } else if (Object.keys(params).length > 0) {
      window.sessionStorage.setItem('cms_tracking_params', JSON.stringify(params));
    }
  } catch {
    // ignore
  }
  return params;
}

export function buildCheckoutUrl(baseUrl: string): string {
  if (!baseUrl) return '#';
  try {
    const url = new URL(baseUrl);
    const tracking = getTrackingParams();
    Object.entries(tracking).forEach(([k, v]) => {
      if (!url.searchParams.has(k)) {
        url.searchParams.set(k, v);
      }
    });
    return url.toString();
  } catch {
    return baseUrl;
  }
}
