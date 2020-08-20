(this["webpackJsonpportfolio-2020"]=this["webpackJsonpportfolio-2020"]||[]).push([[0],{25:function(e,t,n){e.exports=n(40)},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(19),o=n.n(l),c=(n(30),n(6)),i={primaryDark:"#353535",primaryLight:"#EFFFFA",primaryHover:"#343078",mobile:"768px",large:"4000px",mid:"1155px"},s=n(4);var m=function(){var e=arguments,t=this,n=Object(a.useState)(!1),r=Object(s.a)(n,2),l=r[0],o=r[1],c=Object(a.useRef)(null),i=Object(a.useCallback)((function(){window.scrollY>c.current.getBoundingClientRect().bottom?o(!0):o(!1)}),[]),m=Object(a.useCallback)((function(n){var a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var o=t,c=e,i=l&&!a;clearTimeout(a),a=setTimeout((function(){a=null,l||n.apply(o,c)}),r),i&&n.apply(o,c)}}),[]);return Object(a.useEffect)((function(){return window.addEventListener("scroll",m(i)),function(){window.removeEventListener("scroll",(function(){return i}))}}),[m,i]),{isSticky:l,element:c}},u=n(2),p=n(3),d=n(7),f=n(5),E=(n(8),function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/tldav",target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement(u.a,{className:"pap",icon:p.b})," "),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/tldav/",target:"_blank",rel:"noopener noreferrer"},"Linkedin"),r.a.createElement(u.a,{className:"pap",icon:p.e})," "),r.a.createElement("li",null,r.a.createElement("a",{href:"/portfolio-2020/assets/tdavis-resume.pdf",target:"_blank",rel:"noopener noreferrer"},"Resume"),r.a.createElement(u.a,{className:"pap",icon:d.b})," "),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects",rel:"noopener noreferrer"},"My Work"),r.a.createElement(u.a,{className:"pap",icon:d.c})),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact",rel:"noopener noreferrer"},"Contact"),r.a.createElement(u.a,{className:"pap",icon:f.c})))}),h=function(){return r.a.createElement("div",{className:"side-nav"},r.a.createElement("div",{className:"nav-style"},r.a.createElement(E,null)))},v=n(11),g=n(12),b=n(9);function w(){var e=Object(b.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tbackground: ",";\n\ttransform: ",";\n\ttext-align: center;\n\tpadding: 2rem;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\tbox-shadow: rgba(172, 172, 172, 0.5) 0px 1px 3px 0px;\n\n\ttransition: transform 0.3s ease-in-out;\n\n\t@media (max-width: ",") {\n\t\twidth: 100%;\n\t\ttransform: ",";\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t}\n\n\ta {\n\t\t@media (max-width: ",") {\n\t\t\ttext-align: center;\n\t\t}\n\n\t\t&:hover {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n"]);return w=function(){return e},e}var y=c.b.nav(w(),(function(e){return e.theme.primaryLight}),(function(e){return e.open?"translateX(0)":"translateX(-101%)"}),(function(e){return e.theme.mobile}),(function(e){return e.open?"translateY(0)":"translateY(-101%)"}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),N=function(e){var t=e.open,n=Object(g.a)(e,["open"]),a=!!t;return r.a.createElement(y,Object.assign({className:"nav-style",open:t,"aria-hidden":!a},n),r.a.createElement(E,null))};function k(){var e=Object(b.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\twidth: 2rem;\n\theight: 2rem;\n\tbackground: #effffa;\n\tborder: none;\n\tcursor: pointer;\n\tpadding: 2.5px 0;\n\tmargin: 5px 0 0 0;\n\tz-index: 10;\n\n\tspan {\n\t\tmargin: auto;\n\t\twidth: 2rem;\n\t\theight: 0.25rem;\n\t\tbackground: ",";\n\t\tborder-radius: 10px;\n\t\ttransition: all 0.17s linear;\n\t\tposition: relative;\n\t\ttransform-origin: 3px;\n\n\t\t:first-child {\n\t\t\ttransform: ",";\n\t\t}\n\n\t\t:nth-child(2) {\n\t\t\topacity: ",";\n\t\t\ttransform: ",";\n\t\t}\n\n\t\t:nth-child(3) {\n\t\t\ttransform: ",";\n\t\t}\n\t}\n"]);return k=function(){return e},e}var j=c.b.button(k(),(function(e){var t=e.theme;e.open;return t.primaryDark}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){e.open;return"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),x=function(e){var t=e.open,n=e.setOpen,a=Object(g.a)(e,["open","setOpen"]),l=!!t;return r.a.createElement(j,Object.assign({"aria-label":"Toggle menu","aria-expanded":l,open:t,onClick:function(){return n(!t)}},a),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))},S=function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t(n)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e,t])},O=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],o=Object(a.useRef)();return S(o,(function(){return l(!1)})),r.a.createElement("nav",{className:"mid-nav"},r.a.createElement("div",{ref:o},r.a.createElement(v.a,{disabled:!n},r.a.createElement(x,{className:"hamburger-button",open:n,setOpen:l,"aria-controls":"main-menu"}),r.a.createElement(N,{open:n,setOpen:l,id:"main-menu"}))))},C=function(e){var t=e.sticky,n=Object(a.useState)(!1),l=Object(s.a)(n,2),o=l[0],c=l[1],i=Object(a.useRef)();return S(i,(function(){return c(!1)})),r.a.createElement("nav",{className:t?"small-nav small-nav-sticky":"small-nav"},r.a.createElement("div",{ref:i},r.a.createElement(v.a,{disabled:!o},r.a.createElement(x,{className:"burger-button",open:o,setOpen:c,"aria-controls":"main-menu",buttonColor:"#EFFFFA"}),r.a.createElement(N,{open:o,setOpen:c,id:"main-menu"}))))},M=function(){return r.a.createElement("div",{className:"footer stage"},r.a.createElement(u.a,{icon:d.a})," 2020 Thomas L. Davis")},R=(n(36),function(){return r.a.createElement("div",{className:"intro stage "},r.a.createElement("div",{className:"intro-flex-container"},r.a.createElement("img",{className:"me",src:"/portfolio-2020/assets/me.jpg",alt:"Headshot of Thomas Davis"}),r.a.createElement("h1",null,"Thomas L. Davis"),r.a.createElement("p",{className:"job-title"},"Full Stack Developer")),r.a.createElement("p",null,"Full stack web and software developer with a background in insurance fraud analysis and special investigations. With a recently earned certificate in Full Stack Development from Southern Methodist University, my ambition is to construct captivating applications that focus on the user first. Ardent love for aesthetic design and a penchant for abstract problem-solving inspire perpetual elevation of my proficiency as a developer."))}),L=(n(37),function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"stage dark",id:"contact"},r.a.createElement("h1",null,"Contact "),r.a.createElement("p",null,"Feel free to reach out to me, whether it's to discuss a new opportunity or to say hello. You can also learn more about me and my work on Linkedin and Github."),r.a.createElement("div",{className:"contact-flex-container"},r.a.createElement("form",{className:"contact-form",onSubmit:function(e){e.preventDefault();var t=e.target,n=new FormData(t),a=new XMLHttpRequest;a.open(t.method,t.action),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?(t.reset(),l("SUCCESS")):l("ERROR"))},a.send(n)},action:"https://formspree.io/xleppyja",method:"POST"},r.a.createElement("input",{className:"input-style",type:"text",name:"name",placeholder:"Name",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Name"}}),r.a.createElement("input",{className:"input-style",type:"email",name:"email",placeholder:"Email",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Email"}}),r.a.createElement("textarea",{className:"input-style",rows:"4",type:"text",name:"message",placeholder:"Message",onFocus:function(e){return e.target.placeholder=""},onBlur:function(e){return e.target.placeholder="Message"}}),"SUCCESS"===n?r.a.createElement("h3",{className:"success"},"Thanks!"):r.a.createElement("button",{className:"send-button"}," ",r.a.createElement(u.a,{icon:p.h,size:"2x",className:"send-icon"})),"ERROR"===n&&r.a.createElement("h3",{className:"error"},"Email is required!")),r.a.createElement("div",{className:"contact-info-flex-container"},r.a.createElement(u.a,{className:"contact-icons",title:"https://www.github.com/tldav",icon:p.c,onClick:function(){return window.open("https://www.github.com/tldav","_blank")}}),r.a.createElement(u.a,{className:"contact-icons",title:"https://www.linkedin.com/in/tldav/",icon:p.e,onClick:function(){return window.open("https://www.linkedin.com/in/tldav/","_blank")}}),r.a.createElement(u.a,{className:"contact-icons",title:"tldavis09@yahoo.com",icon:f.b,onClick:function(){return window.open("mailto:tldavis09@yahoo.com")}}))))}),U=(n(38),function(e){var t=e.element,n=Object(a.useState)(window.innerWidth>360),l=Object(s.a)(n,2),o=l[0],c=l[1],i=function(){c(window.innerWidth>360)};Object(a.useEffect)((function(){return window.addEventListener("resize",i),function(){return window.removeEventListener("resize",i)}}));return r.a.createElement("div",{className:"tools stage dark"},r.a.createElement("div",{ref:t},r.a.createElement("h1",null,"Tools I Use"),r.a.createElement("p",null,"Here are some of the tools I have been working with recently both as an individual developer and in a team setting. My ever-growing skillset is driven by enthusiastic curiosity as I continue to learn and create with new technologies and languages."),o?r.a.createElement("div",{className:"tools-list"},r.a.createElement("ul",null,r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"Bootstrap")),r.a.createElement("ul",null,r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"MongoDB"),r.a.createElement("li",null,"Rest API")),r.a.createElement("ul",null,r.a.createElement("li",null,"Git"),r.a.createElement("li",null,"Redux"),r.a.createElement("li",null,"Material-UI"),r.a.createElement("li",null,"Jest"),r.a.createElement("li",null,"Webpack"))):r.a.createElement("p",{className:"tools-p"},"JavaScript React HTML CSS Bootstrap Express Node MySQL MongoDB Rest API Redux Material-UI Git Webpack Jest"),r.a.createElement("div",{className:"tools-icons"},r.a.createElement(u.a,{icon:p.d,className:"js-icon"}),r.a.createElement(u.a,{icon:p.g,className:"react-icon"}),r.a.createElement(u.a,{icon:p.f,className:"node-icon"}),r.a.createElement(u.a,{icon:p.a,className:"git-icon"}))))}),F=(n(39),[{id:1,name:"YodaScope",css:"yoda-title",description:"Check your Horoscope in Yoda Speech. Created using JavaScript, Tailwind CSS, and third party APIs: Aztro and Yodish.",image:"/portfolio-2020/assets/space-420-278.jpg",appUrl:"https://tldav.github.io/yoda-horoscope/",repoUrl:"https://github.com/tldav/yoda-horoscope"},{id:2,name:"plumm.it",css:"plumm-title",description:"A forum with user signup and authentication. Created using JavaScript, jQuery, Node, Express, and MySQL with Sequelize.",image:"/portfolio-2020/assets/plum-420-278.jpg",appUrl:"https://warm-plains-89008.herokuapp.com/logout",repoUrl:"https://github.com/marcustate/project-purple/"},{id:3,name:"Workout App",css:"fit-title",description:"Create custom workouts and graph your progress. Created using JavaScript, Node, Express, and MongoDB with Mongoose. ",image:"/portfolio-2020/assets/fit-420-278.jpg",appUrl:"https://boiling-hamlet-55992.herokuapp.com/",repoUrl:"https://github.com/tldav/fitness-tracker"},{id:4,name:"Charity Tracker",css:"charity-title",description:"Manage non-profit organizations to partner with your business. Created using React, Material-UI, Charity Nav API, Node, Express, bcrypt, and MongoDB.",image:"/portfolio-2020/assets/charity-420-278.jpg",appUrl:"https://charity-wowness.herokuapp.com/",repoUrl:"https://github.com/ThomasJasonM1/charity-tracker"}]),D=function(){var e=r.a.createElement("a",{href:"https://github.com/tldav",target:"_blank",rel:"noopener noreferrer",className:"github-link"},"Github.");return r.a.createElement("div",{id:"projects",className:"stage"},r.a.createElement("h1",null,"Recent Work"),r.a.createElement("p",null,"Here are a few things I've worked on recently. See more of my work on ",e),r.a.createElement("div",{className:"proj-container"},F.map((function(e){return r.a.createElement("div",{className:"proj-box",key:e.name},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-overlay"}),r.a.createElement("img",{className:"content-image",src:e.image,alt:e.name}),r.a.createElement("h1",{className:"proj-title",id:e.css},e.name),r.a.createElement("div",{className:"content-details fadeIn-bottom"},r.a.createElement("p",{className:"content-text"},e.description),r.a.createElement("a",{className:"app-link",href:e.appUrl,target:"_blank",rel:"noopener noreferrer"},"App"),r.a.createElement(u.a,{className:"code-icon",icon:f.a}),r.a.createElement("a",{className:"code-link",href:e.repoUrl,target:"_blank",rel:"noopener noreferrer"},"Code"))))}))))},T=function(){var e=m(),t=e.isSticky,n=e.element;return r.a.createElement(c.a,{theme:i},r.a.createElement("div",{className:"app-container "},r.a.createElement("div",{className:"left"}),r.a.createElement("div",{className:"mid"},r.a.createElement(O,null),r.a.createElement(C,{sticky:t}),r.a.createElement(R,null),r.a.createElement(U,{element:n}),r.a.createElement(D,null),r.a.createElement(L,null),r.a.createElement(M,null)),r.a.createElement("div",{className:"right"},r.a.createElement(h,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))},8:function(e,t,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.9c4e13d1.chunk.js.map