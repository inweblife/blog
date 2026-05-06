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

### Подготовка преди deployment

1. **Премести .git директорията**: `mv .git ../blog-git-backup`
2. **Провери броя на файловете**: трябва да са около 25

### Cloudflare Pages

1. Инсталирай wrangler: `npm install -g wrangler`
2. Влез в акаунта: `wrangler auth login`
3. Деплойни: `wrangler pages deploy . --project-name inweblife-blog`

### След deployment

1. **Възстанови .git**: стартирай `restore-git.bat` или `mv ../blog-git-backup .git`

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
