// api/redirect.js
export default function handler(req, res) {
  // Страна определяется автоматически
  const country = req.headers['x-vercel-ip-country'] || 'XX';
  
  // ⚠️ ЗАМЕНИТЕ ЭТИ ССЫЛКИ НА СВОИ:
  const links = {
    'KZ': 'https://offertowin.com/l/694c45e6c7ac5658a70cd6a2?sub_id=kukish&sub_id_2=kukish&sub_id_3={sub_id_3}&sub_id_4={sub_id_4}&sub_id_5={sub_id_5}',
    'RU': 'https://offertowin.com/l/694c45e6c7ac5658a70cd6a2?sub_id=kukish&sub_id_2=kukish&sub_id_3={sub_id_3}&sub_id_4={sub_id_4}&sub_id_5={sub_id_5}'
  };
  
  // Ссылка по умолчанию
  const defaultUrl = 'https://bonuspllus.site';
  
  // Выбираем куда редиректить
  const targetUrl = links[country] || defaultUrl;
  
  // Делаем редирект
  res.redirect(302, targetUrl);
}
