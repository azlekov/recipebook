(self.webpackChunkrecipebook=self.webpackChunkrecipebook||[]).push([[233],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4575:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},3913:function(e){function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},9754:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2205:function(e,t,n){var r=n(9489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8585:function(e,t,n){var r=n(8).default,a=n(1506);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),i=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},8:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},6431:function(e,t,n){"use strict";var r=n(319),a=n(2205),o=n(8585),i=n(9754),s=n(3913),l=n(4575);function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}t.B7=t.cf=t.o7=t.pp=void 0;var c=/(--.*)|(\[-(.|\n)+?-\])/g,p=/@(?:([^@#~]+?)(?:{(.*?)}|{\s*}))|@((?:[^@#~\s])+)/,f=/#(?:([^@#~]+?)(?:{\s*}))|#((?:[^@#~\s])+)/,m=/~([^@#~]*){([0-9]+(?:[\/|\.][0-9]+)?)%(.+?)}/,d=/^>>\s*(.*?):\s*(.*)$/,y=s((function e(t){l(this,e),t instanceof Array?this.raw=t[0]:"string"==typeof t?this.raw=t:"raw"in t&&(this.raw=t.raw)})),x=function(e){a(n,e);var t=u(n);function n(e){var r,a,o;return l(this,n),(r=t.call(this,e)).metadata=[],r.ingredients=[],r.cookware=[],r.timers=[],r.steps=[],null===(o=null===(a=null==e?void 0:e.replace(c,""))||void 0===a?void 0:a.split("\n"))||void 0===o||o.forEach((function(e){if(e.trim()){var t=new v(e);0!=t.line.length&&(1==t.line.length&&t.line[0]instanceof k?r.metadata.push(t.line[0]):(t.line.forEach((function(e){e instanceof h?r.ingredients.push(e):e instanceof b?r.cookware.push(e):e instanceof w&&r.timers.push(e)})),r.steps.push(t)))}})),r}return s(n,[{key:"calculateTotalTime",value:function(){return this.timers.reduce((function(e,t){return e+(t.seconds||0)}),0)}}]),n}(y);t.pp=x;var v=function(e){a(n,e);var t=u(n);function n(e){var r;return l(this,n),(r=t.call(this,e)).line=[],e&&"string"==typeof e?r.line=r.parseLine(e):e&&("line"in e&&(r.line=e.line),"image"in e&&(r.image=e.image)),r}return s(n,[{key:"parseLine",value:function(e){var t,n,a=[];if(t=d.exec(e))return[new k(t)];if((t=p.exec(e))?n=new h(t):(t=f.exec(e))?n=new b(t):(t=m.exec(e))&&(n=new w(t)),n&&n.raw){var o=e.split(n.raw);return e.startsWith(n.raw)||a.unshift.apply(a,r(this.parseLine(o[0]))),a.push(n),e.endsWith(n.raw)||a.push.apply(a,r(this.parseLine(o[1]))),a}return[e]}}]),n}(y);var h=function(e){a(n,e);var t=u(n);function n(e){var r,a;if(l(this,n),r=t.call(this,e),e instanceof Array||"string"==typeof e){var o=e instanceof Array?e:p.exec(e);if(!o||4!=o.length)throw"error parsing ingredient: '".concat(e,"'");r.name=(o[1]||o[3]).trim();var i=null===(a=o[2])||void 0===a?void 0:a.split("%");r.amount=i&&i.length>0?i[0].trim():"1",r.amount||(r.amount="1"),r.quantity=r.amount?g(r.amount):1,r.units=i&&i.length>1?i[1].trim():""}else"name"in e&&(r.name=e.name),"amount"in e&&(r.amount=e.amount),"quantity"in e&&(r.quantity=e.quantity),"units"in e&&(r.units=e.units);return r}return s(n)}(y);t.o7=h;var b=function(e){a(n,e);var t=u(n);function n(e){var r;if(l(this,n),r=t.call(this,e),e instanceof Array||"string"==typeof e){var a=e instanceof Array?e:f.exec(e);if(!a||3!=a.length)throw"error parsing cookware: '".concat(e,"'");r.name=(a[1]||a[2]).trim()}else"name"in e&&(r.name=e.name);return r}return s(n)}(y);t.cf=b;var w=function(e){a(n,e);var t=u(n);function n(e){var r;if(l(this,n),r=t.call(this,e),e instanceof Array||"string"==typeof e){var a=e instanceof Array?e:m.exec(e);if(!a||4!=a.length)throw"error parsing timer: '".concat(e,"'");r.name=a[1]?a[1].trim():"",r.amount=a[2]?a[2].trim():0,r.units=a[3]?a[3].trim():"",r.quantity=r.amount?g(r.amount):0,r.seconds=n.getSeconds(r.quantity,r.units)}else"name"in e&&(r.name=e.name),"amount"in e&&(r.amount=e.amount),"quantity"in e&&(r.quantity=e.quantity),"units"in e&&(r.units=e.units),"seconds"in e&&(r.seconds=e.seconds);return r}return s(n,null,[{key:"getSeconds",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",n=0;return e>0&&(t.toLowerCase().startsWith("s")?n=e:t.toLowerCase().startsWith("m")?n=60*e:t.toLowerCase().startsWith("h")&&(n=60*e*60)),n}}]),n}(y);function g(e){var t=0;if(parseFloat(e)+""==e)t=parseFloat(e);else if(e.includes("/")){var n=e.split("/");if(2==n.length){var r=parseFloat(n[0].trim()),a=parseFloat(n[1].trim());t=r+""==n[0].trim()&&a+""==n[1].trim()?r/a:NaN}}else t=NaN;return t}t.B7=w;var k=function(e){a(n,e);var t=u(n);function n(e){var r;if(l(this,n),r=t.call(this,e),e instanceof Array||"string"==typeof e){var a=e instanceof Array?e:d.exec(e);if(!a||3!=a.length)throw"error parsing metadata: '".concat(e,"'");r.key=a[1].trim(),r.value=a[2].trim()}else"key"in e&&(r.key=e.key),"value"in e&&(r.value=e.value);return r}return s(n)}(y)},8976:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(6431),o=n(1597),i=function(e){var t=e.name,n=e.recipe;return r.createElement("div",{className:"p-4"},r.createElement("h2",{className:"text-3xl font-semibold mt-2"},t),r.createElement("section",{className:"mt-4 overflow-x-auto"},r.createElement("table",{className:"table-fixed"},r.createElement("tbody",null,n.metadata.map((function(e){var t;return r.createElement("tr",{key:e.key},r.createElement("td",{className:"whitespace-nowrap font-medium pr-4 align-top"},e.key,":"),r.createElement("td",{className:"break-all align-top"},null!==(t=e.value)&&void 0!==t&&t.startsWith("http")?r.createElement("a",{href:e.value,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline"},e.value):e.value))}))))),r.createElement("div",{className:"flex flex-wrap mt-8 gap-4"},r.createElement("section",{className:"p-4 border border-zinc-300 rounded min-w-[10rem] w-full md:w-auto relative"},r.createElement("h3",{className:"text-xs font-bold text-zinc-700 uppercase bg-white px-3 inline-block absolute -top-2 left-[5px]"},"Ingredients"),r.createElement("ul",{className:"mt-2 list-disc list-inside space-y-0.5"},n.ingredients.map((function(e){return r.createElement("li",{key:e.name,className:"pr-2"},r.createElement("span",{className:"font-medium text-rose-700"},e.quantity," ",e.units)," ",r.createElement("span",null,e.name))})))),r.createElement("section",{className:"p-4 border border-zinc-300 rounded min-w-[10rem] w-full md:w-auto relative"},r.createElement("h3",{className:"text-xs font-bold text-zinc-700 uppercase bg-white px-3 inline-block absolute -top-2 left-[5px]"},"Cookware"),r.createElement("ul",{className:"mt-2 list-inside list-disc"},n.cookware.map((function(e){return r.createElement("li",{key:e.name},r.createElement("span",null,e.name))}))))),r.createElement("ol",{className:"list-decimal ml-6 mt-10 space-y-4"},n.steps.map((function(e,t){return r.createElement("li",{key:t,className:"text-lg leading-relaxed"},e.line.map((function(e,t){return"string"==typeof e?r.createElement("span",{key:t,"data-token":"text"},e):e instanceof a.B7?r.createElement("span",{key:t,"data-token":"timer",title:e.name},e.quantity," ",e.units):e instanceof a.o7?r.createElement("span",{key:t,"data-token":"ingredient",title:e.quantity+" "+e.units},e.name):e instanceof a.cf?r.createElement("span",{key:t,"data-token":"cookware"},e.name):void 0})))}))),r.createElement("div",{className:"h-20"}))};var s=function(e){var t=e.data.cookRecipe,n=new a.pp(t.internal.content);return r.createElement("div",{className:"wrapper"},r.createElement("header",null,r.createElement(o.Link,{to:"/"},'Go back to "Home"')),r.createElement("main",null,r.createElement(i,{name:t.recipe.title,recipe:n})))}}}]);
//# sourceMappingURL=component---src-pages-recipes-cook-recipe-slug-jsx-42ddacd4639e964d409f.js.map