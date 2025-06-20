# 使用官方 Node.js 14 镜像作为基础镜像
FROM node:14.18.3

# 设置工作目录
WORKDIR /app

# 先复制 package.json 以利用缓存
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制整个项目
COPY . .

# 暴露前端项目配置的端口（与 devServer.port 一致）
EXPOSE 81

# 启动命令（保持与项目配置一致）
CMD ["npm", "run", "serve"]