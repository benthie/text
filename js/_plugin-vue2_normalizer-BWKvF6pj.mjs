/*! third party licenses: js/vendor.LICENSE.txt */
function u(r,s,d,p,n,i,a,f){var t=typeof r=="function"?r.options:r;s&&(t.render=s,t.staticRenderFns=d,t._compiled=!0),p&&(t.functional=!0),i&&(t._scopeId="data-v-"+i);var o;if(a?(o=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!e&&typeof __VUE_SSR_CONTEXT__<"u"&&(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},t._ssrRegister=o):n&&(o=f?function(){n.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:n),o)if(t.functional){t._injectStyles=o;var l=t.render;t.render=function(e,_){return o.call(_),l(e,_)}}else{var c=t.beforeCreate;t.beforeCreate=c?[].concat(c,o):[o]}return{exports:r,options:t}}export{u as n};