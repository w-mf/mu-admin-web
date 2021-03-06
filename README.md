# mu-admin web端
[缓慢开发中...]<br>
一个配套[mu-admin-server](https://github.com/w-mf/mu-admin-server)服务。<br>
基于 vue3+pinia+vite+typescript+element-plus的web端。
## 演示地址
http://120.76.45.44/
## 功能
-[x] swagger/yapi 生成请求实例
-[x] 集成 eslint、styleLint、prettier 规则
----------
- [x] 密码登录（jwt鉴权）
- [x] 系统管理-账户管理
- [x] 系统管理-角色管理
- [x] 系统管理-菜单管理
- [x] 日志管理-登录日志
- [ ] 日志管理-操作日志
- [ ] 服务器信息
- [ ] 用户消息

## 兼容性

Edge ≥ 79 Firefox ≥ 78 Chrome ≥ 64 Safari ≥ 12

## 开始

```sh
# 开发
npm run dev
# 打包
npm run build
# 校验
npm run lint
# 校验并修复
npm run lint:fix
# 生成请求实体
npm run api
```

## 预览（preview）

用于本地预览线上(build 内容)。会在本地起一个 web 服务预览

```sh
npm run build & npm run preview
```

## 生成 api

1. 在 ytt.config.ts 文件配置 serverUrl，及项目 token。
2. 执行 `npm run api` 生成 api 请求体及相应类型到 src/api 目录。

```sh
npm run api
```

3. 使用方式为 直接 import 请求函数使用。

> 注意： npm run api 会覆盖 src/api 目录，该文件夹不允许手动修改，仅用于自动生成，以防被覆盖。

## mock 数据

mock 数据结合 yapi 平台。更改.env 的 VITE_API_MODEL 环境变量来切换 api 请求的 域名。

- local: 本地。空；
- test: 使用测试数据。配置与 yapi 的配置环境，如遇跨域问题请使用 local 和配置代理实现代理测试数据；
- prod: 使用线上数据。配置与 yapi 的配置环境，如遇跨域问题请使用 local 和配置代理实现代理线上数据；
- mock: mock 数据。有 yapi 提供 mock 数据，可在 yapi 配置详细 mock 规则；
  > 只在 dev 环境生效
  
### git commit

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

type: 类型。必填。值如下<br>

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style：格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

scope: 范围。可选。可以是指定提交更改位置的任何内容。<br>
subject: 主题。必填<br>
body: 正文。可选<br>
footer: 页脚。可选<br>

#### 示例

```git
git commit -m 'feat(xx-xx模块): 新增xxx模块'
----
git commit -m 'style: eslint 修复'
----
git commit -m 'chore(package.json): 升级xxx依赖版本'
...
```

## 其他
  Vue3.2后 Script Setup 语法引入了 defineProps、defineEmits、defineExpose、withDefaults 的编译器宏，无需手动引入
