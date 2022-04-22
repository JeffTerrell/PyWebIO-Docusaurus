"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[8942],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],r={slug:"docusaurus-cms",title:"Use Docusaurus and GitHub Actions as a CMS",description:"A guide to setting up Docusaurus and GitHub Actions as a content management system to an existing GitHub Pages website",image:"/img/blog/docusaurus_gh_cms.png",authors:["young"],tags:["PyWeb.io","Docusaurus","CMS","GitHub Actions"],keywords:["Docusaurus","GitHub Actions","CMS"]},u=void 0,l={permalink:"/PyWebIO-Docusaurus/docusaurus-cms",source:"@site/blog/2022-04-22-docusaurus-cms/index.mdx",title:"Use Docusaurus and GitHub Actions as a CMS",description:"A guide to setting up Docusaurus and GitHub Actions as a content management system to an existing GitHub Pages website",date:"2022-04-22T00:00:00.000Z",formattedDate:"April 22, 2022",tags:[{label:"PyWeb.io",permalink:"/PyWebIO-Docusaurus/tags/py-web-io"},{label:"Docusaurus",permalink:"/PyWebIO-Docusaurus/tags/docusaurus"},{label:"CMS",permalink:"/PyWebIO-Docusaurus/tags/cms"},{label:"GitHub Actions",permalink:"/PyWebIO-Docusaurus/tags/git-hub-actions"}],readingTime:3.75,truncated:!0,authors:[{name:"Hannah Young",title:"Software Developer",url:"https://github.com/Corgibyte",imageURL:"https://github.com/Corgibyte.png",key:"young"}],frontMatter:{slug:"docusaurus-cms",title:"Use Docusaurus and GitHub Actions as a CMS",description:"A guide to setting up Docusaurus and GitHub Actions as a content management system to an existing GitHub Pages website",image:"/img/blog/docusaurus_gh_cms.png",authors:["young"],tags:["PyWeb.io","Docusaurus","CMS","GitHub Actions"],keywords:["Docusaurus","GitHub Actions","CMS"]},nextItem:{title:"placeholder",permalink:"/PyWebIO-Docusaurus/2022/04/06/placeholder"}},p={authorsImageUrls:[void 0]},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Setup SSH Key",id:"setup-ssh-key",level:2},{value:"Setup GitHub Actions Workflow",id:"setup-github-actions-workflow",level:2},{value:"Setup Docusaurus Configuration",id:"setup-docusaurus-configuration",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus CMS",src:n(3218).Z,width:"970",height:"300"})),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"Adding a Docusaurus powered blog and tutorial section to the existing PyWeb.io website hosted on GitHub Pages. Docusaurus has excellent documentation on deploying to GitHub Pages. However, with a pre-existing deployed GitHub pages website, there is a need to add the Docusaurus generated static files to this deployment without disrupting the existing structure."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"The solution was to use Docusaurus to transform Markdown content files into static HTML files, and GitHub Actions to automatically build those files and deploy them from the Docusaurus repository to the pre-existing GitHub Pages repository."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," source code repository (documentation repo).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Follow ",(0,i.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs"},"Docusaurus' instructions")," for getting started in setting up a project."),(0,i.kt)("li",{parentName:"ul"},"Push this Docusaurus project to your documentation repository on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub"),"."))),(0,i.kt)("li",{parentName:"ol"},"A GitHub repository with a branch setup for ",(0,i.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages")," (GH Pages repo).")),(0,i.kt)("h2",{id:"setup-ssh-key"},"Setup SSH Key"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate a new SSH key using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"GitHub's instructions"),". "),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do ",(0,i.kt)("strong",{parentName:"p"},"not")," add a passphrase. There is no need to add the key to your ssh-agent")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to your GH Pages repo on GitHub's website. Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," tab. Then select ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy keys")," from the sidebar on the left. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Add deploy key"),". Add a title for the deploy key, and then paste the contents of the ",(0,i.kt)("strong",{parentName:"p"},"public")," SSH key (file ending with ",(0,i.kt)("inlineCode",{parentName:"p"},".pub"),") into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key")," field. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Be sure to select ",(0,i.kt)("inlineCode",{parentName:"p"},"Allow write access")," and then select ",(0,i.kt)("inlineCode",{parentName:"p"},"Add key"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to your documentation repo on GitHub's website. Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," tab. In the sidebar to the left select ",(0,i.kt)("inlineCode",{parentName:"p"},"Secrets"),", followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"New repository secret"),". Select an ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#naming-your-secrets"},"appropriate name")," for your secret. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Paste the contents of the ",(0,i.kt)("strong",{parentName:"p"},"private"),"  SSH key file (should begin with ",(0,i.kt)("inlineCode",{parentName:"p"},"-----BEGIN OPENSSH PRIVATE KEY-----"),") into the ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," field, and then select ",(0,i.kt)("inlineCode",{parentName:"p"},"Add secret"),"."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("strong",{parentName:"p"},"public")," SSH key belongs in the GH Pages repo and the ",(0,i.kt)("strong",{parentName:"p"},"private")," SSH key belongs in your documentation repo"))))),(0,i.kt)("h2",{id:"setup-github-actions-workflow"},"Setup GitHub Actions Workflow"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the root of your documentation repo create a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows#creating-a-workflow-file"},"workflow file")," with the following folder structure:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/yourfile.yml"),".")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The filename can be of your choosing, example: ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy.yml"),".")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The workflow file has two triggers, either a pull request or push to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of the documentation repo."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"name: Deploy to GitHub Pages\non:\n  pull_request:\n    branches: [main]\n  push:\n    branches: [main]\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"The first job will run when there is a pull request to ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," and will checkout the source, install NPM, and then generate static files from the documentation source to ensure there are no build errors.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jobs:\n  test-deploy:\n    if: github.event_name != 'push'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 16.x\n          cache: npm\n      - name: Install dependencies\n        run: npm ci\n      - name: Test build website\n        run: npm run build\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"The second job will run when there is a push to ",(0,i.kt)("inlineCode",{parentName:"li"},"main"),". It will also checkout the source, install NPM, and generate static files. It will then deploy those static files to the pre-existing GH Pages repo.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"deploy:\n    if: github.event_name != 'pull_request'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 16.x\n          cache: npm\n      - name: Install dependencies and build\n        run: npm ci\n      - name: Test build website\n        run: npm run build\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          deploy_key: ${{ secrets.GH_PAGES_DEPLOY }}    # Be sure to select the name used for your secret\n          external_repository: pywebio/pywebio.github.io    # GH Pages repo\n          publish_dir: ./build\n          publish_branch: main    # Branch in GH Pages repo set to be Source for GitHub Pages\n          destination_dir: docs   # Directory to indicate path for your documentation from base URL. Ours will be pyweb.io/docs\n          user_name: 'github-actions[bot]'\n          user_email: 'github-actions[bot]@users.noreply.github.com'\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Take note of the comments on important values. Full script visible ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/Corgibyte/9da8da9cf61b788c57a5ab23a92245cb"},"here")))),(0,i.kt)("h2",{id:"setup-docusaurus-configuration"},"Setup Docusaurus Configuration"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"Because the documentation static files are nested in a path of the rest of the existing static webpage, it is important to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file in the documentation source. Change the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," field to match the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination_dir")," selected in the workflow file's ",(0,i.kt)("inlineCode",{parentName:"p"},"actions-gh-pages@v3")," step. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"/docs/"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus config file",src:n(2749).Z,width:"455",height:"218"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"You should now be able to create content files for Docusaurus and have them auto-deploy once they are merged with your documentation source repository's ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch.\nCheck out how PyWeb.io is using this set up for creating blog and tutorial content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../docs/tutorial-contribute/blog-post"},"Compose and Publish Blog Post")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../docs/tutorial-contribute/tutorial"},"Compose and Publish Blog Tutorial"))))}d.isMDXComponent=!0},2749:function(e,t,n){t.Z=n.p+"assets/images/docusaurus_config-7a9659dc9fa025e090b019926463d564.JPG"},3218:function(e,t,n){t.Z=n.p+"assets/images/docusaurus_gh_cms-226adb329a7cab09f759d611463fd44f.png"}}]);