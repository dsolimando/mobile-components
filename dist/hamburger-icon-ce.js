!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports="<style>\n    :host div {\n        width: 16px;\n        height: 3px;\n        margin-bottom: 2px;\n        background-color: #fff;\n    }\n</style>\n<div></div>\n<div></div>\n<div></div>"},function(e,t,n){"use strict";n.r(t),n.d(t,"ScellHamburgerButton",function(){return i});var o=n(0),r=n.n(o);const c=document.createElement("template");c.innerHTML=r.a,window.ShadyCSS&&ShadyCSS.prepareTemplate(c,"scell-hamburger-button");class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(c.content.cloneNode(!0))}connectedCallback(){window.ShadyCSS&&ShadyCSS.styleElement(this),this.getAttribute("color")&&this.shadowRoot.querySelectorAll("div").forEach(e=>{e.style.backgroundColor=this.getAttribute("color")})}}customElements.define("scell-hamburger-button",i)}]);