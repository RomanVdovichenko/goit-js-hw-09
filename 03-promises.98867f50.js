!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var l=r("6JpON"),c=document.querySelector(".form");function a(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}c.addEventListener("submit",(function(n){n.preventDefault();var o=Number(c.elements.delay.value),t=Number(c.elements.step.value),r=Number(c.elements.amount.value),u=o;for(i=1;i<=r;i+=1)a(i,u).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(l).Notify.success("Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(l).Notify.failure("Rejected promise ".concat(o," in ").concat(t,"ms"))})),u+=t}))}();
//# sourceMappingURL=03-promises.98867f50.js.map