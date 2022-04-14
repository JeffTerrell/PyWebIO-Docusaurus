"use strict";(self.webpackChunkpy_web_io_blog=self.webpackChunkpy_web_io_blog||[]).push([[8454],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9568:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1,title:"Input"},u=void 0,p={unversionedId:"user-manual/testing-file",id:"user-manual/testing-file",title:"Input",description:"Testing out headings",source:"@site/docs/user-manual/testing-file.md",sourceDirName:"user-manual",slug:"/user-manual/testing-file",permalink:"JeffTerrell/PyWebIO-Docusaurus/tree/gh-pages/docs/user-manual/testing-file",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Input"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"JeffTerrell/PyWebIO-Docusaurus/tree/gh-pages/docs/tutorial-extras/translate-your-site"},next:{title:"Manage A Page",permalink:"JeffTerrell/PyWebIO-Docusaurus/tree/gh-pages/docs/tutorial-test/manage-a-page"}},s={},c=[{value:"Testing heading 2",id:"testing-heading-2",level:2},{value:"Input",id:"input",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing-file"},"Testing File"),(0,a.kt)("p",null,"Testing out headings"),(0,a.kt)("h2",{id:"testing-heading-2"},"Testing heading 2"),(0,a.kt)("h1",{id:"users-guide"},"User's guide"),(0,a.kt)("p",null,"If you are familiar with web development, you may not be accustomed to the usage of PyWebIO described below, which is\ndifferent from the traditional web development pattern that backend implement api and frontend display content.\nIn PyWebIO, you only need to write code in Python."),(0,a.kt)("p",null,"In fact, the way of writing PyWebIO applications is more like writing a console program, except that the terminal here\nbecomes a browser. Using the imperative API provided by PyWebIO, you can simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"put_text()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"put_image()"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"put_table()")," and other functions to output text, pictures, tables and other content to the browser, or you can call\nsome functions such as ",(0,a.kt)("inlineCode",{parentName:"p"},"input()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"select()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file_upload()")," to display different forms on the browser to get\nuser input. In addition, PyWebIO also provides support for click events, layout, etc. PyWebIO aims to allow you to use\nthe least code to interact with the user and provide a good user experience as much as possible."),(0,a.kt)("p",null,"This user guide introduces you the most of the features of PyWebIO. There is a demo link at the top right of the example\ncodes in this document, where you can run the example code online and see what happens."),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,"The input functions are defined in the :doc:",(0,a.kt)("inlineCode",{parentName:"p"},"pywebio.input </input>")," module and can be imported using ",(0,a.kt)("inlineCode",{parentName:"p"},"from pywebio.input import *"),"."),(0,a.kt)("p",null,"When calling the input function, an input form  will be popped up on the browser. PyWebIO's input functions is blocking\n(same as Python's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"input()")," function) and will not return until the form is successfully submitted."),(0,a.kt)("p",null,"Basic input\n^^^^^^^^^^^^^"),(0,a.kt)("p",null,"Here are some basic types of input."),(0,a.kt)("p",null,"Text input:"),(0,a.kt)("p",null,".. exportable-codeblock::\n:name: text-input\n:summary: Text input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"age = input(\"How old are you?\", type=NUMBER)\nput_text('age = %r' % age)  # ..demo-only\n")),(0,a.kt)("p",null,"After running the above code, the browser will pop up a text input field to get the input. After the user completes the\ninput and submits the form, the function returns the value entered by the user."),(0,a.kt)("p",null,"Here are some other types of input functions:"),(0,a.kt)("p",null,".. exportable-codeblock::\n:name: basic-input\n:summary: Basic input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Password input\npassword = input(\"Input password\", type=PASSWORD)\nput_text('password = %r' % password)  # ..demo-only\n## ----\n\n# Drop-down selection\ngift = select('Which gift you want?', ['keyboard', 'ipad'])\nput_text('gift = %r' % gift)  # ..demo-only\n## ----\n\n# Checkbox\nagree = checkbox(\"User Term\", options=['I agree to terms and conditions'])\nput_text('agree = %r' % agree)  # ..demo-only\n## ----\n\n# Single choice\nanswer = radio(\"Choose one\", options=['A', 'B', 'C', 'D'])\nput_text('answer = %r' % answer)  # ..demo-only\n## ----\n\n# Multi-line text input\ntext = textarea('Text Area', rows=3, placeholder='Some text')\nput_text('text = %r' % text)  # ..demo-only\n## ----\n\n# File Upload\nimg = file_upload(\"Select a image:\", accept=\"image/*\")\nif img:    # ..demo-only\n    put_image(img['content'], title=img['filename'])  # ..demo-only\n")),(0,a.kt)("p",null,"Parameter of input functions\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"),(0,a.kt)("p",null,"There are many parameters that can be passed to the input function(for complete parameters, please refer to the\n:doc:",(0,a.kt)("inlineCode",{parentName:"p"},"function document </input>"),"):"),(0,a.kt)("p",null,".. exportable-codeblock::\n:name: input-args\n:summary: Parameter of input functions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"input('This is label', type=TEXT, placeholder='This is placeholder',\n        help_text='This is help text', required=True)\n")),(0,a.kt)("p",null,"The results of the above example are as follows:"),(0,a.kt)("p",null,".. image:: /assets/input_1.png"),(0,a.kt)("p",null,"You can specify a validation function for the input by using ",(0,a.kt)("inlineCode",{parentName:"p"},"validate")," parameter. The validation function should\nreturn ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," when the check passes, otherwise an error message will be returned:"),(0,a.kt)("p",null,".. exportable-codeblock::\n:name: input-valid-func\n:summary: Input validate function for"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def check_age(p):  # return None when the check passes, otherwise return the error message\n    if p < 10:\n        return 'Too young!!'\n    if p > 60:\n        return 'Too old!!'\n\nage = input(\"How old are you?\", type=NUMBER, validate=check_age)\nput_text('age = %r' % age)  # ..demo-only\n")),(0,a.kt)("p",null,"When the user input an illegal value, the input field is displayed as follows:"),(0,a.kt)("p",null,".. image:: /assets/input_2.png"),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," parameter in :func:",(0,a.kt)("inlineCode",{parentName:"p"},"pywebio.input.textarea()")," to make a code editing textarea."),(0,a.kt)("p",null,".. exportable-codeblock::\n:name: codemirror\n:summary: Code editing by using textarea"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"code = textarea('Code Edit', code={\n    'mode': \"python\",\n    'theme': 'darcula',\n}, value='import something\\n# Write your python code')\nput_code(code, language='python')  # ..demo-only\n")),(0,a.kt)("p",null,"The results of the above example are as follows:"),(0,a.kt)("p",null,".. image:: /assets/codemirror_textarea.png"),(0,a.kt)("p",null,"OK, Have fun with PyWebIO!"))}m.isMDXComponent=!0}}]);