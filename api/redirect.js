// api/redirect.js
export default function handler(req, res) {
  // Страна определяется автоматически
  const country = req.headers['x-vercel-ip-country'] || 'XX';
  
  // ⚠️ ЗАМЕНИТЕ ЭТИ ССЫЛКИ НА СВОИ:
  const links = {
    'KZ': 'https://promo-7kpartners.com/l/694c45e6c7ac5658a70cd6a2',
    'RU': 'https://promo-7kpartners.com/l/694c45e6c7ac5658a70cd6a2'
  };
  
  // Ссылка по умолчанию
  const defaultUrl = 'https://bonuspllus.site';
  
  // Выбираем куда редиректить
  const targetUrl = links[country] || defaultUrl;
  
  // Делаем редирект
  res.redirect(302, targetUrl);
}
