import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-Dov3POoy.js";let i=null,m=null;const l=document.querySelector("button[data-start]"),p=document.querySelector("#datetime-picker");function S(t){const e=Date.now(),n=Date.parse(t);return e<n}function x(t){const o=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:u,minutes:c,seconds:d}}function a(t){return String(t).padStart(2,"0")}function C(t){m=setInterval(()=>{const e=Date.parse(t)-Date.now(),n=document.querySelector("span[data-days]"),r=document.querySelector("span[data-hours]"),s=document.querySelector("span[data-minutes]"),o=document.querySelector("span[data-seconds]");if(e<=0){clearInterval(m),n.textContent="00",r.textContent="00",s.textContent="00",o.textContent="00",p.disabled=!1;return}const{days:u,hours:c,minutes:d,seconds:f}=x(e);n.textContent=a(u),r.textContent=a(c),s.textContent=a(d),o.textContent=a(f)},1e3)}l.addEventListener("click",t=>{t.target.disabled=!0,p.disabled=!0,C(i)});const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(i=t[0],!S(i)){l.disabled=!0,y.error({message:"Please choose a date in the future",position:"topCenter"});return}l.disabled=!1}};h("#datetime-picker",D);
//# sourceMappingURL=1-timer.js.map
