/*! third party licenses: js/vendor.LICENSE.txt */
import{T as t,au as n}from"./RichText-DgAUhlRI.chunk.mjs";import{e as o}from"./NcUserBubble-Cv-q-rH5-J_oc7qSf.chunk.mjs";import{B as s}from"./RichTextReader-B3bcSxyw.chunk.mjs";import{n as a}from"./_plugin-vue2_normalizer-BWKvF6pj.chunk.mjs";const p={name:"PlainTextReader",components:{BaseReader:s},provide:{renderHtml(e){return"<pre>"+o(e)+"</pre>"},extensions:()=>[t,n]},props:{content:{type:String,required:!0}}};var i=function(){var e=this,r=e._self._c;return r("BaseReader",{attrs:{content:e.content}})},l=[],m=a(p,i,l,!1,null,null,null,null);const x=m.exports;export{x as P};