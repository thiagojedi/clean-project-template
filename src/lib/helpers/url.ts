export function addQueryString(url: string, query: string) {
  const serparator = url.includes('?') ? '&' : '?';
  return url + serparator + query;
}

export function createImageSrcSet(image: string, sizes: Array<number>) {
  return sizes
    .map((size) => `${addQueryString(image, 'w=' + size)} ${size}w`)
    .join(', ');
}
