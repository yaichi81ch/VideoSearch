(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),l=a(8),s=a.n(l),o=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),h=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.handleChange=function(e){a.setState({term:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term),a.setState({term:""})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{className:"ui form",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.handleChange})),i.a.createElement("input",{type:"submit",value:"Search"})))}}]),t}(i.a.Component),b=(a(26),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},i.a.createElement("img",{src:t.snippet.thumbnails.medium.url,alt:t.snippet.title,className:"ui image"}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),f=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(b,{onVideoSelect:a,video:e,key:e.id.videoId})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},E=a(17),S=a.n(E).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDj9bBNjFZbSszFhixLZy6Ea2rNqzRZBy4"}}),y=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Type something!");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{title:"video player",src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],onVideoSelect:null,selectedVideo:null},a.onTermSubmit=function(){var e=Object(o.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("cat")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(h,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(y,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(f,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component),N=document.getElementById("root");c.a.render(i.a.createElement(w,null),N)}},[[18,2,1]]]);
//# sourceMappingURL=main.69595f99.chunk.js.map