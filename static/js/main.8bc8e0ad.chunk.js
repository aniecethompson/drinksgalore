(this["webpackJsonpdrinks-app"]=this["webpackJsonpdrinks-app"]||[]).push([[0],{23:function(n,t,c){},24:function(n,t,c){},31:function(n,t,c){"use strict";c.r(t);c(18);var e=c(1),r=c.n(e),i=c(16),s=c.n(i),o=(c(23),c(7)),a=(c(24),c(8)),j=c(2),l=c(0);var d=function(n){var t=function(n){var t=1,c={};for(var e in n)e==="strIngredient".concat(t)&&null!==n[e]&&(c[n["strIngredient".concat(t)]]=n["strMeasure".concat(t)],t++);return c}(n.drinkInfo);return Object(l.jsxs)("div",{className:"drink",children:[Object(l.jsx)("img",{className:"drink__image",src:n.drinkInfo.strDrinkThumb,alt:n.drinkInfo.strDrink}),Object(l.jsx)("h1",{children:n.drinkInfo.strDrink}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Type:"})," ",n.drinkInfo.strAlcoholic]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Category:"})," ",n.drinkInfo.strCategory]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Glass: "}),n.drinkInfo.strGlass]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Ingredients: "}),Object.keys(t).map((function(n){return"Garnish with"===t[n]?Object(l.jsxs)("li",{children:[t[n]," ",n," "]},n):Object(l.jsxs)("li",{children:[n," ",t[n]]},n)}))]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Instructions:"})," ",n.drinkInfo.strInstructions]})]})};var b=function(n){return Object(l.jsx)(a.b,{to:"/drinks/".concat(n.drink.idDrink),children:Object(l.jsxs)("div",{className:"card",style:{backgroundColor:"#ffe6ff"},children:[Object(l.jsx)("img",{className:"card__image",src:n.drink.strDrinkThumb,alt:n.drink.strDrink}),Object(l.jsx)("p",{children:n.drink.strDrink})]})})};var h=function(){var n=Object(e.useState)([]),t=Object(o.a)(n,2),c=t[0],r=t[1];return Object(e.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic").then((function(n){return n.json()})).then((function(n){return r(n.drinks)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Alcoholic Drinks"}),Object(l.jsx)("div",{className:"cards",children:c.map((function(n){return Object(l.jsx)(b,{drink:n},n.idDrink)}))})]})};var u=function(){var n=Object(e.useState)([]),t=Object(o.a)(n,2),c=t[0],r=t[1];return Object(e.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then((function(n){return n.json()})).then((function(n){return r(n.drinks)}))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Non-Alcoholic Drinks"}),Object(l.jsx)("div",{className:"cards",children:c.map((function(n){return Object(l.jsx)(b,{drink:n},n.idDrink)}))})]})};function f(n){var t=r.a.useState(null),c=Object(o.a)(t,2),e=c[0],i=c[1],s=n.match.params.drinkId;return r.a.useEffect((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(s)).then((function(n){return n.json()})).then((function(n){i(n.drinks[0])}))}),[s]),e?Object(l.jsx)(d,{drinkInfo:e}):"Loading..."}var O=function(){var n=Object(e.useState)({}),t=Object(o.a)(n,2),c=t[0],r=t[1];return Object(e.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(n){return n.json()})).then((function(n){return r(n.drinks[0])}))}),[]),Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("nav",{className:"navbar navbar-light offset-md-2",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"btn btn-outline-primary btn-lg navLink",style:{backgroundColor:"#ffe6ff "},children:Object(l.jsx)(a.b,{to:"/",children:"Drink of the Day"})}),Object(l.jsx)("li",{className:"btn btn-outline-primary btn-lg navLink",style:{backgroundColor:"#ffe6ff "},children:Object(l.jsx)(a.b,{to:"/alcoholic",children:"Alcoholic"})}),Object(l.jsx)("li",{className:"btn btn-outline-primary btn-lg navLink",style:{backgroundColor:"#ffe6ff "},children:Object(l.jsx)(a.b,{to:"/non_alcoholic",children:"Non-Alcoholic"})})]})}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/drinks/:drinkId",component:f}),Object(l.jsx)(j.a,{path:"/alcoholic",children:Object(l.jsx)(h,{})}),Object(l.jsx)(j.a,{path:"/non_alcoholic",children:Object(l.jsx)(u,{})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(d,{drinkInfo:c})})]})]})})},k=function(n){n&&n instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,e=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(n),e(n),r(n),i(n),s(n)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),k()}},[[31,1,2]]]);
//# sourceMappingURL=main.8bc8e0ad.chunk.js.map