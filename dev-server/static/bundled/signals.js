import { options as l$2, Component as x$1, isValidElement as t$2 } from './preact.js';

var t$1,r$1,u$1,i$1,o$1=0,f$1=[],c$1=l$2,e$1=c$1.__b,a$2=c$1.__r,v$2=c$1.diffed,l$1=c$1.__c,m$1=c$1.unmount,s$1=c$1.__;function d$2(n,t){c$1.__h&&c$1.__h(r$1,n,o$1||t),o$1=0;var u=r$1.__H||(r$1.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function y$2(n,u){var i=d$2(t$1++,3);!c$1.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r$1.__H.__h.push(i));}function A$1(n){return o$1=5,T(function(){return {current:n}},[])}function T(n,r){var u=d$2(t$1++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function j(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c$1.__e(t,n.__v);}}c$1.__b=function(n){r$1=null,e$1&&e$1(n);},c$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s$1&&s$1(n,t);},c$1.__r=function(n){a$2&&a$2(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t$1=0)),u$1=r$1;},c$1.diffed=function(n){v$2&&v$2(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===c$1.requestAnimationFrame||((i$1=c$1.requestAnimationFrame)||w$2)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u$1=r$1=null;},c$1.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c$1.__e(r,n.__v);}}),l$1&&l$1(n,t);},c$1.unmount=function(n){m$1&&m$1(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c$1.__e(t,r.__v));};var k$1="function"==typeof requestAnimationFrame;function w$2(n){var t,r=function(){clearTimeout(u),k$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k$1&&(t=requestAnimationFrame(r));}function z(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function B(n){var t=r$1;n.__c=n.__(),r$1=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}

const i=Symbol.for("preact-signals");function t(){if(r>1){r--;return}let i,t=!1;while(void 0!==s){let o=s;s=void 0;f++;while(void 0!==o){const n=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&v$1(o))try{o.c();}catch(o){if(!t){i=o;t=!0;}}o=n;}}f=0;r--;if(t)throw i}function o(i){if(r>0)return i();r++;try{return i()}finally{t();}}let n,s;function h$1(i){const t=n;n=void 0;try{return i()}finally{n=t;}}let r=0,f=0,e=0;function c(i){if(void 0===n)return;let t=i.n;if(void 0===t||t.t!==n){t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t};if(void 0!==n.s)n.s.n=t;n.s=t;i.n=t;if(32&n.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=n.s;t.n=void 0;n.s.n=t;n.s=t;}return t}}function u(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}u.prototype.brand=i;u.prototype.h=function(){return !0};u.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};u.prototype.U=function(i){if(void 0!==this.t){const t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0;}if(void 0!==o){o.e=t;i.x=void 0;}if(i===this.t)this.t=o;}};u.prototype.subscribe=function(i){return E(()=>{const t=this.value,o=n;n=void 0;try{i(t);}finally{n=o;}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){const i=n;n=void 0;try{return this.value}finally{n=i;}};Object.defineProperty(u.prototype,"value",{get(){const i=c(this);if(void 0!==i)i.i=this.i;return this.v},set(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;e++;r++;try{for(let i=this.t;void 0!==i;i=i.x)i.t.N();}finally{t();}}}});function d$1(i){return new u(i)}function v$1(i){for(let t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function l(i){for(let t=i.s;void 0!==t;t=t.n){const o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function y$1(i){let t,o=i.s;while(void 0!==o){const i=o.p;if(-1===o.i){o.S.U(o);if(void 0!==i)i.n=o.n;if(void 0!==o.n)o.n.p=i;}else t=o;o.S.n=o.r;if(void 0!==o.r)o.r=void 0;o=i;}i.s=t;}function a$1(i){u.call(this,void 0);this.x=i;this.s=void 0;this.g=e-1;this.f=4;}(a$1.prototype=new u).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===e)return !0;this.g=e;this.f|=1;if(this.i>0&&!v$1(this)){this.f&=-2;return !0}const i=n;try{l(this);n=this;const i=this.x();if(16&this.f||this.v!==i||0===this.i){this.v=i;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}n=i;y$1(this);this.f&=-2;return !0};a$1.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(let i=this.s;void 0!==i;i=i.n)i.S.S(i);}u.prototype.S.call(this,i);};a$1.prototype.U=function(i){if(void 0!==this.t){u.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(let i=this.s;void 0!==i;i=i.n)i.S.U(i);}}};a$1.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(a$1.prototype,"value",{get(){if(1&this.f)throw new Error("Cycle detected");const i=c(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function w$1(i){return new a$1(i)}function _$1(i){const o=i.u;i.u=void 0;if("function"==typeof o){r++;const s=n;n=void 0;try{o();}catch(t){i.f&=-2;i.f|=8;g$1(i);throw t}finally{n=s;t();}}}function g$1(i){for(let t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_$1(i);}function p$1(i){if(n!==this)throw new Error("Out-of-order effect");y$1(this);n=i;this.f&=-2;if(8&this.f)g$1(this);t();}function b$1(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b$1.prototype.c=function(){const i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;const t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};b$1.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_$1(this);l(this);r++;const i=n;n=this;return p$1.bind(this,i)};b$1.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=s;s=this;}};b$1.prototype.d=function(){this.f|=8;if(!(1&this.f))g$1(this);};function E(i){const t=new b$1(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

function a(t,e){l$2[t]=e.bind(null,l$2[t]||(()=>{}));}let h,d;function p(t){if(d)d();d=t&&t.S();}function v({data:t}){const i=useSignal(t);i.value=t;const o=T(()=>{let t=this,n=this.__v;while(n=n.__)if(n.__c){n.__c.__$f|=4;break}const f=w$1(function(){let t=i.value.value;return 0===t?0:!0===t?"":t||""}),r=w$1(()=>{var t;return t$2(f.value)||3!==(null==(t=this.base)?void 0:t.nodeType)});this.__$u.c=()=>{var t;if(!t$2(o.peek())&&3===(null==(t=this.base)?void 0:t.nodeType))this.base.data=o.peek();else {this.__$f|=1;this.setState({});}};E(function(){if(!m)m=this.N;this.N=A;if(r.value&&t.base)t.base.data=f.value;});return f},[]);return o.value}v.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:v},props:{configurable:!0,get(){return {data:this}}},__b:{configurable:!0,value:1}});a("__b",(t,i)=>{if("string"==typeof i.type){let t,e=i.props;for(let n in e){if("children"===n)continue;let o=e[n];if(o instanceof u){if(!t)i.__np=t={};t[n]=o;e[n]=o.peek();}}}t(i);});a("__r",(t,i)=>{p();let e,n=i.__c;if(n){n.__$f&=-2;e=n.__$u;if(void 0===e)n.__$u=e=function(t){let i;E(function(){i=this;});i.c=()=>{n.__$f|=1;n.setState({});};return i}();}h=n;p(e);t(i);});a("__e",(t,i,e,n)=>{p();h=void 0;t(i,e,n);});a("diffed",(t,i)=>{p();h=void 0;let e;if("string"==typeof i.type&&(e=i.__e)){let t=i.__np,n=i.props;if(t){let i=e.U;if(i)for(let e in i){let n=i[e];if(void 0!==n&&!(e in t)){n.d();i[e]=void 0;}}else {i={};e.U=i;}for(let o in t){let f=i[o],r=t[o];if(void 0===f){f=_(e,o,r,n);i[o]=f;}else f.o(r,n);}}}t(i);});function _(t,i,e,n){const o=i in t&&void 0===t.ownerSVGElement,f=d$1(e);return {o:(t,i)=>{f.value=t;n=i;},d:E(function(){if(!m)m=this.N;this.N=A;const e=f.value.value;if(n[i]!==e){n[i]=e;if(o)t[i]=e;else if(e)t.setAttribute(i,e);else t.removeAttribute(i);}})}}a("unmount",(t,i)=>{if("string"==typeof i.type){let t=i.__e;if(t){const i=t.U;if(i){t.U=void 0;for(let t in i){let e=i[t];if(e)e.d();}}}}else {let t=i.__c;if(t){const i=t.__$u;if(i){t.__$u=void 0;i.d();}}}t(i);});a("__h",(t,i,e,n)=>{if(n<3||9===n)i.__$f|=2;t(i,e,n);});x$1.prototype.shouldComponentUpdate=function(t,i){const e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return !0;if(3&this.__$f)return !0;for(let t in i)return !0;for(let i in t)if("__source"!==i&&t[i]!==this.props[i])return !0;for(let i in this.props)if(!(i in t))return !0;return !1};function useSignal(t){return T(()=>d$1(t),[])}function useComputed(t){const i=A$1(t);i.current=t;h.__$f|=4;return T(()=>w$1(()=>i.current()),[])}let m,g=[],b=[];const k="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,y=t=>{queueMicrotask(()=>{queueMicrotask(t);});};function q(){o(()=>{let t;while(t=g.shift())m.call(t);});}function w(){if(1===g.push(this))(l$2.requestAnimationFrame||k)(q);}function x(){o(()=>{let t;while(t=b.shift())m.call(t);});}function A(){if(1===b.push(this))(l$2.requestAnimationFrame||y)(x);}function useSignalEffect(t){const i=A$1(t);i.current=t;y$2(()=>E(function(){if(!m)m=this.N;this.N=w;return i.current()}),[]);}

export { u as Signal, o as batch, w$1 as computed, E as effect, d$1 as signal, h$1 as untracked, useComputed, useSignal, useSignalEffect };
