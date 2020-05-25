(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{122:function(e,t,a){},167:function(e,t,a){e.exports=a(396)},172:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(120),c=a.n(l),i=(a(172),a(122),a(18)),o=a(5),m=a(28),s=a(22),u=a(40),d=a(41),E=a(42),p=Object(n.createContext)(),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={page:0},a.setPage=function(e){a.setState((function(t){return{page:e}}))},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.page,a=this.setPage;return r.a.createElement(p.Provider,{value:{page:t,setPage:a}},e)}}]),t}(n.Component),g=function(){var e=Object(n.useContext)(p).setPage,t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],m=function(t){e(t),c(!1)};return r.a.createElement("div",{id:"navbar"},r.a.createElement("div",{className:"left"},r.a.createElement(o.Zoom,{delay:5e3},r.a.createElement("div",{className:"circle",onClick:function(){return e(0)}},"RF"))),r.a.createElement("div",{className:"right"},r.a.createElement(o.Fade,{down:!0,delay:5e3},r.a.createElement("p",{onClick:function(){return e(1)}},"About")),r.a.createElement(o.Fade,{down:!0,delay:5100},r.a.createElement("p",{onClick:function(){return e(2)}},"Experience")),r.a.createElement(o.Fade,{down:!0,delay:5200},r.a.createElement("p",{onClick:function(){return e(3)}},"Work")),r.a.createElement(o.Fade,{down:!0,delay:5300},r.a.createElement("p",{onClick:function(){return e(6)}},"Contact"))),r.a.createElement("div",{className:"hamburger"},r.a.createElement(o.Zoom,{delay:5e3},r.a.createElement("img",{src:"icons/hamburger.png",alt:"menu",className:"hamburger",onClick:function(){return c(!l)}}))),l&&r.a.createElement("div",{id:"hamburger-drop"},r.a.createElement("div",{className:"hamburger-list"},r.a.createElement(o.Fade,{down:!0,delay:100},r.a.createElement("p",{onClick:function(){return m(1)}},"About")),r.a.createElement(o.Fade,{down:!0,delay:200},r.a.createElement("p",{onClick:function(){return m(2)}},"Experience")),r.a.createElement(o.Fade,{down:!0,delay:300},r.a.createElement("p",{onClick:function(){return m(3)}},"Work")),r.a.createElement(o.Fade,{down:!0,delay:400},r.a.createElement("p",{onClick:function(){return m(6)}},"Contact")))))},v=function(){return r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",{className:"top"}),r.a.createElement("div",{className:"bottom"},r.a.createElement(o.Fade,{left:!0,delay:7500},r.a.createElement("a",{href:"mailto:".concat("robertjfox94@gmail.com"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"social/contact.png",alt:"contact"}))),r.a.createElement(o.Fade,{left:!0,delay:7600},r.a.createElement("a",{href:"https://github.com/robertjfox",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"social/github.png",alt:"github"}))),r.a.createElement(o.Fade,{left:!0,delay:7700},r.a.createElement("a",{href:"https://www.linkedin.com/in/robert-fox-1b341996/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"social/linkedin.png",alt:"linkedin"}))),r.a.createElement(o.Fade,{left:!0,delay:7800},r.a.createElement("a",{href:"https://twitter.com/rfoxjr",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"social/twitter.png",alt:"twitter"}))),r.a.createElement(o.Fade,{up:!0,delay:7500},r.a.createElement("div",{className:"line"}))))},h=a(409),b=a(407),k=Object(b.a)((function(e){return{root:{display:"flex",transform:"scale(3)","& > * + *":{marginLeft:e.spacing(3)}}}})),N=function(){var e=k(),t=Object(n.useState)(0),a=Object(i.a)(t,2),l=a[0],c=a[1];return r.a.useEffect((function(){var e=setInterval((function(){c((function(e){return e>=100?100:e+1}))}),20);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{id:"loading"},r.a.createElement("div",{className:e.root,id:"loading-circle"},r.a.createElement(h.a,{variant:"determinate",value:l,color:"inherit"})),r.a.createElement("h1",null,"RF"))},w=function(){var e,t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],m=Object(n.useContext)(p).setPage;return r.a.createElement("div",{id:"landing"},r.a.createElement(o.Fade,{up:!0,delay:6e3},r.a.createElement("p",{className:"line-1"},"Hi, I'm ",r.a.createElement("i",null,"Robert Fox"))),r.a.createElement(o.Fade,{up:!0,delay:7e3},r.a.createElement("p",{className:"line-2"},"and I'm a software developer and designer.")),r.a.createElement("div",{wait:(e=8e3,void setTimeout((function(){c(!0)}),e))},l?r.a.createElement("img",{src:"media/down-arrow.png",alt:"down",onClick:function(){return m(1)}}):r.a.createElement("div",{className:"arrow-placeholder"})))},y=function(){return r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement("i",null,"About Me")),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"description"},r.a.createElement(o.Fade,{up:!0},r.a.createElement("p",null,"I have a passion for designing and developing seamless experiences and elegant interfaces. From web designs, to full-stack mobile applications, I will be a valuable addition to your next project.")),r.a.createElement(o.Fade,{up:!0},r.a.createElement("p",null,"I have just completed"," ",r.a.createElement("a",{href:"https://www.fullstackacademy.com/"},r.a.createElement("i",null,"FullStack Academy of Code")),". FullStack is a 17-week full-time software development bootcamp. Its curriculum covers NodeJS, Express, Relational Databases such as PostgreSQL, React and Redux.")))),r.a.createElement(o.Fade,{up:!0},r.a.createElement("div",{className:"headshot"},r.a.createElement("img",{src:"aboutMe/pic5.png",alt:"robert"}),r.a.createElement("div",{className:"headshot-border"}))))},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2);t[0],t[1];return r.a.createElement("div",{id:"experience-cont"},r.a.createElement("div",{id:"experience"},r.a.createElement(o.Fade,{up:!0},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement("i",null,"Experience")),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"job"},r.a.createElement("h3",null,"Recruiter & Buyer",r.a.createElement("a",{href:"http://www.foxs.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",null," @ Fox's Clothing Stores"))),r.a.createElement("p",{className:"work-date"},"May 2017 - November 2019"),r.a.createElement("ul",null,r.a.createElement("li",null,"Worked with software team to implement an RFID inventory management system"),r.a.createElement("li",null,"Helped facilitate improvements to software systems by communicating with in-house developers on behalf of retail, warehouse and buying teams"),r.a.createElement("li",null,"Recruited employees for 17 retail stores, a distribution center, and a corporate office"))),r.a.createElement("div",{className:"job"},r.a.createElement("h3",null,"Design Support",r.a.createElement("a",{href:"https://www.mpfp.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",null," @ M Paul Friedberg & Partners"))),r.a.createElement("p",{className:"work-date"},"Summer 2016"),r.a.createElement("ul",null,r.a.createElement("li",null,"Produced and edited construction documents using AutoCAD"),r.a.createElement("li",null,"Created renderings to communicate design concepts using Adobe Suite/SketchUp"))),r.a.createElement("div",{className:"job-mobile"},r.a.createElement("h3",null,"Recruiter & Buyer",r.a.createElement("a",{href:"http://www.foxs.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("br",null),r.a.createElement("i",null," @ Fox's Clothing Stores"))),r.a.createElement("p",{className:"work-date"},"May 2017 - November 2019")),r.a.createElement("div",{className:"job-mobile"},r.a.createElement("h3",null,"Design Support",r.a.createElement("a",{href:"https://www.mpfp.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("br",null),r.a.createElement("i",null," @ M Paul Friedberg & Partners"))),r.a.createElement("p",{className:"work-date"},"Summer 2016")))))},F=a(88),C=a(89),x=a.n(C),O=a(90),S=a.n(O),R=a(91),I=(a(125),function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),s=m[0],u=m[1],d=[{key:1,content:r.a.createElement("img",{src:"FitMinded/mobile01.png",alt:"1"})},{key:2,content:r.a.createElement("img",{src:"FitMinded/mobile02.png",alt:"2"})},{key:3,content:r.a.createElement("img",{src:"FitMinded/mobile03.png",alt:"3"})}].map((function(e,t){return Object(F.a)({},e,{onClick:function(){return l(t)}})}));return r.a.createElement("div",{id:"project-container",className:"fit-minded"},r.a.createElement(o.Fade,{up:!0},r.a.createElement("div",{id:"project",className:"fit-minded"},r.a.createElement("div",{className:"left"},r.a.createElement(x.a,{goToSlide:a,slides:d,config:R.a.gentle,showNavigation:!1,offsetRadius:1})),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,r.a.createElement("i",null,"FitMinded")),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"link-cont"},r.a.createElement("a",{href:"https://github.com/robertjfox/fit-minded",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"icons/github.png",alt:"github"})),r.a.createElement("div",null,r.a.createElement("div",{className:"video-modal"},r.a.createElement(S.a,{channel:"youtube",isOpen:s,videoId:"7fnAdXZ0UAQ",onClose:function(){return u(!1)}})),r.a.createElement("img",{src:"icons/youtube.png",alt:"youtube",onClick:function(){return u(!0)}})))),r.a.createElement("p",{className:"description"},"FitMinded is a platform that connects people with similar athletic interests. It takes advantage of a non-relational database to efficiently analyze user relationships. I was responsible for developing the database schema, the matching algorithm, the recommendation map, and the UX/UI."),r.a.createElement("div",{className:"technologies"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"Redux"),r.a.createElement("p",null,"Express"),r.a.createElement("p",null,"Node.js"),r.a.createElement("p",null,"MongoDB"),r.a.createElement("p",null,"Firebase"),r.a.createElement("p",null,"Google Places API"))))))}),P=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),s=m[0],u=m[1],d=[{key:1,content:r.a.createElement("img",{src:"RevYou/mobile03.png",alt:"1"})},{key:2,content:r.a.createElement("img",{src:"RevYou/mobile01.png",alt:"2"})},{key:3,content:r.a.createElement("img",{src:"RevYou/mobile02.png",alt:"3"})},{key:4,content:r.a.createElement("img",{src:"RevYou/mobile04.png",alt:"4"})}].map((function(e,t){return Object(F.a)({},e,{onClick:function(){return l(t)}})}));return r.a.createElement("div",{id:"project-container",className:"rev-you"},r.a.createElement(o.Fade,{up:!0},r.a.createElement("div",{id:"project",className:"rev-you"},r.a.createElement("div",{className:"left"},r.a.createElement(x.a,{goToSlide:a,slides:d,config:R.a.gentle,showNavigation:!1,offsetRadius:1})),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,r.a.createElement("i",null,"RevYou")),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"link-cont"},r.a.createElement("a",{href:"https://github.com/robertjfox/RevYou",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"icons/github.png",alt:"github"})),r.a.createElement("div",null,r.a.createElement(S.a,{channel:"youtube",isOpen:s,videoId:"nYFfBlUGRO0",onClose:function(){return u(!1)}}),r.a.createElement("img",{src:"icons/youtube.png",alt:"youtube",onClick:function(){return u(!0)}})))),r.a.createElement("p",{className:"description"},"RevYou is a productivity app for creating and maintaining habits. It takes daily input for a set of custom habits and parses that data to render D3 components which allow users to visualize their progress. This project was built independently over a few days for a hackathon event."),r.a.createElement("div",{className:"technologies"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"Redux"),r.a.createElement("p",null,"Express"),r.a.createElement("p",null,"Node.js"),r.a.createElement("p",null,"PostgreSQL"),r.a.createElement("p",null,"D3JS"))))))},M=function(){return r.a.createElement("div",{id:"project-container",className:"covid-map"},r.a.createElement(o.Fade,{up:!0},r.a.createElement("div",{id:"project",className:"covid-map"},r.a.createElement("div",{className:"left"},r.a.createElement("a",{href:"https://robertjfox.github.io/Covid19StateTracker/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"CovidMap/desktop01.png",alt:"map on desktop view"}))),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,r.a.createElement("i",null,"Covid-19 Map")),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"link-cont"},r.a.createElement("a",{href:"https://github.com/robertjfox/Covid19StateTracker",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"icons/github.png",alt:"github"})),r.a.createElement("a",{href:"https://robertjfox.github.io/Covid19StateTracker/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"icons/heroku.png",alt:"heroku"})))),r.a.createElement("p",{className:"description"},"I built this interactive map to help visualize the most relevant data in regard to the Covid-19 Pandemic. It is very easy to get lost in the sea of media opinions and figures shared without context. I hope this platform can provide a clearer view of the virus' localized trajectory over time."),r.a.createElement("div",{className:"technologies"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"Redux"),r.a.createElement("p",null,"Chart.js"),r.a.createElement("p",null,"CovidTracker API"))))))},A=function(){return r.a.createElement("div",{id:"contact"},r.a.createElement("div",{className:"title"},r.a.createElement("h2",null,r.a.createElement("i",null,"Contact Me")),r.a.createElement("div",{className:"line"})),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"I am currently open to job opportunities, as well as freelance and contract work. Please feel free to reach out with any opportunities or inquiries.")),r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:".concat("robertjfox94@gmail.com"),target:"_blank",rel:"noopener noreferrer"},"Get in touch - ",r.a.createElement("i",null,"robertjfox94@gmail.com")))))},_=a(163);var D=function(){var e=Object(n.useContext)(p),t=e.page,a=e.setPage;return r.a.createElement("div",{id:"main"},r.a.createElement(_.a,{customPageNumber:t,pageOnChange:function(e){return(n=e)!=t&&a(n),void console.log(n);var n}},r.a.createElement(w,null),r.a.createElement(y,null),r.a.createElement(j,null),r.a.createElement(I,null),r.a.createElement(P,null),r.a.createElement(M,null),r.a.createElement(A,null)))};var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null,r.a.createElement("header",{className:"App-header"}),r.a.createElement(N,null),r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(D,null)))};c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.7b61845d.chunk.js.map