/*! third party licenses: js/vendor.LICENSE.txt */
import{_ as a,l as o,H as s,k as n,I as p}from"./mermaid.core-DqdNzqxr.chunk.mjs";import{p as m}from"./gitGraph-YCYPL57B-BfdfEqXu.chunk.mjs";import"./modulepreload-polyfill-DMTabKmO.chunk.mjs";import"./emoji-picker-SoWZqoso.chunk.mjs";import"./NcNoteCard-CImn6F9p-ChK0-hvc.chunk.mjs";import"./vue.runtime.esm-DaLNuXGQ.chunk.mjs";import"./_baseUniq-D0rUJipT.chunk.mjs";import"./_basePickBy-Bti6ONX5.chunk.mjs";import"./clone-CittjnBs.chunk.mjs";var d={parse:a(async r=>{const t=await m("info",r);o.debug(t)},"parse")},g={version:p},c=a(()=>g.version,"getVersion"),f={getVersion:c},v=a((r,t,i)=>{o.debug("rendering info diagram\n"+r);const e=s(t);n(e,100,400,!0),e.append("g").append("text").attr("x",100).attr("y",40).attr("class","version").attr("font-size",32).style("text-anchor","middle").text("v".concat(i))},"draw"),x={draw:v},z={parser:d,db:f,renderer:x};export{z as diagram};