(this["webpackJsonpreact-16"]=this["webpackJsonpreact-16"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),i=a(1),u=a(2),o=a(4),s=a(3),m=r.a.createContext("English"),d=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e="English"===this.context?"Name":"Naam",t="English"===this.context?"Password":"Wachtwoord";return r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input focus"},r.a.createElement("input",{type:"text",placeholder:e}),r.a.createElement("i",{className:"user outline icon"}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"ui left icon input"},r.a.createElement("input",{type:"password",placeholder:t}),r.a.createElement("i",{className:"lock icon"}))))}}]),a}(n.Component);d.contextType=m;var E=d,h=r.a.createContext(void 0,void 0),g=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderSubmit",value:function(e){return"English"===e?"SUBMIT":"VOORLEGGEN"}},{key:"renderButton",value:function(e){var t=this;return r.a.createElement("button",{className:"ui inverted button huge ".concat(e)},r.a.createElement(m.Consumer,null,(function(e){return t.renderSubmit(e)})))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.Consumer,null,(function(t){return e.renderButton(t)}))}}]),a}(n.Component),v=function(){return r.a.createElement("div",{className:"ui raised secondary segment"},r.a.createElement("div",{className:"ui huge form"},r.a.createElement(E,null),r.a.createElement(g,null)))},f=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={language:"English"},e.onLanguageChange=function(t){e.setState({language:t})},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui container"},r.a.createElement("h2",{className:"ui header blue"},"Select a Language:",r.a.createElement("i",{className:"large icons"},r.a.createElement("i",{className:"flag gb",onClick:function(){return e.onLanguageChange("English")}}),r.a.createElement("i",{className:"flag nl",onClick:function(){return e.onLanguageChange("Netherlandish")}}))),r.a.createElement(h.Provider,{value:"green"},r.a.createElement(m.Provider,{value:this.state.language},r.a.createElement(v,null))))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.4e1c4146.chunk.js.map