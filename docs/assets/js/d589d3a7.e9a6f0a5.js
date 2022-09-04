"use strict";(self.webpackChunkgha_trigger=self.webpackChunkgha_trigger||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),g=n,f=c["".concat(p,".").concat(g)]||c[g]||m[g]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:100},o="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"In the Getting Started, you will set up gha-trigger and experience CI with gha-trigger.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/getting-started",draft:!1,editUrl:"https://github.com/gha-trigger/gha-trigger.github.io/edit/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"gha-trigger",permalink:"/"},next:{title:"Configuration",permalink:"/config/"}},p={},u=[{value:"Requirement",id:"requirement",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create GitHub Repositories from template repositories",id:"1-create-github-repositories-from-template-repositories",level:3},{value:"3. Set up Terraform Configuration",id:"3-set-up-terraform-configuration",level:3},{value:"4. Apply Terraform",id:"4-apply-terraform",level:3},{value:"5. Create GitHub Apps",id:"5-create-github-apps",level:3},{value:"6. Set GitHub App ID and Private Key",id:"6-set-github-app-id-and-private-key",level:3},{value:"7. Apply Terraform again",id:"7-apply-terraform-again",level:3},{value:"8. Run CI",id:"8-run-ci",level:3},{value:"9. Run Manual Workflow",id:"9-run-manual-workflow",level:3},{value:"10. Clean up",id:"10-clean-up",level:2}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"In the Getting Started, you will set up gha-trigger and experience CI with gha-trigger."),(0,n.kt)("h2",{id:"requirement"},"Requirement"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Git"),(0,n.kt)("li",{parentName:"ul"},"GitHub Account"),(0,n.kt)("li",{parentName:"ul"},"AWS Account"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"Terraform"))),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create GitHub Repositories from template repositories"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/securing-your-webhooks"},"Create Webhook Secret")),(0,n.kt)("li",{parentName:"ol"},"Set up Terraform Configuration"),(0,n.kt)("li",{parentName:"ol"},"Apply Terraform"),(0,n.kt)("li",{parentName:"ol"},"Create GitHub Apps"),(0,n.kt)("li",{parentName:"ol"},"Set GitHub App ID and Private Key"),(0,n.kt)("li",{parentName:"ol"},"Apply Terraform again"),(0,n.kt)("li",{parentName:"ol"},"Run CI"),(0,n.kt)("li",{parentName:"ol"},"Run Manual Workflow"),(0,n.kt)("li",{parentName:"ol"},"Clean up")),(0,n.kt)("h3",{id:"1-create-github-repositories-from-template-repositories"},"1. Create GitHub Repositories from template repositories"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/example-main/generate"},"Main Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/example-ci/generate"},"CI Repository")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/gha-trigger/example-manual-workflow/generate"},"Manual Workflow Repository"))),(0,n.kt)("p",null,"Please fix code."),(0,n.kt)("h3",{id:"3-set-up-terraform-configuration"},"3. Set up Terraform Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/gha-trigger/gha-trigger\n$ cd gha-trigger/terraform\n$ bash download-zip.sh # Download a zip file from Release page\n")),(0,n.kt)("p",null,"Create ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yaml"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"secret.yaml"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," from templates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ cp config.yaml.tmpl config.yaml\n$ vi config.yaml\n\n$ cp secret.yaml.tmpl secret.yaml\n$ vi secret.yaml\n\n$ cp terraform.tfvars.tmpl terraform.tfvars\n$ vi terraform.tfvars\n")),(0,n.kt)("p",null,"GitHub Apps aren't created yet, so please set dummy string as GitHub App private keys at the moment."),(0,n.kt)("h3",{id:"4-apply-terraform"},"4. Apply Terraform"),(0,n.kt)("p",null,"Create resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ terraform apply [-refresh=false]\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"-refresh=false")," is useful to make terraform commands fast."),(0,n.kt)("h3",{id:"5-create-github-apps"},"5. Create GitHub Apps"),(0,n.kt)("p",null,"Please create GitHub Apps according to ",(0,n.kt)("a",{parentName:"p",href:"config/github-app"},"the document"),"."),(0,n.kt)("h3",{id:"6-set-github-app-id-and-private-key"},"6. Set GitHub App ID and Private Key"),(0,n.kt)("h3",{id:"7-apply-terraform-again"},"7. Apply Terraform again"),(0,n.kt)("h3",{id:"8-run-ci"},"8. Run CI"),(0,n.kt)("p",null,"Create a pull request to source repository to test CI."),(0,n.kt)("h3",{id:"9-run-manual-workflow"},"9. Run Manual Workflow"),(0,n.kt)("h2",{id:"10-clean-up"},"10. Clean up"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ terraform destroy\n")))}m.isMDXComponent=!0}}]);