(this.webpackJsonppersonal_site_src=this.webpackJsonppersonal_site_src||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){var a={"./profile.jpg":14};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=13},function(e,t,n){e.exports=n.p+"static/media/profile.e73a0f11.jpg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(12),n(1)),s=n(2),l=n(3),u=n(4),m=n(13),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("img",{className:this.props.style,src:m("./"+this.props.src),alt:this.props.alt})}}]),n}(r.a.Component),h=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={show:!0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"tick",value:function(){this.setState({show:!this.state.show})}},{key:"renderBlinkVisible",value:function(){return r.a.createElement("div",{className:"blinkCursor"})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.show?this.renderBlinkVisible():"")}}]),n}(r.a.Component)),f=(n(16),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile_container"},r.a.createElement("div",{className:"profile_image_container"},r.a.createElement(p,{style:"profile_image",src:this.props.content.image,alt:"Avatar"})),r.a.createElement("div",{className:"profile_text_container"},r.a.createElement("p",{className:"profile_text_introduce"},this.props.content.text.introduce),r.a.createElement("div",{className:"profile_text_sub_introduce_container"},r.a.createElement("p",null,this.props.content.text.subintroduce),r.a.createElement(h,null)),r.a.createElement("p",{className:"profile_text_bio"},this.props.content.text.bio)))}}]),n}(r.a.Component)),d=(n(17),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("a",{href:this.props.source}," ",this.props.text)}}]),n}(r.a.Component)),b=(n(18),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.content.map((function(e){return r.a.createElement(d,{source:e.link,text:e.title})}));return r.a.createElement("div",{className:"socialmedia_container"},r.a.createElement("div",{className:"socialmedia_link_spot"},e))}}]),n}(r.a.Component)),v=(n(19),{image:"profile.jpg",text:{introduce:"HI, I'm Matheus",subintroduce:"Software Engineer based on Dublin",bio:"I'm current Software Development Engineer to Amazon Web Services, I love to talk about JavaScript stuff, but I code on Java, C# and Python too. Open source lover, I contributed to some interesting projects, check on my github for more details. Seahawks (NFL) fan, Flamengo (Soccer/football) supporter and GSW (NBA) nation."}}),k=[{title:"Github",link:"https://github.com/matheusmonte"},{title:"Linkedin",link:"https://linkedin.com/in/matheus-monte"},{title:"Twitter",link:"https://twitter.com/mcsmonte"},{title:"YouTube",link:"https://youtube.com/matheusmonte"},{title:"SpeakerDeck",link:"https://speakerdeck.com/matheusmonte"},{title:"Email",link:"mailto:matheusmonte@protonmail.com"}];var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{content:v}),r.a.createElement(b,{content:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.c9181098.chunk.js.map