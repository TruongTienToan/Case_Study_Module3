//<![CDATA[
      //CSS Ready
      function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
      loadCSS("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,100italic,100,400italic,500,500italic,700,700italic,900&subset=latin,vietnamese,latin-ext");
      //]]>

      //<![CDATA[
        !function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=ie.type(e);return"function"===n||ie.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(ie.isFunction(t))return ie.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return ie.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(fe.test(t))return ie.filter(t,e,n);t=ie.filter(t,e)}return ie.grep(e,function(e){return ie.inArray(e,t)>=0!==n})}function i(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function o(e){var t=xe[e]={};return ie.each(e.match(be)||[],function(e,n){t[n]=!0}),t}function a(){he.addEventListener?(he.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1)):(he.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(he.addEventListener||"load"===event.type||"complete"===he.readyState)&&(a(),ie.ready())}function l(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(Ee,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Ne.test(n)?ie.parseJSON(n):n}catch(i){}ie.data(e,t,n)}else n=void 0}return n}function u(e){var t;for(t in e)if(("data"!==t||!ie.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,r){if(ie.acceptData(e)){var i,o,a=ie.expando,s=e.nodeType,l=s?ie.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof t)return u||(u=s?e[a]=J.pop()||ie.guid++:a),l[u]||(l[u]=s?{}:{toJSON:ie.noop}),("object"==typeof t||"function"==typeof t)&&(r?l[u]=ie.extend(l[u],t):l[u].data=ie.extend(l[u].data,t)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[ie.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[ie.camelCase(t)])):i=o,i}}function d(e,t,n){if(ie.acceptData(e)){var r,i,o=e.nodeType,a=o?ie.cache:e,s=o?e[ie.expando]:ie.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){ie.isArray(t)?t=t.concat(ie.map(t,ie.camelCase)):t in r?t=[t]:(t=ie.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!u(r):!ie.isEmptyObject(r))return}(n||(delete a[s].data,u(a[s])))&&(o?ie.cleanData([e],!0):ne.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function f(){return!0}function p(){return!1}function h(){try{return he.activeElement}catch(e){}}function m(e){var t=Fe.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function g(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==Ce?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==Ce?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||ie.nodeName(r,t)?o.push(r):ie.merge(o,g(r,t));return void 0===t||t&&ie.nodeName(e,t)?ie.merge([e],o):o}function v(e){je.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t){return ie.nodeName(e,"table")&&ie.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function b(e){return e.type=(null!==ie.find.attr(e,"type"))+"/"+e.type,e}function x(e){var t=Ve.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function w(e,t){for(var n,r=0;null!=(n=e[r]);r++)ie._data(n,"globalEval",!t||ie._data(t[r],"globalEval"))}function T(e,t){if(1===t.nodeType&&ie.hasData(e)){var n,r,i,o=ie._data(e),a=ie._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)ie.event.add(t,n,s[n][r])}a.data&&(a.data=ie.extend({},a.data))}}function C(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!ne.noCloneEvent&&t[ie.expando]){i=ie._data(t);for(r in i.events)ie.removeEvent(t,r,i.handle);t.removeAttribute(ie.expando)}"script"===n&&t.text!==e.text?(b(t).text=e.text,x(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),ne.html5Clone&&e.innerHTML&&!ie.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&je.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function N(t,n){var r,i=ie(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:ie.css(i[0],"display");return i.detach(),o}function E(e){var t=he,n=Ze[e];return n||(n=N(e,t),"none"!==n&&n||(Ke=(Ke||ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Ke[0].contentWindow||Ke[0].contentDocument).document,t.write(),t.close(),n=N(e,t),Ke.detach()),Ze[e]=n),n}function k(e,t){return{get:function(){var n=e();return null!=n?n?void delete this.get:(this.get=t).apply(this,arguments):void 0}}}function S(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=ft.length;i--;)if(t=ft[i]+n,t in e)return t;return r}function A(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=ie._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Ae(r)&&(o[a]=ie._data(r,"olddisplay",E(r.nodeName)))):(i=Ae(r),(n&&"none"!==n||!i)&&ie._data(r,"olddisplay",i?n:ie.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function D(e,t,n){var r=lt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function j(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=ie.css(e,n+Se[o],!0,i)),r?("content"===n&&(a-=ie.css(e,"padding"+Se[o],!0,i)),"margin"!==n&&(a-=ie.css(e,"border"+Se[o]+"Width",!0,i))):(a+=ie.css(e,"padding"+Se[o],!0,i),"padding"!==n&&(a+=ie.css(e,"border"+Se[o]+"Width",!0,i)));return a}function L(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=et(e),a=ne.boxSizing&&"border-box"===ie.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=tt(e,t,o),(0>i||null==i)&&(i=e.style[t]),rt.test(i))return i;r=a&&(ne.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+j(e,t,n||(a?"border":"content"),r,o)+"px"}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function q(){return setTimeout(function(){pt=void 0}),pt=ie.now()}function _(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Se[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function M(e,t,n){for(var r,i=(bt[t]||[]).concat(bt["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function F(e,t,n){var r,i,o,a,s,l,u,c,d=this,f={},p=e.style,h=e.nodeType&&Ae(e),m=ie._data(e,"fxshow");n.queue||(s=ie._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,ie.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=ie.css(e,"display"),c="none"===u?ie._data(e,"olddisplay")||E(e.nodeName):u,"inline"===c&&"none"===ie.css(e,"float")&&(ne.inlineBlockNeedsLayout&&"inline"!==E(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",ne.shrinkWrapBlocks()||d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],mt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;h=!0}f[r]=m&&m[r]||ie.style(e,r)}else u=void 0;if(ie.isEmptyObject(f))"inline"===("none"===u?E(e.nodeName):u)&&(p.display=u);else{m?"hidden"in m&&(h=m.hidden):m=ie._data(e,"fxshow",{}),o&&(m.hidden=!h),h?ie(e).show():d.done(function(){ie(e).hide()}),d.done(function(){var t;ie._removeData(e,"fxshow");for(t in f)ie.style(e,t,f[t])});for(r in f)a=M(h?m[r]:0,r,d),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function O(e,t){var n,r,i,o,a;for(n in e)if(r=ie.camelCase(n),i=t[r],o=e[n],ie.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ie.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function B(e,t,n){var r,i,o=0,a=yt.length,s=ie.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=pt||q(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:ie.extend({},t),opts:ie.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:pt||q(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ie.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(O(c,u.opts.specialEasing);a>o;o++)if(r=yt[o].call(u,e,c,u.opts))return r;return ie.map(c,M,u),ie.isFunction(u.opts.start)&&u.opts.start.call(e,u),ie.fx.timer(ie.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(be)||[];if(ie.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function R(e,t,n,r){function i(s){var l;return o[s]=!0,ie.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=e===zt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function W(e,t){var n,r,i=ie.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&ie.extend(!0,e,n),e}function $(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function z(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(d){return{state:"parsererror",error:a?d:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function I(e,t,n,r){var i;if(ie.isArray(t))ie.each(t,function(t,i){n||Vt.test(e)?r(e,i):I(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==ie.type(t))r(e,t);else for(i in t)I(e+"["+i+"]",t[i],n,r)}function X(){try{return new e.XMLHttpRequest}catch(t){}}function U(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function V(e){return ie.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var J=[],Y=J.slice,G=J.concat,Q=J.push,K=J.indexOf,Z={},ee=Z.toString,te=Z.hasOwnProperty,ne={},re="1.11.3",ie=function(e,t){return new ie.fn.init(e,t)},oe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,se=/-([\da-z])/gi,le=function(e,t){return t.toUpperCase()};ie.fn=ie.prototype={jquery:re,constructor:ie,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=ie.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ie.each(this,e,t)},map:function(e){return this.pushStack(ie.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:J.sort,splice:J.splice},ie.extend=ie.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||ie.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(u&&n&&(ie.isPlainObject(n)||(t=ie.isArray(n)))?(t?(t=!1,o=e&&ie.isArray(e)?e:[]):o=e&&ie.isPlainObject(e)?e:{},a[r]=ie.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},ie.extend({expando:"jQuery"+(re+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ie.type(e)},isArray:Array.isArray||function(e){return"array"===ie.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!ie.isArray(e)&&e-parseFloat(e)+1>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==ie.type(e)||e.nodeType||ie.isWindow(e))return!1;try{if(e.constructor&&!te.call(e,"constructor")&&!te.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(ne.ownLast)for(t in e)return te.call(e,t);for(t in e);return void 0===t||te.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Z[ee.call(e)]||"object":typeof e},globalEval:function(t){t&&ie.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ae,"ms-").replace(se,le)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(oe,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ie.merge(r,"string"==typeof e?[e]:e):Q.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(K)return K.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),l=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&l.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&l.push(i);return G.apply([],l)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),ie.isFunction(e)?(n=Y.call(arguments,2),r=function(){return e.apply(t||this,n.concat(Y.call(arguments)))},r.guid=e.guid=e.guid||ie.guid++,r):void 0},now:function(){return+new Date},support:ne}),ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var ue=function(e){function t(e,t,n,r){var i,o,a,s,l,u,d,p,h,m;if((t?t.ownerDocument||t:R)!==H&&L(t),t=t||H,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!r&&_){if(11!==s&&(i=ye.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&B(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return K.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName)return K.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!M||!M.test(e))){if(p=d=P,h=t,m=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=E(e),(d=t.getAttribute("id"))?p=d.replace(xe,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",l=u.length;l--;)u[l]=p+f(u[l]);h=be.test(e)&&c(t.parentNode)||t,m=u.join(",")}if(m)try{return K.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return S(e.replace(le,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[P]=!0,e}function i(e){var t=H.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function f(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=$++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[P]||(t[P]={}),(s=l[r])&&s[0]===W&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[P]&&(i=v(i)),o&&!o[P]&&(o=v(o,a)),r(function(r,a,s,l){var u,c,d,f=[],p=[],h=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:g(v,f,e,s,l),b=n?o||(r?e:h||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(u=g(b,p),i(u,[],s,l),c=u.length;c--;)(d=u[c])&&(b[p[c]]=!(y[p[c]]=d));if(r){if(o||e){if(o){for(u=[],c=b.length;c--;)(d=b[c])&&u.push(y[c]=d);o(null,b=[],u,l)}for(c=b.length;c--;)(d=b[c])&&(u=o?ee(r,d):f[c])>-1&&(r[u]=!(a[u]=d))}}else b=g(b===a?b.splice(h,b.length):b),o?o(null,a,b,l):K.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,l=p(function(e){return e===t},a,!0),u=p(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==A)||((t=n).nodeType?l(e,n,r):u(e,n,r));return t=null,i}];i>s;s++)if(n=T.relative[e[s].type])c=[p(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!T.relative[e[r].type];r++);return v(s>1&&h(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(le,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))}c.push(n)}return h(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,l,u){var c,d,f,p=0,h="0",m=r&&[],v=[],y=A,b=r||o&&T.find.TAG("*",u),x=W+=null==y?1:Math.random()||.1,w=b.length;for(u&&(A=a!==H&&a);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(d=0;f=e[d++];)if(f(c,a,s)){l.push(c);break}u&&(W=x)}i&&((c=!f&&c)&&p--,r&&m.push(c))}if(p+=h,i&&h!==p){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=G.call(l));v=g(v)}K.apply(l,v),u&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(l)}return u&&(W=x,A=y),m};return i?r(a):a}var x,w,T,C,N,E,k,S,A,D,j,L,H,q,_,M,F,O,B,P="sizzle"+1*new Date,R=e.document,W=0,$=0,z=n(),I=n(),X=n(),U=function(e,t){return e===t&&(j=!0),0},V=1<<31,J={}.hasOwnProperty,Y=[],G=Y.pop,Q=Y.push,K=Y.push,Z=Y.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(ae),pe=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,xe=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){L()};try{K.apply(Y=Z.call(R.childNodes),R.childNodes),Y[R.childNodes.length].nodeType}catch(Ne){K={apply:Y.length?function(e,t){Q.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},N=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:R;return r!==H&&9===r.nodeType&&r.documentElement?(H=r,q=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),_=!N(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ve.test(r.getElementsByClassName),w.getById=i(function(e){return q.appendChild(e).id=P,!r.getElementsByName||!r.getElementsByName(P).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&_){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return _?t.getElementsByClassName(e):void 0},F=[],M=[],(w.qsa=ve.test(r.querySelectorAll))&&(i(function(e){q.appendChild(e).innerHTML="<a id='"+P+"'></a><select id='"+P+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&M.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||M.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+P+"-]").length||M.push("~="),e.querySelectorAll(":checked").length||M.push(":checked"),e.querySelectorAll("a#"+P+"+*").length||M.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&M.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(w.matchesSelector=ve.test(O=q.matches||q.webkitMatchesSelector||q.mozMatchesSelector||q.oMatchesSelector||q.msMatchesSelector))&&i(function(e){w.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),F.push("!=",ae)}),M=M.length&&new RegExp(M.join("|")),F=F.length&&new RegExp(F.join("|")),t=ve.test(q.compareDocumentPosition),B=t||ve.test(q.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return j=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===R&&B(R,e)?-1:t===r||t.ownerDocument===R&&B(R,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return j=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:D?ee(D,e)-ee(D,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===R?-1:u[i]===R?1:0},r):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&L(e),n=n.replace(de,"='$1']"),!(!w.matchesSelector||!_||F&&F.test(n)||M&&M.test(n)))try{var r=O.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&L(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&J.call(T.attrHandle,t.toLowerCase())?n(e,t,!_):void 0;return void 0!==r?r:w.attributes||!_?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(j=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(c=g[P]||(g[P]={}),u=c[e]||[],p=u[0]===W&&u[1],f=u[0]===W&&u[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[W,p,f];break}}else if(y&&(u=(t[P]||(t[P]={}))[e])&&u[0]===W)f=u[1];else for(;(d=++p&&d&&d[m]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[P]||(d[P]={}))[e]=[W,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[P]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(le,"$1"));return i[P]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do if(n=_?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===q},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=s(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=l(x);return d.prototype=T.filters=T.pseudos,T.setFilters=new d,E=t.tokenize=function(e,n){var r,i,o,a,s,l,u,c=I[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=T.preFilter;s;){(!r||(i=ue.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(le," ")}),s=s.slice(r.length));for(a in T.filter)!(i=he[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),
        o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):I(e,l).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=E(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=X(e,b(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,l,u="function"==typeof e&&e,d=!r&&E(e=u.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&_&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(we,Te),t)||[])[0],!t)return n;u&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((l=T.find[s])&&(r=l(a.matches[0].replace(we,Te),be.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return K.apply(n,r),n;break}}return(u||k(e,d))(r,t,!_,n,be.test(e)&&c(t.parentNode)||t),n},w.sortStable=P.split("").sort(U).join("")===P,w.detectDuplicates=!!j,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);ie.find=ue,ie.expr=ue.selectors,ie.expr[":"]=ie.expr.pseudos,ie.unique=ue.uniqueSort,ie.text=ue.getText,ie.isXMLDoc=ue.isXML,ie.contains=ue.contains;var ce=ie.expr.match.needsContext,de=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,fe=/^.[^:#\[\.,]*$/;ie.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ie.find.matchesSelector(r,e)?[r]:[]:ie.find.matches(e,ie.grep(t,function(e){return 1===e.nodeType}))},ie.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(ie(e).filter(function(){for(t=0;i>t;t++)if(ie.contains(r[t],this))return!0}));for(t=0;i>t;t++)ie.find(e,r[t],n);return n=this.pushStack(i>1?ie.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ce.test(e)?ie(e):e||[],!1).length}});var pe,he=e.document,me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ge=ie.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:me.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||pe).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof ie?t[0]:t,ie.merge(this,ie.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:he,!0)),de.test(n[1])&&ie.isPlainObject(t))for(n in t)ie.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(r=he.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return pe.find(e);this.length=1,this[0]=r}return this.context=he,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ie.isFunction(e)?"undefined"!=typeof pe.ready?pe.ready(e):e(ie):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),ie.makeArray(e,this))};ge.prototype=ie.fn,pe=ie(he);var ve=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};ie.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!ie(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),ie.fn.extend({has:function(e){var t,n=ie(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(ie.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ce.test(e)||"string"!=typeof e?ie(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ie.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ie.unique(o):o)},index:function(e){return e?"string"==typeof e?ie.inArray(this[0],ie(e)):ie.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ie.unique(ie.merge(this.get(),ie(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ie.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ie.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ie.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return ie.dir(e,"nextSibling")},prevAll:function(e){return ie.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ie.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ie.dir(e,"previousSibling",n)},siblings:function(e){return ie.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ie.sibling(e.firstChild)},contents:function(e){return ie.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ie.merge([],e.childNodes)}},function(e,t){ie.fn[e]=function(n,r){var i=ie.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ie.filter(r,i)),this.length>1&&(ye[e]||(i=ie.unique(i)),ve.test(e)&&(i=i.reverse())),this.pushStack(i)}});var be=/\S+/g,xe={};ie.Callbacks=function(e){e="string"==typeof e?xe[e]||o(e):ie.extend({},e);var t,n,r,i,a,s,l=[],u=!e.once&&[],c=function(o){for(n=e.memory&&o,r=!0,a=s||0,s=0,i=l.length,t=!0;l&&i>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:d.disable())},d={add:function(){if(l){var r=l.length;!function o(t){ie.each(t,function(t,n){var r=ie.type(n);"function"===r?e.unique&&d.has(n)||l.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),t?i=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&ie.each(arguments,function(e,n){for(var r;(r=ie.inArray(n,l,r))>-1;)l.splice(r,1),t&&(i>=r&&i--,a>=r&&a--)}),this},has:function(e){return e?ie.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!l||r&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):c(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!r}};return d},ie.extend({Deferred:function(e){var t=[["resolve","done",ie.Callbacks("once memory"),"resolved"],["reject","fail",ie.Callbacks("once memory"),"rejected"],["notify","progress",ie.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ie.Deferred(function(n){ie.each(t,function(t,o){var a=ie.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ie.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?ie.extend(e,r):r}},i={};return r.pipe=r.then,ie.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Y.call(arguments),a=o.length,s=1!==a||e&&ie.isFunction(e.promise)?a:0,l=1===s?e:ie.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Y.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&ie.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}});var we;ie.fn.ready=function(e){return ie.ready.promise().done(e),this},ie.extend({isReady:!1,readyWait:1,holdReady:function(e){e?ie.readyWait++:ie.ready(!0)},ready:function(e){if(e===!0?!--ie.readyWait:!ie.isReady){if(!he.body)return setTimeout(ie.ready);ie.isReady=!0,e!==!0&&--ie.readyWait>0||(we.resolveWith(he,[ie]),ie.fn.triggerHandler&&(ie(he).triggerHandler("ready"),ie(he).off("ready")))}}}),ie.ready.promise=function(t){if(!we)if(we=ie.Deferred(),"complete"===he.readyState)setTimeout(ie.ready);else if(he.addEventListener)he.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1);else{he.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&he.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!ie.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}a(),ie.ready()}}()}return we.promise(t)};var Te,Ce="undefined";for(Te in ie(ne))break;ne.ownLast="0"!==Te,ne.inlineBlockNeedsLayout=!1,ie(function(){var e,t,n,r;n=he.getElementsByTagName("body")[0],n&&n.style&&(t=he.createElement("div"),r=he.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==Ce&&(t.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",ne.inlineBlockNeedsLayout=e=3===t.offsetWidth,e&&(n.style.zoom=1)),n.removeChild(r))}),function(){var e=he.createElement("div");if(null==ne.deleteExpando){ne.deleteExpando=!0;try{delete e.test}catch(t){ne.deleteExpando=!1}}e=null}(),ie.acceptData=function(e){var t=ie.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return 1!==n&&9!==n?!1:!t||t!==!0&&e.getAttribute("classid")===t};var Ne=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ee=/([A-Z])/g;ie.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?ie.cache[e[ie.expando]]:e[ie.expando],!!e&&!u(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return d(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return d(e,t,!0)}}),ie.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=ie.data(o),1===o.nodeType&&!ie._data(o,"parsedAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=ie.camelCase(r.slice(5)),l(o,r,i[r])));ie._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){ie.data(this,e)}):arguments.length>1?this.each(function(){ie.data(this,e,t)}):o?l(o,e,ie.data(o,e)):void 0},removeData:function(e){return this.each(function(){ie.removeData(this,e)})}}),ie.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=ie._data(e,t),n&&(!r||ie.isArray(n)?r=ie._data(e,t,ie.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=ie.queue(e,t),r=n.length,i=n.shift(),o=ie._queueHooks(e,t),a=function(){ie.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ie._data(e,n)||ie._data(e,n,{empty:ie.Callbacks("once memory").add(function(){ie._removeData(e,t+"queue"),ie._removeData(e,n)})})}}),ie.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ie.queue(this[0],e):void 0===t?this:this.each(function(){var n=ie.queue(this,e,t);ie._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ie.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ie.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ie.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=ie._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ke=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Se=["Top","Right","Bottom","Left"],Ae=function(e,t){return e=t||e,"none"===ie.css(e,"display")||!ie.contains(e.ownerDocument,e)},De=ie.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===ie.type(n)){i=!0;for(s in n)ie.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ie.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(ie(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},je=/^(?:checkbox|radio)$/i;!function(){var e=he.createElement("input"),t=he.createElement("div"),n=he.createDocumentFragment();if(t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",ne.leadingWhitespace=3===t.firstChild.nodeType,ne.tbody=!t.getElementsByTagName("tbody").length,ne.htmlSerialize=!!t.getElementsByTagName("link").length,ne.html5Clone="<:nav></:nav>"!==he.createElement("nav").cloneNode(!0).outerHTML,e.type="checkbox",e.checked=!0,n.appendChild(e),ne.appendChecked=e.checked,t.innerHTML="<textarea>x</textarea>",ne.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,n.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",ne.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,ne.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){ne.noCloneEvent=!1}),t.cloneNode(!0).click()),null==ne.deleteExpando){ne.deleteExpando=!0;try{delete t.test}catch(r){ne.deleteExpando=!1}}}(),function(){var t,n,r=he.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(ne[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),ne[t+"Bubbles"]=r.attributes[n].expando===!1);r=null}();var Le=/^(?:input|select|textarea)$/i,He=/^key/,qe=/^(?:mouse|pointer|contextmenu)|click/,_e=/^(?:focusinfocus|focusoutblur)$/,Me=/^([^.]*)(?:\.(.+)|)$/;ie.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,d,f,p,h,m,g=ie._data(e);if(g){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=ie.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return typeof ie===Ce||e&&ie.event.triggered===e.type?void 0:ie.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(be)||[""],s=t.length;s--;)o=Me.exec(t[s])||[],p=m=o[1],h=(o[2]||"").split(".").sort(),p&&(u=ie.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,u=ie.event.special[p]||{},d=ie.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ie.expr.match.needsContext.test(i),namespace:h.join(".")},l),(f=a[p])||(f=a[p]=[],f.delegateCount=0,u.setup&&u.setup.call(e,r,h,c)!==!1||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,d):f.push(d),ie.event.global[p]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,d,f,p,h,m,g=ie.hasData(e)&&ie._data(e);if(g&&(c=g.events)){for(t=(t||"").match(be)||[""],u=t.length;u--;)if(s=Me.exec(t[u])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(d=ie.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,f=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;o--;)a=f[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,d.remove&&d.remove.call(e,a));l&&!f.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||ie.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)ie.event.remove(e,p+t[u],n,r,!0);ie.isEmptyObject(c)&&(delete g.handle,ie._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,u,c,d,f=[r||he],p=te.call(t,"type")?t.type:t,h=te.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||he,3!==r.nodeType&&8!==r.nodeType&&!_e.test(p+ie.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[ie.expando]?t:new ie.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:ie.makeArray(n,[t]),u=ie.event.special[p]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!ie.isWindow(r)){for(l=u.delegateType||p,_e.test(l+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),c=s;c===(r.ownerDocument||he)&&f.push(c.defaultView||c.parentWindow||e)}for(d=0;(s=f[d++])&&!t.isPropagationStopped();)t.type=d>1?l:u.bindType||p,o=(ie._data(s,"events")||{})[t.type]&&ie._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&ie.acceptData(s)&&(t.result=o.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=p,!i&&!t.isDefaultPrevented()&&(!u._default||u._default.apply(f.pop(),n)===!1)&&ie.acceptData(r)&&a&&r[p]&&!ie.isWindow(r)){c=r[a],c&&(r[a]=null),ie.event.triggered=p;try{r[p]()}catch(m){}ie.event.triggered=void 0,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=ie.event.fix(e);var t,n,r,i,o,a=[],s=Y.call(arguments),l=(ie._data(this,"events")||{})[e.type]||[],u=ie.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(a=ie.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,n=((ie.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],o=0;s>o;o++)r=t[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?ie(n,this).index(l)>=0:ie.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[ie.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=qe.test(i)?this.mouseHooks:He.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ie.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||he),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||he,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ie.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return ie.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ie.extend(new ie.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ie.event.trigger(i,null,t):ie.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ie.removeEvent=he.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===Ce&&(e[r]=null),e.detachEvent(r,n))},ie.Event=function(e,t){return this instanceof ie.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?f:p):this.type=e,t&&ie.extend(this,t),this.timeStamp=e&&e.timeStamp||ie.now(),void(this[ie.expando]=!0)):new ie.Event(e,t)},ie.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=f,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=f,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=f,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},ie.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ie.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!ie.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ne.submitBubbles||(ie.event.special.submit={setup:function(){return ie.nodeName(this,"form")?!1:void ie.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=ie.nodeName(t,"input")||ie.nodeName(t,"button")?t.form:void 0;n&&!ie._data(n,"submitBubbles")&&(ie.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),ie._data(n,"submitBubbles",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&ie.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return ie.nodeName(this,"form")?!1:void ie.event.remove(this,"._submit")}}),ne.changeBubbles||(ie.event.special.change={setup:function(){return Le.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ie.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),ie.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),ie.event.simulate("change",this,e,!0)})),!1):void ie.event.add(this,"beforeactivate._change",function(e){var t=e.target;Le.test(t.nodeName)&&!ie._data(t,"changeBubbles")&&(ie.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||ie.event.simulate("change",this.parentNode,e,!0)}),ie._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ie.event.remove(this,"._change"),!Le.test(this.nodeName)}}),ne.focusinBubbles||ie.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ie.event.simulate(t,e.target,ie.event.fix(e),!0)};ie.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ie._data(r,t);i||r.addEventListener(e,n,!0),ie._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ie._data(r,t)-1;i?ie._data(r,t,i):(r.removeEventListener(e,n,!0),ie._removeData(r,t))}}}),ie.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(o in e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=p;else if(!r)return this;return 1===i&&(a=r,r=function(e){return ie().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=ie.guid++)),this.each(function(){ie.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ie(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=p),this.each(function(){ie.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){ie.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?ie.event.trigger(e,t,n,!0):void 0}});var Fe="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Oe=/ jQuery\d+="(?:null|\d+)"/g,Be=new RegExp("<(?:"+Fe+")[\\s/>]","i"),Pe=/^\s+/,Re=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,We=/<([\w:]+)/,$e=/<tbody/i,ze=/<|&#?\w+;/,Ie=/<(?:script|style|link)/i,Xe=/checked\s*(?:[^=]|=\s*.checked.)/i,Ue=/^$|\/(?:java|ecma)script/i,Ve=/^true\/(.*)/,Je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ye={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ne.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ge=m(he),Qe=Ge.appendChild(he.createElement("div"));Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td,ie.extend({clone:function(e,t,n){var r,i,o,a,s,l=ie.contains(e.ownerDocument,e);if(ne.html5Clone||ie.isXMLDoc(e)||!Be.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Qe.innerHTML=e.outerHTML,Qe.removeChild(o=Qe.firstChild)),!(ne.noCloneEvent&&ne.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ie.isXMLDoc(e)))for(r=g(o),s=g(e),a=0;null!=(i=s[a]);++a)r[a]&&C(i,r[a]);if(t)if(n)for(s=s||g(e),r=r||g(o),a=0;null!=(i=s[a]);a++)T(i,r[a]);else T(e,o);return r=g(o,"script"),r.length>0&&w(r,!l&&g(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,d=e.length,f=m(t),p=[],h=0;d>h;h++)if(o=e[h],o||0===o)if("object"===ie.type(o))ie.merge(p,o.nodeType?[o]:o);else if(ze.test(o)){for(s=s||f.appendChild(t.createElement("div")),l=(We.exec(o)||["",""])[1].toLowerCase(),c=Ye[l]||Ye._default,s.innerHTML=c[1]+o.replace(Re,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!ne.leadingWhitespace&&Pe.test(o)&&p.push(t.createTextNode(Pe.exec(o)[0])),!ne.tbody)for(o="table"!==l||$e.test(o)?"<table>"!==c[1]||$e.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)ie.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(ie.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(o));for(s&&f.removeChild(s),ne.appendChecked||ie.grep(g(p,"input"),v),h=0;o=p[h++];)if((!r||-1===ie.inArray(o,r))&&(a=ie.contains(o.ownerDocument,o),s=g(f.appendChild(o),"script"),a&&w(s),n))for(i=0;o=s[i++];)Ue.test(o.type||"")&&n.push(o);return s=null,f},cleanData:function(e,t){for(var n,r,i,o,a=0,s=ie.expando,l=ie.cache,u=ne.deleteExpando,c=ie.event.special;null!=(n=e[a]);a++)if((t||ie.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?ie.event.remove(n,r):ie.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==Ce?n.removeAttribute(s):n[s]=null,J.push(i))}}}),ie.fn.extend({text:function(e){return De(this,function(e){return void 0===e?ie.text(this):this.empty().append((this[0]&&this[0].ownerDocument||he).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?ie.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||ie.cleanData(g(n)),n.parentNode&&(t&&ie.contains(n.ownerDocument,n)&&w(g(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&ie.cleanData(g(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&ie.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return ie.clone(this,e,t)})},html:function(e){return De(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Oe,""):void 0;if(!("string"!=typeof e||Ie.test(e)||!ne.htmlSerialize&&Be.test(e)||!ne.leadingWhitespace&&Pe.test(e)||Ye[(We.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Re,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(ie.cleanData(g(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,ie.cleanData(g(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=G.apply([],e);var n,r,i,o,a,s,l=0,u=this.length,c=this,d=u-1,f=e[0],p=ie.isFunction(f);if(p||u>1&&"string"==typeof f&&!ne.checkClone&&Xe.test(f))return this.each(function(n){var r=c.eq(n);p&&(e[0]=f.call(this,n,r.html())),r.domManip(e,t)});if(u&&(s=ie.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=ie.map(g(s,"script"),b),i=o.length;u>l;l++)r=s,l!==d&&(r=ie.clone(r,!0,!0),i&&ie.merge(o,g(r,"script"))),t.call(this[l],r,l);if(i)for(a=o[o.length-1].ownerDocument,ie.map(o,x),l=0;i>l;l++)r=o[l],Ue.test(r.type||"")&&!ie._data(r,"globalEval")&&ie.contains(a,r)&&(r.src?ie._evalUrl&&ie._evalUrl(r.src):ie.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Je,"")));s=n=null}return this}}),ie.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ie.fn[e]=function(e){for(var n,r=0,i=[],o=ie(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),ie(o[r])[t](n),Q.apply(i,n.get());return this.pushStack(i)}});var Ke,Ze={};!function(){var e;ne.shrinkWrapBlocks=function(){if(null!=e)return e;e=!1;var t,n,r;return n=he.getElementsByTagName("body")[0],n&&n.style?(t=he.createElement("div"),r=he.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),typeof t.style.zoom!==Ce&&(t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",t.appendChild(he.createElement("div")).style.width="5px",e=3!==t.offsetWidth),n.removeChild(r),e):void 0}}();var et,tt,nt=/^margin/,rt=new RegExp("^("+ke+")(?!px)[a-z%]+$","i"),it=/^(top|right|bottom|left)$/;e.getComputedStyle?(et=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},tt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||et(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||ie.contains(e.ownerDocument,e)||(a=ie.style(e,t)),rt.test(a)&&nt.test(t)&&(r=s.width,i=s.minWidth,
        o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):he.documentElement.currentStyle&&(et=function(e){return e.currentStyle},tt=function(e,t,n){var r,i,o,a,s=e.style;return n=n||et(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),rt.test(a)&&!it.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),!function(){function t(){var t,n,r,i;n=he.getElementsByTagName("body")[0],n&&n.style&&(t=he.createElement("div"),r=he.createElement("div"),r.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(r).appendChild(t),t.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",o=a=!1,l=!0,e.getComputedStyle&&(o="1%"!==(e.getComputedStyle(t,null)||{}).top,a="4px"===(e.getComputedStyle(t,null)||{width:"4px"}).width,i=t.appendChild(he.createElement("div")),i.style.cssText=t.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",t.style.width="1px",l=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight),t.removeChild(i)),t.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=t.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",s=0===i[0].offsetHeight,s&&(i[0].style.display="",i[1].style.display="none",s=0===i[0].offsetHeight),n.removeChild(r))}var n,r,i,o,a,s,l;n=he.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=n.getElementsByTagName("a")[0],(r=i&&i.style)&&(r.cssText="float:left;opacity:.5",ne.opacity="0.5"===r.opacity,ne.cssFloat=!!r.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",ne.clearCloneStyle="content-box"===n.style.backgroundClip,ne.boxSizing=""===r.boxSizing||""===r.MozBoxSizing||""===r.WebkitBoxSizing,ie.extend(ne,{reliableHiddenOffsets:function(){return null==s&&t(),s},boxSizingReliable:function(){return null==a&&t(),a},pixelPosition:function(){return null==o&&t(),o},reliableMarginRight:function(){return null==l&&t(),l}}))}(),ie.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var ot=/alpha\([^)]*\)/i,at=/opacity\s*=\s*([^)]*)/,st=/^(none|table(?!-c[ea]).+)/,lt=new RegExp("^("+ke+")(.*)$","i"),ut=new RegExp("^([+-])=("+ke+")","i"),ct={position:"absolute",visibility:"hidden",display:"block"},dt={letterSpacing:"0",fontWeight:"400"},ft=["Webkit","O","Moz","ms"];ie.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=tt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ne.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=ie.camelCase(t),l=e.style;if(t=ie.cssProps[s]||(ie.cssProps[s]=S(l,s)),a=ie.cssHooks[t]||ie.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if(o=typeof n,"string"===o&&(i=ut.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(ie.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||ie.cssNumber[s]||(n+="px"),ne.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{l[t]=n}catch(u){}}},css:function(e,t,n,r){var i,o,a,s=ie.camelCase(t);return t=ie.cssProps[s]||(ie.cssProps[s]=S(e.style,s)),a=ie.cssHooks[t]||ie.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=tt(e,t,r)),"normal"===o&&t in dt&&(o=dt[t]),""===n||n?(i=parseFloat(o),n===!0||ie.isNumeric(i)?i||0:o):o}}),ie.each(["height","width"],function(e,t){ie.cssHooks[t]={get:function(e,n,r){return n?st.test(ie.css(e,"display"))&&0===e.offsetWidth?ie.swap(e,ct,function(){return L(e,t,r)}):L(e,t,r):void 0},set:function(e,n,r){var i=r&&et(e);return D(e,n,r?j(e,t,r,ne.boxSizing&&"border-box"===ie.css(e,"boxSizing",!1,i),i):0)}}}),ne.opacity||(ie.cssHooks.opacity={get:function(e,t){return at.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=ie.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===ie.trim(o.replace(ot,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=ot.test(o)?o.replace(ot,i):o+" "+i)}}),ie.cssHooks.marginRight=k(ne.reliableMarginRight,function(e,t){return t?ie.swap(e,{display:"inline-block"},tt,[e,"marginRight"]):void 0}),ie.each({margin:"",padding:"",border:"Width"},function(e,t){ie.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Se[r]+t]=o[r]||o[r-2]||o[0];return i}},nt.test(e)||(ie.cssHooks[e+t].set=D)}),ie.fn.extend({css:function(e,t){return De(this,function(e,t,n){var r,i,o={},a=0;if(ie.isArray(t)){for(r=et(e),i=t.length;i>a;a++)o[t[a]]=ie.css(e,t[a],!1,r);return o}return void 0!==n?ie.style(e,t,n):ie.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ae(this)?ie(this).show():ie(this).hide()})}}),ie.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ie.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=ie.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ie.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ie.fx.step[e.prop]?ie.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ie.cssProps[e.prop]]||ie.cssHooks[e.prop])?ie.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ie.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ie.fx=H.prototype.init,ie.fx.step={};var pt,ht,mt=/^(?:toggle|show|hide)$/,gt=new RegExp("^(?:([+-])=|)("+ke+")([a-z%]*)$","i"),vt=/queueHooks$/,yt=[F],bt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=gt.exec(t),o=i&&i[3]||(ie.cssNumber[e]?"":"px"),a=(ie.cssNumber[e]||"px"!==o&&+r)&&gt.exec(ie.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,ie.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};ie.Animation=ie.extend(B,{tweener:function(e,t){ie.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],bt[n]=bt[n]||[],bt[n].unshift(t)},prefilter:function(e,t){t?yt.unshift(e):yt.push(e)}}),ie.speed=function(e,t,n){var r=e&&"object"==typeof e?ie.extend({},e):{complete:n||!n&&t||ie.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ie.isFunction(t)&&t};return r.duration=ie.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ie.fx.speeds?ie.fx.speeds[r.duration]:ie.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ie.isFunction(r.old)&&r.old.call(this),r.queue&&ie.dequeue(this,r.queue)},r},ie.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ie.isEmptyObject(e),o=ie.speed(t,n,r),a=function(){var t=B(this,ie.extend({},e),o);(i||ie._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ie.timers,a=ie._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&vt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&ie.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ie._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ie.timers,a=r?r.length:0;for(n.finish=!0,ie.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ie.each(["toggle","show","hide"],function(e,t){var n=ie.fn[t];ie.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,r,i)}}),ie.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ie.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ie.timers=[],ie.fx.tick=function(){var e,t=ie.timers,n=0;for(pt=ie.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||ie.fx.stop(),pt=void 0},ie.fx.timer=function(e){ie.timers.push(e),e()?ie.fx.start():ie.timers.pop()},ie.fx.interval=13,ie.fx.start=function(){ht||(ht=setInterval(ie.fx.tick,ie.fx.interval))},ie.fx.stop=function(){clearInterval(ht),ht=null},ie.fx.speeds={slow:600,fast:200,_default:400},ie.fn.delay=function(e,t){return e=ie.fx?ie.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i;t=he.createElement("div"),t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=t.getElementsByTagName("a")[0],n=he.createElement("select"),i=n.appendChild(he.createElement("option")),e=t.getElementsByTagName("input")[0],r.style.cssText="top:1px",ne.getSetAttribute="t"!==t.className,ne.style=/top/.test(r.getAttribute("style")),ne.hrefNormalized="/a"===r.getAttribute("href"),ne.checkOn=!!e.value,ne.optSelected=i.selected,ne.enctype=!!he.createElement("form").enctype,n.disabled=!0,ne.optDisabled=!i.disabled,e=he.createElement("input"),e.setAttribute("value",""),ne.input=""===e.getAttribute("value"),e.value="t",e.setAttribute("type","radio"),ne.radioValue="t"===e.value}();var xt=/\r/g;ie.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=ie.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ie(this).val()):e,null==i?i="":"number"==typeof i?i+="":ie.isArray(i)&&(i=ie.map(i,function(e){return null==e?"":e+""})),t=ie.valHooks[this.type]||ie.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=ie.valHooks[i.type]||ie.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(xt,""):null==n?"":n)):void 0}}),ie.extend({valHooks:{option:{get:function(e){var t=ie.find.attr(e,"value");return null!=t?t:ie.trim(ie.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(ne.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ie.nodeName(n.parentNode,"optgroup"))){if(t=ie(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=ie.makeArray(t),a=i.length;a--;)if(r=i[a],ie.inArray(ie.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(s){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),ie.each(["radio","checkbox"],function(){ie.valHooks[this]={set:function(e,t){return ie.isArray(t)?e.checked=ie.inArray(ie(e).val(),t)>=0:void 0}},ne.checkOn||(ie.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var wt,Tt,Ct=ie.expr.attrHandle,Nt=/^(?:checked|selected)$/i,Et=ne.getSetAttribute,kt=ne.input;ie.fn.extend({attr:function(e,t){return De(this,ie.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ie.removeAttr(this,e)})}}),ie.extend({attr:function(e,t,n){var r,i,o=e.nodeType;return e&&3!==o&&8!==o&&2!==o?typeof e.getAttribute===Ce?ie.prop(e,t,n):(1===o&&ie.isXMLDoc(e)||(t=t.toLowerCase(),r=ie.attrHooks[t]||(ie.expr.match.bool.test(t)?Tt:wt)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=ie.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void ie.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(be);if(o&&1===e.nodeType)for(;n=o[i++];)r=ie.propFix[n]||n,ie.expr.match.bool.test(n)?kt&&Et||!Nt.test(n)?e[r]=!1:e[ie.camelCase("default-"+n)]=e[r]=!1:ie.attr(e,n,""),e.removeAttribute(Et?n:r)},attrHooks:{type:{set:function(e,t){if(!ne.radioValue&&"radio"===t&&ie.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Tt={set:function(e,t,n){return t===!1?ie.removeAttr(e,n):kt&&Et||!Nt.test(n)?e.setAttribute(!Et&&ie.propFix[n]||n,n):e[ie.camelCase("default-"+n)]=e[n]=!0,n}},ie.each(ie.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ct[t]||ie.find.attr;Ct[t]=kt&&Et||!Nt.test(t)?function(e,t,r){var i,o;return r||(o=Ct[t],Ct[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ct[t]=o),i}:function(e,t,n){return n?void 0:e[ie.camelCase("default-"+t)]?t.toLowerCase():null}}),kt&&Et||(ie.attrHooks.value={set:function(e,t,n){return ie.nodeName(e,"input")?void(e.defaultValue=t):wt&&wt.set(e,t,n)}}),Et||(wt={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},Ct.id=Ct.name=Ct.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},ie.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:wt.set},ie.attrHooks.contenteditable={set:function(e,t,n){wt.set(e,""===t?!1:t,n)}},ie.each(["width","height"],function(e,t){ie.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),ne.style||(ie.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var St=/^(?:input|select|textarea|button|object)$/i,At=/^(?:a|area)$/i;ie.fn.extend({prop:function(e,t){return De(this,ie.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ie.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(t){}})}}),ie.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;return e&&3!==a&&8!==a&&2!==a?(o=1!==a||!ie.isXMLDoc(e),o&&(t=ie.propFix[t]||t,i=ie.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]):void 0},propHooks:{tabIndex:{get:function(e){var t=ie.find.attr(e,"tabindex");return t?parseInt(t,10):St.test(e.nodeName)||At.test(e.nodeName)&&e.href?0:-1}}}}),ne.hrefNormalized||ie.each(["href","src"],function(e,t){ie.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),ne.optSelected||(ie.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),ie.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ie.propFix[this.toLowerCase()]=this}),ne.enctype||(ie.propFix.enctype="encoding");var Dt=/[\t\r\n\f]/g;ie.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u="string"==typeof e&&e;if(ie.isFunction(e))return this.each(function(t){ie(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(be)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Dt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=ie.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(ie.isFunction(e))return this.each(function(t){ie(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(be)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Dt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?ie.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(ie.isFunction(e)?function(n){ie(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=ie(this),o=e.match(be)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Ce||"boolean"===n)&&(this.className&&ie._data(this,"__className__",this.className),this.className=this.className||e===!1?"":ie._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Dt," ").indexOf(t)>=0)return!0;return!1}}),ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ie.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ie.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var jt=ie.now(),Lt=/\?/,Ht=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ie.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=ie.trim(t+"");return i&&!ie.trim(i.replace(Ht,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():ie.error("Invalid JSON: "+t)},ie.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new DOMParser,n=r.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||ie.error("Invalid XML: "+t),n};var qt,_t,Mt=/#.*$/,Ft=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Pt=/^(?:GET|HEAD)$/,Rt=/^\/\//,Wt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,$t={},zt={},It="*/".concat("*");try{_t=location.href}catch(Xt){_t=he.createElement("a"),_t.href="",_t=_t.href}qt=Wt.exec(_t.toLowerCase())||[],ie.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t,type:"GET",isLocal:Bt.test(qt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ie.parseJSON,"text xml":ie.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?W(W(e,ie.ajaxSettings),t):W(ie.ajaxSettings,e)},ajaxPrefilter:P($t),ajaxTransport:P(zt),ajax:function(e,t){function n(e,t,n,r){var i,c,v,y,x,T=t;2!==b&&(b=2,s&&clearTimeout(s),u=void 0,a=r||"",w.readyState=e>0?4:0,i=e>=200&&300>e||304===e,n&&(y=$(d,w,n)),y=z(d,y,w,i),i?(d.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(ie.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(ie.etag[o]=x)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,i=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",i?h.resolveWith(f,[c,T,w]):h.rejectWith(f,[w,T,v]),w.statusCode(g),g=void 0,l&&p.trigger(i?"ajaxSuccess":"ajaxError",[w,d,i?c:v]),m.fireWith(f,[w,T]),l&&(p.trigger("ajaxComplete",[w,d]),--ie.active||ie.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,l,u,c,d=ie.ajaxSetup({},t),f=d.context||d,p=d.context&&(f.nodeType||f.jquery)?ie(f):ie.event,h=ie.Deferred(),m=ie.Callbacks("once memory"),g=d.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=Ot.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return u&&u.abort(t),n(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,d.url=((e||d.url||_t)+"").replace(Mt,"").replace(Rt,qt[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=ie.trim(d.dataType||"*").toLowerCase().match(be)||[""],null==d.crossDomain&&(r=Wt.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]===qt[1]&&r[2]===qt[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(qt[3]||("http:"===qt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=ie.param(d.data,d.traditional)),R($t,d,t,w),2===b)return w;l=ie.event&&d.global,l&&0===ie.active++&&ie.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Pt.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(Lt.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=Ft.test(o)?o.replace(Ft,"$1_="+jt++):o+(Lt.test(o)?"&":"?")+"_="+jt++)),d.ifModified&&(ie.lastModified[o]&&w.setRequestHeader("If-Modified-Since",ie.lastModified[o]),ie.etag[o]&&w.setRequestHeader("If-None-Match",ie.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",d.contentType),w.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+It+"; q=0.01":""):d.accepts["*"]);for(i in d.headers)w.setRequestHeader(i,d.headers[i]);if(d.beforeSend&&(d.beforeSend.call(f,w,d)===!1||2===b))return w.abort();x="abort";for(i in{success:1,error:1,complete:1})w[i](d[i]);if(u=R(zt,d,t,w)){w.readyState=1,l&&p.trigger("ajaxSend",[w,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},d.timeout));try{b=1,u.send(v,n)}catch(T){if(!(2>b))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return ie.get(e,t,n,"json")},getScript:function(e,t){return ie.get(e,void 0,t,"script")}}),ie.each(["get","post"],function(e,t){ie[t]=function(e,n,r,i){return ie.isFunction(n)&&(i=i||r,r=n,n=void 0),ie.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),ie._evalUrl=function(e){return ie.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ie.fn.extend({wrapAll:function(e){if(ie.isFunction(e))return this.each(function(t){ie(this).wrapAll(e.call(this,t))});if(this[0]){var t=ie(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(ie.isFunction(e)?function(t){ie(this).wrapInner(e.call(this,t))}:function(){var t=ie(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ie.isFunction(e);return this.each(function(n){ie(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ie.nodeName(this,"body")||ie(this).replaceWith(this.childNodes)}).end()}}),ie.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!ne.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||ie.css(e,"display"))},ie.expr.filters.visible=function(e){return!ie.expr.filters.hidden(e)};var Ut=/%20/g,Vt=/\[\]$/,Jt=/\r?\n/g,Yt=/^(?:submit|button|image|reset|file)$/i,Gt=/^(?:input|select|textarea|keygen)/i;ie.param=function(e,t){var n,r=[],i=function(e,t){t=ie.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=ie.ajaxSettings&&ie.ajaxSettings.traditional),ie.isArray(e)||e.jquery&&!ie.isPlainObject(e))ie.each(e,function(){i(this.name,this.value)});else for(n in e)I(n,e[n],t,i);return r.join("&").replace(Ut,"+")},ie.fn.extend({serialize:function(){return ie.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ie.prop(this,"elements");return e?ie.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ie(this).is(":disabled")&&Gt.test(this.nodeName)&&!Yt.test(e)&&(this.checked||!je.test(e))}).map(function(e,t){var n=ie(this).val();return null==n?null:ie.isArray(n)?ie.map(n,function(e){return{name:t.name,value:e.replace(Jt,"\r\n")}}):{name:t.name,value:n.replace(Jt,"\r\n")}}).get()}}),ie.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||U()}:X;var Qt=0,Kt={},Zt=ie.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Kt)Kt[e](void 0,!0)}),ne.cors=!!Zt&&"withCredentials"in Zt,Zt=ne.ajax=!!Zt,Zt&&ie.ajaxTransport(function(e){if(!e.crossDomain||ne.cors){var t;return{send:function(n,r){var i,o=e.xhr(),a=++Qt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===o.readyState))if(delete Kt[a],t=void 0,o.onreadystatechange=ie.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(c){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=Kt[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),ie.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ie.globalEval(e),e}}}),ie.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),ie.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=he.head||ie("head")[0]||he.documentElement;return{send:function(r,i){t=he.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var en=[],tn=/(=)\?(?=&|$)|\?\?/;ie.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=en.pop()||ie.expando+"_"+jt++;return this[e]=!0,e}}),ie.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(tn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tn.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=ie.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(tn,"$1"+i):t.jsonp!==!1&&(t.url+=(Lt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||ie.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,en.push(i)),a&&ie.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),ie.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||he;var r=de.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ie.buildFragment([e],t,i),i&&i.length&&ie(i).remove(),ie.merge([],r.childNodes))};var nn=ie.fn.load;ie.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=ie.trim(e.slice(s,e.length)),e=e.slice(0,s)),ie.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&ie.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?ie("<div>").append(ie.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},ie.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ie.fn[t]=function(e){return this.on(t,e)}}),ie.expr.filters.animated=function(e){return ie.grep(ie.timers,function(t){return e===t.elem}).length};var rn=e.document.documentElement;ie.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u,c=ie.css(e,"position"),d=ie(e),f={};"static"===c&&(e.style.position="relative"),s=d.offset(),o=ie.css(e,"top"),l=ie.css(e,"left"),u=("absolute"===c||"fixed"===c)&&ie.inArray("auto",[o,l])>-1,u?(r=d.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),ie.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):d.css(f)}},ie.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ie.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;return o?(t=o.documentElement,ie.contains(t,i)?(typeof i.getBoundingClientRect!==Ce&&(r=i.getBoundingClientRect()),n=V(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r):void 0},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===ie.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ie.nodeName(e[0],"html")||(n=e.offset()),n.top+=ie.css(e[0],"borderTopWidth",!0),n.left+=ie.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ie.css(r,"marginTop",!0),left:t.left-n.left-ie.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||rn;e&&!ie.nodeName(e,"html")&&"static"===ie.css(e,"position");)e=e.offsetParent;return e||rn})}}),ie.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);ie.fn[e]=function(r){return De(this,function(e,r,i){var o=V(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:void(o?o.scrollTo(n?ie(o).scrollLeft():i,n?i:ie(o).scrollTop()):e[r]=i)},e,r,arguments.length,null)}}),ie.each(["top","left"],function(e,t){ie.cssHooks[t]=k(ne.pixelPosition,function(e,n){return n?(n=tt(e,t),rt.test(n)?ie(e).position()[t]+"px":n):void 0})}),ie.each({Height:"height",Width:"width"},function(e,t){ie.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){ie.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return De(this,function(t,n,r){
        var i;return ie.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?ie.css(t,n,a):ie.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),ie.fn.size=function(){return this.length},ie.fn.andSelf=ie.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ie});var on=e.jQuery,an=e.$;return ie.noConflict=function(t){return e.$===ie&&(e.$=an),t&&e.jQuery===ie&&(e.jQuery=on),ie},typeof t===Ce&&(e.jQuery=e.$=ie),ie});
        //]]>


        //<![CDATA[
      /* WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
      (function(){var i,h,n,m,l,k=function(d,c){return function(){return d.apply(c,arguments)}},j=[].indexOf||function(e){for(var d=0,f=this.length;f>d;d++){if(d in this&&this[d]===e){return d}}return -1};h=function(){function b(){}return b.prototype.extend=function(f,e){var o,g;for(o in e){g=e[o],null==f[o]&&(f[o]=g)}return f},b.prototype.isMobile=function(c){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)},b.prototype.createEvent=function(g,f,q,p){var o;return null==f&&(f=!1),null==q&&(q=!1),null==p&&(p=null),null!=document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(g,f,q,p)):null!=document.createEventObject?(o=document.createEventObject(),o.eventType=g):o.eventName=g,o},b.prototype.emitEvent=function(d,c){return null!=d.dispatchEvent?d.dispatchEvent(c):c in (null!=d)?d[c]():"on"+c in (null!=d)?d["on"+c]():void 0},b.prototype.addEvent=function(e,d,f){return null!=e.addEventListener?e.addEventListener(d,f,!1):null!=e.attachEvent?e.attachEvent("on"+d,f):e[d]=f},b.prototype.removeEvent=function(e,d,f){return null!=e.removeEventListener?e.removeEventListener(d,f,!1):null!=e.detachEvent?e.detachEvent("on"+d,f):delete e[d]},b.prototype.innerHeight=function(){return"innerHeight" in window?window.innerHeight:document.documentElement.clientHeight},b}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function b(){this.keys=[],this.values=[]}return b.prototype.get=function(o){var g,s,r,q,p;for(p=this.keys,g=r=0,q=p.length;q>r;g=++r){if(s=p[g],s===o){return this.values[g]}}},b.prototype.set=function(p,o){var u,t,s,r,q;for(q=this.keys,u=s=0,r=q.length;r>s;u=++s){if(t=q[u],t===p){return void (this.values[u]=o)}}return this.keys.push(p),this.values.push(o)},b}()),i=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(i=function(){function b(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return b.notSupported=!0,b.prototype.observe=function(){},b}()),m=this.getComputedStyle||function(b){return this.getPropertyValue=function(a){var d;return"float"===a&&(a="styleFloat"),l.test(a)&&a.replace(l,function(e,c){return c.toUpperCase()}),(null!=(d=b.currentStyle)?d[a]:void 0)||null},this},l=/(\-([a-z]){1})/g,this.WOW=function(){function a(b){null==b&&(b={}),this.scrollCallback=k(this.scrollCallback,this),this.scrollHandler=k(this.scrollHandler,this),this.resetAnimation=k(this.resetAnimation,this),this.start=k(this.start,this),this.scrolled=!0,this.config=this.util().extend(b,this.defaults),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return a.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},a.prototype.init=function(){var b;return this.element=window.document.documentElement,"interactive"===(b=document.readyState)||"complete"===b?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},a.prototype.start=function(){var f,p,o,g;if(this.stopped=!1,this.boxes=function(){var b,s,r,q;for(r=this.element.querySelectorAll("."+this.config.boxClass),q=[],b=0,s=r.length;s>b;b++){f=r[b],q.push(f)}return q}.call(this),this.all=function(){var b,s,r,q;for(r=this.boxes,q=[],b=0,s=r.length;s>b;b++){f=r[b],q.push(f)}return q}.call(this),this.boxes.length){if(this.disabled()){this.resetStyle()}else{for(g=this.boxes,p=0,o=g.length;o>p;p++){f=g[p],this.applyStyle(f,!0)}}}return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new i(function(b){return function(q){var v,u,t,s,r;for(r=[],v=0,u=q.length;u>v;v++){s=q[v],r.push(function(){var w,e,y,x;for(y=s.addedNodes||[],x=[],w=0,e=y.length;e>w;w++){t=y[w],x.push(this.doSync(t))}return x}.call(b))}return r}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},a.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},a.prototype.sync=function(){return i.notSupported?this.doSync(this.element):void 0},a.prototype.doSync=function(o){var g,s,r,q,p;if(null==o&&(o=this.element),1===o.nodeType){for(o=o.parentNode||o,q=o.querySelectorAll("."+this.config.boxClass),p=[],s=0,r=q.length;r>s;s++){g=q[s],j.call(this.all,g)<0?(this.boxes.push(g),this.all.push(g),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(g,!0),p.push(this.scrolled=!0)):p.push(void 0)}return p}},a.prototype.show=function(b){return this.applyStyle(b),b.className=b.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(b),this.util().emitEvent(b,this.wowEvent),this.util().addEvent(b,"animationend",this.resetAnimation),this.util().addEvent(b,"oanimationend",this.resetAnimation),this.util().addEvent(b,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(b,"MSAnimationEnd",this.resetAnimation),b},a.prototype.applyStyle=function(g,f){var q,p,o;return p=g.getAttribute("data-wow-duration"),q=g.getAttribute("data-wow-delay"),o=g.getAttribute("data-wow-iteration"),this.animate(function(b){return function(){return b.customStyle(g,f,p,q,o)}}(this))},a.prototype.animate=function(){return"requestAnimationFrame" in window?function(b){return window.requestAnimationFrame(b)}:function(b){return b()}}(),a.prototype.resetStyle=function(){var g,f,q,p,o;for(p=this.boxes,o=[],f=0,q=p.length;q>f;f++){g=p[f],o.push(g.style.visibility="visible")}return o},a.prototype.resetAnimation=function(d){var c;return d.type.toLowerCase().indexOf("animationend")>=0?(c=d.target||d.srcElement,c.className=c.className.replace(this.config.animateClass,"").trim()):void 0},a.prototype.customStyle=function(g,f,q,p,o){return f&&this.cacheAnimationName(g),g.style.visibility=f?"hidden":"visible",q&&this.vendorSet(g.style,{animationDuration:q}),p&&this.vendorSet(g.style,{animationDelay:p}),o&&this.vendorSet(g.style,{animationIterationCount:o}),this.vendorSet(g.style,{animationName:f?"none":this.cachedAnimationName(g)}),g},a.prototype.vendors=["moz","webkit"],a.prototype.vendorSet=function(o,g){var s,r,q,p;r=[];for(s in g){q=g[s],o[""+s]=q,r.push(function(){var c,t,f,e;for(f=this.vendors,e=[],c=0,t=f.length;t>c;c++){p=f[c],e.push(o[""+p+s.charAt(0).toUpperCase()+s.substr(1)]=q)}return e}.call(this))}return r},a.prototype.vendorCSS=function(o,d){var u,t,s,r,q,p;for(q=m(o),r=q.getPropertyCSSValue(d),s=this.vendors,u=0,t=s.length;t>u;u++){p=s[u],r=r||q.getPropertyCSSValue("-"+p+"-"+d)}return r},a.prototype.animationName=function(e){var d;try{d=this.vendorCSS(e,"animation-name").cssText}catch(f){d=m(e).getPropertyValue("animation-name")}return"none"===d?"":d},a.prototype.cacheAnimationName=function(b){return this.animationNameCache.set(b,this.animationName(b))},a.prototype.cachedAnimationName=function(b){return this.animationNameCache.get(b)},a.prototype.scrollHandler=function(){return this.scrolled=!0},a.prototype.scrollCallback=function(){var b;return !this.scrolled||(this.scrolled=!1,this.boxes=function(){var f,p,o,g;for(o=this.boxes,g=[],f=0,p=o.length;p>f;f++){b=o[f],b&&(this.isVisible(b)?this.show(b):g.push(b))}return g}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},a.prototype.offsetTop=function(d){for(var c;void 0===d.offsetTop;){d=d.parentNode}for(c=d.offsetTop;d=d.offsetParent;){c+=d.offsetTop}return c},a.prototype.isVisible=function(o){var g,s,r,q,p;return s=o.getAttribute("data-wow-offset")||this.config.offset,p=window.pageYOffset,q=p+Math.min(this.element.clientHeight,this.util().innerHeight())-s,r=this.offsetTop(o),g=r+o.clientHeight,q>=r&&g>=p},a.prototype.util=function(){return null!=this._util?this._util:this._util=new h},a.prototype.disabled=function(){return !this.config.mobile&&this.util().isMobile(navigator.userAgent)},a}()}).call(this);
      //]]>


      //<![CDATA[
        (function(a){a.slidebars=function(b){var x=a.extend({siteClose:true,scrollLock:false,disableOver:false,hideControlClasses:false},b);var v=document.createElement("div").style,t=false,k=false;if(v.MozTransition===""||v.WebkitTransition===""||v.OTransition===""||v.transition===""){t=true}if(v.MozTransform===""||v.WebkitTransform===""||v.OTransform===""||v.transform===""){k=true}var s=navigator.userAgent,y=false,c=false;if(/Android/.test(s)){y=s.substr(s.indexOf("Android")+8,3)}else{if(/(iPhone|iPod|iPad)/.test(s)){c=s.substr(s.indexOf("OS ")+3,3).replace("_",".")}}if(y&&y<3||c&&c<5){a("html").addClass("sb-static")}var q=a("#sb-site, .sb-site-container");if(a(".sb-left").length){var e=a(".sb-left"),g=false}if(a(".sb-right").length){var h=a(".sb-right"),j=false}var r=false,z=a(window).width(),w=a(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),m=a(".sb-slide");function o(){if(!x.disableOver||(typeof x.disableOver==="number"&&x.disableOver>=z)){r=true;a("html").addClass("sb-init");if(x.hideControlClasses){w.removeClass("sb-hide")}f()}else{if(typeof x.disableOver==="number"&&x.disableOver<z){r=false;a("html").removeClass("sb-init");if(x.hideControlClasses){w.addClass("sb-hide")}q.css("minHeight","");if(g||j){l()}}}}o();function f(){q.css("minHeight","");var B=parseInt(q.css("height"),10),A=parseInt(a("html").css("height"),10);if(B<A){q.css("minHeight",a("html").css("height"))}if(e&&e.hasClass("sb-width-custom")){e.css("width",e.attr("data-sb-width"))}if(h&&h.hasClass("sb-width-custom")){h.css("width",h.attr("data-sb-width"))}if(e&&(e.hasClass("sb-style-push")||e.hasClass("sb-style-overlay"))){e.css("marginLeft","-"+e.css("width"))}if(h&&(h.hasClass("sb-style-push")||h.hasClass("sb-style-overlay"))){h.css("marginRight","-"+h.css("width"))}if(x.scrollLock){a("html").addClass("sb-scroll-lock")}}a(window).resize(function(){var A=a(window).width();if(z!==A){z=A;o();if(g){i("left")}if(j){i("right")}}});var u;if(t&&k){u="translate";if(y&&y<4.4){u="side"}}else{u="jQuery"}function d(B,E,D){var A;if(B.hasClass("sb-style-push")){A=q.add(B).add(m)}else{if(B.hasClass("sb-style-overlay")){A=B}else{A=q.add(m)}}if(u==="translate"){if(E==="0px"){F()}else{A.css("transform","translate( "+E+" )")}}else{if(u==="side"){if(E==="0px"){F()}else{if(E[0]==="-"){E=E.substr(1)}A.css(D,"0px");setTimeout(function(){A.css(D,E)},1)}}else{if(u==="jQuery"){if(E[0]==="-"){E=E.substr(1)}var C={};C[D]=E;A.stop().animate(C,400)}}}function F(){A.removeAttr("style");f()}}function i(A){if(A==="left"&&e&&j||A==="right"&&h&&g){l();setTimeout(B,400)}else{B()}function B(){if(r&&A==="left"&&e){a("html").addClass("sb-active sb-active-left");e.addClass("sb-active");d(e,e.css("width"),"left");setTimeout(function(){g=true},400)}else{if(r&&A==="right"&&h){a("html").addClass("sb-active sb-active-right");h.addClass("sb-active");d(h,"-"+h.css("width"),"right");setTimeout(function(){j=true},400)}}}}function l(A,B){if(g||j){if(g){d(e,"0px","left");g=false}if(j){d(h,"0px","right");j=false}setTimeout(function(){a("html").removeClass("sb-active sb-active-left sb-active-right");if(e){e.removeClass("sb-active")}if(h){h.removeClass("sb-active")}if(typeof A!=="undefined"){if(typeof B===undefined){B="_self"}window.open(A,B)}},400)}}function n(A){if(A==="left"&&e){if(!g){i("left")}else{l()}}if(A==="right"&&h){if(!j){i("right")}else{l()}}}this.slidebars={open:i,close:l,toggle:n,init:function(){return r},active:function(A){if(A==="left"&&e){return g}if(A==="right"&&h){return j}},destroy:function(A){if(A==="left"&&e){if(g){l()}setTimeout(function(){e.remove();e=false},400)}if(A==="right"&&h){if(j){l()}setTimeout(function(){h.remove();h=false},400)}}};function p(B,A){B.stopPropagation();B.preventDefault();if(B.type==="touchend"){A.off("click")}}a(".sb-toggle-left").on("touchend click",function(A){p(A,a(this));n("left")});a(".sb-toggle-right").on("touchend click",function(A){p(A,a(this));n("right")});a(".sb-open-left").on("touchend click",function(A){p(A,a(this));i("left")});a(".sb-open-right").on("touchend click",function(A){p(A,a(this));i("right")});a(".sb-close").on("touchend click",function(C){if(a(this).is("a")||a(this).children().is("a")){if(C.type==="click"){C.stopPropagation();C.preventDefault();var B=(a(this).is("a")?a(this):a(this).find("a")),A=B.attr("href"),D=(B.attr("target")?B.attr("target"):"_self");l(A,D)}}else{p(C,a(this));l()}});q.on("touchend click",function(A){if(x.siteClose&&(g||j)){p(A,a(this));l()}})}})(jQuery);
        //]]>



              //<![CDATA[
                  if(typeof Object.create!=="function"){Object.create=function(b){function a(){}a.prototype=b;return new a()}}(function(c,b,a){var d={init:function(e,f){var g=this;g.$elem=c(f);g.options=c.extend({},c.fn.owlCarousel.options,g.$elem.data(),e);g.userOptions=e;g.loadContent()},loadContent:function(){var g=this,f;function e(k){var h,j="";if(typeof g.options.jsonSuccess==="function"){g.options.jsonSuccess.apply(this,[k])}else{for(h in k.owl){if(k.owl.hasOwnProperty(h)){j+=k.owl[h].item}}g.$elem.html(j)}g.logIn()}if(typeof g.options.beforeInit==="function"){g.options.beforeInit.apply(this,[g.$elem])}if(typeof g.options.jsonPath==="string"){f=g.options.jsonPath;c.getJSON(f,e)}else{g.logIn()}},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style"));e.$elem.data("owl-originalClasses",e.$elem.attr("class"));e.$elem.css({opacity:0});e.orignalItems=e.options.items;e.checkBrowser();e.wrapperWidth=0;e.checkVisible=null;e.setVars()},setVars:function(){var e=this;if(e.$elem.children().length===0){return false}e.baseClass();e.eventTypes();e.$userItems=e.$elem.children();e.itemsAmount=e.$userItems.length;e.wrapItems();e.$owlItems=e.$elem.find(".owl-item");e.$owlWrapper=e.$elem.find(".owl-wrapper");e.playDirection="next";e.prevItem=0;e.prevArr=[0];e.currentItem=0;e.customEvents();e.onStartup()},onStartup:function(){var e=this;e.updateItems();e.calculateAll();e.buildControls();e.updateControls();e.response();e.moveEvents();e.stopOnHover();e.owlStatus();if(e.options.transitionStyle!==false){e.transitionTypes(e.options.transitionStyle)}if(e.options.autoPlay===true){e.options.autoPlay=5000}e.play();e.$elem.find(".owl-wrapper").css("display","block");if(!e.$elem.is(":visible")){e.watchVisibility()}else{e.$elem.css("opacity",1)}e.onstartup=false;e.eachMoveUpdate();if(typeof e.options.afterInit==="function"){e.options.afterInit.apply(this,[e.$elem])}},eachMoveUpdate:function(){var e=this;if(e.options.lazyLoad===true){e.lazyLoad()}if(e.options.autoHeight===true){e.autoHeight()}e.onVisibleItems();if(typeof e.options.afterAction==="function"){e.options.afterAction.apply(this,[e.$elem])}},updateVars:function(){var e=this;if(typeof e.options.beforeUpdate==="function"){e.options.beforeUpdate.apply(this,[e.$elem])}e.watchVisibility();e.updateItems();e.calculateAll();e.updatePosition();e.updateControls();e.eachMoveUpdate();if(typeof e.options.afterUpdate==="function"){e.options.afterUpdate.apply(this,[e.$elem])}},reload:function(){var e=this;b.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(e.$elem.is(":visible")===false){e.$elem.css({opacity:0});b.clearInterval(e.autoPlayInterval);b.clearInterval(e.checkVisible)}else{return false}e.checkVisible=b.setInterval(function(){if(e.$elem.is(":visible")){e.reload();e.$elem.animate({opacity:1},200);b.clearInterval(e.checkVisible)}},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');e.wrapperOuter=e.$elem.find(".owl-wrapper-outer");e.$elem.css("display","block")},baseClass:function(){var g=this,e=g.$elem.hasClass(g.options.baseClass),f=g.$elem.hasClass(g.options.theme);if(!e){g.$elem.addClass(g.options.baseClass)}if(!f){g.$elem.addClass(g.options.theme)}},updateItems:function(){var g=this,f,e;if(g.options.responsive===false){return false}if(g.options.singleItem===true){g.options.items=g.orignalItems=1;g.options.itemsCustom=false;g.options.itemsDesktop=false;g.options.itemsDesktopSmall=false;g.options.itemsTablet=false;g.options.itemsTabletSmall=false;g.options.itemsMobile=false;return false}f=c(g.options.responsiveBaseWidth).width();if(f>(g.options.itemsDesktop[0]||g.orignalItems)){g.options.items=g.orignalItems}if(g.options.itemsCustom!==false){g.options.itemsCustom.sort(function(i,h){return i[0]-h[0]});for(e=0;e<g.options.itemsCustom.length;e+=1){if(g.options.itemsCustom[e][0]<=f){g.options.items=g.options.itemsCustom[e][1]}}}else{if(f<=g.options.itemsDesktop[0]&&g.options.itemsDesktop!==false){g.options.items=g.options.itemsDesktop[1]}if(f<=g.options.itemsDesktopSmall[0]&&g.options.itemsDesktopSmall!==false){g.options.items=g.options.itemsDesktopSmall[1]}if(f<=g.options.itemsTablet[0]&&g.options.itemsTablet!==false){g.options.items=g.options.itemsTablet[1]}if(f<=g.options.itemsTabletSmall[0]&&g.options.itemsTabletSmall!==false){g.options.items=g.options.itemsTabletSmall[1]}if(f<=g.options.itemsMobile[0]&&g.options.itemsMobile!==false){g.options.items=g.options.itemsMobile[1]}}if(g.options.items>g.itemsAmount&&g.options.itemsScaleUp===true){g.options.items=g.itemsAmount}},response:function(){var g=this,f,e;if(g.options.responsive!==true){return false}e=c(b).width();g.resizer=function(){if(c(b).width()!==e){if(g.options.autoPlay!==false){b.clearInterval(g.autoPlayInterval)}b.clearTimeout(f);f=b.setTimeout(function(){e=c(b).width();g.updateVars()},g.options.responsiveRefreshRate)}};c(b).resize(g.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem);if(e.options.autoPlay!==false){e.checkAp()}},appendItemsSizes:function(){var g=this,e=0,f=g.itemsAmount-g.options.items;g.$owlItems.each(function(h){var i=c(this);i.css({width:g.itemWidth}).data("owl-item",Number(h));if(h%g.options.items===0||h===f){if(!(h>f)){e+=1}}i.data("owl-roundPages",e)})},appendWrapperSizes:function(){var f=this,e=f.$owlItems.length*f.itemWidth;f.$owlWrapper.css({width:e*2,left:0});f.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth();e.appendWrapperSizes();e.loops();e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,f=((e.itemsAmount*e.itemWidth)-e.options.items*e.itemWidth)*-1;if(e.options.items>e.itemsAmount){e.maximumItem=0;f=0;e.maximumPixels=0}else{e.maximumItem=e.itemsAmount-e.options.items;e.maximumPixels=f}return f},min:function(){return 0},loops:function(){var k=this,j=0,g=0,f,h,e;k.positionsInArray=[0];k.pagesInArray=[];for(f=0;f<k.itemsAmount;f+=1){g+=k.itemWidth;k.positionsInArray.push(-g);if(k.options.scrollPerPage===true){h=c(k.$owlItems[f]);e=h.data("owl-roundPages");if(e!==j){k.pagesInArray[j]=k.positionsInArray[f];j=e}}}},buildControls:function(){var e=this;if(e.options.navigation===true||e.options.pagination===true){e.owlControls=c('<div class="owl-controls"/>').toggleClass("clickable",!e.browser.isTouch).appendTo(e.$elem)}if(e.options.pagination===true){e.buildPagination()}if(e.options.navigation===true){e.buildButtons()}},buildButtons:function(){var f=this,e=c('<div class="owl-buttons"/>');f.owlControls.append(e);f.buttonPrev=c("<div/>",{"class":"owl-prev",html:f.options.navigationText[0]||""});f.buttonNext=c("<div/>",{"class":"owl-next",html:f.options.navigationText[1]||""});e.append(f.buttonPrev).append(f.buttonNext);e.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(g){g.preventDefault()});e.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(g){g.preventDefault();if(c(this).hasClass("owl-next")){f.next()}else{f.prev()}})},buildPagination:function(){var e=this;e.paginationWrapper=c('<div class="owl-pagination"/>');e.owlControls.append(e.paginationWrapper);e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(f){f.preventDefault();if(Number(c(this).data("owl-page"))!==e.currentItem){e.goTo(Number(c(this).data("owl-page")),true)}})},updatePagination:function(){var l=this,f,k,j,h,g,e;if(l.options.pagination===false){return false}l.paginationWrapper.html("");f=0;k=l.itemsAmount-l.itemsAmount%l.options.items;for(h=0;h<l.itemsAmount;h+=1){if(h%l.options.items===0){f+=1;if(k===h){j=l.itemsAmount-l.options.items}g=c("<div/>",{"class":"owl-page"});e=c("<span></span>",{text:l.options.paginationNumbers===true?f:"","class":l.options.paginationNumbers===true?"owl-numbers":""});g.append(e);g.data("owl-page",k===h?j:h);g.data("owl-roundPages",f);l.paginationWrapper.append(g)}}l.checkPagination()},checkPagination:function(){var e=this;if(e.options.pagination===false){return false}e.paginationWrapper.find(".owl-page").each(function(){if(c(this).data("owl-roundPages")===c(e.$owlItems[e.currentItem]).data("owl-roundPages")){e.paginationWrapper.find(".owl-page").removeClass("active");c(this).addClass("active")}})},checkNavigation:function(){var e=this;if(e.options.navigation===false){return false}if(e.options.rewindNav===false){if(e.currentItem===0&&e.maximumItem===0){e.buttonPrev.addClass("disabled");e.buttonNext.addClass("disabled")}else{if(e.currentItem===0&&e.maximumItem!==0){e.buttonPrev.addClass("disabled");e.buttonNext.removeClass("disabled")}else{if(e.currentItem===e.maximumItem){e.buttonPrev.removeClass("disabled");e.buttonNext.addClass("disabled")}else{if(e.currentItem!==0&&e.currentItem!==e.maximumItem){e.buttonPrev.removeClass("disabled");e.buttonNext.removeClass("disabled")}}}}}},updateControls:function(){var e=this;e.updatePagination();e.checkNavigation();if(e.owlControls){if(e.options.items>=e.itemsAmount){e.owlControls.hide()}else{e.owlControls.show()}}},destroyControls:function(){var e=this;if(e.owlControls){e.owlControls.remove()}},next:function(f){var e=this;if(e.isTransition){return false}e.currentItem+=e.options.scrollPerPage===true?e.options.items:1;if(e.currentItem>e.maximumItem+(e.options.scrollPerPage===true?(e.options.items-1):0)){if(e.options.rewindNav===true){e.currentItem=0;f="rewind"}else{e.currentItem=e.maximumItem;return false}}e.goTo(e.currentItem,f)},prev:function(f){var e=this;if(e.isTransition){return false}if(e.options.scrollPerPage===true&&e.currentItem>0&&e.currentItem<e.options.items){e.currentItem=0}else{e.currentItem-=e.options.scrollPerPage===true?e.options.items:1}if(e.currentItem<0){if(e.options.rewindNav===true){e.currentItem=e.maximumItem;f="rewind"}else{e.currentItem=0;return false}}e.goTo(e.currentItem,f)},goTo:function(e,i,g){var h=this,f;if(h.isTransition){return false}if(typeof h.options.beforeMove==="function"){h.options.beforeMove.apply(this,[h.$elem])}if(e>=h.maximumItem){e=h.maximumItem}else{if(e<=0){e=0}}h.currentItem=h.owl.currentItem=e;if(h.options.transitionStyle!==false&&g!=="drag"&&h.options.items===1&&h.browser.support3d===true){h.swapSpeed(0);if(h.browser.support3d===true){h.transition3d(h.positionsInArray[e])}else{h.css2slide(h.positionsInArray[e],1)}h.afterGo();h.singleItemTransition();return false}f=h.positionsInArray[e];if(h.browser.support3d===true){h.isCss3Finish=false;if(i===true){h.swapSpeed("paginationSpeed");b.setTimeout(function(){h.isCss3Finish=true},h.options.paginationSpeed)}else{if(i==="rewind"){h.swapSpeed(h.options.rewindSpeed);b.setTimeout(function(){h.isCss3Finish=true},h.options.rewindSpeed)}else{h.swapSpeed("slideSpeed");b.setTimeout(function(){h.isCss3Finish=true},h.options.slideSpeed)}}h.transition3d(f)}else{if(i===true){h.css2slide(f,h.options.paginationSpeed)}else{if(i==="rewind"){h.css2slide(f,h.options.rewindSpeed)}else{h.css2slide(f,h.options.slideSpeed)}}}h.afterGo()},jumpTo:function(e){var f=this;if(typeof f.options.beforeMove==="function"){f.options.beforeMove.apply(this,[f.$elem])}if(e>=f.maximumItem||e===-1){e=f.maximumItem}else{if(e<=0){e=0}}f.swapSpeed(0);if(f.browser.support3d===true){f.transition3d(f.positionsInArray[e])}else{f.css2slide(f.positionsInArray[e],1)}f.currentItem=f.owl.currentItem=e;f.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem);e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2];e.prevArr.shift(0);if(e.prevItem!==e.currentItem){e.checkPagination();e.checkNavigation();e.eachMoveUpdate();if(e.options.autoPlay!==false){e.checkAp()}}if(typeof e.options.afterMove==="function"&&e.prevItem!==e.currentItem){e.options.afterMove.apply(this,[e.$elem])}},stop:function(){var e=this;e.apStatus="stop";b.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;if(e.apStatus!=="stop"){e.play()}},play:function(){var e=this;e.apStatus="play";if(e.options.autoPlay===false){return false}b.clearInterval(e.autoPlayInterval);e.autoPlayInterval=b.setInterval(function(){e.next(true)},e.options.autoPlay)},swapSpeed:function(f){var e=this;if(f==="slideSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed))}else{if(f==="paginationSpeed"){e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed))}else{if(typeof f!=="string"){e.$owlWrapper.css(e.addCssSpeed(f))}}}},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(f){var e=this;e.$owlWrapper.css(e.doTranslate(f))},css2move:function(f){var e=this;e.$owlWrapper.css({left:f})},css2slide:function(g,f){var e=this;e.isCssFinish=false;e.$owlWrapper.stop(true,true).animate({left:g},{duration:f||e.options.slideSpeed,complete:function(){e.isCssFinish=true}})},checkBrowser:function(){var j=this,g="translate3d(0px, 0px, 0px)",i=a.createElement("div"),h,f,k,e;i.style.cssText="  -moz-transform:"+g+"; -ms-transform:"+g+"; -o-transform:"+g+"; -webkit-transform:"+g+"; transform:"+g;h=/translate3d\(0px, 0px, 0px\)/g;f=i.style.cssText.match(h);k=(f!==null&&f.length===1);e="ontouchstart" in b||b.navigator.msMaxTouchPoints;j.browser={support3d:k,isTouch:e}},moveEvents:function(){var e=this;if(e.options.mouseDrag!==false||e.options.touchDrag!==false){e.gestures();e.disabledEvents()}},eventTypes:function(){var f=this,e=["s","e","x"];f.ev_types={};if(f.options.mouseDrag===true&&f.options.touchDrag===true){e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]}else{if(f.options.mouseDrag===false&&f.options.touchDrag===true){e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]}else{if(f.options.mouseDrag===true&&f.options.touchDrag===false){e=["mousedown.owl","mousemove.owl","mouseup.owl"]}}}f.ev_types.start=e[0];f.ev_types.move=e[1];f.ev_types.end=e[2]},disabledEvents:function(){var e=this;e.$elem.on("dragstart.owl",function(f){f.preventDefault()});e.$elem.on("mousedown.disableTextSelect",function(f){return c(f.target).is("input, textarea, select, option")})},gestures:function(){var h=this,i={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};h.isCssFinish=true;function k(l){if(l.touches!==undefined){return{x:l.touches[0].pageX,y:l.touches[0].pageY}}if(l.touches===undefined){if(l.pageX!==undefined){return{x:l.pageX,y:l.pageY}}if(l.pageX===undefined){return{x:l.clientX,y:l.clientY}}}}function j(l){if(l==="on"){c(a).on(h.ev_types.move,g);c(a).on(h.ev_types.end,e)}else{if(l==="off"){c(a).off(h.ev_types.move);c(a).off(h.ev_types.end)}}}function f(n){var m=n.originalEvent||n||b.event,l;if(m.which===3){return false}if(h.itemsAmount<=h.options.items){return}if(h.isCssFinish===false&&!h.options.dragBeforeAnimFinish){return false}if(h.isCss3Finish===false&&!h.options.dragBeforeAnimFinish){return false}if(h.options.autoPlay!==false){b.clearInterval(h.autoPlayInterval)}if(h.browser.isTouch!==true&&!h.$owlWrapper.hasClass("grabbing")){h.$owlWrapper.addClass("grabbing")}h.newPosX=0;h.newRelativeX=0;c(this).css(h.removeTransition());l=c(this).position();i.relativePos=l.left;i.offsetX=k(m).x-l.left;i.offsetY=k(m).y-l.top;j("on");i.sliding=false;i.targetElement=m.target||m.srcElement}function g(o){var n=o.originalEvent||o||b.event,l,m;h.newPosX=k(n).x-i.offsetX;h.newPosY=k(n).y-i.offsetY;h.newRelativeX=h.newPosX-i.relativePos;if(typeof h.options.startDragging==="function"&&i.dragging!==true&&h.newRelativeX!==0){i.dragging=true;h.options.startDragging.apply(h,[h.$elem])}if((h.newRelativeX>8||h.newRelativeX<-8)&&(h.browser.isTouch===true)){if(n.preventDefault!==undefined){n.preventDefault()}else{n.returnValue=false}i.sliding=true}if((h.newPosY>10||h.newPosY<-10)&&i.sliding===false){c(a).off("touchmove.owl")}l=function(){return h.newRelativeX/5};m=function(){return h.maximumPixels+h.newRelativeX/5};h.newPosX=Math.max(Math.min(h.newPosX,l()),m());if(h.browser.support3d===true){h.transition3d(h.newPosX)}else{h.css2move(h.newPosX)}}function e(p){var o=p.originalEvent||p||b.event,n,m,l;o.target=o.target||o.srcElement;i.dragging=false;if(h.browser.isTouch!==true){h.$owlWrapper.removeClass("grabbing")}if(h.newRelativeX<0){h.dragDirection=h.owl.dragDirection="left"}else{h.dragDirection=h.owl.dragDirection="right"}if(h.newRelativeX!==0){n=h.getNewPosition();h.goTo(n,false,"drag");if(i.targetElement===o.target&&h.browser.isTouch!==true){c(o.target).on("click.disable",function(q){q.stopImmediatePropagation();q.stopPropagation();q.preventDefault();c(q.target).off("click.disable")});m=c._data(o.target,"events").click;l=m.pop();m.splice(0,0,l)}}j("off")}h.$elem.on(h.ev_types.start,".owl-wrapper",f)},getNewPosition:function(){var f=this,e=f.closestItem();if(e>f.maximumItem){f.currentItem=f.maximumItem;e=f.maximumItem}else{if(f.newPosX>=0){e=0;f.currentItem=0}}return e},closestItem:function(){var g=this,h=g.options.scrollPerPage===true?g.pagesInArray:g.positionsInArray,e=g.newPosX,f=null;c.each(h,function(k,j){if(e-(g.itemWidth/20)>h[k+1]&&e-(g.itemWidth/20)<j&&g.moveDirection()==="left"){f=j;if(g.options.scrollPerPage===true){g.currentItem=c.inArray(f,g.positionsInArray)}else{g.currentItem=k}}else{if(e+(g.itemWidth/20)<j&&e+(g.itemWidth/20)>(h[k+1]||h[k]-g.itemWidth)&&g.moveDirection()==="right"){if(g.options.scrollPerPage===true){f=h[k+1]||h[h.length-1];g.currentItem=c.inArray(f,g.positionsInArray)}else{f=h[k+1];g.currentItem=k+1}}}});return g.currentItem},moveDirection:function(){var e=this,f;if(e.newRelativeX<0){f="right";e.playDirection="next"}else{f="left";e.playDirection="prev"}return f},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()});e.$elem.on("owl.prev",function(){e.prev()});e.$elem.on("owl.play",function(f,g){e.options.autoPlay=g;e.play();e.hoverStatus="play"});e.$elem.on("owl.stop",function(){e.stop();e.hoverStatus="stop"});e.$elem.on("owl.goTo",function(g,f){e.goTo(f)});e.$elem.on("owl.jumpTo",function(g,f){e.jumpTo(f)})},stopOnHover:function(){var e=this;if(e.options.stopOnHover===true&&e.browser.isTouch!==true&&e.options.autoPlay!==false){e.$elem.on("mouseover",function(){e.stop()});e.$elem.on("mouseout",function(){if(e.hoverStatus!=="stop"){e.play()}})}},lazyLoad:function(){var k=this,h,f,j,g,e;if(k.options.lazyLoad===false){return false}for(h=0;h<k.itemsAmount;h+=1){f=c(k.$owlItems[h]);if(f.data("owl-loaded")==="loaded"){continue}j=f.data("owl-item");g=f.find(".lazyOwl");if(typeof g.data("src")!=="string"){f.data("owl-loaded","loaded");continue}if(f.data("owl-loaded")===undefined){g.hide();f.addClass("loading").data("owl-loaded","checked")}if(k.options.lazyFollow===true){e=j>=k.currentItem}else{e=true}if(e&&j<k.currentItem+k.options.items&&g.length){k.lazyPreload(f,g)}}},lazyPreload:function(e,f){var i=this,h=0,j;if(f.prop("tagName")==="DIV"){f.css("background-image","url("+f.data("src")+")");j=true}else{f[0].src=f.data("src")}function g(){e.data("owl-loaded","loaded").removeClass("loading");f.removeAttr("data-src");if(i.options.lazyEffect==="fade"){f.fadeIn(400)}else{f.show()}if(typeof i.options.afterLazyLoad==="function"){i.options.afterLazyLoad.apply(this,[i.$elem])}}function k(){h+=1;if(i.completeImg(f.get(0))||j===true){g()}else{if(h<=100){b.setTimeout(k,100)}else{g()}}}k()},autoHeight:function(){var h=this,i=c(h.$owlItems[h.currentItem]).find("img"),g;function e(){var j=c(h.$owlItems[h.currentItem]).height();h.wrapperOuter.css("height",j+"px");if(!h.wrapperOuter.hasClass("autoHeight")){b.setTimeout(function(){h.wrapperOuter.addClass("autoHeight")},0)}}function f(){g+=1;if(h.completeImg(i.get(0))){e()}else{if(g<=100){b.setTimeout(f,100)}else{h.wrapperOuter.css("height","")}}}if(i.get(0)!==undefined){g=0;f()}else{e()}},completeImg:function(e){var f;if(!e.complete){return false}f=typeof e.naturalWidth;if(f!=="undefined"&&e.naturalWidth===0){return false}return true},onVisibleItems:function(){var f=this,e;if(f.options.addClassActive===true){f.$owlItems.removeClass("active")}f.visibleItems=[];for(e=f.currentItem;e<f.currentItem+f.options.items;e+=1){f.visibleItems.push(e);if(f.options.addClassActive===true){c(f.$owlItems[e]).addClass("active")}}f.owl.visibleItems=f.visibleItems},transitionTypes:function(e){var f=this;f.outClass="owl-"+e+"-out";f.inClass="owl-"+e+"-in"},singleItemTransition:function(){var f=this,h=f.outClass,k=f.inClass,j=f.$owlItems.eq(f.currentItem),i=f.$owlItems.eq(f.prevItem),m=Math.abs(f.positionsInArray[f.currentItem])+f.positionsInArray[f.prevItem],l=Math.abs(f.positionsInArray[f.currentItem])+f.itemWidth/2,g="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";f.isTransition=true;f.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":l+"px","-moz-perspective-origin":l+"px","perspective-origin":l+"px"});function e(n){return{position:"relative",left:n+"px"}}i.css(e(m,10)).addClass(h).on(g,function(){f.endPrev=true;i.off(g);f.clearTransStyle(i,h)});j.addClass(k).on(g,function(){f.endCurrent=true;j.off(g);f.clearTransStyle(j,k)})},clearTransStyle:function(f,e){var g=this;f.css({position:"",left:""}).removeClass(e);if(g.endPrev&&g.endCurrent){g.$owlWrapper.removeClass("owl-origin");g.endPrev=false;g.endCurrent=false;g.isTransition=false}},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var e=this;e.$elem.off(".owl owl mousedown.disableTextSelect");c(a).off(".owl owl");c(b).off("resize",e.resizer)},unWrap:function(){var e=this;if(e.$elem.children().length!==0){e.$owlWrapper.unwrap();e.$userItems.unwrap().unwrap();if(e.owlControls){e.owlControls.remove()}}e.clearEvents();e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop();b.clearInterval(e.checkVisible);e.unWrap();e.$elem.removeData()},reinit:function(g){var f=this,e=c.extend({},f.userOptions,g);f.unWrap();f.init(e,f.$elem)},addItem:function(h,f){var g=this,e;if(!h){return false}if(g.$elem.children().length===0){g.$elem.append(h);g.setVars();return false}g.unWrap();if(f===undefined||f===-1){e=-1}else{e=f}if(e>=g.$userItems.length||e===-1){g.$userItems.eq(-1).after(h)}else{g.$userItems.eq(e).before(h)}g.setVars()},removeItem:function(f){var g=this,e;if(g.$elem.children().length===0){return false}if(f===undefined||f===-1){e=-1}else{e=f}g.unWrap();g.$userItems.eq(e).remove();g.setVars()}};c.fn.owlCarousel=function(e){return this.each(function(){if(c(this).data("owl-init")===true){return false}c(this).data("owl-init",true);var f=Object.create(d);f.init(e,this);c.data(this,"owlCarousel",f)})};c.fn.owlCarousel.options={items:5,itemsCustom:false,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:false,itemsMobile:[479,1],singleItem:false,itemsScaleUp:false,slideSpeed:200,paginationSpeed:800,rewindSpeed:1000,autoPlay:false,stopOnHover:false,navigation:false,navigationText:["prev","next"],rewindNav:true,scrollPerPage:false,pagination:true,paginationNumbers:false,responsive:true,responsiveRefreshRate:200,responsiveBaseWidth:b,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:false,lazyFollow:true,lazyEffect:"fade",autoHeight:false,jsonPath:false,jsonSuccess:false,dragBeforeAnimFinish:true,mouseDrag:true,touchDrag:true,addClassActive:false,transitionStyle:false,beforeUpdate:false,afterUpdate:false,beforeInit:false,afterInit:false,beforeMove:false,afterMove:false,afterAction:false,startDragging:false,afterLazyLoad:false}}(jQuery,window,document));  //]]>


        //<![CDATA[
      $(document).ready(function() {
        new WOW().init();
        $.slidebars();
        $("#owl-demo").owlCarousel({ 
          autoplay : 5000,
          stopOnHover : true,
          navigation:true,
          paginationSpeed : 1000,
          goToFirstSpeed : 2000,
          singleItem : true
        });
        $("#owl-demo-pc").owlCarousel({ 
          autoPlay : 5000,
          stopOnHover : true,
          navigation:true,
          paginationSpeed : 1000,
          goToFirstSpeed : 2000,
          singleItem : true
        });
        $("#owl-box_index").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true,
          pagination : false
        }); 
        $("#owl-box_index_2").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true,
          pagination : false
        }); 
        $("#owl-box_index_3").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true,
          pagination : false
        });
        $("#owl-box_pr_hot_1").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true,
          pagination : false
        });
        $("#owl-box_pr_hot_2").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true,
          pagination : false
        }); 
        $("#owl-box_brand").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true,
          pagination : false
        });
        $("#owl-box_brand_pc").owlCarousel({
          items : 3,
          lazyLoad : true,
          navigation : true,
          pagination : false
        });
        /* Js Menu */
        $('.menu_sub_child').find('li.bg_ul').append( "<i class='fa fa-caret-down' aria-hidden='true'></i>" );
        $('.sb-menu').find('li a > span.caret').html( "<i class='fa fa-caret-down' aria-hidden='true'></i>" );
        $('.sb-menu').find('li a > span.caret').css("border-left", "0px");
        $('.sb-menu').find('li a > span.caret').css("border-right", "0px");
        $('li.bg_ul').on('click', '.fa', function(){
          $('.menu_sub_child').css('display', 'block')
          var nextul = ($(this).closest('li').children('ul'));
          nextul.slideToggle('slow');
          $('.ul_child2').find('li a > span').removeClass("fa fa-angle-right");
        });
        $('.sb-menu').on('click', '.caret', function(){
          $('.menu_sub_child').slideToggle('slow');
        });
        $('.btn_menu_cate,.menu_cate_hide').hover(function(){
          $('.menu_cate_hide').fadeIn(1);
          $('.btn_menu_cate span i').addClass('fa-bars');
          $('.btn_menu_cate span i').removeClass('fa-times');
        }, function(){
          $('.menu_cate_hide').fadeOut(1);	
        });
        $('.__MB_NEWS_TAB3 li a').click(function(){
          var getTabId		=		$(this).attr('id'); 							
          $('.__MB_CONTAINER_READ3').hide();							
          $('.__MB_NEWS_TAB3 li a,.__MB_NEWS_TAB3 li').removeClass('active');							
          $(this).addClass('active');	
          $(this).parent().addClass('active');								
          $('.__MB_CONTAINER_READ3_'+getTabId).show();							
        });
        var sync1 = $("#sync1");
        var sync2 = $("#sync2");
        sync1.owlCarousel({
          singleItem : true,
          slideSpeed : 1000,
          navigation: true,
          pagination:false,
          autoHeight : true,
          afterAction : syncPosition,
          responsiveRefreshRate : 200,
        });
        sync2.owlCarousel({
          items : 4,
          itemsDesktop      : [1199,4],
          itemsDesktopSmall     : [979,4],
          itemsTablet       : [768,4],
          itemsMobile       : [479,4],
          pagination:false,
          responsiveRefreshRate : 100,
          afterInit : function(el){
            el.find(".owl-item").eq(0).addClass("synced");
          }
        });
        function syncPosition(el){
          var current = this.currentItem;
          $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
          if($("#sync2").data("owlCarousel") !== undefined){
            center(current)
          }
        }
        $("#sync2").on("click", ".owl-item", function(e){
          e.preventDefault();
          var number = $(this).data("owlItem");
          sync1.trigger("owl.goTo",number);
        });
        function center(number){
          var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
          var num = number;
          var found = false;
          for(var i in sync2visible){
            if(num === sync2visible[i]){
              var found = true;
            }
          }
          if(found===false){
            if(num>sync2visible[sync2visible.length-1]){
              sync2.trigger("owl.goTo", num - sync2visible.length+2)
            }else{
              if(num - 1 === -1){
                num = 0;
              }
              sync2.trigger("owl.goTo", num);
            }
          } else if(num === sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", sync2visible[1])
          } else if(num === sync2visible[0]){
            sync2.trigger("owl.goTo", num-1)
          }
        }
      });
      //]]>
    

      //<![CDATA[
      // JavaScript Document
      urlmuangay = "/2016/12/mua-ngay.html";
      urlgiohang = "/p/thong-tin-thanh-toan.html";
      urlnewimg = "https://lh4.googleusercontent.com/-yeElKMyYFFQ/T63-ntckhdI/AAAAAAAACpM/xaZwZCsNp34/s29/new.gif";
      newimgwidth = 29;
      newimgheight = 19;
      sumtitle = 35;
      newssumtitle = 43;
      newssumposts = 370;
      labelsumtitle = 35;
      var purl = location.href,
          fb_href = purl.substring(0, purl.indexOf(".html") + 5),
          fbcm = '<div class="fb-comments" data-href="' + fb_href + '" data-num-posts="12" data-width="100%" colorscheme="light"></div>';
      function removeHtmlTag(e, t) {
        for (var n = e.split("<"), r = 0; r < n.length; r++) - 1 != n[r].indexOf(">") && (n[r] = n[r].substring(n[r].indexOf(">") + 1, n[r].length));
        n = n.join("");
        return n.substring(0, t - 1)
      }
      function chitietsp(e, t, n) {
        var r = e.substring(7);
        e = document.getElementById(e);
        var i = ""
        , s = e.getElementsByTagName("img");
        1 <= s.length && (i = '<img src="' + s[0].src + '"/>');
        var giacu = e.innerHTML.substring(e.innerHTML.indexOf("[giacu]") + 7, e.innerHTML.indexOf("[/giacu]"))
        , u = e.innerHTML.substring(e.innerHTML.indexOf("[giaban]") + 8, e.innerHTML.indexOf("[/giaban]"));
        giavalue = giacu.replace(/,/gi, "");
        giagocvalue = u.replace(/,/gi, "");
        u = " " + u + "";
        if (-1 != e.innerHTML.indexOf("[giacu]")) var h = "Gi\u00e1 g\u1ed1c: ",
            giacu = "Giá cũ : " + giacu + "",
            p = ((parseInt(giagocvalue) - parseInt(giavalue)) / parseInt(giagocvalue) * 100).toFixed(0) + "%";
        else giacu = h = "", p = "0%";
        var o = e.innerHTML.substring(e.innerHTML.indexOf("[tomtat]") + 8, e.innerHTML.indexOf("[/tomtat]"));
        var chitiet = e.innerHTML.substring(e.innerHTML.indexOf("[chitiet]") + 9, e.innerHTML.indexOf("[/chitiet]"));
        var hotdeal = e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]"));
        tintuc = e.innerHTML.substring(e.innerHTML.indexOf("[tintuc]") + 8, e.innerHTML.indexOf("[/tintuc]"));
        kythuat = -1 != e.innerHTML.indexOf("[kythuat]") ? e.innerHTML.substring(e.innerHTML.indexOf("[kythuat]") + 9, e.innerHTML.indexOf("[/kythuat]")) : "Không có thông số kỹ thuật cho sản phẩm này";
        motangan = -1 != e.innerHTML.indexOf("[motangan]") ? e.innerHTML.substring(e.innerHTML.indexOf("[motangan]") + 10, e.innerHTML.indexOf("[/motangan]")) : "";
        var news = -1 != e.innerHTML.indexOf("[hot]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]")) : "Không có thông số kỹ thuật cho sản phẩm này";
        danhgia = -1 != e.innerHTML.indexOf("[danhgia]") ? e.innerHTML.substring(e.innerHTML.indexOf("[danhgia]") + 9, e.innerHTML.indexOf("[/danhgia]")) : "Đang cập nhật";
        mota = -1 != e.innerHTML.indexOf("[mota]") ? e.innerHTML.substring(e.innerHTML.indexOf("[mota]") + 6, e.innerHTML.indexOf("[/mota]")) : "KhĂ´ng cĂ³ mĂ´ táº£ cho sáº£n pháº©m nĂ y";
        ma = -1 != e.innerHTML.indexOf("[ma]") ? e.innerHTML.substring(e.innerHTML.indexOf("[ma]") + 4, e.innerHTML.indexOf("[/ma]")) : "Đang cập nhật";
        chinhsach = -1 != e.innerHTML.indexOf("[chinhsach]") ? e.innerHTML.substring(e.innerHTML.indexOf("[chinhsach]") + 11, e.innerHTML.indexOf("[/chinhsach]")) : "Đang cập nhật";
        e.innerHTML = -1 != e.innerHTML.indexOf("[tintuc]") ? '<div class="tintuc"><h1 class="newstitle">' + t + '</h1>' + tintuc + '</div>' : '<div class="simpleCart_shelfItem"><a id="thumb" class="item_thumb" href="" style="display:none"><img  src="' + s[0].src + '"></a><div class="col-md-6 col-sm-6 col-xs-12 mar_bt_15"><div id="sync1"><div class="item large-image"><img src="' + s[0].src + '" alt="' + t + '"></div></div></div><div class="col-md-6 col-sm-6 col-xs-12 mar_bt_15"><div class="css_content_detail"><h1 class="item_name">'+t+'</h1><div>Mã số sản phẩm : '+ma+' </div><div class="price_detail"><span class="price_pr item_price">'+u+'₫</span></div><div class="prod-end"><label for="qty">Số lượng</label><div class="pull-left"><div class="custom pull-left"><input type="number" class="input-text qty item_quantity" title="Qty" value="1" min="1" maxlength="3" id="qty" name="quantity" "></div></div></div><div class="desc_product">'+mota+'</div><div class="box_buyer"><div class="pick_buy"><button type="button" class="btn btn-default add_to_cart btn-cart add-cart item_add"><i class="fa fa-shopping-cart"></i>THÊM VÀO GIỎ HÀNG</button></div></div></div></div><div class="clear"></div><div class="box_info_product"><ul class="__MB_NEWS_TAB3 nav nav-tabs clearfix"><li class="active"><a id="1" href="javascript:void(0)" class="active">MÔ TẢ</a></li><li><a id="2" href="javascript:void(0)">Chính sách</a></li></ul></div><div class="box_info __MB_CONTAINER_READ3 __MB_CONTAINER_READ3_1" style="display:block;">'+chitiet+'</div><div class="box_info __MB_CONTAINER_READ3 __MB_CONTAINER_READ3_2" style="display:none;">'+chinhsach+'</div></div>';
      }
      function homepage(e, t, n) {
        var r = e.substring(7);
        e = document.getElementById(e);
        var i = ""
        , s = e.getElementsByTagName("img");
        1 <= s.length && (i = '<img class="item_thumb" src="' + s[0].src + '"/>');
        price = e.innerHTML.substring(e.innerHTML.indexOf("[giaban]") + 8, e.innerHTML.indexOf("[/giaban]"));
        mota = e.innerHTML.substring(e.innerHTML.indexOf("[mota]") + 6, e.innerHTML.indexOf("[/mota]"));
        sumpost = e.innerHTML.substring(e.innerHTML.indexOf("[tintuc]") + 8, e.innerHTML.indexOf("[/tintuc]"));
        t = -1 != e.innerHTML.indexOf("[tintuc]") ? "" : '<div class="item_mar simpleCart_shelfItem"><div class="col-md-4 col-sm-3 col-xs-12"><div class="product_img"><div class="icon_flat"></div><a href="'+n+'">' + i + ' </a></div></div><div class="col-md-5 col-sm-5 col-xs-12"><div class="product_title"><h3><a href="'+n+'" class="item_name">' + t + '</a></h3></div><div class="product_content"><p>' + removeHtmlTag(mota, 100) +'...</p></div></div><div class="col-md-3 col-sm-4 col-xs-12 "><div class="product_price"><span class="price_new item_price">' + price+ '₫</span></div><div class="area_btn"><button class="button btn_theme item_add"  title="Chọn sản phẩm này"><span> Chọn sản phẩm </span></button></div></div></div>';
        e.innerHTML = t
      }
      function relatedproduct(e) {
        j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
        img = [];
        for (var t = 0; t < e.feed.entry.length; t++) var n = e.feed.entry[t].content.$t;
        for (n = 0; n < relatednumposts; n++) {
          var r = e.feed.entry[n],
              i = r.title.$t,
              o;
          if (n == e.feed.entry.length) break;
          for (var u = 0; u < r.link.length; u++) if ("alternate" == r.link[u].rel) {
            o = r.link[u].href;
            break
          }
          for (u = 0; u < r.link.length; u++) if ("replies" == r.link[u].rel && "text/html" == r.link[u].type) {
            r.link[u].title.split(" ");
            break
          }
          var t = "content" in r ? r.content.$t: "summary" in r ? r.summary.$t: "",
              f = t.substring(t.indexOf("[price]") + 7, t.indexOf("[/price]"));
          postdate = r.published.$t;
          j > imgr.length - 1 && (j = 0);
          img[n] = imgr[j];
          s = t;
          a = s.indexOf("<img");
          b = s.indexOf('src="', a);
          c = s.indexOf('"', b + 5);
          d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[n] = d);
          r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          postdate.split("-")[2].substring(0, 2);
          u = postdate.split("-")[1];
          postdate.split("-");
          for (var f = t.substring(t.indexOf("[giaban]") + 8, t.indexOf("[/giaban]")), l = 0; l < r.length && parseInt(u) != r[l]; l++); - 1 != t.indexOf("[tintuc]") ? document.write('<ul class="relatednews"><li><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> <a href="' + o + '">' + i + '</a></li></ul><div class="clear"></div>') : document.write('<div class="item col-lg-3 col-md-3 col-sm-6 col-xs-6 simpleCart_shelfItem"><div class="product_img"><div class="icon_flat"></div><a href="' + o + '"><img style="height:155px" class="item_thumb" alt="' + i + '" src="' + img[n] + '"></a></div><div class="product_title"><h3><a href="' + o + '" class="item_name">' + i + '</a></h3></div><div class="product_price"><span class="price_new item_price">'+f+'₫</span></div><div class="area_btn"><button class="button btn-cart add_to_cart btn_theme item_add" title="Cho vào giỏ hàng"><span>Mua hàng</span></button></div></div>');
          j++
        }
      }
      function labelproduct(e) {
        j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
        img = [];
        for (var t = 0; t < 20; t++) {
          if(t == 0){
            document.write('');
          }
          var n = e.feed.entry[t]
          , r = n.title.$t
          , i, o = n.id.$t.split("post-");
          if (t == e.feed.entry.length) break;
          for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
              i = n.link[u].href;
              break
            }
          for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
              n.link[u].title.split(" ");
              break
            }
          u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
          giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
          giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
          hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
          hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
          kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
          postdate = n.published.$t;
          j > imgr.length - 1 && (j = 0);
          img[t] = imgr[j];
          s = u;
          a = s.indexOf("<img");
          b = s.indexOf('src="', a);
          c = s.indexOf('"', b + 5);
          d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
          n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          postdate.split("-")[2].substring(0, 2);
          u = postdate.split("-")[1];
          postdate.split("-");
          for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
          r = '<div class="item col-lg-3 col-md-3 col-sm-6 col-xs-6 simpleCart_shelfItem"><div class="product_img"><div class="icon_flat"></div><a href="' + i + '"><img style = "height:155px" alt="' + r + '" src="' + img[t] + '" class="item_thumb"></a></div><div class="product_title"><h3><a href="' + i + '" class="item_name">' + removeHtmlTag(r, labelsumtitle) + '</a></h3></div><div class="product_price"><span class="price_new item_price">'+giaban+'₫</span></div><div class="area_btn"><a href="'+urlgiohang+'"><button class="button btn-cart add_to_cart btn_theme item_add" title="Cho vào giỏ hàng"><span><i class="fa fa-shopping-cart" aria-hidden="true"></i> Mua ngay</span></button></a></div></div>';
          document.write(r);
          j++
        }
      }
      function labelproduct02(e) {
        j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
        img = [];
        for (var t = 0; t < 20; t++) {
          if(t == 0){
            document.write('<ul>');
          }
          var n = e.feed.entry[t]
          , r = n.title.$t
          , i, o = n.id.$t.split("post-");
          if (t == e.feed.entry.length) break;
          for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
              i = n.link[u].href;
              break
            }
          for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
              n.link[u].title.split(" ");
              break
            }
          u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
          giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
          giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
          hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
          hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
          kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
          postdate = n.published.$t;
          j > imgr.length - 1 && (j = 0);
          img[t] = imgr[j];
          s = u;
          a = s.indexOf("<img");
          b = s.indexOf('src="', a);
          c = s.indexOf('"', b + 5);
          d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
          n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          postdate.split("-")[2].substring(0, 2);
          u = postdate.split("-")[1];
          postdate.split("-");
          for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
          r = '<li><div class="box_pr_small"><div class="box_pr_img"><a href="' + i + '"><img alt="' + r + '" src="' + img[t] + '"> </a></div><div class="box_pr_title"><h3><a href="' + i + '">' + removeHtmlTag(r, labelsumtitle) + '</a></h3><div class="box_pr_price"><span class="pr_new">'+giaban+'₫</span></div></div></div></li>';
          document.write(r);
          j++
        }
      }
      function labelproduct03(e) {
        j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
        img = [];
        for (var t = 0; t < 20; t++) {
          if(t == 0){
            document.write('<ul>');
          }
          var n = e.feed.entry[t]
          , r = n.title.$t
          , i, o = n.id.$t.split("post-");
          if (t == e.feed.entry.length) break;
          for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
              i = n.link[u].href;
              break
            }
          for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
              n.link[u].title.split(" ");
              break
            }
          u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
          giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
          giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
          hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
          hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
          kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
          postdate = n.published.$t;
          j > imgr.length - 1 && (j = 0);
          img[t] = imgr[j];
          s = u;
          a = s.indexOf("<img");
          b = s.indexOf('src="', a);
          c = s.indexOf('"', b + 5);
          d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
          n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          postdate.split("-")[2].substring(0, 2);
          u = postdate.split("-")[1];
          postdate.split("-");
          for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
          r = '<li><div class="box_pr_small"><div class="box_pr_img"><a href="' + i + '"><img alt="' + r + '" src="' + img[t] + '"> </a></div><div class="box_pr_title"><h3><a href="' + i + '">' + removeHtmlTag(r, labelsumtitle) + '</a></h3></div></div></li>';
          document.write(r);
          j++
        }
      }
      function Cart() {
        var e = this;
        e.nextId = 1;
        e.Version = "2.2";
        e.Shelf = null;
        e.items = {};
        e.isLoaded = false;
        e.pageIsReady = false;
        e.quantity = 0;
        e.total = 0;
        e.taxRate = 0;
        e.taxCost = 0;
        e.shippingFlatRate = 0;
        e.shippingTotalRate = 0;
        e.shippingQuantityRate = 0;
        e.shippingRate = 0;
        e.shippingCost = 0;
        e.currency = VND;
        e.checkoutTo = PayPal;
        e.email = "";
        e.merchantId = "";
        e.successUrl = "/";
        e.cancelUrl = null;
        e.entry = "";
        e.entryURL = "";
        e.entryDelete = false;
        e.cookieDuration = 30;
        e.storagePrefix = "sc_";
        e.MAX_COOKIE_SIZE = 4e3;
        e.cartHeaders = ["thumb_image", "Name","Price", "decrement", "Quantity", "increment", "total", "Remove"];
        if (e.entryDelete == true) {
          this.items = {}
        }
        e.add = function (e) {
          var t = this;
          if (!t.pageIsReady) {
            t.initializeView();
            t.update()
          }
          if (!t.isLoaded) {
            t.load();
            t.update()
          }
          var n = new CartItem;
          if (!arguments || arguments.length === 0) {
            return null
          }
          var r = arguments;
          if (e && typeof e !== "string" && typeof e !== "number") {
            r = e
          }
          n.parseValuesFromArray(r);
          n.checkQuantityAndPrice();
          if (t.hasItem(n)) {
            var i = t.hasItem(n);
            i.quantity = parseInt(i.quantity, 10) + parseInt(n.quantity, 10);
            n = i
          } else {
            t.items[n.id] = n
          }
          t.update();
          $("html, body")
          .animate({
            scrollTop: 0
          }, 1e3);
          return n
        };
        e.remove = function (t) {
          var n = {};
          e.each(function (e) {
            if (e.id !== t) {
              n[e.id] = e
            }
          });
          this.items = n
        };
        e.empty = function () {
          simpleCart.items = {};
          simpleCart.update()
        };
        e.find = function (t) {
          if (!t) {
            return null
          }
          var n = [];
          e.each(function (r, i, s) {
            fits = true;
            e.each(t, function (e, t, n) {
              if (!r[n] || r[n] != e) {
                fits = false
              }
            });
            if (fits) {
              n.push(r)
            }
          });
          return n.length === 0 ? null : n
        };
        e.each = function (t, n) {
          var r, i = 0
          , s;
          if (typeof t === "function") {
            var o = t;
            u = e.items
          } else if (typeof n === "function") {
            var o = n
            , u = t
            } else {
              return
            }
          for (r in u) {
            if (typeof u[r] !== "function") {
              s = o.call(e, u[r], i, r);
              if (s === false) {
                return
              }
              i++
            }
          }
        };
        e.chunk = function (e, t) {
          if (typeof t === "undefined") {
            t = 2
          }
          var n = e.match(RegExp(".{1," + t + "}", "g"));
          return n || []
        };
        e.checkout = function () {
          if (simpleCart.quantity === 0) {
            error("Cart is empty");
            return
          }
          switch (simpleCart.checkoutTo) {
            case PayPal:
              simpleCart.paypalCheckout();
              break;
            case GoogleCheckout:
              simpleCart.googleCheckout();
              break;
            case Email:
              simpleCart.emailCheckout();
              break;
            default:
              simpleCart.customCheckout();
              break
          }
        };
        e.paypalCheckout = function () {
          var e = this
          , t = "scrollbars,location,resizable,status"
          , n = "https://www.paypal.com/cgi-bin/webscr?cmd=_cart" + "&upload=1" + "&business=" + e.email + "&currency_code=" + e.currency
          , r = 1
          , i = ""
          , s, o, u, a;
          if (e.taxRate) {
            n = n + "&tax_cart=" + e.currencyStringForPaypalCheckout(e.taxCost)
          }
          e.each(function (t, n) {
            r = n + 1;
            u = "";
            e.each(t, function (e, t, n) {
              if (n !== "id" && n !== "price" && n !== "quantity" && n !== "name" && n !== "shipping") {
                u = u + ", " + n + "=" + e
              }
            });
            u = u.substring(2);
            i = i + "&item_name_" + r + "=" + t.name + "&item_number_" + r + "=" + r + "&quantity_" + r + "=" + t.quantity + "&amount_" + r + "=" + e.currencyStringForPaypalCheckout(t.price) + "&on0_" + r + "=" + "Options" + "&os0_" + r + "=" + u
          });
          if (e.shipping() !== 0) {
            i = i + "&shipping=" + e.currencyStringForPaypalCheckout(e.shippingCost)
          }
          if (e.successUrl) {
            i = i + "&return=" + e.successUrl
          }
          if (e.cancelUrl) {
            i = i + "&cancel_return=" + e.cancelUrl
          }
          n = n + i;
          window.open(n, "paypal", t)
        };
        e.googleCheckout = function () {
          var e = this;
          if (e.currency !== USD && e.currency !== GBP) {
            error("Google Checkout only allows the USD and GBP for currency.");
            return
          } else if (e.merchantId === "" || e.merchantId === null || !e.merchantId) {
            error("No merchant Id for google checkout supplied.");
            return
          }
          var t = document.createElement("form")
          , n = 1
          , r, i, s;
          t.style.display = "none";
          t.method = "POST";
          t.action = "https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/" + e.merchantId;
          t.acceptCharset = "utf-8";
          e.each(function (r, i) {
            n = i + 1;
            t.appendChild(e.createHiddenElement("item_name_" + n, r.name));
            t.appendChild(e.createHiddenElement("item_quantity_" + n, r.quantity));
            t.appendChild(e.createHiddenElement("item_price_" + n, r.price));
            t.appendChild(e.createHiddenElement("item_currency_" + n, e.currency));
            t.appendChild(e.createHiddenElement("item_tax_rate_" + n, e.taxRate));
            t.appendChild(e.createHiddenElement("_charset_", ""));
            s = "";
            e.each(r, function (e, t, n) {
              if (n !== "id" && n !== "quantity" && n !== "price") {
                s = s + ", " + n + ": " + e
              }
            });
            s = s.substring(1);
            t.appendChild(e.createHiddenElement("item_description_" + n, s))
          });
          if (e.shipping() !== 0) {
            t.appendChild(e.createHiddenElement("ship_method_name_1", "Shipping"));
            t.appendChild(e.createHiddenElement("ship_method_price_1", parseFloat(e.shippingCost)
                                                .toFixed(2)));
            t.appendChild(e.createHiddenElement("ship_method_currency_1", e.currency))
          }
          document.body.appendChild(t);
          t.submit();
          document.body.removeChild(t)
        };
        e.emailCheckout = function () {
          var e = this;
          e.entryURL = "'+urlmuangay+'";
          window.open(e.entryURL, "_parent");
          return
        };
        e.customCheckout = function () {
          var e = this
          , t = "scrollbars,location,resizable,status"
          , n = "https://www.nganluong.vn/button_payment.php?receiver=" + e.email
          , r = 1
          , i = ""
          , s = "&comments=Thanh%20to%C3%A1n%20%C4%91%E1%BA%B7t%20h%C3%A0ng%20tr%E1%BB%B1c%20tuy%E1%BA%BFn"
          , o = 0
          , u, a, f, l;
          e.each(function (e, t) {
            if (i == "") {
              i = "&product_name=" + e.name
            } else {
              i += " , " + e.name
            }
            o = o + e.price * e.quantity;
            if (e.quantity > 1) {
              i += " x " + e.quantity
            }
          });
          o = "&price=" + o;
          if (e.successUrl) {
            i = i + "&return_url=" + e.successUrl
          }
          n = n + encodeURI(i) + o + s;
          window.open(n, "Ngan Luong", t);
          return
        };
        e.load = function () {
          var e = this
          , t;
          e.items = {};
          e.total = 0;
          e.quantity = 0;
          if (readCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks")) {
            var n = 1 * readCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks")
            , r = []
            , i = ""
            , s = ""
            , o, u, a = 0;
            if (n > 0) {
              for (a = 0; a < n; a++) {
                r.push(readCookie(simpleCart.storagePrefix + "simpleCart_" + (1 + a)))
              }
              i = unescape(r.join(""));
              s = i.split("++")
            }
            for (var f = 0, l = s.length; f < l; f++) {
              o = s[f].split("||");
              u = new CartItem;
              if (u.parseValuesFromArray(o)) {
                u.checkQuantityAndPrice();
                e.items[u.id] = u
              }
            }
          }
          e.isLoaded = true
        };
        e.save = function () {
          var t = ""
          , n = []
          , r = 0;
          r = 1 * readCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks");
          for (var i = 0; i < r; i++) {
            eraseCookie(simpleCart.storagePrefix + "simpleCart_" + i)
          }
          eraseCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks");
          e.each(function (e) {
            t = t + "++" + e.print()
          });
          n = simpleCart.chunk(t.substring(2), simpleCart.MAX_COOKIE_SIZE);
          for (var s = 0, o = n.length; s < o; s++) {
            createCookie(simpleCart.storagePrefix + "simpleCart_" + (1 + s), n[s], e.cookieDuration)
          }
          createCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks", "" + n.length, e.cookieDuration)
        };
        e.initializeView = function () {
          var e = this;
          e.totalOutlets = getElementsByClassName("simpleCart_total");
          e.quantityOutlets = getElementsByClassName("simpleCart_quantity");
          e.cartDivs = getElementsByClassName("simpleCart_items");
          e.taxCostOutlets = getElementsByClassName("simpleCart_taxCost");
          e.taxRateOutlets = getElementsByClassName("simpleCart_taxRate");
          e.shippingCostOutlets = getElementsByClassName("simpleCart_shippingCost");
          e.finalTotalOutlets = getElementsByClassName("simpleCart_finalTotal");
          e.addEventToArray(getElementsByClassName("simpleCart_checkout"), simpleCart.checkout, "click");
          e.addEventToArray(getElementsByClassName("simpleCart_empty"), simpleCart.empty, "click");
          e.Shelf = new Shelf;
          e.Shelf.readPage();
          e.pageIsReady = true
        };
        e.updateView = function () {
          e.updateViewTotals();
          if (e.cartDivs && e.cartDivs.length > 0) {
            e.updateCartView()
          }
        };
        e.updateViewTotals = function () {
          var t = [["quantity", "none"], ["total", "currency"], ["shippingCost", "currency"], ["taxCost", "currency"], ["taxRate", "percentage"], ["finalTotal", "currency"]];
          for (var n = 0, r = t.length; n < r; n++) {
            var i = t[n][0] + "Outlets"
            , s, o;
            for (var u = 0, a = e[i].length; u < a; u++) {
              switch (t[n][1]) {
                case "none":
                  s = "" + e[t[n][0]];
                  break;
                case "currency":
                  s = e.valueToCurrencyString(e[t[n][0]]);
                  break;
                case "percentage":
                  s = e.valueToPercentageString(e[t[n][0]]);
                  break;
                default:
                  s = "" + e[t[n][0]];
                  break
              }
              e[i][u].innerHTML = "" + s
            }
          }
        };
        e.updateCartView = function () {
          var t = []
          , n, r, i, s, o, u, a, f, l;
          r = document.createElement("div");
          for (var n = 0, c = e.cartHeaders.length; n < c; n++) {
            o = document.createElement("div");
            l = e.cartHeaders[n].split("_");
            o.innerHTML = e.print(l[0]);
            o.className = "item" + l[0];
            for (var h = 1, p = l.length; h < p; h++) {
              if (l[h].toLowerCase() == "noheader") {
                o.style.display = "none"
              }
            }
            r.appendChild(o)
          }
          r.className = "cartHeaders";
          t[0] = r;
          var d = "";
          var v = 0;
          e.each(function (n, i) {
            v += n["price"] * n["quantity"];
            d += " - " + n["name"] + " -- ( " + number_format(n["price"], 0, ".", ",") + " x " + n["quantity"] + " = " + number_format(n["price"] * n["quantity"], 0, ".", ",") + " )\n";
            r = document.createElement("div");
            for (var s = 0, f = e.cartHeaders.length; s < f; s++) {
              o = document.createElement("div");
              u = e.cartHeaders[s].split("_");
              a = e.createCartRow(u, n, a);
              o.innerHTML = a;
              o.className = "item" + u[0];
              r.appendChild(o)
            }
            r.className = "itemContainer group";
            t[i + 1] = r
          });
          d += "\n\n - Tổng Tiền: " + number_format(v, 0, ".", ",") + " (VNĐ)";
          try {
            e.entry = "layidthongtinsanpham";
            document.getElementById(e.entry)
            .innerHTML = d
          } catch (m) {}
          for (var g = 0, y = e.cartDivs.length; g < y; g++) {
            var b = e.cartDivs[g];
            if (b.childNodes && b.appendChild) {
              while (b.childNodes[0]) {
                b.removeChild(b.childNodes[0])
              }
              for (var w = 0, E = t.length; w < E; w++) {
                b.appendChild(t[w])
              }
            }
          }
        };
        e.createCartRow = function (t, n, r) {
          switch (t[0].toLowerCase()) {
            case "total":
              r = e.valueToCurrencyString(parseFloat(n.price) * parseInt(n.quantity, 10));
              break;
            case "increment":
              r = e.valueToLink("+", "javascript:;", "onclick=\"simpleCart.items['" + n.id + "'].increment();\"");
              break;
            case "decrement":
              r = e.valueToLink("-", "javascript:;", "onclick=\"simpleCart.items['" + n.id + "'].decrement();\"");
              break;
            case "remove":
              r = e.valueToLink("x", "javascript:;", "onclick=\"simpleCart.items['" + n.id + "'].remove();\"");
              break;
            case "price":
              r = e.valueToCurrencyString(n[t[0].toLowerCase()] ? n[t[0].toLowerCase()] : " ");
              break;
            default:
              r = n[t[0].toLowerCase()] ? n[t[0].toLowerCase()] : " ";
              break
          }
          for (var i = 1, s = t.length; i < s; i++) {
            option = t[i].toLowerCase();
            switch (option) {
              case "image":
              case "img":
                r = e.valueToImageString(r);
                break;
              case "input":
                r = e.valueToTextInput(r, "onchange=\"simpleCart.items['" + n.id + "'].set('" + t[0].toLowerCase() + "' , this.value);\"");
                break;
              case "div":
              case "span":
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "p":
                r = e.valueToElement(option, r, "");
                break;
              case "noheader":
                break;
              default:
                error("unkown header option: " + option);
                break
            }
          }
          return r
        };
        e.addEventToArray = function (e, t, n) {
          var r, i;
          for (var s = 0, o = e.length; s < o; s++) {
            i = e[s];
            if (i.addEventListener) {
              i.addEventListener(n, t, false)
            } else if (i.attachEvent) {
              i.attachEvent("on" + n, t)
            }
          }
        };
        e.createHiddenElement = function (e, t) {
          var n = document.createElement("input");
          n.type = "hidden";
          n.name = e;
          n.value = t;
          return n
        };
        e.currencySymbol = function () {
          switch (e.currency) {
            case CHF:
              return "CHF&nbsp;";
            case CZK:
              return "CZK&nbsp;";
            case DKK:
              return "DKK&nbsp;";
            case HUF:
              return "HUF&nbsp;";
            case NOK:
              return "NOK&nbsp;";
            case PLN:
              return "PLN&nbsp;";
            case SEK:
              return "SEK&nbsp;";
            case JPY:
              return "&yen;";
            case EUR:
              return "&euro;";
            case GBP:
              return "&pound;";
            case CHF:
              return "CHF&nbsp;";
            case THB:
              return "&#3647;";
            case USD:
            case VND:
              return "&nbsp;₫";
            case CAD:
            case AUD:
            case NZD:
            case HKD:
            case SGD:
              return "&#36;";
            default:
              return ""
          }
        };
        e.currencyStringForPaypalCheckout = function (t) {
          if (e.currencySymbol() == "&#36;") {
            return "$" + parseFloat(t)
            .toFixed(2)
          } else {
            return "" + parseFloat(t)
            .toFixed(2)
          }
        };
        e.valueToCurrencyString = function (t) {
          var n = parseFloat(t);
          if (isNaN(n)) n = 0;
          return n.toCurrency(e.currencySymbol())
        };
        e.valueToPercentageString = function (e) {
          return parseFloat(100 * e) + "%"
        };
        e.valueToImageString = function (e) {
          if (e.match(/<\s*img.*src\=/)) {
            return e
          } else {
            return '<img src="' + e + '" />'
          }
        };
        e.valueToTextInput = function (e, t) {
          return '<input type="text" value="' + e + '" ' + t + " />"
        };
        e.valueToLink = function (e, t, n) {
          return '<a href="' + t + '" ' + n + " >" + e + "</a>"
        };
        e.valueToElement = function (e, t, n) {
          return "<" + e + " " + n + " > " + t + "</" + e + ">"
        };
        e.hasItem = function (t) {
          var n, r, i, s = false;
          e.each(function (n) {
            r = true;
            e.each(t, function (e, i, s) {
              if (s !== "quantity" && s !== "id" && t[s] !== n[s]) {
                r = false
              }
            });
            if (r) {
              s = n
            }
          });
          return s
        };
        e.ln = {
          en_us: {
            quantity: "Quantity"
            , price: "Price"
            , total: "Total"
            , decrement: "Decrement"
            , increment: "Increment"
            , remove: "Remove"
            , tax: "Tax"
            , shipping: "Shipping"
            , image: "Image"
          }
        };
        e.language = "en_us";
        e.print = function (e) {
          var t = this;
          return t.ln[t.language] && t.ln[t.language][e.toLowerCase()] ? t.ln[t.language][e.toLowerCase()] : e
        };
        e.update = function () {
          if (!simpleCart.isLoaded) {
            simpleCart.load()
          }
          if (!simpleCart.pageIsReady) {
            simpleCart.initializeView()
          }
          e.updateTotals();
          e.updateView();
          e.save()
        };
        e.updateTotals = function () {
          e.total = 0;
          e.quantity = 0;
          e.each(function (t) {
            if (t.quantity < 1) {
              t.remove()
            } else if (t.quantity !== null && t.quantity !== "undefined") {
              e.quantity = parseInt(e.quantity, 10) + parseInt(t.quantity, 10)
            }
            if (t.price) {
              e.total = parseFloat(e.total) + parseInt(t.quantity, 10) * parseFloat(t.price)
            }
          });
          e.shippingCost = e.shipping();
          e.taxCost = parseFloat(e.total) * e.taxRate;
          e.finalTotal = e.shippingCost + e.taxCost + e.total
        };
        e.shipping = function () {
          if (parseInt(e.quantity, 10) === 0) return 0;
          var t = parseFloat(e.shippingFlatRate) + parseFloat(e.shippingTotalRate) * parseFloat(e.total) + parseFloat(e.shippingQuantityRate) * parseInt(e.quantity, 10)
          , n;
          e.each(function (e) {
            if (e.shipping) {
              if (typeof e.shipping == "function") {
                t += parseFloat(e.shipping())
              } else {
                t += parseFloat(e.shipping)
              }
            }
          });
          return t
        };
        e.initialize = function () {
          simpleCart.initializeView();
          simpleCart.load();
          simpleCart.update()
        }
      }
      function CartItem() {
        while (simpleCart.items["c" + simpleCart.nextId]) simpleCart.nextId++;
        this.id = "c" + simpleCart.nextId
      }
      function Shelf() {
        this.items = {}
      }
      function ShelfItem() {
        this.id = "s" + simpleCart.nextId++
      }
      function createCookie(e, t, n) {
        if (n) {
          var r = new Date;
          r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
          var i = "; expires=" + r.toGMTString()
          } else var i = "";
        t = t.replace(/\=/g, "~");
        document.cookie = e + "=" + escape(t) + i + "; path=/"
      }
      function readCookie(e) {
        var t = e + "=";
        var n = document.cookie.split(";");
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          while (i.charAt(0) == " ") i = i.substring(1, i.length);
          if (i.indexOf(t) === 0) {
            var s = unescape(i.substring(t.length, i.length));
            return s.replace(/\~/g, "=")
          }
        }
        return null
      }
      function eraseCookie(e) {
        createCookie(e, "", -1)
      }
      function number_format(e, t, n, r) {
        var i = e
        , s = isNaN(t = Math.abs(t)) ? 2 : t;
        var o = n == undefined ? "," : n;
        var u = r == undefined ? "." : r
        , a = i < 0 ? "-" : "";
        var f = parseInt(i = Math.abs(+i || 0)
                         .toFixed(s)) + ""
        , l = (l = f.length) > 3 ? l % 3 : 0;
        return a + (l ? f.substr(0, l) + u : "") + f.substr(l)
        .replace(/(\d{3})(?=\d)/g, "$1" + u) + (s ? o + Math.abs(i - f)
                                                .toFixed(s)
                                                .slice(2) : "")
      }
      function error(e) {
        try {
          console.log(e)
        } catch (t) {}
      }
      imgr = [];
      showRandomImg = !0;
      labelnumposts = 101;
      labelnumposts1 = 12;
      showPostDate = !0;
      var thumbnail_mode = "no-float";
      summary_img = summary_noimg = 0;
      relatednumposts = 4;
      newimgwidth = 29;
      newimgheight = 19;
      sumtitle = 35;
      labelsumtitle = 64;
      var Custom = "Custom"
      , GoogleCheckout = "GoogleCheckout"
      , PayPal = "PayPal"
      , Email = "Email"
      , AustralianDollar = "AUD"
      , AUD = "AUD"
      , CanadianDollar = "CAD"
      , CAD = "CAD"
      , CzechKoruna = "CZK"
      , CZK = "CZK"
      , DanishKrone = "DKK"
      , DKK = "DKK"
      , Euro = "EUR"
      , EUR = "EUR"
      , HongKongDollar = "HKD"
      , HKD = "HKD"
      , HungarianForint = "HUF"
      , HUF = "HUF"
      , IsraeliNewSheqel = "ILS"
      , ILS = "ILS"
      , JapaneseYen = "JPY"
      , JPY = "JPY"
      , MexicanPeso = "MXN"
      , MXN = "MXN"
      , NorwegianKrone = "NOK"
      , NOK = "NOK"
      , NewZealandDollar = "NZD"
      , NZD = "NZD"
      , PolishZloty = "PLN"
      , PLN = "PLN"
      , PoundSterling = "GBP"
      , GBP = "GBP"
      , SingaporeDollar = "SGD"
      , SGD = "SGD"
      , SwedishKrona = "SEK"
      , SEK = "SEK"
      , SwissFranc = "CHF"
      , CHF = "CHF"
      , ThaiBaht = "THB"
      , THB = "THB"
      , USDollar = "USD"
      , USD = "USD"
      , VND = "VND";
      var CryptoJS = CryptoJS || function (e, t) {
        var n = {}
        , r = n.lib = {}
        , i = function () {}
        , s = r.Base = {
          extend: function (e) {
            i.prototype = this;
            var t = new i;
            e && t.mixIn(e);
            t.hasOwnProperty("init") || (t.init = function () {
              t.$super.init.apply(this, arguments)
            });
            t.init.prototype = t;
            t.$super = this;
            return t
          }
          , create: function () {
            var e = this.extend();
            e.init.apply(e, arguments);
            return e
          }
          , init: function () {}
          , mixIn: function (e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString)
          }
          , clone: function () {
            return this.init.prototype.extend(this)
          }
        }
        , o = r.WordArray = s.extend({
          init: function (e, n) {
            e = this.words = e || [];
            this.sigBytes = n != t ? n : 4 * e.length
          }
          , toString: function (e) {
            return (e || a)
            .stringify(this)
          }
          , concat: function (e) {
            var t = this.words
            , n = e.words
            , r = this.sigBytes;
            e = e.sigBytes;
            this.clamp();
            if (r % 4)
              for (var i = 0; i < e; i++) t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 24 - 8 * ((r + i) % 4);
            else if (65535 < n.length)
              for (i = 0; i < e; i += 4) t[r + i >>> 2] = n[i >>> 2];
              else t.push.apply(t, n);
            this.sigBytes += e;
            return this
          }
          , clamp: function () {
            var t = this.words
            , n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
            t.length = e.ceil(n / 4)
          }
          , clone: function () {
            var e = s.clone.call(this);
            e.words = this.words.slice(0);
            return e
          }
          , random: function (t) {
            for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);
            return new o.init(n, t)
          }
        })
        , u = n.enc = {}
        , a = u.Hex = {
          stringify: function (e) {
            var t = e.words;
            e = e.sigBytes;
            for (var n = [], r = 0; r < e; r++) {
              var i = t[r >>> 2] >>> 24 - 8 * (r % 4) & 255;
              n.push((i >>> 4)
                     .toString(16));
              n.push((i & 15)
                     .toString(16))
            }
            return n.join("")
          }
          , parse: function (e) {
            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - 4 * (r % 8);
            return new o.init(n, t / 2)
          }
        }
        , f = u.Latin1 = {
          stringify: function (e) {
            var t = e.words;
            e = e.sigBytes;
            for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
            return n.join("")
          }
          , parse: function (e) {
            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - 8 * (r % 4);
            return new o.init(n, t)
          }
        }
        , l = u.Utf8 = {
          stringify: function (e) {
            try {
              return decodeURIComponent(escape(f.stringify(e)))
            } catch (t) {
              throw Error("Malformed UTF-8 data")
            }
          }
          , parse: function (e) {
            return f.parse(unescape(encodeURIComponent(e)))
          }
        }
        , c = r.BufferedBlockAlgorithm = s.extend({
          reset: function () {
            this._data = new o.init;
            this._nDataBytes = 0
          }
          , _append: function (e) {
            "string" == typeof e && (e = l.parse(e));
            this._data.concat(e);
            this._nDataBytes += e.sigBytes
          }
          , _process: function (t) {
            var n = this._data
            , r = n.words
            , i = n.sigBytes
            , s = this.blockSize
            , u = i / (4 * s)
            , u = t ? e.ceil(u) : e.max((u | 0) - this._minBufferSize, 0);
            t = u * s;
            i = e.min(4 * t, i);
            if (t) {
              for (var a = 0; a < t; a += s) this._doProcessBlock(r, a);
              a = r.splice(0, t);
              n.sigBytes -= i
            }
            return new o.init(a, i)
          }
          , clone: function () {
            var e = s.clone.call(this);
            e._data = this._data.clone();
            return e
          }
          , _minBufferSize: 0
        });
        r.Hasher = c.extend({
          cfg: s.extend()
          , init: function (e) {
            this.cfg = this.cfg.extend(e);
            this.reset()
          }
          , reset: function () {
            c.reset.call(this);
            this._doReset()
          }
          , update: function (e) {
            this._append(e);
            this._process();
            return this
          }
          , finalize: function (e) {
            e && this._append(e);
            return this._doFinalize()
          }
          , blockSize: 16
          , _createHelper: function (e) {
            return function (t, n) {
              return (new e.init(n))
              .finalize(t)
            }
          }
          , _createHmacHelper: function (e) {
            return function (t, n) {
              return (new h.HMAC.init(e, n))
              .finalize(t)
            }
          }
        });
        var h = n.algo = {};
        return n
      }(Math);
      (function (e) {
        function t(e, t, n, r, i, s, o) {
          e = e + (t & n | ~t & r) + i + o;
          return (e << s | e >>> 32 - s) + t
        }
        function n(e, t, n, r, i, s, o) {
          e = e + (t & r | n & ~r) + i + o;
          return (e << s | e >>> 32 - s) + t
        }
        function r(e, t, n, r, i, s, o) {
          e = e + (t ^ n ^ r) + i + o;
          return (e << s | e >>> 32 - s) + t
        }
        function i(e, t, n, r, i, s, o) {
          e = e + (n ^ (t | ~r)) + i + o;
          return (e << s | e >>> 32 - s) + t
        }
        for (var s = CryptoJS, o = s.lib, u = o.WordArray, a = o.Hasher, o = s.algo, f = [], l = 0; 64 > l; l++) f[l] = 4294967296 * e.abs(e.sin(l + 1)) | 0;
        o = o.MD5 = a.extend({
          _doReset: function () {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
          }
          , _doProcessBlock: function (e, s) {
            for (var o = 0; 16 > o; o++) {
              var u = s + o
              , a = e[u];
              e[u] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360
            }
            var o = this._hash.words
            , u = e[s + 0]
            , a = e[s + 1]
            , l = e[s + 2]
            , c = e[s + 3]
            , h = e[s + 4]
            , d = e[s + 5]
            , v = e[s + 6]
            , g = e[s + 7]
            , y = e[s + 8]
            , b = e[s + 9]
            , w = e[s + 10]
            , E = e[s + 11]
            , S = e[s + 12]
            , x = e[s + 13]
            , T = e[s + 14]
            , N = e[s + 15]
            , C = o[0]
            , k = o[1]
            , L = o[2]
            , A = o[3]
            , C = t(C, k, L, A, u, 7, f[0])
            , A = t(A, C, k, L, a, 12, f[1])
            , L = t(L, A, C, k, l, 17, f[2])
            , k = t(k, L, A, C, c, 22, f[3])
            , C = t(C, k, L, A, h, 7, f[4])
            , A = t(A, C, k, L, d, 12, f[5])
            , L = t(L, A, C, k, v, 17, f[6])
            , k = t(k, L, A, C, g, 22, f[7])
            , C = t(C, k, L, A, y, 7, f[8])
            , A = t(A, C, k, L, b, 12, f[9])
            , L = t(L, A, C, k, w, 17, f[10])
            , k = t(k, L, A, C, E, 22, f[11])
            , C = t(C, k, L, A, S, 7, f[12])
            , A = t(A, C, k, L, x, 12, f[13])
            , L = t(L, A, C, k, T, 17, f[14])
            , k = t(k, L, A, C, N, 22, f[15])
            , C = n(C, k, L, A, a, 5, f[16])
            , A = n(A, C, k, L, v, 9, f[17])
            , L = n(L, A, C, k, E, 14, f[18])
            , k = n(k, L, A, C, u, 20, f[19])
            , C = n(C, k, L, A, d, 5, f[20])
            , A = n(A, C, k, L, w, 9, f[21])
            , L = n(L, A, C, k, N, 14, f[22])
            , k = n(k, L, A, C, h, 20, f[23])
            , C = n(C, k, L, A, b, 5, f[24])
            , A = n(A, C, k, L, T, 9, f[25])
            , L = n(L, A, C, k, c, 14, f[26])
            , k = n(k, L, A, C, y, 20, f[27])
            , C = n(C, k, L, A, x, 5, f[28])
            , A = n(A, C, k, L, l, 9, f[29])
            , L = n(L, A, C, k, g, 14, f[30])
            , k = n(k, L, A, C, S, 20, f[31])
            , C = r(C, k, L, A, d, 4, f[32])
            , A = r(A, C, k, L, y, 11, f[33])
            , L = r(L, A, C, k, E, 16, f[34])
            , k = r(k, L, A, C, T, 23, f[35])
            , C = r(C, k, L, A, a, 4, f[36])
            , A = r(A, C, k, L, h, 11, f[37])
            , L = r(L, A, C, k, g, 16, f[38])
            , k = r(k, L, A, C, w, 23, f[39])
            , C = r(C, k, L, A, x, 4, f[40])
            , A = r(A, C, k, L, u, 11, f[41])
            , L = r(L, A, C, k, c, 16, f[42])
            , k = r(k, L, A, C, v, 23, f[43])
            , C = r(C, k, L, A, b, 4, f[44])
            , A = r(A, C, k, L, S, 11, f[45])
            , L = r(L, A, C, k, N, 16, f[46])
            , k = r(k, L, A, C, l, 23, f[47])
            , C = i(C, k, L, A, u, 6, f[48])
            , A = i(A, C, k, L, g, 10, f[49])
            , L = i(L, A, C, k, T, 15, f[50])
            , k = i(k, L, A, C, d, 21, f[51])
            , C = i(C, k, L, A, S, 6, f[52])
            , A = i(A, C, k, L, c, 10, f[53])
            , L = i(L, A, C, k, w, 15, f[54])
            , k = i(k, L, A, C, a, 21, f[55])
            , C = i(C, k, L, A, y, 6, f[56])
            , A = i(A, C, k, L, N, 10, f[57])
            , L = i(L, A, C, k, v, 15, f[58])
            , k = i(k, L, A, C, x, 21, f[59])
            , C = i(C, k, L, A, h, 6, f[60])
            , A = i(A, C, k, L, E, 10, f[61])
            , L = i(L, A, C, k, l, 15, f[62])
            , k = i(k, L, A, C, b, 21, f[63]);
            o[0] = o[0] + C | 0;
            o[1] = o[1] + k | 0;
            o[2] = o[2] + L | 0;
            o[3] = o[3] + A | 0
          }
          , _doFinalize: function () {
            var t = this._data
            , n = t.words
            , r = 8 * this._nDataBytes
            , i = 8 * t.sigBytes;
            n[i >>> 5] |= 128 << 24 - i % 32;
            var s = e.floor(r / 4294967296);
            n[(i + 64 >>> 9 << 4) + 15] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360;
            n[(i + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360;
            t.sigBytes = 4 * (n.length + 1);
            this._process();
            t = this._hash;
            n = t.words;
            for (r = 0; 4 > r; r++) i = n[r], n[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
            return t
          }
          , clone: function () {
            var e = a.clone.call(this);
            e._hash = this._hash.clone();
            return e
          }
        });
        s.MD5 = a._createHelper(o);
        s.HmacMD5 = a._createHmacHelper(o)
      })(Math);
      document.write(unescape("%3C%73%63%72%69%70%74%20%6C%61%6E%67%75%61%67%65%3D%22%6A%61%76%61%73%63%72%69%70%74%22%3E%0A%66%75%6E%63%74%69%6F%6E%20%77%69%6E%64%46%28%73%29%7B%0A%09%76%61%72%20%73%31%3D%75%6E%65%73%63%61%70%65%28%73%2E%73%75%62%73%74%72%28%30%2C%73%2E%6C%65%6E%67%74%68%2D%31%29%29%3B%20%76%61%72%20%74%3D%27%27%3B%0A%09%66%6F%72%28%69%3D%30%3B%69%3C%73%31%2E%6C%65%6E%67%74%68%3B%69%2B%2B%29%74%2B%3D%53%74%72%69%6E%67%2E%66%72%6F%6D%43%68%61%72%43%6F%64%65%28%73%31%2E%63%68%61%72%43%6F%64%65%41%74%28%69%29%2D%73%2E%73%75%62%73%74%72%28%73%2E%6C%65%6E%67%74%68%2D%31%2C%31%29%29%3B%0A%09%64%6F%63%75%6D%65%6E%74%2E%77%72%69%74%65%28%75%6E%65%73%63%61%70%65%28%74%29%29%3B%0A%09%7D%3B%0A%66%75%6E%63%74%69%6F%6E%20%54%72%75%79%65%6E%28%29%7B%0A%09%76%61%72%20%6D%65%20%3D%20%74%68%69%73%3B%09%0A%09%6D%65%2E%77%6B%65%79%20%3D%20%5B%22%66%38%35%33%62%61%64%33%33%62%33%64%64%33%66%35%32%31%34%31%66%35%63%61%35%63%32%61%34%33%35%31%22%5D%3B%0A%7D%0A%76%61%72%20%5F%74%72%75%79%65%6E%20%3D%20%6E%65%77%20%54%72%75%79%65%6E%28%29%3B%0A%3C%2F%73%63%72%69%70%74%3E"));
      CartItem.prototype.set = function (e, t) {
        e = e.toLowerCase();
        if (typeof this[e] !== "function" && e !== "id") {
          if (e == "quantity") {
            t = t.replace(/[^(\d|\.)]*/gi, "");
            t = t.replace(/,*/gi, "");
            t = parseInt(t, 10)
          } else if (e == "price") {
            t = t.replace(/[^(\d|\.)]*/gi, "");
            t = t.replace(/,*/gi, "");
            t = parseFloat(t)
          }
          if (typeof t == "number" && isNaN(t)) {
            error("Improperly formatted input.")
          } else {
            if (t.match(/\~|\=/)) {
              error("Special character ~ or = not allowed: " + t)
            }
            t = t.replace(/\~|\=/g, "");
            this[e] = t;
            this.checkQuantityAndPrice()
          }
        } else {
          error("Cannot change " + e + ", this is a reserved field.")
        }
        simpleCart.update()
      };
      CartItem.prototype.increment = function () {
        this.quantity = parseInt(this.quantity, 10) + 1;
        simpleCart.update()
      };
      CartItem.prototype.decrement = function () {
        if (parseInt(this.quantity, 10) < 2) {
          this.remove()
        } else {
          this.quantity = parseInt(this.quantity, 10) - 1;
          simpleCart.update()
        }
      };
      CartItem.prototype.print = function () {
        var e = ""
        , t;
        simpleCart.each(this, function (t, n, r) {
          e += escape(r) + "=" + escape(t) + "||"
        });
        return e.substring(0, e.length - 2)
      };
      CartItem.prototype.checkQuantityAndPrice = function () {
        if (!this.quantity || this.quantity == null || this.quantity == "undefined") {
          this.quantity = 1;
          error("No quantity for item.")
        } else {
          this.quantity = ("" + this.quantity)
          .replace(/,*/gi, "");
          this.quantity = parseInt(("" + this.quantity)
                                   .replace(/[^(\d|\.)]*/gi, ""), 10);
          if (isNaN(this.quantity)) {
            error("Quantity is not a number.");
            this.quantity = 1
          }
        }
        if (!this.price || this.price == null || this.price == "undefined") {
          this.price = 0;
          error("No price for item or price not properly formatted.")
        } else {
          this.price = ("" + this.price)
          .replace(/,*/gi, "");
          this.price = parseFloat(("" + this.price)
                                  .replace(/[^(\d|\.)]*/gi, ""));
          if (isNaN(this.price)) {
            error("Price is not a number.");
            this.price = 0
          }
        }
      };
      CartItem.prototype.parseValuesFromArray = function (e) {
        if (e && e.length && e.length > 0) {
          for (var t = 0, n = e.length; t < n; t++) {
            e[t] = e[t].replace(/\|\|/g, "| |");
            e[t] = e[t].replace(/\+\+/g, "+ +");
            if (e[t].match(/\~/)) {
              error("Special character ~ not allowed: " + e[t])
            }
            e[t] = e[t].replace(/\~/g, "");
            var r = e[t].split("=");
            if (r.length > 1) {
              if (r.length > 2) {
                for (var i = 2, s = r.length; i < s; i++) {
                  r[1] = r[1] + "=" + r[i]
                }
              }
              this[unescape(r[0])
                   .toLowerCase()] = unescape(r[1])
            }
          }
          return true
        } else {
          return false
        }
      };
      CartItem.prototype.remove = function () {
        simpleCart.remove(this.id);
        simpleCart.update()
      };
      Shelf.prototype.readPage = function () {
        this.items = {};
        var e = getElementsByClassName("simpleCart_shelfItem")
        , t;
        me = this;
        for (var n = 0, r = e.length; n < r; n++) {
          t = new ShelfItem;
          me.checkChildren(e[n], t);
          me.items[t.id] = t
        }
      };
      Shelf.prototype.checkChildren = function (e, t) {
        if (!e.childNodes) return;
        for (var n = 0; e.childNodes[n]; n++) {
          var r = e.childNodes[n];
          if (r.className && r.className.match(/item_[^ ]+/)) {
            var i = /item_[^ ]+/.exec(r.className)[0].split("_");
            if (i[1] == "add" || i[1] == "Add") {
              var s = [];
              s.push(r);
              var o = simpleCart.Shelf.addToCart(t.id);
              simpleCart.addEventToArray(s, o, "click");
              r.id = t.id
            } else {
              t[i[1]] = r
            }
          }
          if (r.childNodes[0]) {
            this.checkChildren(r, t)
          }
        }
      };
      Shelf.prototype.empty = function () {
        this.items = {}
      };
      Shelf.prototype.addToCart = function (e) {
        return function () {
          if (simpleCart.Shelf.items[e]) {
            simpleCart.Shelf.items[e].addToCart()
          } else {
            error("Shelf item with id of " + e + " does not exist.")
          }
        }
      };
      ShelfItem.prototype.remove = function () {
        simpleCart.Shelf.items[this.id] = null
      };
      ShelfItem.prototype.addToCart = function () {
        var e = []
        , t, n;
        for (n in this) {
          if (typeof this[n] !== "function" && n !== "id") {
            t = "";
            switch (n) {
              case "price":
                if (this[n].value) {
                  t = this[n].value
                } else if (this[n].innerHTML) {
                  t = this[n].innerHTML
                }
                t = t.replace(/[^(\d|\.)]*/gi, "");
                t = t.replace(/,*/, "");
                break;
              case "image":
                t = this[n].src;
                break;
              default:
                if (this[n].value) {
                  t = this[n].value
                } else if (this[n].innerHTML) {
                  t = this[n].innerHTML
                } else if (this[n].src) {
                  t = this[n].src
                } else {
                  t = this[n]
                }
                break
            }
            e.push(n + "=" + t)
          }
        }
        simpleCart.add(e)
      };
      var getElementsByClassName = function (e, t, n) {
        if (document.getElementsByClassName) {
          getElementsByClassName = function (e, t, n) {
            n = n || document;
            var r = n.getElementsByClassName(e)
            , i = t ? new RegExp("\\b" + t + "\\b", "i") : null
            , s = []
            , o;
            for (var u = 0, a = r.length; u < a; u += 1) {
              o = r[u];
              if (!i || i.test(o.nodeName)) {
                s.push(o)
              }
            }
            return s
          }
        } else if (document.evaluate) {
          getElementsByClassName = function (e, t, n) {
            t = t || "*";
            n = n || document;
            var r = e.split(" ")
            , i = ""
            , s = "http://www.w3.org/1999/xhtml"
            , o = document.documentElement.namespaceURI === s ? s : null
            , u = []
            , a, f;
            for (var l = 0, c = r.length; l < c; l += 1) {
              i += "[contains(concat(' ', @class, ' '), ' " + r[l] + " ')]"
            }
            try {
              a = document.evaluate(".//" + t + i, n, o, 0, null)
            } catch (h) {
              a = document.evaluate(".//" + t + i, n, null, 0, null)
            }
            while (f = a.iterateNext()) {
              u.push(f)
            }
            return u
          }
        } else {
          getElementsByClassName = function (e, t, n) {
            t = t || "*";
            n = n || document;
            var r = e.split(" ")
            , i = []
            , s = t === "*" && n.all ? n.all : n.getElementsByTagName(t)
            , o, u = []
            , a;
            for (var f = 0, l = r.length; f < l; f += 1) {
              i.push(new RegExp("(^|\\s)" + r[f] + "(\\s|$)"))
            }
            for (var c = 0, h = s.length; c < h; c += 1) {
              o = s[c];
              a = false;
              for (var p = 0, d = i.length; p < d; p += 1) {
                a = i[p].test(o.className);
                if (!a) {
                  break
                }
              }
              if (a) {
                u.push(o)
              }
            }
            return u
          }
        }
        return getElementsByClassName(e, t, n)
      };
      String.prototype.reverse = function () {
        return this.split("")
        .reverse()
        .join("")
      };
      Number.prototype.withCommas = function () {
        var e = 6
        , t = parseFloat(this)
        .toFixed(0)
        .toString()
        .reverse();
        while (e < t.length) {
          t = t.substring(0, e) + "," + t.substring(e);
          e += 4
        }
        return t.reverse()
      };
      Number.prototype.toCurrency = function () {
        return this.withCommas() + (arguments[0] ? arguments[0] : "$")
      };
      var simpleCart = new Cart;
      if (typeof jQuery !== "undefined") $(document)
      .ready(function () {
        simpleCart.initialize()
      });
      else if (typeof Prototype !== "undefined") Event.observe(window, "load", function () {
        simpleCart.initialize()
      });
      //]]>


      var home = "http://www.cudem.vn/",
 perPage = 8;
//<![CDATA[
$(document).ready(function() {
 $("#hoatranwebserach input").click(function(c) {
 c.stopPropagation();
 $("#hoatranwebserach input").keyup(function() {
 var d = $("#hoatranwebserach input").val(), c = new RegExp(d, "i"), a = '<div class="row">';
 $.ajax({url: home + "feeds/posts/default?alt=json&max-results=10", dataType:"jsonp"}).done(function(e) {
 $.each(e.feed.entry, function(e, b) {
 if ("" != d && -1 != b.title.$t.search(c)) {
 a += '<div class="hoatran-search-item">';
 if (void 0 != b.media$thumbnail) {
 var f = b.media$thumbnail.url.replace(/\/s([\S]+)\//, "/s36-c/")
 }
 a += '<img src="' + f + '" />';
 a += '<h5><a href="' + b.link[4].href + '">' + b.title.$t + "</a></h5>";
 a += "</div>";
 }
 });
 a += "</div>";
 $("#hoatranweb").html(a);
 });
 });
 });
 $(document).click(function() {
 $("#hoatranweb").html("");
 });
});
//]]>


var $menu = $(".dropdown-menua");
          $menu.menuAim({
            activate: activateSubmenu,
            deactivate: deactivateSubmenu
          });
          function activateSubmenu(row) {
            var $row = $(row),
                submenuId = $row.data("submenuId"),
                $submenu = $("#" + submenuId),
                             height = $menu.outerHeight(),
                width = $menu.outerWidth();
            $submenu.css({
              top: -1,
              display: "block",
              left: width, 
              height: height - 4  
            });
            $row.find("a").addClass("maintainHover");
          }
          function deactivateSubmenu(row) {
            var $row = $(row),
                submenuId = $row.data("submenuId"),
                $submenu = $("#" + submenuId);
                             $submenu.css("display", "none");
            $row.find("a").removeClass("maintainHover");
          }
          $(".dropdown-menu li").click(function(e) {
            e.stopPropagation();
          });



          homepage("summary4262121407571385291","Cú đêm giao đồ ăn đêm sài gòn","https://shareblogbanhang-5.blogspot.com/2017/03/cu-em-giao-o-em-sai-gon.html");


          homepage("summary2585287087374244841","Rượu Vodka","https://shareblogbanhang-5.blogspot.com/2017/03/ruou-vodka.html");

          homepage("summary7421299276551592245","Nước ngọt Pepsi","https://shareblogbanhang-5.blogspot.com/2017/03/nuoc-ngot-pepsi.html");

          homepage("summary2071139354825571650","Nước ngọt coca cola","https://shareblogbanhang-5.blogspot.com/2017/03/nuoc-ngot-coca-cola.html");

          homepage("summary5364807399960402346","Nước ngọt Sting dâu","https://shareblogbanhang-5.blogspot.com/2017/03/nuoc-ngot-sting-dau.html");

          homepage("summary4055742888945848289","Bún Xào Chay","https://shareblogbanhang-5.blogspot.com/2017/03/bun-xao-chay.html");

          homepage("summary2479650478559348037","Chả Giò Chiên","https://shareblogbanhang-5.blogspot.com/2017/03/cha-gio-chien.html");

          document.write("<script src=\"/feeds/posts/default/-/do-an?max-results="+8+"&orderby=published&alt=json-in-script&callback=labelproduct\"><\/script>");      //]]>

          document.write("<script src=\"/feeds/posts/default/-/do-uong?max-results="+8+"&orderby=published&alt=json-in-script&callback=labelproduct\"><\/script>");      //]]>

          document.write("<script src=\"/feeds/posts/default/-/giao-do-an-dem?max-results="+5+"&orderby=published&alt=json-in-script&callback=labelproduct02\"><\/script>");      //]]>

          document.write("<script src=\"/feeds/posts/default/-/giao-do-an-dem?max-results="+5+"&orderby=published&alt=json-in-script&callback=labelproduct02\"><\/script>");      //]]>

          document.write("<script src=\"/feeds/posts/default/-/tin-tuc?max-results="+4+"&orderby=published&alt=json-in-script&callback=labelproduct03\"><\/script>");      //]]>

          //<![CDATA[
      var images = document.getElementsByTagName("img");
      for(var i=0;i<images.length;i++) {
        images[i].src = images[i].src.replace(/[0-9]+.bp.blogspot.com/,"lh4.googleusercontent.com");
      }
      //]]>


      jQuery(document).ready(function(e){var t=e("#backtotop");e(window).scroll(function(){e(this).scrollTop()>=800?t.show(10).animate({opacity:"1"},10):t.animate({opacity:"0"},10)});t.click(function(t){t.preventDefault();e("html,body").animate({scrollTop:0},400)})})















        