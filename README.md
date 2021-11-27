# MP CU Beta V3.2.6

#### 介绍

本项目为 `colorui3.x` 微信小程序原生版。

`colorui3.x` 默认只支持 `uni-app`，本项目中 `colorui` 框架为移植修改版。

`colorui3.x` 地址： [https://github.com/weilanwl/coloruiBeta](https://github.com/Color-UI/MP-CU)

<hr/>

### 框架配置

在根目录的 `app.js` 文件里引入相关配置：

``` 

import colorUI from '/mp-cu/ui';

App({
    //挂载到app上
    colorUI: colorUI,
    
    //小程序启动
    onLaunch() {

    },
	.....
	.....
})

```

然后在根目录的 `app.scss` 文件里引入相关框架的css文件。

``` 

@import './mp-cu/colorUI/scss/ui';


// 实际项目中，可删除下面的相关文件和引用，因为图标太多，体积较大，可能你项目里并不需要这么多图标，建议自行添加需要的扩展icon图标引用。
// @import './mp-cu/icon/doc';

```


相关文件路径：

``` 

/mp-cu/config/index.js'  // 框架的默认配置项

```


### 组件使用方式

挂载组件，在 `app.json` 或 `xxx.json` 文件里配置

``` 

"usingComponents": {
	"ui-sys": "mp-cu/colorUI/components/ui-sys/ui-sys"
}

```
