import{g as m}from"./emoji-picker-Coav-X6q.chunk.mjs";function b(a,e){for(var s=0;s<e.length;s++){const t=e[s];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in a)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(a,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}function d(a){const e=a.regex,s=e.concat(/[\p{L}_]/u,e.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),t=/[\p{L}0-9._:-]+/u,n={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},l=a.inherit(i,{begin:/\(/,end:/\)/}),o=a.inherit(a.APOS_STRING_MODE,{className:"string"}),c=a.inherit(a.QUOTE_STRING_MODE,{className:"string"}),r={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:t,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,c,o,l,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,l,c,o]}]}]},a.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},n,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[r],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[r],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:e.concat(/</,e.lookahead(e.concat(s,e.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:s,relevance:0,starts:r}]},{className:"tag",begin:e.concat(/<\//,e.lookahead(e.concat(s,/>/))),contains:[{className:"name",begin:s,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}var g=d;const u=m(g),p=b({__proto__:null,default:u},[g]);export{g as a,p as x};