(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{4927:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_offline",function(){return n(8706)}])},7945:function(r,e,n){"use strict";n.d(e,{Q:function(){return w}});var t=n(1799),u=n(828),s=n(5944),o=n(7294),i=n(7722),a=n(7607),c=n(7568),f=n(1438),l=n(6305),h=n(655),d=n(9828),_=n(9048),k=function(){function r(e){(0,f.Z)(this,r),this.user=e,this.db=(0,d.ad)(_.H),this._bookmarks=null}var e=r.prototype;return e._refresh=function(){var r=this;return(0,c.Z)(function(){var e;return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.PL)((0,d.IO)((0,d.hJ)(r.db,"users",r.user.uid,"bookmarks"))).then(function(r){return r.docs.map(function(r){return r.data()})})];case 1:return e=n.sent(),r._bookmarks=e.sort(function(r,e){return r.name.toLowerCase().localeCompare(e.name.toLowerCase())}),[2,r._bookmarks]}})})()},e.search=function(r){var e=this;return(0,c.Z)(function(){var n,t,u,s,o,i;return(0,h.__generator)(this,function(a){switch(a.label){case 0:return[4,e.read()];case 1:return n=a.sent(),""!==(u=(null!==(t=r.q)&&void 0!==t?t:"").toLowerCase())&&(n=n.filter(function(r){return r.name.toLowerCase().includes(u)})),(o=(null!==(s=(0,l.Z)(new Set(r.tags)))&&void 0!==s?s:[]).filter(function(r){return!!r})).length>0&&(n=n.filter(function(r){return o.every(function(e){return(null!==(i=r.tags)&&void 0!==i?i:[]).includes(e)})})),[2,n]}})})()},e.read=function(){var r=this;return(0,c.Z)(function(){return(0,h.__generator)(this,function(e){return null===r._bookmarks?[2,r._refresh()]:[2,r._bookmarks]})})()},e.create=function(r){var e=this;return(0,c.Z)(function(){return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.pl)((0,d.JU)(e.db,"users",e.user.uid,"bookmarks",r.id),r)];case 1:return n.sent(),[4,e._refresh()];case 2:return n.sent(),[2]}})})()},e.delete=function(r){var e=this;return(0,c.Z)(function(){return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.oe)((0,d.JU)(e.db,"users",e.user.uid,"bookmarks",r))];case 1:return n.sent(),[4,e._refresh()];case 2:return n.sent(),[2]}})})()},e.update=function(r){var e=this;return(0,c.Z)(function(){return(0,h.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,d.r7)((0,d.JU)(e.db,"users",e.user.uid,"bookmarks",r.id),r)];case 1:return n.sent(),[4,e._refresh()];case 2:return n.sent(),[2]}})})()},r}(),b=n(2885),v=n(91),m=function(r){var e=r.children,n=r.user,t=new k(n),i=(0,u.Z)((0,o.useState)([]),2),c=i[0],f=i[1];return(0,o.useEffect)(function(){(0,b.U2)(t).then(f)},[f]),(0,s.tZ)(a.Tm.Provider,{value:{user:n,storage:t},children:(0,s.tZ)(a.bq.Provider,{value:{bookmarks:c,setBookmarks:f},children:e})})},w=function(r){var e=function(e){var n=(0,i.aC)().user;return null===n?(0,s.tZ)(v.cL,{}):(0,s.tZ)(m,{user:n,children:(0,s.tZ)(r,(0,t.Z)({},e))})};return e.displayName="withAuth(".concat(r.displayName||r.name,")"),e}},8706:function(r,e,n){"use strict";n.r(e);var t=n(5944);n(7294);var u=n(91),s=n(7945);e.default=(0,s.Q)(function(){return(0,t.tZ)(u.gV,{})})}},function(r){r.O(0,[18,16,54,20,91,774,888,179],function(){return r(r.s=4927)}),_N_E=r.O()}]);