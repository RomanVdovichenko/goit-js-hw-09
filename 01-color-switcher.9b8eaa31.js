!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body"),n=null;e.setAttribute("disabled",""),t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled"),n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),e.setAttribute("disabled",""),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.9b8eaa31.js.map
