!function(n){function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(n,e,t){"use strict";!function(n){var e=window.services.restClient;n(function(){function t(){e.getOrders().done(function(n){l.html(a({orders:n}))})}function o(){n(".js-non-user").toggle(!e.isLogin()),n(".js-user").toggle(e.isLogin()),e.isLogin()&&t()}var r=n("#createPizza"),i=n("#login"),c=n("#logout"),u=n("#pizzaName"),l=n("#ordersContainer"),a=Handlebars.compile(n("#orders-template").html());r.click(function(n){e.createPizza(u.val()).done(function(n){t()}).fail(function(n){}),u.val(""),n.preventDefault()}),i.click(function(){e.login("admin@admin.ch","123456").then(o)}),c.click(function(){e.logout().then(o)}),n(l).on("click",".js-delete",function(o){e.deleteOrder(n(o.currentTarget).data("id")).done(t)}),o()})}(jQuery)}]);