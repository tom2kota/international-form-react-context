(this["webpackJsonpreact-16"]=this["webpackJsonpreact-16"]||[]).push([[0],{12:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),r=t.n(c),i=t(1),s=t(2),u=t(4),m=t(3),o=l.a.createContext("English"),d=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e="English"===this.context?"Name":"Naam",a="English"===this.context?"Password":"Wachtwoord";return l.a.createElement("div",{className:"two fields"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui left icon input focus"},l.a.createElement("input",{type:"text",placeholder:e}),l.a.createElement("i",{className:"user blue icon"}))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"ui left icon input"},l.a.createElement("input",{type:"password",placeholder:a}),l.a.createElement("i",{className:"lock blue icon"}))))}}]),t}(n.Component);d.contextType=o;var E=d,h=l.a.createContext(void 0,void 0),g=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"renderSubmit",value:function(e){return"English"===e?"SUBMIT":"VOORLEGGEN"}},{key:"renderButton",value:function(e){var a=this;return l.a.createElement("button",{className:"ui inverted button huge fluid ".concat(e)},l.a.createElement(o.Consumer,null,(function(e){return a.renderSubmit(e)})))}},{key:"render",value:function(){var e=this;return l.a.createElement(h.Consumer,null,(function(a){return e.renderButton(a)}))}}]),t}(n.Component),v=function(){return l.a.createElement("div",{className:"ui raised secondary segment"},l.a.createElement("div",{className:"ui huge form"},l.a.createElement(E,null),l.a.createElement(g,null)))},N=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={language:"English"},e.onLanguageChange=function(a){e.setState({language:a})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"ui container"},l.a.createElement("div",{className:"ui stackable menu"},l.a.createElement("div",{className:"item"},l.a.createElement("h2",{className:"ui header blue"},l.a.createElement("a",{href:"/"},l.a.createElement("i",{className:"large icons"},l.a.createElement("i",{className:"home icon"}),l.a.createElement("i",{className:"corner blue world icon"})),"HOME"))),l.a.createElement("div",{className:"right menu"},l.a.createElement("div",{className:"ui compact menu"},l.a.createElement("div",{className:"ui simple dropdown item"},l.a.createElement("span",{className:"ui header sub disabled"},"Select Language"),l.a.createElement("i",{className:"dropdown icon"}),l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"item","data-value":"1",onClick:function(){return e.onLanguageChange("English")}},l.a.createElement("i",{className:"flag gb"}),"\xa0 English"),l.a.createElement("div",{className:"item","data-value":"0",onClick:function(){return e.onLanguageChange("Netherlandish")}},l.a.createElement("i",{className:"flag nl"}),"\xa0 Netherlandish"))))),l.a.createElement("div",{className:"item",onClick:function(){return e.onLanguageChange("English")}},l.a.createElement("i",{className:"flag gb"})),l.a.createElement("div",{className:"item",onClick:function(){return e.onLanguageChange("Netherlandish")}},l.a.createElement("i",{className:"flag nl"}))),l.a.createElement(h.Provider,{value:"violet"},l.a.createElement(o.Provider,{value:this.state.language},l.a.createElement(v,null))))}}]),t}(n.Component);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.0aa5736d.chunk.js.map