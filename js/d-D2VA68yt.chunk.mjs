import{g as F}from"./emoji-picker-Coav-X6q.chunk.mjs";function L(a,i){for(var r=0;r<i.length;r++){const e=i[r];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in a)){const t=Object.getOwnPropertyDescriptor(e,n);t&&Object.defineProperty(a,n,t.get?t:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}function M(a){const i={$pattern:a.UNDERSCORE_IDENT_RE,keyword:"abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",built_in:"bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",literal:"false null true"},r="(0|[1-9][\\d_]*)",e="(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",n="0[bB][01_]+",t="([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",d="0[xX]"+t,s="([eE][+-]?"+e+")",_="("+e+"(\\.\\d*|"+s+")|\\d+\\."+e+"|\\."+r+s+"?)",u="(0[xX]("+t+"\\."+t+"|\\.?"+t+")[pP][+-]?"+e+")",o="("+r+"|"+n+"|"+d+")",f="("+u+"|"+_+")",c="\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",g={className:"number",begin:"\\b"+o+"(L|u|U|Lu|LU|uL|UL)?",relevance:0},b={className:"number",begin:"\\b("+f+"([fF]|L|i|[fF]i|Li)?|"+o+"(i|[fF]i|Li))",relevance:0},m={className:"string",begin:"'("+c+"|.)",end:"'",illegal:"."},p={className:"string",begin:'"',contains:[{begin:c,relevance:0}],end:'"[cwd]?'},y={className:"string",begin:'[rq]"',end:'"[cwd]?',relevance:5},N={className:"string",begin:"`",end:"`[cwd]?"},h={className:"string",begin:'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',relevance:10},v={className:"string",begin:'q"\\{',end:'\\}"'},E={className:"meta",begin:"^#!",end:"$",relevance:5},w={className:"meta",begin:"#(line)",end:"$",relevance:5},A={className:"keyword",begin:"@[a-zA-Z_][a-zA-Z_\\d]*"},O=a.COMMENT("\\/\\+","\\+\\/",{contains:["self"],relevance:10});return{name:"D",keywords:i,contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,O,h,p,y,N,v,b,g,m,E,w,A]}}var l=M;const T=F(l),D=L({__proto__:null,default:T},[l]);export{l as a,D as d};