(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/resume.b2d06057.pdf"},41:function(e,a,t){e.exports=t.p+"static/media/profile-image.9830c779.png"},44:function(e,a,t){e.exports=t(78)},49:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),s=t.n(c),l=t(1),i=t(2),o=t(4),m=t(3),u=(t(49),t(11)),d=t(9),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"handleClick",value:function(){return this.props.name.toLowerCase()}},{key:"render",value:function(){return r.a.createElement("li",{className:this.props.hidden?"Hidden-NavBar-List-Item":"NavBar-List-Item"},r.a.createElement(d.Link,{activeClass:"active",to:this.handleClick(),spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},this.props.name),r.a.createElement("div",{className:"underline"}))}}]),t}(r.a.Component),h=t(13),p=t.n(h),v=t(7),N=t.n(v),f=t(6),b=t(10),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"NavBar-Logo"},r.a.createElement("a",{href:""},r.a.createElement("h1",{className:"NavBar-Logo-Left"},"<","MIHIR","/>")))),r.a.createElement("nav",{className:"NavBar-Links"},r.a.createElement("ol",{className:"NavBar-Unordered-List"},r.a.createElement(N.a,{delay:100},r.a.createElement(E,{name:"HOME"})),r.a.createElement(N.a,{delay:200},r.a.createElement(E,{name:"ABOUT"})),r.a.createElement(N.a,{delay:300},r.a.createElement(E,{name:"SKILLS"})),r.a.createElement(N.a,{delay:400},r.a.createElement(E,{name:"PROJECTS"})),r.a.createElement(N.a,{delay:500},r.a.createElement(E,{name:"CONTACT"})),r.a.createElement(N.a,{delay:600},r.a.createElement("li",{className:"NavBar-List-Item"},r.a.createElement("a",{className:"NavBar-Resume",href:p.a,target:"_blank",rel:"noopener noreferrer"},"RESUME"),r.a.createElement("div",{className:"underline"})))),r.a.createElement(N.a,{delay:500},r.a.createElement(f.a,{className:"NavBar-Hamburger",icon:b.b,size:"2x",onClick:this.props.showBurgerMenu}))))}}]),t}(r.a.Component),j=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={visible:!1,prevScrollPosition:window.pageYOffset},n.popNavBar=n.popNavBar.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.popNavBar)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.popNavBar)}},{key:"popNavBar",value:function(){var e=window.pageYOffset,a=e<this.state.prevScrollPosition&&e>=100;this.setState({visible:a,prevScrollPosition:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:this.state.visible?"Hidden-NavBar":"Hidden-NavBar Hidden-NavBar-Scroll"},r.a.createElement(N.a,null,r.a.createElement("div",{className:"Hidden-NavBar-Logo"},r.a.createElement("a",{href:""},r.a.createElement("h1",{className:"Hidden-NavBar-Logo-Left"},"<","MIHIR","/>")))),r.a.createElement("nav",{className:"Hidden-NavBar-Links"},r.a.createElement("ol",{className:"Hidden-NavBar-Unordered-List"},r.a.createElement(N.a,{delay:100},r.a.createElement(E,{name:"HOME",hidden:!0})),r.a.createElement(N.a,{delay:200},r.a.createElement(E,{name:"ABOUT",hidden:!0})),r.a.createElement(N.a,{delay:300},r.a.createElement(E,{name:"SKILLS",hidden:!0})),r.a.createElement(N.a,{delay:400},r.a.createElement(E,{name:"PROJECTS",hidden:!0})),r.a.createElement(N.a,{delay:500},r.a.createElement(E,{name:"CONTACT",hidden:!0})),r.a.createElement(N.a,{delay:600},r.a.createElement("li",{className:"Hidden-NavBar-List-Item"},r.a.createElement("a",{className:"HiddenNavBar-Resume",href:p.a,target:"_blank",rel:"noopener noreferrer"},"RESUME"),r.a.createElement("div",{className:"underline"})))),r.a.createElement(N.a,{delay:500},r.a.createElement(f.a,{className:"Hidden-NavBar-Hamburger",icon:b.b,size:"2x",onClick:this.props.showBurgerMenu}))))}}]),t}(r.a.Component),y=t(8),O=t.n(y),k=t(14),S=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Homepage"},r.a.createElement("div",{className:"Homepage-Text-Div"},r.a.createElement(O.a,{delay:900},r.a.createElement("p",{className:"Homepage-Greeting Homepage-Grid"},"Hey!\ud83d\udc4b")),r.a.createElement(O.a,{delay:1300},r.a.createElement("h1",{className:"Homepage-Name Homepage-Grid"},r.a.createElement("span",null,"I",r.a.createElement("span",{className:"Homepage-Name-Secondary-Color"},"'"),"m\u200e",r.a.createElement("span",{className:"Homepage-Name-PopOut"},"\xa0Mihir"),r.a.createElement("span",{className:"Homepage-Name-Secondary-Color"},".")))),r.a.createElement(O.a,{delay:1700},r.a.createElement("h1",{className:"Homepage-Description Homepage-Grid"},r.a.createElement("span",{className:"Homepage-Description-Dev"},r.a.createElement("span",{className:"Homepage-Description-Dev-Stack"},"Full-Stack")," ","Dev"))),r.a.createElement(O.a,{delay:2100},r.a.createElement("h1",{className:"Homepage-Technology Homepage-Grid"},"In"," ",r.a.createElement("span",{className:"Homepage-Technology-Javascript"},"\xa0JS\xa0")," ","and"," ",r.a.createElement("span",{className:"Homepage-Technology-Dart"},"\xa0Dart\xa0")))),r.a.createElement("div",{className:"Homepage-Sidebar"},r.a.createElement("div",{className:"Homepage-Message-Div"},r.a.createElement(O.a,{delay:2300},r.a.createElement("h1",{className:"Homepage-Message"},"Click Us!"))),r.a.createElement("div",{className:"Homepage-Icons"},r.a.createElement(O.a,{delay:2500},r.a.createElement("a",{href:"https://github.com/Mihir-Achyuta",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Homepage-Icon",icon:k.b,size:"3x"}))),r.a.createElement(O.a,{delay:2500},r.a.createElement("a",{href:"https://www.linkedin.com/in/mihirachyuta/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Homepage-Icon",icon:k.c,size:"3x"}))),r.a.createElement(O.a,{delay:2500},r.a.createElement("a",{href:p.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Homepage-Icon",icon:b.g,size:"3x"}))),r.a.createElement(O.a,{delay:2500},r.a.createElement("a",{href:"mailto:achyutamihir@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Homepage-Icon",icon:b.d,size:"3x"}))))))}}]),t}(r.a.Component),M=t(41),L=t.n(M),C=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"About"},r.a.createElement(O.a,{left:!0,delay:500},r.a.createElement("div",{className:"About-Header-Div"},r.a.createElement(d.Element,{name:"about"},r.a.createElement("h1",{className:"About-Header"},"Who am I?")))),r.a.createElement(O.a,{left:!0,delay:1e3},r.a.createElement("div",{className:"About-Statement-Div",onMouseEnter:this.showAboutOverlay,onMouseLeave:this.dissapearOverlay},r.a.createElement("div",{className:"About-Picture-Div"},r.a.createElement("img",{className:"About-Picture",src:L.a,alt:"Profile Pic"}),r.a.createElement("p",{className:"About-Name"},"Mihir Achyuta")),r.a.createElement("div",{className:"About-Description-Div"},r.a.createElement("p",{className:"About-Description"},"Greetings I'm Mihir. I'm an incoming freshman at Lorum Ipsum University majoring in Computer Science. I started programming junior year of high school in Java and transitioned into Full-Stack JavaScript and Dart for Web/Mobile Applications respectively with my favorite Tech Stack being MERN. When I'm not programming, I'm playing rpg videogames such as the Witcher and Cyberpunk.")))))}}]),t}(r.a.Component),B=t(20),T=t.n(B),A=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Skills"},r.a.createElement(O.a,{left:!0}," ",r.a.createElement("h1",{className:"Skills-Header"},"What I Work With :")),r.a.createElement("div",{className:"Front-Back-Tool"},r.a.createElement(O.a,{top:!0,cascade:!0},r.a.createElement("div",{className:"Skills-Frontend"},r.a.createElement("h1",{className:"Skills-Frontend-Header"},"Frontend :"),r.a.createElement("ul",{className:"Skills-Frontend-Unordered-List"},r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS"),r.a.createElement("li",null,"SASS"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"Javscript"),r.a.createElement("li",null,"jQuery"),r.a.createElement("li",null,"React.js")))),r.a.createElement(O.a,{top:!0,cascade:!0},r.a.createElement("div",{className:"Skills-Backend"},r.a.createElement("h1",{className:"Skills-Backend-Header"},"Backend :"),r.a.createElement("ul",{className:"Skills-Backend-Unordered-List"},r.a.createElement("li",null,"Node.js"),r.a.createElement("li",null,"Express.js"),r.a.createElement("li",null,"EJS"),r.a.createElement("li",null,"MySQL"),r.a.createElement("li",null,"MongoDB"),r.a.createElement("li",null,"Mongoose"),r.a.createElement("li",null,"Passport.js + OAuth"),r.a.createElement("li",null,"REST")))),r.a.createElement(O.a,{top:!0,cascade:!0},r.a.createElement("div",{className:"Skills-Tools"},r.a.createElement("h1",{className:"Skills-Tools-Header"},"Tools :"),r.a.createElement("ul",{className:"Skills-Tools-Unordered-List"},r.a.createElement("li",null,"Git/Git-Bash"),r.a.createElement("li",null,"Github"),r.a.createElement("li",null,"Hyper"),r.a.createElement("li",null,"Atom"),r.a.createElement("li",null,"MongoDB Atlas"))))),r.a.createElement(T.a,{delay:1e3},r.a.createElement(d.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive}," ",r.a.createElement("div",{className:"Skills-Projects-Button-Div"},r.a.createElement(f.a,{className:"Skills-Projects-Button",icon:b.c,size:"5x"})))))}}]),t}(r.a.Component),H=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Projects"},this.props.fadeLeft?r.a.createElement(O.a,{left:!0},r.a.createElement("h1",{className:"Projects-One-Name"},this.props.projectName),r.a.createElement("div",{className:"Projects-One-Div"},r.a.createElement("div",{className:"Projects-One-Text"},r.a.createElement("div",{className:"Projects-One-Description-Div"},r.a.createElement("h2",{className:"Projects-One-Description-Header"},"Description:"),r.a.createElement("p",{className:"Projects-One-Description-Text"},this.props.description)),r.a.createElement("div",{className:"Projects-One-Stack-Div"},r.a.createElement("h2",{className:"Projects-One-Stack-Header"},"Tech Stack:"),r.a.createElement("p",{className:"Projects-One-Stack-Text"},this.props.stack))),r.a.createElement("div",{className:"Projects-One-Images"},r.a.createElement("div",{className:"Projects-One-Image"},r.a.createElement("img",{src:this.props.imgUrl,alt:"Project"})),r.a.createElement("div",{className:"Projects-One-Icons"},r.a.createElement("a",{href:""}," ",r.a.createElement(f.a,{className:"Projects-One-Icon",icon:k.a,size:"2x"})),r.a.createElement("a",{href:""},r.a.createElement(f.a,{color:"#84a7bd",className:"Projects-One-Icon",icon:b.e,size:"2x"})))))):r.a.createElement(O.a,{right:!0},r.a.createElement("h1",{className:"Projects-One-Name"},this.props.projectName),r.a.createElement("div",{className:"Projects-One-Div"},r.a.createElement("div",{className:"Projects-One-Text"},r.a.createElement("div",{className:"Projects-One-Description-Div"},r.a.createElement("h2",{className:"Projects-One-Description-Header"},"Description:"),r.a.createElement("p",{className:"Projects-One-Description-Text"},this.props.description)),r.a.createElement("div",{className:"Projects-One-Stack-Div"},r.a.createElement("h2",{className:"Projects-One-Stack-Header"},"Tech Stack:"),r.a.createElement("p",{className:"Projects-One-Stack-Text"},this.props.stack))),r.a.createElement("div",{className:"Projects-One-Images"},r.a.createElement("div",{className:"Projects-One-Image"},r.a.createElement("img",{src:this.props.imgUrl,alt:"Project"})),r.a.createElement("div",{className:"Projects-One-Icons"},r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"Projects-One-Icon",icon:k.a,size:"2x"})),r.a.createElement("a",{href:""},r.a.createElement(f.a,{className:"Projects-One-Icon",icon:b.e,size:"2x"})))))))}}]),t}(r.a.Component),w=t(42),I=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"handleClick",value:function(){this.props.removeModel()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Submit_Modal"},r.a.createElement("div",{className:"Submit_Modal-Text"},r.a.createElement("p",{className:"Submit_Modal-Paragraph"},this.props.message),r.a.createElement("button",{className:"Submit_Modal-Button",onClick:this.handleClick},"X")))}}]),t}(r.a.Component),x=t(43),P=t.n(x),D=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={name:"",email:"",text:"",formSent:!1,formText:""},n.changeText=n.changeText.bind(Object(u.a)(n)),n.removeModel=n.removeModel.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"changeText",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"removeModel",value:function(){this.setState({formSent:!1})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.setState({formSent:!0}),P.a.post("/api/email",{name:this.state.name,email:this.state.email,text:this.state.text}).then((function(e){e.data.success?a.setState({formSent:!0,formText:"Email sent! I will get back to you as soon as possible"}):a.setState({formSent:!0,formText:"Email not sent. Please email me directly at achyutamihir@gmail.com"})})).catch((function(e){a.setState({formSent:!0,formText:"Email not sent. Please email me directly at achyutamihir@gmail.com"})}))}},{key:"render",value:function(){return r.a.createElement("section",{className:"Contact"},r.a.createElement(O.a,{big:!0,left:!0},r.a.createElement("div",{className:"Contact-Div"},r.a.createElement("h1",{className:"Contact-Header"},"Contact Me!"),r.a.createElement("form",{className:"Contact-Form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"Contact-Name-Div"},r.a.createElement("input",{name:"name",type:"text",placeholder:"Enter Name",className:"Contact-Name-Text Input-Field",value:this.state.name,onChange:this.changeText})),r.a.createElement("div",{className:"Contact-Email-Div"},r.a.createElement("input",{name:"email",type:"text",placeholder:"Enter Email",className:"Contact-Email-Text Input-Field",value:this.state.email,onChange:this.changeText})),r.a.createElement("div",{className:"Contact-Message-Div"},r.a.createElement("input",{name:"text",className:"Contact-Message-Text Input-Field",type:"text",placeholder:"Enter Message",value:this.state.text,onChange:this.changeText})),r.a.createElement("button",{className:"Contact-Button"},"SUBMIT")))),this.state.formSent?r.a.createElement(I,{removeModel:this.removeModel,message:this.state.formText}):null)}}]),t}(r.a.Component),U=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Footer"},r.a.createElement(T.a,{right:!0},r.a.createElement("p",null,"Made by \xa9Mihir-Achyuta"),r.a.createElement("a",{href:"https://github.com/Mihir-Achyuta",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Footer-Icon",icon:k.b,size:"2x"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/mihirachyuta/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Footer-Icon",icon:k.c,size:"2x"})),r.a.createElement("a",{href:p.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Footer-Icon",icon:b.f,size:"2x"})),r.a.createElement("a",{href:"mailto:achyutamihir@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{className:"Footer-Icon",icon:b.d,size:"2x"}))))}}]),t}(r.a.Component),z=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Absolute-Icons"},r.a.createElement(d.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},r.a.createElement(f.a,{className:"Absolute-Icons-Arrow-Up",icon:b.a,size:"2x"})),r.a.createElement(f.a,{onClick:this.props.showMenu,className:"Absolute-Icons-Hamburger",icon:b.b,size:"2x"}))}}]),t}(r.a.Component),R=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(l.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"Sandwich_Menu"},r.a.createElement("ol",{className:"Sandwich_Menu-List"},r.a.createElement(N.a,{delay:500},r.a.createElement(d.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},r.a.createElement("li",{className:"Sandwich-List-Item",onClick:this.props.dissapearMenu},"HOME",r.a.createElement("div",{className:""})))),r.a.createElement(N.a,{delay:700},r.a.createElement(d.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},r.a.createElement("li",{className:"Sandwich-List-Item",onClick:this.props.dissapearMenu},"ABOUT",r.a.createElement("div",{className:""})))),r.a.createElement(N.a,{delay:900},r.a.createElement(d.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},r.a.createElement("li",{className:"Sandwich-List-Item",onClick:this.props.dissapearMenu},"SKILLS",r.a.createElement("div",{className:""})))),r.a.createElement(N.a,{delay:1100},r.a.createElement(d.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},r.a.createElement("li",{className:"Sandwich-List-Item",onClick:this.props.dissapearMenu},"PROJECTS",r.a.createElement("div",{className:""})))),r.a.createElement(N.a,{delay:1300},r.a.createElement(d.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:0,duration:500,onSetActive:this.handleSetActive},r.a.createElement("li",{className:"Sandwich-List-Item",onClick:this.props.dissapearMenu},"CONTACT",r.a.createElement("div",{className:""})))),r.a.createElement(N.a,{delay:1500},r.a.createElement("li",{className:"Sandwich-List-Item NavBar-Resume",onClick:this.props.dissapearMenu},r.a.createElement("a",{href:p.a,target:"_blank",rel:"noopener noreferrer",style:{color:"#18252e"}},"RESUME"),r.a.createElement("div",{className:""})))))}}]),t}(r.a.Component),F=t(21),_=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{icon:F.a,size:"2x",onClick:this.props.dissapearBurgerMenu,className:"X-Burger-Icon"}),r.a.createElement(R,{dissapearMenu:this.props.dissapearBurgerMenu}))}}]),t}(r.a.Component),J=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,{icon:F.a,size:"2x",onClick:this.props.dissapearBottomMenu,className:"X-Icon"}),r.a.createElement(R,{dissapearMenu:this.props.dissapearBottomMenu}))}}]),t}(r.a.Component),G=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={x:0,y:0},n.changeMousePosition=n.changeMousePosition.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.addMouseEventListener()}},{key:"componentWillUnmount",value:function(){var e=this;return function(){return e.removeEventListener()}}},{key:"addMouseEventListener",value:function(){document.addEventListener("mousemove",this.changeMousePosition)}},{key:"removeMouseEventListener",value:function(){document.removeEventListener("mousemove",this.changeMousePosition),console.log("Removed")}},{key:"changeMousePosition",value:function(e){this.setState({x:e.clientX,y:e.clientY})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Cursor",style:{left:this.state.x,top:this.state.y}})}}]),t}(r.a.Component),W=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={bottomMenuShown:!1,burgerMenuShown:!1},n.showBottomMenu=n.showBottomMenu.bind(Object(u.a)(n)),n.dissapearBottomMenu=n.dissapearBottomMenu.bind(Object(u.a)(n)),n.showBurgerMenu=n.showBurgerMenu.bind(Object(u.a)(n)),n.dissapearBurgerMenu=n.dissapearBurgerMenu.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"showBottomMenu",value:function(){this.setState({bottomMenuShown:!0})}},{key:"dissapearBottomMenu",value:function(){this.setState({bottomMenuShown:!1})}},{key:"showBurgerMenu",value:function(){this.setState({burgerMenuShown:!0})}},{key:"dissapearBurgerMenu",value:function(){this.setState({burgerMenuShown:!1})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App-Div"},this.state.bottomMenuShown?r.a.createElement("div",{className:"Menu Menu-Load"},r.a.createElement(J,{dissapearBottomMenu:this.dissapearBottomMenu})):r.a.createElement("div",{className:"Menu"}),this.state.burgerMenuShown?r.a.createElement("div",{className:"Burger-Menu Burger-Menu-Load"},r.a.createElement(_,{dissapearBurgerMenu:this.dissapearBurgerMenu})):r.a.createElement("div",{className:"Burger-Menu"}),r.a.createElement("div",{className:"Header-Homepage"},r.a.createElement(G,null),r.a.createElement(d.Element,{name:"home"},r.a.createElement(g,{showBurgerMenu:this.showBurgerMenu})),r.a.createElement(j,{showBurgerMenu:this.showBurgerMenu}),r.a.createElement(S,null)),r.a.createElement(C,null),r.a.createElement(d.Element,{name:"skills"},r.a.createElement(A,null)),r.a.createElement(d.Element,{name:"projects"},r.a.createElement(H,{projectName:"Project Name 1",description:"Lorem ipsum dolor sit amet, consectetur",stack:"Lorem ipsum dolor sit amet, consectetur",imgUrl:"https://picsum.photos/300/200",fadeLeft:!0}),r.a.createElement(H,{projectName:"Project Name 2",description:"Lorem ipsum dolor sit amet, consectetur",stack:"Lorem ipsum dolor sit amet, consectetur",imgUrl:"https://picsum.photos/300/200"}),r.a.createElement(H,{projectName:"Project Name 3",description:"Lorem ipsum dolor sit amet, consectetur",stack:"Lorem ipsum dolor sit amet, consectetur",imgUrl:"https://picsum.photos/300/200",fadeLeft:!0}),r.a.createElement(H,{projectName:"Project Name 4",description:"Lorem ipsum dolor sit amet, consectetur",stack:"Lorem ipsum dolor sit amet, consectetur",imgUrl:"https://picsum.photos/300/200"})),r.a.createElement(d.Element,{name:"contact"},r.a.createElement(D,null)),r.a.createElement(U,null),r.a.createElement(z,{showMenu:this.showBottomMenu}))}}]),t}(r.a.Component),X=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={pageTransition:!1,showLoader:!0},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){document.body.style.overflow="visible",e.setState((function(e){return{pageTransition:!0}}))}),3500),setTimeout((function(){document.body.style.overflow="visible",e.setState((function(e){return{pageTransition:!1,showLoader:!1}}))}),5500)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"LoadingAnimation-Scene"},r.a.createElement("h1",{className:"LoadingAnimation-Header"},"<","MIHIR","/>"),r.a.createElement("div",{className:"LoadingAnimation-Loader",style:{display:this.state.showLoader?"flex":"none"}},r.a.createElement("div",{className:"LoadingAnimation-Dot Dot-One"}),r.a.createElement("div",{className:"LoadingAnimation-Dot Dot-Two"}),r.a.createElement("div",{className:"LoadingAnimation-Dot Dot-Three"}),r.a.createElement("div",{className:"LoadingAnimation-Dot Dot-Four"}),r.a.createElement("div",{className:"LoadingAnimation-Dot Dot-Five"}))),r.a.createElement("div",{className:this.state.pageTransition?"LoadingAnimation-Transition LoadingAnimation-Transition-Left Transition-Left":"LoadingAnimation-Transition LoadingAnimation-Transition-Left"}),r.a.createElement("div",{className:this.state.pageTransition?"LoadingAnimation-Transition LoadingAnimation-Transition-Right Transition-Right":"LoadingAnimation-Transition LoadingAnimation-Transition-Right"}))}}]),t}(r.a.Component),K=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={contentLoaded:!1},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){document.body.style.overflow="visible",e.setState((function(e){return{contentLoaded:!0}}))}),7500)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.contentLoaded?r.a.createElement(W,null):r.a.createElement(X,null))}}]),t}(r.a.Component);s.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d503f626.chunk.js.map