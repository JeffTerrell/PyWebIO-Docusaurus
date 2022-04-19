"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[421],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return m}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?a.createElement(h,l(l({ref:t},c),{},{components:o})):a.createElement(h,l({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,l=new Array(i);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var u=2;u<i;u++)l[u]=o[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4087:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var a=o(7462),n=o(3366),i=(o(7294),o(3905)),l=["components"],r={id:"submit-blog-post",sidebar_position:1,title:"Compose And Publish Content",description:"Tutorial about submitting a blog post or tutorial to PyWebIO",image:"/img/blog/pyweb_contribute_tutorial.png",keywords:["PyWebIO","tutorial","blog"],tags:["PyWebIO","blog","template"]},s=void 0,u={unversionedId:"tutorial-contribute/submit-blog-post-tutorial/submit-blog-post",id:"tutorial-contribute/submit-blog-post-tutorial/submit-blog-post",title:"Compose And Publish Content",description:"Tutorial about submitting a blog post or tutorial to PyWebIO",source:"@site/docs/tutorial-contribute/submit-blog-post-tutorial/index.mdx",sourceDirName:"tutorial-contribute/submit-blog-post-tutorial",slug:"/tutorial-contribute/submit-blog-post-tutorial/",permalink:"/PyWebIO-Docusaurus/docs/tutorial-contribute/submit-blog-post-tutorial/",tags:[{label:"PyWebIO",permalink:"/PyWebIO-Docusaurus/docs/tags/py-web-io"},{label:"blog",permalink:"/PyWebIO-Docusaurus/docs/tags/blog"},{label:"template",permalink:"/PyWebIO-Docusaurus/docs/tags/template"}],version:"current",sidebarPosition:1,frontMatter:{id:"submit-blog-post",sidebar_position:1,title:"Compose And Publish Content",description:"Tutorial about submitting a blog post or tutorial to PyWebIO",image:"/img/blog/pyweb_contribute_tutorial.png",keywords:["PyWebIO","tutorial","blog"],tags:["PyWebIO","blog","template"]},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/PyWebIO-Docusaurus/docs/"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Create New Branch",id:"create-new-branch",level:2},{value:"Add New Directory And Markdown File",id:"add-new-directory-and-markdown-file",level:2},{value:"Create The .json File",id:"create-the-json-file",level:2},{value:"Add An Author (only for blog post)",id:"add-an-author-only-for-blog-post",level:2},{value:"Compose The Blog Post or Tutorial",id:"compose-the-blog-post-or-tutorial",level:2},{value:"Add Metadata",id:"add-metadata",level:2},{value:"Add Assets and Components",id:"add-assets-and-components",level:2},{value:"Upload Assets",id:"upload-assets",level:3},{value:"Insert Image",id:"insert-image",level:3},{value:"Insert YouTube Video",id:"insert-youtube-video",level:3},{value:"Insert Code Snippet",id:"insert-code-snippet",level:3},{value:"Submit",id:"submit",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Jeff Terrell, April 6, 2022")),(0,i.kt)("p",null,"This tutorial will guide you through the blog and tutorial creation process for PyWeb.io. You will learn how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a separate GitHub branch"),(0,i.kt)("li",{parentName:"ul"},"Add a new directory and Markdown file (.mdx)"),(0,i.kt)("li",{parentName:"ul"},"Create your blog post or tutorial from a provided template"),(0,i.kt)("li",{parentName:"ul"},"Add assets and components"),(0,i.kt)("li",{parentName:"ul"},"Submit a pull request")),(0,i.kt)("p",null,"Let's dive in!"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access to the PyWebIO content creation GitHub repository - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pywebio/content_creation"},"Click Here!"))),(0,i.kt)("h2",{id:"create-new-branch"},"Create New Branch"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"From the content_creation repository, let's begin with creating a new branch that will contain your soon to be created .MDX file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create Branch",src:o(6511).Z,width:"306",height:"247"})),(0,i.kt)("p",null,"To create a new branch as shown above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the grey drop-down button (",(0,i.kt)("img",{alt:"GitHub Branch",src:o(4221).Z,width:"8",height:"12"})," main)"),(0,i.kt)("li",{parentName:"ul"},"Type the name of the new branch in the input box",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Blog post")," (blog-date-description)(e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"blog-2022-04-07-pyweb-release1.0"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tutorial")," (tutorial-date-description)(e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"tutorial-2022-04-07-mongoDB"),")"))),(0,i.kt)("li",{parentName:"ul"},'Click "Create branch"')),(0,i.kt)("p",null,"You will automatically be directed to the newly created branch."),(0,i.kt)("h2",{id:"add-new-directory-and-markdown-file"},"Add New Directory And Markdown File"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create New File",src:o(1348).Z,width:"1214",height:"320"})),(0,i.kt)("p",null,'Navigate to the blog or relevant docs category (for tutorials) directory of the repo, click the "Add File" button, and then select "Create new file". '),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'If there is not an appropriate category for your tutorial you will need to create one. In the input box replace "Name your file..." with the new directory and Markdown file for your blog post or tutorial.'))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Blog Post")," (format: content_creation/blog/date-description/index.mdx )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"content_creation/blog/2022-04-07-pyweb-release1.0/index.mdx")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tutorial")," (format: content_creation/docs/category/description/index.mdx) ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"content_creation/docs/database-integration/mongoDB/index.mdx"))))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub create new file",src:o(3027).Z,width:"653",height:"334"})),(0,i.kt)("p",null,'Next, scroll to the bottom of the page, ensure the "Commit directly to the ',(0,i.kt)("inlineCode",{parentName:"p"},"blog-date-description"),' branch" option is selected and click the green "Commit new file" button.'),(0,i.kt)("p",null,"If you created a new category, follow the steps in the next section ",(0,i.kt)("a",{parentName:"p",href:"#create-the-json-file"},'"Create The .json File"'),". If you are contributing to a blog post and have not set up your author profile, ",(0,i.kt)("a",{parentName:"p",href:"#add-an-author-only-for-blog-post"},'click here for the "Add an Author" section'),". Otherwise, continue on to ",(0,i.kt)("a",{parentName:"p",href:"#compose-the-blog-post-or-tutorial"},'"Compose/Write The Blog Post or Tutorial"')),(0,i.kt)("h2",{id:"create-the-json-file"},"Create The .json File"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"content_creation\n\u2502   README.md\n\u2502   file001.txt    \n\u2502\n\u2514\u2500\u2500\u2500docs\n            \u2502   file011.txt\n            \u2502   file012.txt\n            \u2502\n            \u2514\u2500\u2500\u2500category\n                        \u2502   _category_.json\n                        \u2502   \n                        \u2502   \n                        \u2514\u2500\u2500\u2500description\n                                    \u2502   index.mdx\n                                    \u2502   image.jpg\n")),(0,i.kt)("p",null,"The category .json file is used to give the category a title and order position (ascending) in the left navbar. The .json file belongs in the category directory and must be created exactly as shown:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"_category_.json")),(0,i.kt)("p",null,"Next, add two fields, lable and position to the .json file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "label": "New Category",\n  "position": 5\n}\n')),(0,i.kt)("h2",{id:"add-an-author-only-for-blog-post"},"Add An Author (only for blog post)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus Add Author YAML",src:o(1525).Z,width:"971",height:"334"})),(0,i.kt)("p",null,'Navigate to the blog directory and click on the authors.yml file. Click the "pencil" icon in the top right to begin editing the file. Follow the format as shown above to create your author profile. Note, your last name should be used as the main property. This profile will be used later in the front matter at the top of your blog post file (index.mdx).'),(0,i.kt)("h2",{id:"compose-the-blog-post-or-tutorial"},"Compose The Blog Post or Tutorial"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Copy Paste Blog Template",src:o(5607).Z,width:"1204",height:"437"})),(0,i.kt)("p",null,'Navigate to the newly created directory, select the index.mdx file and click the "pencil" icon on the right side of the screen to begin creating your blog post or tutorial. To make this process easier, we have a template you can copy and paste to help get you started. '),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/pywebio/content_creation/tree/main/static/template/blog-template.mdx"},"Blog post template")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/pywebio/content_creation/tree/main/static/template/tutorial-template.mdx"},"Tutorial template")))),(0,i.kt)("p",null,'To use the template, click the "Raw" button on the right side of the screen, and highlight and copy the entire document.'),(0,i.kt)("p",null,"Your index.mdx file should now look similar to the screenshot above."),(0,i.kt)("p",null,'You can now begin creating your content! Feel free to improvise and make it your own, the template is not the "law", be creative and have fun, but try to follow the general layout of the template as well (thanks \ud83d\ude04). Note, for a blog post, please use the ',(0,i.kt)("inlineCode",{parentName:"p"},"\x3c!--truncate--\x3e")," marker to show summarized content on the blog landing page."),(0,i.kt)("h2",{id:"add-metadata"},"Add Metadata"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discord Card",src:o(4075).Z,width:"232",height:"276"})),(0,i.kt)("p",null,"At the top of your file in between the three dashes is the front matter which contains fields (metadata) that need to be changed for each blog post or tutorial."),(0,i.kt)("p",null,"Follow the steps below to ensure your file contains valuable metadata, and social card components are displayed correctly."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Blog Post")),(0,i.kt)("div",{style:{backgroundColor:""}},(0,i.kt)("li",null,(0,i.kt)("b",null,"slug:")," the file path to the blog post after /blog/date-description and should be unique to the document. Choose a short name, can be identical to the description used for the directory (e.g., pyweb-release-1.0)."),(0,i.kt)("li",null,(0,i.kt)("b",null,"title:")," the H1 main heading of the blog post."),(0,i.kt)("li",null,(0,i.kt)("b",null,"description:")," include a short description of the blog post. This will not be visible anywhere on the page and is for SEO purposes."),(0,i.kt)("li",null,(0,i.kt)("b",null,"image:")," adds a meta image for social summary cards on Discord, Twitter, etc. Relative path must be: ```/img/blog/yourimage.jpg```. Upload image to: ```/static/img/blog```."),(0,i.kt)("li",null,(0,i.kt)("b",null,"authors:")," this is where you add your author profile that was set up earlier."),(0,i.kt)("li",null,(0,i.kt)("b",null,"tags:")," include several tags relevent to the subject matter of your post to make finding similar content easier for other readers."),(0,i.kt)("li",null,(0,i.kt)("b",null,"keywords:")," include several keywords describing the main topics of the blog post for SEO purposes."))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Tutorial")),(0,i.kt)("div",{style:{backgroundColor:""}},(0,i.kt)("li",null,(0,i.kt)("b",null,"id:")," unique document ID which is the name of the document (without the extension) relative to the root docs directory (e.g., document or tutorials/document)"),(0,i.kt)("li",null,(0,i.kt)("b",null,"sidebar_position:")," the position of the document in the left navbar (descending)"),(0,i.kt)("li",null,(0,i.kt)("b",null,"title:")," the H1 main heading of the blog post."),(0,i.kt)("li",null,(0,i.kt)("b",null,"description:")," include a short description of the blog post. This will not be visible anywhere on the page and is for SEO purposes."),(0,i.kt)("li",null,(0,i.kt)("b",null,"image:")," adds a meta image for social summary cards on Discord, Twitter, etc. Upload image to: ```/static/img/tutorial```. Relative path must be: ```/img/tutorial/yourimage.jpg```."),(0,i.kt)("li",null,(0,i.kt)("b",null,"tags:")," include several tags relevent to the subject matter of your post to make finding similar content easier for other readers."),(0,i.kt)("li",null,(0,i.kt)("b",null,"keywords:")," include several keywords describing the main topics of the blog post for SEO purposes."))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"add-assets-and-components"},"Add Assets and Components"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Quick Links:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upload-assets"},"Upload Assets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-image"},"Insert Image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-youtube-video"},"Insert YouTube Video")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insert-code-snippet"},"Insert Code Snippet"))),(0,i.kt)("h3",{id:"upload-assets"},"Upload Assets"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Upload Files",src:o(1326).Z,width:"1233",height:"657"})),(0,i.kt)("p",null,'From the directory containing the index.mdx file, click the "Add file" button and select "Upload files". You can upload as many files as needed from this screen. After you are finished, ensure the "Commit directly to the ',(0,i.kt)("inlineCode",{parentName:"p"},"blog-date-description"),' branch" option is selected and click the "Commit changes" button.'),(0,i.kt)("p",null,"You will be re-directed to the home screen of the branch you just committed to, navigate back to the index.mdx file in the blog or docs(tutorials) directory to continue editing. To add the uploaded assets to your document, use the following relative file path:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"./your_asset.jpg"))),(0,i.kt)("h3",{id:"insert-image"},"Insert Image"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python Image",src:o(2526).Z,width:"601",height:"203"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'![An Image](./your-image.jpg "Your Image")\n')),(0,i.kt)("p",null,'Add an image by using the exclamation mark(!), followed by alt text in brackets[], and the relative path or URL to the image in parenthesis(). A title can be added in quotation marks("") as well after the relative path or URL.'),(0,i.kt)("h3",{id:"insert-youtube-video"},"Insert YouTube Video"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qeHQrNrDdeg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<iframe width="560" height="315" src="https://www.youtube.com/embed/qeHQrNrDdeg" \ntitle="YouTube video player" frameborder="0" allow="accelerometer; autoplay; \nclipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n')),(0,i.kt)("p",null,'From the YouTube video you want to insert, click on "Share" and then select "Embed". Choose the checkbox options you desire and then copy and paste the code into your file.'),(0,i.kt)("h3",{id:"insert-code-snippet"},"Insert Code Snippet"),(0,i.kt)("p",null,"Code snippets allow users to quickly copy code with the click of a single button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"<button onClick={() => alert('button clicked!')}>Click me!</button>\n")),(0,i.kt)("button",{class:"tutorial_button",onClick:function(){return alert("button clicked!")}},"Click me!"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Wrap your code in three backticks ``` to use a code snippet. Here's the source code from the code snippet shown above.\n",(0,i.kt)("img",{alt:"Markdown Code Snippet",src:o(4692).Z,width:"442",height:"50"})),(0,i.kt)("h2",{id:"submit"},"Submit"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create Pull Request",src:o(1471).Z,width:"909",height:"193"})),(0,i.kt)("p",null,'Navigate to the home page of your branch and click the green "Compare & pull request" button residing in the yellowish colored box displaying your branch name. Note, you can also select the "',(0,i.kt)("img",{alt:"GitHub octicon pull request",src:o(2429).Z,width:"9",height:"12"}),' Contribute" drop down and click the green "Open pull request" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Create Pull Request Final",src:o(1823).Z,width:"1231",height:"518"})),(0,i.kt)("p",null,'You will be taken to the "Open a pull request" screen where you can choose to add a reviewer by clicking the \u2699\ufe0f icon next to "Reviewers". Select a reviewer and click the "Create pull request" button and that\'s it, you\'re done! A PyWebIO team member will review your pull request and assuming everything looks good, your blog post or tutorial will be deployed.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub Actions Check",src:o(1284).Z,width:"905",height:"238"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,i.kt)("p",null,"This article describes how to create and submit a blog post or tutorial to the PyWeb.io blog. "),(0,i.kt)("p",null,"If you have any further questions, comments, feedback, etc. ",(0,i.kt)("a",{parentName:"p",href:"mailto:hey@pyweb.io"},"please contact the PyWeb.io team")))}m.isMDXComponent=!0},4692:function(e,t,o){t.Z=o.p+"assets/images/code_snippet_example-a80dbd5b5315bd2b30e12ae19a16f794.JPG"},4075:function(e,t,o){t.Z=o.p+"assets/images/discord_card-e017a25c8cb96bebbd4e344db2c61ad0.JPG"},1284:function(e,t,o){t.Z=o.p+"assets/images/gh_actions_check-d88d24bba0091cef16ed9a8ee8f4ab83.JPG"},1525:function(e,t,o){t.Z=o.p+"assets/images/gh_add_author-883d44c903a55db2320caa670568d46c.JPG"},5607:function(e,t,o){t.Z=o.p+"assets/images/gh_blog_template_paste-05b40759774d9c969dfe435c0f9fbfef.JPG"},3027:function(e,t,o){t.Z=o.p+"assets/images/gh_commit_new_file-56407517cd8aaf78c0dd034204e0f040.JPG"},6511:function(e,t,o){t.Z=o.p+"assets/images/gh_create_branch-048371ee6c60ac1b0498ff7345bfc568.JPG"},1348:function(e,t,o){t.Z=o.p+"assets/images/gh_create_new_file-3b61f23911eed1a71347c7020698e459.JPG"},1471:function(e,t,o){t.Z=o.p+"assets/images/gh_create_pull_request-898ab9cba2db6449cc5ba7822953a395.JPG"},1823:function(e,t,o){t.Z=o.p+"assets/images/gh_create_pull_request_final-4583022ab551c62540cf0470d7193f43.JPG"},4221:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAGYktHRAD/AP8A/6C9p5MAAAD5SURBVChTbZC/ykZwFMfPq5QyKoNIuQGDDG7AIJurUAZXweYKnrgAl2A1SCaDjBYDUbKYOC+n96nnfXs/9et8O3++nd+B67qwbVtclgX/4ysIAhyGAY7jgCzLQFEU+AXHcdSp6zo2TUM6jmM0DAPzPEeo6xrvPoyiiIplWaLjOKQlSUJGVVVyEkWRoqZp0Pc9eJ4HlmUBjONIDmma0tTD6/Wi3LZtyNDYzb7vcP8GkiSBMAzBNM1nP4Bpmqj7WfaJz5NlGed5JjeoqoqSgiBgURR4nicV3gDLsiRs28au60h/wvi+D67rPhcFnudvsz+8T72u68/MJ4jf1yXhGtv7kSAAAAAASUVORK5CYII="},2429:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QA/4ePzL8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDdUMTc6MTc6MTIrMDA6MDBA3EXdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTA3VDE3OjE3OjEyKzAwOjAwMYH9YQAAAPtJREFUKFN9kb2JhkAQhudUEPEHFCxCzO3CxNAOTKzhq8ECrEBLMLICxVQDE8FAE0GF1TlnOI+L7oHlnXf2Z3Z2QQiBVVXheZ5IZFmG4zhy/CLP8/zpug7KsgTLsiCOY1iWBfq+B8/zQNM0AMdxeLVhGJimKQLA7wjDEPd9R2iahhN1XfPiIAhwmiYchoHzbduipKrqEwOXIvI8B13XYds29oqigHTfN5vrulh93wfTNKkh9oT0o/8iPXAgyzLry+tpXjqOgw21/Zd1XVmf9wOwbZu7ejzry+vpib6SJEG6JJ1UFAXvJqIoAtd1uRx1xd/ylOWdL+QpL4TAb5bIuq2yAzO3AAAAAElFTkSuQmCC"},1326:function(e,t,o){t.Z=o.p+"assets/images/gh_upload_files-2558c1350d72bd79e28cfbcc9bae7a73.JPG"},2526:function(e,t,o){t.Z=o.p+"assets/images/python-logo-master-v3-63580e54e2e501e3d07de0c07a3a8c3c.png"}}]);