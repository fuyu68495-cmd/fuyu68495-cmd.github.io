# 部署说明

这个目录是纯静态网站，可直接部署到 GitHub Pages、Vercel、Netlify 或 Cloudflare Pages。

当前自定义域名已写入 `CNAME`：

```txt
fuyu7.com
```

## GitHub Pages 路径

1. 创建 GitHub 仓库，例如 `fuyu-portfolio`。
2. 将本目录全部文件推送到仓库 `main` 分支根目录。
3. 在仓库 `Settings -> Pages` 中选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/root`。
4. 确认 `Custom domain` 为 `fuyu7.com`。
5. 在域名 DNS 服务商处添加 GitHub Pages 记录：

```txt
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   <你的GitHub用户名>.github.io
```

DNS 生效后，在 GitHub Pages 页面开启 `Enforce HTTPS`。

## 当前入口

- 首页：`index.html`
- 样式：`styles.css`
- 交互：`script.js`
- 作品集 PDF：`assets/fuyu-ui-portfolio.pdf`
