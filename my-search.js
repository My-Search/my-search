// ==UserScript==
// @name         我的搜索
// @namespace    http://tampermonkey.net/
// @version      6.7.2
// @description  打造订阅式搜索，让我的搜索，只搜精品！
// @license MIT
// @author       zhuangjie
// @exclude  http://127.0.0.1*
// @exclude  http://localhost*
// @match      *://*/*
// @exclude  http://192.168.*
// @icon         data:image/png;base64,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
// @require https://cdn.jsdelivr.net/npm/jquery@3.6.2/dist/jquery.min.js
// @require      https://unpkg.com/pinyin-pro

// @require      https://cdn.jsdelivr.net/npm/showdown@1.9.0/dist/showdown.min.js
// @resource markdown-css https://sindresorhus.com/github-markdown-css/github-markdown.css

// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js
// @resource code-css https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css

// @require  https://cdn.jsdelivr.net/gh/My-Search/string-overlap-matching-degree@1.0.0/string-overlap-matching-degree.js

// @grant        window.onurlchange
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_getResourceText

// @grant        GM_getResourceURL
// @grant GM_deleteValue
// @grant GM_registerMenuCommand
// @grant        GM_info

// @downloadURL https://update.greasyfork.org/scripts/457020/%E6%88%91%E7%9A%84%E6%90%9C%E7%B4%A2.user.js
// @updateURL https://update.greasyfork.org/scripts/457020/%E6%88%91%E7%9A%84%E6%90%9C%E7%B4%A2.meta.js
// ==/UserScript==

(function() {
    'use strict';
    // 模块一：快捷键触发某一事件 （属于触发策略组）
    // 模块二：搜索视图（显示与隐藏）（属于搜索视图组）
    // 模块三：触发策略组触发策略触发搜索视图组视图
    // 模块四：根据用户提供的策略（策略属于数据生成策略组)生成搜索项的数据库
    // 模块五：视图接入数据库

    // 判断当前是否在iframe里面，
    function currentIsIframe() {
        if (self.frameElement && self.frameElement.tagName == "IFRAME") return true;
        if (window.frames.length != parent.frames.length) return true;
        if (self != top) return true;
        return false;
    }


    // 如果当前是ifrae,结束脚本执行
    let MY_SEARCH_SCRIPT_VIEW_SHOW_EVENT = "MY_SEARCH_SCRIPT_VIEW_SHOW_EVENT";
    if(currentIsIframe()) {
        // 虽然iframe不能初始化脚本，但可以作为父窗口的事件触发源
        triggerAndEvent("ctrl+alt+s", function () { // 通知主容器显示搜索框
            window.parent.postMessage(MY_SEARCH_SCRIPT_VIEW_SHOW_EVENT, '*');
        })
        // 结束脚本执行
        return;
    }
    // 脚本引入css文件
    GM_addStyle(GM_getResourceText("code-css"));
    GM_addStyle(GM_getResourceText("markdown-css"));


    // 正则捕获
    function captureRegEx(regex, text) {
        let m;
        let result = []; // 一组一组 [[],[],...]
        regex.lastIndex = 0; // 重置lastIndex
        while ((m = regex.exec(text)) !== null) {
            let group = [];
            group.push(...m);
            if(group.length != 0) result.push(group);
        }
        return result;
    }

    // 重写console.log方法
    let originalLog = console.log;
    console.logout = function() {
        const prefix = "[我的搜索log]>>> ";
        const args = [prefix].concat(Array.from(arguments));
        originalLog.apply(console, args);
    }
    // markdown转html 转换器 【1】
    const converter = new showdown.Converter({
        simpleLineBreaks:true,
        openLinksInNewWindow: true,
        metadata:true
    });

    // 提取URL根域名
    function getUrlRoot(url,isRemovePrefix = true,isRemoveSuffix = true) {
        if(! (typeof url == "string" || url.length >= 3)) return url;
        // 可处理
        // 判断是否有前缀
        let prefix = "";
        let root = "";
        let suffix = "";
        // 提取前缀
        if(url.indexOf("://") != -1) {
            // 存在前缀
            let prefixSplitArr = url.split("://")
            prefix = prefixSplitArr[0];
            url = prefixSplitArr[1];
        }
        // 提取root 和suffix
        if(url.indexOf("/") != -1) {
            let twoLevelIndex = url.indexOf("/")
            root = url.substr(0,twoLevelIndex);
            suffix = url.substr(twoLevelIndex,url.length-1);
        }else {
            root = url;
            suffix = "";
        }
        return ((!isRemovePrefix && prefix != "")?(prefix+"://"):"") + root + (isRemoveSuffix?"":suffix);
    }
    // 解析出http url 结构
    function parseUrl(url) {
        const regex = /(https?:|)\/\/([^\/]*|[^\/]*)(\/[^\s\?]*|)(\??[^\s]*|)/;
        const matches = regex.exec(url);
        if (matches) {
            const protocol = matches[1];
            const domain = matches[2];
            const path = matches[3];
            const params = matches[4];
            const rootUrl = protocol+"//"+domain
            const rawUrl = url;
            return {protocol,domain,path,params,rootUrl,rawUrl}
        }
        return null;
    }

    // 检查网站是否可用
    function checkUsability(templateUrl,isStopCheck = false) {
        return new Promise(function (resolve, reject) {
            // 判断是否要检查
            if(isStopCheck) {
                reject(null);
                return;
            }
            var img=document.createElement("img");
            img.src = templateUrl.fillByObj(parseUrl("https://www.baidu.com"));
            img.style= "display:none;";
            img.onerror = function(e) {
                setTimeout(function() {img.remove();},20)
                reject(null);
            }
            img.onload = function(e) {
                setTimeout(function() {img.remove();},20)
                resolve(templateUrl);
            }
            document.body.appendChild(img);
        });
    }



    // 数据缓存器
    let cache = {
        get(key) {
            return GM_getValue(key);
        },
        set(key,value) {
            this.remove(key);
            GM_setValue(key,value);
        },
        jGet(key) {
            let value = GM_getValue(key);
            if( value == null) return value;
            return JSON.parse(value);
        },
        jSet(key,value) {
            value = JSON.stringify(value)
            GM_setValue(key,value);
        },
        remove(key) {
            GM_deleteValue(key);
        },
        cookieSet(cname,cvalue,exdays) {
            var d = new Date();
            d.setTime(d.getTime()+exdays);
            var expires = "expires="+d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },
        cookieGet(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++)
            {
                var c = ca[i].trim();
                if (c.indexOf(name)==0) return c.substring(name.length,c.length);
            }
            return "";
        }
    }
    // 责任链对象工厂
    function getResponsibilityChain() {
        return {
            chains: [],
            add(chain = {weight:0,fun: (data,ref)=>data}) {
                if(chain == null ) throw new Error("[ERROR]责任链对象: 你添加了一个null Chain!")
                if(chain.weight == undefined || chain.fun == undefined) throw new Error("[ERROR]责任链对象: 你传入的Chain是无效的！")
                this.chains.push(chain)
            },
            trigger(baton) {
                // 排序，通过weight从高到低
                this.chains = this.chains.sort((a, b)=>b.weight - a.weight);
                // 开始执行
                let _baton = baton;
                let ref = {
                    stop: false
                }
                for(let chain of this.chains) {
                    if( ref.stop) {
                        break;
                    }
                    _baton = chain.fun(_baton,ref)

                }
                return _baton;
            }
        }
    }
    // 请求包装
    function request(type, url, { query, body }, header) {
        return new Promise(function(resolve, reject) {
            var formData = new FormData();
            var isFormData = false;

            if (body) {
                for (var key in body) {
                    if (body[key] instanceof File) {
                        formData.append(key, body[key]);
                        isFormData = true;
                    } else {
                        formData.append(key, JSON.stringify(body[key]));
                    }
                }
            }

            var ajaxOptions = {
                url: url + (query ? ("?" + $.param(query)) : ""),
                method: type,
                headers: header,
                success: function(response) {
                    resolve(response);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    reject(errorThrown);
                }
            };

            if (isFormData) {
                ajaxOptions.data = formData;
                ajaxOptions.processData = false;
                ajaxOptions.contentType = false;
            } else {
                ajaxOptions.data = JSON.stringify(body);
                ajaxOptions.contentType = "application/json; charset=utf-8";
            }

            $.ajax(ajaxOptions);
        });
    }
    /*
    // 持续执行某块代码一某时间
    function continuousExecution(handle,singleInterval=100,duration = 1000) {
       let timer = setInterval(handle,singleInterval);
        setTimeout(()=>{clearInterval(timer)},duration)
    }*/

    // ==偏业务工具函数==
        // 使用责任链模式——对pageText进行操作的工具
    const pageTextHandleChains = {
        pageText: "",
        setPageText(newPageText) {
            this.pageText = newPageText;
        },
        getPageText() {
            return this.pageText;
        },
        init(newPageText = "") {
            // 深拷贝一份实例
            let wo = {...this};
            // 初始化
            wo.setPageText(newPageText);
            return wo;
        },
        // 解析双标签-获取指定标签下指定属性下的值
        parseDoubleTab(tabName,attrName) {
            // 返回指定标签下指定属性下的值
            const regex = RegExp(`<\\s*${tabName}[^<>]*\\s*${attrName}="([^<>]*)"\\s*>([\\s\\S]*?)<\/\\s*${tabName}\\s*>`,"gm");
            let m;
            let tabNameArr = [];
            let copyPageText = this.pageText;
            // 注意下面的 copyPageText 不能改变
            while ((m = regex.exec(copyPageText)) !== null) {
                // 这对于避免零宽度匹配的无限循环是必要的
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                tabNameArr.push({
                    attrValue: m[1],
                    tabValue: m[2]
                })
                const newPageText =this.pageText.replace(m[0], "");
                this.pageText = newPageText;
            }
            return tabNameArr;
        },
        // 解析双标签-只获取值
        parseDoubleTabValue(tabName) {
            // 返回指定标签下指定属性下的值
            const regex = RegExp(`<\\s*${tabName}[^<>]*\\s*>([\\s\\S]*?)<\/\\s*${tabName}\\s*>`,"gm");
            let m;
            let tabNameArr = [];
            let copyPageText = this.pageText;
            while ((m = regex.exec(copyPageText)) !== null) {
                // 这对于避免零宽度匹配的无限循环是必要的
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                tabNameArr.push({
                    tabValue: m[1]
                })
                const newPageText =this.pageText.replace(m[0], "");
                this.pageText = newPageText;
            }

            return tabNameArr;
        },
        // 获取指定单标签指定属性与标签值（标签::值）
        parseSingleTab(tabName,attrName) {
            // 返回指定标签下指定属性下的值
            const regex = RegExp(`<${tabName}::([^\\s<>]*)\\s*${attrName}="([^"<>]*)"\\s*\/>`,"gm");
            let m;
            let tabNameArr = []
            let copyPageText = this.pageText;
            while ((m = regex.exec(copyPageText)) !== null) {
                // 这对于避免零宽度匹配的无限循环是必要的
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                tabNameArr.push({
                    tabValue: m[1],
                    attrValue: m[2]
                })

                const newPageText =this.pageText.replace(m[0], "");
                this.pageText = newPageText;
            }

            return tabNameArr;
        },
        parseSingleTabValue(tabName) {
            // 返回指定标签下指定属性下的值
            const regex = RegExp(`<${tabName}::([^\\s<>]*)[^<>]*\/>`,"gm");
            let m;
            let tabNameArr = []
            let copyPageText = this.pageText;
            while ((m = regex.exec(copyPageText)) !== null) {
                // 这对于避免零宽度匹配的无限循环是必要的
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                tabNameArr.push({
                    tabValue: m[1]
                })
                const newPageText =this.pageText.replace(m[0], "");
                this.pageText = newPageText;
            }
            return tabNameArr;
        },

        // 清除指定单双标签
        cleanTabByTabName(tabName) {
            const regex = RegExp(`<\\s*${tabName}[^<>]*>([^<>]*)(<\/[^<>]*>)*`,"gm");
            // 替换的内容
            const subst = ``;
            // 被替换的值将包含在结果变量中
            const cleanedText = this.pageText.replace(regex, subst);
            this.pageText = cleanedText;

        }
    }
    // 根据反馈的错误项调整templates位置，使得错误的靠后
    function feedbackError(saveKey,currentErrorItem) {
        let items = cache.get(saveKey)??[];
        let foundIndex = -1; // -1-查找模式 ， n-已找到 n是所在位置模式
        let foundValue = null;
        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            if(foundIndex == -1 ) {
                if(item == currentErrorItem) {
                    foundIndex = i;
                    foundValue = items[i];
                }
            }else {
                items[i-1] = items[i];
                // 查看是否是最后一个
                if( i == items.length - 1 ) items[i] = foundValue;
            }
        }
        cache.set(saveKey,items);
        return items;
    }
    // 数据项选择记录器
    class SelectHistoryRecorder {
        static HISTORY_CACHE_KEY = "HISTORY_CACHE_KEY";
        static defaultIdFun = (item)=> JSON.stringify(item);
        static select(item,idFun = SelectHistoryRecorder.defaultIdFun) {
            // 记录到历史
            let key = idFun(item);
            let history = cache.get( SelectHistoryRecorder.HISTORY_CACHE_KEY )??[];
            history = history.filter(_item=>idFun(_item) != key) // 将原来的去除
            history.unshift({...item}) // 必须拷贝
            // 清理掉索引，索引只是本次数据加载有效的，而我们存储的历史数据是不随数据加载而改变的，也就是如果缓存索引会失效，没有索引它会自己找，当然我们会提供我们这里的数据给它找，如果在全局数据中匹配不到的话
            history.forEach(_item=>{
               delete _item.index;
               return _item;
            })
            // 缓存历史数据
            cache.set(SelectHistoryRecorder.HISTORY_CACHE_KEY,history);
        }
        static history(count) {
            let history = cache.get( SelectHistoryRecorder.HISTORY_CACHE_KEY )??[];
            if(count == null) return history; // 如果没有传入count，那就是全部
            let result = [];
            for(let i = 0; i < count && i+1 <= history.length; i++) result.push( history[i] ); // 将history前count个放在result数组中
            return result;
        }

    }
    // 加分、“加分（取分）”
    class DataWeightScorer {
        static ITEM_WEIGHT_CACHE_KEY = "ITEM_WEIGHT_CACHE_KEY";
        static defaultIdFun = (item)=> JSON.stringify(item);
        static SCORE_RECORD_ATTR_KEY = "weight";
        static select(item,idFun = DataWeightScorer.defaultIdFun) {
            let ItemWeightData = cache.get( DataWeightScorer.ITEM_WEIGHT_CACHE_KEY )??{};
            let key = idFun(item);
            ItemWeightData[key] = (ItemWeightData[key]??0) + 1
            cache.set(DataWeightScorer.ITEM_WEIGHT_CACHE_KEY,ItemWeightData)
        }
        static assign(items=[],idFun = DataWeightScorer.defaultIdFun) {
            let ItemWeightData = cache.get( DataWeightScorer.ITEM_WEIGHT_CACHE_KEY)??{};
            items.forEach(item=>{
                let key = idFun(item);
                item[DataWeightScorer.SCORE_RECORD_ATTR_KEY] = ItemWeightData[key]??0;
            })
            return items;
        }
        static sort(items=[],idFun = DataWeightScorer.defaultIdFun) {
            // 将权重赋于
            DataWeightScorer.assign(items,idFun);
            // 根据权重排序（高->低）
            return items.sort((a, b) => b[DataWeightScorer.SCORE_RECORD_ATTR_KEY] - a[DataWeightScorer.SCORE_RECORD_ATTR_KEY]);
        }
        // 获取高频前count项
        static highFrequency(count) {
            let ItemWeightData = cache.get( DataWeightScorer.ITEM_WEIGHT_CACHE_KEY )??{};
            let orderKeys = Object.keys(ItemWeightData).sort((a, b) => ItemWeightData[b] - ItemWeightData[a]);
            if(count != null) orderKeys = orderKeys.slice(0, count);
            // keys转items
            return registry.searchData.matchItemsByKeys(orderKeys);
        }
    }
    // 将多个
    function parseTis(bodyText) {
       // 提取整个tis标签的正则
       const regex = /(<\s*tis::http[^<>]+\/\s*>)/gm;
       let raw = captureRegEx(regex,bodyText);
       if(raw != null) {
          return raw.map(item=>item[1])
       }
        return null;
    }
    let USER_GITHUB_TOKEN_CACHE_KEY = "USER_GITHUB_TOKEN_CACHE_KEY";
    let GithubAPI = {
       token: cache.get(USER_GITHUB_TOKEN_CACHE_KEY),
       setToken(token) {
           if(token != null) this.token = token;
           if(this.token == null) {
              token = prompt("请输入您的github Token (只会在您的本地保存)：")
              // 获取的内容无效
              if(token == null || token == "") return this;
              // 内容有效-设置
              cache.set(USER_GITHUB_TOKEN_CACHE_KEY,this.token = token);
           }
           return this;
       },
       clearToken() {
          cache.remove(USER_GITHUB_TOKEN_CACHE_KEY)
          this.token = null;
       },
       getToken(isRequest = false) {
          if(this.token == null && isRequest) this.setToken();
          return this.token;
       },
       baseRequest(type,url,{query,body}={},header = {}) {
          if(this.token != null && header.Authorization == null) header.Authorization = "token "+this.token;
          query = {...query,time:new Date().getTime()}
          return request(type, url, { query,body },header);
       },
       getUserInfo() {
         return this.baseRequest("GET","https://api.github.com/user")
       },
       commitIssues(body) {
         return this.baseRequest("POST","https://api.github.com/repos/My-Search/TisHub/issues",{body})
       },
       getTisForIssues(state) {
          let query = null;
          if(state != null) query = {state};
          let token = this.token;
          if(token == null) token = atob("Z2hwX1hWcVVYcWtZRlg2Tk5sRlVtWDMwSWN3RWtDdVZJSzJ0ZXNQUw=="); // 该token没有什么权限，只用于访问不受限
          return this.baseRequest("GET","https://api.github.com/repos/My-Search/TisHub/issues",{query},{Authorization:"token "+token})
       }
    }

    // 从订阅标签中提取订阅链接
    let TisHub = {
        tisFilter(source,filterList) {
            if(typeof source == "string") source = parseTis(source);
            if(typeof filterList == "string") filterList = parseTis(filterList);
            for(let filterItem of filterList) {
                let pageTextHandler = pageTextHandleChains.init(filterItem);
                let tabAttrArray = pageTextHandler.parseSingleTabValue("tis");
                let subscribedLink = null;
                if(tabAttrArray != null && tabAttrArray.length > 0 ) subscribedLink = tabAttrArray[0].tabValue;
                if(subscribedLink == null) subscribedLink = filterItem;
                source = source.filter(resultSubscribed=>! resultSubscribed.includes(subscribedLink));
            }
            return source;
        },
       getTisHubAllTis(filterList = []) {
          return new Promise((resolve,reject)=>{
             let openIssuesTisPromise = this.getOpenIssuesTis();
             let result = [];
             return Promise.all([ this.getOpenIssuesTis(), this.getClosedIssuesTis() ]).then(values=>{
                for(let value of values) {
                   if(value == null ) continue;
                   for(let tisListObj of value) {
                      if(tisListObj != null ) result.push(...tisListObj.tisList)
                   }
                }
                // 过滤并提交结果
                 resolve(this.tisFilter(result,filterList));
             })
          })
       },
       getTisForIssues(state) {
           return new Promise((resolve,reject)=>{
               GithubAPI.getTisForIssues(state).then(response=>{
                   if(response != null && Array.isArray(response)) {
                       resolve(response.map(obj=>{return {
                           owner: obj.user.login,
                           ownerProfile: obj.user.html_url,
                           title: obj.title,
                           tisList: parseTis(obj.body),
                           status: obj.state
                       }}))
                   }
               }).catch(error=>resolve([]));
           })
       },
       getOpenIssuesTis() {
         return this.getTisForIssues(null);
       },
       getClosedIssuesTis() {
          return this.getTisForIssues("closed");
       },
       tisListToTisText(tisList) {
          let text = "";
          for(let tis of tisList) text += tis.tisList;
          return text;
       }
    }

    // 全局注册表
    let ERROR = {
        tell(info) {
            console.error("ERROR " + info)
        }
    }
    let registry = {
        view: {
            viewVisibilityController: () => { ERROR.tell("视图未初始化，但你使用了它的未初始化的注册表信息！") },
            viewDocument: null,
            setButtonVisibility: () => { ERROR.tell("按钮未初始化！") },
            element: null, // 存放着视图的关键元素对象
            titleFlagHandler: {
                handlers: [],
                // 标题flag处理器
                execute: function (title) {
                    // 去掉标题内容只剩下flags
                    let arr = captureRegEx(/(\[.*\])/gm,title)
                    if(arr == null || arr[0] == null || arr[0][0] == null) return "";
                    let flagStr = arr[0][0];
                    for(let titleFlagHandler of this.handlers) {
                        let result = titleFlagHandler(flagStr.trim());
                        if(result != -1) return result;
                    }
                    return flagStr;
                }
            },
            viewFirstShowEventListener: [],
            viewHideEventAfterListener: [],
            menuActive: false,
            // 视图延时隐藏时间，避免点击右边logo，还没显示就隐藏了
            delayedHideTime: 150,
            initialized: false,
            textView: {
                cssFillPrefix(css = "", prefix = "") {
                    const cssBlocks = css.split('}');
                    let outputCSS = '';
                    for (let block of cssBlocks) {
                        let blockLines = block.split('\n');
                        let blockOutput = '';
                        for (let line of blockLines) {
                            if (line.trim().endsWith('{')) { // 如果当前行是一个样式选择器行
                                blockOutput += `${prefix} ${line}`; // 在样式选择器前加上指定的前缀
                            } else {
                                blockOutput += line; // 其他行保持原样
                            }

                            blockOutput += '\n'; // 添加换行符，用于分隔CSS内容的各行
                        }
                        if (blockOutput.trim() !== '') {
                            outputCSS += blockOutput;
                            outputCSS += '}\n'; // 只有在当前块不为空时添加闭合大括号
                        }
                    }
                    return outputCSS;
                },
                show(html,css = "") {
                    html = `<style>${this.cssFillPrefix(css,"#my_search_box #text_show")}</style>`+html;
                    let my_search_box = $("#my_search_box");
                    // 视图还没有初始化
                    if(my_search_box == null) return;
                    let matchResult = $("#matchResult");
                    let textShow = $("#text_show")
                    textShow.html(html);
                    /*使用code代码块样式*/
                    document.querySelectorAll('#text_show pre code').forEach((el) => {
                        // 这里没有错，发警告不用理
                        hljs.highlightElement(el);
                    });

                    matchResult.css({
                        "display": "none"
                    })
                    textShow.css({
                        "display":"block"
                    })
                }
            },
            // 搜索框logo控制
            logo: {
                originalLogo: null,
                getLogoImg: function () {
                    let viewDocument = registry.view.viewDocument;
                    if(viewDocument == null ) return null;
                    let currentLogoImg = $(viewDocument).find("#controlButton img");
                    if(this.originalLogo == null) this.originalLogo = currentLogoImg.attr("src");
                    return currentLogoImg;
                },
                change: function (imgResource) {
                    let logoImg = this.getLogoImg();
                    if(imgResource == null || logoImg == null ) return;
                    logoImg.attr("src",imgResource)
                },
                reset: function() {
                    let logoImg = this.getLogoImg();
                    if (logoImg == null ) return;
                    logoImg.attr("src",this.originalLogo)
                }
            }
        },
        other: {
            UPDATE_CDNS_CACHE_KEY: "UPDATE_CDNS_CACHE_KEY"
        },
        searchData: {
            // 处理的历史
            processHistory: [],
            // 用于数据显示后，数据又更新了
            version: 0,
            // 全局搜索数据
            data: [],
            // 数据更新后有效时长
            effectiveDuration: 1000*60*60*12,
            dataMountTime: null,
            clearData() {
                this.data = [];
                this.dataMountTime = null;
            },
            setData(data) {
                if(data == null || data.length == 0) return;
                this.data = data;
                this.dataMountTime = new Date();
            },
            getData() {
                let dataPackage = cache.get(registry.searchData.SEARCH_DATA_KEY);
                if(dataPackage == null || dataPackage.data == null) return this.data;
                // 缓存信息不为空，深入判断是否使用缓存的数据
                let updateDataTime = dataPackage.expire - this.effectiveDuration;
                let data = dataPackage.data;
                // 如果数据在挂载后面已经更新了，重新加载数据到全局中
                console.log("目标：",updateDataTime > this.dataMountTime)
                if(this.data == null || updateDataTime > this.dataMountTime) {
                   console.logout("== 数据未加载或已检查到在其它页面已重新更新数据 ==")
                   this.setData(data);
                }
                return this.data;
            },
            // 根据keys(由idFun决定)从data中匹配items
            matchItemsByKeys: function (keys = []) {
               let that = this;
               if(keys.length == 0) return [];
               // 有keys转items
               let items = keys.map(key=>{
                   for(let item of that.data) {
                      if(that.idFun(item) == key) return item;
                   }
                   return null;
               })
               // 对数组keys去空，注意此时keys已经是items了
               return items.filter(item => item != null);
            },
            specialKeyword: { // 特殊的keyword
                new: "<new>",
                history: "<history>",
                highFrequency: "<highFrequency>"
            },
            // 决定着数据是否要再次初始化
            isDataInitialized: false,
            // 从可自定义搜索数据中根据title与desc进行数据匹配
            findSearchDataItem: function (title = "",desc = "",matchData) {
                if(matchData == null ) matchData = this.data;
                for(let item of matchData) {
                    if( (item.title.includes(title) || title.includes(item.title) )
                      && ( item.desc.includes(desc) || desc.includes(item.desc) )) return item;
                }
                return null;
            },
            // 数组差异-获取不同的元素比较的基值
            idFun(item) { // 自定义比较
                if(item == null || !( item instanceof Object && item.title != null)) return null;
                return item.title.replace(/\[.*\]/,"").trim()+(""+item.desc).trim();
            },
            // 旧的新数据缓存KEY
            OLD_SEARCH_DATA_KEY: "OLD_SEARCH_DATAS_KEY",
            // 标签数据缓存KEY
            DATA_ITEM_FLAGS_CACHE_KEY: "DATA_ITEM_FLAGS_CACHE_KEY",
            // 用户维护的不关注标签列表,缓存KEY
            USER_UNFOLLOW_LIST_CACHE_KEY: "USER_UNFOLLOW_LIST_CACHE_KEY",
            USE_TISHUB_STATE_CACHE_KEY: "USE_TISHUB_STATE_CACHE_KEY",
            // 默认用户不关注标签
            USER_DEFAULT_UNFOLLOW: ["程序员","成人内容","Adults only"],
            // 已经清理了用户不关注的与隐藏的标签，这是用户应真正搜索的数据
            CLEANED_SEARCH_DATA_CACHE_KEY: "CLEANED_SEARCH_DATA_CACHE_KEY",
            subscribeKey: "subscribeKey",
            showSize: 15,
            isSearchAll: false,
            searchEven: {
                event:{},
                // 搜索状态，失去焦点隐藏的一要素
                isSearching:false,
                send(search,rawKeyword) {
                    this.isSearching = true;
                    for(let subscriptionRegular of Object.keys(this.event)) {
                        const regex = new RegExp(subscriptionRegular,"i"); // 将正则字符串转换为正则表达式对象
                        if(regex.test(rawKeyword) && typeof this.event[subscriptionRegular] == "function" ) {
                           return this.event[subscriptionRegular](search,rawKeyword);
                        }
                    }
                    let result = search(rawKeyword);
                    this.isSearching = false;
                    return result;
                }
            },
            // 新数据设置的过期天数
            NEW_DATA_EXPIRE_DAY_NUM:7,
            // 搜索逻辑，可用来手动触发搜索
            triggerSearchHandle: function (keyword){
                if(keyword == null) keyword = $("#my_search_input").val()??"";
                // 获取input元素
                const inputEl = document.getElementById('my_search_input');
                // 当视图没有初始化时调用该函数inputEl会为null
                if(inputEl == null) return;
                // 如果有传入搜索值，就要设置值
                if(keyword != null) {
                    inputEl.value = keyword;
                }
                // 手动触发input事件
                inputEl.dispatchEvent(new Event('input', { bubbles: true }));
                // 维护全局搜索keyword
                this.keyword = keyword;
            },
            // 数据改变事件
            dataChangeEventListener: [],
            // 缓存被删除事件
            dataCacheRemoveEventListener:[],
            onSearch: [],
            // 新数据块处理完成事件
            // 更新搜索数据的责任链
            USDRC: getResponsibilityChain(),
            onNewDataBlockHandleAfter: [],
            // 新数据的flag
            NEW_ITEMS_FLAG: "[新]",
            // 搜索的keyword
            keyword: "",
            // 持久化Key
            SEARCH_DATA_KEY: "SEARCH_DATA_KEY",
            SEARCH_NEW_ITEMS_KEY:"SEARCH_NEW_ITEMS_KEY",
            // 搜索搜索出来的数据
            searchData: [],
            pos: 0,
            clearUrlSearchTemplate(url) {
                return url.replace(/\[\[[^\[\]]*\]\]/gm,"");
            },
            faviconSources: [
                // "https://favicon.yandex.net/favicon/${domain}",  淘汰原因：当获取不到favicon时不报错，而是显示空白图标
                // "https://api.cxr.cool/ico/?url=${domain}", 淘汰原因：慢
                // "https://api.vvhan.com/api/ico?url=${domain}", 淘汰原因：快，但存在很多网站的图标无法获取
                // "https://statistical-apricot-seahorse.faviconkit.com/${domain}/32", 淘汰原因：有些图标无法获取，但会根据网站生成其网站单字符图标
                // "https://favicons.fuzqing.workers.dev/api/getFavicon?url=${rootUrl}", 淘汰原因：快，但存在很多网站的图标无法获取
                // "https://tools.ly522.com/ico/favicon.php?url=${rootUrl}", 淘汰原因：废的,10个8个获取不到
                "https://api.iowen.cn/favicon/${domain}.png", // 神
                "https://api.xinac.net/icon/?url=${rootUrl}", // 可选：但有点慢
                // "https://favicon.qqsuu.cn/${rootUrl}", 淘汰原因：外国站点不行
                // "https://api.uomg.com/api/get.favicon?url=${rootUrl}", 淘汰原因：外国站点不行
                // "https://api.vvhan.com/api/ico?url=${domain}", // 淘汰原因：存在很多网站的图标无法获取
                // "https://api.15777.cn/get.php?url=${rootUrl}",// 淘汰原因：存在很多网站的图标无法获取
                "https://ico.txmulu.com/${domain}", // 可选,但有些站点不行
                // "https://api.cxr.cool/ico/?url=${domain}", // 很多网站获取不到，国外站点不行
                "${rootUrl}/favicon.ico", // 永久有效的兜底
            ],
            CACHE_FAVICON_SOURCE_KEY: "CACHE_FAVICON_SOURCE_KEY", // 可见远程源
            CACHE_FAVICON_SOURCE_TIMEOUT: 1000*60*60*4, // 4个小时重新检测一下favicon源/过期时间，只会在呼出搜索框后检查
            getFaviconAPI: (function(){
                let defaultFaviconUrlTemplate = "${rootUrl}/favicon.ico";
                let faviconUrlTemplate = defaultFaviconUrlTemplate;
                let isRemoteTemplate = false;
                // 查看是否已经检查模板
                function checkTemplateAndUpdateTemplate() {
                    let faviconSourceCache = cache.get(registry.searchData.CACHE_FAVICON_SOURCE_KEY);
                    if( !isRemoteTemplate && faviconSourceCache != null && faviconSourceCache.sourceTemplate != null ) {
                        faviconUrlTemplate = faviconSourceCache.sourceTemplate;
                        // 设置已经是远程Favicon模板
                        isRemoteTemplate = true;
                    }
                }
                return function(url,isStandby = false) {
                    checkTemplateAndUpdateTemplate();
                    let useFaviconUrlTemplate = faviconUrlTemplate;
                    // 如果是要获取备用favicon,那直接使用上面定义的faviconUrlTemplate
                    if(isStandby) useFaviconUrlTemplate = defaultFaviconUrlTemplate;
                    // 去掉资源的“可搜索”模板，才是真正的URL
                    url = registry.searchData.clearUrlSearchTemplate(url);
                    // 将资源url放到获取favicon的源模板中
                    let urlObj = parseUrl(url)
                    return useFaviconUrlTemplate.fillByObj(urlObj);
                }
            })(),
            tmpVar: null, // 用于防抖
            searchPlaceholder(target = "SELECT",placeholder,duration = 1200) {
                // 全部的输入提示
                let inputDescs = ["我的搜索"];
                // 当前应用“输入提示”
                let inputDesc = inputDescs[Math.floor(Math.random()*inputDescs.length)];
                if(target == "UPDATE") {
                    if(this.tmpVar != null) {
                        clearTimeout(this.tmpVar);
                    }
                    this.tmpVar = setTimeout(()=>{
                        $("#my_search_input").attr("placeholder",this.searchPlaceholder());
                    },duration)
                    let updateResult = placeholder==null?`🔁 数据库更新到 ${this.data==null?0:this.data.length}条`:placeholder;
                    $("#my_search_input").attr("placeholder",updateResult);
                    return updateResult;
                }
                return inputDesc;

            },
            searchBoundary: " : ",
            // 存储着text转pinyin的历史  registry.searchData.isSearchPro
            TEXT_PINYIN_KEY: "TEXT_PINYIN_MAP",
            // 默认数据不应初始化，不然太占内存了，只用调用了toPinyin才会初始化  getGlobalTextPinyinMap()
            getGlobalTextPinyinMap: (function() {
                let textPinyinMap = null;
                return function (){
                    if(textPinyinMap != null) return textPinyinMap;
                    return (textPinyinMap = cache.jGet("TEXT_PINYIN_MAP")??{});
                }
            })(),
            isSearchPro: function() {
               let keyword = $("#my_search_input").val()
               return keyword.includes(this.searchBoundary);
            },
            searchProFlag: "[可搜索]"
        }
    }
    let dao = {}

    // 网页脚本自动执行函数
    let autoRunStringScript = {
        cacheKey : "autoRunStringScriptKey",
        getData() {
           let scripts = cache.get(this.cacheKey)??{};
            let keys = Object.keys(scripts);
            for(let key of keys) {
               let time = scripts[key].timeout;
               if(Date.now() > time) delete scripts[key];
            }
            cache.set(this.cacheKey,scripts);
            return scripts;
        },
        add(target,funStr,effectiveTime = 5000) {
           if(target == null || ! target.trim().startsWith("http")) return;
           let data = this.getData();
            data[target.trim()] = {
              timeout: Date.now()+effectiveTime,
              handle: funStr
            }
            cache.set(this.cacheKey,data);
        },
        run() {
           let currentPageUrl = document.URL;
           let data = this.getData();
           let keys = Object.keys(data);
           let targetObj = null;
           for(let key of keys) {
              if(key.startsWith(currentPageUrl) || currentPageUrl.startsWith(key)) targetObj = data[key];
           }
           if(targetObj != null) {
              // 从data中失去，再执行
              delete data[currentPageUrl];
              let handle = targetObj.handle;
              if(handle == null) return;
              new Function('$',handle)($);
           }
        }
    }
    // 页面加载执行
    autoRunStringScript.run();
    // 添加页面模拟脚本
    function addPageSimulatorScript(url,scriptStr) {
       scriptStr = `function exector(handle) {
            function selector(select, all = false) {
                return all ? document.querySelectorAll(select) : document.querySelector(select);
            }
            function clicker(select) {
                let element = selector(select);
                if (element != null) element.click();
            }
            function scroller(selector = 'body', topOffset = null, timeConsuming = 2000) {
                return new Promise((resolove,reject)=>{
                   var containerElement = $(selector);
                   if (containerElement.length > 0) {
                       if (topOffset !== null) {
                           $('html, body').animate({
                               scrollTop: containerElement.offset().top + topOffset
                           }, timeConsuming);
                       } else {
                           $('html, body').animate({
                               scrollTop: containerElement.offset().top
                           }, timeConsuming);
                       }
                   } else {
                       console.error('找不到指定的元素');
                   }
                   setTimeout(()=>{resolove(true)},timeConsuming)
                })
            }
            function annotator(select, styleStr = "border:5px solid red;") {
                let element = selector(select);
                if (element == null) return;
                element.style = styleStr;

            }


            handle({
                click: clicker,
                roll: scroller,
                dimension: annotator
            });
        }
        window.onload = function () {
            exector(${scriptStr})
        }`;
       autoRunStringScript.add(url,scriptStr,6000);
    }



    // 判断是否只是url且不应该是URL文本 (用于查看类型)
    function isUrl(resource) {
        // 如果为空或不是字符串，就不是url
        if(resource == null || typeof resource != "string" ) return false;
        // resource是字符串类型
        resource = resource.trim().split("#")[0];
        // 不能存在换行符，如果存在不满足
        if(resource.indexOf("\n") != -1 ) return false;
        // 被“空白符”切割后只能有一个元素
        if(resource.split(/\s+/).length != 1) return false;
        // 如果不满足url，返回false
        if(! /^https?:\/\/.+/i.test(resource) ) return false;
        return true;
    }
    /*cache.remove(registry.searchData.SEARCH_DATA_KEY);
     cache.remove(registry.searchData.SEARCH_DATA_KEY+"2");
     cache.remove(registry.searchData.SEARCH_NEW_ITEMS_KEY);
     */
    // 设置远程可用Favicon源
    let setFaviconSource = function () {
        function startTestFaviconSources(sources,pos,setFaviconUrlTemplate) {
            if(pos > sources.length - 1) return;
            console.logout(`${pos}/${sources.length-1}: 正在测试 `+sources[pos])
            checkUsability(sources[pos]).then(function(result) {
                console.logout("使用的源："+ sources[pos])
                setFaviconUrlTemplate(result);
            }).catch(function() {
                startTestFaviconSources(sources,++pos,setFaviconUrlTemplate)
            });
        }
        let cacheFaviconSourceData = cache.get(registry.searchData.CACHE_FAVICON_SOURCE_KEY);
        let currentTime = new Date().getTime();
        let timeout = registry.searchData.CACHE_FAVICON_SOURCE_TIMEOUT;

        let faviconSources = registry.searchData.faviconSources;
        // 生成favicon源镜像
        function currentSourceArraySnapshot() {
            return JSON.stringify(faviconSources);
        }
        if(cacheFaviconSourceData == null || currentTime - cacheFaviconSourceData.updateTime > timeout || cacheFaviconSourceData.sourceArraySnapshot != currentSourceArraySnapshot()) {
            if(cacheFaviconSourceData != null) {
                console.logout(`==之前检查的已超时或源发现了修改，重新设置Favicon源==`);
            }
            let pos = 0;
            let promise = null;
            function setFaviconUrlTemplate(source = null) {
                console.logout("Test compled, set source! "+source)
                if(source != null) {
                    cache.set(registry.searchData.CACHE_FAVICON_SOURCE_KEY, {
                        updateTime: new Date().getTime(),
                        sourceTemplate: source,
                        sourceArraySnapshot: currentSourceArraySnapshot()
                    })
                }
            }
            // 去测试index=0的源, 当失败，会向后继续测试
            if(faviconSources.length < 1) return;
            startTestFaviconSources(faviconSources,0,setFaviconUrlTemplate);

        }else {

            console.logout(`Favicon源${(timeout - (currentTime - cacheFaviconSourceData.updateTime))/1000}s后测试`);
        }
    }
    // 判断是否要执行设置源，如果之前没有设置过的话就要设置，而不是通过事件触发
    if(cache.get(registry.searchData.CACHE_FAVICON_SOURCE_KEY) == null ) setTimeout(()=>{setFaviconSource();},2000);
    // 添加事件（视图在页面中初次显示时）
    registry.view.viewFirstShowEventListener.push(setFaviconSource);

    // 【函数库】
    // 加载样式
    function loadStyleString(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.appendChild(document.createTextNode(css));
        } catch(ex) {
            style.styleSheet.cssText = css;
        }
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
        return style;
    }
    // 加载html
    function loadHtmlString(html) {
       // 创建一个新的 div 元素
      var newDiv = document.createElement("div");
      // 设置新的 div 的内容为要追加的 HTML 字符串
      newDiv.innerHTML = html;
      // 将新的 div 追加到 body 的末尾
      document.body.appendChild(newDiv);
      return newDiv;
    }
    // Div方式的Page页（比如构建配置面板视图）
    function DivPage(cssStr,htmlStr,handle) {
        let style = loadStyleString(cssStr);
        let div = loadHtmlString(htmlStr);
        function selector(select,isAll = false) {
           if(isAll) {
              return div.querySelectorAll(select);
           }else {
              return div.querySelector(select);
           }
        }
        function remove() {
            div.remove();
            style.remove();
        }
        handle(selector,remove);
    }
    // 异步函数
    function asyncExecFun(fun,time = 20) {
        setTimeout(()=>{
            fun();
        },time)
    }
    // 同步执行函数
    let syncActuator = function () {
        return (function () {
            let queue = [];
            let vote = 0;
            let timer = null;
            // 确保定时器已经在运行
            function ensureTimerRuning() {
                if (timer != null) return;
                timer = setInterval(async () => {
                    let taskItem = queue.pop();
                    if (taskItem != null) {
                        taskItem.active = true;
                        await taskItem.task;
                        // 任务执行完，消耗一票
                        vote--;
                        if (vote <= 0) {
                            clearInterval(timer);
                            timer = null;
                        }
                    }
                }, 100);
            }
            return function (handleFun, args, that) {
                // 让票加一
                vote++;
                // 确保定时器运行
                ensureTimerRuning();
                let taskItem = {
                    active: false,
                    task: null
                }
                taskItem.task = new Promise((resolve, reject) => {
                    let timer = null;
                    timer = setInterval(async () => {
                        if (taskItem.active) {
                            await resolve(handleFun.apply(that ?? window, args));
                            clearInterval(timer);
                        }
                    }, 30)
                })
                queue.unshift(taskItem)
                return taskItem.task;
            }
        })()
    }
    // 全页面“询问”函数
    function askIsExpiredByTopic(topic,validTime=10*1000) {
        let currentTime = new Date().getTime();
        let lastTime = cache.get(topic);
        let isExpired = lastTime == null || lastTime + validTime < currentTime;
        if(isExpired) {
            // 获取到资格，需要标记
            cache.set(topic,currentTime);
        }
        return isExpired;
    }
    // 移除数组中重复元素的函数
    function removeDuplicates(objs,selecter) {
        let itemType = objs[0] == null?false:typeof objs[0];
        // 比较两个属性相等
        function compareObjects(obj1, obj2) {
            if(selecter != null ) return selecter(obj1) == selecter(obj2);
            if(itemType != "object" ) return obj1 == obj2;
            // 如果是对象且selecter没有传入时，比较对象的全部属性
            const keys1 = Object.keys(obj1);
            const keys2 = Object.keys(obj2);

            if (keys1.length !== keys2.length) {
                return false;
            }

            for (let key of keys1) {
                if (!(key in obj2) || obj1[key] !== obj2[key]) {
                    return false;
                }
            }
            return true;
        }
        for(let i = 0; i< objs.length; i++ ) {
            let item1 = objs[i];
            for(let j = i+1; j< objs.length; j++ ) {
                let item2 = objs[j];
                if(item2 == null ) continue;
                if( compareObjects(item1,item2) ) {
                    objs[i] = null;
                    break;
                }
            }
        }
        // 去掉无效新数据（item == null）-- 必须先去重
        return objs.filter((item, index) => item != null);
    }
    // 【追加原型函数】
    // 往字符原型中添加新的方法 matchFetch
    String.prototype.matchFetch=function (regex,callback) {
        let str = this;
        // Alternative syntax using RegExp constructor
        // const regex = new RegExp('\\[\\[[^\\[\\]]*\\]\\]', 'gm')
        let m;
        let length = 0;
        while ((m = regex.exec(str)) !== null) {
            // 这对于避免零宽度匹配的无限循环是必要的
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // 结果可以通过`m变量`访问。
            m.forEach((match, groupIndex) => {
                length++;
                callback(match, groupIndex);
            });
        }
        return length;
    };
    // 往字符原型中添加新的方法 matchFetch
    String.prototype.fillByObj=function (obj) {
        if(obj == null ) return null;
        let template = this;
        let resultUrl = template;
        for(let key of Object.keys(obj)) {
            let regexStr = `\\$\\s*?{[^{}]*${key}[^{}]*}`;
            resultUrl = resultUrl.replace(new RegExp(regexStr),obj[key]);
        }
        if(/\$.*?{.*?}/.test(resultUrl)) return null;
        return resultUrl;
    }
    // 比较两个数组是否相等（顺序不相同不影响）
    function isArraysEqual (arr1,arr2) {
        if( arr2 == null || arr1.length != arr2.length ) return false;
        for(let arr1Item of arr1) {
            let f = false;
            for(let arr2Item of arr2) {
                if(arr1Item == arr2Item ) {
                    f = true;
                    break;
                }
            }
            if(! f) return false;
        }
        return true;
    }

    function compareArrayDiff (arr1, arr2, idFun = () => null,diffRange = 3) { // diffRange值：“1”是左边多的，“2”是右边数组多的，3是左右合并，0是相同的部分，30是两个数组去重的
        function hashString(obj) {
            let str = JSON.stringify(obj);
            let hash = 0;
            [...str].forEach((char) => {
                hash += char.charCodeAt(0);
            });
            return "" + hash;
        }
        if (arr2 == null || arr2.length == 0) return arr1;
        // arr1与arr2都为数组对象
        // 将arr1生成模板
        let template = {};
        for (let item of arr1) {
            let itemHash = hashString(idFun(item) ?? item);

            if (template[itemHash] == null) template[itemHash] = [];
            template[itemHash].push(item);
        }
        let leftDiff = [];
        let rightDiff = [];
        let overlap = [];
        // arr2根据arr1的模板进行比对
        for (let item of arr2) {
            let itemHash = hashString(idFun(item) ?? item);
            let hitArr = template[itemHash];
            let item2Json = idFun(item) ?? JSON.stringify(item);
            if (hitArr != null) {
                // 模板中存在
                for (let hitIndex in hitArr) {
                    let hashItem = hitArr[hitIndex];
                    // 判断冲突是否真的相同
                    let item1Json = idFun(hashItem) ?? JSON.stringify(hashItem);
                    if (item1Json == item2Json) {
                        // 命中-将arr1命中的删除
                        delete hitArr.splice(hitIndex, 1);
                        overlap.push( {...item, ...hashItem} );
                        break;
                    }
                }
            } else {
                // 模板不存在，是差异项
                rightDiff.push(item);
            }
        }
        // 将模板中未命中的收集
        for (let templateKey in template) {
            let templateValue = template[templateKey]; //templateValue 是数组
            if (templateValue == null || !(templateValue instanceof Array)) continue;
            for (let templateValueItem of templateValue) {
                leftDiff.push(templateValueItem);
            }
        }
        // 根据参数，返回指定的数据
        switch (diffRange) {
            case 0:
                return overlap;
                break;
            case 1:
                return leftDiff;
                break;
            case 2:
                return rightDiff;
                break;
            case 3:
                return [...leftDiff, ...rightDiff];
                break;
            case 30:
                return [...leftDiff, ...rightDiff, ...overlap];
        }
    }
    // 保证replaceAll方法替换后也可以正常
    String.prototype.toReplaceAll = function(str1,str2) {
        return this.split(str1).join(str2);
    }
    // 向原型中添加方法：文字转拼音
    String.prototype.toPinyin = function (isOnlyFomCacheFind= false,options = { toneType: 'none', type: 'array' }) {
        let textPinyinMap = registry.searchData.getGlobalTextPinyinMap();
        // 查看字典中是否存在
        if(textPinyinMap[this] != null) {
            // console.logout("命中了")
            return textPinyinMap[this];
        }
        // 如果 isOnlyFomCacheFind = true，那返回原数据
        if(isOnlyFomCacheFind) return null;

        // console.logout("字典没有，将进行转拼音",Object.keys(textPinyinMap).length)
        let {pinyin} = pinyinPro;
        let text = this;
        let space = "<Space>"
        let spaceChar = " ";
        text = text.toReplaceAll(spaceChar,space)
        let pinyinArr = pinyin(text,options);
        // 保存到全局字典对象 （ 会话级别 ）
        textPinyinMap[this] = pinyinArr.join("").toReplaceAll(space,spaceChar).toUpperCase();
        return textPinyinMap[this];
    }
    // 加载全局样式
    loadStyleString(`
/*搜索视图样式*/
#searchBox {
  height: 45px;
  background: #ffffff;
  padding: 0px;
  box-sizing: border-box;
  z-index: 10001;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}

#my_search_input {
  text-align: left;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 15px;
  background: #fff;
  padding: 0px 10px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, .87);
  font-weight: 400;
  margin: 0px;
}

#matchResult {
  display: none;
}

#matchResult > ol {
  margin: 0px;
  padding: 0px 15px 5px;
}

#text_show {
  display: none;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px 7px;
  font-size: 15px;
  line-height: 25px;
  max-height: 450px;
  overflow: auto;
  text-align: left;
  color: #000000;
}
#text_show img {
   width: 100%;
}

/*定义字体*/
 @font-face {
    font-family: 'HarmonyOS';
    src: url('https://s1.hdslb.com/bfs/static/jinkela/long/font/HarmonyOS_Medium.a1.woff2');
  }

 #my_search_view {
    font-family: 'HarmonyOS', sans-serif !important;
 }
.searchItem {
	background-image: url(data:image/jpeg;base64,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);
    background-size: 100% 100%;
	background-clip: content-box;
	background-origin: content-box;
}

#my_search_input {
	animation-duration: 1s;
	animation-name: my_search_view;
}

.resultItem {
	animation-duration: 0.5s;
	animation-name: resultItem;
}
.resultItem  .enter_main_link{
    display: flex !important ;
    justify-content: start;
    align-items: center;
    flex-grow:3;
}
/*关联图标样式*/
.resultItem .vassal {
    /*对下面的svg位置进行调整*/
    display: flex !important;
    align-items: center;
    flex-shrink:0;
    margin-right:2px;

}
.resultItem svg{
   width: 16px;
   height:16px;
}
@-webkit-keyframes my_search_view {

	0% {
		width: 0px;
	}

	50% {
		width: 50%;
	}

	100% {
		width: 100%;
	}
}

@-webkit-keyframes resultItem {

	0% {
		opacity: 0;
	}

	40% {
		opacity: 0.6;
	}

	50% {
		opacity: 0.7;
	}

	60% {
		opacity: 0.8;
	}

	100% {
		opacity: 1;
	}
}

/*简述超链接样式*/
#text_show a {
	color: #1a0dab !important;
    text-decoration:none;
}
/*简述文本颜色为统一*/
#text_show p {
	color: #202122;
}
/*自定义markdown的html样式*/
#text_show>p>code {
    padding: 2px 0.4em;
    font-size: 95%;
    background-color: rgba(188, 188, 188, 0.2);
    border-radius: 5px;
    line-height: normal;
    font-family: SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace;
    color: #558eda;
}
#my_search_input::placeholder {
  color: #757575;
}
/*让简述内容的li标签不受页面样式影响*/
#text_show > ul > li {
   list-style-type: disc !important;
}
#text_show > ul > li > ul > li {
   list-style-type: circle !important;
}
#text_show > ol > li {
   list-style-type: decimal !important;
}
/*当视图大于等于1400.1px时*/
@media (min-width: 1400.1px) {
  #my_search_box {
    left: 24%;
    right:24%;
  }
}
/*当视图小于等于1400px时*/
@media (max-width: 1400px) {
  #my_search_box {
    left: 21%;
    right:21%;
  }
}
/*当视图小于等于1200px时*/
@media (max-width: 1200px) {
  #my_search_box {
    left: 18%;
    right:18%;
  }
}
/*当视图小于等于800px时*/
@media (max-width: 800px) {
  #my_search_box {
    left: 15%;
    right:15%;
  }
}
/*输入框右边按钮*/
#controlButton {
    position: absolute;
    font-size: 12px;
    right: 5px;
    padding: 0px;
    border: none;
    display: block;
    background: rgba(255, 255, 255, 0);
    margin: 0px 7px 0px 0px;
    cursor: pointer;
    outline: none;
}
#controlButton:active {
  opacity: 0.4;
}
#controlButton img {
   display: block;
   width: 25px;
}

/*代码颜色*/
#text_show code,#text_show pre{
   color:#5f6368;
   padding: 5px;
}


/* 滚动条整体宽度 */
#text_show::-webkit-scrollbar,
#text_show pre::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 5px;
  height: 5px;
}

/* 滚动条滑槽样式 */
#text_show::-webkit-scrollbar-track,
#text_show pre::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

/* 滚动条样式 */
#text_show::-webkit-scrollbar-thumb,
#text_show pre::-webkit-scrollbar-thumb {
 background-color: #c1c1c1;
}

#text_show::-webkit-scrollbar-thumb:hover,
#text_show pre::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}

#text_show::-webkit-scrollbar-thumb:active,
#text_show pre::-webkit-scrollbar-thumb:active {
  background-color: #a8a8a8;
}
/*结果项样式*/
#matchResult li {
   line-height: 30.2px;
   height: 30.2px;
   color: #0088cc;
   list-style: none;
   width: 100%;
   padding: 0.5px;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

#matchResult li > a {
  display: inline-block;
  font-size: 15.5px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  font-weight: 400;
  background: rgb(255 255 255 / 0%);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#matchResult .item_desc {
  color: #4d5156;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#matchResult img {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: 0 8px 0 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    border-radius: 30%;
    box-sizing: border-box;
    padding: 3px;
    flex-shrink: 0;   /* 当容量不够时，不压缩图片的大小 */
}
#my_search_box {
    position: fixed;top:50px;
    border:2px solid #cecece;z-index:2147383656;
    background: #ffffff;
}
.match-search::before {
    display: block;
    content: "(;｀O´)o 匹配度搜索已启用";
    position: absolute;
    left: 5px;
    top: -20px;
    font-size: 12px;
    color: #d5a436;
    font-weight: bold;
}

    `)


    //防抖函数模板
    function debounce(fun, wait) {
        let timer = null;
        return function (...args) {
            // 清除原来的定时器
            if (timer) clearTimeout(timer)
            // 开启一个新的定时器
            timer = setTimeout(() => {
                fun.apply(this, args)
            }, wait)
        }
    }
    // 判断是否为指定指令
    function isInstructions(cmd) {
        let searchInputDocument = $("#my_search_input")
        if(searchInputDocument == null) return false;
        let regexString = "^\\s*:" + cmd + "\\s*$";
        let regex = new RegExp(regexString,"i");
        return regex.test(searchInputDocument.val());
    }



    // 获取一个同步执行器实例
    let pinyinActuator = syncActuator();
    // 向数据项中加入拼音项 如:title加了titlePinyin, desc加了descPinyin
    function genDataItemPinyin(threadHandleItems){
        let textPinyinMap = registry.searchData.getGlobalTextPinyinMap();
        // console.logout("分配的预热item：",threadHandleItems)
        pinyinActuator(()=>{
            if(threadHandleItems.length < 1) return;
            for(let item of threadHandleItems) {
                // 查看字典是否存在，只有没有预热过再预热
                if( textPinyinMap[threadHandleItems.title] != null ) continue;
                item.title.toPinyin();
                item.desc.toPinyin();
            }
            // 持久化-textPinyinMap字典 (这里需要判断是否值已经被初始化)
            if(textPinyinMap != null ) {
                cache.jSet(registry.searchData.TEXT_PINYIN_KEY,textPinyinMap);
            }
        });
    }
    // 当页面加载完成时触发-转拼音库操作
    const refresh = debounce(()=>{
        console.logout("==pinyin word==")
        let threadHandleItemSize = 100;
        let threadHandleItems = [];
        let currentSize = 0;
        let data = registry.searchData.getData();
        for(let item of data) {
            // 加入处理容器中
            threadHandleItems.push(item);
            currentSize++;
            // 判断是否已满
            if(currentSize >= threadHandleItemSize || data[data.length-1] == item ) {
                // 已满-去操作
                genDataItemPinyin(threadHandleItems);
                // 重置数据
                currentSize = 0;
                threadHandleItems = [];
            }
        }
    }, 2000)
    registry.searchData.dataChangeEventListener.push(refresh);

    // 实现模块一：使用快捷键触发指定事件
    function triggerAndEvent(goKeys = "ctrl+alt+s", fun, isKeyCode = false) {
        // 监听键盘按下事件

        let handle = function (event) {
            let isCtrl = goKeys.indexOf("ctrl") >= 0;
            let isAlt = goKeys.indexOf("alt") >= 0;
            let lastKey = goKeys.replace("alt", "").replace("ctrl", "").replace(/\++/gm,"").trim();
            // 判断 Ctrl+S
            if (event.ctrlKey != isCtrl || event.altKey != isAlt) return;
            if (!isKeyCode) {
                // 查看 lastKey == 按下的key
                if (lastKey.toUpperCase() == event.key.toUpperCase()) fun();
            } else {
                // 查看 lastKey == event.keyCode
                if (lastKey == event.keyCode) fun();
            }

        }
        // 如果使用 document.onkeydown 这种，只能有一个监听者
        $(document).keyup(handle);
    }

    // 【数据初始化】
    // 获取存在的订阅信息
    function getSubscribe() {
        // 查看是否有订阅信息
        let subscribeKey = registry.searchData.subscribeKey;
        let subscribeInfo = cache.get(subscribeKey);
        if(subscribeInfo == null ) {
            // 初始化订阅信息（初次）
            subscribeInfo = `
              <tis::https://raw.githubusercontent.com/18476305640/xiaozhuang/dev/%E6%88%91%E7%9A%84%E6%90%9C%E7%B4%A2%E8%AE%A2%E9%98%85%E6%96%87%E4%BB%B6.txt />
           `;
            cache.set(subscribeKey,subscribeInfo);
        }
        return subscribeInfo;
    }
    function editSubscribe(subscribe) {
        // 判断导入的订阅是否有效
        // 获取订阅信息(得到的值肯定不会为空)
        let pageTextHandleChainsY = pageTextHandleChains.init(subscribe);
        let tisHasFetchFun = pageTextHandleChainsY.parseSingleTab("tis","fetchFun");
        let tisNotFetchFun = pageTextHandleChainsY.parseSingleTabValue("tis");

        let tis = [...tisHasFetchFun, ...tisNotFetchFun];
        // 生成订阅信息存储
        let subscribeText = "\n";
        for(let aTis of tisHasFetchFun) {
            subscribeText += `<tis::${aTis.tabValue} fetchFun="${aTis.attrValue}" />\n`
        }
        for(let aTis of tisNotFetchFun) {
            subscribeText += `<tis::${aTis.tabValue} />\n`
        }
        // 持久化
        let newSubscribeInfo = subscribeText.replace(/\n+/gm,"\n\n");
        cache.set(registry.searchData.subscribeKey,newSubscribeInfo);
        return tis.length;
    }
    // 存储订阅信息，当指定 sLineFetchFun 时，表示将解析“直接页”的配置，如果没有指定 sLineFetchFun 时，只解析内容
    // 在提取函数中 \n 要改写为 \\n
    function getDataSources() {
        let localDataSources = getSubscribe()+ `
       <fetchFun name="mLineFetchFun">
         function(pageText) {
              let type = "sketch"; // url   sketch
              let lines = pageText.split("\\n");
                let search_data_lines = []; // 扫描的搜索数据 {},{}
                let current_build_search_item = {};
                let appendTarget = "resource"; // resource 或 vassal
                let current_build_search_item_resource = "";  // 主要内容
                let current_build_search_item_vassal = ""; // 附加内容
                let point = 0; // 指的是上面的 current_build_search_item
                let default_desc = "--无描述--"

                function getTitleLineData(titleLine) {
                   const regex = /^# ([^()（）]+)[(（]?([^()（）]*)[^)）]?/;
                   let matchData =  regex.exec(titleLine)
                   return {
                      title: matchData[1],
                      desc: ((matchData[2]==null || matchData[2] == "")?default_desc:matchData[2])
                   }
                }
                for (let i = 0; i < lines.length; i++) {
                    let line = lines[i];
                    if(line.indexOf("# ") == 0) {
                       // 当前新的开始工作
                       point++;
                       // 创建新的搜索项目容器
                       current_build_search_item = {...getTitleLineData(line)}
                       // 重置resource
                       current_build_search_item_resource = "";
                       continue;
                    }
                    // 如果是刚开始，没有标题的内容行，跳过
                    if(point == 0) continue;
                    // 判断是否开始为附加内容
                    if(/^\s*-{3,}\s*$/gm.test(line)) {
                       appendTarget = "vassal"
                       // 分割行不添加
                       continue
                    }
                    // 向当前搜索项目容器追加当前行
                    if(appendTarget == "resource") {
                       current_build_search_item_resource += (line+"\\n");
                    }else {
                       current_build_search_item_vassal += (line+"\\n");
                    }
                    // 如果是最后一行，打包
                    let nextLine = lines[i+1];
                    if(i === lines.length-1 || ( nextLine != null && nextLine.indexOf("# ") == 0 )) {
                       // 加入resource，最后一项
                       current_build_search_item.resource = current_build_search_item_resource;
                       if(current_build_search_item_vassal != "") {
                          current_build_search_item.vassal = current_build_search_item_vassal;
                       }
                       // 打包装箱
                       search_data_lines.push(current_build_search_item);
                       // 重置资源添加目标 和 vassal
                       appendTarget = "resource"
                       current_build_search_item_vassal = ""
                    }
                }
                // 添加种类
                for(let line of search_data_lines) {
                   line.type = type;
                }
                return search_data_lines;
         }
       </fetchFun>
       <fetchFun name="sLineFetchFun">
         function(pageText) {
              let type = "url"; // url   sketch
              let lines = pageText.split("\\n");
                let search_data_lines = []
                for (let line of lines) {

                    let search_data_line = (function(line) {
            const baseReg = /([^:：\\n(（）)]+)[(（]([^()（）]*)[)）]\\s*[:：]\\s*(.+)/gm;
            const ifNotDescMatchReg = /([^:：]+)\\s*[:：]\\s*(.*)/gm;
            let title = "";
            let desc = "";
            let resource = "";

         let captureResult = null;
         if( !(/[()（）]/.test(line))) {
             // 兼容没有描述
             captureResult = ifNotDescMatchReg.exec(line);
             if(captureResult == null ) return;
             title = captureResult[1];
             desc = "--无描述--";
            resource = captureResult[2];
         }else {
            // 正常语法
            captureResult = baseReg.exec(line);
            if(captureResult == null ) return;
            title = captureResult[1];
            desc = captureResult[2];
            resource = captureResult[3];
         }
         return {
            title: title,
            desc: desc,
            resource: resource
         };
          })(line);
                    if (search_data_line == null || search_data_line.title == null) continue;
                    search_data_lines.push(search_data_line)
                }

                for(let line of search_data_lines) {
                   line.type = type;
                }
                return search_data_lines;
         }
      </fetchFun>
    `;
     return new Promise(async (resolve,reject)=>{
         let hubDataSources = "";
         if(cache.get(registry.searchData.USE_TISHUB_STATE_CACHE_KEY)??false) {
             let hubLisList = await TisHub.getClosedIssuesTis();
             hubDataSources = TisHub.tisListToTisText(hubLisList);
         }
         resolve(hubDataSources+localDataSources);
     })
    }


    // 判断是否是github文件链接
    let githubUrlFlag = "raw.githubusercontent.com";
    // cdn模板+数据=完整资源加速链接 -> 返回
    function cdnTemplateWrapForUrl(cdnTemplate,initUrl) {
        let result = parseUrl(initUrl)??{};
        if(Object.keys(result) == 0 ) return null;
        return cdnTemplate.fillByObj(result);
    }
    // github CDN加速包装器
    // 根据传入的状态，返回适合的新状态（状态中包含资源加速下载链接|原始链接|null-表示不再试）
    let cdnPack = (function () { // index = 1 用原始的（不加速链接）， -2 表示原始链接打不开此时要退出

        let cdnrs = cache.get(registry.other.UPDATE_CDNS_CACHE_KEY);
        // 提供的加速模板（顺序会在后面的请求中进行重排序-请求错误反馈的使重排序）
        // protocol、domain、path、params
        let initCdnrs = ["https://ghproxy.net/${rootUrl}${path}","https://ghps.cc/${rootUrl}${path}","https://github.moeyy.xyz/${rootUrl}${path}"];
        // 如果我们修改了最开始提供的加速模板，比如新添加/删除了一个会使用新的
        if(cdnrs == null || ! isArraysEqual(initCdnrs,cdnrs) ) {
            cdnrs = initCdnrs;
            cache.set(registry.other.UPDATE_CDNS_CACHE_KEY,initCdnrs);
        }
        return function ({index,url,initUrl}) {

            if( index <= -2 ) return null;
            // 如果已经遍历完了 或  不满足github url 不使用加速
            if(index == -1 || index > cdnrs.length -1 || (index == 0 && ! url.includes(githubUrlFlag)) ) {
                url = initUrl;
                index--;
                console.logout("无法加速，将使用原链接！")
                return {index,url,initUrl};
            }
            let cdnTemplate = cdnrs[index++];
            url = cdnTemplateWrapForUrl(cdnTemplate,initUrl);
            if(index == cdnrs.length) index = -1;
            return {index,url,initUrl};
        }
    })();

    // 模块四：初始化数据源

    // 从 订阅信息(或页) 中解析出配置（json）
    function getConfigFromDataSource(pageText) {

        let config = {
            // {url、fetchFun属性}
            tis: [],
            // {name与fetchFun属性}
            fetchFuns: []
        }
        // 从config中放在返回对象中
        let pageTextHandleChainsX = pageTextHandleChains.init(pageText);
        let fetchFunTabDatas = pageTextHandleChainsX.parseDoubleTab("fetchFun","name");
        for(let fetchFunTabData of fetchFunTabDatas) {
            config.fetchFuns.push( { name:fetchFunTabData.attrValue,fetchFun:fetchFunTabData.tabValue } )
        }
        // 获取tis
        let tisHasFetchFun = pageTextHandleChainsX.parseSingleTab("tis","fetchFun");
        let tisNotFetchFun = pageTextHandleChainsX.parseSingleTabValue("tis");
        let tisArr = [...tisHasFetchFun, ...tisNotFetchFun]
        for(let tis of tisArr) {
            config.tis.push( { url:tis.tabValue, fetchFun:tis.attrValue } )
        }

        return config;

    }
    // 将url转为文本（url请求得到的就是文本），当下面的dataSourceUrl不是http的url时，就会直接返回，不作请求
    function urlToText(dataSourceUrl) {
        // dataSourceUrl 转text
        return new Promise(function (resolve, reject) {
            // 如果不是URL，那直接返回
            if( ! /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(dataSourceUrl) ) return resolve(dataSourceUrl) ;
            let allCdns = cache.get(registry.other.UPDATE_CDNS_CACHE_KEY);
            function rq( cdnRequestStatus ) {
                let {index,url,initUrl} = cdnRequestStatus??{};
                // -2 表示加速链接+原始链接都不会请求成功（异常） ,null表示index状态已经是-2了还去请求返回null
                if(index == null || index < -2 ) return;
                $.ajax({
                    url: `${url}?t=${+new Date().getTime()}`,
                    timeout: 5000, // 设置超时时间为 5 秒钟
                    success: function (result) {
                        resolve(result)
                    },
                    error: function(xhr, status, errorThrown){
                        console.log("cdn失败，不加速请求！");
                        // 反馈错误,调整请求顺序，避免错误还是访问
                        // 获取请求错误的根域名
                        let { domain } = parseUrl(url);
                        // 根据根域名从模板中找出完整域名
                        let templates = allCdns.filter(item=>item.includes(domain));
                        // 反馈
                        if(templates.length > 0 ) {
                            if(index > 0 || index <= cache.get(registry.other.UPDATE_CDNS_CACHE_KEY).length ) feedbackError(registry.other.UPDATE_CDNS_CACHE_KEY,templates[0]);
                        }
                        console.logout("反馈重调整后：",cache.get(registry.other.UPDATE_CDNS_CACHE_KEY)); // 反馈的结果只会在下次起作用
                        // 处理失败后的回调函数代码
                        rq(cdnPack({index,url,initUrl}));
                    }
                });
            }
            rq(cdnPack({index:0,url:dataSourceUrl,initUrl:dataSourceUrl}));
        });
    }
    // 下面的 dataSourceHandle 函数
    let globalFetchFun = [];
    // tis处理队列
    let waitQueue = [];
    // 缓存数据
    function cacheSearchData(newSearchData) {
        if(newSearchData == null) return;
        console.logout("触发了缓存，当前数据",registry.searchData.data)
        // 数据加载后缓存
        cache.set( registry.searchData.SEARCH_DATA_KEY,{
            data: newSearchData,
            expire: new Date().getTime() + registry.searchData.effectiveDuration
        })
    }
    // 更新历史数据
    function compareAndPushDiffToHistory(items = [],isCompared = false) {
       // 更新“旧全局数据”：searchData 追加-> oldSearchData
        let oldSearchData = cache.get(registry.searchData.OLD_SEARCH_DATA_KEY)??[];
        let newItemList = items;
        if(! isCompared && oldSearchData.length != 0) {
           // 比较后，差异项加入（取并集）
           newItemList = compareArrayDiff(items,oldSearchData,registry.searchData.idFun,1) ;
        }
        oldSearchData.push(... newItemList)
        console.log("旧数据缓存",oldSearchData)
        cache.set(registry.searchData.OLD_SEARCH_DATA_KEY,oldSearchData);
        if(! Array.isArray(newItemList)) newItemList = [];
        return newItemList;
    }
    // 防抖函数->处理新数据
    let blocks = [];
    let processingBlock = [];
    let triggerDataChageActuator = syncActuator();
    let refreshNewData = debounce(()=>{
        if(blocks.length == 0) return;
        // 倒动作
        processingBlock = blocks;
        blocks = [];
        // 将经过处理链得到的数据放到全局注册表中
        let globalSearchData = registry.searchData.getData();
        triggerDataChageActuator(()=>{
            globalSearchData.push(... registry.searchData.USDRC.trigger(processingBlock))
            // 数据版本改变
            registry.searchData.version++;
            // 更新视图显示条数
            registry.searchData.searchPlaceholder("UPDATE")
            // 触发搜索数据改变事件(做缓存等操作，观察者模式)
            for(let fun of registry.searchData.dataChangeEventListener) fun(globalSearchData);
            // 重新搜索
            registry.searchData.triggerSearchHandle();
        })
    }, 200) // 积累时间
    const triggerRefreshNewData = (block)=>{
       // 块积累
       blocks.push(...block);

       // 开始去处理
       refreshNewData();
    }
    // 转义与恢复，数据进行解析前进行转义，解析后恢复——比如文本中出现“/”，就会出现：SyntaxError: Octal escape sequences are not allowed in template strings.
    function CallBeforeParse() {
        this.obj = {
            "`":"<反引号>",
            "\\":"<转义>"
        }
        this.escape = function(text) {
            let obj = this.obj;
            for (var key in obj) {
                text = text.toReplaceAll(key,obj[key]);
            }
            return text;
        }
        this.recovery = function(text) {
            let obj = this.obj;
            for (var key in obj) {
                text = text.toReplaceAll(obj[key],key);
            }
            return text;
        }
    }
    let callBeforeParse = new CallBeforeParse();


    function dataSourceHandle(resourcePageUrl,tisTabFetchFunName) { //resourcePageUrl 可以是url也可以是已经url解析出来的资源
        if(! registry.searchData.isDataInitialized) {
            registry.searchData.isDataInitialized = true;
            registry.searchData.processHistory = []; // 清空处理历史
            registry.searchData.clearData(); // 清理旧数据
        }
        let processHistory = registry.searchData.processHistory; // 处理过哪些链接需要记住，避免重复
        if(processHistory.includes(resourcePageUrl)) return; // 判断
        processHistory.push(resourcePageUrl); // 记录
        urlToText(resourcePageUrl).then(text => {
            if(tisTabFetchFunName == null) {
                // --> 是配置 <--
                let data = []
                // 解析配置
                let config = getConfigFromDataSource(text);
                console.logout("解析的配置：",config)
                // 解析FetchFun：将FetchFun放到全局解析器中
                globalFetchFun.push(...config.fetchFuns);
                // 解析订阅：将tis放到处理队列中
                waitQueue.push(...config.tis);
                let tis = null;
                while((tis = waitQueue.pop()) != undefined) {
                    // tis第一个是url,第二是fetchFun
                    dataSourceHandle(tis.url,tis.fetchFun);
                }
                // 清理内容
                pageTextHandleChains.setPageText("");
            }else {
                // --> 是内容 <--
                // 解析内容
                if(tisTabFetchFunName === "") return;
                let fetchFunStr = getFetchFunGetByName(tisTabFetchFunName);

                let search_data_line =(new Function('text', "return ( " + fetchFunStr + " )(`"+callBeforeParse.escape(text)+"`)"))();
                // 将之前修改为 <wrapLine> 改为真正的换行符 \n
                // 处理并push到全局数据容器中
                for(let item of search_data_line) {
                    item.title = callBeforeParse.recovery(item.title);
                    item.desc = callBeforeParse.recovery(item.desc);
                    item.resource = callBeforeParse.recovery(item.resource);
                    if(item.vassal != null ) item.vassal = callBeforeParse.recovery(item.vassal);
                }
                // 加入到push到全局的搜索数据队列中，等待加入到全局数据容器中
                triggerRefreshNewData(search_data_line)
            }
        })


    }
    // 根据fetchFun名返回字符串函数
    function getFetchFunGetByName(fetchFunName) {
        for(let fetchFunData of globalFetchFun) {
            if(fetchFunData.name == fetchFunName) {
                return fetchFunData.fetchFun;
            }
        }
    }
    // 检查是否已经执行初始化
    function checkIsInitializedAndSetInitialized(secondTime) {
        let key = "DATA_INIT";
        let value = cache.cookieGet(key);
        if(value != null && value != "") return true;
        cache.cookieSet(key,key,1000*secondTime);
        return false;
    }
    // 【数据初始化主函数】
    // 调用下面函数自动初始化数据，刚进来直接检查更新(如果数据已过期就更新数据)
    function dataInitFun() {
        // 从缓存中获取数据，判断是否还有效
        // cache.remove(SEARCH_DATA_KEY)
        let dataPackage = cache.get(registry.searchData.SEARCH_DATA_KEY);
        if(dataPackage != null && dataPackage.data != null) {
            // 缓存信息不为空，深入判断是否使用缓存的数据
            let dataExpireTime = dataPackage.expire;
            let currentTime = new Date().getTime();
            // 判断是否有效，有效的话放到全局容器中
            let isNotExpire = (dataExpireTime != null && dataExpireTime > currentTime && dataPackage.data != null && dataPackage.data.length > 0);
            // 如果网站比较特殊,忽略数据过期时间
            if( window.location.host.includes("github.com") ) isNotExpire = true;

            if(isNotExpire) {
                // 当视图已经初始化时-从缓存中将挂载数据挂载 (条件是视图已经初始化)
                console.logout(`视图${registry.view.initialized?'已加载':'未加载'}:数据有效期还有${parseInt((dataExpireTime - currentTime)/1000/60)} 分钟！`,dataPackage.data);
                if( registry.view.initialized ) registry.searchData.setData(dataPackage.data);
                // 如果数据状态未过期（有效）不会去请求数据
                return;
            }

        }
        // 在去网络请求获取数据前-检查是否已经执行初始化-防止多页面同时加载导致的数据重复加载
        if(! askIsExpiredByTopic("SEARCH_DATA_INIT",6*1000)) return;
        // 清理掉当前缓存数据
        cache.remove(registry.searchData.SEARCH_DATA_KEY);
        registry.searchData.clearData();
        // 重置数据初始化状态
        registry.searchData.isDataInitialized = false;
        // 持续执行
        registry.searchData.searchPlaceholder("UPDATE","🔁 数据准备更新中...",5000)
        // 内部将使用递归，解析出信息
        getDataSources().then(dataSources=>{dataSourceHandle(dataSources,null,true)})
    }
    // 检查数据有效性，且只有数据无效时挂载到数据
    dataInitFun();
    // 当视图第一次显示时，再执行
    registry.view.viewFirstShowEventListener.push(dataInitFun);

    // 解析出传入的所有项标签数据
    function parseFlags(data = [],selecterFun = (_item)=>_item,flagsMap = {}) {
        let isArray = Array.isArray(data);
        let items = isArray?data:[data];
        // 解析 item.name中包含的标签
        items.forEach(function(item) {
            let captureGroups = captureRegEx(/\[\s*(([^'\]\s]*)\s*')?\s*([^'\]]*)\s*'?\s*]/gm,selecterFun(item));
            captureGroups.forEach(function(group) {
                let params = group[2]??"";
                let label = group[3];
                // 判断是否已经存在
                if(label != null && flagsMap[label] == null ) {
                    let currentHandleFlagObj = flagsMap[label] = {
                        name: label,
                        status: 1, // 正常
                        //visible: params.includes("h"), // 参数中包含h字符表示可见
                        count: 1
                        //params: params
                        //items: [item]
                    }
                    // 如果传入的不是一个数组，那设置下面参数才有意义
                    if(! isArray) {
                        currentHandleFlagObj.params = params;
                    }
                }else {
                    if(flagsMap[label] != null) {
                        flagsMap[label].count++;
                        //flagsMap[label].items.push(item);
                    }

                }
            })
        });
        // 这里不能是不是数组（上面的isArray）都返回flag数组,因为一项也可能有多个标签
        return Object.values(flagsMap);
    }

    let flagsMap = {}
    const parseSearchItem = function (searchData){
        console.log("==1：解析出数据标签==")
        // 将现有的所有标签提取出来
        // 解析
        let dataItemFlags = parseFlags(searchData,(_item=>_item.title),flagsMap);
        // 缓存
        if(dataItemFlags.length > 0) {
            cache.set(registry.searchData.DATA_ITEM_FLAGS_CACHE_KEY,dataItemFlags)
        }
        return searchData;
    }
    // ################# 执行顺序从大到小 1000 -> 500
    registry.searchData.USDRC.add({weight:600 ,fun:parseSearchItem});
    // 解析script项的text
    function scriptTextParser(text) {
        if (text == null) return null;
        let scriptLines = text.split("\n");
        if (scriptLines != null && scriptLines.length != 0) {
            // 可以解析
            let result = {};
            let key = null;
            let value = null;
            for (let i = 0; i < scriptLines.length; i++) {
                let line = scriptLines[i];
                // 判断是否为新的变量开始
                let captureArr = captureRegEx(/^--\s*([^-\s]*)\s*--\s*$/gm, line);
                let isStartNewVar = captureArr != null && captureArr[0] != null && captureArr[0].length >= 2;
                let isLastLine = (i + 1 == scriptLines.length);
                if(isStartNewVar) {
                    // 保存前面的
                    if (key != null) result[key] = value.trim();
                    // 开始新的
                    key = captureArr[0][1];
                    value = ""; // 重置value
                }else {
                    value += ("\n" + line);
                }

                if ( isLastLine) {
                    // 保存前面的
                    if (key != null) result[key] = value.trim();
                    return result;
                }
            }
            return result;
        }

        return null;
    }
    // 将形如“aa bb” 转为 {aa:"bb"} ,并且如果是布尔类型或数值字符串转为对应的类型
    function extractVariables(varsString) {
        const lines = varsString.split('\n');
        const result = {};

        for (const line of lines) {
            const parts = line.trim().split(/\s+/);
            if (parts.length === 2) {
                const key = parts[0].trim();
                const value = parts[1].trim();

                // 检查是否为 true/false 字符串
                if (value === 'true' || value === 'false') {
                    result[key] = value === 'true'; // 转换为布尔值
                } else if (!isNaN(value)) { // 检查是否为数值字符串
                    result[key] = parseFloat(value); // 转换为数值类型
                } else {
                    result[key] = value; // 保持原始字符串
                }
            }
        }

        return result;
    }
    const parseScriptItem = function (searchData){
        console.log("==1：简述项解析出脚本项==")
        for(let item of searchData) {
           if((item == null || item.title == null) || item.type != "sketch" ) continue;
           if( /\[\s*(.*')?\s*(脚本|script)\s*'?\s*\]/.test( item.title ) ) {
              // 是脚本项
              item.type = "script";
              // 将resource解析为对象
              item.resourceObj = scriptTextParser(item.resource);
              item.resource = "--脚本项resource已解析到resourceObj--"
              // 解析脚本中的env(环境变量)
              if(item.resourceObj.env != null) {
                  item.resourceObj.env = extractVariables(item.resourceObj.env);
                  // 将提取的icon变量放到数据项根上，这样显示时，可读取作为icon
                  let customIcon = item.resourceObj.env._icon;
                  if( customIcon != null) item.icon = customIcon;
                  let vassal = item.resourceObj.vassal;
                  if(vassal != null) item.vassal = vassal;
              }
           }
        }
        return searchData;
    }
    // ################# 执行顺序从大到小 1000 -> 500
    registry.searchData.USDRC.add({weight:599 ,fun:parseScriptItem});
    // 监听缓存被清理，当被清理时，置空之前收集的标签数据
    registry.searchData.dataCacheRemoveEventListener.push(()=>{flagsMap = {}})

    const refreshFlags = function (searchData){
        // 在添加前，进行额外处理添加，如给有”{keyword}“的url搜索项添加”可搜索“标签
        for(let searchItem of searchData) {
            let resource = searchItem.resource;
            let isHttpUrl =/^[^\n]*\.[^\n]*$/.test(`${resource}`.trim());
            let isSearchable = /\[\[[^\[\]]+keyword[^\[\]]+\]\]/.test(resource);
            // 判断是否为可搜索
            if( resource == null || !isHttpUrl || !isSearchable ) continue;
            searchItem.title = registry.searchData.searchProFlag+searchItem.title;
        }
        return searchData;
    }

    // ################# 执行顺序从大到小 1000 -> 500
    registry.searchData.USDRC.add({weight:500 ,fun:refreshFlags});
    // 清理标签（参数中有h的）
    function clearHideFlag(data,get = (item)=>item.title,set = (item,cleaned)=>{item.title=cleaned}) {
        let isArray = Array.isArray(data);
        let items = isArray?data:[data];
        for(let item of items) {
            let target = get(item);
            const regex = /\[\s*[^:\]]*h[^:\]]*\s*'\s*[^'\]]*\s*'\s*]/gm;
            let cleanedTarget = target.replace(regex, '');
            set(item,cleanedTarget);
        }
        return isArray?items:items[0];
    }
    // 解析出标题中的所有标签-返回string数组
    function extractFlagsAndCleanContent(inputString = "") {
        // 使用正则表达式匹配所有方括号包围的内容
        const regex = /\[.*?\]/g;
        const tags = inputString.match(regex) || [];
        // 清理掉标签的内容
        const cleanedContent = inputString.replace(regex, '').trim();
        return {
            tags: tags,
            cleaned: cleanedContent
        };
    }
    const filterSearchData = function (searchData) {
        const filterDataByUserUnfollowList = (itemsData,userUnfollowList = []) => {
            var userUnfollowMap = userUnfollowList.reduce(function(result, item) {
                result[item] = '';
                return result;
            }, {});
            // 开始过滤
            return itemsData.filter(item=>{
                let flags = parseFlags(item.title);
                for(let flag of flags){
                    if(userUnfollowMap[flag.name] != null){
                        // 被过滤
                        return false;
                    }
                }
                return true;
            })
        }
        console.log("==去除用户不关注的数据项==")
        // 用户维护的取消关注标签列表
        let userUnfollowList = cache.get(registry.searchData.USER_UNFOLLOW_LIST_CACHE_KEY)?? registry.searchData.USER_DEFAULT_UNFOLLOW;
        // 利用用户维护的取消关注标签列表 过滤 搜索数据
        let filteredSearchData = filterDataByUserUnfollowList(searchData,userUnfollowList);
        // 去标签（参数h）,清理每个item中title属性的flag
        let clearedSearchData = clearHideFlag(filteredSearchData);
        return clearedSearchData;
    }
    // ############### 执行顺序从大到小 1000 -> 500
    registry.searchData.USDRC.add({weight:400 ,fun:filterSearchData});
    let isHasLaftData = true;
    const compareBlocks = function (searchData = []) {
        let oldSearchData = cache.get(registry.searchData.OLD_SEARCH_DATA_KEY)??[];
        if(isHasLaftData) isHasLaftData = oldSearchData != null && oldSearchData.length > 0;
        console.log("块数据与旧数据对比中>>")
        // 新数据加载完成-进行数据对比
        // 旧数据，也就是上一次数据，用于与本次比较，得出新添加数据
        // 当前时间戳
        let currentTime = new Date().getTime();
        // 准备一个存储新数据项的容器
        let newDataItems = compareAndPushDiffToHistory(searchData);
        // 给新添加的过期时间（新数据有效期）
        newDataItems.forEach(item=> {
            // 添加过期时间
            item.expires = (currentTime++) + ( 1000*60*60*24*registry.searchData.NEW_DATA_EXPIRE_DAY_NUM )
        });
        console.log("数据对比-新差异项：",[...newDataItems]);
        // 过滤掉新数据中带有“带注释”的项
        newDataItems = newDataItems.filter(item=> !item.title.startsWith("#"));
        // 以前的新增数据
        let oldNewItems = cache.get(registry.searchData.SEARCH_NEW_ITEMS_KEY);
        // 如果第一次加载数据，那不要这次的最新数据
        if(oldNewItems == null) {
            cache.set(registry.searchData.SEARCH_NEW_ITEMS_KEY,[]);
            return searchData;
        }
        // 如果还没有过期的，保留下来放在最新数据中
        for(let item of oldNewItems) {
            if(item != null && item.expires > currentTime) newDataItems.push(item);
        }
        console.log("数据对比-总新数据：",[...newDataItems])
        // 总新增去重 (标记 - 过滤标记的 )
        newDataItems = removeDuplicates(newDataItems,(item)=>item.title+item.desc);
        // 当新数据项大于registry.searchData.showSize时，进行截取
        if(! isHasLaftData) {
            // 如何是第一次安装，那不应该有新数据
            newDataItems = [];
        }else if( newDataItems.length > registry.searchData.showSize ) {
            // 如果新增超过指定数量 ，进行截取头部最新
            // 先根据expires属性降序排序
            newDataItems.sort((a, b) => b.expires - a.expires);
            // 然后截取前15条记录
            newDataItems = newDataItems.slice(0, registry.searchData.showSize );
        }
        // 重新缓存“New Data”
        cache.set(registry.searchData.SEARCH_NEW_ITEMS_KEY,newDataItems);
        // 为全局数据（注册表中）的新数据添加新数据标签
        for(let nItem of newDataItems) {
            for(let cItem of searchData) {
                if(nItem.title === cItem.title && nItem.desc === cItem.desc) {
                    // 修改全局搜索数据中New Data数据添加“新数据”标签
                    if (! cItem.title.startsWith(registry.searchData.NEW_ITEMS_FLAG)) {
                        cItem.title = registry.searchData.NEW_ITEMS_FLAG+cItem.title;
                    }
                    break;
                }
            }
        }
        return searchData;
    }
    // ############ 使用用户操作的规则对加载出来的数据过滤：（责任链中的一块）
    registry.searchData.USDRC.add({weight:300 ,fun:compareBlocks});

    // 索引处理与缓存
    const refreshIndex = function (globalSearchData) {
        if(globalSearchData == null || globalSearchData.length == 0 ) return;
        console.log("===刷新索引===")
        // 当前最新数据，用于搜索
        let newDataItems = cache.get(registry.searchData.SEARCH_NEW_ITEMS_KEY);
        // 去重
        globalSearchData = removeDuplicates(globalSearchData,(item)=>item.title+item.desc)
        // 将 index 给 newDataItems ,不然new中的我们选择与实际选择的不一致问题 ！
        // 给全局数据创建索引
        globalSearchData.forEach((item,index)=>{item.index=index});
        // 给NEW建索引
        newDataItems.forEach(NItem=>{
            for(let CItem of globalSearchData) {
                if( CItem.title.includes(NItem.title) && NItem.desc === CItem.desc) {
                    NItem.index = CItem.index;
                    break;
                }
            }
        })
        // 重新缓存“New Data”
        cache.set(registry.searchData.SEARCH_NEW_ITEMS_KEY,newDataItems);
        // 重新缓存全局数据
        cacheSearchData(globalSearchData);
    }
    // 加入到数据改变后事件处理
    registry.searchData.dataChangeEventListener.push(refreshIndex);



    // 模块二
    registry.view.viewVisibilityController = (function() {

        // 整个视图对象
        let viewDocument = null;
        let searchInputDocument = null;
        let matchItems = null;
        let searchBox = null;

        let isInitializedView = false;
        let controlButton = null;
        let textShow = null;
        let matchResult = null;
        let initView = function () {

            // 初始化视图
            let view = document.createElement("div")
            view.id = "my_search_box";
            let menu_icon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjc3MDgxNTk3NzA3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzNDYxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik0yMjQuMiA0NzIuM2MtMTMtNS43LTMuNy0yMy41IDguMi0xOSA5MSAzNCAxNDYuOCAxMDguNyAxODIuNCAxMzguNSA1LjYgNC43IDE0IDIuOSAxNy4zLTMuNSAxNi44LTMyIDQ1LjgtMTEzLjctNTcuMS0xNjguNi04Ny4zLTQ2LjUtMTg4LTUzLjYtMjQ3LjMtODIuMi0xNC41LTctMzEuMSA0LjYtMjkuOSAyMC43IDUgNjkuNyAyOC45IDEyNC43IDYyLjMgMTgxLjUgNjcuMyAxMTQuMyAxNDAuNiAxMzIuOSAyMTYuNiAxMDQgMi4yLTAuOSA0LjUtMS44IDctMyA3LTMuNCA4LjMtMTIuOSAyLjUtMTguMSAwLjEgMC00NS43LTY5LjMtMTYyLTE1MC4zeiIgZmlsbD0iI0ZGRDQwMSIgcC1pZD0iMTM0NjIiPjwvcGF0aD48cGF0aCBkPSJNMjgyLjcgODQ5LjljNzkuNS0xMzcgMTcyLjQtMjYzLjEgMzg1LjQtNDAxLjMgOS44LTYuNCAyLjEtMjEuNS04LjktMTcuNEM0OTcuNyA0OTIuOCA0MjkuNyA1ODUgMzczLjMgNjQwLjhjLTguNyA4LjctMjMuNCA2LjMtMjkuMS00LjYtMjcuMi01MS44LTY5LjUtMTc0LjEgOTcuMy0yNjMuMSAxNDcuNy03OC44IDMxOS45LTkxLjQgNDI5LjctOTMuMyAxOC45LTAuMyAzMS41IDE5LjQgMjMuMyAzNi40Qzg2My43IDM4MCA4NDIuNiA0NzggNzg5LjkgNTY3LjYgNjgwLjggNzUzLjEgNTQ1LjUgNzY2LjcgNDIyLjIgNzE5LjhjLTguOC0zLjQtMTguOC0wLjItMjQgNy43LTE2LjYgMjUuMi01MC4zIDgwLjEtNTguNyAxMjIuNC0xMS40IDU2LjgtODIuMiA0My45LTU2LjggMHoiIGZpbGw9IiM4QkMwM0MiIHAtaWQ9IjEzNDYzIj48L3BhdGg+PHBhdGggZD0iTTM3NSA0MTkuNmMtMzAuMSAyOC4yLTQ1LjggNTcuNy01Mi40IDg2LjEgNDAuNiAzMi40IDcwLjIgNjcuNyA5Mi4xIDg1LjkgMS4yIDEgMi41IDEuNiAzLjkgMi4xIDYuNS02LjcgMTMuMy0xMy43IDIwLjQtMjAuNyAxNS4yLTM3LjkgMjUuMy0xMDUuNy02NC0xNTMuNHpNMzE4LjggNTQ4LjJjMS42IDM2LjEgMTQuNyA2Ny42IDI1LjUgODguMSA1LjcgMTAuOSAyMC4zIDEzLjMgMjkuMSA0LjYgNC45LTQuOSAxMC0xMCAxNS4xLTE1LjQtMC42LTEtMS4zLTItMi4yLTIuOCAwLTAuMS0yMC4xLTMwLjUtNjcuNS03NC41eiIgZmlsbD0iIzhCQTAwMCIgcC1pZD0iMTM0NjQiPjwvcGF0aD48L3N2Zz4=";
            view.innerHTML = (`
             <div id="my_search_view">
                <div id="searchBox" >
                    <input placeholder="${registry.searchData.searchPlaceholder()}" id="my_search_input" />
                    <button id="controlButton" >
                       <img src="${menu_icon}" draggable="false" />
                    </button>
                </div>
                <div id="matchResult">
                    <ol id="matchItems">
                    </ol>
                </div>
                <!--加“markdown-body”是使用了github-markdown.css 样式！加在markdown文档父容器中-->
                <div id="text_show" class="markdown-body">

                </div>
             </div>
         `)
            // 挂载到文档中
            document.body.appendChild(view)
            // 整个视图对象放在组件全局中/注册表中
            registry.view.viewDocument = viewDocument = view;



            // 搜索框对象
            searchInputDocument = $("#my_search_input")
            matchItems = $("#matchItems");
            searchBox = $("#searchBox")
            controlButton = $("#controlButton")
            textShow = $("#text_show")
            matchResult = $("#matchResult");
            // 将视图对象放到注册表中
            registry.view.element = {
               input: searchInputDocument,
               textView: textShow,
               logoButton: controlButton,
               itemsBox: matchResult
            }
            // 菜单函数(点击输入框右边按钮时会调用)
            controlButton.click( function () {
                registry.view.menuActive = true;
                // alert("小彩蛋：可以搜索一下“系统项”了解脚本基本使用哦~");
                // 调用手动触发搜索函数,如果已经搜索过，搜索空串（清理）
                let keyword = "[系统项]";
                registry.searchData.triggerSearchHandle(searchInputDocument.val()==keyword?'':keyword);
                setTimeout(function(){ registry.view.menuActive = false;},registry.view.delayedHideTime+100);
                // 重新聚焦搜索框
                registry.view.element.input.focus()
            })
            /*// 图片放大/还原
            textShow.on("click","img",function(e) {
                let target = e.target;
                if(target.isEnlarge??false) {
                    $(this).animate({
                        width: "100%"
                    });
                    // 还原
                    target.isEnlarge = false;
                }else {
                    $(this).animate({
                        width: "900px"
                    });
                    target.isEnlarge = true;
                }
            });*/
            // 设置视图已经初始化
            registry.view.initialized = true;


            // 在搜索的结果集中上下选择移动然后回车（相当点击）
            searchInputDocument.keyup(function(event){
                let keyword = $(event.target).val().trim();
                // 当不为空时，放到全局keyword中
                if(keyword != "" && keyword != null) {
                    registry.searchData.keyword = event.target.value;
                }
                // 处理keyword中的":"字符
                if(keyword.endsWith("::") || keyword.endsWith("：：")) {
                    keyword = keyword.replace(/::|：：/,registry.searchData.searchBoundary).replace(/\s+/," ");
                    // 每次要形成一个" : "的时候去掉重复的" : : " -> " : "
                    keyword = keyword.replace(/((\s{1,2}:)+ )/,registry.searchData.searchBoundary);
                    $(event.target).val(keyword.toUpperCase());
                }
            });
            // shift+tab处理事件（取消搜索pro模式）
            document.addEventListener('keydown', function(event) {
                if (event.shiftKey && event.keyCode === 9 ) {
                    if(registry.searchData.isSearchPro()) {
                       // 在这里编写按下shift+tab键时要执行的代码
                        let input = event.target;
                        input.value = input.value.split(registry.searchData.searchBoundary)[0]
                        event.target.value = event.target.value.toLowerCase();
                        // 手动触发输入事件
                        input.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                    event.preventDefault();
                }
            });
            // 这个监听用来处理其它键（非上下选择）的。
            searchInputDocument.keydown(function (event){
                // 判断一个输入框的东西，如果如果按下的是删除，判断一下是不是"搜索模式"
                let keyword = $(event.target).val();
                let input = event.target;
                if(event.key == "Backspace" ) {
                    // 按的是删除键
                    if(keyword.endsWith(registry.searchData.searchBoundary)) {
                        // 取消默认事件-删除
                        event.preventDefault();
                        return;
                    }else if(/^\s*[\[<][^\[\]<>]*[\]>]\s*$/.test( keyword )) {
                        // 如果输入框只有[xxx]或<xxx>那就清空掉输入框
                        searchInputDocument.val('')
                        // 触发搜索
                        registry.searchData.triggerSearchHandle();
                        event.preventDefault();
                        return;
                    }
                }else if ( ! event.shiftKey && event.keyCode === 9 ) { // Tab键
                    if(! registry.searchData.isSearchPro()) {
                        // 转大写
                        event.target.value = event.target.value.toUpperCase()
                        // 添加搜索pro模式分隔符
                        event.target.value += registry.searchData.searchBoundary
                        // 阻止默认行为，避免跳转到下一个元素
                        registry.searchData.triggerSearchHandle();
                    }
                    event.preventDefault();
                }
            })
            // 这个监听用来处理上下选择范围的操作
            searchInputDocument.keydown(function (event){
                let e = event || window.event;

                if(e && e.keyCode!=38 && e.keyCode!=40 && e.keyCode!=13) return;
                if(e && e.keyCode==38){ // 上
                    registry.searchData.pos --;

                }
                if(e && e.keyCode==40){ //下
                    registry.searchData.pos ++;
                }
                // 如果是回车 && registry.searchData.pos == 0 时，设置 registry.searchData.pos = 1 (这样是为了搜索后回车相当于点击第一个)
                if(e && e.keyCode==13 && registry.searchData.pos == 0){ // 回车选择的元素
                    registry.searchData.pos = 1;
                }

                // 当指针位置越出时，位置重定向
                if(registry.searchData.pos < 1 || registry.searchData.pos > registry.searchData.searchData.length ) {
                    if(registry.searchData.pos < 1) {
                        // 回到最后一个
                        registry.searchData.pos = registry.searchData.searchData.length;
                    }else {
                        // 回到第一个
                        registry.searchData.pos = 1;
                    }
                }
                // 设置显示样式
                let activeItem = $($("#matchItems > li")[registry.searchData.pos-1]);
                // 设置活跃背景颜色
                let activeBackgroundColor = "#dee2e6";
                activeItem.css({
                    "background":activeBackgroundColor
                })

                // 设置其它子元素背景为默认统一背景
                activeItem.siblings().css({
                    "background":"#fff"
                })

                if(e && e.keyCode==13 && activeItem.find("a").length > 0){ // 回车
                    // 点击当前活跃的项，点击
                    activeItem.find("a")[0].click();
                }
                // 取消冒泡
                e.stopPropagation();
                // 取消默认事件
                e.preventDefault();

            });
            // 将输入框的控制按钮设置可见性函数公开放注册表中
            registry.view.setButtonVisibility = function (buttonVisibility = false) {
                // registry.view.setButtonVisibility
                controlButton.css({
                    "display": buttonVisibility?"block":"none"
                })
            }
            // 高权重项特殊搜索关键词直达
            registry.searchData.searchEven.event[registry.searchData.specialKeyword.highFrequency] = function(search,rawKeyword) {
                return DataWeightScorer.highFrequency(45);
            }
            // 历史记录特殊搜索关键词直达
            registry.searchData.searchEven.event[registry.searchData.specialKeyword.history] = function(search,rawKeyword) {
                return SelectHistoryRecorder.history(15);
            }
            // 向搜索事件（只会触发一个）中添加一个“NEW”搜索关键词
            registry.searchData.searchEven.event["new|"+registry.searchData.specialKeyword.new] = function(search,rawKeyword) {
                let showNewData = null;
                let activeSearchData = registry.searchData.getData();
                // 如果当前注册表中全局搜索数据为空，使用缓存的数据
                if(activeSearchData == null ) {
                    let cacheAllSearchData = cache.get(registry.searchData.SEARCH_DATA_KEY);
                    if(cacheAllSearchData != null && cacheAllSearchData.data != null) activeSearchData = cacheAllSearchData.data;
                }
                // 如果最新数据都没有，使用旧数据（上一次）
                if(activeSearchData == null ) {
                    let oldCacheAllSearchData = cache.get(registry.searchData.OLD_SEARCH_DATA_KEY);
                    if(oldCacheAllSearchData != null) activeSearchData = oldCacheAllSearchData;
                }
                // 只展示 newItems 数据中data也存在的项
                let newItems = cache.get(registry.searchData.SEARCH_NEW_ITEMS_KEY)??[];
                if(newItems.length > 0 && activeSearchData.length > 0) {
                    // 返回的showNewData是左边的（activeSearchData），而不是右边的（newItems）,但newItems多出来 的属性也会合并到activeSearchData的item
                    showNewData = compareArrayDiff(activeSearchData,newItems,registry.searchData.idFun,0)
                }
                if(showNewData == null) return [];
                // 对数据进行排序
                showNewData.sort(function(item1, item2){return item2.expires - item1.expires});
                // 将最新的一条由“新”改为“最新一条”
                showNewData[0].title = showNewData[0].title.toReplaceAll(registry.searchData.NEW_ITEMS_FLAG,"[最新一条]")
                // 添加“几天前”
                showNewData.map((item,index)=>{
                    let dayNumber = registry.searchData.NEW_DATA_EXPIRE_DAY_NUM;
                    item.title = item.title + " | " + Math.floor( (Date.now() - (item.expires - 1000*60*60*24*dayNumber) )/(1000*60*60*24) )+"天前"; //toDateString
                    return item;
                })
                return showNewData;
            }
            registry.searchData.searchEven.event[".*"+registry.searchData.searchBoundary+".*"] = function(search,rawKeyword) {
                // 当处于搜索模式时，只搜索“可搜索”项
                return search(`${registry.searchData.searchProFlag} ${rawKeyword}`);
            }
            // 搜索AOP
            function searchAOP(search,rawKeyword) {
                // 转发到对应的AOP处理器中（keyword规则订阅者）
                let data = registry.searchData.getData();
                console.log("搜索data:",data)
                return registry.searchData.searchEven.send(search,rawKeyword);
            }
            function searchUnitHandler(beforeData = [],keyword = "") {
                // 触发搜索事件
                for(let e of registry.searchData.onSearch) e(keyword);
                // 如果没有搜索内容，返回空数据
                keyword = keyword.trim().toUpperCase();
                if(keyword == "" || registry.searchData.getData().length == 0 ) return [];
                // 切割搜索内容以空格隔开，得到多个 keyword
                let searchUnits = keyword.split(/\s+/);
                // 弹出一个 keyword
                keyword = searchUnits.pop();
                // 本次搜索的总数据容器
                let searchResultData = [];
                let searchLevelData = [
                    [],[],[] // 分别是匹配标题/desc/url 的结果
                ]
                // 数据出来的总数据
                //let searchData = []
                // 前置处理函数,这里使用观察者模式
                // searchPreFun(keyword);
                // 搜索操作
                // 为实现当关键词只有一位时，不使用转拼音搜索，后面搜索涉及到的转拼音操作要使用它，而不是直接调用toPinyin
                function getPinyinByKeyword(str,isOnlyFomCacheFind=false) {
                    if(registry.searchData.keyword.length > 1 ) return str.toPinyin(isOnlyFomCacheFind)??"";
                    return str??"";
                }
                let pinyinKeyword = getPinyinByKeyword(keyword);
                let searchBegin = new Date().getTime();
                for (let dataItem of beforeData) {
                    /* 取消注释会导致虽然是15条，但有些匹配度高的依然不能匹配
                    // 如果已达到搜索要显示的条数，则不再搜索 && 已经是本次最后一次过滤了 => 就不要扫描全部数据了，只搜出15条即可
                    let currentMeetConditionItemSize = searchLevelData[0].length + searchLevelData[1].length + searchLevelData[2].length;
                    if(currentMeetConditionItemSize >= registry.searchData.showSize && searchUnits.length == 0 && registry.searchData.isSearchPro() ) break;
                    */
                    // 将数据放在指定搜索层级数据上
                    if (
                        (( getPinyinByKeyword(dataItem.title,true).includes(pinyinKeyword) || dataItem.title.toUpperCase().includes(keyword) ) && searchLevelData[0].push(dataItem) )
                        || (( getPinyinByKeyword(dataItem.desc,true).includes(pinyinKeyword) || dataItem.desc.toUpperCase().includes(keyword)) && searchLevelData[1].push(dataItem) )
                        || ( `${dataItem.resource}${dataItem.vassal}`.substring(0, 2048).toUpperCase().includes(keyword) && searchLevelData[2].push(dataItem) )
                    ) {
                        // 向满足条件的数据对象添加在总数据中的索引
                    }
                }
                let searchEnd = new Date().getTime();
                console.logout("搜索主逻辑耗时："+(searchEnd - searchBegin ) +"ms");
                // 将上面层级数据进行权重排序然后放在总容器中
                searchResultData.push(...DataWeightScorer.sort(searchLevelData[0],registry.searchData.idFun));
                searchResultData.push(...DataWeightScorer.sort(searchLevelData[1],registry.searchData.idFun));
                searchResultData.push(...DataWeightScorer.sort(searchLevelData[2],registry.searchData.idFun));

                if(searchUnits.length > 0 && searchUnits[searchUnits.length-1].trim() != registry.searchData.searchBoundary.trim()) {
                    // 递归搜索
                    searchResultData = searchUnitHandler(searchResultData,searchUnits.join(" "));
                }
                return searchResultData;
            }
            // ==标题flag处理==
            // 1、标题flag颜色选择器
            function titleFlagColorMatchHandler(flagValue) {
                let vcObj = {
                    "系统项":"background:rgb(0,210,13);",
                    "非最佳":"background:#fbbc05;",
                    "推荐":"background:#ea4335;",
                    "装机必备":"background:#9933E5;",
                    "好物":"background:rgb(247,61,3);",
                    "安卓应用":"background:#73bb56;",
                    "Adults only": "background:rgb(244,201,13);",
                    "可搜索":"background:#4c89fb;border-radius:0px !important;",
                    "新":"background:#f70000;",
                    "最新一条":"background:#f70000;",
                    "精选好课":"background:#221109;color:#fccd64 !important;"
                };
                let resultFlagColor = "background:#5eb95e;";
                Object.getOwnPropertyNames(vcObj).forEach(function(key){
                    if(key == flagValue) {
                        resultFlagColor = vcObj[key];
                    }
                });
                return resultFlagColor;
            }
            // 2、标题内容处理程序
            function titleFlagHandler(title) {
                if(!(/[\[]?/.test(title) && /[\]]?/.test(title))) return -1;
                // 格式是：[flag]title 这种的
                const regex = /(\[[^\[\]]*\])/gm;
                let m;
                let resultTitle = title;
                while ((m = regex.exec(title)) !== null) {
                    // 这对于避免零宽度匹配的无限循环是必要的
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    let flag = m[0];
                    if(flag == null || flag.length == 0) return -1;
                    let flagCore = flag.substring(1,flag.length - 1);
                    // 正确提取
                    let style = `
                            ;${titleFlagColorMatchHandler(flagCore)};
                            color: #fff;
                            height: 21px;
                            line-height: 21px;
                            font-size: 10px;
                            padding: 0px 6px;
                            border-radius: 5px;
                            font-weight: 600;
                            box-sizing: border-box;
                            margin-right: 3.5px;
                            box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 0.5px;
                        `;
                    resultTitle = resultTitle.toReplaceAll(flag,`<span style="${style}">${flagCore}</span>`);
                }
                return resultTitle;
            }
            // 3、添加标题处理器 titleFlagHandler
            registry.view.titleFlagHandler.handlers.push(titleFlagHandler)
            // 给输入框加事件
            // 执行 debounce 函数返回新函数
            let handler = function (e) {
                // 搜索使用的数据版本
                let version = registry.searchData.version;
                let rawKeyword = e.target.value;
                // 过滤
                // 数据出来的总数据
                let searchData = []

                function search(rawKeyword) {
                    // 清理类AI搜索标志
                    let processedKeyword = rawKeyword.trim().split(/\s+/).reverse().join(" ");
                    version = registry.searchData.version;
                    let searchResult = searchUnitHandler(registry.searchData.getData(),processedKeyword);
                    if((searchResult == null || searchResult.length === 0) && `${rawKeyword}`.trim().length > 0 ) {
                        // 如果匹配不到使用类AI搜索(registry.searchData.getData()会被排序desc)
                        // 为什么需要拷贝data，因为全局的搜索位置不能改变！！
                        searchResult = overlapMatchingDegreeForObjectArray(rawKeyword.toUpperCase(),[...registry.searchData.getData()], (item)=>{
                            const str2ScopeMap = {}
                            const { tags , cleaned } = extractFlagsAndCleanContent(`${item.title}`);
                            str2ScopeMap[cleaned.toUpperCase()] = 4;
                            str2ScopeMap[`${item.describe}${tags.join()}`.toUpperCase()] = 2;
                            str2ScopeMap[`${item.resource}${item.vassal}`.substring(0, 2048).toUpperCase()] = 1;
                            return str2ScopeMap;
                        },"desc",{sort:"desc",onlyHasScope:true});
                        console.log("启动类AI搜索结果 ：",searchResult)
                    }
                    return searchResult;
                }
                // 搜索AOP或说搜索代理
                // 递归搜索，根据空字符切换出来的多个keyword
                // let searchResultData = searchUnitHandler(registry.searchData.data,key)
                let searchResultData = searchAOP(search,rawKeyword);
                // 放到视图上
                // 置空内容
                matchItems.html("")
                // 最多显示条数
                let show_item_number = registry.searchData.showSize ;
                function getFaviconImgHtml(searchResultItem) {
                    if(searchResultItem == null) return null;
                    let resource = searchResultItem.resource.trim();
                    let customIcon = null;
                    if(searchResultItem.icon != null) {
                       customIcon = searchResultItem.icon;
                    }else {
                        let type = searchResultItem.type;
                        // 如果不是url，那其它类型就需要自定义图标
                        let typesAndImg = {
                            "sketch":"data:image/png;base64,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",
                            "script":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjkyMzU4NTM5NjI1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijc2MjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTk1OC4xNyA0NDcuNEw3NjAuNjkgMjQ5LjkybC02NS44MiA2NS44MyAxOTcuNDcgMTk3LjQ3TDY5NC44NyA3MTAuN2w2NS44MiA2NS44MiAxOTcuNDgtMTk3LjQ3IDY1LjgzLTY1Ljgzek0yNjMuMyAyNDkuOTJMNjUuODIgNDQ3LjQgMCA1MTMuMjJsNjUuODIgNjUuODNMMjYzLjMgNzc2LjUybDY1LjgyLTY1LjgyLTE5Ny40Ny0xOTcuNDggMTk3LjQ3LTE5Ny40N3pNMzQzLjI0NyA5NDkuNDgzTDU5MC45NiA1Mi4xOWw4OS43MiAyNC43NjgtMjQ3LjcxMyA4OTcuMjk1eiIgZmlsbD0iIzIzMTgxNSIgcC1pZD0iNzYyNiI+PC9wYXRoPjwvc3ZnPg=="
                        }
                        // url与sketch类型可互转，主要看resource
                        type = (type == "url" || type == "sketch")?(isUrl(resource)?"url":"sketch"):type;
                        if(type != "url") customIcon = typesAndImg[type];
                    }
                    if(customIcon != null) {
                        return `<img src="${customIcon}" />`
                    }else {
                        return `<img src="${registry.searchData.getFaviconAPI(resource)}" standbyFavicon="${registry.searchData.getFaviconAPI(resource,true)}"  class="searchItem" />`
                    }
                }

                // 标题内容处理器
                function titleContentHandler(title) {
                    // 对标题去掉所有flag
                    const { cleaned } = extractFlagsAndCleanContent(title)
                    title = cleaned
                    // 如果带#将加上删除线
                    let style = "color: #1a0dab;";
                    if( title.startsWith("#")) {
                       style = `text-decoration:line-through;color:#a8a8a8;`;
                       title = title.replace(/^#/,"")
                    }
                    return `<span style="${style}" class="item_title">${title}</span>`;
                }


                let matchItemsHtml = "";
                for(let searchResultItem of searchResultData ) {
                    // 限制条数
                    if(show_item_number-- <= 0 && !registry.searchData.isSearchAll) {
                        break;
                    }
                    // 显示时清理标签-虽然在加载数据时已经清理了，但这是后备方案
                    // clearHideFlag(searchResultItem);
                    // 将数据放入局部容器中
                    searchData.push(searchResultItem)

                    let isSketch = !isUrl(searchResultItem.resource);//  searchResultItem.resource.trim().toUpperCase().indexOf("HTTP") != 0;
                    let vassalSvg = `<svg t="1685187993813" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3692" width="200" height="200"><path d="M971.904 372.736L450.901333 887.338667a222.976 222.976 0 0 1-312.576 0 216.362667 216.362667 0 0 1 0-308.736l468.906667-463.232a148.736 148.736 0 0 1 208.469333 0 144.298667 144.298667 0 0 1 0 205.824L346.752 784.469333a74.325333 74.325333 0 0 1-104.192 0 72.106667 72.106667 0 0 1 0-102.912l416.853333-411.733333-52.181333-51.456-416.853333 411.733333a144.298667 144.298667 0 0 0 0 205.781334 148.650667 148.650667 0 0 0 208.426666 0l468.906667-463.146667a216.490667 216.490667 0 0 0 0-308.736 223.061333 223.061333 0 0 0-312.661333 0L60.16 552.832l1.792 1.792a288.384 288.384 0 0 0 24.277333 384.170667c106.24 104.917333 273.322667 112.768 388.906667 23.936l1.792 1.834666L1024 424.192l-52.096-51.456z" fill="#666666" p-id="3693"></path></svg>`;
                    // 将符合的数据装载到视图
                    let item = `
                    <li class="resultItem">
                         <!--图标-->
                         ${getFaviconImgHtml(searchResultItem)}
                        <a href="${isSketch?'':searchResultItem.resource}" target="_blank" title="${searchResultItem.desc}" index="${searchResultItem.index}" version="${version}" class="enter_main_link">
                            <!--flag与标题-->
                            ${registry.view.titleFlagHandler.execute(searchResultItem.title)}${titleContentHandler(searchResultItem.title)}
                            <!--描述信息-->
                            <span class="item_desc">（${searchResultItem.desc}）</span>
                        </a>
                        ${searchResultItem.vassal !=null?'<a index="'+searchResultItem.index+'" version="'+version+'" vassal="true" class="vassal" title="查看相关联/同类项内容" target="_blank">'+vassalSvg+'</a>':''}
                    </li>`
                    matchItemsHtml += item;
                }
                matchItems.html(matchItemsHtml);

                let loadErrorFlagIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KCTx0aXRsZT5hcDh6Yy12cm1kbzwvdGl0bGU+Cgk8ZGVmcz4KCQk8aW1hZ2UgIHdpZHRoPSIxOTQiIGhlaWdodD0iMTk0IiBpZD0iaW1nMSIgaHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNSUFBQURDQ0FZQUFBQWI0UjB4QUFBQUFYTlNSMElCMmNrc2Z3QUFIWjFKUkVGVWVKenRYUXU0SkVWMXZzUmdpQ1lLdmpVKzhCRk5RREJDZ3ZMNTJnQVNnV0FJNXFyTDNlbnFxYTQ3M1QzTDFTV0o4YTJicUtnSmo1QVk4a0dJSmlDSjhqSVFKUVlSQ0JCV1dJS0NLQVo1aU1ndVlGWjJlY2d1N0M0NXA3cm0zcDY1M1QzZFBWVjlxbnU2disvLzdtVjFvYnZPK2F0T1ZaM3puNW1abE9lSko1NW9NUUc2M1lXWkR2ZG5HQTltbUVENE00NEhQejM0TS9rekgrVGZnYi92Q3Z3OWxQL3N3TC9UeFg4djc4OXdIczY0cmt2K3ZYVkg2a1A5WW5VQjUzeW0wdzNCV1FHOG1KUHJSeWpod3UvZHJqK3pkdTFhOHZHcEMxb2lGSVRyd293c0ltZHpTSjArRHlKaTRtclNCZlI2UGZMeHN4VXRFY1pnQmN5cUR1K0I0MVBQOXBxZ1FpeGN3YWpIMWlhMFJFakE3T3h4VVd6UEIrR0dCUTVzQ0xoYXVHNjdVclJFVU1CNE9wcjFHekx6bHlTRjU2MG10MFZMQkFJSUlhSlFvYVR6ZExzTHorNXcvN2RoOVhnSGhCMS93b1IvTXV3ZHpnUkNmUlgrOTNXQVd3RWJBVDlUMkFaNFF1SEJ3Wi9EMy9rUi9QMmJ3Qm12Z1BjNUgvNzVkSWNIZitIeVlKN3gvcUdjaDY5eVhYZTNTa2lCcXdTTXlZb3AybXhQTFJGY1VjejVPZWUvMnVtR2I0SFllalhqL21ud1o5Y29SMzZpWXR3SjRkcEZnT05ody83dWJ0ZmZDMWF6WHpCRkNvZUhzRXA0NVBacWlhRDVZMlg0STNLRUNXNndweVBDVmVCc2Z3ZXo4M2ZnejdZVE9IMU8rQS9BejR0aE5mbG9Wd1FIOVhxOXArZ2xSSFEwN016UGs5dXdKY0lFaU9ML1VHMStrd0Zod0M4NnZQZEdJTXBuNEordnAzZnVpZkFva1AwYkVHSzlIMWF3L2ZXU3dvZEp3aWUzYVV1RWdzQ2xQYzJvczdQSC9iS003WGx3THN4NkQxdmd3S1p3SzZ3V24zTGQzajVhU2RHZ2U0bkdFc0ZOQ1g4d25vWlovMjB3czUzRmFHSjhhbndQUXlqUFcvMFNMV1RnUVNQMkVJMGpRcmZiVDd6eEZVSThWNFlLWG5DN0JjNW9BM1pnK0FRaDR5eUdoWk1TQWsvZVptZG55ZTAvOVVUQTlJR2t5eTlYaEsrSG4rY0FIclBBK1d6RjNSQkNmZ2htOW1kTVNnamNRMUQ3d3RRU2dZMWNoTUd6QzRRL1IrS01aNEdUMVFpd1QrTCthYzc4L0NzbkpjVEttdTBmYWswRTExMHpsUEVaeGYvaE1SQzMza0x2VkxYRzQ3aUhjbDMvMXljaVJJM3ltV3BMaE5Fa09GamFENEdmTjFqZ1JFM0NEb1poWmEvMzh2SmtxTWZxVURzaVlCRktuQVN1Q0ZiQXovVVdPRTJUc1ExVzJWTW0yVU80d3U2OVE2MklnRm1TZzcxQXQ5dC9VWlRURSt5MHdGR21CVC9EazdmWjJka25seUtEeFNkTHRTRUNsanJpcVZDVVBoQWV6L0QybE40eHBoWGZnd25wNERKa1FEZ1doa3JXRTJIRllucTBQSnA3TStCL0xYQ0VGaEhPZ2ZqL1dlVUlZVmVvWkRVUlZzcTdBVXlBVzdPN3l2aHN3eUQ3c0ltSnNGZUdESGp4U2UxajFoTUI4MWdjR1ZkaU9vVE01NmMyZUlzc2lPQ0NVcXNERDZ6WU4xaEpCSWRqaHFPN204b0UzVUZ1NUJaNWNhOHIvTU1Ma3dIMmZxZ0cwaElodmhKd1dVTzdEOFNRTjF0ZzJCYkZzZFAxd2hQTG5DdzVEbDJacUZWRWtDZER3bC9aOEpUb2FjRjZwOWQ3Y1ZFeWNIN3NkQk1CTXlCVktFUnR3QmI2Y0gveFk5WndwaVBFZEJKQmJiS3V0TUJ3TGZUamNjY0xqczFIZ2lWVXJhWkJUZ1RNWTRHQitvRUZCbXRoRWp3NEJmWU5UeHBIZ0RpcURKTklpZUJ3LzBBbWwwOExETldpQW9UL2dXb2dTVTZmQmhSVGJqUVJaSzJ3RjJ5bE4wNkxpbkd0NDZ4K0ppdEFoaW8wVzBtSUVKME1ZYzQ3dVZGYTBPRDdFUGE4Z0JVZ2crbEx0OHFKSUpYYjJrdXlGbDU0UjBlSWx6SkwwakVxSllMTC9RWFc1Z3VaeGxad21xOHhFYndIa3hRZEovaTFZOEp3RHhRdjZIWjcrN2xld0pVazVRTVd2T3VkaGRRMGhEa3lWRVlFeHdzRmEwbGdFdmVnOWlyRTAwL1BOU21oamlxRXFFckZqL0s5YnlzU0ptRk5RMjJKQUJ2ak9kYUdRNmF3RlFqdzRZV0ZoVjhxNlFDN29MUWxvMDFzL0I2S0tlY2hBcFBIcXZySllKd0l3T0NqV0xzeE5vVnJPNkwvbTFyczVLN1pIVmFIZjJSMHEvWU51SnJsSVFMdUYrYm05QjZyR2lXQ085Ly9IWGp4Unl4d21NWUI0M3lVck5ROU14SVhQMTJlTjFsUGQ0aGtqQWl3ZkwwTVFxTDdxQjJtZ2RnT29WQ29td0J4Uk9Xdy9pY1lRVG1zV3BWeWJwNzFrY0VJRWFUYVFhc3RaQUpiWGVFZmJaSUVRNnVEbEhIQlhnd1ZmeWZzZWZLU1laWFh0NU1JTXAra1ZaZ3pBRlNoNng5YUZRbmlRUExCTzJ5bzhIdDNxcjFsWlRmUDJvbmc4T0RUOUU3VE1Jamc1OWl0aDRJRUErQmRSTVdiNlMzWUxpc1BFVndOOXd0YWllQUkvdzhxSEtocHdXT3dHaHhCU1lJNHF0eE1ZMWJ5M056QzAzS1JZY0pWUVJzUmxFN21GZ3NjcDBuWWpyTHQxTTQvaWs2bjgxUjR0MU9yR0FQNC9pL2xJUUlXOUt5ZG9QbWhGaUpBakxZcmJJNnZzOEJ4bW9UdFRJUmRhcWZQblB4UWNOa0xIakkrRmpBT2Vjamc4dkphU1ZxSWdHMkpMSENjSm1Henc4UERxQjA5RHpwZThHcDQzN3NNajhlRHE3eitLOGFUd1M5ZHZ6QXhFYkFCSDdPNjQyVHRjQnUyaktWMjhDSlkxZXM5bjVsWElsOHZJdzlEZHdzVEVTR0tGY003TEhDZXB1QlN2SU9oZHV3eWtPa1Joc05qN1AwMmxnaVlnbEdDREJNUkFmNmpKMW5nUEUzQUR0UUNRaVVQYW9lZUJFbzIva2FENDdUVjdmVitZendaaXU4VlNoUEI4WUlEV0JzU2FVQjRCL1VkZ1U1MGd1QTU4RjAvTkRoZVYyRm5wSEZrY0FwbXFKWWlndXJDMkhhbm1RdzdVZGdZaTltcG5WYzMxRVhZWmxOajUzSS9HRWNFUkpHOWJpa2lZQUdJQlk1VVkvZzNZNnNyYW9jMUNXYysrSDFtckFiRmZ5QlAvWUxEODk4NEZ5YUNXdnFNc2IyaHdNYm1HQzZjaHc0Q3c3c0x0YU5XQWJXNU5UT21Jdno3Y1VSQTVMMWtLMHdFMWFlQTJyRnN3K095NUZHRVowVEx0bit3SThKOXNWNjRiT1ZZRTRBSm1FQ0dLd3lOK1hZYzQzRkV5TnU3clJBUk9QZGZ3OW9OY2h6cjBQR3h1b3ZhNld3RjlycGoyRXpFeVBqN2w0MGpBc3NaSGhVaUFpcVZXZUI4MU1DSjRBdTZTaVNuQVNxTjI0Zzk4QVorSEJuY0hQY0t1WW1nYnBDcG5aQWExN0w1MVh0VE8xWWRBYUhqMllac2NqM3V1YkxKb0pFSThDKzgzQUpISkFOSzFzdVkxN0ltZUhXQmtubTgxNFJ0SEI3OFlUWVJzUGxNdHQxeUVVRjF0U2QzUmlMc1VPcDhha0R0YVlCWE55aTlXeE0yK3U2NFN6Wm56S1k1RnhFTTd2enRod2hYeHdlMENrSGFKb09KNE1zbTdLVDJJWm1yd3NKQ2VtYnFXQ0lvU1JaNmh5UWhRZkRGMGNHMG9RTmtuZUc2L2VjeEUvZFFVY0pmZG5qa3BhL21ZNGtBLzRKenlCMlNCZytwSkxLaHdleDBPdVRPVkhjd3ovOVRFelp6UmZpbUxDSmszVFJuRWtHcEZVL252WUVJejBnYXpHNVhqM3pJTkVQbXFvbmdKdjEyazlJejJXa1hUaklaTW9rQVM4bGZrenNrRVZ6UFB6SnBJQ0ZVSkhla0prQTFHZFJ0dDUycWRqNmREQ21LRjZrUHlna3lZemVDOXNOMWd6MFRpV0JJalhrYUFXVDRxbTY3T2NML3kwd2lwT3dUVWgvSEN4bTFNMUlpclN5d1NFWmppMnlvZW1mZG9mZjltTitWUllTa2pwMnBEL3lGZGRUT1NJbDBNZHIyUWswbmxHaVlWdHRCU1AvdUxDSWtkZDlKZkJSVHlaMlJFa3E3SjNFZ3V3WTd0MHdibkY3dnhUQ20yM1RhRGxidGIyb2hBdXkrajZkMlJHcW9yTW4wd1p5ZkozZWlwb0J4Ly9PYTdiY0RVK0JUN1Nmd1B1aTRzVVRBQktiYnFCMlJHdTU4LzdleWlCQWhyTFFwZGxPaFNqdjFWclBKSG5KWmwydkRJZTZ5WjZwdmt1TkU4TUxaOFVRWTNqc3d0ZXhpWGdzV2p6dndaM2pLaEduQWFlZlhMU0pBWFA5dm1tMTR6VGliWlJQQkMwK2tka0lib0ZTOUN4QWhQenJkTmw5cE9SSGt2WTFPRys0YzE3RXprd2pNcUJSSG5lRGZiSW9JQStES2dRKzFFOW9BcFl5aXRRY0RyTTdIWm8xL1BJRnllRFdJYnVVc2NFSTcwQlhCUWNiSm9NS3Fic0lHYnRxZ094cVIvYWF6OWdteDA3L2gxU0RhWUpBN29FVzQyNW1mZjZWcE1peUhML2NWMDVicGloMkJ0TnBQQkQ5WEdSTEprMUJNQkd4NFJlREIxeTF3UHR1d2hYbmhSNG8weFRaQkRCUzNiWG9ZRlRVeDFOdkFFUFllYjBzZFY1NndJc2hyYVdDUUJZNW5LN0FUME8xS09lRWNXSFpQeDd3V21GVSs1SGgrSDNzRllCcHc1dm0xRG9oUVNwUTBOWXlDYjd4U3M5MU9TaHZMK01YYTR1TncvMEFMbkswcEFNSUVwM2E2dmRkcGNmNUVRcWc0RjFhTEZSTjBpckVOS3YxZHB5MnV6UnJId1lRUzN4KzBNbzVtY0FQMmxwc1pxN1F3R1RBWjBIWHJueUtPSzZ6bThYOU1oVnlwSyt6d2l1Q0Y1MXZnTkkyRlZNTHovRS9nU1ZUV0JtNVNPRjV5TGsxZDRJaHdsZTZ4ZDBXd0ltMjhCdVdiOGZ1RGpkVE9Na1hBRGVIbFFJeVA0YjRpUGROMUFzQUt3UXRLbzlzQUpjMmlkYnpWS3BNeVZ2NFNFZFNKQ0xWelRETWVBVndDUnZrZ0xOWDc2dzJqL0ltNlRWWlBCS2xjcDNkOGVYQnU2dmp3R0JFNjg4SHZXZUFNTFphd1FRb0tDLzlvSFdGVWxucURiVEJSd29uOW10UEdabEJvcGU0UHd2ZFpZUHdXU1lpT3RNL0JYQnlWaGxDS0RERFprVHQ1SHFoemY5M2p1RDFyUWxra0FzdysvMHh1OEJaNWNBL01ZQjlYMmtDTlhCVVlEOTl1Wk93ZzVFd2JteVVpZU1IMUZoaTVSWDVzUTFGZHdHdlRqRHVLK2hBaGVLZUpNWVB2NzZTTkRXcFZEWWp3ZnhZWXQwVng3QURIK1JmT3c1ZWxHWGtSSmZzUFYwNkVTR0xUd0ZqNUgwc2JHOVNxbXNGbWRoWVl0TVZrMklhR3poTENyVU1sbmV1NmVJcnpPU05qRkpXREpxK1c4LzIyVUw5SmdPWC9uNUtOYmJmeVJzZUxhak1Va2U4eU1UYlpCZjMrektEN0lia1JXK2lCT2dvZlBpSzBqQWdRaGNqRVFUekRIM3BQNGIvTDROamNQam91QTJDK0ZzWmtQV3JqdGRBSEpkTTVaR2hxS1h2WFhTTm5mQ2I4bEJrNWlHUmRlSENmd2JGNU5PMi9qYmZ3V0tYekFXcmp0ZENIWlVUZ2RLdEJ0eHVKRjZRNjRHQkdkbnY3T0Y3d0k5TmprNnBWaFNXendJWVRxSTNYUWlORTJCMHlNdEZxZ0tkVWlVNDNSQUIzTjVpSTE4THZXNnNZbXpTdEtoZFhCQVBpU2kzb3NETmVTVWNoV0l6NS9Vbk94a1lJb0xSMWI2MXlmTkswcWlRUkRPakp0Q0NELysyNGdic1Z5OFpndHV0QTN5a0plRUtwMUtxSjdxMWtIbFBpSFF2K2NnbTlBVnZvZ09QNTc0MGJ1RW9TT1BQQk1oTGdIWlVyL01QVjNjQ2QxT09UMXZOaXNGbStndm9GVzJqQmc3MWU3K2xMeHExbWt4eGxKdmdxNUZtek8xYmp3ZWJ6WkJhbDdkalZiU25xNnBsd2ZCcXRDTmVRdjJBTERVYVdzKzZpY1dmNzVzczJjVC9neUJETTN3dWM2VXVzb2sxdmFRaC9KVXNnZ2hSYVkyM0NYUk93bmZWNkwyY1Zoa1dvNVlvaGhicUgwaXJyYmdxd0tYWlpBaEV3UlIxL3VaSDZCVnRNYU9Cb05vNFoxK3hwRVc3Q1ZYNy9GNmkvdmRBNHhSckh4eUZ6alpnSS9vZjZCVnRNQm5ETS9VYU5hMHIzQ05YaG9teFhlVUpGL3UyRk1IckhFcnRyd1YrbXVrVlVBN0JPYWh5SndWSGcwcEdnYnNsSXh2c3FOODEvd0lMdkxnNGV6TEhFZTQwMWtnaTZsY1dvc1JNekRWM3VMK0FGQ2pZRlBDWU05NWdUNG9WU0lRRnYwa1h3RGZqLzNXL0J1Mm93cnU4TmIyQm5wYml0TkxCQUkrdlpMMFNDQXY0SG1lNkdIaFVpcmVmRm9Dam5VdW9YMUlTTllQaFA0YVl4cjNHRkVNL2wzSDhOMXNsaUJSTktOenBlK0g3Wk9vc0hwNmdTMW90VkdHQ2ozTTBqcy8zK3J5U0dNUEVVaHdLNnFaaWdoNkVDa2dnM2tYaTBpUHNCcklpejRIc25nanphVFNDQ0pMcUpYcmVWZnB3WC9BQ2NWNkIycThrTjRvQTRRSklqd01uK3huQ21aRjVjbmhuS2pKeVZZM3dmbDRmRWs1OUJVaHltR1NRNWlkUnk1Y0YxRm56cnhFaEtVV2N4SXB4Ri9ZSWxjUU9HT2xqTVlab0FLVFBucnJDSzhDcXlKdE1SWHBTWENHV2dOdUZhbTNkUVFyVkZXelpCU0NLb3RGM3lsOHdMcVZIRGczZGl6RXBCZ0ZISUJMSklTZTBoZ3ZHNEY4T1dwUGRhaFNIT0JDU0Fiem9FZmo1SWJXK3RHTGxyWWQ1U1U4RVpWZFJNLzVJNWpJNGJROVQyb1hiK0ZNZDdQZ3pxWitBOWYxend1NUJBRzVRSTFmVUtWOHNOZlJ4ZWNHSHM5L1dMRXY2d2o0RU44cE9XclFZcG9VNHVSQTA3N0w0bExnRk1BVm4ycldJUUdobFREZENHeDNIamluazAxTTZlQnhpcXVXNndKODZvS25RNkZqZmdDSG1TNVlYSG9CQXd0dW5DMWFUc2Z3ZWRYNG5iM29yNVl2amZIQ0pDU1JKZ2tReUVYQTliWUhmdGZwUWtwVGxvSGorampwU29YeklONjJCanVpKzFjOXNNSEI4MVZsdnd3bWdRTW81emVOempZS2lBWk1KTkpQcUI4b1ZUQVk5WllIdmQySkEwRHAxQUVRRm1yQU1zZU1sUmJJZFo2Yzl0RFlOc0E0dmRpWUF6Znd0WG83ZzhKSjc4d0o4ZkJiOS9VclVIdTR2WmxobHFIdXVTaURBWVEzVWtTUDZTaTFDbk1HOFlmZEVXbVVUWWxEQ1d1TkZGNVlaV3ZNMUx5c2NhSVlLTW0renBuYllPbHFybnhGOTAyanBMRmdWdTBpMndtL1ZRQnhtWlJNQVRobHVvWHhSdmIrZm1GcDQyK3FLcmlLVkliSWNwcmRER1FRVGhNaUtNZHRXMG9XNVpiZm9TenJOYkltUVN3UXYrbHRwMmRVQlM4M2k4V1I4aUF2YjJJbjdSVFVra2tDOUxvTVJRSnpDWkMwWHZhTFpqTk9SbUkvdlBxSkdnV2FtOVBOaVNSb1RSRjI0eERCWDdranVhNWJoM21WK0pCQ0pnelNueGkyNUxKWUlJR3Q5eGZpSWlSRTFEa2s2TldpemgwbEcvR28wMDVLUE9uQitsZkZtOEtVMGpnOFBiVlNHVERNSi9LOE1iZUhxSHN4VW5qZnJVbkJETGlSRHRFOEtyS0Y5V0hRT21oRWUrc2RMRHBrQVYwZSswd09uc1EzU3lsaG9XalJBaCtDemx5enE4OThaMElrUk50T3ZVSnBVQ21OZlVraUhCdDdDbUl1NUxZcm5tMCtLanFuZm9YamJTd3N4T0NBT3NhTW1RQ1pmN0FhdHhPYVVCM0xuTWo3SldoSlc5M3JNWTdXenlEK09JTUFBMm1xQjJPSnVCR2E2czNUTkVFTUVYUi8wbktWdGg2SUZZL0diQ0YvNUo3bzd6WEY5UmVsT2h5REQxS3dPVzhjWjl4MGxwcWpoQ2hQQ3ZTRjhhVlNaeXJncURqOEtOOU56Y0FybmoyUWhXTXdFdUUwRDFrbEcvR1VzRWRRMU4rT0wrelZrZDBuT1JRKzBsVU8wTkZacXAyeWFSRWtFRUYxQTdJaWxFY05Pb2Y2VGRTUTA5RURzOW1SSFhxWUlqbjVuVkpyVWN3cG1GaGVsYU5Wd2VyaUYzUkdLb1hneER4L0JwNDdYc3NXRVd3VGFwOGNJU1hjamFaTE5Zc2J0VDg5TXAxR2xpMDFkNHM5eVBvbExXUmJ0NjN1b2lSSkRTMmVRZkFiaEVOVVBYUmdRWk5zMHZ5YVd2UkNHcmxHWjNxQUZFN2RCbHdIbjRxdHBLTXVyRnh0RnNoYXh4Vy9hZ2NocjhwVWNzK0JDOEVid09pOUoxa2lGT2l1ei9qMTI5aWZOQUdmNEdjcnRaQUNuQ0ZyZDN3aVZhSmhHaTA2UGdIT29QaVdGTDlGSCttNU1LZDB6QkdUT0QyQWhYK0VkYllDOWJzRmp1bXlmVVRYd3NIbEM4OEx1SG9jcWRGM3dOOXhLd0VmNElLalQzZXIybjZDUkNIVmNFR0pQVExiQ1JEYmhyNkU0cTRTWTVGeEZRUjVUVlR5MzZJYndIVWUrdVpVV29XNzIwRXYraXRvTUZrSVZtaTdic2REcmxpSUNQT25xeTRLTUs0K3JNVFhZays0Y0podXR4VlJsM09rWHQzSVdJMEJDeDNnbXh3L05XdjJUSmh2bFc5dFFIbGRoWVRUTVp3Y0cvRXhkOHhUd3FKVjZGWlkxRGFRY09Edy9MSWdLZUt2R2FuQ0NCMFMrakhuc0xjUEdTL2NKRkFhL1NSSWdHdHZhOUV6WW9uYVFNUWt2dDExeDdCdHNKQWU5NW5nVmpUb3A0RHdTM3dENHZrd2dxOTRmODQ0d09YTFRCekwxM2NIbitwaHNFUkpocVJRdWM5SVlWL3RJdjBBb1JRYVU2ZkovNkE4MUNOa29wdHBrV2R1WXd1U0w0QVAxNEVrSUU3eG5ZS0tubW9EUVI1Q3dUbFFEU2Y2UWg0Q3lTVlMrZENtNmZxQURqdmtNOW5vVFkxT2wwbmpxd1Q5R0phaXdSVUxxY1JYSVkxQjlxRXNlbE9ueFdtRFRtdHJKcU9DSmNaY0ZZRW1IcHlOVGx4ZTB5bGdoeXBvbTZLVnJ3c2Nhd0UwVmlvenlkQWtTdzdIZ1Z3b0dQV2pDV0JBZ2ZqZ3Q0bGJuL3lVVUVsWDlVdHd1Mk10aU9QZVdpaHRvNWlPRDJ0VGl3THNBN2ZkZUNNYXdjY1lGZmg1ZXpTUzRpeUdXWCszOU0vY0VWNGhITTU1OFpVenBLN2ZoRDlpRVdYeURFWnNkWi9VeW05bTFseHk4M0VWVGwyRDBXZkhoMUVNR1gwM0tZOGx6YlZ3VWx2SEEzK1hnUkFNTEJ0VXpkODB5aW5KNmJDQWdsRlVMKzhaV0NCLzgrdWpLNEtRWGdGRkJIM05NcUJQeFQ3SzBuYlRLaEdtSWhJc2pMaXFnT2xIb0FLb1dTVkZ4TXVhQjIvamlVcUJmNUdKSFlKWnFZcFYzU2ZOWUlFUkN3QkIxTVBRQ1ZEN2dYY0J6c0tDUFZIdWxKRmE1dW5PejdzSnJOL3dyOC9xK0FhMWw5RGtWdUhOei91TzdreDlpRmlhREk4QlVMQnFJcVBLb1VwN0dNbGR6NWgrd1E5VU11LzIzYy81emNBNDJFRmJLdkhnL2Z6cnp3K0NpUno3NTJzdzd2LzY2MFNZazdBMzFFd0ZSbWUvcXVtY2Fpa3JKdFlSRjJIcDNndXo2NytGMWowaEdpUzlYd0NGZ1J6MlkyaUlieDRGeW0rZVN1RkJFUTJFQ2JmRURNNDdiNHRUM3o3Q3JoaE5uNlA4dDlWM2pWVUZwSmdieWNxQ0c1YkU5TFpCUC9nWUZ5dXVkNTlFU0lzdno4YjF2Z3JLYXd3eFhobTlqSXNhbWoyUUNURVNINGFZbnZlckFqeEV2WjBDbFlNWEl6RWU1UFpSZVhCL1BTRHBwQ29vbUpFQnVRUm9yTlFoaDA0aWdKRnNrQU1YVzNTeXNZcHFxd1NuemJjQmtqSzdIS3FTTkxDcnY4MTR4c2g2dy9SSjJJQ05Hc2hCc3Flc2ZWaVNnamRiejBaS2RMdDJjb21XbjZhRkpUdmFKRWNIaDRDSUZkSHNLcVNWT2g2Y1JFZ05saFYzako5ZFRPcXhYQ1Aza2NDWllRWWcrNjZvbFFSbkludHNrY3hTb3ZmNDRPM3JoWGJoUHVlOHpnOGZYRVJKQXp4UHo4SzIwOFlpc0x6RVROVDRUQmhoTUpVVTBTbnRLbzNWTDR1NkxDblpSdnlFZm1UcmYzT2xiOXlkRjVqdUVrUnkxRWtHU0lkT2pKblZnVEhvZUJQNkF3R1ZBK3NvTDBDOVJ4S3ZWZHNRcXVKSXduSUlTTDFXY1czTzE1M2pQWWZQNnlTMUlpUkdRSXpyVEFpYlVBOXduU0FJWEpVT3c0c2d6S1htZ3VKYWlsSEFKa2tBRnZid2tFeExZNTNEK3dDaDFhclVUQVcwcVVVcUYyWW0xazRNRi9kN3NMenk1RGh0bSttV1ZjM3ZwNndXT2x2aWU2RU10ODc0RmlOQ3Ayb0Y2bzdFNkV2U1lvVm53UnJoNm5XV29sRWRRQVlsSEx6NmlkV0NOdTczVER0eFFsZ3FsYmFKZ2RQMVQyVzVTMFRXRlNLM24xYlZXT08wWVhvMDNCYTBVRWhOTG5iOWo5UW5oUnQrdnZWY1NCSmgzSFVjZ1luUWYzVGZJZHE3eitLNHA4ZzlvclZkMDhaajErYTFVa01FWUVTWVptMWk0OERzdjFHZDF1LzBWNW5NalZITnRpcURENU44ajY4N3duWVhoaHVxbktNY1pWQzVNY3F5U0JVU0pJd3hFM0p6U0g4R0hsbE9OblZLNUgvd2huU0JYYVRQcitOK1o3YnludTlsREZZN3VaemEvZXUyb1NHQ2VDcXA2eXFkZUNYb2pndzNtY2FwSVN3cVZKUlVwVGFubHZJTlJyMDk1VjNkNmVUVENlMi9ER21vSUV4b21BUUpsMmx3ZGZKM2RhTTNoRUtYeU1JWU0va2NTOHlpdlMyY1hvbW9GaU5CNXVPTUovRit3OVRvQU4vcmNZamZEemRuaUhQNklpUVNWRVFPQ3hxaXVDS3l4d1hPMVFqYjF6eGR3bERiUUwxazFUZjZkQjdIQzhrRkdTb0RJaUlMQm5nWnB4cUFkZU42NmVHU1A3TWtEUm9uOXNpY3NpRlQ3cWJ6U0ZuWTduOTZsSlVDa1JFQ3A5OTJvTERLQVZMZy9mbDRjSW1JSXhONWN2ZlJ2REtkWGpvZEx6KzRwSjhGNXFBcEFRQVlFeHRjT0RiMXBnQ0oxNHpPRzlOK1lodzdnMFl0ZGRJMjl6VldlZnB1cEliYmNoSENJbEFpTHFjOVk0QVlDTmd4TENjVUFOSHB6eE1VRVBrOGxrSGc5WC8reGgwUS9lVTRSM1dQQk5KckNOZW1Oc0RSRVFzbzZCKzUrM3dEQWE0VjlXU21JK3ZtTElsUGJnaC9UZllnU2JLWTlJclNUQ0FOZ2VsdFcwVjFzS1BsbWFDRkpDSmRoc3dUZVl3RjBkTDNnMXRjTmJTd1JKQmg3TXdVQnR0Y0JZT3JBOXFlZy9DeGdxcWk2bVRab1E0cmdldzBacVo3ZWVDQWh3bnRlenhnalpobmZNelMwOExSOFJwSEpnZytYYy9iUHdIb25hMFd0REJJUXFMTCtjM25pVFkxeVRRdGRkczN2RCt5SnZRMTFXYWdldkpSRVFVaStKQnlldytvY0pHMXdldUhMR3h5ek8rZFY3eXp3ZTdoK29Fdlp1dGVBZHpVQUVQNEdmYjZCMjdsb1RZUUFsR2RMVWMvVG1RZ1FYWU9NT2F2OXBEQkVRcWt6eVFuTGp0c2hEZ0ovYmRGUGNLQ0tvRjl4RnlmdzE5Vml4Q2JnUzd6K29mYVhSUkJoQVNiTTN0N2FobnRpTXF3RFduVkQ3eDlRUVlaRVF3ajlhYmNhb25XQ3E0WGpoK1p3Zit3SnFmNWhhSWlCVWZjUGFLZXJSWUE5NGNJdkR3OE9vZmFBbFFneHpRcnhRaVlyVi9haTFEdGlFWVJBZWIxUGJ2U1ZDQ3FRZVo3T3J1QWdSUG93TnZZOEp3ejJvN2R3U0lTZkFjRytJZW41Uk8wOGpzSlZ4L3pSVTFxTzJhMHVFMG9UQS9KMnliWldtSGRobE16eWVRbHVvSllJaE9DTGNWKzBoU21tRlRoazI0Z0VFNWtCUjI2MGxnaUhJVFRVUFBnN0cvckVGRG1jVGRzaVZrd2Z2d0VJcGFqdTFSS2dJV0QwVzlSWUlMMkxUdlVyY0F4UERwMUhUaU5vbXRtQnFIendGa1gzSW90T21oZ2tXSjJJVGhvbXU1eCtKUjZEVTQ5OCtGajR5ZlVPRVBjeWNaTlVyUHhzRE9QNFBzQitjSy95M3RzN2ZQb1VlN0UvV0ZjRkJlSGFPalVKWXZVcElOMkREUUJUTndyQ0hlaXpicDBHUDY3cTdLYzJpUDJPWTlNZURXNWdkb2RSbTJPdGNCVDlQZGIyZzB6cCsrMVQrWUxGOXQ5dmJ6eEhoS25VYTlRVjFrWGM3MDZwTTV6K2dXbkZkQ0FROHhlWGhHZ2h6RG5kNnZSZFRqMEg3dE0vWVIrcTh1c0dlc2tTVDl3OTF2WEJXQWtzMzVWNGtEbitsK3QrUGt1b1hzcVN6L3p3TTBhaS9ZNXFlL3dmaFNwMGVHdnoyYkFBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KCTwvZGVmcz4KCTxzdHlsZT4KCTwvc3R5bGU+Cgk8dXNlIGlkPSJCYWNrZ3JvdW5kIiBocmVmPSIjaW1nMSIgeD0iNiIgeT0iMCIvPgo8L3N2Zz4=";

                // 给刚才添加的img添加事件
                for(let imgObj of $("#matchItems").find('img')) {
                    // 加载完成事件，去除加载背景
                    imgObj.onload = function(e) {
                        $(e.target).css({
                            "background": "#fff"
                        })
                    }
                    // 加载失败，设置自定义失败的本地图片
                    imgObj.onerror = function(e,a,b,c) {
                        let currentErrorImg = $(e.target);
                        let standbyFaviconAttr = "standbyFavicon";
                        let standbyFavicon = currentErrorImg.attr(standbyFaviconAttr);
                        if(standbyFavicon != null) {
                            // 如果备用favicon使用
                            currentErrorImg.attr("src",standbyFavicon)
                            currentErrorImg.removeAttr(standbyFaviconAttr)
                        }else {
                            // 如果备用favicon直接使用加载失败图标base64
                            currentErrorImg.attr("src",loadErrorFlagIcon)
                        }
                    }
                }

                // 隐藏文本显示视图
                textShow.css({
                    "display":"none"
                })
                // 让搜索结果显示
                let matchResultDisplay = "block";
                if(searchResultData.length < 1) matchResultDisplay="none";
                matchResult.css({
                    "display":matchResultDisplay,
                    "overflow":"hidden"
                })
                // 将搜索的数据放入全局容器中
                registry.searchData.searchData = searchData;
                // 指令归位（置零）
                registry.searchData.pos = 0;
            }


            // 简述内容转markdown前
            function sketchResourceToHtmlBefore(txtStr = "") {
                // 1、“换行”转无意义中间值
                txtStr = txtStr.replace(/<\s*br\s*\/\s*>/gm,"?br?"); // 单行简述下的换行，注意要在"<",">"转意前就要做了，注意顺序
                // 2、特殊字符 转无意义中间值
                txtStr = txtStr.replace(/</gm,"?lt?").replace(/>/gm,"?gt?").replace(/"/gm,"?quot?").replace(/'/gm,"?#39?");
                return txtStr;
            }
            //简述内容转markdown
            function sketchResourceToHtmlAfter(txtStr = "") {
                // 1、链接变超链接,这里必需要使用“先匹配再替换”
                const regexParam = /[^("?>]\s*(https?:\/\/[^\s()（）\[\]<>"`]+)/gm;
                let m;
                let textStrClone = txtStr;
                while ((m = regexParam.exec(textStrClone)) !== null) {
                    // 这对于避免零宽度匹配的无限循环是必要的
                    if (m.index === regexParam.lastIndex) {
                        regexParam.lastIndex++;
                    }
                    let match = m[0];
                    // 为简讯内容的url添加可链接
                    const regex = /(https?:\/\/[^\s()（）\[\] `]+)/gm;
                    const subst = `<a href="$1" target="_blank">$1</a>`;
                    // 被替换的值将包含在结果变量中
                    let aTab = match.replace(regex, subst);
                    txtStr = txtStr.replace(match, aTab);
                }
                // 2、无意义中间值 转有意符
                function revert(text) {
                    let obj = {
                        "?lt?":"&lt;",
                        "?gt?":"&gt;",
                        "?quot?":"&quot;",
                        "?#39?":"&#39;",
                        "?br?":"<br />"
                    }
                    for(let key in obj) {
                        text = text.toReplaceAll(key,obj[key]);
                    }
                    return text;
                }
                txtStr = revert(txtStr);
                return txtStr;
            }
            $("#matchItems").on("click","li > a",function(e) {
                let targetObj = e.target;
                // 如果当前标签是svg标签，那委托给父节点
                while ( targetObj != null && !/^(a|A)$/.test(targetObj.tagName)) {
                    targetObj = targetObj.parentNode
                }
                // 取消默认事件，全部都是手动操作
                e.preventDefault();
                // 取消冒泡
                window.event? window.event.cancelBubble = true : e.stopPropagation();
                // 设置为阅读模式
                // $("#my_search_input").val(":read");
                // 获取当前结果在搜索数组中的索引
                let dataIndex = parseInt($(targetObj).attr("index"));
                let dataVersion = parseInt($(targetObj).attr("version"));
                let currentSearchDataVersion = registry.searchData.version;
                let itemData = registry.searchData.getData()[dataIndex];
                if(itemData == null || dataVersion != currentSearchDataVersion ) {
                    console.log("后备方案（没有找到了？"+(itemData == null)+",数据版本改变了？"+(dataVersion != currentSearchDataVersion)+")")
                    // 索引出现问题-启动后备方案-全局搜索
                    let title = $(targetObj).parent().find(".item_title").text();
                    let desc = $(targetObj).parent().find(".item_desc").text();
                    // 从全局数据中根据title与desc进行匹配
                    itemData = registry.searchData.findSearchDataItem(title,desc)
                    // 从历史数据中找，根据title与desc进行匹配
                    if(itemData == null) itemData = registry.searchData.findSearchDataItem(title,desc,SelectHistoryRecorder.history)
                }
                // 给选择的item加分，便于后面调整排序 (这里的idFun使用注册表中已经有的，也是我们确认item唯一的函数)
                if(itemData != null) DataWeightScorer.select(itemData,registry.searchData.idFun);
                // 记录选择的item项
                SelectHistoryRecorder.select(itemData,registry.searchData.idFun);
                // === 如果是简述搜索信息，那就取消a标签的默认跳转事件===
                let hasVassal = $(targetObj).attr("vassal") != null;
                // 初始化textView注册表中的对象
                function showTextPage(title,desc,body) {
                   registry.view.textView.show(`<span style='color:red'>标题</span>：${title}<br /><span style='color:red'>描述：</span>${desc}<br /><span style='color:red'>简述内容：</span><br />${sketchResourceToHtmlAfter(converter.makeHtml(sketchResourceToHtmlBefore( body )))} `)
                }
                if(hasVassal) {
                    showTextPage(itemData.title,"主项的相关/附加内容",itemData.vassal);
                    return;
                }else if(itemData.type == "script"){
                    // 是脚本，执行脚本
                    let callBeforeParse = new CallBeforeParse();
                    let jscript = ( itemData.resourceObj == null || itemData.resourceObj.script == null ) ?"function (obj) {alert('- _ - 脚本异常！')}":itemData.resourceObj.script;
                    // 调用里面的函数，传入注册表对象
                    // 打开网址函数
                    function open(url) {
                        let openUrl = url;
                        return {
                           simulator(operate = (click, roll, dimension) => {}) { // 模拟器
                               if(openUrl == null || operate == null || typeof operate != 'function') return;
                               let pageSimulatorScript = operate.toString();
                               addPageSimulatorScript(openUrl,pageSimulatorScript); // 保存模拟操作，模拟脚本将在指定时间内打开指定网址有效
                               window.open(openUrl); // 打开网址
                               return this;
                           }
                        }
                    }
                    let view = {
                        beforeCallback: null,
                        afterCallback: null,
                        mountBefore(handle) {
                            this.beforeCallback = handle;
                            return this;
                        },
                        mountAfter(handle) {
                            this.afterCallback = handle;
                            return this;
                        },
                        mount() {
                            let viewHtml = itemData.resourceObj['view:html'];
                            let viewCss = itemData.resourceObj['view:css'];
                            // 将html挂载到视图中
                            if(this.beforeCallback != null) this.beforeCallback();
                            registry.view.textView.show(viewHtml,viewCss);
                            if(this.afterCallback != null) this.afterCallback();
                        }
                    }
                    // 设置logo为运行图标
                    registry.view.logo.change("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDM5IDM5IiB3aWR0aD0iMzkiIGhlaWdodD0iMzkiPgoJPHRpdGxlPuW+ruS/oeaIquWbvl8yMDIzMDgxODIzMDIxNzwvdGl0bGU+Cgk8ZGVmcz4KCQk8aW1hZ2UgIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMyIgaWQ9ImltZzEiIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmNBQUFBWEFRTUFBQURhNUViakFBQUFBWE5TUjBJQjJja3Nmd0FBQUFOUVRGUkZ4MVJRaGlaMHV3QUFBQXhKUkVGVWVKeGpZS0FkQUFBQVhBQUJZNkd4Z1FBQUFBQkpSVTVFcmtKZ2dnPT0iLz4KCTwvZGVmcz4KCTxzdHlsZT4KCTwvc3R5bGU+Cgk8dXNlIGlkPSJCYWNrZ3JvdW5kIiBocmVmPSIjaW1nMSIgeD0iOCIgeT0iOCIvPgo8L3N2Zz4=")
                    try {
                        Function('obj',`(${jscript})(obj)`)({registry,cache,$,open,view})
                    } catch (error) {
                        setTimeout(()=>{alert("Ծ‸Ծ 你选择的是脚本项，而当前页面安全策略不允许此操作所依赖的函数！这种情况是极少数的，请换个页面试试！")},20)
                    }
                    // logo图标还原
                    setTimeout(()=>{registry.view.logo.reset();},200)
                    return;
                }else if(! isUrl(itemData.resource)) {
                    showTextPage(itemData.title,itemData.desc,itemData.resource)
                    return;
                }
                // 隐藏视图
                registry.view.viewVisibilityController(false)

                const initUrl = itemData.resource;//$(targetObj).attr("href"); // 不作改变的URL
                let url = initUrl; // 进行修改，形成要跳转的真正url
                let temNum = url.matchFetch(/\[\[[^\[\]]*\]\]/gm, function (matchStr,index) { // temNum是url中有几个 "[[...]]", 得到后，就已经得到解析了
                    let templateStr = matchStr;
                    // 使用全局的keyword, 构造出真正的keyword
                    let keyword = registry.searchData.keyword.split(":").reverse();
                    keyword.pop();
                    keyword = keyword.reverse().join(":").trim();

                    let parseAfterStr = matchStr.replace(/{keyword}/g,keyword).replace(/\[\[+|\]\]+/g,"");
                    url = url.replace(templateStr,parseAfterStr);
                });
                // 如果搜索的真正keyword为空字符串，则去掉模板跳转
                if( registry.searchData.keyword.split(registry.searchData.searchBoundary).length < 2
                   || registry.searchData.keyword.split(registry.searchData.searchBoundary)[1].trim() == "" ) {
                    url = registry.searchData.clearUrlSearchTemplate(initUrl);
                }
                // 跳转（url如果有模板，可能已经去掉模板，取决于是“搜索模式”）
                window.open(url);

            })
            //registry.searchData.searchHandle = handler;
            const refresh = debounce(handler, 150)
            // 第一次触发 scroll 执行一次 fn，后续只有在停止滑动 1 秒后才执行函数 fn
            searchBox.on('input', refresh)

            // 初始化后将isInitializedView变量设置为true
            isInitializedView = true;
        }
        let hideView = function () {
            // 隐藏视图
            // 如果视图还没有初始化，直接退出
            if (!isInitializedView) return;
            // 如果正在查看查看“简讯”，先退出简讯
            if($("#text_show").css("display")=="block") {
                // 让简讯隐藏
                $("#text_show").css({"display":"none"})
                // 让搜索结果显示
                $("#matchResult").css({
                    "display":"block",
                    "overflow": "hidden",
                })
                return;
            }
            // 让视图隐藏
            viewDocument.style.display = "none";
            // 将输入框内容置空,在置空前将值备份，好让未好得及的操作它
            searchInputDocument.val("")
            // 将之前搜索结果置空
            matchItems.html("")
            // 隐藏文本显示视图
            textShow.css({
                "display":"none"
            })
            // 让搜索结果隐藏
            matchResult.css({
                "display":"none"
            })
            // 视图隐藏-清理旧数据
            registry.searchData.clearData();
            // 触发视图隐藏事件
            registry.view.viewHideEventAfterListener.forEach(fun=>fun());
        }
        let showView = function () {
            // 让视图可见
            viewDocument.style.display = "block";
            //聚焦
            searchInputDocument.focus()
            // 当输入框失去焦点时，隐藏视图
            searchInputDocument.blur(function() {
                setTimeout(function(){
                    if(registry.searchData.searchEven.isSearching) return;
                    // 判断输入框的内容是不是":debug"或是否正处于阅读模式,如果是，不隐藏
                    if(isInstructions("debug") || isInstructions("read")) return;
                    // 当前视图是否在展示数据，如搜索结果，简述内容？如果在展示不隐藏
                    let isNotExhibition = (($("#matchResult").css("display") == "none" || $("#matchItems > li").length == 0 ) && ($("#text_show").css("display") == "none" || $("#text_show").text().trim() == "") );
                    if(!isNotExhibition || registry.view.menuActive ) return;
                    registry.view.viewVisibilityController(false);
                },registry.view.delayedHideTime)
            });
        }

        // 返回给外界控制视图显示与隐藏
        return function (isSetViewVisibility) {
            if (isSetViewVisibility) {
                // 让视图可见 >>>
                // 如果还没初始化先初始化   // 初始化数据 initData();
                if (!isInitializedView) {
                    // 初始化视图
                    initView();
                    // 初始化数据
                    // initData();
                }
                // 让视图可见
                showView();
            } else {
                // 隐藏视图 >>>
                if (isInitializedView) hideView();
            }
        }
    })();
    // 触发策略——快捷键
    let useKeyTrigger = function (viewVisibilityController) {
        let isFirstShow = true;
        // 将视图与触发策略绑定
        function showFun() {
            // 让视图可见
            viewVisibilityController(true);
            // 触发视图首次显示事件
            if(isFirstShow) {
                for(let e of registry.view.viewFirstShowEventListener) e();
                isFirstShow = false;
            }
        }
        window.addEventListener('message', event => {
            // console.log("父容器接收到了信息~~")
            if(event.data == MY_SEARCH_SCRIPT_VIEW_SHOW_EVENT) {
               showFun() // 接收显示呼出搜索框
            }
        });
        triggerAndEvent("ctrl+alt+s", showFun)
        triggerAndEvent("Escape", function () {
            // 如果视图还没有初始化，就跳过
            if(registry.view.viewDocument == null ) return;
            // 让视图不可见
            viewVisibilityController(false);
        })
    }

    // 触发策略组
    let trigger_group = [useKeyTrigger];
    // 初始化入选的触发策略
    (function () {
        for (let trigger of trigger_group) {
            trigger(registry.view.viewVisibilityController);
        }
    })();

    // 打开视图进行配置
    // 显示配置视图
    // 是否显示进度 - 进度控制
    function clearCache() {
       cache.remove(registry.searchData.SEARCH_DATA_KEY);
       // 如果处于debug模式，也清理其它的
       if(isInstructions("debug")) {
          cache.remove(registry.searchData.CACHE_FAVICON_SOURCE_KEY);
       }
       // 触发缓存被清理事件
       for(let fun of registry.searchData.dataCacheRemoveEventListener) fun();
    }
    GM_registerMenuCommand("订阅管理",function() {
        showConfigView();
    });
    GM_registerMenuCommand("清理缓存",function() {
        clearCache();
    });

    function giveFlagsStatus(flagsOfData,userUnfollowList) {
        // 赋予flags一个是否选中状态
        // 将 userUnfollowList 转为以key为userUnfollowList的item.name值是Item的方便检索
        let userUnfollowMap = userUnfollowList.reduce(function(result, item) {
            result[item] = '';
            return result;
        }, {});
        flagsOfData.forEach(item=>{
            if(userUnfollowMap[item.name] != null ) {
                // 默认都是选中状态，如果item在userUnfollowList上将此flag状态改为未选中状态
                item.status = 0;
            }
        })
        return flagsOfData;
    }
    function showConfigView() {
        // 剃除已转关注的，添加新关注的
        function reshapeUnfollowList(userUnfollowList,userFollowList,newUserUnfollowList) {
            // 剃除已转关注的
            userUnfollowList = userUnfollowList.filter(item => !userFollowList.includes(item));
            // 添加新关注的
            userUnfollowList = userUnfollowList.concat(newUserUnfollowList.filter(item => !userUnfollowList.includes(item)));
            return userUnfollowList;
        }

        if($("#subscribe_save")[0] != null) return;
        // 显示视图
        // 用户维护的取消关注标签列表
        let userUnfollowList = cache.get(registry.searchData.USER_UNFOLLOW_LIST_CACHE_KEY)?? registry.searchData.USER_DEFAULT_UNFOLLOW;
        // 当前数据所有的标签
        let flagsOfData = cache.get(registry.searchData.DATA_ITEM_FLAGS_CACHE_KEY);
        // 使用 userUnfollowList 给 flagsOfData中的标签一个是否选中状态，在userUnfollowList中不选中，不在选中，添加一个属性到flagsOfData用boolean表达
        flagsOfData = giveFlagsStatus(flagsOfData,userUnfollowList);
        // 生成多选框html
        let flagsCheckboxHtml = "";
        flagsOfData.forEach(item=>{
            flagsCheckboxHtml += `
               <div>
                   <input type="checkbox" id="${item.name}" name="_flagsCheckBox" value="${item.name}" ${item.status==1?'checked':''} >
                   <label for="${item.name}">${item.name} （${item.count}）</label>
               </div>
            `
        })

        DivPage(`
         #my-search-view {
            width: 500px;
            max-height: 100%;
            max-width: 100%;
            background: pink;
            position: fixed;
            right: 0px;
            top: 0px;
            z-index: 2147383656;
            padding: 20px;
            box-sizing: border-box;
            border-radius: 14px;
            text-align: left;
        }

        #topController_close {
            font-sise: 15px;
        }
        .control_title {
            margin: 10px 0px 5px;
            font-size: 17px;
            color: black;
        }
        ._topController {
            width: 100%;
            position: absolute;
            top: 0px;
            right: 0px;
            text-align: right;
            padding: 15px 15px 0px;
            box-sizing: border-box;
        }

        ._topController>* {
            cursor: pointer;
        }

        .flagsCheckBoxDiv > div {
            width: 32%;
            display: inline-block;
            margin: 0px;
            padding: 0px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        #all_subscribe {
            width: 100%;
            height: 150px;
            box-sizing: border-box;
            border: 4px solid #f5f5f5;
        }

        #subscribe_save {
            margin-top: 20px;
            border: none;
            border-radius: 3px;
            padding: 4px 17px;
            cursor: pointer;
            box-sizing: border-box;
            background: #6161bb;
            color: #fff;
        }
        .view-base-button {
           background: #fff;
           border: none;
           font-size: 15px;
           padding: 1px 10px;
           cursor: pointer;
           margin: 2px;
           color: black;
        }
        #my-search-view span {
           color: #3CB371;
        }
        #my-search-view label {
          font-size: 13px;
        }

    `,`
        <div id="my-search-view">
            <div class="_topController">
              <span id="topController_close">X</span>
            </div>
            <div>
               <p class="control_title">订阅总览：</p>
               <textarea id="all_subscribe" ></textarea>
            </div>
            <div>
               <p class="control_title">公共仓库：</p>
               <div>
                  <input type="checkbox" id="useCommonRepo" >
                  <label for="useCommonRepo">使用已验证的TisHub公共仓库订阅</label>
               </div>
               <button id="pushTis" class="view-base-button">共享我的订阅到TisHub(<span> - </span>)</button>
               <button id="openTisHub" class="view-base-button">打开TisHub</button>
               <button id="clearToken" class="view-base-button" style="display:none;">清理Token (存在)</button>
            </div>
            <div>
               <p class="control_title">关注标签：</p>
               <div class="flagsCheckBoxDiv">
                 ${flagsCheckboxHtml}
               </div>
            </div>
            <button id="subscribe_save">保存并应用</button>
        </div>

    `,function (selector,remove) {
            let subscribe_text = selector("#all_subscribe");
            let subscribe_save = selector("#subscribe_save");
            let topController_close = selector("#topController_close");
            let openTisHub = selector("#openTisHub");
            let tisHubLink = "https://github.com/My-Search/TisHub/issues";
            let pushTis = selector("#pushTis");
            let commitableTisList = null;
            let clearToken = selector("#clearToken");
            let useCommonRepo = selector("#useCommonRepo")

            // 刷新视图状态
            async function refreshViewState() {
               // 更新token状态
               $(clearToken).css({"display":GithubAPI.getToken() == null?"none":"inline-block"})
               // 更新是否使用TisHub状态
               let isUseTisHubTis = cache.get(registry.searchData.USE_TISHUB_STATE_CACHE_KEY)??false;
               useCommonRepo.checked = isUseTisHubTis;
               // 更新可提交数
               let tisList = await TisHub.getTisHubAllTis();
               if(tisList != null && tisList.length != 0) {
                  commitableTisList = TisHub.tisFilter(subscribe_text.value,tisList)??[]
                  $(pushTis).find("span").text(commitableTisList.length);
               }
            }
            // 初始化subscribe_text的值
            subscribe_text.value = getSubscribe();
            // 初始化其它状态,通过调用refreshViewState()
            refreshViewState();
            // 当SubscribeText多行输入框内容发生改变时，刷新更新可提交数,通过调用refreshViewState()
            let refreshSubscribeText = debounce(()=>{refreshViewState() }, 300)
            subscribe_text.oninput = ()=>{refreshSubscribeText();}
            // 保存
            function configViewClose() {
                remove();
            }
            // 点击保存时
            subscribe_save.onclick=function() {
                // 保存用户选择的关注标签（维护数据）
                // 获取所有多选框元素
                var checkboxes = selector(".flagsCheckBoxDiv input",true);
                // 初始化已选中和未选中的数组
                var userFollowList = [];
                var newUserUnfollowList = [];
                // 遍历多选框元素，将选中的元素的value值添加到checkedValues数组中，
                // 未选中的元素的value值添加到uncheckedValues数组中
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        userFollowList.push(checkboxes[i].value);
                    } else {
                        newUserUnfollowList.push(checkboxes[i].value);
                    }
                }
                // 剃除已转关注的，添加新关注的
                newUserUnfollowList = reshapeUnfollowList( userUnfollowList,userFollowList,newUserUnfollowList);
                cache.set(registry.searchData.USER_UNFOLLOW_LIST_CACHE_KEY,newUserUnfollowList);
                cache.set(registry.searchData.USE_TISHUB_STATE_CACHE_KEY,useCommonRepo.checked )

                // 保存到对象
                let allSubscribe = subscribe_text.value;
                let validCount = editSubscribe(allSubscribe);
                // 清除视图
                configViewClose();
                // 清理缓存，让数据重新加载
                clearCache();
                alert("保存配置成功！有效订阅数："+validCount);

            }
            // 打开TitHub
            openTisHub.onclick = function() {
               window.open(tisHubLink, "_blank");
            }
            // push到TisHub公共仓库中
            pushTis.onclick =async function () {
                if(! confirm("是否确认要提交到TisHub公共仓库？")) return;
                if(commitableTisList == null || commitableTisList.length == 0) {
                    alert("经过与TisHub中订阅的比较，本地没有可提交的订阅！")
                    return;
                }
                if(GithubAPI.getToken(true) == null) {
                   alert("获取token失败，无法继续！");
                   return;
                }
                // 组装提交的body
                let body = (()=>{
                   let _body = "";
                   for(let tis of commitableTisList) _body+=tis;
                   return _body;
                })();
                if ( body == "") return;
                let userInfo = await GithubAPI.setToken().getUserInfo();
                if(userInfo == null) {
                   alert("提交异常，请检查网络或提交的Token信息！")
                   return;
                }
                GithubAPI.commitIssues({
                    "title": userInfo.name+"的订阅",
                    "body": body
                }).then(response=>{
                    refreshViewState();
                    alert("提交成功！感谢您的参与，脚本因你而更加精彩。")
                }).catch(error=>alert("提交失败~"))
            }
            // 清理token
            clearToken.onclick = function(){
                GithubAPI.clearToken(); // 清理token
                refreshViewState(); // 刷新视图变量
            };
            // 关闭
            $(topController_close).click(configViewClose)

        })
    }

})();
