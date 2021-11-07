(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(537),a=t.n(o),r=t(645),s=t.n(r)()(a());s.push([e.id,".navbar {\n  font-family:'Courier New', Courier, monospace;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n}\n\n.page {\n  max-width: 1080px !important;\n  font-size: 17px;\n}\n\n.brand {\n  color: #FDAD56 !important;\n}\n\n.address {\n  font-size: 1.2rem;\n}\n\nmain {\n  background-color: #FFFFFF;\n  height: 100%;\n  width: auto;\n}\n\n.level {\n  height: 30px !important;\n}\n\n#map {\n  width: 100%;\n  height: 380px;\n  border: 0;\n}\n\n#window {\n  max-height: 400px;\n  max-width: 600px;\n}\n\n#logo {\n  max-width: 500px;\n}\n\niframe {\n  max-width: none !important;\n}\n\nfooter {\n  background-color: #363636 !important;\n  color: white;\n}\n\n.profile-pic {\n  border: 1px black solid;\n}\n\n.doctor {\n  display: flex;\n  align-items: center;\n}\n\n.bio {\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  list-style: inside !important;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,6CAA6C;AAC/C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;AAC/B",sourcesContent:[".navbar {\n  font-family:'Courier New', Courier, monospace;\n}\n\n.navbar-brand {\n  font-size: 1.5rem;\n}\n\n.page {\n  max-width: 1080px !important;\n  font-size: 17px;\n}\n\n.brand {\n  color: #FDAD56 !important;\n}\n\n.address {\n  font-size: 1.2rem;\n}\n\nmain {\n  background-color: #FFFFFF;\n  height: 100%;\n  width: auto;\n}\n\n.level {\n  height: 30px !important;\n}\n\n#map {\n  width: 100%;\n  height: 380px;\n  border: 0;\n}\n\n#window {\n  max-height: 400px;\n  max-width: 600px;\n}\n\n#logo {\n  max-width: 500px;\n}\n\niframe {\n  max-width: none !important;\n}\n\nfooter {\n  background-color: #363636 !important;\n  color: white;\n}\n\n.profile-pic {\n  border: 1px black solid;\n}\n\n.doctor {\n  display: flex;\n  align-items: center;\n}\n\n.bio {\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  list-style: inside !important;\n}\n"],sourceRoot:""}]);const i=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */"),s=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([r]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=t(r[s]);n[i].references--}for(var c=o(e,a),l=0;l<r.length;l++){var d=t(r[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},441:(e,n,t)=>{e.exports=t.p+"56586e38f1b0241eae14.jpg"},738:(e,n,t)=>{e.exports=t.p+"fd03b8251e39e50fb905.jpg"},28:(e,n,t)=>{e.exports=t.p+"e9d9c06412282fa79d82.jpg"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{const e=(e,n,t,o)=>{const a=document.createElement(e);return n&&(a.id=n),t&&t.forEach((e=>a.classList.add(e))),o&&(a.innerText=o),a};var n=t(738);const o=document.createElement("div");o.classList.add("content","has-text-centered");const a=document.createElement("h2");a.innerText="Patient Reviews";const r=document.createElement("div");r.innerHTML='<span class="yelp-review" data-review-id="6-7T6IXF-1CDZli7rPcdqQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=RdX1SalK7ZZQEPmtD1n3Kg" rel="nofollow noopener">Peter C.</a>\'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=6-7T6IXF-1CDZli7rPcdqQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async><\/script></span>';const s=document.createElement("div");s.classList.add("mt-3"),s.innerHTML='<span class="yelp-review" data-review-id="mKBVCvM9F1KLO_pwCz5anQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=BJVArJKGsHSWIBpjSMDRgA" rel="nofollow noopener">Mitchell M.</a>\'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=mKBVCvM9F1KLO_pwCz5anQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async><\/script></span>';const i=document.createElement("div");i.classList.add("mt-3"),i.innerHTML='<span class="yelp-review" data-review-id="AHg_qGSHsAgvlntCBh66rQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=u0gJTZYTbsAly9wsJ_RxXg" rel="nofollow noopener">Mia K.</a>\'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=AHg_qGSHsAgvlntCBh66rQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async><\/script></span>',o.append(a,r,s,i);const c=o;var l=t(28);const d=e("div",null,["container","page","mb-5"]),p=document.createElement("hr");(()=>{const t=document.createElement("div");t.classList.add("columns","is-centered");const o=document.createElement("div");o.classList.add("column");const a=document.createElement("figure");a.classList.add("image");const r=document.createElement("img");r.src=n,r.alt="The front door of our office";const s=e("div",null,["column","content","is-family-monospace","has-text-centered"]),i=e("img");i.src=l;const c=e("p",null,null,"We provide best-in-class eye care for adults and children, and offer a wide selection of luxury eyeglass brands."),p=e("p",null,null,"Open Monday-Friday, 10:30am-6:30pm"),u=e("p",null,null,"Servicing downtown Manhattan since 2011"),m=document.createElement("iframe");m.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.518601525015!2d-74.0097192!3d40.7151623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94d3d09046292216!2sRevolution%20Eyes!5e0!3m2!1sen!2sus!4v1635041500047!5m2!1sen!2sus",m.id="map",m.allowFullscreen="";const h=document.createElement("hr");a.appendChild(r),o.appendChild(a),s.append(i,c,p,u,h,m),t.append(o,s),d.appendChild(t)})(),d.appendChild(p),d.appendChild(c);const u=d;var m=t(441);const h=e("div","about-us",["container","page","mb-5"]),A=e("hr"),f=(()=>{const n=e("figure",null,["image","mb-3"]),t=e("img","logo");t.src=l,n.appendChild(t);const o=e("div",null,["content","has-text-centered"]),a=e("h1",null,["mt-1"],"About Us"),r=e("p",null,["small-box"],"Founded in 2011, Revolution Eyes is owned and operated by the same doctors you see at your appointments. We provide high quality care to each and every patient, tailored to their specific needs."),s=e("p",null,null,"We are proud to be a local, independent business.");return o.append(n,a,r,s),o})(),v=(()=>{const n=e("div",null,["content"]),t=e("h1",null,["has-text-centered"],"Our Doctors"),o=(n,t,o,a)=>{const r=e("div",null,["content","doctor"]),s=e("figure",null,["image"]),i=e("img",null,["profile-pic","is-rounded"]);i.src=a;const c=e("div",null,["bio"]),l=e("h4",null,null,n),d=e("p",null,null,t),p=e("p",null,null,o);return s.appendChild(i),c.append(l,d,p),r.append(s,c),r};let a=o("Dr. Ashish Sharma, O.D.","Dr. Sharma has been treating patients for a long time. He loves diagnosing patients and getting them great prescriptions for eyeglasses or contacts.","Dr. Sharma studied at a good school for optometry.",m),r=o("Dr. Jeremy Lee, O.D.","Dr. Lee has practiced optometry here for a bunch of time. Patients love him. He also likes reading good books about stuff.","Dr. Lee also went to a real great school for optometry",m);return n.append(t,a,r),n})();h.append(f,A,v);const w=h,g=e("div","services",["container","page","mb-5"]),b=e("hr"),y=(()=>{let n=e("div",null,["content","mb-7","has-text-centered"]);const t=e("h1",null,["title"],"Services");return n.append(t),n})(),E=(()=>{let t=e("div",null,["columns","mt-3"]),o=e("figure",null,["image"]),a=e("img");a.src=n,o.appendChild(a);let r=e("div",null,["column","is-vcentered","has-text-centered"]),s=e("div",null,["content","mb-0","is-large","has-text-weight-bold"],"Our doctors provide the following services:"),i=e("ul",null,["column","has-text-centered","list"]),c=["Comprehensive Eye Exams","Contact Lens Fittings","Contact Lens Insertion and Removal Training","Red Eye Exams","Dry Eye Treatment","Contact Lens Removal"];for(let n=0;n<c.length;n++){let t=e("li");t.innerText=c[n],i.appendChild(t)}let l=e("div",null,["content","mt-4","has-text-weight-bold","is-large"],"We accept VSP, EyeMed, Aetna, and Davis Vision."),d=e("div",null,["content","mt-4","is-medium"],"Please note that we are not in-network for ANY medical insurance.");return r.append(s,i,b,l,d),t.append(o,r),t})();g.append(y,E);const C=g;var x=t(379),B=t.n(x),L=t(795),T=t.n(L),S=t(569),M=t.n(S),k=t(565),F=t.n(k),j=t(216),R=t.n(j),D=t(589),z=t.n(D),N=t(426),P={};P.styleTagTransform=z(),P.setAttributes=F(),P.insert=M().bind(null,"head"),P.domAPI=T(),P.insertStyleElement=R(),B()(N.Z,P),N.Z&&N.Z.locals&&N.Z.locals,(()=>{const n=document.querySelector("body"),t=document.createElement("header");t.classList.add("navbar","is-spaced","is-dark"),t.ariaLabel="main navigation",(()=>{const n=e("div",null,["navbar-brand"]),o=e("a","homepage",["navbar-item"]);o.href="#";const a=e("span","revolution",["revolution","brand"],"Revolution"),r=document.createElement("span");r.innerText="Eyes";const s=document.createElement("a");s.classList.add("navbar-burger"),s.ariaLabel="menu";for(let e=0;e<3;e++){const e=document.createElement("span");e.ariaHidden="true",s.appendChild(e)}o.append(a,r),n.append(o,s),t.append(n)})(),(()=>{const e=document.createElement("div");e.classList.add("navbar-menu");const n=document.createElement("div");n.classList.add("navbar-start");const o=document.createElement("navbar-end");o.classList.add("navbar-end");for(let e=0;e<3;e++){const n=document.createElement("a");switch(n.classList.add("navbar-item","is-tab"),n.href="#",e){case 0:n.id="aboutUs",n.innerText="About Us";break;case 1:n.id="services",n.innerText="Services";break;case 2:n.id="contact",n.innerText="Contact"}o.appendChild(n)}e.append(n,o),t.append(e)})(),(()=>{const e=document.createElement("div");e.classList.add("level","is-mobile","mt-5");const t=document.createElement("div");t.classList.add("level-item","has-text-centered");const o=document.createElement("div");o.classList.add("address");for(let e=0;e<2;e++){const n=document.createElement("p");switch(e){case 0:n.innerText="82 West Broadway";break;case 1:n.innerText="New York, NY 10007"}o.appendChild(n)}const a=document.createElement("div");a.classList.add("level-item","has-text-centered");const r=document.createElement("a");r.classList.add("button","is-medium","is-link","is-light"),r.href="tel:212-609-1111",r.innerText="212-608-1111",t.appendChild(o),a.appendChild(r),e.append(t,a);const s=document.createElement("hr");n.prepend(e,s)})(),n.prepend(t)})(),(()=>{const e=document.createElement("footer");e.classList.add("footer");const n=document.createElement("div");n.classList.add("content","has-text-centered"),n.innerText="(c) 2021 • Revolution Eyes • 82 West Broadway, New York, NY 10007 • (212)-608-1111",e.appendChild(n),document.querySelector("body").appendChild(e)})();const q=(()=>{const e=document.querySelector(".navbar-burger"),n=document.querySelector(".navbar-menu");function t(){e.classList.toggle("is-active"),n.classList.toggle("is-active")}return{start:()=>e.addEventListener("click",t),closeMenu:function(){e.classList.remove("is-active"),n.classList.remove("is-active")}}})(),W=(()=>{const e=document.getElementById("content");e.innerText="";const n=n=>{e.innerText="",e.appendChild(n),q.closeMenu()};return{load:n,change:e=>{switch(e.currentTarget.id){case"homepage":n(u);break;case"aboutUs":n(w);break;case"services":n(C)}}}})();W.load(u),q.start(),document.querySelectorAll(".navbar-item").forEach((e=>{e.addEventListener("click",W.change)}))})()})();
//# sourceMappingURL=main.js.map