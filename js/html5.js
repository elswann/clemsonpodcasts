(function(e,t){function u(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function a(){var e=c.elements;return typeof e=="string"?e.split(" "):e}function f(e){var t={},n=e.createElement,s=e.createDocumentFragment,o=s();e.createElement=function(e){c.shivMethods||n(e);var s;return t[e]?s=t[e].cloneNode():i.test(e)?s=(t[e]=n(e)).cloneNode():s=n(e),s.canHaveChildren&&!r.test(e)?o.appendChild(s):s},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+a().join().replace(/\w+/g,function(e){return t[e]=n(e),o.createElement(e),'c("'+e+'")'})+");return n}")(c,o)}function l(e){var t;return e.documentShived?e:(c.shivCSS&&!s&&(t=!!u(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),o||(t=!f(e)),t&&(e.documentShived=t),e)}function v(e){var t,n=e.getElementsByTagName("*"),r=n.length,i=RegExp("^(?:"+a().join("|")+")$","i"),s=[];while(r--)t=n[r],i.test(t.nodeName)&&s.push(t.applyElement(m(t)));return s}function m(e){var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(p+":"+e.nodeName);while(r--)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}function g(e){var t,n=e.split("{"),r=n.length,i=RegExp("(^|[\\s,>+~])("+a().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+p+"\\:$2";while(r--)t=n[r]=n[r].split("}"),t[t.length-1]=t[t.length-1].replace(i,s),n[r]=t.join("}");return n.join("{")}function y(e){var t=e.length;while(t--)e[t].removeNode()}function b(e){var t,n,r=e.namespaces,i=e.parentWindow;return!d||e.printShived?e:(typeof r[p]=="undefined"&&r.add(p),i.attachEvent("onbeforeprint",function(){var r,i,s,o=e.styleSheets,a=[],f=o.length,l=Array(f);while(f--)l[f]=o[f];while(s=l.pop())if(!s.disabled&&h.test(s.media)){for(r=s.imports,f=0,i=r.length;f<i;f++)l.push(r[f]);try{a.push(s.cssText)}catch(c){}}a=g(a.reverse().join("")),n=v(e),t=u(e,a)}),i.attachEvent("onafterprint",function(){y(n),t.removeNode(!0)}),e.printShived=!0,e)}var n=e.html5||{},r=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,i=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,s,o;(function(){var n=t.createElement("a");n.innerHTML="<xyz></xyz>",s="hidden"in n,s&&typeof injectElementWithStyles=="function"&&injectElementWithStyles("#modernizr{}",function(t){t.hidden=!0,s=(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).display=="none"}),o=n.childNodes.length==1||function(){try{t.createElement("a")}catch(e){return!0}var n=t.createDocumentFragment();return typeof n.cloneNode=="undefined"||typeof n.createDocumentFragment=="undefined"||typeof n.createElement=="undefined"}()})();var c={elements:n.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:n.shivCSS!==!1,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:l};e.html5=c,l(t);var h=/^$|\b(?:all|print)\b/,p="html5shiv",d=!o&&function(){var n=t.documentElement;return typeof t.namespaces!="undefined"&&typeof t.parentWindow!="undefined"&&typeof n.applyElement!="undefined"&&typeof n.removeNode!="undefined"&&typeof e.attachEvent!="undefined"}();c.type+=" print",c.shivPrint=b,b(t)})(this,document);