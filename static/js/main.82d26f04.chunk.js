(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{32:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(10),s=n(27),u=n.n(s),r=n(26),o=(n(32),n(42)),i=n(44),a=n(40),b=n(43),j=n(41),O=n(37),l=n(38),f=n(21),p=n(39),h=n(6);function d(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),n=e[0],s=e[1],u=Object(c.useState)(!0),d=Object(r.a)(u,2),m=d[0],k=d[1],x=Object(o.a)(1e3);Object(c.useEffect)((function(){var t;return t=x.pipe(Object(a.a)(n),Object(b.a)((function(t){return t+1})),Object(j.a)()).subscribe((function(t){m||s(t)})),function(){return t.unsubscribe()}}),[m,n,x]);return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("span",{className:"timer",children:function(t){return new Date(1e3*t).toISOString().substr(11,8)}(n)}),m&&Object(h.jsx)("button",{onClick:function(){k(!1)},className:"button",children:"Start"}),!m&&Object(h.jsx)("button",{onClick:function(){k(!0),s(0)},className:"button",children:"Stop"}),!m&&n>0&&Object(h.jsx)("button",{onClick:function(t){var e=Object(i.a)(t.target,t.type);e.pipe(Object(O.a)(e.pipe(Object(l.a)(300))),Object(f.a)((function(t){return t.length})),Object(p.a)((function(t){return t>=2}))).subscribe((function(){console.log("It works!"),k(!0)}))},className:"button",children:"Wait"}),n>0&&Object(h.jsx)("button",{onClick:function(){k(!1),s(0)},className:"button",children:"Reset"})]})}u.a.render(Object(h.jsx)(d,{}),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.82d26f04.chunk.js.map