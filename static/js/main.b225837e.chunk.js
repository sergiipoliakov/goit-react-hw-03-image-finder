(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a(1),r=a.n(o),c=a(18),s=a.n(c),i=(a(26),a(27),a(9)),l=a(4),u=a(5),h=a(7),m=a(6),g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:"Searchbar",onSubmit:this.handleSubmit,children:Object(n.jsxs)("form",{className:"SearchForm",children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})]})})}}]),a}(o.Component);function d(e){var t=e.images,a=e.onClick;return Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{onClick:a,src:e.webformatURL,"data-sourse":e.largeImageURL,alt:"",className:"ImageGalleryItem-image"})},e.id)}))})}function j(e){var t=e.images,a=e.onClick;return Object(n.jsx)("div",{children:Object(n.jsx)("ul",{className:"ImageGallery",children:Object(n.jsx)(d,{images:t,onClick:a})})})}function p(e){var t=e.onClick;return Object(n.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})}var b=a(19),f=a.n(b);function v(e){return Object(n.jsx)("div",{children:e})}var O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose(t)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Overlay",children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:this.props.largeImageURL,alt:""})})})}}]),a}(o.Component),y=a(20),x=a.n(y),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return x.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19156782-f4e949a45fa5f59b2c0db0877&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],loading:!1,error:null,searchQuery:"",page:1,showModal:!1,largeImageURL:null},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),w(a,n).then((function(t){console.log(t),e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchBarSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.toggleModal=function(t){var a=t.target.dataset.sourse;e.setState((function(e){return{showModal:!e.showModal,largeImageURL:a}}))},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery,o=(t.page,this.state.page);a!==n&&this.fetchImages(),o>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.loading,o=e.error,r=e.showModal,c=e.largeImageURL;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(g,{onSubmit:this.handleSearchBarSubmit}),o&&Object(n.jsx)(v,{message:"Whoops, something went wrong:".concat(o.message)}),a&&Object(n.jsx)(f.a,{type:"Circles",color:"#00BFFF",height:100,width:100,timeout:0}),t.length>0&&!a&&Object(n.jsx)(j,{images:t,onClick:this.toggleModal}),t.length>0&&!a&&Object(n.jsx)(p,{onClick:this.fetchImages}),r&&Object(n.jsx)(O,{largeImageURL:c,onClose:this.toggleModal})]})}}]),a}(o.Component);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.b225837e.chunk.js.map