export default function handler(req, res) {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: https://www.seo-analizi.com/sitemap.xml',
    ''
  ].join('\r\n');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.status(200).send(body);
}
