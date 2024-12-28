# 新闻页面

## 技术栈

- Nuxt
- Element-plus
- Pnpm

## 文件布局

```json
treer -i node_modules -e tree.txt
```

```json
package
├─.gitignore
├─app.vue
├─nuxt.config.ts
├─package.json
├─pnpm-lock.yaml
├─README.md
├─tsconfig.json
├─uno.config.ts
├─stores
|   └tabs.ts
├─server
|   ├─tsconfig.json
|   ├─api
|   |  └hello.ts
├─public
|   ├─favicon.ico
|   └robots.txt
├─plugins
├─pages
|   ├─user
|   |  └index.vue
|   ├─index
|   |   └index.vue
|   ├─404
|   |  └index.vue
├─middleware
|     └router.global.ts
├─layouts
|    ├─404.vue
|    └default.vue
├─components
├─assets
|   └main.css
```
