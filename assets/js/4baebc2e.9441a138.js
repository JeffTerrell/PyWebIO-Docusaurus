"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[9221],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,b=g["".concat(i,".").concat(m)]||g[m]||p[m]||u;return n?r.createElement(b,s(s({ref:t},l),{},{components:n})):r.createElement(b,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,s=new Array(u);s[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<u;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),u=(n(7294),n(3905)),s=["components"],a={slug:"docusaurus-cms",title:"Use Docusaurus and GitHub Actions as a CMS",description:"A guide to setting up Docusaurus and GitHub Actions as a content management system to an existing GitHub Pages website",image:"/img/blog/docusaurus_gh_cms.png",authors:["young"],tags:["PyWeb.io","Docusaurus","CMS","GitHub Actions"],keywords:["Docusaurus","GitHub Actions","CMS"]},i=void 0,c={permalink:"/PyWebIO-Docusaurus/docusaurus-cms",source:"@site/blog/2022-04-22-docusaurus-cms/index.mdx",title:"Use Docusaurus and GitHub Actions as a CMS",description:"A guide to setting up Docusaurus and GitHub Actions as a content management system to an existing GitHub Pages website",date:"2022-04-22T00:00:00.000Z",formattedDate:"April 22, 2022",tags:[{label:"PyWeb.io",permalink:"/PyWebIO-Docusaurus/tags/py-web-io"},{label:"Docusaurus",permalink:"/PyWebIO-Docusaurus/tags/docusaurus"},{label:"CMS",permalink:"/PyWebIO-Docusaurus/tags/cms"},{label:"GitHub Actions",permalink:"/PyWebIO-Docusaurus/tags/git-hub-actions"}],readingTime:3.75,truncated:!0,authors:[{name:"Hannah Young",title:"Software Developer",url:"https://github.com/Corgibyte",imageURL:"https://github.com/Corgibyte.png",key:"young"}],frontMatter:{slug:"docusaurus-cms",title:"Use Docusaurus and GitHub Actions as a CMS",description:"A guide to setting up Docusaurus and GitHub Actions as a content management system to an existing GitHub Pages website",image:"/img/blog/docusaurus_gh_cms.png",authors:["young"],tags:["PyWeb.io","Docusaurus","CMS","GitHub Actions"],keywords:["Docusaurus","GitHub Actions","CMS"]},nextItem:{title:"placeholder",permalink:"/PyWebIO-Docusaurus/2022/04/06/placeholder"}},l={authorsImageUrls:[void 0]},p=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2}],g={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,u.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Docusaurus CMS",src:n(3218).Z,width:"970",height:"300"})),(0,u.kt)("h2",{id:"problem"},"Problem"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,u.kt)("p",null,"Adding a Docusaurus powered blog and tutorial section to the existing PyWeb.io website hosted on GitHub Pages. Docusaurus has excellent documentation on deploying to GitHub Pages. However, with a pre-existing deployed GitHub pages website, there is a need to add the Docusaurus generated static files to this deployment without disrupting the existing structure."),(0,u.kt)("h2",{id:"solution"},"Solution"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,u.kt)("p",null,"The solution was to use Docusaurus to transform Markdown content files into static HTML files, and GitHub Actions to automatically build those files and deploy them from the Docusaurus repository to the pre-existing GitHub Pages repository."))}m.isMDXComponent=!0},3218:function(e,t,n){t.Z=n.p+"assets/images/docusaurus_gh_cms-226adb329a7cab09f759d611463fd44f.png"}}]);