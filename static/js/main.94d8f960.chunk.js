(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{122:function(e,t,a){},167:function(e,t,a){e.exports=a(396)},172:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(120),c=a.n(r),i=(a(172),a(122),a(18)),o=a(5),m=a(28),s=a(22),u=a(40),d=a(41),E=a(42),p=Object(n.createContext)(),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={page:0},a.setPage=function(e){a.setState((function(t){return{page:e}}))},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.page,a=this.setPage;return l.a.createElement(p.Provider,{value:{page:t,setPage:a}},e)}}]),t}(n.Component),g=function(){var e=Object(n.useContext)(p).setPage,t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],m=function(t){e(t),c(!1)};return l.a.createElement("div",{id:"navbar"},l.a.createElement("div",{className:"left"},l.a.createElement(o.Zoom,{delay:5e3},l.a.createElement("div",{className:"circle",onClick:function(){return e(0)}},"RF"))),l.a.createElement("div",{className:"right"},l.a.createElement(o.Fade,{down:!0,delay:5e3},l.a.createElement("p",{onClick:function(){return e(1)}},"About")),l.a.createElement(o.Fade,{down:!0,delay:5100},l.a.createElement("p",{onClick:function(){return e(2)}},"Experience")),l.a.createElement(o.Fade,{down:!0,delay:5200},l.a.createElement("p",{onClick:function(){return e(3)}},"Work")),l.a.createElement(o.Fade,{down:!0,delay:5300},l.a.createElement("p",{onClick:function(){return e(6)}},"Contact"))),l.a.createElement("div",{className:"hamburger"},l.a.createElement(o.Zoom,{delay:5e3},l.a.createElement("img",{src:"icons/hamburger.png",alt:"menu",className:"hamburger",onClick:function(){return c(!r)}}))),r&&l.a.createElement("div",{id:"hamburger-drop"},l.a.createElement("div",{className:"hamburger-list"},l.a.createElement(o.Fade,{down:!0,delay:100},l.a.createElement("p",{onClick:function(){return m(1)}},"About")),l.a.createElement(o.Fade,{down:!0,delay:200},l.a.createElement("p",{onClick:function(){return m(2)}},"Experience")),l.a.createElement(o.Fade,{down:!0,delay:300},l.a.createElement("p",{onClick:function(){return m(3)}},"Work")),l.a.createElement(o.Fade,{down:!0,delay:400},l.a.createElement("p",{onClick:function(){return m(6)}},"Contact")))))},v=function(){return l.a.createElement("div",{id:"sidebar"},l.a.createElement("div",{className:"top"}),l.a.createElement("div",{className:"bottom"},l.a.createElement(o.Fade,{left:!0,delay:7500},l.a.createElement("a",{href:"mailto:".concat("robertjfox94@gmail.com"),target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/contact.png",alt:"contact"}))),l.a.createElement(o.Fade,{left:!0,delay:7600},l.a.createElement("a",{href:"https://github.com/robertjfox",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/github.png",alt:"github"}))),l.a.createElement(o.Fade,{left:!0,delay:7700},l.a.createElement("a",{href:"https://www.linkedin.com/in/robert-fox-1b341996/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/linkedin.png",alt:"linkedin"}))),l.a.createElement(o.Fade,{left:!0,delay:7800},l.a.createElement("a",{href:"https://twitter.com/rfoxjr",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/twitter.png",alt:"twitter"}))),l.a.createElement(o.Fade,{up:!0,delay:7500},l.a.createElement("div",{className:"line"}))))},h=a(409),b=a(407),N=Object(b.a)((function(e){return{root:{display:"flex",transform:"scale(3)","& > * + *":{marginLeft:e.spacing(3)}}}})),w=function(){var e=N(),t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1];return l.a.useEffect((function(){var e=setInterval((function(){c((function(e){return e>=100?100:e+1}))}),20);return function(){clearInterval(e)}}),[]),l.a.createElement("div",{id:"loading"},l.a.createElement("div",{className:e.root,id:"loading-circle"},l.a.createElement(h.a,{variant:"determinate",value:r,color:"inherit"})),l.a.createElement("h1",null,"RF"))},k=function(){var e,t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],m=Object(n.useContext)(p).setPage;return l.a.createElement("div",{id:"landing"},l.a.createElement(o.Fade,{up:!0,delay:6e3},l.a.createElement("p",{className:"line-1"},"Hi, I'm ",l.a.createElement("i",null,"Robert Fox"))),l.a.createElement(o.Fade,{up:!0,delay:7e3},l.a.createElement("p",{className:"line-2"},"and I'm a software developer and designer.")),l.a.createElement("div",{wait:(e=8e3,void setTimeout((function(){c(!0)}),e))},r?l.a.createElement("img",{src:"media/down-arrow.png",alt:"down",onClick:function(){return m(1)}}):l.a.createElement("div",{className:"arrow-placeholder"})))},y=function(){return l.a.createElement("div",{id:"about"},l.a.createElement(o.Fade,null,l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement("i",null,"About Me")),l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"I have a passion for designing and developing seamless experiences and elegant interfaces. From web designs, to full-stack mobile applications, I will be a valuable addition to your next project."),l.a.createElement("p",null,"I have just completed"," ",l.a.createElement("a",{href:"https://www.fullstackacademy.com/"},l.a.createElement("i",null,"FullStack Academy of Code")),". FullStack is a 17-week full-time software development bootcamp. Its curriculum covers NodeJS, Express, Relational Databases such as PostgreSQL, React and Redux."))),l.a.createElement("div",{className:"headshot"},l.a.createElement("img",{src:"aboutMe/pic5.png",alt:"robert"}),l.a.createElement("div",{className:"headshot-border"}))))},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2);t[0],t[1];return l.a.createElement("div",{id:"experience-cont"},l.a.createElement("div",{id:"experience"},l.a.createElement(o.Fade,null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement("i",null,"Experience")),l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"job"},l.a.createElement("h3",null,"Software Engineer",l.a.createElement("a",{href:"http://www.getrentroom.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",null," @ Rentroom"))),l.a.createElement("p",{className:"work-date"},"April 2020 - Present"),l.a.createElement("ul",null,l.a.createElement("li",null,"Developing new user-facing features using React.js"),l.a.createElement("li",null,"Translating designs and wireframes into high quality code"),l.a.createElement("li",null,"Optimizing components for maximum performance across a vast array of web-capable devices and browsers"))),l.a.createElement("div",{className:"job"},l.a.createElement("h3",null,"Recruiter & Buyer",l.a.createElement("a",{href:"http://www.foxs.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",null," @ Fox's Clothing Stores"))),l.a.createElement("p",{className:"work-date"},"May 2017 - November 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,"Worked with software team to implement an RFID inventory management system"),l.a.createElement("li",null,"Helped facilitate improvements to software systems by communicating with in-house developers on behalf of retail, warehouse and buying teams"),l.a.createElement("li",null,"Recruited employees for 17 retail stores, a distribution center, and a corporate office"))),l.a.createElement("div",{className:"job"},l.a.createElement("h3",null,"Design Support",l.a.createElement("a",{href:"https://www.mpfp.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",null," @ M Paul Friedberg & Partners"))),l.a.createElement("p",{className:"work-date"},"Summer 2016"),l.a.createElement("ul",null,l.a.createElement("li",null,"Produced and edited construction documents using AutoCAD"),l.a.createElement("li",null,"Created renderings to communicate design concepts using Adobe Suite/SketchUp"))))))},C=a(88),F=a(89),x=a.n(F),O=a(90),R=a.n(O),S=a(91),I=(a(125),function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),s=m[0],u=m[1],d=[{key:1,content:l.a.createElement("img",{src:"FitMinded/mobile01.png",alt:"1"})},{key:2,content:l.a.createElement("img",{src:"FitMinded/mobile02.png",alt:"2"})},{key:3,content:l.a.createElement("img",{src:"FitMinded/mobile03.png",alt:"3"})}].map((function(e,t){return Object(C.a)({},e,{onClick:function(){return r(t)}})}));return l.a.createElement("div",{id:"project-container",className:"fit-minded"},l.a.createElement(o.Fade,null,l.a.createElement("div",{id:"project",className:"fit-minded"},l.a.createElement("div",{className:"left"},l.a.createElement(x.a,{goToSlide:a,slides:d,config:S.a.gentle,showNavigation:!1,offsetRadius:1})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("i",null,"FitMinded")),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"link-cont"},l.a.createElement("a",{href:"https://github.com/robertjfox/fit-minded",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/github.png",alt:"github"})),l.a.createElement("div",null,l.a.createElement("div",{className:"video-modal"},l.a.createElement(R.a,{channel:"youtube",isOpen:s,videoId:"7fnAdXZ0UAQ",onClose:function(){return u(!1)}})),l.a.createElement("img",{src:"icons/youtube.png",alt:"youtube",onClick:function(){return u(!0)}})))),l.a.createElement("p",{className:"description"},"FitMinded is a platform that connects people with similar athletic interests. It takes advantage of a non-relational database to efficiently analyze user relationships. I was responsible for developing the database schema, the matching algorithm, the recommendation map, and the UX/UI."),l.a.createElement("div",{className:"technologies"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Express"),l.a.createElement("p",null,"Node.js"),l.a.createElement("p",null,"MongoDB"),l.a.createElement("p",null,"Firebase"),l.a.createElement("p",null,"Google Places API"))))))}),P=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),s=m[0],u=m[1],d=[{key:1,content:l.a.createElement("img",{src:"RevYou/mobile03.png",alt:"1"})},{key:2,content:l.a.createElement("img",{src:"RevYou/mobile01.png",alt:"2"})},{key:3,content:l.a.createElement("img",{src:"RevYou/mobile02.png",alt:"3"})},{key:4,content:l.a.createElement("img",{src:"RevYou/mobile04.png",alt:"4"})}].map((function(e,t){return Object(C.a)({},e,{onClick:function(){return r(t)}})}));return l.a.createElement("div",{id:"project-container",className:"rev-you"},l.a.createElement(o.Fade,null,l.a.createElement("div",{id:"project",className:"rev-you"},l.a.createElement("div",{className:"left"},l.a.createElement(x.a,{goToSlide:a,slides:d,config:S.a.gentle,showNavigation:!1,offsetRadius:1})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("i",null,"RevYou")),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"link-cont"},l.a.createElement("a",{href:"https://github.com/robertjfox/RevYou",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/github.png",alt:"github"})),l.a.createElement("div",null,l.a.createElement(R.a,{channel:"youtube",isOpen:s,videoId:"nYFfBlUGRO0",onClose:function(){return u(!1)}}),l.a.createElement("img",{src:"icons/youtube.png",alt:"youtube",onClick:function(){return u(!0)}})))),l.a.createElement("p",{className:"description"},"RevYou is a productivity app for creating and maintaining habits. It takes daily input for a set of custom habits and parses that data to render D3 components which allow users to visualize their progress. This project was built independently over a few days for a hackathon event."),l.a.createElement("div",{className:"technologies"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Express"),l.a.createElement("p",null,"Node.js"),l.a.createElement("p",null,"PostgreSQL"),l.a.createElement("p",null,"D3JS"))))))},M=function(){return l.a.createElement("div",{id:"project-container",className:"covid-map"},l.a.createElement(o.Fade,null,l.a.createElement("div",{id:"project",className:"covid-map"},l.a.createElement("div",{className:"left"},l.a.createElement("a",{href:"https://robertjfox.github.io/CovidMap/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"CovidMap/desktop01.png",alt:"map on desktop view"}))),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("i",null,"Covid-19 Map")),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"link-cont"},l.a.createElement("a",{href:"https://github.com/robertjfox/CovidMap",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/github.png",alt:"github"})),l.a.createElement("a",{href:"https://robertjfox.github.io/CovidMap/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/heroku.png",alt:"heroku"})))),l.a.createElement("p",{className:"description"},"I built this interactive map to help visualize the most relevant data in regard to the Covid-19 Pandemic. It is very easy to get lost in the sea of media opinions and figures shared without context. I hope this platform can provide a clearer view of the virus' localized trajectory over time."),l.a.createElement("div",{className:"technologies"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Chart.js"),l.a.createElement("p",null,"CovidTracker API"))))))},A=function(){return l.a.createElement("div",{id:"contact"},l.a.createElement(o.Fade,null,l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement("i",null,"Contact Me")),l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"I am currently open to job opportunities, as well as freelance and contract work. Please feel free to reach out with any opportunities or inquiries.")),l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("a",{href:"mailto:".concat("robertjfox94@gmail.com"),target:"_blank",rel:"noopener noreferrer"},"Get in touch - ",l.a.createElement("i",null,"robertjfox94@gmail.com"))))))},_=a(163);var D=function(){var e=Object(n.useContext)(p),t=e.page,a=e.setPage;return l.a.createElement("div",{id:"main"},l.a.createElement(_.a,{customPageNumber:t,pageOnChange:function(e){return(n=e)!=t&&a(n),void console.log(n);var n}},l.a.createElement(k,null),l.a.createElement(y,null),l.a.createElement(j,null),l.a.createElement(I,null),l.a.createElement(P,null),l.a.createElement(M,null),l.a.createElement(A,null)))};var Y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null,l.a.createElement("header",{className:"App-header"}),l.a.createElement(w,null),l.a.createElement(g,null),l.a.createElement(v,null),l.a.createElement(D,null)))};c.a.render(l.a.createElement(Y,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.94d8f960.chunk.js.map