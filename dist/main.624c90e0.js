// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
// const $siteList = $('.siteList')
// const $lastLi = $siteList.find('li.last')
// const x = localStorage.getItem('x')
// const xObject = JSON.parse(x)
// const hasMap = xObject || [
//     {logo: 'A', url: 'https://www.acfun.cn'},
//     {logo: 'B',  url: 'https://www.bilibili.com'}  
// ]
// const simplifyUrl = (url)=>{
//     return url.replace('https://', '')
//         .replace('http://', '')
//         .replace('www.', '')
//         // replace 只是替换url，不能直接return
//         // 所以return simplifyUrl
//         .replace(/\/.*/, '')
//         // 反斜杠是转译， 替换 / 开头的内容，为空
// }
// const render = () =>{
//     $siteList.find('li:not(.last)').remove()
//     hasMap.forEach((node,index) => {
//         const $li = $(`<li>
//             <div class="site">
//                 <div class="logo">${node.logo}</div>
//                 <div class="link">${simplifyUrl(node.url)}</div>
//                 <div class="close">
//                     <svg class="icon">
//                         <use xlink:href="#icon-close"></use>
//                     </svg>
//                 </div>
//             </div>
//         </li>`).insertBefore($lastLi) 
//         // 添加icon-close后，点击时，也在a标签里面，所以页面会跳转，
//         // 解决办法是：1、直接添加时，监听close
//         // 阻止冒泡，这里不是指冒泡事件
//         $li.on('click', ()=>{
//             window.open(node.url)
//         })
//         $li.on('click','.close',(e)=>{
//             e.stopPropagation()
//             // stopPropagation 停止传递
//             hasMap.splice(index, 1)
//             // 从当前节点删掉
//             render()
//             // 重新渲染
//         })
//     })
// }
// render()
// $('.addButton').on('click', ()=>{
//     let url = window.prompt('请问你要添加的网址是啥？')
//     if(url.indexOf('http')!==0){
//         url = 'https://' + url
//     }
//     console.log(url)
//     hasMap.push({
//         logo: simplifyUrl(url)[0].toUpperCase(),
//         // toUpperCase 小写转换为大写
//         // 还可以用css控制，添加text-transform: upperCase; 即可
//         url: url
//     })
//     render()
// })
// window.onbeforeunload = () =>{
//     const string = JSON.stringify(hasMap)
//     localStorage.setItem('x',string)
// }
// $(document).on('keypress', (e) => {
//     const key = e.key
//     // 可以简写为 const {key} = e
//     for(let i =0;i<hasMap.length;i++){
//         if (hasMap[i].logo.toLowerCase() === key){
//             window.open(hasMap[i].url)
//         }
//     }
// })
var $siteList = $('.siteList');
var $lastLi = $siteList.find('li.last');
var x = localStorage.getItem('x');
var xObject = JSON.parse(x);
var hashMap = xObject || [{
  logo: 'A',
  url: 'https://www.acfun.cn'
}, {
  logo: 'B',
  url: 'https://www.bilibili.com'
}];

var simplifyUrl = function simplifyUrl(url) {
  return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, ''); // 删除 / 开头的内容
};

var render = function render() {
  $siteList.find('li:not(.last)').remove();
  hashMap.forEach(function (node, index) {
    var $li = $("<li>\n      <div class=\"site\">\n        <div class=\"logo\">".concat(node.logo, "</div>\n        <div class=\"link\">").concat(simplifyUrl(node.url), "</div>\n        <div class=\"close\">\n          <svg class=\"icon\">\n            <use xlink:href=\"#icon-close\"></use>\n          </svg>\n        </div>\n      </div>\n    </li>")).insertBefore($lastLi);
    $li.on('click', function () {
      window.open(node.url);
    });
    $li.on('click', '.close', function (e) {
      e.stopPropagation(); // 阻止冒泡

      hashMap.splice(index, 1);
      render();
    });
  });
};

render();
$('.addButton').on('click', function () {
  var url = window.prompt('请问你要添加的网址是啥？');

  if (url.indexOf('http') !== 0) {
    url = 'https://' + url;
  }

  console.log(url);
  hashMap.push({
    logo: simplifyUrl(url)[0].toUpperCase(),
    url: url
  });
  render();
});

window.onbeforeunload = function () {
  var string = JSON.stringify(hashMap);
  localStorage.setItem('x', string);
};

$(document).on('keypress', function (e) {
  var key = e.key;

  for (var i = 0; i < hashMap.length; i++) {
    if (hashMap[i].logo.toLowerCase() === key) {
      window.open(hashMap[i].url);
    }
  }
});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.624c90e0.js.map