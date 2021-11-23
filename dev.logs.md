## npm 发布
1. 切换到npm源 nrm use npm
2. npm adduser, 输入npm 账号和密码以及邮箱
3. 发布
npm publish --access=public

## 搭建要素
### rollup
1. rollup.config.js
2. 插件：ts、resovle、commonjs
  
### eslint
安装eslint 以及 npx eslint --init
.eslintrc.json
.eslintignore

### husky

1. yarn add -D husky 
2. 
package.json > script
"prepare": "husky install",
之后执行yarn
预先检查代码风格的钩子
npx husky add .husky/pre-commit "yarn lint"
校验提交规范的钩子
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

yarn add @commitlint/cli @commitlint/config-conventional -D

配置commitlint.config.js
```
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

```


