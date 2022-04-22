"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[3640],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var u=n.createContext({}),s=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(a),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,r(r({ref:e},c),{},{components:a})):n.createElement(h,r({ref:e},c))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4755:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={id:"submit-tutorial",sidebar_position:2,title:"Compose And Publish Tutorial",description:"Tutorial for submitting a tutorial to PyWebIO",image:"/img/tutorial/pyweb_contribute_tutorial.png",keywords:["PyWebIO","tutorial"],tags:["PyWebIO","tutorial","template"]},u=void 0,s={unversionedId:"tutorial-contribute/tutorial/submit-tutorial",id:"tutorial-contribute/tutorial/submit-tutorial",title:"Compose And Publish Tutorial",description:"Tutorial for submitting a tutorial to PyWebIO",source:"@site/docs/tutorial-contribute/tutorial/index.mdx",sourceDirName:"tutorial-contribute/tutorial",slug:"/tutorial-contribute/tutorial/",permalink:"/PyWebIO-Docusaurus/docs/tutorial-contribute/tutorial/",tags:[{label:"PyWebIO",permalink:"/PyWebIO-Docusaurus/docs/tags/py-web-io"},{label:"tutorial",permalink:"/PyWebIO-Docusaurus/docs/tags/tutorial"},{label:"template",permalink:"/PyWebIO-Docusaurus/docs/tags/template"}],version:"current",sidebarPosition:2,frontMatter:{id:"submit-tutorial",sidebar_position:2,title:"Compose And Publish Tutorial",description:"Tutorial for submitting a tutorial to PyWebIO",image:"/img/tutorial/pyweb_contribute_tutorial.png",keywords:["PyWebIO","tutorial"],tags:["PyWebIO","tutorial","template"]},sidebar:"tutorialSidebar",previous:{title:"Compose And Publish Blog Post",permalink:"/PyWebIO-Docusaurus/docs/tutorial-contribute/blog-post/"},next:{title:"Add Assets And Components",permalink:"/PyWebIO-Docusaurus/docs/tutorial-contribute/assets-components/"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Create New Branch",id:"create-new-branch",level:2},{value:"Add New Directory And Markdown File",id:"add-new-directory-and-markdown-file",level:2},{value:"Create The .json File",id:"create-the-json-file",level:2},{value:"Compose The Tutorial",id:"compose-the-tutorial",level:2},{value:"Add Metadata",id:"add-metadata",level:2},{value:"Submit",id:"submit",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:d};function m(t){var e=t.components,l=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Jeff Terrell, April 6, 2022")),(0,o.kt)("p",null,"This tutorial will guide you through the tutorial creation process for PyWeb.io. You will learn how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a separate GitHub branch"),(0,o.kt)("li",{parentName:"ul"},"Add a new directory and Markdown file (.mdx)"),(0,o.kt)("li",{parentName:"ul"},"Create your tutorial from a provided template"),(0,o.kt)("li",{parentName:"ul"},"Add metadata"),(0,o.kt)("li",{parentName:"ul"},"Submit a pull request")),(0,o.kt)("p",null,"Let's dive in!"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access to the PyWebIO content creation GitHub repository - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pywebio/content_creation"},"Click Here!"))),(0,o.kt)("h2",{id:"create-new-branch"},"Create New Branch"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("p",null,"From the content_creation repository, let's begin with creating a new branch that will contain your soon to be created .mdx file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Create Branch",src:a(6874).Z,width:"306",height:"246"})),(0,o.kt)("p",null,"To create a new branch as shown above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the grey drop-down button (",(0,o.kt)("img",{alt:"GitHub Branch",src:a(6965).Z,width:"8",height:"12"})," main)"),(0,o.kt)("li",{parentName:"ul"},"Type the name of the new branch in the input box",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Format:")," tutorial-date-description",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g.",(0,o.kt)("inlineCode",{parentName:"li"},"tutorial-2022-04-07-mongoDB")))))),(0,o.kt)("li",{parentName:"ul"},'Click "Create branch"')),(0,o.kt)("p",null,"You will automatically be directed to the newly created branch."),(0,o.kt)("h2",{id:"add-new-directory-and-markdown-file"},"Add New Directory And Markdown File"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Create New File",src:a(9252).Z,width:"1058",height:"296"})),(0,o.kt)("p",null,'Navigate to the docs directory of the repo, click the "Add File" button, and then select "Create new file".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub add directory and file",src:a(1330).Z,width:"1027",height:"261"})),(0,o.kt)("p",null,'In the input box replace "Name your file..." with the new directory and index.mdx file for your tutorial.'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If there is not an appropriate category for your tutorial you will need to create one."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Format:")," content_creation/docs/category/description/index.mdx ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g.",(0,o.kt)("inlineCode",{parentName:"li"},"content_creation/docs/database-integration/mongoDB/index.mdx"))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub commit new file",src:a(1173).Z,width:"953",height:"329"})),(0,o.kt)("p",null,'Next, scroll to the bottom of the page, ensure the "Commit directly to the ',(0,o.kt)("inlineCode",{parentName:"p"},"tutorial-date-description"),' branch" option is selected and click the green "Commit new file" button.'),(0,o.kt)("p",null,"If you created a new category, follow the steps in the next section ",(0,o.kt)("a",{parentName:"p",href:"#create-the-json-file"},'"Create The .json File"'),". Otherwise, continue on to ",(0,o.kt)("a",{parentName:"p",href:"#compose-the-tutorial"},'"Compose The Tutorial".')),(0,o.kt)("h2",{id:"create-the-json-file"},"Create The .json File"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"content_creation\n\u2502   README.md\n\u2502   file001.txt    \n\u2502\n\u2514\u2500\u2500\u2500docs\n            \u2502   file011.txt\n            \u2502   file012.txt\n            \u2502\n            \u2514\u2500\u2500\u2500category\n                        \u2502   _category_.json\n                        \u2502   \n                        \u2502   \n                        \u2514\u2500\u2500\u2500description\n                                    \u2502   index.mdx\n                                    \u2502   image.jpg\n")),(0,o.kt)("p",null,"The category .json file is used to give the category a title and order position (ascending) in the left navbar. The .json file belongs in the category directory and must be created exactly as shown:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"_category_.json")),(0,o.kt)("p",null,"Next, add two fields, lable and position to the .json file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "label": "New Category",\n  "position": 5\n}\n')),(0,o.kt)("h2",{id:"compose-the-tutorial"},"Compose The Tutorial"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Copy Paste Blog Template",src:a(4244).Z,width:"1045",height:"376"})),(0,o.kt)("p",null,"To make creating your tutorial easier, we have a template you can copy and paste to help get you started. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pywebio/content_creation/tree/main/static/template/tutorial-template.mdx"},"Tutorial template")," ")),(0,o.kt)("p",null,'To use the template, click the "Raw" button on the right side of the screen, and highlight and copy the entire document.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Copy Paste Blog Template",src:a(3610).Z,width:"1026",height:"346"})),(0,o.kt)("p",null,'Now, navigate to the newly created directory for your tutorial, select the index.mdx file and click the "pencil" icon on the right side of the screen. Paste the template into your file to begin creating your tutorial. Your index.mdx file should look similar to the screenshot above.'),(0,o.kt)("p",null,'You can now begin creating your content! Feel free to improvise and make it your own, the template is not the "law", be creative and have fun, but try to follow the general layout of the template as well (thanks \ud83d\ude04). '),(0,o.kt)("h2",{id:"add-metadata"},"Add Metadata"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Discord Card",src:a(834).Z,width:"232",height:"276"})),(0,o.kt)("p",null,"At the top of your file in between the three dashes is the front matter which contains fields (metadata) that need to be changed for each blog post or tutorial."),(0,o.kt)("p",null,"Follow the instructions below to ensure your file contains valuable metadata, and social card components are displayed correctly."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Metadata Instructions")),(0,o.kt)("div",{style:{backgroundColor:""}},(0,o.kt)("li",null,(0,o.kt)("b",null,"id:")," unique document ID which is the name of the document (without the extension) relative to the root docs directory (e.g., document or tutorials/document)"),(0,o.kt)("li",null,(0,o.kt)("b",null,"sidebar_position:")," the position of the document in the left navbar (descending)"),(0,o.kt)("li",null,(0,o.kt)("b",null,"title:")," the H1 main heading of the tutorial."),(0,o.kt)("li",null,(0,o.kt)("b",null,"description:")," include a short description of the tutorial. This will not be visible anywhere on the page and is for SEO purposes."),(0,o.kt)("li",null,(0,o.kt)("b",null,"image:")," adds a meta image for social summary cards on Discord, Twitter, etc. Upload image to: /static/img/tutorial. Relative path must be: /img/tutorial/yourimage.jpg."),(0,o.kt)("li",null,(0,o.kt)("b",null,"tags:")," include several tags relevent to the subject matter of your tutorial to make finding similar content easier for other readers."),(0,o.kt)("li",null,(0,o.kt)("b",null,"keywords:")," include several keywords describing the main topics of the tutorial for SEO purposes."))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"submit"},"Submit"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Create Pull Request",src:a(9443).Z,width:"904",height:"372"})),(0,o.kt)("p",null,'Navigate to the home page of your branch and click the green "Compare & pull request" button residing in the yellowish colored box displaying your branch name. '),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'You can also select the "',(0,o.kt)("img",{alt:"GitHub octicon pull request",src:a(2643).Z,width:"9",height:"12"}),' Contribute" drop down and click the green "Open pull request" button.'))),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Create Pull Request Final",src:a(369).Z,width:"1044",height:"526"})),(0,o.kt)("p",null,'You will be taken to the "Open a pull request" screen where you can choose to add a reviewer by clicking the \u2699\ufe0f icon next to "Reviewers". Select a reviewer and click the green "Create pull request" button and that\'s it, you\'re done! A PyWebIO team member will review your pull request and assuming everything looks good, your tutorial will be deployed.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GitHub Actions Check",src:a(7620).Z,width:"905",height:"238"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cloudy.png",alt:"-----------------------------------------------------"})),(0,o.kt)("p",null,"This article describes how to create and submit a tutorial to the PyWeb.io blog. "),(0,o.kt)("p",null,"If you have any further questions, comments, feedback, etc. ",(0,o.kt)("a",{parentName:"p",href:"mailto:hey@pyweb.io"},"please contact the PyWeb.io team")))}m.isMDXComponent=!0},834:function(t,e,a){e.Z=a.p+"assets/images/discord_card-e017a25c8cb96bebbd4e344db2c61ad0.JPG"},7620:function(t,e,a){e.Z=a.p+"assets/images/gh_actions_check-d88d24bba0091cef16ed9a8ee8f4ab83.JPG"},1330:function(t,e,a){e.Z=a.p+"assets/images/gh_add_directory_file_tutorial-418ce8ce27f832bd874d0d9cc7e49bb2.png"},1173:function(t,e,a){e.Z=a.p+"assets/images/gh_commit_new_file_tutorial-6e846433e59c22eb28fe2e5660a2221f.png"},9252:function(t,e,a){e.Z=a.p+"assets/images/gh_create_new_file_tutorial-86f1a6053cadacb37e78fe2f4cba8f15.png"},369:function(t,e,a){e.Z=a.p+"assets/images/gh_create_pull_request_final_tutorial-8a1924c0df58099a032eb97824435054.png"},6965:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAGYktHRAD/AP8A/6C9p5MAAAD5SURBVChTbZC/ykZwFMfPq5QyKoNIuQGDDG7AIJurUAZXweYKnrgAl2A1SCaDjBYDUbKYOC+n96nnfXs/9et8O3++nd+B67qwbVtclgX/4ysIAhyGAY7jgCzLQFEU+AXHcdSp6zo2TUM6jmM0DAPzPEeo6xrvPoyiiIplWaLjOKQlSUJGVVVyEkWRoqZp0Pc9eJ4HlmUBjONIDmma0tTD6/Wi3LZtyNDYzb7vcP8GkiSBMAzBNM1nP4Bpmqj7WfaJz5NlGed5JjeoqoqSgiBgURR4nicV3gDLsiRs28au60h/wvi+D67rPhcFnudvsz+8T72u68/MJ4jf1yXhGtv7kSAAAAAASUVORK5CYII="},2643:function(t,e){e.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAMCAYAAACwXJejAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAAmJLR0QA/4ePzL8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDUtMDdUMTc6MTc6MTIrMDA6MDBA3EXdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA1LTA3VDE3OjE3OjEyKzAwOjAwMYH9YQAAAPtJREFUKFN9kb2JhkAQhudUEPEHFCxCzO3CxNAOTKzhq8ECrEBLMLICxVQDE8FAE0GF1TlnOI+L7oHlnXf2Z3Z2QQiBVVXheZ5IZFmG4zhy/CLP8/zpug7KsgTLsiCOY1iWBfq+B8/zQNM0AMdxeLVhGJimKQLA7wjDEPd9R2iahhN1XfPiIAhwmiYchoHzbduipKrqEwOXIvI8B13XYds29oqigHTfN5vrulh93wfTNKkh9oT0o/8iPXAgyzLry+tpXjqOgw21/Zd1XVmf9wOwbZu7ejzry+vpib6SJEG6JJ1UFAXvJqIoAtd1uRx1xd/ylOWdL+QpL4TAb5bIuq2yAzO3AAAAAElFTkSuQmCC"},9443:function(t,e,a){e.Z=a.p+"assets/images/gh_pull_request_contribute_tutorial-0b736dabe69ab4a5f0dab1aa88c6f067.png"},4244:function(t,e,a){e.Z=a.p+"assets/images/gh_tutorial_template-c0d2c3d9e6bf4a795d937622192941ce.png"},3610:function(t,e,a){e.Z=a.p+"assets/images/gh_tutorial_template_paste-ebe5341d2f303bd6b5724770bef9a441.png"},6874:function(t,e,a){e.Z=a.p+"assets/images/testing-2769988827a810dfc3c1a24f0acd783f.png"}}]);