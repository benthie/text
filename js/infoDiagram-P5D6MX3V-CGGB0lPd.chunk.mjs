/*! third party licenses: js/vendor.LICENSE.txt */
import{_ as a,l as o,I as s,k as p,K as n}from"./mermaid.core-Z6E1z80e.chunk.mjs";import{p as m}from"./gitGraph-YCYPL57B-Pln-JISt.chunk.mjs";import"./modulepreload-polyfill-DMTabKmO.chunk.mjs";import"./emoji-picker-SoWZqoso.chunk.mjs";import"./NcNoteCard-C6xb7vi0-BCYRFt8S.chunk.mjs";import"./index-Ubm2itxG.chunk.mjs";import"./vue.runtime.esm-DaLNuXGQ.chunk.mjs";import"./_baseUniq-wVDUJ4Ph.chunk.mjs";import"./_basePickBy-vGqn_OYg.chunk.mjs";import"./clone-DYGnGsc7.chunk.mjs";var d={parse:a(async r=>{const t=await m("info",r);o.debug(t)},"parse")},g={version:n},c=a(()=>g.version,"getVersion"),f={getVersion:c},v=a((r,t,i)=>{o.debug("rendering info diagram\n"+r);const e=s(t);p(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text("v".concat(i))},"draw"),x={draw:v},I={parser:d,db:f,renderer:x};export{I as diagram};