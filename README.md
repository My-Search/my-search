# 📝我的搜索-脚本wiki💖
![License](https://img.shields.io/github/license/My-Search/my-search)  <a href="https://github.com/My-Search/my-search">![github](https://img.shields.io/badge/我的搜索-脚本-brightgreen.svg)</a>  <a href="https://github.com/My-Search/my-search/blob/master/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97.md">![github](https://img.shields.io/badge/更新日志-brightgreen.svg)</a>


我的搜索是一个可自定义内容搜索的脚本应用，比如你收集了很多的网站、软件，想要快速检索它，这也是这个脚本应用的初心！

## 1、😍基本使用
------

1、首先需要安装浏览器[油猴插件](https://www.tampermonkey.net/index.php?browser=chrome&locale=zh)。

2、安装我们的脚本：[我的搜索](https://greasyfork.org/zh-CN/scripts/457020-%E6%88%91%E7%9A%84%E6%90%9C%E7%B4%A2)

3、使用，随便打开一个网页，按Ctrl+Alt+S, 呼出搜索框 （有内置数据可搜索）

**公共：所有项都支持`快捷链接`、`附加内容`.**

**普通URL项**：
![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/12/20/1734673226801.png)
**简述文本项**：  
![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/12/20/1734673445483.png)
**脚本项**：有提供一些API，详情请看后面的模板
![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/12/20/1734673700418.png)
**应用项**：应用项属于脚本项，脚本执行时调用view.mount()就是应用项。有提供一些API，详情请看后面的模板。
![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/12/20/1734673912941.png)

## 2、🐱‍🏍编写自己的订阅文件
### 2.1 **基于模板编写订阅**
打开订阅模板 [ms-subscribe-template](https://github.com/My-Search/ms-subscribe-template) ，点击`fork`为自己的仓库，打开自己fork的仓库，获取自己的`index.ms`的`raw`链接.
```text
<tis::https://raw.githubusercontent.com/<你的用户名>/ms-subscribe-template/refs/heads/master/index.ms  />
```

然后将之追加到脚本订阅管理上，清理缓存刷新页面重新加载即可。


### 2.2 详细说明资源定义方式

资源定义的基本方式是由我们内置的“提取函数”来支持的，内置的提取函数有两种：

**单行的处理函数：sLineFetchFun** （简单格式，逐步淘汰）

**多行的处理函数：mLineFetchFun** （所有格式均支持）

对应的基本格式如下：
![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/06/02/20240602150255177.png)

[最新最全格式](https://github.com/My-Search/ms-subscribe-template/blob/master/content/search-db0.md)  |  [内容书写格式视频讲解（blibli）](https://www.bilibili.com/video/BV1Xx4y1o7ps)


### 2.9 将编写的订阅分享到公共仓库TisHub

TisHub其它就是我们创建的Github仓库，用户想要提交自己的订阅到TisHub，只需要点击“**共享我的订阅到TisHub**”即可，注意该按钮的右边数字表示可共享的订阅个数，当大于0时，只要点击提交到TisHub仓库。

可提交的共享个数，脚本会本地订阅 + 远程公共TisHub中的订阅比较得出的结果。 

提交需要您的github Token,token只会在本地操作与保存。

欢迎发布自己订阅到市场（TisHub），让我们一起让脚本内容更加丰富。

![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/06/02/20240602150344767.png)

### 2.10 订阅原理图解
![](https://cdn.jsdelivr.net/gh/18476305640/typora@master/images/2024/06/05/1717589115149.png)

## 3 高级功能
- 常规搜索模式，就是直接搜索时使用的，它进行匹配你可以输入文字的拼音来搜索，且忽略大小写，支持空格“与运算”搜索。
- 子搜索模式，搜索语法: "<搜索出可搜索，如baidu><tab键><baidu搜索的内容>" ；取消子搜索模式：shift+tab
- 字符匹配度搜索模式，在脚本中当搜索没有结果时就会使用此模式，会不管你输入什么只要有一点重叠就会有结果，这个的缺点时随着你输入keyword的长度越长，搜索越慢。
