(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_education=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_education||[]).push([[146],{5089:function(t,n,r){var e=r(930),o=r(9268),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a function")}},1449:function(t,n,r){var e=r(1956),o=r(9268),i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not a constructor")}},6112:function(t,n,r){var e=r(8759),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw i(o(t)+" is not an object")}},6198:function(t,n,r){var e=r(4088),o=r(7740),i=r(2871),u=function(t){return function(n,r,u){var c,a=e(n),f=i(a),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},2306:function(t,n,r){var e=r(8240),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},375:function(t,n,r){var e=r(2371),o=r(930),i=r(2306),u=r(211)("toStringTag"),c=Object,a="Arguments"==i(function(){return arguments}());t.exports=e?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(r){}}(n=c(t),u))?r:a?i(n):"Object"==(e=i(n))&&o(n.callee)?"Arguments":e}},8474:function(t,n,r){var e=r(9606),o=r(6095),i=r(4399),u=r(7826);t.exports=function(t,n,r){for(var c=o(n),a=u.f,f=i.f,s=0;s<c.length;s++){var l=c[s];e(t,l)||r&&e(r,l)||a(t,l,f(n,l))}}},2585:function(t,n,r){var e=r(5283),o=r(7826),i=r(5736);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},5736:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},1343:function(t,n,r){var e=r(930),o=r(7826),i=r(3712),u=r(9444);t.exports=function(t,n,r,c){c||(c={});var a=c.enumerable,f=void 0!==c.name?c.name:n;if(e(r)&&i(r,f,c),c.global)a?t[n]=r:u(n,r);else{try{c.unsafe?t[n]&&(a=!0):delete t[n]}catch(s){}a?t[n]=r:o.f(t,n,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},9444:function(t,n,r){var e=r(2086),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},5283:function(t,n,r){var e=r(3677);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7886:function(t){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r}},821:function(t,n,r){var e=r(2086),o=r(8759),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},4999:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},1448:function(t,n,r){var e,o,i=r(2086),u=r(4999),c=i.process,a=i.Deno,f=c&&c.versions||a&&a.version,s=f&&f.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},8684:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:function(t,n,r){var e=r(2086),o=r(4399).f,i=r(2585),u=r(1343),c=r(9444),a=r(8474),f=r(7189);t.exports=function(t,n){var r,s,l,p,v,m=t.target,h=t.global,y=t.stat;if(r=h?e:y?e[m]||c(m,{}):(e[m]||{}).prototype)for(s in n){if(p=n[s],l=t.dontCallGetSet?(v=o(r,s))&&v.value:r[s],!f(h?s:m+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},3677:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},6059:function(t,n,r){var e=r(3677);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},9413:function(t,n,r){var e=r(6059),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},4398:function(t,n,r){var e=r(5283),o=r(9606),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,f=c&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:f}},8240:function(t,n,r){var e=r(6059),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},563:function(t,n,r){var e=r(2086),o=r(930);t.exports=function(t,n){return arguments.length<2?(r=e[t],o(r)?r:void 0):e[t]&&e[t][n];var r}},2964:function(t,n,r){var e=r(5089),o=r(1858);t.exports=function(t,n){var r=t[n];return o(r)?void 0:e(r)}},2086:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},9606:function(t,n,r){var e=r(8240),o=r(3060),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},7153:function(t){t.exports={}},6761:function(t,n,r){var e=r(5283),o=r(3677),i=r(821);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:function(t,n,r){var e=r(8240),o=r(3677),i=r(2306),u=Object,c=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?c(t,""):u(t)}:u},9277:function(t,n,r){var e=r(8240),o=r(930),i=r(4489),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},3278:function(t,n,r){var e,o,i,u=r(640),c=r(2086),a=r(8759),f=r(2585),s=r(9606),l=r(4489),p=r(8944),v=r(7153),m="Object already initialized",h=c.TypeError,y=c.WeakMap;if(u||l.state){var b=l.state||(l.state=new y);b.get=b.get,b.has=b.has,b.set=b.set,e=function(t,n){if(b.has(t))throw h(m);return n.facade=t,b.set(t,n),n},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var g=p("state");v[g]=!0,e=function(t,n){if(s(t,g))throw h(m);return n.facade=t,f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}}}},930:function(t,n,r){var e=r(7886),o=e.all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},1956:function(t,n,r){var e=r(8240),o=r(3677),i=r(930),u=r(375),c=r(563),a=r(9277),f=function(){},s=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=e(p.exec),m=!p.exec(f),h=function(t){if(!i(t))return!1;try{return l(f,s,t),!0}catch(n){return!1}},y=function(t){if(!i(t))return!1;switch(u(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!v(p,a(t))}catch(n){return!0}};y.sham=!0,t.exports=!l||o((function(){var t;return h(h.call)||!h(Object)||!h((function(){t=!0}))||t}))?y:h},7189:function(t,n,r){var e=r(3677),o=r(930),i=/#|\.prototype\./,u=function(t,n){var r=a[c(t)];return r==s||r!=f&&(o(n)?e(n):!!n)},c=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},1858:function(t){t.exports=function(t){return null==t}},8759:function(t,n,r){var e=r(930),o=r(7886),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:e(t)||t===i}:function(t){return"object"==typeof t?null!==t:e(t)}},3296:function(t){t.exports=!1},2071:function(t,n,r){var e=r(563),o=r(930),i=r(5516),u=r(1876),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,c(t))}},2871:function(t,n,r){var e=r(4005);t.exports=function(t){return e(t.length)}},3712:function(t,n,r){var e=r(8240),o=r(3677),i=r(930),u=r(9606),c=r(5283),a=r(4398).CONFIGURABLE,f=r(9277),s=r(3278),l=s.enforce,p=s.get,v=String,m=Object.defineProperty,h=e("".slice),y=e("".replace),b=e([].join),g=c&&!o((function(){return 8!==m((function(){}),"length",{value:8}).length})),d=String(String).split("String"),x=t.exports=function(t,n,r){"Symbol("===h(v(n),0,7)&&(n="["+y(v(n),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!u(t,"name")||a&&t.name!==n)&&(c?m(t,"name",{value:n,configurable:!0}):t.name=n),g&&r&&u(r,"arity")&&t.length!==r.arity&&m(t,"length",{value:r.arity});try{r&&u(r,"constructor")&&r.constructor?c&&m(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var e=l(t);return u(e,"source")||(e.source=b(d,"string"==typeof n?n:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||f(this)}),"toString")},5681:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},8722:function(t,n,r){"use strict";var e=r(5089),o=TypeError,i=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw o("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new i(t)}},7826:function(t,n,r){var e=r(5283),o=r(6761),i=r(8202),u=r(6112),c=r(2258),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";n.f=e?i?function(t,n,r){if(u(t),n=c(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&v in r&&!r[v]){var e=s(t,n);e&&e[v]&&(t[n]=r.value,r={configurable:p in r?r[p]:e[p],enumerable:l in r?r[l]:e[l],writable:!1})}return f(t,n,r)}:f:function(t,n,r){if(u(t),n=c(n),u(r),o)try{return f(t,n,r)}catch(e){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},4399:function(t,n,r){var e=r(5283),o=r(9413),i=r(7446),u=r(5736),c=r(4088),a=r(2258),f=r(9606),s=r(6761),l=Object.getOwnPropertyDescriptor;n.f=e?l:function(t,n){if(t=c(t),n=a(n),s)try{return l(t,n)}catch(r){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},62:function(t,n,r){var e=r(1352),o=r(8684).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},6952:function(t,n){n.f=Object.getOwnPropertySymbols},5516:function(t,n,r){var e=r(8240);t.exports=e({}.isPrototypeOf)},1352:function(t,n,r){var e=r(8240),o=r(9606),i=r(4088),u=r(6198).indexOf,c=r(7153),a=e([].push);t.exports=function(t,n){var r,e=i(t),f=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&a(s,r);for(;n.length>f;)o(e,r=n[f++])&&(~u(s,r)||a(s,r));return s}},7446:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},7999:function(t,n,r){var e=r(9413),o=r(930),i=r(8759),u=TypeError;t.exports=function(t,n){var r,c;if("string"===n&&o(r=t.toString)&&!i(c=e(r,t)))return c;if(o(r=t.valueOf)&&!i(c=e(r,t)))return c;if("string"!==n&&o(r=t.toString)&&!i(c=e(r,t)))return c;throw u("Can't convert object to primitive value")}},6095:function(t,n,r){var e=r(563),o=r(8240),i=r(62),u=r(6952),c=r(6112),a=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?a(n,r(t)):n}},1237:function(t,n,r){var e=r(2086);t.exports=e.Promise},880:function(t,n,r){var e=r(6112),o=r(8759),i=r(8722);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},9586:function(t,n,r){var e=r(1858),o=TypeError;t.exports=function(t){if(e(t))throw o("Can't call method on "+t);return t}},8944:function(t,n,r){var e=r(9197),o=r(5422),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4489:function(t,n,r){var e=r(2086),o=r(9444),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},9197:function(t,n,r){var e=r(3296),o=r(4489);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.29.0",mode:e?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"})},8515:function(t,n,r){var e=r(6112),o=r(1449),i=r(1858),u=r(211)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||i(r=e(c)[u])?n:o(r)}},5558:function(t,n,r){var e=r(1448),o=r(3677);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},7740:function(t,n,r){var e=r(9502),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},4088:function(t,n,r){var e=r(5974),o=r(9586);t.exports=function(t){return e(o(t))}},9502:function(t,n,r){var e=r(5681);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},4005:function(t,n,r){var e=r(9502),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},3060:function(t,n,r){var e=r(9586),o=Object;t.exports=function(t){return o(e(t))}},1288:function(t,n,r){var e=r(9413),o=r(8759),i=r(2071),u=r(2964),c=r(7999),a=r(211),f=TypeError,s=a("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,a=u(t,s);if(a){if(void 0===n&&(n="default"),r=e(a,t,n),!o(r)||i(r))return r;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},2258:function(t,n,r){var e=r(1288),o=r(2071);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},2371:function(t,n,r){var e={};e[r(211)("toStringTag")]="z",t.exports="[object z]"===String(e)},9268:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(r){return"Object"}}},5422:function(t,n,r){var e=r(8240),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},1876:function(t,n,r){var e=r(5558);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8202:function(t,n,r){var e=r(5283),o=r(3677);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},640:function(t,n,r){var e=r(2086),o=r(930),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},211:function(t,n,r){var e=r(2086),o=r(9197),i=r(9606),u=r(5422),c=r(5558),a=r(1876),f=e.Symbol,s=o("wks"),l=a?f.for||f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)||(s[t]=c&&i(f,t)?f[t]:l("Symbol."+t)),s[t]}},1370:function(t,n,r){"use strict";var e=r(1695),o=r(3296),i=r(1237),u=r(3677),c=r(563),a=r(930),f=r(8515),s=r(880),l=r(1343),p=i&&i.prototype;if(e({target:"Promise",proto:!0,real:!0,forced:!!i&&u((function(){p.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var n=f(this,c("Promise")),r=a(t);return this.then(r?function(r){return s(n,t()).then((function(){return r}))}:t,r?function(r){return s(n,t()).then((function(){throw r}))}:t)}}),!o&&a(i)){var v=c("Promise").prototype.finally;p.finally!==v&&l(p,"finally",v,{unsafe:!0})}},2577:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var e=r(7378),o=r(3561),i=r(3095),u=r(9835),c=r(8692),a=r(1309),f=r(4359);var s=t=>{let{handleSubmit:n,submitting:r,success:e}=t;return(0,f.tZ)("form",{onSubmit:n,method:"POST",action:"YOUR_ACTION_END_POINT",demo:"demo"},!0===e&&(0,f.tZ)(a.v0,{variant:"success"},"Thank you for contacting us. We'll get back to you soon!"),!1===e&&(0,f.tZ)(a.v0,{variant:"error"},"Something went wrong. Please try again later!"),(0,f.tZ)(a.xu,{variant:"forms.row"},(0,f.tZ)(a.xu,{variant:"forms.column"},(0,f.tZ)(a.__,{htmlFor:"contact-form-name"},"Name"),(0,f.tZ)(a.II,{type:"text",id:"contact-form-name",name:"name",required:!0})),(0,f.tZ)(a.xu,{variant:"forms.column"},(0,f.tZ)(a.__,{htmlFor:"contact-form-company"},"Company Name"),(0,f.tZ)(a.II,{type:"text",id:"contact-form-company",name:"company"}))),(0,f.tZ)(a.xu,{variant:"forms.row"},(0,f.tZ)(a.xu,{variant:"forms.column"},(0,f.tZ)(a.__,{htmlFor:"contact-form-email"},"Email"),(0,f.tZ)(a.II,{type:"email",placeholder:"emailx@example.com",id:"contact-form-email",name:"email",required:!0})),(0,f.tZ)(a.xu,{variant:"forms.column"},(0,f.tZ)(a.__,{htmlFor:"contact-form-phone"},"Phone Number"),(0,f.tZ)(a.II,{type:"tel",placeholder:"(xxx) xxx-xxxx",id:"contact-form-phone",name:"phone"}))),(0,f.tZ)(a.xu,{variant:"forms.row"},(0,f.tZ)(a.__,{htmlFor:"contact-form-subject"},"Subject"),(0,f.tZ)(a.II,{type:"text",id:"contact-form-subject",name:"subject",required:!0})),(0,f.tZ)(a.xu,{variant:"forms.row"},(0,f.tZ)(a.__,{htmlFor:"contact-form-message"},"Your Message"),(0,f.tZ)(a.gx,{name:"message",id:"contact-form-message"})),(0,f.tZ)(a.zx,{variant:e||r?"disabled":"primary",disabled:e||r,type:"submit",required:!0},"Submit ",r&&(0,f.tZ)(a.$j,{size:"20"})))};r(1370);var l=()=>{const{0:t,1:n}=(0,e.useState)(!1),{0:r,1:o}=(0,e.useState)({}),{0:i,1:u}=(0,e.useState)(),{0:c,1:a}=(0,e.useState)(),{0:f,1:s}=(0,e.useState)(),l=(0,e.useCallback)((()=>{const t=new FormData(r),e=new URLSearchParams(c||t).toString();r.getAttribute("demo")?setTimeout((()=>{u(!0),n(!1)}),1500):fetch(f||r.action,{method:r.method||"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:e}).then((()=>{r.reset(),u(!0)})).catch((t=>{u(!1)})).finally((()=>{n(!1)}))}),[r]);(0,e.useEffect)((()=>{t&&l()}),[t,l]);const p=(0,e.useCallback)((()=>{n(!1),u(void 0),a(void 0),s(void 0)}),[]);return{handleSubmit:function(t,r){let{values:e,action:i}=void 0===r?{}:r;t.preventDefault(),e&&a(e),i&&s(i),o(t.target),n(!0)},submitting:t,success:i,reset:p}};var p=()=>{const{handleSubmit:t,submitting:n,success:r}=l();return(0,f.tZ)(a.Zb,{variant:"paper"},(0,f.tZ)(s,{handleSubmit:t,submitting:n,success:r}))};var v=t=>(0,f.tZ)(o.Ar,t,(0,f.tZ)(c.Z,{title:"Contact"}),(0,f.tZ)(u.Z,null),(0,f.tZ)(o.Kq,null,(0,f.tZ)(o.or,null,(0,f.tZ)(i.Z,{header:"",subheader:""}),(0,f.tZ)(u.Z,null),(0,f.tZ)(p,null))))},3095:function(t,n,r){"use strict";r.d(n,{Z:function(){return u}});r(7378);var e=r(1309),o=r(4359);const i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}};var u=t=>{let{header:n,subheader:r,running:u,totalCount:c}=t;return(0,o.tZ)("div",null,(0,o.tZ)(e.X6,{variant:"h1",as:"h1"},n," ",c&&(0,o.tZ)(e.Ct,{variant:"tag-white",sx:i.count}," ",c)),r&&(0,o.tZ)(e.xv,{variant:"h3",sx:i.subheader},r),u&&(0,o.tZ)(e.xv,{variant:"h4",sx:i.runninghead},u))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-pages-src-pages-contact-jsx-a9d2812e96ae34e7a96e.js.map