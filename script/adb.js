var antiAdb = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
var antiAdbK = antiAdb.split("");
var adbChek = document.querySelectorAll(".wc-credit").length;
var adbChekA = document.querySelector(".wc-credit");
var lazyadsense = false;
 window.addEventListener("scroll", function() {
   if (0 != document.documentElement.scrollTop && false === lazyadsense || 0 != document.body.scrollTop && false === lazyadsense) {
     !function() {
       var link = document.createElement("script");
       link.setAttribute("crossorigin", "anonymous");
       link.async = true;
       link.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + caPub;
       link.onerror = function() {
         akadb();
       };
       var wafCss = document.getElementsByTagName("script")[0];
       wafCss.parentNode.insertBefore(link, wafCss);
       window.setTimeout(function() {
         if (null == document.getElementById("aswift_0_host") && null == document.getElementById("aswift_1_host") && null == document.getElementById("aswift_2_host") && null == document.getElementById("aswift_3_host") && null == document.getElementById("aswift_4_host") && null == document.getElementById("aswift_5_host")) {
           akadb();
         }
         if (document.querySelectorAll("ins.adsbygoogle").length <= 0 && 0 === document.querySelector("ins.adsbygoogle").offsetHeight) {
           akadb();
         }
       }, 5E3);
     }();
     lazyadsense = true;
   }, true);
 (function(frame, toArray) {
   if ("function" == typeof define && define.amd) {
     define(toArray);
   } else {
     if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) {
       module.exports = toArray;
     } else {
       frame.adblock = toArray();
     }
   }
 })(undefined, function() {
   var PWWWService = {};
   return PWWWService.check = function(cb, threshold) {
     var caret_insertion = function() {
       var bezierPreviewContainer = document.createElement("div");
       return bezierPreviewContainer.classList.add("adsbygoogle", "ad", "ads", "adsbox", "doubleclick", "ad-placement", "ad-placeholder", "adbadge", "BannerAd"), bezierPreviewContainer.id = "adcontent", document.body.appendChild(bezierPreviewContainer), bezierPreviewContainer;
     }();
     setTimeout(function() {
       var iconCtx = 0 === caret_insertion.offsetLeft && 0 === caret_insertion.offsetTop;
       cb(iconCtx);
     }, threshold || 1E3);
   }, PWWWService;
 });
 adblock.check(function(canCreateDiscussions) {
   if (canCreateDiscussions) {
     akadb();
   }
 }, 1E3);
};
