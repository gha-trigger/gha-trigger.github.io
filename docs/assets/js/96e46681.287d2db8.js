"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||g[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:100},o="Configuration",s={unversionedId:"config/index",id:"config/index",title:"Configuration",description:"gha-trigger supports only environment variables as source of configuration,",source:"@site/docs/config/index.md",sourceDirName:"config",slug:"/config/",permalink:"/config/",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/config/index.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"GitHub Apps",permalink:"/config/github-app"}},l={},p=[{value:"Event Filter",id:"event-filter",level:2},{value:"events",id:"events",level:3},{value:"branches, tags, paths, branches-ignore, tags-ignore, paths-ignore",id:"branches-tags-paths-branches-ignore-tags-ignore-paths-ignore",level:3},{value:"Secrets for GitHub App",id:"secrets-for-github-app",level:2}],u={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports only environment variables as source of configuration,\nbut we are considering other sources such as GitHub, S3, DynamoDB, AWS AppConfig, and so on."),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\naws:\n  region: us-east-1\ngithub_apps:\n  - name: webhook\n    user: suzuki-shunsuke\n    app_id: 123456789\n    secret:\n      type: aws_secretsmanager\n      region: us-east-1\n      secret_id: test-gha-trigger-main\n  - name: ci\n    user: suzuki-shunsuke\n    app_id: 123456789\n    secret:\n      type: aws_secretsmanager\n      region: us-east-1\n      secret_id: test-gha-trigger-trigger-workflow\nrepos:\n  - repo_owner: suzuki-shunsuke\n    repo_name: test-gha-trigger-main\n    workflow_github_app_name: ci\n    ci_repo_name: test-gha-trigger-ci\n    events:\n      - matches:\n          - events:\n              - name: pull_request\n            branches:\n              - value: main\n                type: equal\n        workflow:\n          workflow_file_name: test_pull_request.yaml\n          ref: pull_request\n      - matches:\n          - events:\n              - name: push\n            branches:\n              - value: main\n                type: equal\n        workflow:\n          workflow_file_name: test.yaml\n          ref: main\n")),(0,a.kt)("h2",{id:"event-filter"},"Event Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"events"),(0,a.kt)("li",{parentName:"ul"},"branches"),(0,a.kt)("li",{parentName:"ul"},"tags"),(0,a.kt)("li",{parentName:"ul"},"paths"),(0,a.kt)("li",{parentName:"ul"},"branches-ignore"),(0,a.kt)("li",{parentName:"ul"},"tags-ignore"),(0,a.kt)("li",{parentName:"ul"},"paths-ignore")),(0,a.kt)("h3",{id:"events"},"events"),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- matches:\n    - events:\n        # OR condition\n        - name: pull_request\n        - name: push\n")),(0,a.kt)("p",null,"You can also specify event action."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"    - events:\n        - name: pull_request\n          types:\n            - opened\n")),(0,a.kt)("h3",{id:"branches-tags-paths-branches-ignore-tags-ignore-paths-ignore"},"branches, tags, paths, branches-ignore, tags-ignore, paths-ignore"),(0,a.kt)("p",null,"e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- matches:\n    - branches:\n        - value: main\n          type: equal\n")),(0,a.kt)("p",null,"Supported types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"equal"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#Contains"},"contain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/regexp#Regexp.MatchString"},"regexp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#HasPrefix"},"prefix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/strings#HasSuffix"},"suffix")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/path#Match"},"glob"))),(0,a.kt)("h2",{id:"secrets-for-github-app"},"Secrets for GitHub App"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," requires the following secrets."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"webhook_secret: GitHub App's Webhook Secret"),(0,a.kt)("li",{parentName:"ul"},"github_app_private_key: GitHub App's private key"),(0,a.kt)("li",{parentName:"ul"},"(optional) app_id: GitHub App ID"),(0,a.kt)("li",{parentName:"ul"},"(optional) installation_id: GitHub App Installation ID")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"gha-trigger")," supports only AWS SecretsManager at the moment."))}g.isMDXComponent=!0}}]);