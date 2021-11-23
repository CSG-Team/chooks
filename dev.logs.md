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
3. npx husky add .husky/pre-commit "yarn lint"
4. 

