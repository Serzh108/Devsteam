(this.webpackJsonpdevsteam_test=this.webpackJsonpdevsteam_test||[]).push([[0],{15:function(e,t,n){e.exports={item:"PhotosItem_item__2UeCq",itemInfo:"PhotosItem_itemInfo__1knU5",itemName:"PhotosItem_itemName__2yt4r",itemNoName:"PhotosItem_itemNoName__3aGxJ"}},26:function(e,t,n){e.exports={container:"PhotosPage_container__3rFcx",photosList:"PhotosPage_photosList__1GM37"}},43:function(e,t,n){e.exports={header:"Header_header__2kIS8"}},44:function(e,t,n){e.exports={btn:"Button_btn__2UHz4"}},45:function(e,t,n){e.exports={fullImage:"SingleImg_fullImage__2hOYd"}},56:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),o=n(18),r=n.n(o),i=n(10),l=n(11),j=n(20),u=n(14),b=n(17),m=n(12),d=Object(b.b)({name:"photos",initialState:{items:[],isLoading:!1},reducers:{getPhotos:function(e,t){var n=t.payload;return Object(m.a)(Object(m.a)({},e),{},{items:Object(u.a)(n.result)})},setIsLoading:function(e,t){t.payload;return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0})},resetIsLoading:function(e,t){t.payload;return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1})}}}),h=Object(u.a)(Object(b.c)({serializableCheck:!1})),p=Object(j.a)({},d.name,d.reducer),O=Object(b.a)({reducer:p,middleware:h}),f=(n(55),n(56),n(3)),x=n(39),g=n(40),_=n.n(g),v=n(23),N=n(25),I=n.n(N),P=n(41),L=n(42),y=n.n(L),k=n(26),w=n.n(k),S=n(43),z=n.n(S);function A(){return Object(c.jsx)("div",{className:z.a.header,children:Object(c.jsx)("span",{children:"Photo from unsplash"})})}var B=n(15),J=n.n(B);function U(e){var t=e.item;return Object(c.jsxs)("li",{className:J.a.item,children:[Object(c.jsx)(i.b,{to:{pathname:"/singleImg",state:{imgSrc:t.urls.full}},children:Object(c.jsx)("img",{src:t.urls.small,alt:"No images"})}),Object(c.jsxs)("div",{className:J.a.itemInfo,children:[Object(c.jsx)("p",{className:t.description?J.a.itemName:J.a.itemNoName,children:t.description?t.description:"No name"}),Object(c.jsxs)("p",{className:J.a.itemName,children:["Author: ",t.user.name]})]})]})}function C(){var e=Object(x.a)(["\n  display: block;\n  margin: 0 auto;\n"]);return C=function(){return e},e}var E=Object(v.css)(C());function F(){var e=Object(l.c)((function(e){return e.photos.isLoading})),t=Object(l.c)((function(e){return e.photos.items})),n=Object(l.b)();return Object(a.useEffect)((function(){n(function(){var e=Object(P.a)(I.a.mark((function e(t,n){var c,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d.actions.setIsLoading()),e.prev=1,e.next=4,y.a.get("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0");case 4:c=e.sent,console.log("New!!! photosArray =",c.data),a=Object(u.a)(c.data),t(d.actions.getPhotos({result:a})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("getPhotos error",e.t0);case 13:t(d.actions.resetIsLoading());case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}())}),[n]),Object(c.jsxs)("div",{className:w.a.container,children:[Object(c.jsx)(A,{}),e&&Object(c.jsx)("div",{style:{position:"absolute",top:"20%",left:"10%",zIndex:"990"},children:Object(c.jsx)(_.a,{size:300,color:"#006cff",css:E,loading:e})}),Object(c.jsx)("ul",{className:w.a.photosList,children:t&&t.map((function(e,t){return Object(c.jsx)(U,{item:e},e.id)}))})]})}var G=n(44),H=n.n(G);function M(e){var t=e.children;return Object(c.jsx)("button",{type:"button",className:H.a.btn,children:t})}var q=n(45),Y=n.n(q);function D(){var e=Object(f.g)(),t=e.state.imgSrc;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:t,alt:"full size",className:Y.a.fullImage}),"/singleImg"===e.pathname&&Object(c.jsx)(i.b,{to:"/",children:Object(c.jsx)(M,{children:"Back to pictures list"})})]})}n(81);var K=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(f.d,{children:[Object(c.jsx)(f.b,{path:"/",exact:!0,component:F}),Object(c.jsx)(f.b,{path:"/singleImg",component:D}),Object(c.jsx)(f.a,{to:"/"})]})})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l.a,{store:O,children:Object(c.jsx)(i.a,{children:Object(c.jsx)(K,{})})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d7318d57.chunk.js.map