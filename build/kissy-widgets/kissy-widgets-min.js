/*
Copyright (c) 2009, Kissy UI Library. All rights reserved.
MIT Licensed.
http://kissy.googlecode.com/

Date: 2009-12-29 17:38:43
Revision: 373
*/
if(typeof KISSY==="undefined"||!KISSY){function KISSY(b){var a=this;if(!(a instanceof arguments.callee)){return new arguments.callee(b)}a._init();a._config(b);a._setup();return a}}(function(a){var d=window,c="undefined",e=Array.prototype.slice,b=function(k,j,h,n){if(!j||!k){return k}if(typeof h===c){h=true}var g,m,f;if(n&&(f=n.length)){for(g=0;g<f;g++){m=n[g];if(m in j){if(h||!(m in k)){k[m]=j[m]}}}}else{for(m in j){if(h||!(m in k)){k[m]=j[m]}}}return k};b(a.prototype,{add:function(g,i,f,h){a.Env.mods[g]={name:g,fn:i,version:f,details:h||{}};return this},_init:function(){var f=this;f.version="@VERSION@";f.Env={mods:{},_used:{},_attached:{}};f.config={debug:true}},_config:function(f){b(this.config,f)},_setup:function(){this.use("kissy-core")},use:function(){var j=this,s=e.call(arguments,0),u=a.Env.mods,v=j.Env._used,m=s.length,t=s[m-1],p,n,h,g=[];if(typeof t==="function"){s.pop()}else{t=null}if(s[0]==="*"){s=[];for(n in u){s.push(n)}if(t){s.push(t)}return j.use.apply(j,s)}function q(k){if(v[k]){return}var f=u[k],i,o,l;if(f){v[k]=true;l=f.details.submodules}g.push(k);if(l){if(typeof l==="string"){l=[l]}for(i=0,o=l.length;i<o;i++){q(l[i])}}}for(p=0;p<m;p++){q(s[p])}j._attach(g);if(t){t(j)}return j},_attach:function(o){var n=a.Env.mods,k=this.Env._attached,j,g=o.length,h,f;for(j=0;j<g;j++){h=o[j];f=n[h];if(!k[h]&&f){k[h]=true;if(f.fn){f.fn(this)}}}},mix:b,merge:function(){var g=arguments,j={},h,f=g.length;for(h=0;h<f;++h){b(j,g[h],true)}return j},extend:function(j,i,g,m){if(!i||!j){return j}var f=Object.prototype,l=function(p){function n(){}n.prototype=p;return new n()},k=i.prototype,h=l(k);j.prototype=h;h.constructor=j;j.superclass=k;if(i!==Object&&k.constructor===f.constructor){k.constructor=i}if(g){b(h,g)}if(m){b(j,m)}return j},augment:function(h,g,f,i){return b(h.prototype,g.prototype,f,i)},each:function(f,j,k){var g=(f&&f.length)||0,h;for(h=0;h<g;h++){j.call(k||this,f[h],h,f)}return this},ready:function(){},weave:function(h,g,i,j){var f=[i[j],h];if(g==="before"){f.reverse()}i[j]=function(){for(var l=0,k=e.call(arguments,0);l<2;l++){f[l].apply(this,k)}};return this},cloneTo:function(f){function g(h){if(!(this instanceof g)){return new g(h)}if(typeof h===c){h=[]}g.superclass.constructor.apply(this,h)}a.extend(g,a,null,a);return(d[f]=g)},namespace:function(){var g=arguments,f=g.length,n=this,k,h,m;if(typeof n==="object"){n=n.constructor}for(k=0;k<f;k++){m=(""+g[k]).split(".");for(h=(d[m[0]]===n)?1:0;h<m.length;h++){n[m[h]]=n[m[h]]||{};n=n[m[h]]}}return n},log:function(h,f,g){var i=this.config;if(i.debug){g&&(h=g+": "+h);if(typeof console!==c&&console.log){console[f&&console[f]?f:"log"](h)}}return this}});b(a,a.prototype);a._init()})(KISSY);KISSY.add("datalazyload",function(g){var a=YAHOO.util,h=a.Dom,n=a.Event,j=YAHOO.lang,k=window,m=document,l="data-lazyload-src",o="ks-datalazyload",f=l+"-custom",b=o+"-custom",d={AUTO:"auto",MANUAL:"manual"},i="default",e={mod:d.MANUAL,diff:i,placeholder:"http://a.tbcdn.cn/kissy/1.0.2/build/datalazyload/dot.gif"};function c(r,q){var p=this;if(!(p instanceof arguments.callee)){return new arguments.callee(r,q)}if(typeof q==="undefined"){q=r;r=[m]}if(!j.isArray(r)){r=[h.get(r)||m]}p.containers=r;p.config=g.merge(e,q||{});p.callbacks={els:[],fns:[]};setTimeout(function(){p._init()},0)}g.mix(c.prototype,{_init:function(){var p=this;p.threshold=p._getThreshold();p._filterItems();if(p._getItemsLength()){p._initLoadEvent()}},_initLoadEvent:function(){var s,r=this;n.on(k,"scroll",p);n.on(k,"resize",function(){r.threshold=r._getThreshold();p()});if(r._getItemsLength()){n.onDOMReady(function(){q()})}function p(){if(s){return}s=setTimeout(function(){q();s=null},100)}function q(){r._loadItems();if(r._getItemsLength()===0){n.removeListener(k,"scroll",p);n.removeListener(k,"resize",p)}}},_filterItems:function(){var B=this,q=B.containers,w=B.threshold,A=B.config.placeholder,r=B.config.mod===d.MANUAL,p,y,v,u,t,x,s,D,C=[],z=[];for(p=0,y=q.length;p<y;++p){v=q[p].getElementsByTagName("img");for(t=0,x=v.length;t<x;++t){s=v[t];D=s.getAttribute(l);if(r){if(D){s.src=A;C.push(s)}}else{if(h.getY(s)>w&&!D){s.setAttribute(l,s.src);s.src=A;C.push(s)}}}u=q[p].getElementsByTagName("textarea");for(t=0,x=u.length;t<x;++t){if(h.hasClass(u[t],o)){z.push(u[t])}}}B.images=C;B.areaes=z},_loadItems:function(){var p=this;p._loadImgs();p._loadAreaes();p._fireCallbacks()},_loadImgs:function(){var r=this,w=r.images,t=h.getDocumentScrollTop(),p=r.threshold+t,s,q,v,u=[];for(s=0;q=w[s++];){if(h.getY(q)<=p){r._loadImgSrc(q)}else{u.push(q)}}r.images=u},_loadImgSrc:function(q,p){p=p||l;var r=q.getAttribute(p);if(r&&q.src!=r){q.src=r;q.removeAttribute(p)}},_loadAreaes:function(){var q=this,u=q.areaes,v=h.getDocumentScrollTop(),p=q.threshold+v,r,t,s,w=[];for(r=0;t=u[r++];){s=t.parentNode;if(h.getY(s)<=p){s.innerHTML=t.value}else{w.push(t)}}q.areaes=w},_fireCallbacks:function(){var z=this,v=z.callbacks,s=v.els,y=v.fns,p=h.getDocumentScrollTop(),u=z.threshold+p,t,q,x,w=[],r=[];for(t=0;(q=s[t])&&(x=y[t++]);){if(h.getY(q)<=u){x.call(q)}else{w.push(q);r.push(x)}}v.els=w;v.fns=r},addCallback:function(q,p){q=h.get(q);if(q&&typeof p==="function"){this.callbacks.els.push(q);this.callbacks.fns.push(p)}},_getThreshold:function(){var q=this.config.diff,p=h.getViewportHeight();if(q===i){return 2*p}else{return p+q}},_getItemsLength:function(){var p=this;return p.images.length+p.areaes.length+p.callbacks.els.length},loadCustomLazyData:function(t,s,q){var r=this,p,u;if(!j.isArray(t)){t=[h.get(t)]}g.each(t,function(w){switch(s){case"textarea-data":p=w.getElementsByTagName("textarea")[0];if(p&&h.hasClass(p,q||b)){w.innerHTML=p.value}break;default:if(w.nodeName==="IMG"){u=[w]}else{u=w.getElementsByTagName("img")}for(var x=0,v=u.length;x<v;x++){r._loadImgSrc(u[x],q||f)}}})}});g.mix(c,c.prototype,true,["loadCustomLazyData","_loadImgSrc"]);g.DataLazyload=c});KISSY.add("widget",function(a){var d=YAHOO.util,b=d.Dom;function c(e){var f=this;if(!(f instanceof c)){return new c(e)}f.container=b.get(e);f.config={}}a.Widget=c});KISSY.add("switchable",function(g){var c=YAHOO.util,i=c.Dom,o=c.Event,k=YAHOO.lang,l="undefined",d="display",a="block",n="none",b="forward",f="backward",j="switchable",m="beforeSwitch",h="onSwitch",e="ks-switchable-",p={};p.Config={mackupType:0,navCls:e+"nav",contentCls:e+"content",triggerCls:e+"trigger",panelCls:e+"panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:0,activeTriggerCls:"active",steps:1,viewSize:[]};g.Widget.prototype.switchable=function(r){var q=this;r=r||{};if(r.panelCls){p.Config.mackupType=1}else{if(r.panels){p.Config.mackupType=2}}q.config[j]=g.merge(p.Config,r||{});q.triggers=q.triggers||[];q.panels=q.panels||[];if(typeof q.activeIndex===l){q.activeIndex=q.config[j].activeIndex}g.mix(q,p);q._initSwitchable();return q};g.mix(p,{_initSwitchable:function(){var r=this,q=r.config[j];if(r.panels.length===0){r._parseSwitchableMackup()}r.createEvent(m);r.createEvent(h);if(q.hasTriggers){r._bindTriggers()}},_parseSwitchableMackup:function(){var A=this,r=A.container,v=A.config[j],B=v.hasTriggers,q,w,y=[],x=[],u,s,t,z=i.getElementsByClassName;switch(v.mackupType){case 0:q=z(v.navCls,"*",r)[0];if(q){y=i.getChildren(q)}w=z(v.contentCls,"*",r)[0];x=i.getChildren(w);break;case 1:y=z(v.triggerCls,"*",r);x=z(v.panelCls,"*",r);break;case 2:y=v.triggers;x=v.panels;break}s=x.length;A.length=s/v.steps;if(B&&s>0&&y.length===0){y=A._generateTriggersMackup(A.length)}if(B){for(u=0,t=y.length;u<t;u++){A.triggers.push(y[u])}}for(u=0;u<s;u++){A.panels.push(x[u])}A.content=w||x[0].parentNode},_generateTriggersMackup:function(r){var t=this,s=t.config[j],v=document.createElement("UL"),q,u;v.className=s.navCls;for(u=0;u<r;u++){q=document.createElement("LI");if(u===t.activeIndex){q.className=s.activeTriggerCls}q.innerHTML=u+1;v.appendChild(q)}t.container.appendChild(v);return i.getChildren(v)},_bindTriggers:function(){var s=this,r=s.config[j],v=s.triggers,t,u,q=v.length;for(u=0;u<q;u++){(function(w){t=v[w];o.on(t,"click",function(){s._onFocusTrigger(w)});o.on(t,"focus",function(){s._onFocusTrigger(w)});if(r.triggerType==="mouse"){o.on(t,"mouseenter",function(){s._onMouseEnterTrigger(w)});o.on(t,"mouseleave",function(){s._onMouseLeaveTrigger(w)})}})(u)}},_onFocusTrigger:function(r){var q=this;if(q.activeIndex===r){return}if(q.switchTimer){q.switchTimer.cancel()}q.switchTo(r)},_onMouseEnterTrigger:function(r){var q=this;if(q.activeIndex!==r){q.switchTimer=k.later(q.config[j].delay*1000,q,function(){q.switchTo(r)})}},_onMouseLeaveTrigger:function(){var q=this;if(q.switchTimer){q.switchTimer.cancel()}},switchTo:function(r,x){var y=this,s=y.config[j],u=y.triggers,t=y.panels,z=y.activeIndex,v=s.steps,w=z*v,q=r*v;if(r===z){return y}if(!y.fireEvent(m,r)){return y}if(s.hasTriggers){y._switchTrigger(z>-1?u[z]:null,u[r])}if(typeof x===l){x=r>z?b:b}y._switchView(t.slice(w,w+v),t.slice(q,q+v),r,x);y.activeIndex=r;return y},_switchTrigger:function(s,q){var r=this.config[j].activeTriggerCls;if(s){i.removeClass(s,r)}i.addClass(q,r)},_switchView:function(s,r,q){i.setStyle(s,d,n);i.setStyle(r,d,a);this.fireEvent(h,q)},prev:function(){var r=this,q=r.activeIndex;r.switchTo(q>0?q-1:r.length-1,f)},next:function(){var r=this,q=r.activeIndex;r.switchTo(q<r.length-1?q+1:0,b)}});g.mix(p,c.EventProvider.prototype);g.Switchable=p});KISSY.add("switchable-autoplay",function(c){var e=YAHOO.util,b=e.Event,d=YAHOO.lang,f="switchable",a=c.Switchable;c.mix(a.Config,{autoplay:false,interval:5,pauseOnHover:true});c.weave(function(){var h=this,g=h.config[f];if(!g.autoplay){return}if(g.pauseOnHover){b.on(h.container,"mouseenter",function(){h.paused=true});b.on(h.container,"mouseleave",function(){h.paused=false})}h.autoplayTimer=d.later(g.interval*1000,h,function(){if(h.paused){return}h.switchTo(h.activeIndex<h.length-1?h.activeIndex+1:0)},null,true)},"after",a,"_initSwitchable")});KISSY.add("switchable-effect",function(j){var e=YAHOO.util,k=e.Dom,m="switchable",i="display",a="block",n="none",p="opacity",h="z-index",l="relative",g="absolute",d="scrollx",b="scrolly",f="fade",o=j.Switchable;j.mix(o.Config,{effect:n,duration:0.5,easing:e.Easing.easeNone});var c={none:function(r,q,s){k.setStyle(r,i,n);k.setStyle(q,i,a);s()},fade:function(v,q,w){if(v.length!==1){throw new Error("fade effect only supports steps == 1.")}var s=this,r=s.config[m],u=v[0],t=q[0];if(s.anim){s.anim.stop()}k.setStyle(t,p,1);s.anim=new e.Anim(u,{opacity:{to:0}},r.duration,r.easing);s.anim.onComplete.subscribe(function(){s.anim=null;k.setStyle(t,h,9);k.setStyle(u,h,1);w()});s.anim.animate()},scroll:function(u,r,w,s){var x=this,t=x.config[m],y=t.effect===d,v=x.viewSize[y?0:1]*s,q={};q[y?"left":"top"]={to:-v};if(x.anim){x.anim.stop()}x.anim=new e.Anim(x.content,q,t.duration,t.easing);x.anim.onComplete.subscribe(function(){x.anim=null;w()});x.anim.animate()}};c[d]=c[b]=c.scroll;j.Switchable.Effects=c;j.weave(function(){var x=this,t=x.config[m],z=t.effect,u=x.panels,v=t.steps,y=x.activeIndex,w=y*v,q=w+v-1,r,s=u.length;x.viewSize=[t.viewSize[0]||u[0].offsetWidth*v,t.viewSize[0]||u[0].offsetHeight*v];if(z!==n){for(r=0;r<s;r++){u[r].style.display=a}switch(z){case d:case b:x.content.style.position=g;x.content.parentNode.style.position=l;if(z===d){k.setStyle(u,"float","left");this.content.style.width=x.viewSize[0]*(s/v)+"px"}break;case f:for(r=0;r<s;r++){k.setStyle(u[r],p,(r>=w&&r<=q)?1:0);u[r].style.position=g;u[r].style.zIndex=(r>=w&&r<=q)?9:1}break}}},"after",o,"_initSwitchable");j.mix(o,{_switchView:function(x,q,t,w){var s=this,r=s.config[m],v=r.effect,u=typeof v==="function"?v:o.Effects[v];u.call(s,x,q,function(){s.fireEvent("onSwitch",t)},t,w)}})});KISSY.add("switchable-circular",function(k){var e=YAHOO.util,m="switchable",l="relative",f="left",h="top",i="px",g="",d="forward",j="backward",c="scrollx",a="scrolly",o=k.Switchable;k.mix(o.Config,{circular:false});function p(y,s,C,v,A){var E=this,w=E.config[m],x=E.length,D=E.activeIndex,F=w.effect===c,q=F?f:h,u=E.viewSize[F?0:1],B=-u*v,r={},t,z=A===j;t=(z&&D===0&&v===x-1)||(A===d&&D===x-1&&v===0);if(t){B=b.call(E,E.panels,v,z,q,u)}r[q]={to:B};if(E.anim){E.anim.stop()}E.anim=new e.Anim(E.content,r,w.duration,w.easing);E.anim.onComplete.subscribe(function(){if(t){n.call(E,E.panels,v,z,q,u)}E.anim=null;C()});E.anim.animate()}function b(x,u,y,q,v){var C=this,w=C.config[m],z=w.steps,t=C.length,r=y?t-1:0,B=r*z,A=(r+1)*z,s;for(s=B;s<A;s++){x[s].style.position=l;x[s].style[q]=(y?"-":g)+v*t+i}return y?v:-v*t}function n(x,u,y,q,v){var C=this,w=C.config[m],z=w.steps,t=C.length,r=y?t-1:0,B=r*z,A=(r+1)*z,s;for(s=B;s<A;s++){x[s].style.position=g;x[s].style[q]=g}C.content.style[q]=y?-v*(t-1)+i:g}k.weave(function(){var s=this,q=s.config[m],t=q.effect,r=o.Effects;if(!q.circular||(t!==c&&t!==a)){return}r[c]=r[a]=r.scroll=p},"after",o,"_initSwitchable")});KISSY.add("switchable-lazyload",function(c){var a=YAHOO.util,d=a.Dom,e="switchable",g="beforeSwitch",h="img-src",f="textarea-data",i={},j=c.Switchable,b=c.DataLazyload;i[h]="data-lazyload-src-custom";i[f]="ks-datalazyload-custom";c.mix(j.Config,{lazyDataType:"",lazyDataFlag:""});c.weave(function(){var m=this,l=m.config[e],o=l.lazyDataType,k=l.lazyDataFlag||i[o];if(!b||!o||!k){return}m.subscribe(g,p);function p(r){var q=l.steps,t=r*q,s=t+q;b.loadCustomLazyData(m.panels.slice(t,s),o,k);if(n()){m.unsubscribe(g,p)}}function n(){var t,r,s,q;if(o===h){t=m.container.getElementsByTagName("img");for(s=0,q=t.length;s<q;s++){if(t[s].getAttribute(k)){return false}}}else{if(o===f){r=m.container.getElementsByTagName("textarea");for(s=0,q=r.length;s<q;s++){if(d.hasClass(r[s],k)){return false}}}}return true}},"after",j,"_initSwitchable")});KISSY.add("megamenu",function(g){var c=YAHOO.util,h=c.Dom,m=c.Event,j=YAHOO.lang,l="none",a="block",b='<span class="{hook_cls}"></span>',i="switchable",f="ks-megamenu-",e={hideDelay:0.5,viewCls:f+"view",closeBtnCls:f+"closebtn",showCloseBtn:true};function k(n,p){var o=this;if(!(o instanceof arguments.callee)){return new arguments.callee(n,p)}k.superclass.constructor.call(o,n);o.config=g.merge(e,p||{});o.switchable(p);g.mix(o.config,o.config[i]);o.activeIndex=-1;g.mix(o,d);o._init()}g.extend(k,g.Widget);var d={_init:function(){var n=this;n._initView();if(n.config.showCloseBtn){n._initCloseBtn()}},_onFocusTrigger:function(o){var n=this;if(n.activeIndex===o){return}if(n.switchTimer){n.switchTimer.cancel()}if(n.hideTimer){n.hideTimer.cancel()}n.switchTo(o)},_onMouseEnterTrigger:function(o){var n=this;if(n.hideTimer){n.hideTimer.cancel()}n.switchTimer=j.later(n.config.delay*1000,n,function(){n.switchTo(o)})},_onMouseLeaveTrigger:function(){var n=this;if(n.switchTimer){n.switchTimer.cancel()}n.hideTimer=j.later(n.config.hideDelay*1000,n,function(){n.hide()})},_initView:function(){var p=this,o=p.config,n=h.getElementsByClassName(o.viewCls,"*",p.container)[0];if(!n){n=document.createElement("DIV");n.className=o.viewCls;p.container.appendChild(n)}m.on(n,"mouseenter",function(){if(p.hideTimer){p.hideTimer.cancel()}});m.on(n,"mouseleave",function(){p.hideTimer=j.later(o.hideDelay*1000,p,"hide")});p.viewContent=n;p.view=n},_initCloseBtn:function(){var o=this,p,n=o.view;n.innerHTML=b.replace("{hook_cls}",o.config.closeBtnCls);m.on(n.firstChild,"click",function(){o.hide()});p=document.createElement("div");n.appendChild(p);o.viewContent=p},_switchView:function(n,o,q){var p=this;p.view.style.display=a;p.viewContent.innerHTML=o[0].innerHTML;p.fireEvent("onSwitch",q)},hide:function(){var n=this;h.removeClass(n.triggers[n.activeIndex],n.config.activeTriggerCls);n.view.style.display=l;n.activeIndex=-1}};g.MegaMenu=k});
