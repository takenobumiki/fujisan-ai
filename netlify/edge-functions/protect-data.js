export default async (request, context) => {
  const referer = request.headers.get('referer') || '';
  const secFetchSite = request.headers.get('sec-fetch-site') || '';
  
  if (secFetchSite === 'same-origin') return context.next();
  if (referer.includes('fujisan.ai') || referer.includes('localhost')) return context.next();
  
  return new Response('Access Denied', { status: 403 });
};

export const config = { path: ['/data/*'] };
