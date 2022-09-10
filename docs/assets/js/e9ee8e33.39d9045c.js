"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:300},o="GitHub Actions (CI Repository)",l={unversionedId:"github-actions",id:"github-actions",title:"GitHub Actions (CI Repository)",description:"In CI Repository, workflow files and scripts used in CI are managed.",source:"@site/docs/github-actions.md",sourceDirName:".",slug:"/github-actions",permalink:"/github-actions",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/github-actions.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"GitHub Apps",permalink:"/config/github-app"},next:{title:"Supported Events",permalink:"/events"}},s={},p=[{value:"Example",id:"example",level:2},{value:"Workflow Dispatch&#39;s inputs",id:"workflow-dispatchs-inputs",level:2},{value:"Actions for gha-trigger",id:"actions-for-gha-trigger",level:2},{value:"How to use Actions",id:"how-to-use-actions",level:3},{value:"Use GitHub App instead of <code>${{ github.token }}</code>",id:"use-github-app-instead-of--githubtoken-",level:2},{value:"Useful environment variables",id:"useful-environment-variables",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-actions-ci-repository"},"GitHub Actions (CI Repository)"),(0,r.kt)("p",null,"In CI Repository, workflow files and scripts used in CI are managed.\n",(0,r.kt)("inlineCode",{parentName:"p"},"gha-trigger")," triggers CI Repository's workflows by ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_dispatch")," API."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/example-ci"},"Repository")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/example-ci/blob/main/.github/workflows/test_pull_request.yaml"},"Workflow"))),(0,r.kt)("h2",{id:"workflow-dispatchs-inputs"},"Workflow Dispatch's inputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"on:\n  workflow_dispatch:\n    inputs:\n      data:\n        required: true\n")),(0,r.kt)("p",null,"The input ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is a JSON string.\nTo get data from ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", you have to parse ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/expressions#fromjson"},"fromJSON"),"."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"env:\n  PR_NUMBER: ${{fromJSON(inputs.data).event.pull_request.number}}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"data")," has the following fields."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"event: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"Webhook event payload")),(0,r.kt)("li",{parentName:"ul"},"event_name: event name (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"push"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pull_request"),")"),(0,r.kt)("li",{parentName:"ul"},"changed_files: changed files by push or pull_request event"),(0,r.kt)("li",{parentName:"ul"},"pull_request: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/rest/pulls/pulls#get-a-pull-request"},"pull request"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"changed_files")," is got only when ",(0,r.kt)("inlineCode",{parentName:"p"},"paths")," filters are used."),(0,r.kt)("p",null,"e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- matches:\n    - events:\n        - name: pull_request\n      paths:\n        - type: equal\n          value: README.md\n")),(0,r.kt)("p",null,"In case of ",(0,r.kt)("inlineCode",{parentName:"p"},"pull_request")," event, gha-trigger gets a pull request data until ",(0,r.kt)("inlineCode",{parentName:"p"},"mergeable")," becomes not ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and set the result to ",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"pull_request")," field."),(0,r.kt)("h2",{id:"actions-for-gha-trigger"},"Actions for gha-trigger"),(0,r.kt)("p",null,"gha-trigger provides some GitHub Actions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/start-action"},"start-action"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/step-summary-action"},"step-summary-action")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/set-env-action"},"set-env-action")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/end-action"},"end-action"))),(0,r.kt)("p",null,"start-action wraps step-summary-action and set-env-action."),(0,r.kt)("p",null,"gha-trigger's Workflow is different from normal GitHub Actions Workflow, so you have to do some additional tasks.\nFor example, you have to update commit statuses yourself."),(0,r.kt)("p",null,"These actions do the common tasks and abstract the difference as much as possible."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Show how to rerun and cancel workflow in GITHUB_STEP_SUMMARY"),(0,r.kt)("li",{parentName:"ul"},"Set useful Environment Variables"),(0,r.kt)("li",{parentName:"ul"},"Generate GitHub App Token"),(0,r.kt)("li",{parentName:"ul"},"Update commit statuses"),(0,r.kt)("li",{parentName:"ul"},"Checkout Main Repository and CI Repository")),(0,r.kt)("h3",{id:"how-to-use-actions"},"How to use Actions"),(0,r.kt)("p",null,"Please run ",(0,r.kt)("inlineCode",{parentName:"p"},"start-action")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end-action")," in GitHub Actions Job."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: gha-trigger/start-action@main\n        id: start\n        with:\n          data: ${{inputs.data}}\n          app_id: ${{secrets.APP_ID}}\n          app_private_key: ${{secrets.APP_PRIVATE_KEY}}\n\n      # Add your steps freely\n\n      - uses: gha-trigger/end-action@main\n        if: always()\n        with:\n          github_token: ${{steps.start.outputs.github_app_token}}\n          state: ${{job.status}}\nFooter\n")),(0,r.kt)("h2",{id:"use-github-app-instead-of--githubtoken-"},"Use GitHub App instead of ",(0,r.kt)("inlineCode",{parentName:"h2"},"${{ github.token }}")),(0,r.kt)("p",null,"To access Main Repository, you have to use access token other than ",(0,r.kt)("inlineCode",{parentName:"p"},"${{ github.token }}"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/gha-trigger/start-action"},"gha-trigger/start-action")," outputs a GitHub App Token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- uses: gha-trigger/start-action@main\n  id: start\n  with:\n    data: ${{inputs.data}}\n    app_id: ${{secrets.APP_ID}}\n    app_private_key: ${{secrets.APP_PRIVATE_KEY}}\n\n- name: Add a Pull Request Label\n  run: gh pr edit -R "${{env.GHA_REPOSITORY}}" "$PR_NUMBER" --add-label "help wanted"\n  env:\n    GITHUB_TOKEN: ${{steps.start.outputs.github_app_token}} # Use GitHub App Token\n')),(0,r.kt)("h2",{id:"useful-environment-variables"},"Useful environment variables"),(0,r.kt)("p",null,"As we described, to get data from ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," you have to parse ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/expressions#fromjson"},"fromJSON"),"."),(0,r.kt)("p",null,"And default environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_*")," are different from normal GitHub Actions Workflow."),(0,r.kt)("p",null,"For example, if you want to get the pull request head ref, you can't use the default environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_HEAD_REF"),"."),(0,r.kt)("p",null,"You can get the pull request head ref as the following, but it is a bit complicated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'env:\n  HEAD_REF: "${{fromJSON(inputs.data).event.pull_request.head.ref}}"\n')),(0,r.kt)("p",null,"To improve the situation, ",(0,r.kt)("inlineCode",{parentName:"p"},"start-action")," (",(0,r.kt)("inlineCode",{parentName:"p"},"set-env-action"),") sets useful environment variables."),(0,r.kt)("p",null,"GitHub Actions doesn't allow to override default environment variables, so ",(0,r.kt)("inlineCode",{parentName:"p"},"set-env-action")," sets environment variables ",(0,r.kt)("inlineCode",{parentName:"p"},"GHA_*"),"."),(0,r.kt)("p",null,"For example, you can get the pull request head ref by the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"GHA_HEAD_REF"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'    steps:\n      - uses: gha-trigger/start-action@main\n        id: start\n        with:\n          data: ${{inputs.data}}\n          app_id: ${{secrets.APP_ID}}\n          app_private_key: ${{secrets.APP_PRIVATE_KEY}}\n      - run: echo "$GHA_HEAD_REF"\n')))}c.isMDXComponent=!0}}]);