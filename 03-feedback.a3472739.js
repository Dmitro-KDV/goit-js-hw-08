function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(w,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function w(){var e=v();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?d(n,r-(e-l)):n}(e))}function O(e){return f=void 0,g&&i?y(e):(i=o=void 0,a)}function T(){var e=v(),n=h(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},T.flush=function(){return void 0===f?a:O(v())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");function j(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(y.elements.email.value=t.email||"",y.elements.message.value=t.message||"")}j(),y.addEventListener("input",e(t)((function(e){const t={email:y.elements.email.value,message:y.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),j()}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:y.elements.email.value,message:y.elements.message.value}),localStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.a3472739.js.map
