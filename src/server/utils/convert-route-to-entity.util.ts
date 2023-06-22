const mapping: Record<string, string> = {
  companies: 'company',
  features: 'feature',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
