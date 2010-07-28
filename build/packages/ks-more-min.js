/*
Copyright 2010, KISSY UI Library v1.1.0pre
MIT Licensed
build time: ${build.time}
*/
KISSY.add("cookie",function(j){function w(h){return j.isString(h)&&h!==""}var q=document,t=encodeURIComponent,u=decodeURIComponent;j.Cookie={get:function(h){var i;if(w(h))if(h=q.cookie.match("(?:^| )"+h+"(?:(?:=([^;]*))|;|$)"))i=h[1]?u(h[1]):"";return i},set:function(h,i,f,k,p,m){i=t(i);var e=f;if(typeof e==="number"){e=new Date;e.setTime(e.getTime()+f*864E5)}if(e instanceof Date)i+="; expires="+e.toUTCString();if(w(k))i+="; domain="+k;if(w(p))i+="; path="+p;if(m)i+="; secure";q.cookie=h+"="+i},remove:function(h,
i,f,k){this.set(h,"",0,i,f,k)}}});
KISSY.add("json",function(j){function w(m){return m<10?"0"+m:m}function q(m){h.lastIndex=0;return h.test(m)?'"'+m.replace(h,function(e){var n=k[e];return typeof n==="string"?n:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+m+'"'}function t(m,e){var n,r,v=i,x,a=e[m];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(m);if(typeof p==="function")a=p.call(e,m,a);switch(typeof a){case "string":return q(a);case "number":return isFinite(a)?String(a):"null";case "boolean":case "null":return String(a);
case "object":if(!a)return"null";i+=f;x=[];if(Object.prototype.toString.apply(a)==="[object Array]"){r=a.length;for(m=0;m<r;m+=1)x[m]=t(m,a)||"null";e=x.length===0?"[]":i?"[\n"+i+x.join(",\n"+i)+"\n"+v+"]":"["+x.join(",")+"]";i=v;return e}if(p&&typeof p==="object"){r=p.length;for(m=0;m<r;m+=1){n=p[m];if(typeof n==="string")if(e=t(n,a))x.push(q(n)+(i?": ":":")+e)}}else for(n in a)if(Object.hasOwnProperty.call(a,n))if(e=t(n,a))x.push(q(n)+(i?": ":":")+e);e=x.length===0?"{}":i?"{\n"+i+x.join(",\n"+i)+
"\n"+v+"}":"{"+x.join(",")+"}";i=v;return e}}j=j.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+w(this.getUTCMonth()+1)+"-"+w(this.getUTCDate())+"T"+w(this.getUTCHours())+":"+w(this.getUTCMinutes())+":"+w(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var u=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,i,f,k={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},p;if(typeof j.stringify!=="function")j.stringify=function(m,e,n){var r;f=i="";if(typeof n==="number")for(r=0;r<n;r+=1)f+=" ";else if(typeof n==="string")f=n;if((p=e)&&typeof e!=="function"&&(typeof e!=="object"||typeof e.length!=="number"))throw new Error("JSON.stringify");return t("",
{"":m})};if(typeof j.parse!=="function")j.parse=function(m,e){function n(r,v){var x,a,b=r[v];if(b&&typeof b==="object")for(x in b)if(Object.hasOwnProperty.call(b,x)){a=n(b,x);if(a!==undefined)b[x]=a;else delete b[x]}return e.call(r,v,b)}m=String(m);u.lastIndex=0;if(u.test(m))m=m.replace(u,function(r){return"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(m.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){m=eval("("+m+")");return typeof e==="function"?n({"":m},""):m}throw new SyntaxError("JSON.parse");}});
(function(){function j(a,b,c,d,l,g){l=0;for(var s=d.length;l<s;l++){var o=d[l];if(o){o=o[a];for(var y=false;o;){if(o.sizcache===c){y=d[o.sizset];break}if(o.nodeType===1&&!g){o.sizcache=c;o.sizset=l}if(o.nodeName.toLowerCase()===b){y=o;break}o=o[a]}d[l]=y}}}function w(a,b,c,d,l,g){l=0;for(var s=d.length;l<s;l++){var o=d[l];if(o){o=o[a];for(var y=false;o;){if(o.sizcache===c){y=d[o.sizset];break}if(o.nodeType===1){if(!g){o.sizcache=c;o.sizset=l}if(typeof b!=="string"){if(o===b){y=true;break}}else if(f.filter(b,
[o]).length>0){y=o;break}}o=o[a]}d[l]=y}}}var q=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,t=0,u=Object.prototype.toString,h=false,i=true;[0,0].sort(function(){i=false;return 0});var f=function(a,b,c,d){c=c||[];var l=b=b||document;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string")return c;var g=[],s,o,y,C,B=true,D=f.isXML(b),A=a,z;do{q.exec("");if(s=q.exec(A)){A=s[3];g.push(s[1]);if(s[2]){C=
s[3];break}}}while(s);if(g.length>1&&p.exec(a))if(g.length===2&&k.relative[g[0]])o=x(g[0]+g[1],b);else for(o=k.relative[g[0]]?[b]:f(g.shift(),b);g.length;){a=g.shift();if(k.relative[a])a+=g.shift();o=x(a,o)}else{if(!d&&g.length>1&&b.nodeType===9&&!D&&k.match.ID.test(g[0])&&!k.match.ID.test(g[g.length-1])){s=f.find(g.shift(),b,D);b=s.expr?f.filter(s.expr,s.set)[0]:s.set[0]}if(b){s=d?{expr:g.pop(),set:n(d)}:f.find(g.pop(),g.length===1&&(g[0]==="~"||g[0]==="+")&&b.parentNode?b.parentNode:b,D);o=s.expr?
f.filter(s.expr,s.set):s.set;if(g.length>0)y=n(o);else B=false;for(;g.length;){s=z=g.pop();if(k.relative[z])s=g.pop();else z="";if(s==null)s=b;k.relative[z](y,s,D)}}else y=[]}y||(y=o);y||f.error(z||a);if(u.call(y)==="[object Array]")if(B)if(b&&b.nodeType===1)for(a=0;y[a]!=null;a++){if(y[a]&&(y[a]===true||y[a].nodeType===1&&f.contains(b,y[a])))c.push(o[a])}else for(a=0;y[a]!=null;a++)y[a]&&y[a].nodeType===1&&c.push(o[a]);else c.push.apply(c,y);else n(y,c);if(C){f(C,l,c,d);f.uniqueSort(c)}return c};
f.uniqueSort=function(a){if(v){h=i;a.sort(v);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a};f.matches=function(a,b){return f(a,null,null,b)};f.find=function(a,b,c){var d;if(!a)return[];for(var l=0,g=k.order.length;l<g;l++){var s=k.order[l],o;if(o=k.leftMatch[s].exec(a)){var y=o[1];o.splice(1,1);if(y.substr(y.length-1)!=="\\"){o[1]=(o[1]||"").replace(/\\/g,"");d=k.find[s](o,b,c);if(d!=null){a=a.replace(k.match[s],"");break}}}}d||(d=b.getElementsByTagName("*"));return{set:d,
expr:a}};f.filter=function(a,b,c,d){for(var l=a,g=[],s=b,o,y,C=b&&b[0]&&f.isXML(b[0]);a&&b.length;){for(var B in k.filter)if((o=k.leftMatch[B].exec(a))!=null&&o[2]){var D=k.filter[B],A,z;z=o[1];y=false;o.splice(1,1);if(z.substr(z.length-1)!=="\\"){if(s===g)g=[];if(k.preFilter[B])if(o=k.preFilter[B](o,s,c,g,d,C)){if(o===true)continue}else y=A=true;if(o)for(var E=0;(z=s[E])!=null;E++)if(z){A=D(z,o,E,s);var F=d^!!A;if(c&&A!=null)if(F)y=true;else s[E]=false;else if(F){g.push(z);y=true}}if(A!==undefined){c||
(s=g);a=a.replace(k.match[B],"");if(!y)return[];break}}}if(a===l)if(y==null)f.error(a);else break;l=a}return s};f.error=function(a){throw"Syntax error, unrecognized expression: "+a;};var k=f.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,
POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b);c=c&&!d;if(d)b=b.toLowerCase();d=0;for(var l=a.length,g;d<l;d++)if(g=a[d]){for(;(g=g.previousSibling)&&g.nodeType!==1;);a[d]=c||g&&g.nodeName.toLowerCase()===
b?g||false:g===b}c&&f.filter(b,a,true)},">":function(a,b){var c=typeof b==="string",d,l=0,g=a.length;if(c&&!/\W/.test(b))for(b=b.toLowerCase();l<g;l++){if(d=a[l]){c=d.parentNode;a[l]=c.nodeName.toLowerCase()===b?c:false}}else{for(;l<g;l++)if(d=a[l])a[l]=c?d.parentNode:d.parentNode===b;c&&f.filter(b,a,true)}},"":function(a,b,c){var d=t++,l=w,g;if(typeof b==="string"&&!/\W/.test(b)){g=b=b.toLowerCase();l=j}l("parentNode",b,d,a,g,c)},"~":function(a,b,c){var d=t++,l=w,g;if(typeof b==="string"&&!/\W/.test(b)){g=
b=b.toLowerCase();l=j}l("previousSibling",b,d,a,g,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c)return(a=b.getElementById(a[1]))?[a]:[]},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[];b=b.getElementsByName(a[1]);for(var d=0,l=b.length;d<l;d++)b[d].getAttribute("name")===a[1]&&c.push(b[d]);return c.length===0?null:c}},TAG:function(a,b){return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,l,g){a=" "+a[1].replace(/\\/g,"")+" ";
if(g)return a;g=0;for(var s;(s=b[g])!=null;g++)if(s)if(l^(s.className&&(" "+s.className+" ").replace(/[\t\n]/g," ").indexOf(a)>=0))c||d.push(s);else if(c)b[g]=false;return false},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){var b=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0;a[3]=b[3]-0}a[0]=t++;return a},ATTR:function(a,b,c,d,l,g){b=
a[1].replace(/\\/g,"");if(!g&&k.attrMap[b])a[1]=k.attrMap[b];if(a[2]==="~=")a[4]=" "+a[4]+" ";return a},PSEUDO:function(a,b,c,d,l){if(a[1]==="not")if((q.exec(a[3])||"").length>1||/^\w/.test(a[3]))a[3]=f(a[3],null,null,b);else{a=f.filter(a[3],b,c,true^l);c||d.push.apply(d,a);return false}else if(k.match.POS.test(a[0])||k.match.CHILD.test(a[0]))return true;return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===
true},checked:function(a){return a.checked===true},selected:function(a){return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!f(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===
a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-
0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var l=b[1],g=k.filters[l];if(g)return g(a,c,b,d);else if(l==="contains")return(a.textContent||a.innerText||f.getText([a])||"").indexOf(b[3])>=0;else if(l==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return false;return true}else f.error("Syntax error, unrecognized expression: "+l)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return false;if(c===
"first")return true;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return false;return true;case "nth":c=b[2];var l=b[3];if(c===1&&l===0)return true;b=b[0];var g=a.parentNode;if(g&&(g.sizcache!==b||!a.nodeIndex)){var s=0;for(d=g.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++s;g.sizcache=b}a=a.nodeIndex-l;return c===0?a===0:a%c===0&&a/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===
b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1];a=k.attrHandle[c]?k.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c);c=a+"";var d=b[2];b=b[4];return a==null?d==="!=":d==="="?c===b:d==="*="?c.indexOf(b)>=0:d==="~="?(" "+c+" ").indexOf(b)>=0:!b?c&&a!==false:d==="!="?c!==b:d==="^="?c.indexOf(b)===0:d==="$="?c.substr(c.length-b.length)===b:d==="|="?c===b||c.substr(0,b.length+1)===b+"-":false},POS:function(a,b,c,d){var l=k.setFilters[b[2]];
if(l)return l(a,c,b,d)}}},p=k.match.POS,m=function(a,b){return"\\"+(b-0+1)};for(var e in k.match){k.match[e]=new RegExp(k.match[e].source+/(?![^\[]*\])(?![^\(]*\))/.source);k.leftMatch[e]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[e].source.replace(/\\(\d+)/g,m))}var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(document.documentElement.childNodes,0)}catch(r){n=function(a,b){b=b||[];var c=0;if(u.call(a)==="[object Array]")Array.prototype.push.apply(b,
a);else if(typeof a.length==="number")for(var d=a.length;c<d;c++)b.push(a[c]);else for(;a[c];c++)b.push(a[c]);return b}}var v;if(document.documentElement.compareDocumentPosition)v=function(a,b){if(!a.compareDocumentPosition||!b.compareDocumentPosition){if(a==b)h=true;return a.compareDocumentPosition?-1:1}a=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(a===0)h=true;return a};else if("sourceIndex"in document.documentElement)v=function(a,b){if(!a.sourceIndex||!b.sourceIndex){if(a==b)h=true;return a.sourceIndex?
-1:1}a=a.sourceIndex-b.sourceIndex;if(a===0)h=true;return a};else if(document.createRange)v=function(a,b){if(!a.ownerDocument||!b.ownerDocument){if(a==b)h=true;return a.ownerDocument?-1:1}var c=a.ownerDocument.createRange(),d=b.ownerDocument.createRange();c.setStart(a,0);c.setEnd(a,0);d.setStart(b,0);d.setEnd(b,0);a=c.compareBoundaryPoints(Range.START_TO_END,d);if(a===0)h=true;return a};f.getText=function(a){for(var b="",c,d=0;a[d];d++){c=a[d];if(c.nodeType===3||c.nodeType===4)b+=c.nodeValue;else if(c.nodeType!==
8)b+=f.getText(c.childNodes)}return b};(function(){var a=document.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=document.documentElement;c.insertBefore(a,c.firstChild);if(document.getElementById(b)){k.find.ID=function(d,l,g){if(typeof l.getElementById!=="undefined"&&!g)return(l=l.getElementById(d[1]))?l.id===d[1]||typeof l.getAttributeNode!=="undefined"&&l.getAttributeNode("id").nodeValue===d[1]?[l]:undefined:[]};k.filter.ID=function(d,l){var g=typeof d.getAttributeNode!==
"undefined"&&d.getAttributeNode("id");return d.nodeType===1&&g&&g.nodeValue===l}}c.removeChild(a);c=a=null})();(function(){var a=document.createElement("div");a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0)k.find.TAG=function(b,c){c=c.getElementsByTagName(b[1]);if(b[1]==="*"){b=[];for(var d=0;c[d];d++)c[d].nodeType===1&&b.push(c[d]);c=b}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!==
"#")k.attrHandle.href=function(b){return b.getAttribute("href",2)};a=null})();document.querySelectorAll&&function(){var a=f,b=document.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){f=function(d,l,g,s){l=l||document;if(!s&&l.nodeType===9&&!f.isXML(l))try{return n(l.querySelectorAll(d),g)}catch(o){}return a(d,l,g,s)};for(var c in a)f[c]=a[c];b=null}}();(function(){var a=document.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!(!a.getElementsByClassName||a.getElementsByClassName("e").length===0)){a.lastChild.className="e";if(a.getElementsByClassName("e").length!==1){k.order.splice(1,0,"CLASS");k.find.CLASS=function(b,c,d){if(typeof c.getElementsByClassName!=="undefined"&&!d)return c.getElementsByClassName(b[1])};a=null}}})();f.contains=document.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)};f.isXML=function(a){return(a=(a?
a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":false};var x=function(a,b){var c=[],d="",l;for(b=b.nodeType?[b]:b;l=k.match.PSEUDO.exec(a);){d+=l[0];a=a.replace(k.match.PSEUDO,"")}a=k.relative[a]?a+"*":a;l=0;for(var g=b.length;l<g;l++)f(a,b[l],c);return f.filter(d,c)};KISSY.ExternalSelector=f;KISSY.ExternalSelector._filter=function(a,b){return f.matches(b,KISSY.query(a))}})();
KISSY.add("datalazyload",function(j,w){function q(e,n){if(!(this instanceof q))return new q(e,n);if(n===w){n=e;e=[i]}j.isArray(e)||(e=[j.get(e)||i]);this.containers=e;this.config=j.merge(m,n);this._init()}var t=j.DOM,u=j.Event,h=window,i=document,f={AUTO:"auto",MANUAL:"manual"},k="scroll",p="resize",m={mod:f.MANUAL,diff:"default",placeholder:"none"};j.augment(q,{_init:function(){this.threshold=this._getThreshold();this._filterItems();this._getItemsLength()&&this._initLoadEvent()},_filterItems:function(){var e=
this.containers,n,r,v,x=[],a=[];n=0;for(r=e.length;n<r;++n){v=j.query("img",e[n]);x=x.concat(j.filter(v,this._filterImg,this));v=j.query("textarea",e[n]);a=a.concat(j.filter(v,this._filterArea,this))}this.images=x;this.areas=a},_filterImg:function(e){var n=e.getAttribute("data-lazyload-src"),r=this.threshold,v=this.config.placeholder;if(this.config.mod===f.MANUAL){if(n){if(v!=="none")e.src=v;return true}}else if(t.offset(e).top>r&&!n){t.attr(e,"data-lazyload-src",e.src);if(v!=="none")e.src=v;else e.removeAttribute("src");
return true}},_filterArea:function(e){return t.hasClass(e,"ks-datalazyload")},_initLoadEvent:function(){function e(){r||(r=setTimeout(function(){n();r=null},100))}function n(){v._loadItems();if(v._getItemsLength()===0){u.remove(h,k,e);u.remove(h,p,e)}}var r,v=this;u.on(h,k,e);u.on(h,p,function(){v.threshold=v._getThreshold();e()});v._getItemsLength()&&j.ready(function(){n()})},_loadItems:function(){this._loadImgs();this._loadAreas()},_loadImgs:function(){this.images=j.filter(this.images,this._loadImg,
this)},_loadImg:function(e){var n=this.threshold+t.scrollTop();if(t.offset(e).top<=n)this._loadImgSrc(e);else return true},_loadImgSrc:function(e,n){n=n||"data-lazyload-src";var r=e.getAttribute(n);if(r&&e.src!=r){e.src=r;e.removeAttribute(n)}},_loadAreas:function(){this.areas=j.filter(this.areas,this._loadArea,this)},_loadArea:function(e){var n=t.offset(e).top;if(!n&&t.css(e,"none")=="none")n=t.offset(e.parentNode).top;if(n<=this.threshold+t.scrollTop())this._loadAreaData(e.parentNode,e);else return true},
_loadAreaData:function(e,n){n.style.display="none";n.className="";var r=t.create("<div>");e.insertBefore(r,n);t.html(r,n.value,true)},_getThreshold:function(){var e=this.config.diff,n=t.viewportHeight();return e==="default"?2*n:n+e},_getItemsLength:function(){return this.images.length+this.areas.length},loadCustomLazyData:function(e,n,r){var v=this,x,a;j.isArray(e)||(e=[j.get(e)]);j.each(e,function(b){switch(n){case "textarea-data":if((x=j.get("textarea",b))&&t.hasClass(x,r||"ks-datalazyload-custom"))v._loadAreaData(b,
x);break;default:a=b.nodeName==="IMG"?[b]:j.query("img",b);j.each(a,function(c){v._loadImgSrc(c,r||"data-lazyload-src-custom")})}})}});j.mix(q,q.prototype,true,["loadCustomLazyData","_loadImgSrc","_loadAreaData"]);j.DataLazyload=q});
KISSY.add("switchable",function(j,w){function q(h,i){i=i||{};if(!("markupType"in i))if(i.panelCls)i.markupType=1;else if(i.panels)i.markupType=2;i=j.merge(q.Config,i);this.container=j.get(h);this.config=i;this.activeIndex=i.activeIndex;this._init()}var t=j.DOM,u=j.Event;q.Config={markupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:0,
activeTriggerCls:"active",steps:1,viewSize:[]};q.Plugins=[];j.augment(q,j.EventTarget,{_init:function(){var h=this,i=h.config;if(h.fire("beforeInit")!==false){h._parseMarkup();i.hasTriggers&&h._bindTriggers();j.each(q.Plugins,function(f){f.init&&f.init(h)});h.fire("init")}},_parseMarkup:function(){var h=this.container,i=this.config,f,k=[],p=[];switch(i.markupType){case 0:if(f=j.get("."+i.navCls,h))k=t.children(f);f=j.get("."+i.contentCls,h);p=t.children(f);break;case 1:k=j.query("."+i.triggerCls,
h);p=j.query("."+i.panelCls,h);break;case 2:k=i.triggers;p=i.panels;break}h=p.length;this.length=h/i.steps;if(i.hasTriggers&&h>0&&k.length===0)k=this._generateTriggersMarkup(this.length);this.triggers=j.makeArray(k);this.panels=j.makeArray(p);this.content=f||p[0].parentNode},_generateTriggersMarkup:function(h){var i=this.config,f=t.create("<ul>"),k,p;f.className=i.navCls;for(p=0;p<h;p++){k=t.create("<li>");if(p===this.activeIndex)k.className=i.activeTriggerCls;k.innerHTML=p+1;f.appendChild(k)}this.container.appendChild(f);
return t.children(f)},_bindTriggers:function(){var h=this,i=h.config,f=h.triggers,k,p,m=f.length;for(p=0;p<m;p++)(function(e){k=f[e];u.on(k,"click focus",function(){h._onFocusTrigger(e)});if(i.triggerType==="mouse"){u.on(k,"mouseenter",function(){h._onMouseEnterTrigger(e)});u.on(k,"mouseleave",function(){h._onMouseLeaveTrigger(e)})}})(p)},_onFocusTrigger:function(h){if(this._triggerIsValid()){this._cancelSwitchTimer();this.switchTo(h)}},_onMouseEnterTrigger:function(h){var i=this;if(i._triggerIsValid())i.switchTimer=
j.later(function(){i.switchTo(h)},i.config.delay*1E3)},_onMouseLeaveTrigger:function(){this._cancelSwitchTimer()},_triggerIsValid:function(h){return this.activeIndex!==h},_cancelSwitchTimer:function(){if(this.switchTimer){this.switchTimer.cancel();this.switchTimer=w}},switchTo:function(h,i){var f=this.config,k=this.triggers,p=this.panels,m=this.activeIndex,e=f.steps,n=m*e,r=h*e;if(!this._triggerIsValid())return this;if(this.fire("beforeSwitch",{toIndex:h})===false)return this;if(f.hasTriggers)this._switchTrigger(m>
-1?k[m]:null,k[h]);if(i===w)i=h>m?"forward":"backward";this._switchView(p.slice(n,n+e),p.slice(r,r+e),h,i);this.activeIndex=h;return this},_switchTrigger:function(h,i){var f=this.config.activeTriggerCls;h&&t.removeClass(h,f);t.addClass(i,f)},_switchView:function(h,i,f){t.css(h,"display","none");t.css(i,"display","block");this._fireOnSwitch(f)},_fireOnSwitch:function(h){this.fire("switch",{currentIndex:h})},prev:function(){var h=this.activeIndex;this.switchTo(h>0?h-1:this.length-1,"backward")},next:function(){var h=
this.activeIndex;this.switchTo(h<this.length-1?h+1:0,"forward")}});j.Switchable=q});
KISSY.add("switchable-autoplay",function(j,w){var q=j.Event,t=j.Switchable;j.mix(t.Config,{autoplay:false,interval:5,pauseOnHover:true});t.Plugins.push({name:"autoplay",init:function(u){var h=u.config,i=h.interval*1E3,f;if(h.autoplay){if(h.pauseOnHover){q.on(u.container,"mouseenter",function(){if(f){f.cancel();f=w}u.paused=true});q.on(u.container,"mouseleave",function(){f=j.later(function(){u.paused=false;f=w},i)})}u.autoplayTimer=j.later(function(){u.paused||u.switchTo(u.activeIndex<u.length-1?u.activeIndex+
1:0,"forward")},i,true)}}})});
KISSY.add("switchable-effect",function(j,w){var q=j.DOM,t=j.Anim,u=j.Switchable,h;j.mix(u.Config,{effect:"none",duration:0.5,easing:"easeNone"});u.Effects={none:function(i,f,k){q.css(i,"display","none");q.css(f,"display","block");k()},fade:function(i,f,k){i.length!==1&&j.error("fade effect only supports steps == 1.");var p=this,m=p.config,e=i[0],n=f[0];p.anim&&p.anim.stop(true);q.css(n,"opacity",1);p.anim=(new t(e,{opacity:0},m.duration,m.easing,function(){p.anim=w;q.css(n,"z-index",9);q.css(e,"z-index",
1);k()})).run()},scroll:function(i,f,k,p){var m=this;i=m.config;f=i.effect==="scrollx";var e={};e[f?"left":"top"]=-(m.viewSize[f?0:1]*p)+"px";m.anim&&m.anim.stop();m.anim=(new t(m.content,e,i.duration,i.easing,function(){m.anim=w;k()})).run()}};h=u.Effects;h.scrollx=h.scrolly=h.scroll;u.Plugins.push({name:"effect",init:function(i){var f=i.config,k=f.effect,p=i.panels,m=i.content,e=f.steps,n=i.activeIndex,r=p.length;i.viewSize=[f.viewSize[0]||p[0].offsetWidth*e,f.viewSize[1]||p[0].offsetHeight*e];
if(k!=="none"){j.each(p,function(b){q.css(b,"display","block")});switch(k){case "scrollx":case "scrolly":q.css(m,"position","absolute");q.css(m.parentNode,"position","relative");if(k==="scrollx"){q.css(p,"float","left");q.width(m,i.viewSize[0]*(r/e))}break;case "fade":var v=n*e,x=v+e-1,a;j.each(p,function(b,c){a=c>=v&&c<=x;q.css(b,{opacity:a?1:0,position:"absolute",zIndex:a?9:1})});break}}}});j.augment(u,{_switchView:function(i,f,k,p){var m=this,e=m.config.effect;(j.isFunction(e)?e:h[e]).call(m,i,
f,function(){m._fireOnSwitch(k)},k,p)}})});
KISSY.add("switchable-circular",function(j,w){function q(a,b,c,d,l){var g=this;a=g.config;b=g.length;var s=g.activeIndex,o=a.scrollType===v,y=o?k:p,C=g.viewSize[o?0:1];o=-C*d;var B={},D,A=l===r;if(D=A&&s===0&&d===b-1||l===n&&s===b-1&&d===0)o=t.call(g,g.panels,d,A,y,C);B[y]=o+e;g.anim&&g.anim.stop();g.anim=(new j.Anim(g.content,B,a.duration,a.easing,function(){D&&u.call(g,g.panels,d,A,y,C);g.anim=w;c()})).run()}function t(a,b,c,d,l){var g=this.config.steps;b=this.length;var s=c?b-1:0,o=(s+1)*g;for(g=
s*g;g<o;g++){h.css(a[g],i,f);h.css(a[g],d,(c?-1:1)*l*b)}return c?l:-l*b}function u(a,b,c,d,l){var g=this.config.steps;b=this.length;var s=c?b-1:0,o=(s+1)*g;for(g=s*g;g<o;g++){h.css(a[g],i,m);h.css(a[g],d,m)}h.css(this.content,d,c?-l*(b-1):m)}var h=j.DOM,i="position",f="relative",k="left",p="top",m="",e="px",n="forward",r="backward",v="scrollx",x=j.Switchable;j.mix(x.Config,{circular:false});x.Plugins.push({name:"circular",init:function(a){a=a.config;if(a.circular&&(a.effect===v||a.effect==="scrolly")){a.scrollType=
a.effect;a.effect=q}}})});
KISSY.add("switchable-lazyload",function(j){var w=j.DOM,q="beforeSwitch",t="img-src",u="textarea-data",h={},i=j.Switchable;h[t]="data-lazyload-src-custom";h[u]="ks-datalazyload-custom";j.mix(i.Config,{lazyDataType:"",lazyDataFlag:""});i.Plugins.push({name:"lazyload",init:function(f){function k(v){var x=e.steps;v=v.toIndex*x;m.loadCustomLazyData(f.panels.slice(v,v+x),n,r);p()&&f.detach(q,k)}function p(){var v,x,a,b=n===t;if(v=b?"img":n===u?"textarea":""){v=j.query(v,f.container);x=0;for(a=v.length;x<
a;x++)if(b?w.attr(v[x],r):w.hasClass(v[x],r))return false}return true}var m=j.DataLazyload,e=f.config,n=e.lazyDataType,r=e.lazyDataFlag||h[n];!m||!n||!r||f.on(q,k)}})});KISSY.add("tabs",function(j){function w(q,t){if(!(this instanceof w))return new w(q,t);w.superclass.constructor.call(this,q,t)}j.extend(w,j.Switchable);j.Tabs=w});
KISSY.add("slide",function(j){function w(t,u){if(!(this instanceof w))return new w(t,u);w.superclass.constructor.call(this,t,j.merge(q,u))}var q={autoplay:true,circular:true};j.extend(w,j.Switchable);j.Slide=w});
KISSY.add("carousel",function(j,w){function q(m,e){var n=this;if(!(n instanceof q))return new q(m,e);n.on("init",function(){t(n)});q.superclass.constructor.call(n,m,j.merge(p,e))}function t(m){var e=m.config,n=e.disableBtnCls;j.each(["prev","next"],function(r){var v=m[r+"Btn"]=j.get(i+e[r+"BtnCls"],m.container);h.on(v,"click",function(x){x.preventDefault();u.hasClass(v,n)||m[r]()})});e.circular||m.on("switch",function(r){r=r.currentIndex;r=r===0?m[f]:r===m.length-1?m[k]:w;u.removeClass([m[f],m[k]],
n);r&&u.addClass(r,n)});h.on(m.panels,"click focus",function(){m.fire("itemSelected",{item:this})})}var u=j.DOM,h=j.Event,i=".",f="prevBtn",k="nextBtn",p={circular:true,prevBtnCls:"ks-switchable-prev-btn",nextBtnCls:"ks-switchable-next-btn",disableBtnCls:"ks-switchable-disable-btn"};j.extend(q,j.Switchable);j.Carousel=q});
KISSY.add("accordion",function(j){function w(u,h){if(!(this instanceof w))return new w(u,h);w.superclass.constructor.call(this,u,j.merge(t,h))}var q=j.DOM,t={triggerType:"click",multiple:false};j.extend(w,j.Switchable);j.Accordion=w;j.augment(w,{_triggerIsValid:function(u){return this.activeIndex!==u||this.config.multiple},_switchView:function(u,h,i){var f=this.config,k=h[0];if(f.multiple){q.toggleClass(this.triggers[i],f.activeTriggerCls);q.css(k,"display",k.style.display=="none"?"block":"none");
this._fireOnSwitch(i)}else w.superclass._switchView.call(this,u,h,i)}})});
