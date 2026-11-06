const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path) {
  if (!path.startsWith("/")) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
