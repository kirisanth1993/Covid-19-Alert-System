(this["webpackJsonpcovid-19-alerts"]=this["webpackJsonpcovid-19-alerts"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=(a(16),a(5)),i=a.n(s),l=a(8),u=a(7),m=a(1),d=a(2),h=a(6),v=a(4),p=a(3),f=(a(18),a(19),a(20),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"Country-block"},r.a.createElement("img",{className:"country-flag",src:"https://www.countryflags.io/".concat(this.props.singleCountryStat.CountryCode,"/shiny/64.png")}),r.a.createElement("h3",{className:"text-center country-heading"},this.props.singleCountryStat.Country),r.a.createElement("div",{className:"row text-left information-text"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},"Active"),r.a.createElement("div",{className:"col-md-4 text-right"},this.props.singleCountryStat.Active)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},"Confirmed"),r.a.createElement("div",{className:"col-md-4 text-right"},this.props.singleCountryStat.Confirmed))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},"Death"),r.a.createElement("div",{className:"col-md-4 text-right"},this.props.singleCountryStat.Deaths)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},"Recovered"),r.a.createElement("div",{className:"col-md-4 text-right"},this.props.singleCountryStat.Recovered))))))}}]),a}(r.a.Component)),y=(a(21),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"country-list"},this.props.covidStatus.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(f,{singleCountryStat:e}))})))}}]),a}(r.a.Component)),E=(a(22),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"form-control input-section",onInput:this.props.searchTextHandler,placeholder:"Search Country .."}))}}]),a}(r.a.Component)),g=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={countries:[],virusStatus:[],searchKey:""},n.searchHandler=n.searchHandler.bind(Object(h.a)(n)),n}return Object(d.a)(a,[{key:"searchHandler",value:function(e){this.setState({searchKey:e.target.value})}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({countries:a}),this.state.countries.forEach(function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/total/country/".concat(t.Slug));case 2:return a=e.sent,e.next=5,a.json();case 5:(r=e.sent).length&&n.setState((function(e){return{virusStatus:e.virusStatus.concat(Object(l.a)(Object(l.a)({},r[r.length-1]),{},{CountryCode:t.ISO2}))}}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){console.log("iner of componentWillUnmount")}},{key:"render",value:function(){var e=this.state,t=e.virusStatus,a=e.searchKey,n=t.filter((function(e){return e.Country.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"pb-4"},r.a.createElement("h1",null,"Covid-19 Alert")),r.a.createElement(E,{searchTextHandler:this.searchHandler}),r.a.createElement(y,{covidStatus:n})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.5f856219.chunk.js.map