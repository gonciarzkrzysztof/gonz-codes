var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire1d06,t=e.register;t("f8r5A",function(t,n){t.exports=e("2N7hF").EventSourcePolyfill}),t("2N7hF",function(e,t){!/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */function(t){var n=t.setTimeout,o=t.clearTimeout,r=t.XMLHttpRequest,i=t.XDomainRequest,a=t.ActiveXObject,s=t.EventSource,d=t.document,c=t.Promise,u=t.fetch,l=t.Response,h=t.TextDecoder,f=t.TextEncoder,p=t.AbortController;if("undefined"==typeof window||void 0===d||"readyState"in d||null!=d.body||(d.readyState="loading",window.addEventListener("load",function(e){d.readyState="complete"},!1)),null==r&&null!=a&&(r=function(){return new a("Microsoft.XMLHTTP")}),void 0==Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),Date.now||(Date.now=function(){return new Date().getTime()}),void 0==p){var v=u;u=function(e,t){var n=t.signal;return v(e,{headers:t.headers,credentials:t.credentials,cache:t.cache}).then(function(e){var t=e.body.getReader();return n._reader=t,n._aborted&&n._reader.cancel(),{status:e.status,statusText:e.statusText,headers:e.headers,body:{getReader:function(){return t}}}})},p=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){null!=this.signal._reader&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function y(){this.bitsNeeded=0,this.codePoint=0}y.prototype.decode=function(e){function t(e,t,n){if(1===n)return e>=128>>t&&e<<t<=2047;if(2===n)return e>=2048>>t&&e<<t<=55295||e>=57344>>t&&e<<t<=65535;if(3===n)return e>=65536>>t&&e<<t<=1114111;throw Error()}function n(e,t){if(6===e)return t>>6>15?3:t>31?2:1;if(12===e)return t>15?3:2;if(18===e)return 3;throw Error()}for(var o="",r=this.bitsNeeded,i=this.codePoint,a=0;a<e.length;a+=1){var s=e[a];0!==r&&(s<128||s>191||!t(i<<6|63&s,r-6,n(r,i)))&&(r=0,o+=String.fromCharCode(i=65533)),0===r?(s>=0&&s<=127?(r=0,i=s):s>=192&&s<=223?(r=6,i=31&s):s>=224&&s<=239?(r=12,i=15&s):s>=240&&s<=247?(r=18,i=7&s):(r=0,i=65533),0===r||t(i,r,n(r,i))||(r=0,i=65533)):(r-=6,i=i<<6|63&s),0===r&&(i<=65535?o+=String.fromCharCode(i):o+=String.fromCharCode(55296+(i-65535-1>>10))+String.fromCharCode(56320+(i-65535-1&1023)))}return this.bitsNeeded=r,this.codePoint=i,o},(void 0==h||void 0==f||!function(){try{return"test"===new h().decode(new f().encode("test"),{stream:!0})}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1}())&&(h=y);var g=function(){};function w(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=g,this.onload=g,this.onerror=g,this.onreadystatechange=g,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=g}function b(e){return e.replace(/[A-Z]/g,function(e){return String.fromCharCode(e.charCodeAt(0)+32)})}function E(e){for(var t=Object.create(null),n=e.split("\r\n"),o=0;o<n.length;o+=1){var r=n[o].split(": "),i=r.shift(),a=r.join(": ");t[b(i)]=a}this._map=t}function T(){}function m(e){this._headers=e}function C(){}function S(){this._listeners=Object.create(null)}function _(e){n(function(){throw e},0)}function x(e){this.type=e,this.target=void 0}function R(e,t){x.call(this,e),this.data=t.data,this.lastEventId=t.lastEventId}function O(e,t){x.call(this,e),this.status=t.status,this.statusText=t.statusText,this.headers=t.headers}function A(e,t){x.call(this,e),this.error=t.error}w.prototype.open=function(e,t){this._abort(!0);var i=this,a=this._xhr,s=1,d=0;this._abort=function(e){0!==i._sendTimeout&&(o(i._sendTimeout),i._sendTimeout=0),1!==s&&2!==s&&3!==s||(s=4,a.onload=g,a.onerror=g,a.onabort=g,a.onprogress=g,a.onreadystatechange=g,a.abort(),0!==d&&(o(d),d=0),e||(i.readyState=4,i.onabort(null),i.onreadystatechange())),s=0};var c=function(){if(1===s){var e=0,t="",n=void 0;if("contentType"in a)e=200,t="OK",n=a.contentType;else try{e=a.status,t=a.statusText,n=a.getResponseHeader("Content-Type")}catch(o){e=0,t="",n=void 0}0!==e&&(s=2,i.readyState=2,i.status=e,i.statusText=t,i._contentType=n,i.onreadystatechange())}},u=function(){if(c(),2===s||3===s){s=3;var e="";try{e=a.responseText}catch(e){}i.readyState=3,i.responseText=e,i.onprogress()}},l=function(e,t){if((null==t||null==t.preventDefault)&&(t={preventDefault:g}),u(),1===s||2===s||3===s){if(s=4,0!==d&&(o(d),d=0),i.readyState=4,"load"===e)i.onload(t);else if("error"===e)i.onerror(t);else if("abort"===e)i.onabort(t);else throw TypeError();i.onreadystatechange()}},h=function(e){void 0==a||(4===a.readyState?"onload"in a&&"onerror"in a&&"onabort"in a||l(""===a.responseText?"error":"load",e):3===a.readyState?"onprogress"in a||u():2===a.readyState&&c())},f=function(){d=n(function(){f()},500),3===a.readyState&&u()};"onload"in a&&(a.onload=function(e){l("load",e)}),"onerror"in a&&(a.onerror=function(e){l("error",e)}),"onabort"in a&&(a.onabort=function(e){l("abort",e)}),"onprogress"in a&&(a.onprogress=u),"onreadystatechange"in a&&(a.onreadystatechange=function(e){h(e)}),("contentType"in a||!("ontimeout"in r.prototype))&&(t+=(-1===t.indexOf("?")?"?":"&")+"padding=true"),a.open(e,t,!0),"readyState"in a&&(d=n(function(){f()},0))},w.prototype.abort=function(){this._abort(!1)},w.prototype.getResponseHeader=function(e){return this._contentType},w.prototype.setRequestHeader=function(e,t){var n=this._xhr;"setRequestHeader"in n&&n.setRequestHeader(e,t)},w.prototype.getAllResponseHeaders=function(){return void 0!=this._xhr.getAllResponseHeaders&&this._xhr.getAllResponseHeaders()||""},w.prototype.send=function(){if((!("ontimeout"in r.prototype)||!("sendAsBinary"in r.prototype)&&!("mozAnon"in r.prototype))&&void 0!=d&&void 0!=d.readyState&&"complete"!==d.readyState){var e=this;e._sendTimeout=n(function(){e._sendTimeout=0,e.send()},4);return}var t=this._xhr;"withCredentials"in t&&(t.withCredentials=this.withCredentials);try{t.send(void 0)}catch(e){throw e}},E.prototype.get=function(e){return this._map[b(e)]},null!=r&&null==r.HEADERS_RECEIVED&&(r.HEADERS_RECEIVED=2),T.prototype.open=function(e,t,n,o,i,a,s){e.open("GET",i);var d=0;for(var c in e.onprogress=function(){var t=e.responseText.slice(d);d+=t.length,n(t)},e.onerror=function(e){e.preventDefault(),o(Error("NetworkError"))},e.onload=function(){o(null)},e.onabort=function(){o(null)},e.onreadystatechange=function(){e.readyState===r.HEADERS_RECEIVED&&t(e.status,e.statusText,e.getResponseHeader("Content-Type"),new E(e.getAllResponseHeaders()))},e.withCredentials=a,s)Object.prototype.hasOwnProperty.call(s,c)&&e.setRequestHeader(c,s[c]);return e.send(),e},m.prototype.get=function(e){return this._headers.get(e)},C.prototype.open=function(e,t,n,o,r,i,a){var s=null,d=new p,l=d.signal,f=new h;return u(r,{headers:a,credentials:i?"include":"same-origin",signal:l,cache:"no-store"}).then(function(e){return s=e.body.getReader(),t(e.status,e.statusText,e.headers.get("Content-Type"),new m(e.headers)),new c(function(e,t){var o=function(){s.read().then(function(t){t.done?e(void 0):(n(f.decode(t.value,{stream:!0})),o())}).catch(function(e){t(e)})};o()})}).catch(function(e){if("AbortError"!==e.name)return e}).then(function(e){o(e)}),{abort:function(){null!=s&&s.cancel(),d.abort()}}},S.prototype.dispatchEvent=function(e){e.target=this;var t=this._listeners[e.type];if(void 0!=t)for(var n=t.length,o=0;o<n;o+=1){var r=t[o];try{"function"==typeof r.handleEvent?r.handleEvent(e):r.call(this,e)}catch(e){_(e)}}},S.prototype.addEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];void 0==o&&(o=[],n[e]=o);for(var r=!1,i=0;i<o.length;i+=1)o[i]===t&&(r=!0);r||o.push(t)},S.prototype.removeEventListener=function(e,t){e=String(e);var n=this._listeners,o=n[e];if(void 0!=o){for(var r=[],i=0;i<o.length;i+=1)o[i]!==t&&r.push(o[i]);0===r.length?delete n[e]:n[e]=r}},R.prototype=Object.create(x.prototype),O.prototype=Object.create(x.prototype),A.prototype=Object.create(x.prototype);var D=/^text\/event\-stream(;.*)?$/i,N=function(e,t){var n=null==e?t:parseInt(e,10);return n!=n&&(n=t),H(n)},H=function(e){return Math.min(Math.max(e,1e3),18e6)},j=function(e,t,n){try{"function"==typeof t&&t.call(e,n)}catch(e){_(e)}};function I(e,t){var a,s,d,c,u,l,h,f,p,v,y,g,b,E,m,_,x,I,q,L,M,X,G,V,F,U,k,z,B,K;S.call(this),t=t||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,a=this,s=e,d=t,s=String(s),c=!!d.withCredentials,u=d.lastEventIdQueryParameterName||"lastEventId",l=H(1e3),h=N(d.heartbeatTimeout,45e3),f="",p=l,v=!1,y=0,g=d.headers||{},b=d.Transport,E=P&&void 0==b?void 0:new w(void 0!=b?new b:void 0!=r&&"withCredentials"in r.prototype||void 0==i?new r:new i),m=null!=b&&"string"!=typeof b?new b:void 0==E?new C:new T,_=void 0,x=0,I=-1,q="",L="",M="",X="",G=0,V=0,F=0,U=function(e,t,n,o){if(0===I){if(200===e&&void 0!=n&&D.test(n)){I=1,v=Date.now(),p=l,a.readyState=1;var r=new O("open",{status:e,statusText:t,headers:o});a.dispatchEvent(r),j(a,a.onopen,r)}else{var i="";200!==e?(t&&(t=t.replace(/\s+/g," ")),i="EventSource's response has a status "+e+" "+t+" that is not 200. Aborting the connection."):i="EventSource's response has a Content-Type specifying an unsupported type: "+(void 0==n?"-":n.replace(/\s+/g," "))+". Aborting the connection.",B();var r=new O("error",{status:e,statusText:t,headers:o});a.dispatchEvent(r),j(a,a.onerror,r),console.error(i)}}},k=function(e){if(1===I){for(var t=-1,r=0;r<e.length;r+=1){var i=e.charCodeAt(r);(10===i||13===i)&&(t=r)}var s=(-1!==t?X:"")+e.slice(0,t+1);X=(-1===t?X:"")+e.slice(t+1),""!==e&&(v=Date.now(),y+=e.length);for(var d=0;d<s.length;d+=1){var i=s.charCodeAt(d);if(-1===G&&10===i)G=0;else if(-1===G&&(G=0),13===i||10===i){if(0!==G){1===G&&(F=d+1);var c=s.slice(V,F-1),u=s.slice(F+(F<d&&32===s.charCodeAt(F)?1:0),d);"data"===c?q+="\n"+u:"id"===c?L=u:"event"===c?M=u:"retry"===c?p=l=N(u,l):"heartbeatTimeout"===c&&(h=N(u,h),0!==x&&(o(x),x=n(function(){K()},h)))}if(0===G){if(""!==q){f=L,""===M&&(M="message");var g=new R(M,{data:q.slice(1),lastEventId:L});if(a.dispatchEvent(g),"open"===M?j(a,a.onopen,g):"message"===M?j(a,a.onmessage,g):"error"===M&&j(a,a.onerror,g),2===I)return}q="",M=""}G=13===i?-1:0}else 0===G&&(V=d,G=1),1===G?58===i&&(F=d+1,G=2):2===G&&(G=3)}}},z=function(e){if(1===I||0===I){I=-1,0!==x&&(o(x),x=0),x=n(function(){K()},p),p=H(Math.min(16*l,2*p)),a.readyState=0;var t=new A("error",{error:e});a.dispatchEvent(t),j(a,a.onerror,t),void 0!=e&&console.error(e)}},B=function(){I=2,void 0!=_&&(_.abort(),_=void 0),0!==x&&(o(x),x=0),a.readyState=2},K=function(){if(x=0,-1!==I){if(v||void 0==_){var e=Math.max((v||Date.now())+h-Date.now(),1);v=!1,x=n(function(){K()},e)}else z(Error("No activity within "+h+" milliseconds. "+(0===I?"No response received.":y+" chars received.")+" Reconnecting.")),void 0!=_&&(_.abort(),_=void 0);return}v=!1,y=0,x=n(function(){K()},h),I=0,q="",M="",L=f,X="",V=0,F=0,G=0;var t=s;if("data:"!==s.slice(0,5)&&"blob:"!==s.slice(0,5)&&""!==f){var o=s.indexOf("?");t=(-1===o?s:s.slice(0,o+1)+s.slice(o+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(e,t){return t===u?"":e}))+((-1===s.indexOf("?")?"?":"&")+u)+"="+encodeURIComponent(f)}var r=a.withCredentials,i={};i.Accept="text/event-stream";var d=a.headers;if(void 0!=d)for(var c in d)Object.prototype.hasOwnProperty.call(d,c)&&(i[c]=d[c]);try{_=m.open(E,U,k,z,t,r,i)}catch(e){throw B(),e}},a.url=s,a.readyState=0,a.withCredentials=c,a.headers=g,a._close=B,K()}var P=void 0!=u&&void 0!=l&&"body"in l.prototype;I.prototype=Object.create(S.prototype),I.prototype.CONNECTING=0,I.prototype.OPEN=1,I.prototype.CLOSED=2,I.prototype.close=function(){this._close()},I.CONNECTING=0,I.OPEN=1,I.CLOSED=2,I.prototype.withCredentials=void 0;var q=s;void 0==r||void 0!=s&&"withCredentials"in s.prototype||(q=I),function(n){if("object"==typeof e.exports){var o=n(e.exports);void 0!==o&&(e.exports=o)}else"function"==typeof define&&define.amd?define(["exports"],n):n(t)}(function(e){e.EventSourcePolyfill=I,e.NativeEventSource=s,e.EventSource=q})}("undefined"==typeof globalThis?"undefined"!=typeof window?window:"undefined"!=typeof self?self:e.exports:globalThis)});
//# sourceMappingURL=browser.ca53afea.js.map
