# 项目部署指南

## 本地部署步骤

### 1. 准备环境
确保本地安装了:
- Node.js (v18.0.0+)
- pnpm (v7.0+)

### 2. 克隆仓库
```bash
git clone https://github.com/[您的GitHub用户名]/[您的仓库名称].git
cd [您的仓库名称]
```

### 3. 安装依赖
```bash
pnpm install
```

### 4. 配置项目
编辑以下文件，将占位符替换为实际值:
- package.json: 将"homepage"字段中的"[您的GitHub用户名]"和"[您的仓库名称]"替换为实际值
- src/main.tsx: 将HashRouter的basename替换为您的仓库名称

### 5. 本地测试
```bash
pnpm run dev
```

### 6. 部署到GitHub Pages
```bash
pnpm run deploy
```

## GitHub Actions自动部署

项目已配置GitHub Actions自动部署，当推送到main分支时将自动执行:
1. 安装依赖 (`pnpm install`)
2. 构建项目 (`pnpm run build`)
3. 部署到GitHub Pages (`pnpm run deploy`)

您可以在`.github/workflows/deploy.yml`文件中查看详细配置。

## 故障排除

- **依赖安装失败**: 确保pnpm版本符合要求，尝试删除`node_modules`和`pnpm-lock.yaml`后重新安装
- **部署后页面空白**: 检查仓库名称配置是否正确，确保使用HashRouter而非BrowserRouter
- **GitHub Pages 404错误**: 确认仓库设置中的GitHub Pages源分支是否正确配置