/*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
var innerHTML=function(document){var EXTENDS="extends",register=document.registerElement,div=document.createElement("div"),dre="document-register-element",innerHTML=register.innerHTML,initialize,registered;if(innerHTML)return innerHTML;try{register.call(document,dre,{prototype:Object.create(HTMLElement.prototype,{createdCallback:{value:Object}})});div.innerHTML="<"+dre+"></"+dre+">";if("createdCallback"in div.querySelector(dre)){return register.innerHTML=function(el,html){el.innerHTML=html;return el}}}catch(meh){}registered=[];initialize=function(el){if("createdCallback"in el||"attachedCallback"in el||"detachedCallback"in el||"attributeChangedCallback"in el)return;document.createElement.innerHTMLHelper=true;for(var parentNode=el.parentNode,type=el.getAttribute("is"),name=el.nodeName,node=document.createElement.apply(document,type?[name,type]:[name]),attributes=el.attributes,i=0,length=attributes.length,attr,fc;i<length;i++){attr=attributes[i];node.setAttribute(attr.name,attr.value)}while(fc=el.firstChild)node.appendChild(fc);document.createElement.innerHTMLHelper=false;if(parentNode)parentNode.replaceChild(node,el);if(node.createdCallback){node.created=true;node.createdCallback();node.created=false}};return(document.registerElement=function registerElement(type,options){var name=(options[EXTENDS]?options[EXTENDS]+'[is="'+type+'"]':type).toLowerCase();if(registered.indexOf(name)<0)registered.push(name);return register.apply(document,arguments)}).innerHTML=function(el,html){el.innerHTML=html;for(var nodes=registered.length?el.querySelectorAll(registered.join(",")):[],i=nodes.length;i--;initialize(nodes[i])){}return el}}(document);
