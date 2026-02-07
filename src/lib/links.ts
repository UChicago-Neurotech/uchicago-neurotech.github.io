export function withBase(href: string): string {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  if (!href.startsWith('/')) {
    return `${normalizedBase}/${href}`;
  }

  if (href === '/') {
    return normalizedBase || '/';
  }

  return `${normalizedBase}${href}`;
}

export function isExternal(href: string): boolean {
  return /^https?:/.test(href);
}
