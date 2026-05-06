# SEO консултации блог

Статичен блог за SEO експертиза и консултации.

## Структура

- `index.html` - начална страница
- `about.html` - страница за мен
- `blog.html` - списък с публикации
- `posts/` - отделни публикации
- `assets/` - CSS и JavaScript
- `image/` - изображения
- `feed.xml` - RSS feed
- `sitemap.xml` - карта на сайта

## Deployment

### Cloudflare Pages

1. Инсталирай wrangler: `npm install -g wrangler`
2. Влез в акаунта: `wrangler auth login`
3. Деплойни: `wrangler pages deploy . --project-name inweblife-blog`

### Други платформи

- Netlify: свържи Git repository
- Vercel: свържи Git repository
- GitHub Pages: използвай GitHub Actions

## Важни настройки

- `.gitignore` игнорира `.git` и други ненужни файлове
- `wrangler.toml` изключва `.git` директорията при deployment
- Всички пътища са относителни за лесен deployment

## Поддръжка

- Редактирай HTML файловете директно
- За нови публикации копирай структурата от съществуващите
- Обновявай `feed.xml` и `sitemap.xml` при нови публикации
