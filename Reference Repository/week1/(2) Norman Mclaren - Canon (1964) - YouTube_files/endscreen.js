(function(g){var window=this;var tCa=function(a,b,c,d){var e=b.ac();g.U(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.jd(c,d?d:"mqdefault.jpg");var k=b instanceof g.LO?g.dV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==(new g.HQ(f.substr(0,2),f.substr(2))).type;var m=b instanceof g.LO?b.Ia:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,aria_label:b.Ll||g.V("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.ym(c),is_live:m,
is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.JQ&&(c.playlist_length=b.getLength());a.update(c)},y5=function(a,b){g.NH.call(this,{I:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.B=a;this.created=!1},z5=function(a){g.W.call(this,{I:"div",
N:"ytp-upnext",U:{"aria-label":"{{aria_label}}"},P:[{I:"div",N:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{I:"span",N:"ytp-upnext-top",P:[{I:"span",N:"ytp-upnext-header",da:"Up Next"},{I:"span",N:"ytp-upnext-title",da:"{{title}}"},{I:"span",N:"ytp-upnext-author",da:"{{author}}"}]},{I:"a",N:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},P:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},P:[{I:"circle",N:"ytp-svg-autoplay-circle",
U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",N:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",N:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",N:"ytp-upnext-bottom",P:[{I:"span",N:"ytp-upnext-cancel"},{I:"span",N:"ytp-upnext-paused",da:"Autoplay is paused"}]}]});this.D=null;
var b=this.o["ytp-upnext-cancel"];this.D=new g.W({I:"button",ea:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},da:"Cancel"});g.N(this,this.D);this.D.X("click",this.jS,this);this.D.wa(b);this.B=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.F=null;this.J=new g.ou(this.Go,5E3,this);g.N(this,this.J);this.K=0;this.R(this.o["ytp-upnext-autoplay-icon"],"click",this.uU);this.KD();this.R(a,"autonavvisibility",this.KD);this.R(a,"mdxnowautoplaying",
this.IT);this.R(a,"mdxautoplaycanceled",this.JT);this.R(a,"mdxautoplayupnext",this.wG);3==this.B.Ta()&&(a=(a=g.cU(g.WT(this.B)))?a.mL():null)&&this.wG(a)},uCa=function(a,b){a.F=b;
tCa(a,b,g.Y(a.B),"hqdefault.jpg")},A5=function(a,b){if(!a.C){g.mG("a11y-announce","Up Next "+a.F.title);
a.K=g.xG();a.C=new g.ou((0,g.A)(a.rs,a,b),25);a.rs(b);var c=b||g.Y(a.B).experiments.A("autoplay_time")||1E4;a.B.za("onAutonavCoundownStarted",c)}g.Eq(a.element,"ytp-upnext-autoplay-paused")},C5=function(a){B5(a);
a.K=g.xG();a.rs();g.T(a.element,"ytp-upnext-autoplay-paused")},B5=function(a){a.C&&(a.C.dispose(),a.C=null)},D5=function(a,b){b=void 0===b?!1:b;
var c=g.Y(a.B);if(c.experiments.o("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.F.ac(),a.Go(),a.G=new window.Notification("Up Next",{body:d.title,icon:d.jd(c)}),a.H=a.R(a.G,"click",a.kU),a.J.start())}B5(a);a.B.Uk(!1,b)},vCa=function(a){y5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.C=new g.W({I:"div",N:"ytp-subscribe-card",P:[{I:"img",N:"ytp-author-image",U:{src:b.profilePicture}},{I:"div",N:"ytp-subscribe-card-right",P:[{I:"div",N:"ytp-author-name",da:b.author},{I:"div",N:"html5-subscribe-button-container"}]}]});g.N(this,this.C);this.C.wa(this.element);this.D=new g.MZ("Subscribe",null,"Unsubscribe",null,!0,!1,b.Nn,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.D);this.D.wa(this.C.o["html5-subscribe-button-container"]);this.hide()},E5=
function(a){var b=g.Y(a),c=g.zI||g.qf?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",ea:e,U:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},P:[{I:"div",N:"ytp-videowall-still-image",U:{style:"{{background}}"}},{I:"span",N:"ytp-videowall-still-info",P:[{I:"span",N:"ytp-videowall-still-info-bg",P:[{I:"span",N:"ytp-videowall-still-info-content",U:c,P:[{I:"span",N:"ytp-videowall-still-info-title",da:"{{title}}"},{I:"span",
N:"ytp-videowall-still-info-author",da:"{{author_and_views}}"},{I:"span",N:"ytp-videowall-still-info-live",da:"Live"},{I:"span",N:"ytp-videowall-still-info-duration",da:"{{duration}}"}]}]}]},{I:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],P:[{I:"span",N:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",N:"ytp-videowall-still-listlabel-length",P:[" (",{I:"span",da:"{{playlist_length}}"},")"]}]},{I:"span",ea:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
P:[{I:"span",N:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",N:"ytp-videowall-still-listlabel-length",da:" (50+)"}]}]});this.F=d;this.B=a;this.C=null;this.D=new g.VF(this);g.N(this,this.D);this.X("click",this.H);this.X("keypress",this.J);this.D.R(a,"videodatachange",this.G);g.Y(a).W&&(a=a.app.ma,b=this.element,g.Pa(a.o,b),g.Sa(a.o,b),c=String(a.H++),b.setAttribute("data-visual-id",c),g.kf(this,(0,g.A)(a.G,a,b)));this.G()},F5=function(a){y5.call(this,a,"videowall-endscreen");
this.L=a;this.H=0;this.D=[];this.J=this.G=this.F=null;this.K=this.W=!1;this.Z=new g.VF(this);g.N(this,this.Z);this.M=new g.ou(g.Fa(g.T,this.element,"ytp-show-tiles"),0);g.N(this,this.M);var b=new g.W({I:"button",ea:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},P:[g.ZU()]});g.N(this,b);b.wa(this.element);b.X("click",this.lQ,this);this.O=new g.HH({I:"div",N:"ytp-endscreen-content"});g.N(this,this.O);this.O.wa(this.element);b=new g.W({I:"button",ea:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Next"},P:[g.$U()]});g.N(this,b);b.wa(this.element);b.X("click",this.kQ,this);this.C=new z5(a);g.N(this,this.C);g.wU(this.B,this.C.element,4);this.hide()},G5=function(a){return g.yU(a.B)&&a.Zy()&&!a.J},wCa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.HX(g.Y(a.L),b);
g.N(a,b);return b})},H5=function(a){var b=a.Bv();
b!=a.W&&(a.W=b,a.B.V("autonavvisibility"))},I5=function(a){g.GU.call(this,a);
this.A=null;this.B=new g.VF(this);g.N(this,this.B);this.C=g.Y(a);xCa(a)?this.A=new F5(this.o):this.C.Ja?this.A=new vCa(this.o):this.A=new y5(this.o);g.N(this,this.A);g.wU(this.o,this.A.element,4);this.hF();this.B.R(a,"videodatachange",this.hF,this);this.B.R(a,"crn_endscreen",this.hO,this);this.B.R(a,"crx_endscreen",this.iO,this)},xCa=function(a){a=g.Y(a);
return a.rd&&!a.Ja};
g.t(y5,g.NH);y5.prototype.create=function(){this.created=!0};
y5.prototype.destroy=function(){this.created=!1};
y5.prototype.Zy=function(){return!1};
y5.prototype.Bv=function(){return!1};g.t(z5,g.W);g.h=z5.prototype;g.h.Go=function(){this.G&&(this.J.stop(),this.Ha(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.KD=function(){g.MH(this,g.XT(this.B))};
g.h.kU=function(){window.focus();this.Go()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.rs=function(a){a=a||g.Y(this.B).experiments.A("autoplay_time")||1E4;var b=Math.min(g.xG()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.B.Ta()?D5(this,!0):this.C&&this.C.start()};
g.h.uU=function(a){!g.$d(this.D.element,g.JF(a))&&g.JW(a,this.B)&&D5(this)};
g.h.jS=function(){g.$T(this.B,!0)};
g.h.IT=function(a){this.B.Ta();this.show();A5(this,a)};
g.h.wG=function(a){this.B.Ta();this.F&&this.F.ac().videoId==a.ac().videoId||uCa(this,a)};
g.h.JT=function(){this.B.Ta();B5(this);this.hide()};
g.h.Y=function(){B5(this);this.Go();g.W.prototype.Y.call(this)};g.t(vCa,y5);g.t(E5,g.W);E5.prototype.pl=function(){g.BU(this.B,this.element);var a=this.C.ac().videoId,b=this.C.getPlaylistId();g.$_(this.B.app,a,this.C.Yd,b,void 0,void 0,void 0)};
E5.prototype.H=function(a){g.JW(a,this.B,this.F,this.C.Yd||void 0)&&this.pl()};
E5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.OF(a)||(this.pl(),g.NF(a))}};
E5.prototype.G=function(){var a=this.B.getVideoData(),b=g.Y(this.B);this.F=a.isDni?!1:b.o};g.t(F5,y5);g.h=F5.prototype;g.h.create=function(){y5.prototype.create.call(this);var a=this.B.getVideoData();a&&(this.F=wCa(this,a),this.G=a);this.hh();this.Z.R(this.B,"appresize",this.hh);this.Z.R(this.B,"onVideoAreaChange",this.hh);this.Z.R(this.B,"videodatachange",this.mQ);this.Z.R(this.B,"autonavchange",this.HC);this.Z.R(this.B,"autonavcancel",this.jQ);this.Z.R(this.element,"transitionend",this.MV)};
g.h.destroy=function(){g.XF(this.Z);g.nf(this.D);this.D=[];this.F=null;y5.prototype.destroy.call(this);g.Eq(this.element,"ytp-show-tiles");this.M.stop()};
g.h.Zy=function(){return 1!=this.G.autonavState};
g.h.show=function(){y5.prototype.show.call(this);g.Eq(this.element,"ytp-show-tiles");g.Y(this.B).B?g.qu(this.M):this.M.start();(this.K||this.J&&this.J!=this.G.clientPlaybackNonce)&&g.$T(this.B,!1);G5(this)?(H5(this),2==this.G.autonavState?g.Y(this.B).experiments.o("fast_autonav_in_background")&&3==this.B.tj()?D5(this.C,!0):A5(this.C):3==this.G.autonavState&&C5(this.C)):(g.$T(this.B,!0),H5(this))};
g.h.hide=function(){y5.prototype.hide.call(this);C5(this.C);H5(this)};
g.h.MV=function(a){g.JF(a)==this.element&&this.hh()};
g.h.hh=function(){if(this.F&&this.F.length){g.T(this.element,"ytp-endscreen-paginate");var a=g.nU(this.L,!0),b=g.aI(this.L);b&&(b=b.md()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.F.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,r=e/2,v=b<=f-2&&n>=r*m,D=e<=k-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&D)n-=p*m,e+=2;else if(v)n-=r*m,b+=2;else if(D)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.md(a.width/m||1,1,1.21);n*=g.md(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.O.element;g.Th(a,m,n);g.Ah(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});uCa(this.C,this.F[0]);g.U(this.element,"ytp-endscreen-takeover",G5(this));H5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&
2>f?0==k&&0==f&&(r=2):r=2),p=g.nd(p+this.H,l),0!=r){v=this.D[c];v||(v=new E5(this.B),this.D[c]=v,a.appendChild(v.element));D=Math.floor(n*k/e);var G=Math.floor(m*f/b),K=Math.floor(n*(k+r)/e)-D-4,S=Math.floor(m*(f+r)/b)-G-4;g.Hh(v.element,G,D);g.Th(v.element,S,K);g.Ah(v.element,"transitionDelay",(k+f)/20+"s");g.U(v.element,"ytp-videowall-still-mini",1==r);g.U(v.element,"ytp-videowall-still-large",2<r);r=v;p=this.F[p];r.C!=p&&(r.C=p,tCa(r,p,g.Y(r.B),g.Cq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":
"mqdefault.jpg"),v=(p=p.Yd)&&p.itct)&&(p=r.B,g.Y(p).W&&(p=p.app.ma,r=r.element,D=r.getAttribute("data-visual-id"),g.Pa(p.o,r),g.zU(p,"onLogServerVeCreated",{id:D,tracking_params:v})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.D.length-1;b>=c;b--)e=this.D[b],g.Ud(e.element),g.mf(e);this.D.length=c}};
g.h.mQ=function(){var a=this.B.getVideoData();this.G!=a&&(this.H=0,this.F=wCa(this,a),this.G=a,this.hh())};
g.h.kQ=function(){this.H+=this.D.length;this.hh()};
g.h.lQ=function(){this.H-=this.D.length;this.hh()};
g.h.pN=function(){return!!this.C.C};
g.h.HC=function(a){1==a?(this.K=!1,this.J=this.G.clientPlaybackNonce,B5(this.C),this.A&&this.hh()):(this.K=!0,this.A&&G5(this)&&(2==a?A5(this.C):3==a&&C5(this.C)))};
g.h.jQ=function(a){if(a){for(a=0;a<this.D.length;a++)g.CU(this.L,this.D[a].element,!0);this.HC(1)}else this.J=null,this.K=!1;this.hh()};
g.h.Bv=function(){return this.A&&G5(this)};g.t(I5,g.GU);g.h=I5.prototype;g.h.hC=function(){var a=this.o.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!xCa(this.o)||b;a=g.pP(a,"ypc_module");var c=g.E_(this.o.app);return b&&!a&&!c};
g.h.gC=function(){return this.A.Bv()};
g.h.lN=function(){return this.gC()?this.A.pN():!1};
g.h.Y=function(){g.uU(this.o,"endscreen");g.GU.prototype.Y.call(this)};
g.h.load=function(){g.GU.prototype.load.call(this);this.A.show()};
g.h.unload=function(){g.GU.prototype.unload.call(this);this.A.hide();this.A.destroy()};
g.h.hO=function(a){this.hC()&&(this.A.created||this.A.create(),"load"==a.getId()&&this.load())};
g.h.iO=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.hF=function(){g.uU(this.o,"endscreen");var a=Math.max(1E3*(this.o.getVideoData().lengthSeconds-10),0);a=new g.FQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.FQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.qU(this.o,[a,b])};g.CX.endscreen=I5;})(_yt_player);
