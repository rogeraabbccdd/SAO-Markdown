(function(e){function t(t){for(var o,i,a=t[0],s=t[1],l=t[2],d=0,f=[];d<a.length;d++)i=a[d],r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"head"},[o("b-col",{staticClass:"align-self-center text-center",attrs:{cols:"12"}},[o("img",{attrs:{src:n("eb3b"),alt:""}})])],1),o("b-row",{staticClass:"content"},[e.editing?o("b-col",{attrs:{cols:"12"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})]):o("b-col",{staticClass:"content",attrs:{cols:"12"},on:{click:e.edit}},[o("div",{staticClass:"marked",domProps:{innerHTML:e._s(e.markdown)}})])],1),o("b-row",{staticClass:"foot"},[1==e.editing?o("b-col",{staticClass:"align-self-center text-center",attrs:{cols:"6"},on:{click:e.save}},[o("img",{staticClass:"md-btn",attrs:{src:n("a0ce"),alt:""}})]):e._e(),1==e.editing?o("b-col",{staticClass:"align-self-center text-center",attrs:{cols:"6"},on:{click:e.discard}},[o("img",{staticClass:"md-btn",attrs:{src:n("586d"),alt:""}})]):e._e()],1)],1)],1)},c=[],i=(n("6762"),n("2fdb"),n("9b70"),n("0e54")),a=n.n(i),s=n("1487"),l=n.n(s);a.a.setOptions({renderer:new a.a.Renderer,highlight:function(e){return l.a.highlightAuto(e).value}});var u={name:"app",data:function(){var e="<style>\np {\ntext-align: center;\n}\nimg {\n  margin: 0 auto;\n}\n</style>\n![welcome](./img/welcome.png)  \n\n\n**Click here to edit notes**\n",t=e,n=localStorage.getItem("markdown-note");null!==n&&n.length>0&&""!==n.trim()&&(t=localStorage.getItem("markdown-note"));var o=!1,r="";return{content:t,defContent:e,editing:o,cached:r}},computed:{markdown:function(){return a()(this.content)}},methods:{edit:function(){this.cached=this.content,this.editing=!0},save:function(){localStorage.setItem("markdown-note",this.content),0===this.content.length&&(this.content=this.defContent),this.editing=!1;for(var e=this.$el.querySelectorAll("code"),t=0;t<e.length;t++)e[t].classList.add("hljs")},discard:function(){this.content=this.cached,this.editing=!1},codeClass:function(){var e=this;setTimeout(function(){for(var t=e.$el.querySelectorAll("code"),n=0;n<t.length;n++)t[n].getAttribute("class").includes("language-")&&t[n].classList.add("hljs")},50)}},watch:{editing:function(e){e||this.codeClass()}},created:function(){this.codeClass()}},d=u,f=(n("034f"),n("2877")),A=Object(f["a"])(d,r,c,!1,null,null,null),p=A.exports,g=n("9483");Object(g["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var h=n("5f5b");n("f9e3"),n("2dd8");o["default"].use(h["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(p)}}).$mount("#app")},"586d":function(e,t,n){e.exports=n.p+"img/discard.f9db3703.png"},"64a9":function(e,t,n){},a0ce:function(e,t,n){e.exports=n.p+"img/save.4c3a67e4.png"},eb3b:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.71ff3f42.js.map